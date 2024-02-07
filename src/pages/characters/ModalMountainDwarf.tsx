import Image from "next/image";
import { useEffect, useState } from "react";
import mountainDwarf from "../../../public/images/dwarf3.jpeg";
import mountainDwarfDetail from "../../../public/images/dwarf7.jpg";
import DwarfInfo from "./DwarfInfo";
import { SetRaceProps } from "../../../lib/setRaceProps";
import IconDoubleChevron from "../../components/icons/IconDoubleChevron";
declare global {
  interface Window {
    my_modal_7: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalMountainDwarf({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [tools, setTools] = useState<string>("");
  useEffect(() => {
    const myModal7 = document.getElementById("my_modal_7");
    if (myModal7) window.my_modal_7 = myModal7;
  }, []);
  const raceMountainDwarf = async () => {
    setRace({
      race: "Mountain Dwarf",
      languages: ["Common", "Dwarvish"],
      inventory: [tools],
      specialty: [tools],
      tools: [tools],
      vision: "Darkvision (60 feet).",
      spells: [],
    });
    window.my_modal_7.close();
    window.location.href = "#item2";
  };

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_7.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={mountainDwarf}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Mountain Dwarf
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_7" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-4xl sm:text-5xl mb-4 almendra text-center">
            Mountain Dwarf
          </h3>
          <Image
            src={mountainDwarfDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="py-4"></p>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-5"
              checked={expand === "MOUNTAIN_DWARF"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "MOUNTAIN_DWARF" ? "MOUNTAIN_DWARF" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Mountain Dwarf
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Bold and hardy, dwarves are known as skilled warriors, miners,
                and workers of stone and metal.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                As a mountain dwarf, you're strong and hardy, accustomed to a
                difficult life in rugged terrain. You're probably on the tall
                side (for a dwarf), and tend toward lighter coloration. The
                shield dwarves of northern Faerûn, as well as the ruling Hylar
                clan and the noble Daewar clan of Dragonlance, are mountain
                dwarves.
              </p>
            </div>
          </div>

          <DwarfInfo
            expand={expand}
            setExpanded={setExpanded}
            type={"mountain"}
          />
          <div className="flex flex-col items-center">
            <select
              className="select select-primary w-full max-w-xs  my-4"
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
              onClick={raceMountainDwarf}
            >
              Select Mountain Dwarf
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
