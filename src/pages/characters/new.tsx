import { useSession } from "next-auth/react";
import { useState } from "react";
import NewCharacterRace from "./NewCharRace";
import NewCharacterClass from "./NewCharClass";
import NewCharAbilities from "./NewCharAbilities";
import NewCharDescription from "./NewCharDescription";
import NewCharEquipment from "./NewCharEquipment";
import { DndClassObject } from "../../../lib/DndClassObject";


export default function NewCharacter() {
  const { data: session, status: loading } = useSession();
  const [race, setRace] = useState<Object>({});
  const [dndClass, setDndClass] = useState<DndClassObject>({
    role: null,
    specialty: [],
  });
  const [abilities, setAbilities] = useState<Object>({});
  const [description, setDescription] = useState<Object>({});
  const [equipment, setEquipment] = useState<Object>({});
  return (
    <main className="flex min-h-screen flex-col items-center px-16 ">
            {race &&
        !!Object.values(description).length &&
        !!Object.values(abilities).length &&
        !!Object.values(equipment).length &&
        dndClass.role && (
          <div className="flex flex-row max-w-screen-xl w-full justify-center">
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8"
              //  onClick={equip}
            >
              Submit Character
            </button>
          </div>
        )}
      <ul className="steps steps-horizontal lg:steps-horizontal mb-12">
        <li className={race ? "step step-primary" : "step"}>
          {" "}
          <a href="#item1" className="btn btn-xs">
            Race
          </a>
        </li>
        <li
          className={
            dndClass.role ? "step step-primary" : "step"
          }
        >
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
        <li
          className={
            !!Object.values(equipment).length ? "step step-primary" : "step"
          }
        >
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
          <NewCharAbilities
            abilities={abilities}
            setAbilities={setAbilities}
            dndClass={dndClass}
          />
        </div>
        <div id="item4" className="carousel-item w-full mx-8">
          <NewCharDescription
            description={description}
            setDescription={setDescription}
          />{" "}
        </div>
        <div id="item5" className="carousel-item w-full mx-8">
          <NewCharEquipment
            race={race}
            dndClass={dndClass}
            equipment={equipment}
            setEquipment={setEquipment}
          />{" "}
        </div>
      </div>
      {race &&
        !!Object.values(description).length &&
        !!Object.values(abilities).length &&
        !!Object.values(equipment).length &&
        dndClass.role && (
          <div className="flex flex-row max-w-screen-xl w-full justify-center">
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8"
              //  onClick={equip}
            >
              Submit Character
            </button>
          </div>
        )}
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
