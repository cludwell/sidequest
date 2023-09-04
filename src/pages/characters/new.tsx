import { useSession } from "next-auth/react";
import { useState } from "react";
import ModalAarakocra from "./ModalAarakocra";
import ModalDragonBorn from "./ModalDragonborn";
import dwarf from "../../../public/images/dwarf.jpeg";
import elf from "../../../public/images/elf3.jpeg";
import gnome from "../../../public/images/gnome4.png";
import halfling from "../../../public/images/halfing.jpeg";
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

export default function NewCharacter() {
  const { data: session, status: loading } = useSession();
  const [progress, setProgress] = useState(5);
  const [race, setRace] = useState<string|null>(null);
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
  const randomRace = () =>
    setRace(races[Math.floor(Math.random() * races.length)]);
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <ul className="steps steps-horizontal lg:steps-horizontal mb-12">
        <li className={race ? 'step step-primary' : 'step'}>Race</li>
        <li className="step step-primary">Class</li>
        <li className="step">Abilities</li>
        <li className="step">Description</li>
        <li className="step">Equipment</li>
      </ul>
      <ModalAarakocra race={race} setRace={setRace}/>
      <ModalAasimar race={race} setRace={setRace}/>
      <ModalDragonBorn race={race} setRace={setRace} />
      <div className="collapse collapse-plus bg-base-200 m-1 z-0 max-w-screen-xl w-full">
        <input
          type="checkbox"
          name="my-accordion-3"
          checked={selected === "DWARF"}
          onChange={() =>
            setSelected((prev) => (prev !== "DWARF" ? "DWARF" : null))
          }
        />
        <div className="collapse-title text-xl font-bold flex items-center">
          <Image
            src={dwarf}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          DWARF
        </div>
        <div className="collapse-content">
          <ModalDuergar race={race} setRace={setRace}/>
          <ModalHillDwarf race={race} setRace={setRace}/>
          <ModalMountainDwarf race={race} setRace={setRace}/>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 m-1 max-w-screen-xl w-full">
        <input
          type="checkbox"
          name="my-accordion-3"
          checked={selected === "ELF"}
          onChange={() =>
            setSelected((prev) => (prev !== "ELF" ? "ELF" : null))
          }
        />
        <div className="collapse-title text-xl font-bold flex items-center">
          <Image
            src={elf}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          ELF
        </div>
        <div className="collapse-content">
          <ModalEladrinElf race={race} setRace={setRace}/>
          <ModalDrow race={race} setRace={setRace}/>
          <ModalHighElf race={race} setRace={setRace}/>
          <ModalWoodElf race={race} setRace={setRace}/>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 m-1 max-w-screen-xl w-full">
        <input
          type="checkbox"
          name="my-accordion-3"
          checked={selected === "GNOME"}
          onChange={() =>
            setSelected((prev) => (prev !== "GNOME" ? "GNOME" : null))
          }
        />
        <div className="collapse-title text-xl font-bold flex items-center">
          <Image
            src={gnome}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          GNOME
        </div>
        <div className="collapse-content">
          <ModalRockGnome race={race} setRace={setRace}/>
          <ModalDeepGnome race={race} setRace={setRace}/>
        </div>
      </div>
      <ModalGoliath race={race} setRace={setRace}/>
      <ModalHalfElf race={race} setRace={setRace}/>
      <ModalHalfOrc race={race} setRace={setRace}/>
      <div className="collapse collapse-plus bg-base-200 m-1 max-w-screen-xl w-full">
        <input
          type="checkbox"
          name="my-accordion-3"
          checked={selected === "HALFLING"}
          onChange={() =>
            setSelected((prev) => (prev !== "HALFLING" ? "HALFLING" : null))
          }
        />
        <div className="collapse-title text-xl font-bold flex items-center">
          <Image
            src={halfling}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          HALFLING
        </div>
        <div className="collapse-content">
          <ModalLightfootHalfing race={race} setRace={setRace}/>
          <ModalStoutHalfing race={race} setRace={setRace} />
        </div>
      </div>
      <ModalHuman race={race} setRace={setRace}/>
      <ModalTiefling race={race} setRace={setRace}/>
      <div className="flex flex-row">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8"
          onClick={randomRace}
        >
          Choose at Random
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary m-8">
          Next Step
        </button>
      </div>
    </main>
  );
}
