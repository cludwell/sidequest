import { useSession } from "next-auth/react";
import { useState } from "react";
import NewCharacterRace from "./NewCharRace";
import NewCharacterClass from "./NewCharClass";
import NewCharAbilities from "./NewCharAbilities";
import NewCharDescription from "./NewCharDescription";
import NewCharEquipment from "./NewCharEquipment";

export default function NewCharacter() {
  const { data: session, status: loading } = useSession();
  // const [progress, setProgress] = useState(5);
  const [race, setRace] = useState<string | null>(null);
  const [dndClass, setDndClass] = useState<string | null>(null);
  const [abilities, setAbilities] = useState<Object>({});
  const [description, setDescription] = useState<Object>({});
  return (
    <main className="flex min-h-screen flex-col items-center px-16 ">
      <ul className="steps steps-horizontal lg:steps-horizontal mb-12">
        <li className={race ? "step step-primary" : "step"}>
          {" "}
          <a href="#item1" className="btn btn-xs">
            Race
          </a>
        </li>
        <li className={dndClass ? "step step-primary" : "step"}>
          {" "}
          <a href="#item2" className="btn btn-xs">
            Class
          </a>
        </li>
        <li
          className={
            !!Object.values(abilities).length ? "step step-primary" : "step"
          }
        >
          <a href="#item3" className="btn btn-xs">
            Abilities
          </a>
        </li>
        <li
          className={
            !!Object.values(description).length ? "step step-primary" : "step"
          }
        >
          <a href="#item4" className="btn btn-xs">
            Description
          </a>
        </li>
        <li className="step">
          {" "}
          <a href="#item5" className="btn btn-xs">
            Equipment
          </a>
        </li>
      </ul>

      <div className="carousel max-w-screen-xl w-full">
        <div id="item1" className="carousel-item w-full mx-8">
          <NewCharacterRace race={race} setRace={setRace} />
        </div>
        <div id="item2" className="carousel-item w-full mx-8 ">
          <NewCharacterClass dndClass={dndClass} setDndClass={setDndClass} />
        </div>
        <div id="item3" className="carousel-item w-full mx-8">
          <NewCharAbilities abilities={abilities} setAbilities={setAbilities} />
        </div>
        <div id="item4" className="carousel-item w-full mx-8">
          <NewCharDescription
            description={description}
            setDescription={setDescription}
          />{" "}
        </div>
        <div id="item5" className="carousel-item w-full mx-8">
          <NewCharEquipment race={race} dndClass={dndClass}
          />{" "}
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          Race
        </a>
        <a href="#item2" className="btn btn-xs">
          Class
        </a>
        <a href="#item3" className="btn btn-xs">
          Abilities
        </a>
        <a href="#item4" className="btn btn-xs">
          Description
        </a>
        <a href="#item5" className="btn btn-xs">
          Equipment
        </a>
      </div>
    </main>
  );
}
