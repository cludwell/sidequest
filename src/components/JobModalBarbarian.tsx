import Image from "next/image";
import { SetClassProps } from "../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../public/icons/barbarianicon.png";
import barbarian from "../../public/images/dee-holmberg-bg-barbarian.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "./icons/IconDoubleChevron";
declare global {
  interface Window {
    my_modal_barbarian: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Barbarian({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModalBarbarian = document.getElementById("my_modal_barbarian");
    if (myModalBarbarian) window.my_modal_barbarian = myModalBarbarian;
  }, []);
  const becomeBarbarian = async () => {
    setDndClass({
      role: "Barbarian",
      specialty: [],
      spells: [],
      languages: [],
    });
    window.my_modal_barbarian.close();
    window.location.href = "#item3";
  };
  return (
    <>
      <button
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_barbarian.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain m-2 rounded-md max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Barbarian
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_barbarian" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="mb-4 text-5xl font-bold text-center almendra">
            Barbarian
          </h3> */}
          <Image
            src={barbarian}
            alt="detail image"
            width={800}
            height={800}
            className="object-cover rounded-xl aspect-square"
          />
          <p className="mx-16 my-4 text-lg italic">
            A fierce warrior who can enter a battle rage
          </p>
          <div className="m-1 overflow-x-auto">
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
                  <td>d12</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Primary Ability</td>
                  <td>Strength</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Strength & Constitution</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-3"
              checked={expand === "RAGE_1ST_LEVEL"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "RAGE_1ST_LEVEL" ? "RAGE_1ST_LEVEL" : null
                )
              }
            />

            <div className="text-xl font-medium collapse-title">
              Rage
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                In battle, you fight with primal ferocity. On your turn, you can
                enter a rage as a bonus action.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                While raging, you gain the following benefits if you aren't
                wearing heavy armor:
              </p>
              <ul className="m-4 list-disc">
                <li className="my-2 text-sm sm:text-base">
                  You have advantage on Strength checks and Strength saving
                  throws.
                </li>
                <li className="my-2 text-sm sm:text-base">
                  When you make a melee weapon attack using Strength, you gain a
                  bonus to the damage roll that increases as you gain levels as
                  a barbarian, as shown in the Rage Damage column of the
                  Barbarian table.
                </li>
                <li className="my-2 text-sm sm:text-base">
                  You have resistance to bludgeoning, piercing, and slashing
                  damage.
                </li>
                <li className="my-2 text-sm sm:text-base">
                  If you are able to cast spells, you can't cast them or
                  concentrate on them while raging.
                </li>
              </ul>
              <p className="text-sm sm:text-base">
                Your rage lasts for 1 minute. It ends early if you are knocked
                unconscious or if your turn ends and you haven't attacked a
                hostile creature since your last turn or taken damage since
                then. You can also end your rage on your turn as a bonus action.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Once you have raged the number of times shown for your barbarian
                level in the Rages column of the Barbarian table, you must
                finish a long rest before you can rage again.
              </p>
            </div>
          </div>
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-4"
              checked={expand === "UNARMORED_DEFENSE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "UNARMORED_DEFENSE" ? "UNARMORED_DEFENSE" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Unarmored Defense
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                While you are not wearing any armor, your Armor Class equals 10
                + your Dexterity modifier + your Constitution modifier. You can
                use a shield and still gain this benefit.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-5"
              checked={expand === "RECKLESS_ATTACK"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "RECKLESS_ATTACK" ? "RECKLESS_ATTACK" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Reckless Attack
              <span className="block mt-1 text-sm text-gray-500">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Starting at 2nd level, you can throw aside all concern for
                defense to attack with fierce desperation. When you make your
                first attack on your turn, you can decide to attack recklessly.
                Doing so gives you advantage on melee weapon attack rolls using
                Strength during this turn, but attack rolls against you have
                advantage until your next turn.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-6"
              checked={expand === "DANGER_SENSE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DANGER_SENSE" ? "DANGER_SENSE" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Danger Sense
              <span className="block mt-1 text-sm text-gray-500">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                At 2nd level, you gain an uncanny sense of when things nearby
                aren't as they should be, giving you an edge when you dodge away
                from danger.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                You have advantage on Dexterity saving throws against effects
                that you can see, such as traps and spells. To gain this
                benefit, you can't be blinded, deafened, or incapacitated.
              </p>
            </div>
          </div>
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-primal-path"
              checked={expand === "PRIMAL_PATH"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PRIMAL_PATH" ? "PRIMAL_PATH" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Primal Path
              <span className="block mt-1 text-sm text-gray-500">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                At 3rd level, you choose a path that shapes the nature of your
                rage. Your choice grants you features at 3rd level and again at
                6th, 10th, and 14th levels.
              </p>
            </div>
          </div>

          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-1"
              checked={expand === "EXTRA_ATTACK"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "EXTRA_ATTACK" ? "EXTRA_ATTACK" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Extra Attack
              <span className="block mt-1 text-sm text-gray-500">
                5th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Beginning at 5th level, you can attack twice, instead of once,
                whenever you take the Attack action on your turn.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "FAST_MOVEMENT"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FAST_MOVEMENT" ? "FAST_MOVEMENT" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Fast Movement
              <span className="block mt-1 text-sm text-gray-500">
                5th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Starting at 5th level, your speed increases by 10 feet while you
                aren't wearing heavy armor.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-3"
              checked={expand === "FERAL_INSTINCT"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FERAL_INSTINCT" ? "FERAL_INSTINCT" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Feral Instinct
              <span className="block mt-1 text-sm text-gray-500">
                7th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                By 7th level, your instincts are so honed that you have
                advantage on initiative rolls.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Additionally, if you are surprised at the beginning of combat
                and aren't incapacitated, you can act normally on your first
                turn, but only if you enter your rage before doing anything else
                on that turn.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-4"
              checked={expand === "BRUTAL_CRITICAL_9"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "BRUTAL_CRITICAL_9" ? "BRUTAL_CRITICAL_9" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Brutal Critical
              <span className="block mt-1 text-sm text-gray-500">
                9th, 13th, 17th Level
              </span>
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Brutal Critical Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>9th</th>
                      <td>
                        Beginning at 9th level, you can roll one additional
                        weapon damage die when determining the extra damage for
                        a critical hit with a melee attack.
                      </td>
                    </tr>
                    <tr>
                      <th>13th</th>
                      <td>
                        At 13th level, you can roll two additional weapon damage
                        dice when determining the extra damage for a critical
                        hit with a melee attack.
                      </td>
                    </tr>
                    <tr>
                      <th>17th</th>
                      <td>
                        At 17th level, you can roll three additional weapon
                        damage dice when determining the extra damage for a
                        critical hit with a melee attack.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-18"
              checked={expand === "RELENTLESS_RAGE_11"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "RELENTLESS_RAGE_11" ? "RELENTLESS_RAGE_11" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Relentless Rage
              <span className="block mt-1 text-sm text-gray-500">
                11th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Starting at 11th level, your rage can keep you fighting despite
                grievous wounds. If you drop to 0 hit points while you're raging
                and don't die outright, you can make a DC 10 Constitution saving
                throw. If you succeed, you drop to 1 hit point instead.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Each time you use this feature after the first, the DC increases
                by 5. When you finish a short or long rest, the DC resets to 10.
              </p>
            </div>
          </div>
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-19"
              checked={expand === "PERSISTENT_RAGE_15"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PERSISTENT_RAGE_15" ? "PERSISTENT_RAGE_15" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Persistent Rage
              <span className="block mt-1 text-sm text-gray-500">
                15th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Beginning at 15th level, your rage is so fierce that it ends
                early only if you fall unconscious or if you choose to end it.
              </p>
            </div>
          </div>
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-20"
              checked={expand === "INDOMITABLE_MIGHT_18"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "INDOMITABLE_MIGHT_18"
                    ? "INDOMITABLE_MIGHT_18"
                    : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Indomitable Might
              <span className="block mt-1 text-sm text-gray-500">
                18th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Beginning at 18th level, if your total for a Strength check is
                less than your Strength score, you can use that score in place
                of the total.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-21"
              checked={expand === "PRIMAL_CHAMPION_20"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PRIMAL_CHAMPION_20" ? "PRIMAL_CHAMPION_20" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Primal Champion
              <span className="block mt-1 text-sm text-gray-500">
                20th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                At 20th level, you embody the power of the wilds. Your Strength
                and Constitution scores increase by 4. Your maximum for those
                scores is now 24.
              </p>
            </div>
          </div>
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-22"
              checked={expand === "PROFICIENCIES_1"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PROFICIENCIES_1" ? "PROFICIENCIES_1" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Proficiencies
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Armor</th>
                      <td>Light armor, medium armor, shields</td>
                    </tr>
                    <tr>
                      <th>Weapons</th>
                      <td>Simple weapons, martial weapons</td>
                    </tr>
                    <tr>
                      <th>Tools</th>
                      <td>None</td>
                    </tr>
                    <tr>
                      <th>Saving Throws</th>
                      <td>Strength, Constitution</td>
                    </tr>
                    <tr>
                      <th>Skills</th>
                      <td>
                        Choose two from Animal Handling, Athletics,
                        Intimidation, Nature, Perception, and Survival
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-23"
              checked={expand === "HIT_POINTS_1"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HIT_POINTS_1" ? "HIT_POINTS_1" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Hit Points
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Hit Dice</th>
                      <td>1d12 per barbarian level</td>
                    </tr>
                    <tr>
                      <th>Hit Points at 1st Level</th>
                      <td>12 + your Constitution modifier</td>
                    </tr>
                    <tr>
                      <th>Hit Points at Higher Levels</th>
                      <td>
                        1d12 (or 7) + your Constitution modifier per barbarian
                        level after 1st
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <button
              className="my-8 btn btn-success btn-wide"
              onClick={becomeBarbarian}
            >
              Barbarian
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
