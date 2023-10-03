import { useSession } from "next-auth/react";
import { useState } from "react";
import NewCharacterRace from "./NewCharRace";
import NewCharacterClass from "./NewCharClass";
import NewCharAbilities from "./NewCharAbilities";
import NewCharDescription from "./NewCharDescription";
import NewCharEquipment from "./NewCharEquipment";
import { DndClassObject } from "../../../lib/DndClassObject";
import { Race } from "../../../lib/Race";
import {Equipment} from '../../../lib/Equipment'
import { useSelector } from "react-redux";
import { userProfile } from "@/store/session";
import { newCharacterRequest } from "@/store/characters";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

export default function NewCharacter() {
  const { data: session, status: loading } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(userProfile)
  console.log('user', user)
  const [race, setRace] = useState<Race>({
    languages: [],
    spells: [],
    specialty: [],
    inventory: [],
    tools: [],
    vision: '',
    race: ''
  });
  const [dndClass, setDndClass] = useState<DndClassObject>({
    role: null,
    specialty: [],
    spells: [],
    languages: []
  });
  const [abilities, setAbilities] = useState<Object>({});
  const [description, setDescription] = useState<Object>({});
  const [equipment, setEquipment] = useState<Equipment>({
    armor: [],
    inventory: [],
    weapons: [],
  });

  const testChar = {
    userId: user?.id,
    "level": 9,
    "name": "Brom Ironfist",
    "role": "Barbarian",
    "race": "Dwarf",
    "maxHp": 78,
    "currentHp": 65,
    "strength": 18,
    "dexterity": 12,
    "constitution": 16,
    "intelligence": 8,
    "wisdom": 10,
    "charisma": 10,
    "armor": ["Chain Mail"],
    "equipped": ["GreatAxe"],
    "inventory": ["Javelin", "Handaxe", "Explorer's Pack", "Potion of Healing"],
    "languages": ["Common", "Dwarvish"],
    "spells": [],
    "tools": ["Smith's tools"],
    "weapons": ["GreatAxe", "Javelin", "Handaxe"],
    "initiative": 1,
    "armorClass": 16,
    "vision": "Darkvision",
    "acrobatics": 1,
    "animalHandling": 0,
    "arcana": -1,
    "athletics": 4,
    "deception": 0,
    "history": 1,
    "insight": 0,
    "intimidation": 4,
    "investigation": -1,
    "medicine": 0,
    "nature": 0,
    "perception": 0,
    "performance": 0,
    "persuasion": 0,
    "religion": -1,
    "sleightOfHand": 1,
    "stealth": 1,
    "survival": 2,
    "alignment": "Neutral Good",
    "appearance": "Sturdy and powerful, with a braided beard and deeply etched face.",
    "background": "Brom Ironfist is a seasoned warrior, his body is a patchwork of scars from countless battles. He hails from the city of Ironforge, where he honed his skills as a blacksmith. Despite his gruff exterior, Brom has a heart of gold and is fiercely loyal to his companions. His thirst for battle is driven by a sense of duty and the desire to protect those who cannot protect themselves. He seeks to rid the world of the foul creatures that prey on the weak and defenseless, and he values honor and courage above all else.",
    "imgUrl": "https://i.imgur.com/8OjzFkI.jpg",
    "faith": "Moradin"
  }
  const submitCharacter = () => {
    const character = {
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
      userId: user.id
    };
    dispatch(newCharacterRequest(testChar))
    console.log("CHARACTER", user.id);
    return character;
  };
  console.log("SESSION", session);
  return (
    <main className="flex min-h-screen flex-col items-center  px-4 md:px-16 ">
      {
      // race.race &&
      //   !!Object.values(description).length &&
      //   !!Object.values(abilities).length &&
      //   !!equipment.inventory.length &&
      //   dndClass.role &&
        user && user.id ? (
          <div className="flex flex-row max-w-screen-xl w-full justify-center" id="submit">
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
          <h1 className="text-2xl almendra" id='submit'>Must be signed in to submit character</h1>
        ) : null}
      <ul className="steps steps-vertical lg:steps-horizontal mb-4 lg:h-fit self-end md:self-center">
        <li
          className={
            race.race ? "step step-primary" : "step"
          }
        >
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
          className={
            equipment.inventory.length ? "step step-primary" : "step"
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
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success m-8 btn-wide"
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
