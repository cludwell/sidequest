import Image from "next/image";
import { useEffect, useState } from "react";
import eladrin from "../../public/images/eladrin.jpg";
import ElfInfo from "./ElfInfo";
import { SetRaceProps } from "../../lib/setRaceProps";
import IconDoubleChevron from "./icons/IconDoubleChevron";

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
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_10.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={eladrin}
            className="object-cover m-2 rounded-md aspect-square"
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
          <h3 className="mb-4 text-4xl font-bold text-center sm:text-5xl almendra">
            Eladrin Elf
          </h3>
          <ElfInfo expand={expand} setExpanded={setExpanded} type={"eladrin"} />
          <div className="flex flex-row justify-center">
            <button className="m-4 btn btn-success btn-wide" onClick={raceEladrin}>
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
