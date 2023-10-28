import Image from "next/image";
import { useEffect, useState } from "react";
import eladrin from "../../../public/images/eladrin.jpg";
import ElfInfo from "./ElfInfo";
import { SetRaceProps } from "../../../lib/setRaceProps";
import IconDoubleChevron from "../IconDoubleChevron";

declare global {
  interface Window {
    my_modal_10: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalEladrinElf({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal10 = document.getElementById("my_modal_10");
    if (myModal10) window.my_modal_10 = myModal10;
  }, []);
  const raceEladrin = async () => {
    setRace({
      race: "Eladrin Elf",
      languages: ["Common", "Elvish"],
      spells: ["Fey Step"],
      vision: "Darkvision (60 feet).",
      inventory: [],
      specialty: [],
      tools: [],
    });
    window.my_modal_10.close();
    window.location.href = "#item2";
  };

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
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_10" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-4xl sm:text-5xl mb-4 almendra text-center">
            Eladrin Elf
          </h3>
          <ElfInfo expand={expand} setExpanded={setExpanded} type={"eladrin"} />
          <div className="flex flex-row justify-center">
            <button className="btn btn-success btn-wide m-4" onClick={raceEladrin}>
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
