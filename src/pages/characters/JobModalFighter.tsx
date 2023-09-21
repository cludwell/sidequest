import Image from "next/image";
import { SetClassProps } from "../../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../../public/icons/fightericon.png";
import fighter from "../../../public/images/dee-holmberg-bg-fighter.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
declare global {
  interface Window {
    my_modal_fighter: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Fighter({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [style, setStyle] = useState<string>("");
  useEffect(() => {
    const myModalFighter = document.getElementById("my_modal_fighter");
    if (myModalFighter) window.my_modal_fighter = myModalFighter;
  }, []);
  const becomeFighter = async () => setDndClass({role: `Fighter`, specialty: [style]});
  const styleSelected = async (e: React.ChangeEvent<HTMLSelectElement>) =>
    setStyle(e.target.value);
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_fighter.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain rounded-md m-2 max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Fighter
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#05C3DD"
          className="w-6 h-6 "
        >
          <path
            fillRule="evenodd"
            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <dialog id="my_modal_fighter" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Barbarian
          </h3> */}
          <Image
            src={fighter}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="text-lg my-4 mx-16 italic">
            A master of martial combat, skilled with a variety of weapons and
            armor
          </p>
          <div className="overflow-x-auto m-1">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Stat</th>
                  <th>Feature</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Hit Die</td>
                  <td>d8</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Primary Ability</td>
                  <td>Wisdom</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Wisdom & Charisma</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-fighting-style"
              checked={expand === "FIGHTING_STYLE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FIGHTING_STYLE" ? "FIGHTING_STYLE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Fighting Style
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                You adopt a particular style of fighting as your specialty.
                Choose one of the following options. You can’t take a Fighting
                Style option more than once, even if you later get to choose
                again.
              </p>
              <br />
              <div className="overflow-x-auto">
                <table className="table table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Fighting Style</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">Archery</td>
                      <td>
                        You gain a +2 bonus to attack rolls you make with ranged
                        weapons.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Dueling</td>
                      <td>
                        When you are wielding a melee weapon in one hand and no
                        other weapons, you gain a +2 bonus to damage rolls with
                        that weapon.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Great Weapon Fighting</td>
                      <td>
                        When you roll a 1 or 2 on a damage die for an attack you
                        make with a melee weapon that you are wielding with two
                        hands, you can reroll the die and must use the new roll,
                        even if the new roll is a 1 or a 2. The weapon must have
                        the two-handed or versatile property for you to gain
                        this benefit.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Protection</td>
                      <td>
                        When a creature you can see attacks a target other than
                        you that is within 5 feet of you, you can use your
                        reaction to impose disadvantage on the attack roll. You
                        must be wielding a shield.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Two-Weapon Fighting</td>
                      <td>
                        When you engage in two-weapon fighting, you can add your
                        ability modifier to the damage of the second attack.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-second-wind"
              checked={expand === "SECOND_WIND"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SECOND_WIND" ? "SECOND_WIND" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Second Wind
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              You have a limited well of stamina that you can draw on to protect
              yourself from harm. On your turn, you can use a bonus action to
              regain hit points equal to 1d10 + your fighter level. Once you use
              this feature, you must finish a short or long rest before you can
              use it again.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-action-surge"
              checked={expand === "ACTION_SURGE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ACTION_SURGE" ? "ACTION_SURGE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Action Surge
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              Starting at 2nd level, you can push yourself beyond your normal
              limits for a moment. On your turn, you can take one additional
              action. Once you use this feature, you must finish a short or long
              rest before you can use it again. Starting at 17th level, you can
              use it twice before a rest, but only once on the same turn.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-martial-archetype"
              checked={expand === "MARTIAL_ARCHETYPE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "MARTIAL_ARCHETYPE" ? "MARTIAL_ARCHETYPE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Martial Archetype
              <span className="block text-gray-500 text-sm mt-1">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              At 3rd level, you choose an archetype that you strive to emulate
              in your combat styles and techniques. Choose Champion, Battle
              Master, or Eldritch Knight, all detailed at the end of the class
              description. The archetype you choose grants you features at 3rd
              level and again at 7th, 10th, 15th, and 18th level.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-extra-attack"
              checked={expand === "EXTRA_ATTACK"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "EXTRA_ATTACK" ? "EXTRA_ATTACK" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Extra Attack
              <span className="block text-gray-500 text-sm mt-1">
                5th, 11th, 20th Level
              </span>
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Attack Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>5th</th>
                      <td>
                        Beginning at 5th level, you can attack twice, instead of
                        once, whenever you take the Attack action on your turn.
                        The number of attacks increases to three when you reach
                        11th level in this class and to four when you reach 20th
                        level in this class.
                      </td>
                    </tr>
                    <tr>
                      <th>11th</th>
                      <td>
                        Beginning at 11th level, you can attack three times,
                        instead of twice, whenever you take the Attack action on
                        your turn. The number of attacks increases to four when
                        you reach 20th level in this class.
                      </td>
                    </tr>
                    <tr>
                      <th>20th</th>
                      <td>
                        At 20th level, you can attack four times, instead of
                        three, whenever you take the Attack action on your turn.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Proficiencies Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-proficiencies"
              checked={expand === "PROFICIENCIES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PROFICIENCIES" ? "PROFICIENCIES" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Proficiencies
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <table className="table table-zebra w-full bg-base-100">
                <tbody>
                  <tr>
                    <td className="font-bold">Armor</td>
                    <td>All armor, shields</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Weapons</td>
                    <td>Simple weapons, martial weapons</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Tools</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Saving Throws</td>
                    <td>Strength, Constitution</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Skills</td>
                    <td>
                      Choose two skills from Acrobatics, Animal Handling,
                      Athletics, History, Insight, Intimidation, Perception, and
                      Survival
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hit Points Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-hit-points"
              checked={expand === "HIT_POINTS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HIT_POINTS" ? "HIT_POINTS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Hit Points
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <table className="table table-zebra w-full bg-base-100">
                <tbody>
                  <tr>
                    <td className="font-bold">Hit Dice</td>
                    <td>1d10 per fighter level</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at 1st Level</td>
                    <td>10 + your Constitution modifier</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at Higher Levels</td>
                    <td>
                      1d10 (or 6) + your Constitution modifier per fighter level
                      after 1st
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <select
              className="select select-primary w-full max-w-xs my-4"
              value={style}
              onChange={styleSelected}
            >
              <option disabled selected>
                Select a Fighting Style
              </option>
              <option>Archery</option>
              <option>Dueling</option>
              <option>Great Weapon Fighting</option>
              <option>Protection</option>
              <option>Two-Weapon Fighting</option>
            </select>
            <button
              className="btn btn-success btn-wide my-4"
              onClick={becomeFighter}
            >
              Fighter
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
