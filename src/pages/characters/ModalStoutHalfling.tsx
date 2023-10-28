import Image from "next/image";
import { useEffect, useState } from "react";
import stout from "../../../public/images/stout5.png";
import HalflingInfo from "./HalflingInfo";
import { SetRaceProps } from "../../../lib/setRaceProps";
import IconDoubleChevron from "../IconDoubleChevron";

declare global {
  interface Window {
    my_modal_16: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalStoutHalfing({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal16 = document.getElementById("my_modal_16");
    if (myModal16) window.my_modal_16 = myModal16;
  }, []);
  const raceStoutHalfing = async () => {
    setRace({
      race: "Stout Halfing",
      languages: ["Common", "Halfling"],
      vision: "Normal",
      inventory: [],
      spells: [],
      tools: [],
      specialty: [],
    });
    window.my_modal_16.close();
    window.location.href = "#item2";
  };

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
        <IconDoubleChevron/>
      </button>
      <dialog id="my_modal_16" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-4xl sm:text-5xl mb-4 almendra text-center">
            Stout Halfling
          </h3>
          <HalflingInfo
            expand={expand}
            setExpanded={setExpanded}
            type={"stout"}
          />
          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide m-4"
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
