import { useSession } from "next-auth/react";
import { useState } from "react";
import NewCharacterRace from "./NewCharRace";
import NewCharacterClass from "./NewCharClass";
import NewCharAbilities from "./NewCharAbilities";
import NewCharDescription from "./NewCharDescription";
import NewCharEquipment from "./NewCharEquipment";
import { DndClassObject } from "../../../lib/DndClassObject";
import { Race } from "../../../lib/Race";
import { Equipment } from "../../../lib/Equipment";
import { useSelector } from "react-redux";
import { userProfile } from "@/store/session";
import { newCharacterRequest } from "@/store/characters";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

export default function NewCharacter() {
  const { data: session, status: loading } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const user: any = useSelector(userProfile);
  console.log("user", user);
  const [race, setRace] = useState<Race>({
    languages: [],
    spells: [],
    specialty: [],
    inventory: [],
    tools: [],
    vision: "",
    race: "",
  });
  const [dndClass, setDndClass] = useState<DndClassObject>({
    role: null,
    specialty: [],
    spells: [],
    languages: [],
  });
  const [abilities, setAbilities] = useState<Object>({});
  const [description, setDescription] = useState<Object>({});
  const [equipment, setEquipment] = useState<Equipment>({
    armor: [],
    inventory: [],
    weapons: [],
  });

  const submitCharacter = async () => {
    const character: any = {
      ...race,
      ...dndClass,
      ...abilities,
      ...description,
      ...equipment,
      languages: [...(race?.languages || []), ...(dndClass?.languages || [])],
      spells: [...(race?.spells || []), ...(dndClass?.spells || [])],
      specialty: [...(race?.specialty || []), ...(dndClass?.specialty || [])],
      inventory: [...(race?.inventory || []), ...(equipment?.inventory || [])],
      tools: [...(race?.tools || [])],
      userId: user.id,
    };
    await dispatch(newCharacterRequest(character));
    // console.log("CHARACTER", user.id);
    return character;
  };

  if (!user)
    return (
      <main className="flex min-h-screen flex-col items-center px-4 md:px-16 fade-in-slide-in">
        <h1 className="almendra text-2xl m-8">Please sign in or use the demo-user to create a character.</h1>
      </main>
    );
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16 fade-in-slide-in">
      {race.race &&
      !!Object.values(description).length &&
      !!Object.values(abilities).length &&
      !!equipment.inventory.length &&
      dndClass.role &&
      user &&
      user.id ? (
        <div
          className="flex flex-row max-w-screen-xl w-full justify-center"
          id="submit"
        >
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success m-8 btn-wide"
            onClick={submitCharacter}
          >
            Submit Character
          </button>
        </div>
      ) : race.race &&
        !!Object.values(description).length &&
        !!Object.values(abilities).length &&
        !!equipment.inventory.length &&
        dndClass.role &&
        user.id ? (
        <h1 className="text-2xl almendra" id="submit">
          Must be signed in to submit character
        </h1>
      ) : null}
      <ul className="steps steps-vertical md:steps-horizontal mb-4 lg:h-fit ">
        <li className={race.race ? "step step-primary" : "step"}>
          {" "}
          <a href="#item1" className="btn btn-xs">
            Race
          </a>
        </li>
        <li className={dndClass.role ? "step step-primary" : "step"}>
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
          className={equipment.inventory.length ? "step step-primary" : "step"}
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
      {race.race &&
      !!Object.values(description).length &&
      !!Object.values(abilities).length &&
      !!equipment.inventory.length &&
      dndClass.role &&
      user &&
      user.id && (
        <div className="flex flex-row max-w-screen-xl w-full justify-center">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success m-8 btn-wide"
            onClick={submitCharacter}
          >
            Submit Character
          </button>
        </div>
      ) }
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
