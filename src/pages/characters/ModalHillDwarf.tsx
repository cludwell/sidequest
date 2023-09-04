import Image from "next/image";
import { useEffect, useState } from "react";
import hillDwarf from "../../../public/images/dwarf2.jpeg";
import hillDetail from "../../../public/images/dwarf8.jpg";
import DwarfInfo from "./DwarfInfo";
declare global {
  interface Window {
    my_modal_6: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalHillDwarf() {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal6 = document.getElementById("my_modal_6");
    if (myModal6) window.my_modal_6 = myModal6;
  }, []);

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_6.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={hillDwarf}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Hill Dwarf
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
      <dialog id="my_modal_6" className="modal">
        <form method="dialog" className="modal-box">
        <h3 className="font-bold text-5xl mb-4 almendra text-center">Hill Dwarf</h3>
          <Image
            src={hillDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="py-4"></p>
          <div className="collapse collapse-plus bg-base-200 my-1">
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
            <div className="collapse-title text-xl font-medium">Hill Dwarf</div>
            <div className="collapse-content">
              <p>
                Bold and hardy, dwarves are known as skilled warriors, miners,
                and workers of stone and metal.
              </p>
              <br />
              <p>
                As a hill dwarf, you have keen senses, deep intuition, and
                remarkable resilience. The gold dwarves of Faerûn in their
                mighty southern kingdom are hill dwarves, as are the exiled
                Neidar and the debased Klar of Krynn in the Dragonlance setting.
              </p>
            </div>
          </div>

          <DwarfInfo expand={expand} setExpanded={setExpanded} type={"hill"} />
          <button className="btn btn-success self-end">Select race</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
