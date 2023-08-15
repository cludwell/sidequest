import { signIn as signInNextAuth } from "next-auth/react";
import { signIn } from "@/store/session";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

declare global {
  interface Window {
    my_modal_signup: any; // Replace `any` with the type of your modal if possible
  }
}

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const myModalSignUp = document.getElementById("my_modal_signup");
    if (myModalSignUp) window.my_modal_signup = myModalSignUp;
  }, []);

  const validate = () => {
    const err: string[] = [];
    if (!email || !email.includes("@") || !email.includes("."))
      err.push("Please enter a valid email.");
    if (!password || password.length < 6)
      err.push("Passwords must be at least 6 characters.");
    if (password !== confirmPassword)
      err.push("Password and password confirmation must match.");
    if (!username || username.length < 6)
      err.push("Usernames must be at least 6 characters.");
    setErrors(err);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();
    if (errors.length) return;

    try {
      await dispatch(signIn({ email, password, username, profilePic }));
      // await signInNextAuth("credentials", { email, password });
    } catch (error) {
      // Handle any errors that might occur during sign up or sign in
      console.error("Error during sign up or sign in:", error);
    }
  };
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button
        className="btn btn-primary"
        onClick={() => window.my_modal_signup.showModal()}
      >
        Sign up
      </button>
      <dialog id="my_modal_signup" className="modal">
        <form
          method="dialog"
          className="modal-box flex flex-col"
          onSubmit={handleSubmit}
        >
          <h3 className="font-bold text-3xl almendra">Sign Up</h3>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="my-4 border-2 rounded border-slate-300"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 border-2 rounded border-slate-300"
          />
          <input
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile Pic URL"
            className="mb-4 border-2 rounded border-slate-300"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 border-2 rounded border-slate-300"
          />
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="mb-4 border-2 rounded border-slate-300"
          />
          {errors.length
            ? errors.map((error, idx) => (
                <div className="alert alert-error mb-4" key={`error${idx}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              ))
            : null}
          <button className="btn btn-accent mb-4" type="submit">
            submit
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
