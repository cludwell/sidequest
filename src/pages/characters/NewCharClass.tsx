import { useState } from "react";
import { SetClassProps } from "../../../lib/setClassProps";
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
export default function NewCharacterClass({
  dndClass,
  setDndClass,
}: SetClassProps) {
  const classes = [
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
    setDndClass(classes[Math.floor(Math.random() * classes.length)]);

  return (
    <>
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
      <div className="flex flex-row">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8"
          onClick={randomClass}
        >
          Choose Random Class
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary m-8">
          Next Step
        </button>
      </div>
    </>
  );
}
