import Image from "next/image";
import { useEffect, useState } from "react";
import highElf from "../../public/images/elf4.jpeg";
import ElfInfo from "./ElfInfo";
import { SetRaceProps } from "../../lib/setRaceProps";
import { cantrips } from "../../lib/_Cantrips";
import { wizardCantrips } from "../../lib/_wizardCantrips";
import IconDoubleChevron from "./icons/IconDoubleChevron";
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

  const raceHighElf = async () => {
    setRace({
      race: "High Elf",
      languages: ["Common", "Elvish", language],
      spells: [cantrip],
      vision: "Darkvision (60 feet).",
      inventory: [],
      specialty: [],
      tools: [],
    });
    window.my_modal_18.close();
    window.location.href = "#item2";
  };

  return (
    <>
      <button
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_8.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={highElf}
            className="object-cover m-2 rounded-md aspect-square"
            alt="portrait preview"
            width={50}
            height={50}
          />
          High Elf
        </span>
       <IconDoubleChevron />
      </button>
      <dialog id="my_modal_8" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="mb-4 text-4xl font-bold text-center sm:text-5xl almendra">
            High Elf
          </h3>

          <ElfInfo expand={expand} setExpanded={setExpanded} type={"high"} />

          <div className="flex flex-col items-center">
            <select
              className="w-full max-w-xs my-4 select select-primary"
              value={cantrip}
              onChange={(e) => setCantrip(e.target.value)}
            >
              <option disabled value={""}>
                Select a Cantrip
              </option>
              {wizardCantrips.map((cant, i) => (
                <option key={i} value={`${cant}`}>
                  {cant.name}, {cant.range}, {cant.duration}
                </option>
              ))}
            </select>
            <select
              className="w-full max-w-xs my-4 select select-secondary"
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
            <button className="m-4 btn btn-success btn-wide" onClick={raceHighElf}>
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
