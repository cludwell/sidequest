import Image from "next/image";
import { useEffect, useState } from "react";
import mountainDwarf from "../../../public/images/dwarf3.jpeg";
import mountainDwarfDetail from "../../../public/images/dwarf7.jpg";
import DwarfInfo from "./DwarfInfo";
declare global {
  interface Window {
    my_modal_7: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalMountainDwarf() {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal7 = document.getElementById("my_modal_7");
    if (myModal7) window.my_modal_7 = myModal7;
  }, []);

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#05C3DD"
          className="w-6 h-6 "
        >
          <path
            fill-rule="evenodd"
            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <dialog id="my_modal_7" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Mountain Dwarf</h3>
          <Image
            src={mountainDwarfDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="py-4">Press ESC key or click outside to close</p>
          <div className="collapse collapse-plus bg-base-200 my-1">
  <input
    type="radio"
    name="my-accordion-5"
    checked={expand === "MOUNTAIN_DWARF"}
    onChange={() => setExpanded("MOUNTAIN_DWARF")}
  />
  <div className="collapse-title text-xl font-medium">Mountain Dwarf</div>
  <div className="collapse-content">
    <p>
      Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.
    </p>
    <br />
    <p>
      As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.
    </p>
  </div>
</div>

          <DwarfInfo
            expand={expand}
            setExpanded={setExpanded}
            type={"mountain"}
          />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
