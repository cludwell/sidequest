import Image from "next/image";
import { useEffect, useState } from "react";
import stout from "../../public/images/stout5.png";
import HalflingInfo from "./HalflingInfo";
import { SetRaceProps } from "../../lib/setRaceProps";
import IconDoubleChevron from "./icons/IconDoubleChevron";

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
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_16.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={stout}
            className="object-cover m-2 rounded-md aspect-square"
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
          <h3 className="mb-4 text-4xl font-bold text-center sm:text-5xl almendra">
            Stout Halfling
          </h3>
          <HalflingInfo
            expand={expand}
            setExpanded={setExpanded}
            type={"stout"}
          />
          <div className="flex flex-row justify-center">
            <button
              className="m-4 btn btn-success btn-wide"
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
