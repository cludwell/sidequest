import Image from "next/image";
import { useEffect, useState } from "react";
import highElf from "../../../public/images/elf4.jpeg";
import ElfInfo from "./ElfInfo";
import { SetRaceProps } from "../../../lib/setRaceProps";
import { cantrips } from "./Cantrips";
import { wizardCantrips } from "./_wizardCantrips";
declare global {
  interface Window {
    my_modal_8: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalHighElf({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>("");
  const [cantrip, setCantrip] = useState<string>("");
  useEffect(() => {
    const myModal8 = document.getElementById("my_modal_8");
    if (myModal8) window.my_modal_8 = myModal8;
  }, []);

  const availableLanguages = [
    "Abyssal",
    "Aquan",
    "Auran",
    "Celestial",
    "Deep Speech",
    "Draconic",
    "Dwarvish",
    "Giant",
    "Gnomish",
    "Goblin",
    "Halfling",
    "Infernal",
    "Orc",
    "Primordial",
    "Sylvan",
    "Terran",
    "Undercommon",
  ];

  const raceHighElf = async () =>
    setRace({
      race: "High Elf",
      languages: ["Common", "Elvish", language],
      spells: [cantrip],
      vision: "Darkvision (60 feet).",
    });

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_8.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={highElf}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          High Elf
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
      <dialog id="my_modal_8" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-5xl mb-4 almendra text-center">
            High Elf
          </h3>

          <ElfInfo expand={expand} setExpanded={setExpanded} type={"high"} />

          <div className="flex flex-col items-center">
            <select
              className="select select-primary w-full max-w-xs  my-4"
              value={cantrip}
              onChange={(e) => setCantrip(e.target.value)}
            >
              <option disabled value={""}>
                Select a Cantrip
              </option>
              {wizardCantrips.map((cant, i) => (
                <option key={i} value={`${cant}`}>
                  {cant}
                </option>
              ))}
            </select>
            <select
              className="select select-secondary w-full max-w-xs my-4"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option disabled value={""}>
                Select an Additional Language
              </option>
              {availableLanguages.map((lang, i) => (
                <option key={i} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <button className="btn btn-success btn-wide" onClick={raceHighElf}>
              Select High-Elf
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
