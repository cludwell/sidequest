import Image from "next/image";
import { useEffect } from "react";
import lightfoot from "../../../public/images/lightfoot9.jpeg";

declare global {
  interface Window {
    my_modal_15: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalLightfootHalfing() {
  useEffect(() => {
    const myModal15 = document.getElementById("my_modal_15");
    if (myModal15) window.my_modal_15 = myModal15;
  }, []);

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_15.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={lightfoot}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Lightfoot Halfling
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#05C3DD"
          className="w-6 h-6 "
        >
          <path
            fill-rule="evenodd"
            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <dialog id="my_modal_15" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Lightfoot Halfling</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
