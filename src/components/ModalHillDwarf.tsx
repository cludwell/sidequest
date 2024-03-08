import Image from "next/image";
import { useEffect, useState } from "react";
import hillDwarf from "../../public/images/dwarf2.jpeg";
import hillDetail from "../../public/images/dwarf8.jpg";
import DwarfInfo from "./DwarfInfo";
import { SetRaceProps } from "../../lib/setRaceProps";
import IconDoubleChevron from "./icons/IconDoubleChevron";
declare global {
  interface Window {
    my_modal_6: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalHillDwarf({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [tools, setTools] = useState<string>("");

  useEffect(() => {
    const myModal6 = document.getElementById("my_modal_6");
    if (myModal6) window.my_modal_6 = myModal6;
  }, []);
  const raceHillDwarf = async () => {
    setRace({
      race: "Hill Dwarf",
      languages: ["Common", "Dwarvish"],
      inventory: [tools],
      specialty: [tools],
      tools: [tools],
      vision: "Darkvision (60 feet).",
      spells: [],
    });
    window.my_modal_6.close();
    window.location.href = "#item2";
  };

  return (
    <>
      <button
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_6.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={hillDwarf}
            className="object-cover m-2 rounded-md aspect-square"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Hill Dwarf
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_6" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="mb-4 text-4xl font-bold text-center sm:text-5xl almendra">
            Hill Dwarf
          </h3>
          <Image
            src={hillDetail}
            alt="detail image"
            width={800}
            height={800}
            className="object-cover rounded-xl aspect-square"
          />
          <p className="py-4"></p>
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-4"
              checked={expand === "HILL_DWARF"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HILL_DWARF" ? "HILL_DWARF" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">Hill Dwarf</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Bold and hardy, dwarves are known as skilled warriors, miners,
                and workers of stone and metal.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                As a hill dwarf, you have keen senses, deep intuition, and
                remarkable resilience. The gold dwarves of Faerûn in their
                mighty southern kingdom are hill dwarves, as are the exiled
                Neidar and the debased Klar of Krynn in the Dragonlance setting.
              </p>
            </div>
          </div>
          <DwarfInfo expand={expand} setExpanded={setExpanded} type={"hill"} />
          <div className="flex flex-col items-center">
            <select
              className="w-full max-w-xs my-4 select select-primary"
              value={tools}
              onChange={(e) => setTools(e.target.value)}
            >
              <option disabled value={""}>
                Select Set of Tools
              </option>
              {["Smith's Tools", "Brewer's Tools", "Mason's Tools"].map(
                (tool, i) => (
                  <option key={i} value={`${tool}`}>
                    {tool}
                  </option>
                )
              )}
            </select>
            <button
              className="btn btn-success btn-wide"
              onClick={raceHillDwarf}
            >
              Select Hill Dwarf
            </button>
          </div>{" "}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
