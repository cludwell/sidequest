import { useSession } from "next-auth/react";
import { useState } from "react";
import ModalAarakocra from "./ModalAarakocra";
import ModalDragonBorn from "./ModalDragonborn";
import dwarf from "../../../public/images/dwarf.jpeg";
import elf from "../../../public/images/elf3.jpeg";
import gnome from "../../../public/images/gnome4.png";
import Image from "next/image";
import ModalHillDwarf from "./ModalHillDwarf";
import ModalMountainDwarf from "./ModalMountainDwarf";
import ModalHighElf from "./ModalHighElf";
import ModalWoodElf from "./ModalWoodElf";
import ModalEladrinElf from "./ModalEladrinElf";
import ModalRockGnome from "./ModalRockGnome";
import ModalDeepGnome from "./ModalDeepGnome";

export default function NewCharacter() {
  const { data: session, status: loading } = useSession();
  const [progress, setProgress] = useState(5);
  const [race, setRace] = useState(null);
  const [selected, setSelected] = useState(true);
  const accordionClick = async () => setSelected(prev=> !prev)
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <progress
        className="progress progress-accent max-w-screen-xl w-full mb-8"
        value={progress}
        max="100"
      />
      <ModalAarakocra />
      <ModalDragonBorn />

      <div className="collapse collapse-plus bg-base-200 m-1">
        <input type="radio" name="my-accordion-3" checked={selected} onClick={accordionClick} />
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
          <ModalHillDwarf />
          <ModalMountainDwarf />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 m-1">
        <input type="radio" name="my-accordion-3" />
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
          <ModalHighElf />
          <ModalWoodElf />
          <ModalEladrinElf />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 m-1">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-bold flex items-center">
        <Image
            src={gnome}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Gnome
        </div>
        <div className="collapse-content">
          <ModalRockGnome />
          <ModalDeepGnome />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          asdfasdf
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </main>
  );
}
