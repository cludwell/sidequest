import { useEffect } from "react";

declare global {
  interface Window {
    my_modal_signup: any; // Replace `any` with the type of your modal if possible
  }
}

export default function SignUp() {

  useEffect(() => {
    const myModalSignUp = document.getElementById("my_modal_signup");
    if (myModalSignUp) window.my_modal_signup = myModalSignUp;
  }, []);

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
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
