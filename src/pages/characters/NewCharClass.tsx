import { useState } from "react";
import { SetClassProps } from "../../../lib/setClassProps";
import Barbarian from "./JobModalBarbarian";
import Bard from "./JobModalBard";
import Cleric from "./JobModalCleric";
import Druid from "./JobModalDruid";
import Fighter from "./JobModalFighter";
import Monk from "./JobModalMonk";
export default function NewCharacterClass({
  dndClass,
  setDndClass,
}: SetClassProps) {
  return (
    <>
      <Barbarian dndClass={dndClass} setDndClass={setDndClass} />
      <Bard dndClass={dndClass} setDndClass={setDndClass} />
      <Cleric dndClass={dndClass} setDndClass={setDndClass} />
      <Druid dndClass={dndClass} setDndClass={setDndClass} />
      <Fighter dndClass={dndClass} setDndClass={setDndClass} />
      <Monk dndClass={dndClass} setDndClass={setDndClass} />
      <div className="flex flex-row">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8">
          Choose Random Class
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary m-8">
          Next Step
        </button>
      </div>
    </>
  );
}
