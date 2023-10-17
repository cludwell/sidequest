import Image from "next/image";
import { SetClassProps } from "../../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../../public/icons/fightericon.png";
import fighter from "../../../public/images/dee-holmberg-bg-fighter.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "../IconDoubleChevron";
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
  const becomeFighter = async () => {
    setDndClass({
      role: `Fighter`,
      specialty: [`Fighting Style - ${style}`],
      spells: [],
      languages: [],
    });
    window.my_modal_fighter.close();
    window.location.href = "#item3";
  };
  const fightingStyles = {
    Archery:
      "You gain a +2 bonus to attack rolls you make with ranged weapons.",
    "Blind Fighting":
      "You have blindsight with a range of 10 feet. You can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range unless the creature successfully hides from you.",
    Defense: "While you are wearing armor, you gain a +1 bonus to AC.",
    Dueling:
      "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
    "Great Weapon Fighting":
      "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit.",
    Interception:
      "When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.",
    Protection:
      "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
    "Superior Technique":
      "You learn one maneuver of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
    "Thrown Weapon Fighting":
      "You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.",
    "Two-Weapon Fighting":
      "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
    "Unarmed Fighting":
      "Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8. At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.",
  };
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
<IconDoubleChevron />
      </button>
      <dialog id="my_modal_fighter" className="modal">
        <form method="dialog" className="modal-box">
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
                    {Object.entries(fightingStyles).map((style, i) => (
                      <tr key={`${style[0]}${i}`}>
                        <td className="font-bold">{style[0]}</td>
                        <td>{style[1]}</td>
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
              <option disabled value={""}>
                Select a Fighting Style
              </option>
              {Object.keys(fightingStyles).map((style, i) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
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
