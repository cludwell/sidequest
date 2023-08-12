import { useEffect, useState } from "react";

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

  useEffect(() => {
    const myModalSignUp = document.getElementById("my_modal_signup");
    if (myModalSignUp) window.my_modal_signup = myModalSignUp;
  }, []);

  const validate = () => {
    const err: string[] = [];
    if (!email || !email.includes("@") || !email.includes("."))
      err.push("Please enter a valid email.");
    if (!password || password.length < 6 || !password)
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
    awa
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
        <form method="dialog" className="modal-box flex flex-col">
          <h3 className="font-bold text-3xl almendra">Sign Up</h3>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mb-4 border-2 rounded border-slate-300"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 border-2 rounded border-slate-300"
          />
          <input
            type="password"
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
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
