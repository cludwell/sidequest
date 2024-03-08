import { useEffect, useState } from "react";
import IconID from "./icons/IconID";
import { CharacterData } from "../../lib/characterData";
import Image from "next/image";
import { Characters } from "@prisma/client";
import { ModalCharacterSheetProps } from "../../lib/modalCharacterSheetProps";

declare global {
  interface Window {
    my_modal_charsheet: any; // Replace `any` with the type of your modal if possible
  }
}
export default function ModalCharacterSheet({
  character,
}: ModalCharacterSheetProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModalCharSheet = document.getElementById("my_modal_charsheet");
    if (myModalCharSheet) window.my_modal_charsheet = myModalCharSheet;
  }, []);
  const openModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.my_modal_charsheet.showModal();
  };

  if (!character) return null;
  return (
    <>
      <div className="m-4 tooltip tooltip-left" data-tip="Character Sheet">
        <button className="btn w-fit btn-primary " onClick={openModal}>
          <IconID />
        </button>
      </div>
      <dialog id="my_modal_charsheet" className="modal">
        <div className="modal-box ">
          <h3 className="text-3xl text-center almendra">{character.name}</h3>
          <div className="flex flex-row justify-center">
            <div className="m-6 indicator">
              {/* <span className="p-3 text-lg font-bold indicator-item indicator-top indicator-start badge badge-success federant ">
                as
              </span> */}
              <span className="p-3 font-bold indicator-item indicator-top indicator-center badge badge-success md:text-lg federant">
                HP: {character?.currentHp} / {character?.maxHp}
              </span>
              {/* <span className="p-3 text-lg font-bold indicator-item indicator-top indicator-end badge badge-success federant">
            top+end
          </span> */}
              <span className="p-3 font-bold indicator-item indicator-middle indicator-start badge badge-success md:text-lg federant">
                {character.race}
              </span>
              {/* <span className="p-3 text-lg font-bold indicator-item indicator-middle indicator-center badge badge-success federant">
            middle+center
        </span> */}
              <span className="p-3 font-bold indicator-item indicator-middle indicator-end badge badge-success md:text-lg federant">
                {character.role}
              </span>
              {/* <span className="indicator-item indicator-bottom indicator-start badge badge-secondary">
            bottom+start
          </span> */}
              <span className="p-3 font-bold indicator-item indicator-bottom indicator-center badge badge-success md:text-lg federant">
                Level: {character.level}
              </span>
              {/* <span className="p-3 text-lg font-bold indicator-item indicator-bottom indicator-end badge badge-success federant">
            bottom+end
          </span> */}
              <Image
                height={1000}
                width={1000}
                alt="minihud"
                src={character && character.imgUrl ? character.imgUrl : ""}
                className="w-64 mask mask-hexagon sm:w-72 "
              />

              {/* <div className="grid h-32 w-60 bg-base-300 place-items-center">
            content
          </div> */}
            </div>
          </div>
          <div className="my-1 mt-4 collapse collapse-plus bg-base-200">
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
              className="text-xl font-medium collapse-title"
              htmlFor="character-description"
            >
              Description
            </label>
            <div className="collapse-content">
              <p className="text-xs sm:text-sm md:text-base">
                {character.appearance}
              </p>
              <br />
              <p className="text-xs sm:text-sm md:text-base">
                {character.background}
              </p>
            </div>
          </div>
          <div className="my-1 collapse collapse-plus bg-base-200">
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
              className="text-xl font-medium collapse-title"
              htmlFor="character-skills"
            >
              Ability Scores
            </label>
            <div className="collapse-content">
              <div className="">
                <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
                  <thead>
                    <tr>
                      <th>Ability</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">Strength</td>
                      <td>{character["strength"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Dexterity</td>
                      <td>{character["dexterity"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Constitution</td>
                      <td>{character["constitution"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Intelligence</td>
                      <td>{character["intelligence"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Wisdom</td>
                      <td>{character["wisdom"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Charisma</td>
                      <td>{character["charisma"]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="my-1 collapse collapse-plus bg-base-200">
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
              className="text-xl font-medium collapse-title"
              htmlFor="character-skills"
            >
              Skills
            </label>
            <div className="collapse-content">
              <div className="">
              <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">Acrobatics</td>
                      <td>{character["acrobatics"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Animal Handling</td>
                      <td>{character["animalHandling"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Arcana</td>
                      <td>{character["arcana"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Athletics</td>
                      <td>{character["athletics"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Deception</td>
                      <td>{character["deception"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">History</td>
                      <td>{character["history"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Insight</td>
                      <td>{character["insight"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Intimidation</td>
                      <td>{character["intimidation"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Investigation</td>
                      <td>{character["investigation"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Medicine</td>
                      <td>{character["medicine"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Nature</td>
                      <td>{character["nature"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Perception</td>
                      <td>{character["perception"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Performance</td>
                      <td>{character["performance"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Persuasion</td>
                      <td>{character["persuasion"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Religion</td>
                      <td>{character["religion"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Sleight Of Hand</td>
                      <td>{character["sleightOfHand"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Stealth</td>
                      <td>{character["stealth"]}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Survival</td>
                      <td>{character["survival"]}</td>
                    </tr>
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
