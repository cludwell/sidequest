import { useRef } from "react";

export default function LogInModal() {
  const credentialRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <button className="btn btn-accent" onClick={() => window.my_modal_2.showModal()}>
        log in
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box flex flex-col">
          <h3 className="font-bold text-lg">Log In</h3>
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
