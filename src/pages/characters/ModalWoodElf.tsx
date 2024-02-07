import Image from "next/image";
import { useEffect, useState } from "react";
import woodElf from "../../../public/images/woodelf3.jpeg";
import ElfInfo from "./ElfInfo";
import { SetRaceProps } from "../../../lib/setRaceProps";
import IconDoubleChevron from "../../components/icons/IconDoubleChevron";

declare global {
  interface Window {
    my_modal_9: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalWoodElf({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal9 = document.getElementById("my_modal_9");
    if (myModal9) window.my_modal_9 = myModal9;
  }, []);
  const raceWoodElf = async () => {
    setRace({
      race: "Wood Elf",
      vision: "Darkvision (60 feet).",
      specialty: ["Mask of the Wild"],
      languages: ["Common", "Elvish"],
      inventory: [],
      spells: [],
      tools: [],
    });
    window.my_modal_9.close();
    window.location.href = "#item2";
  };

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
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_9" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-4xl sm:text-5xl mb-4 almendra text-center">
            Wood Elf
          </h3>
          <ElfInfo expand={expand} setExpanded={setExpanded} type={"wood"} />
          <div className="flex flex-row justify-center">
            <button className="btn btn-success btn-wide" onClick={raceWoodElf}>
              Select Wood Elf
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
