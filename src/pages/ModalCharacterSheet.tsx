import { useEffect, useState } from "react";
import IconID from "./IconID";
import { CharacterData } from "../../lib/characterData";
import Image from "next/image";

declare global {
  interface Window {
    my_modal_charsheet: any; // Replace `any` with the type of your modal if possible
  }
}
export default function ModalCharacterSheet({ character }: CharacterData) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModalCharSheet = document.getElementById("my_modal_charsheet");
    if (myModalCharSheet) window.my_modal_charsheet = myModalCharSheet;
  }, []);
  const openModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.my_modal_charsheet.showModal();
  };
  const skills = [
    ["acrobatics", "Acrobatics"],
    ["animalHandling", "Animal Handling"],
    ["arcana", "Arcana"],
    ["athletics", "Athletics"],
    ["deception", "Deception"],
    ["history", "History"],
    ["insight", "Insight"],
    ["intimidation", "Intimidation"],
    ["investigation", "Investigation"],
    ["medicine", "Medicine"],
    ["nature", "Nature"],
    ["perception", "Perception"],
    ["performance", "Performance"],
    ["persuasion", "Persuasion"],
    ["religion", "Religion"],
    ["sleightOfHand", "Sleight Of Hand"],
    ["stealth", "Stealth"],
    ["survival", "Survival"],
  ];
  const abilities = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  return (
    <>
      <button className="btn w-fit btn-primary m-4" onClick={openModal}>
        <IconID />
      </button>
      <dialog id="my_modal_charsheet" className="modal">
        <div className="modal-box ">
          <h3 className="almendra text-3xl text-center">{character.name}</h3>
          <div className="flex flex-row justify-center">
            <div className="indicator m-6">
              {/* <span className="indicator-item indicator-top indicator-start badge badge-success font-bold text-lg p-3 federant ">
          </span> */}
              <span className="indicator-item indicator-top indicator-center badge badge-success font-bold text-lg p-3 federant">
                HP: {character?.currentHp} / {character?.maxHp}
              </span>
              {/* <span className="indicator-item indicator-top indicator-end badge badge-success font-bold text-lg p-3 federant">
            top+end
          </span> */}
              <span className="indicator-item indicator-middle indicator-start badge badge-success font-bold text-lg p-3 federant">
                {character.race}
              </span>
              {/* <span className="indicator-item indicator-middle indicator-center badge badge-success font-bold text-lg p-3 federant">
            middle+center
        </span> */}
              <span className="indicator-item indicator-middle indicator-end badge badge-success font-bold text-lg p-3 federant">
                {character.role}
              </span>
              {/* <span className="indicator-item indicator-bottom indicator-start badge badge-secondary">
            bottom+start
          </span> */}
              <span className="indicator-item indicator-bottom indicator-center badge badge-success font-bold text-lg p-3 federant">
                Level: {character.level}
              </span>
              {/* <span className="indicator-item indicator-bottom indicator-end badge badge-success font-bold text-lg p-3 federant">
            bottom+end
          </span> */}
              <Image
                height={300}
                width={300}
                alt="minihud"
                src={character && character.imgUrl ? character.imgUrl : ""}
                className="mask mask-hexagon"
              />

              {/* <div className="grid w-60 h-32 bg-base-300 place-items-center">
            content
          </div> */}
            </div>
          </div>
          <p className="py-4">Press ESC key or click outside to close</p>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-description"
              id="character-description"
              checked={expand === "DESCRIPTION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DESCRIPTION" ? "DESCRIPTION" : null
                )
              }
            />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="character-description"
            >
              Description
            </label>
            <div className="collapse-content">
              <p>{character.appearance}</p>
              <br />
              <p>{character.background}</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-abilities"
              id="character-abilities"
              checked={expand === "ABILITIES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ABILITIES" ? "ABILITIES" : null
                )
              }
            />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="character-skills"
            >
              Ability Scores
            </label>
            <div className="collapse-content">
              <div className="">
                <table className="table my-2 table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Ability</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {abilities.map((ability, i) => (
                      <tr key={ability[0]}>
                        <td className="font-bold">
                          {ability[0].toUpperCase() + ability.slice(1)}
                        </td>
                        <td>{character[ability]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-skills"
              id="character-skills"
              checked={expand === "SKILLS"}
              onChange={() =>
                setExpanded((prev) => (prev !== "SKILLS" ? "SKILLS" : null))
              }
            />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="character-skills"
            >
              Skills
            </label>
            <div className="collapse-content">
              <div className="">
                <table className="table my-2 table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill, i) => (
                      <tr key={skill[0]}>
                        <td className="font-bold">{skill[1]}</td>
                        <td>{character[skill[0]]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
