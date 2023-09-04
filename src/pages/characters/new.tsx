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
  const [race, setRace] = useState(null);
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
  const randomRace = () => console.log(races[Math.floor(Math.random() * races.length -1)])
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <ModalAarakocra />
      <ModalAasimar />
      <ModalDragonBorn />
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
          <ModalDuergar />
          <ModalHillDwarf />
          <ModalMountainDwarf />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 m-1 max-w-screen-xl w-full">
        <input
         type="checkbox"
          name="my-accordion-3"
          checked={selected === "ELF"}
          onChange={() => setSelected((prev) => (prev !== "ELF" ? "ELF" : null))}
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
          <ModalEladrinElf />
          <ModalDrow />
          <ModalHighElf />
          <ModalWoodElf />
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
          <ModalRockGnome />
          <ModalDeepGnome />
        </div>
      </div>
      <ModalGoliath />
      <ModalHalfElf />
      <ModalHalfOrc />
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
          <ModalLightfootHalfing />
          <ModalStoutHalfing />
        </div>
      </div>
      <ModalHuman />
      <ModalTiefling />
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary my-8" onClick={randomRace}>
        Choose at Random
      </button>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
        Responsive
      </button>
    </main>
  );
}
