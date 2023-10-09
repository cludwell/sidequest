import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { logInRequest } from "@/store/session";

declare global {
  interface Window {
    my_modal_2: any; // Replace `any` with the type of your modal if possible
  }
}

export default function LogInModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const validate = () => {
    const err: string[] = [];
    if (!email || !email.includes("@") || !email.includes("."))
      err.push("Please enter a valid email.");
    if (!password || password.length < 6 || !password)
      err.push("Passwords must be at least 6 characters");
    setErrors(err);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();
    if (errors.length) return;
    if (email && password) {
      await signIn("credentials", { email, password, action: 'signin' });
      await dispatch(logInRequest({ email, password }));
    }
  };

  const demoSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email: "jerry@seinmail.com",
      password: "password",
    });
    await dispatch(
      logInRequest({ email: "jerry@seinmail.com", password: "password" })
    );
    window.my_modal_2.close()
};


  useEffect(() => {
    const myModal2 = document.getElementById("my_modal_2");
    if (myModal2) window.my_modal_2 = myModal2;
  }, []);

  return (
    <>
      <button
        className="btn btn-accent m-2"
        onClick={() => window.my_modal_2.showModal()}
      >
        log in
      </button>
      <dialog id="my_modal_2" className="modal">
        <form
          method="dialog"
          className="modal-box flex flex-col"
          onSubmit={handleSubmit}
        >
          <h3 className="font-bold text-3xl almendra">Log In</h3>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="my-4 border-2 rounded border-slate-300"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 border-2 rounded border-slate-300"
          />
          {errors?.map((error, idx) => (
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
          ))}
          <button className="btn btn-accent mb-4" type="submit">
            submit
          </button>
          <button className="btn btn-secondary" onClick={(e) => demoSignIn(e)}>
            Demo User
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
