import { useState } from "react";
import { SetClassProps } from "../../lib/setClassProps";
import Barbarian from "./JobModalBarbarian";
import Bard from "./JobModalBard";
import Cleric from "./JobModalCleric";
import Druid from "./JobModalDruid";
import Fighter from "./JobModalFighter";
import Monk from "./JobModalMonk";
import Paladin from "./JobModalPaladin";
import Ranger from "./JobModalRanger";
import Rogue from "./JobModalRogue";
import Sorcerer from "./JobModalSorcerer";
import Warlock from "./JobModalWarlock";
import Wizard from "./JobModalWizard";
import { DnDClass } from "../../lib/DnDClass";
export default function NewCharacterClass({
  dndClass,
  setDndClass,
}: SetClassProps) {
  const classes: DnDClass[] = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];
  const randomClass = () =>
    setDndClass({
      role: classes[Math.floor(Math.random() * classes.length)],
      specialty: [
        dndClass.role === "Ranger"
          ? "Favored Enemy - Undead"
          : dndClass.role === "Fighter"
          ? "Fighting Style - Protection"
          : "",
      ],
      languages: [],
      spells: [],
    });

  return (
    <div className="flex flex-col w-full max-w-screen-xl">
      <h1 className="mb-8 text-4xl text-center almendra">Classes</h1>

      <Barbarian dndClass={dndClass} setDndClass={setDndClass} />
      <Bard dndClass={dndClass} setDndClass={setDndClass} />
      <Cleric dndClass={dndClass} setDndClass={setDndClass} />
      <Druid dndClass={dndClass} setDndClass={setDndClass} />
      <Fighter dndClass={dndClass} setDndClass={setDndClass} />
      <Monk dndClass={dndClass} setDndClass={setDndClass} />
      <Paladin dndClass={dndClass} setDndClass={setDndClass} />
      <Ranger dndClass={dndClass} setDndClass={setDndClass} />
      <Rogue dndClass={dndClass} setDndClass={setDndClass} />
      <Sorcerer dndClass={dndClass} setDndClass={setDndClass} />
      <Warlock dndClass={dndClass} setDndClass={setDndClass} />
      <Wizard dndClass={dndClass} setDndClass={setDndClass} />
      <div className="flex flex-row justify-center w-full max-w-screen-xl">
        <button className="m-8 btn btn-primary">
          <a href="#item1">Previous Step</a>
        </button>
        <button
          className="m-8 btn btn-secondary"
          onClick={() => (window.location.hash = "#item3")}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
