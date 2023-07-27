import { login } from "@/store/session";
import { error } from "console";
import { NextApiResponse } from "next";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    my_modal_2: any; // Replace `any` with the type of your modal if possible
  }
}

type LoginResult = {
  message?: string;
  errors?: string[];
};

export default function LogInModal() {
  const credentialRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const email = credentialRef.current?.value; // Extract email value from the ref
  const password = passwordRef.current?.value; // Extract password value from the ref

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
      const result = await login(email, password);
      console.log('======================HANDLESUBMiT')
    }
  };

  useEffect(() => {
    const myModal2 = document.getElementById("my_modal_2");
    if (myModal2) window.my_modal_2 = myModal2;
  }, []);

  return (
    <>
      <button
        className="btn btn-accent mx-4"
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
          <h3 className="font-bold text-xl almendra">Log In</h3>
          <input
            type="text"
            ref={credentialRef}
            placeholder="Credential"
            className="m-2 border-2 rounded border-slate-300"
          />
          <input
            type="text"
            ref={passwordRef}
            placeholder="Password"
            className="m-2 border-2 rounded border-slate-300"
          />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
