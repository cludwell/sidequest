import Image from "next/image";
import { SetClassProps } from "../../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../../public/icons/rogueicon.png";
import rogue from "../../../public/images/dee-holmberg-bg-rogue.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "../../components/icons/IconDoubleChevron";
declare global {
  interface Window {
    my_modal_rogue: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Rogue({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  useEffect(() => {
    const myModalRogue = document.getElementById("my_modal_rogue");
    if (myModalRogue) window.my_modal_rogue = myModalRogue;
  }, []);

  const becomeRogue = async () => {
    setDndClass({ role: "Rogue", specialty: [], spells: [], languages: [] });
    window.my_modal_rogue.close();
    window.location.href = "#item3";
  };
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_rogue.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain rounded-md m-2 max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Rogue
        </span>
<IconDoubleChevron />
      </button>
      <dialog id="my_modal_rogue" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Barbarian
          </h3> */}
          <Image
            src={rogue}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="text-lg my-4 mx-16 italic">
            A scoundrel who uses stealth and trickery to overcome obstacles and
            enemies
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
                  <td>Dexterity</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Dexterity & Intelligence</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Expertise Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-expertise"
              checked={expand === "EXPERTISE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "EXPERTISE" ? "EXPERTISE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Expertise
              <span className="block text-gray-500 text-sm mt-1">
                1st, 6th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 1st level, choose two of your skill proficiencies, or one of
                your skill proficiencies and your proficiency with thieves'
                tools. Your proficiency bonus is doubled for any ability check
                you make that uses either of the chosen proficiencies.
              </p>
              <p>
                At 6th level, you can choose two more of your proficiencies (in
                skills or with thieves' tools) to gain this benefit.
              </p>
            </div>
          </div>

          {/* Sneak Attack Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-sneak-attack"
              checked={expand === "SNEAK_ATTACK"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SNEAK_ATTACK" ? "SNEAK_ATTACK" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Sneak Attack
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 1st level, you know how to strike subtly and
                exploit a foe's distraction. Once per turn, you can deal an
                extra 1d6 damage to one creature you hit with an attack if you
                have advantage on the attack roll. The attack must use a finesse
                or a ranged weapon.
              </p>
              <p>
                You don't need advantage on the attack roll if another enemy of
                the target is within 5 feet of it, that enemy isn't
                incapacitated, and you don't have disadvantage on the attack
                roll.
              </p>
              <p>
                The amount of the extra damage increases as you gain levels in
                this class, as shown in the Sneak Attack column of the Rogue
                table.
              </p>
            </div>
          </div>
          {/* Thieves' Cant Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-thieves-cant"
              checked={expand === "THIEVES_CANT"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "THIEVES_CANT" ? "THIEVES_CANT" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Thieves' Cant
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                During your rogue training you learned thieves' cant, a secret
                mix of dialect, jargon, and code that allows you to hide
                messages in seemingly normal conversation. Only another creature
                that knows thieves' cant understands such messages. It takes
                four times longer to convey such a message than it does to speak
                the same idea plainly.
              </p>
              <br />
              <p>
                In addition, you understand a set of secret signs and symbols
                used to convey short, simple messages, such as whether an area
                is dangerous or the territory of a thieves' guild, whether loot
                is nearby, or whether the people in an area are easy marks or
                will provide a safe house for thieves on the run.
              </p>
            </div>
          </div>
          {/* Cunning Action Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-cunning-action"
              checked={expand === "CUNNING_ACTION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "CUNNING_ACTION" ? "CUNNING_ACTION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Cunning Action
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 2nd level, your quick thinking and agility allow you
                to move and act quickly. You can take a bonus action on each of
                your turns in combat. This action can be used only to take the
                Dash, Disengage, or Hide action.
              </p>
            </div>
          </div>

          {/* Roguish Archetype Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-roguish-archetype"
              checked={expand === "ROGUISH_ARCHETYPE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ROGUISH_ARCHETYPE" ? "ROGUISH_ARCHETYPE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Roguish Archetype
              <span className="block text-gray-500 text-sm mt-1">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 3rd level, you choose an archetype that you emulate in the
                exercise of your rogue abilities: Thief, detailed at the end of
                the class description, or one from another source. Your
                archetype choice grants you features at 3rd level and then again
                at 9th, 13th, and 17th level.
              </p>
            </div>
          </div>

          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />
          {/* Uncanny Dodge Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-uncanny-dodge"
              checked={expand === "UNCANNY_DODGE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "UNCANNY_DODGE" ? "UNCANNY_DODGE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Uncanny Dodge
              <span className="block text-gray-500 text-sm mt-1">
                5th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 5th level, when an attacker that you can see hits
                you with an attack, you can use your reaction to halve the
                attack's damage against you.
              </p>
            </div>
          </div>

          {/* Evasion Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-evasion"
              checked={expand === "EVASION"}
              onChange={() =>
                setExpanded((prev) => (prev !== "EVASION" ? "EVASION" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Evasion
              <span className="block text-gray-500 text-sm mt-1">
                7th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 7th level, you can nimbly dodge out of the way of
                certain area effects, such as an ancient red dragon's fiery
                breath or an ice storm spell. When you are subjected to an
                effect that allows you to make a Dexterity saving throw to take
                only half damage, you instead take no damage if you succeed on
                the saving throw, and only half damage if you fail.
              </p>
            </div>
          </div>

          {/* Reliable Talent Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-reliable-talent"
              checked={expand === "RELIABLE_TALENT"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "RELIABLE_TALENT" ? "RELIABLE_TALENT" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Reliable Talent
              <span className="block text-gray-500 text-sm mt-1">
                11th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                By 11th level, you have refined your chosen skills until they
                approach perfection. Whenever you make an ability check that
                lets you add your proficiency bonus, you can treat a d20 roll of
                9 or lower as a 10.
              </p>
            </div>
          </div>

          {/* Blindsense Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-blindsense"
              checked={expand === "BLINDSENSE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "BLINDSENSE" ? "BLINDSENSE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Blindsense
              <span className="block text-gray-500 text-sm mt-1">
                14th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 14th level, if you are able to hear, you are aware
                of the location of any hidden or invisible creature within 10
                feet of you.
              </p>
            </div>
          </div>

          {/* Slippery Mind Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-slippery-mind"
              checked={expand === "SLIPPERY_MIND"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SLIPPERY_MIND" ? "SLIPPERY_MIND" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Slippery Mind
              <span className="block text-gray-500 text-sm mt-1">
                15th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                By 15th level, you have acquired greater mental strength. You
                gain proficiency in Wisdom saving throws.
              </p>
            </div>
          </div>
          {/* Elusive Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-elusive"
              checked={expand === "ELUSIVE"}
              onChange={() =>
                setExpanded((prev) => (prev !== "ELUSIVE" ? "ELUSIVE" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Elusive
              <span className="block text-gray-500 text-sm mt-1">
                18th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 18th level, you are so evasive that attackers
                rarely gain the upper hand against you. No attack roll has
                advantage against you while you aren't incapacitated.
              </p>
            </div>
          </div>

          {/* Stroke of Luck Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-stroke-of-luck"
              checked={expand === "STROKE_OF_LUCK"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "STROKE_OF_LUCK" ? "STROKE_OF_LUCK" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Stroke of Luck
              <span className="block text-gray-500 text-sm mt-1">
                20th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 20th level, you have an uncanny knack for succeeding when you
                need to. If your attack misses a target within range, you can
                turn the miss into a hit. Alternatively, if you fail an ability
                check, you can treat the d20 roll as a 20.
              </p>
              <p>
                Once you use this feature, you can't use it again until you
                finish a short or long rest.
              </p>
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
                    <td>1d8 per rogue level</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at 1st Level</td>
                    <td>8 + your Constitution modifier</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at Higher Levels</td>
                    <td>
                      1d8 (or 5) + your Constitution modifier per rogue level
                      after 1st
                    </td>
                  </tr>
                </tbody>
              </table>
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
                    <td>Light armor</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Weapons</td>
                    <td>
                      Simple weapons, hand crossbows, longswords, rapiers,
                      shortswords
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Tools</td>
                    <td>Thieves' tools</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Saving Throws</td>
                    <td>Dexterity, Intelligence</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Skills</td>
                    <td>
                      Choose four from Acrobatics, Athletics, Deception,
                      Insight, Intimidation, Investigation, Perception,
                      Performance, Persuasion, Sleight of Hand, and Stealth
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* <select
              className="select select-primary w-full max-w-xs my-4"
              value={favored}
              onChange={(e) => setFavored(e.target.value)}
            >
              <option disabled selected>
                Select a Favored Enemy
              </option>
              {favoredEnemies.map((enem, i) => (
                <option key={`${enem}`} value={enem}>{enem}</option>
              ))}
            </select> */}
            <button
              className="btn btn-success btn-wide my-8"
              onClick={becomeRogue}
            >
              Rogue
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
