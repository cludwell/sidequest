import Image from "next/image";
import { useEffect, useState } from "react";
import eladrin from "../../../public/images/eladrin.jpg";
import ElfInfo from "./ElfInfo";
import { SetRaceProps } from "../../../lib/setRaceProps";

declare global {
  interface Window {
    my_modal_10: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalEladrinElf({race, setRace}: SetRaceProps) {
  const [expand, setExpanded] =useState<string|null>(null)
  useEffect(() => {
    const myModal10 = document.getElementById("my_modal_10");
    if (myModal10) window.my_modal_10 = myModal10;
  }, []);
  const raceEladrin = async () => setRace("Eladrin Elf");

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_10.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={eladrin}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Eladrin Elf
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#05C3DD"
          className="w-6 h-6 "
        >
          <path
            fillRule="evenodd"
            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <dialog id="my_modal_10" className="modal">
        <form method="dialog" className="modal-box">
        <h3 className="font-bold text-5xl mb-4 almendra text-center">Eladrin Elf</h3>
          <ElfInfo expand={expand} setExpanded={setExpanded} type={'eladrin'}/>
          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide"
              onClick={raceEladrin}
            >
              Select Eladrin Elf
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
