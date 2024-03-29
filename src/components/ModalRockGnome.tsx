import Image from "next/image";
import { useEffect, useState } from "react";
import deepGnome from "../../public/images/gnome.jpg";
import GnomeInfo from "./GnomeInfo";
import { SetRaceProps } from "../../lib/setRaceProps";
import IconDoubleChevron from "./icons/IconDoubleChevron";

declare global {
  interface Window {
    my_modal_11: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalRockGnome({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal11 = document.getElementById("my_modal_11");
    if (myModal11) window.my_modal_11 = myModal11;
  }, []);
  const raceRockGnome = async () => {
    setRace({
      race: "Rock Gnome",
      languages: ["Common", "Gnomish"],
      inventory: ["Tinker's Tools"],
      specialty: ["Tinker's Tools"],
      vision: "Darkvision (60 feet).",
      spells: [],
      tools: [],
    });
    window.my_modal_11.close();
    window.location.href = "#item2";
  };

  return (
    <>
      <button
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_11.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={deepGnome}
            className="object-cover m-2 rounded-md aspect-square"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Rock Gnome
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_11" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="mb-4 text-4xl font-bold text-center sm:text-5xl almendra">
            Rock Gnome
          </h3>
          <GnomeInfo expand={expand} setExpanded={setExpanded} type={"rock"} />
          <div className="flex flex-row justify-center">
            <button
              className="m-4 btn btn-success btn-wide"
              onClick={raceRockGnome}
            >
              Select Rock Gnome
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
