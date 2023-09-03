import Image from "next/image";
import { useEffect, useState } from "react";
import woodElf from "../../../public/images/woodelf3.jpeg";
import ElfInfo from "./ElfInfo";

declare global {
  interface Window {
    my_modal_9: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalWoodElf() {
  const [expand, setExpanded] =useState<string|null>(null)
  useEffect(() => {
    const myModal9 = document.getElementById("my_modal_9");
    if (myModal9) window.my_modal_9 = myModal9;
  }, []);

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_9.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={woodElf}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Wood Elf
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
      <dialog id="my_modal_9" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Wood Elf</h3>
          <ElfInfo expand={expand} setExpanded={setExpanded} type={'wood'} />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
