import Image from "next/image";
import { useEffect, useState } from "react";
import stout from "../../../public/images/stout5.png";
import HalflingInfo from "./HalflingIngo";
import { SetRaceProps } from "../../../lib/setRaceProps";

declare global {
  interface Window {
    my_modal_16: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalStoutHalfing({race, setRace}: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal16 = document.getElementById("my_modal_16");
    if (myModal16) window.my_modal_16 = myModal16;
  }, []);
  const raceStoutHalfing = async () => setRace({race: "Stout Halfing", languages: ['Common', 'Halfling']});

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_16.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={stout}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Stout Halfling
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
      <dialog id="my_modal_16" className="modal">
        <form method="dialog" className="modal-box">
        <h3 className="font-bold text-5xl mb-4 almendra text-center">Stout Halfling</h3>
          <HalflingInfo
            expand={expand}
            setExpanded={setExpanded}
            type={"stout"}
          />
                    <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide"
              onClick={raceStoutHalfing}
            >
              Select Stout Halfling
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
