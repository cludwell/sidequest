import Image from "next/image";
import { useEffect, useState } from "react";
import woodElf from "../../public/images/woodelf3.jpeg";
import ElfInfo from "./ElfInfo";
import { SetRaceProps } from "../../lib/setRaceProps";
import IconDoubleChevron from "./icons/IconDoubleChevron";

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
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_9.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={woodElf}
            className="object-cover m-2 rounded-md aspect-square"
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
          <h3 className="mb-4 text-4xl font-bold text-center sm:text-5xl almendra">
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
