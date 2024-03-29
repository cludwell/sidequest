import { SetRaceProps } from "../../lib/setRaceProps";
import { useState } from "react";

import ModalAarakocra from "./ModalAarakocra";
import ModalDragonBorn from "./ModalDragonborn";
import dwarf from "../../public/images/dwarf.jpeg";
import elf from "../../public/images/elf3.jpeg";
import gnome from "../../public/images/gnome4.png";
import halfling from "../../public/images/halfing.jpeg";
import Image from "next/image";
import ModalHillDwarf from "./ModalHillDwarf";
import ModalMountainDwarf from "./ModalMountainDwarf";
import ModalHighElf from "./ModalHighElf";
import ModalWoodElf from "./ModalWoodElf";
import ModalEladrinElf from "./ModalEladrinElf";
import ModalRockGnome from "./ModalRockGnome";
import ModalDeepGnome from "./ModalDeepGnome";
import ModalGoliath from "./ModalGoliath";
import ModalHalfElf from "./ModalHalfElf";
import ModalHalfOrc from "./ModalHalfOrc";
import ModalLightfootHalfing from "./ModalLightfootHalfling";
import ModalStoutHalfing from "./ModalStoutHalfling";
import ModalHuman from "./ModalHuman";
import ModalTiefling from "./ModalTiefling";
import ModalAasimar from "./ModalAasimar";
import ModalDrow from "./ModalDrow";
import ModalDuergar from "./ModalDuergar";

export default function NewCharacterRace({ race, setRace }: SetRaceProps) {
  const [selected, setSelected] = useState<String | null>(null);
  const races = [
    "Aarakocra",
    "Aasimar",
    "Dragonborn",
    "Duergar",
    "Hill Dwarf",
    "Mountain Dwarf",
    "Eladrin Elf",
    "Drow",
    "High Elf",
    "Wood Elf",
    "Rock Gnome",
    "Deep Gnome",
    "Goliath",
    "Half-Elf",
    "Half-Orc",
    "Lightfoot Halfling",
    "Stout Halfling",
    "Human",
    "Tiefling",
  ];

  return (
    <div className="flex flex-col w-full max-w-screen-xl ">
      <h1 className="mb-8 text-4xl text-center almendra">Races</h1>

      <ModalAarakocra race={race} setRace={setRace} />
      <ModalAasimar race={race} setRace={setRace} />
      <ModalDragonBorn race={race} setRace={setRace} />
      <div className="w-full max-w-screen-xl m-1 collapse collapse-plus bg-base-200 ">
        <input
          type="checkbox"
          name="my-accordion-3"
          checked={selected === "DWARF"}
          onChange={() =>
            setSelected((prev) => (prev !== "DWARF" ? "DWARF" : null))
          }
        />
        <div className="flex items-center text-xl font-bold collapse-title">
          <Image
            src={dwarf}
            className="object-cover m-2 rounded-md aspect-square"
            alt="portrait preview"
            width={50}
            height={50}
          />
          DWARF
        </div>
        <div className="collapse-content">
          <ModalDuergar race={race} setRace={setRace} />
          <ModalHillDwarf race={race} setRace={setRace} />
          <ModalMountainDwarf race={race} setRace={setRace} />
        </div>
      </div>
      <div className="w-full max-w-screen-xl m-1 collapse collapse-plus bg-base-200">
        <input
          type="checkbox"
          name="my-accordion-3"
          checked={selected === "ELF"}
          onChange={() =>
            setSelected((prev) => (prev !== "ELF" ? "ELF" : null))
          }
        />
        <div className="flex items-center text-xl font-bold collapse-title">
          <Image
            src={elf}
            className="object-cover m-2 rounded-md aspect-square"
            alt="portrait preview"
            width={50}
            height={50}
          />
          ELF
        </div>
        <div className="collapse-content">
          <ModalEladrinElf race={race} setRace={setRace} />
          <ModalDrow race={race} setRace={setRace} />
          <ModalHighElf race={race} setRace={setRace} />
          <ModalWoodElf race={race} setRace={setRace} />
        </div>
      </div>
      <div className="w-full max-w-screen-xl m-1 collapse collapse-plus bg-base-200">
        <input
          type="checkbox"
          name="my-accordion-3"
          checked={selected === "GNOME"}
          onChange={() =>
            setSelected((prev) => (prev !== "GNOME" ? "GNOME" : null))
          }
        />
        <div className="flex items-center text-xl font-bold collapse-title">
          <Image
            src={gnome}
            className="object-cover m-2 rounded-md aspect-square"
            alt="portrait preview"
            width={50}
            height={50}
          />
          GNOME
        </div>
        <div className="collapse-content">
          <ModalRockGnome race={race} setRace={setRace} />
          <ModalDeepGnome race={race} setRace={setRace} />
        </div>
      </div>
      <ModalGoliath race={race} setRace={setRace} />
      <ModalHalfElf race={race} setRace={setRace} />
      <ModalHalfOrc race={race} setRace={setRace} />
      <div className="w-full max-w-screen-xl m-1 collapse collapse-plus bg-base-200">
        <input
          type="checkbox"
          name="my-accordion-3"
          checked={selected === "HALFLING"}
          onChange={() =>
            setSelected((prev) => (prev !== "HALFLING" ? "HALFLING" : null))
          }
        />
        <div className="flex items-center text-xl font-bold collapse-title">
          <Image
            src={halfling}
            className="object-cover m-2 rounded-md aspect-square"
            alt="portrait preview"
            width={50}
            height={50}
          />
          HALFLING
        </div>
        <div className="collapse-content">
          <ModalLightfootHalfing race={race} setRace={setRace} />
          <ModalStoutHalfing race={race} setRace={setRace} />
        </div>
      </div>
      <ModalHuman race={race} setRace={setRace} />
      <ModalTiefling race={race} setRace={setRace} />
      <div className="flex flex-row justify-center w-full max-w-screen-xl">
        <button
          className="m-8 btn btn-secondary"
          onClick={() => (window.location.hash = "#item2")}
        >
          Next Step{" "}
        </button>
      </div>
    </div>
  );
}
