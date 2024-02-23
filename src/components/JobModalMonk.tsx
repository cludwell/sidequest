import Image from "next/image";
import { SetClassProps } from "../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../public/icons/monkicon.png";
import monk from "../../public/images/dee-holmberg-bg-monk.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "./icons/IconDoubleChevron";
declare global {
  interface Window {
    my_modal_monk: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Monk({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModalMonk = document.getElementById("my_modal_monk");
    if (myModalMonk) window.my_modal_monk = myModalMonk;
  }, []);
  const becomeMonk = async () => {
    setDndClass({ role: "Monk", specialty: [], spells: [], languages: [] });
    window.my_modal_monk.close();
    window.location.href = "#item3";
  };
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_monk.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain rounded-md m-2 max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Monk
        </span>
<IconDoubleChevron />
      </button>
      <dialog id="my_modal_monk" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Barbarian
          </h3> */}
          <Image
            src={monk}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="text-lg my-4 mx-16 italic">
            A master of martial arts, harnessing the power of the body in
            pursuit of physical and spiritual perfection
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
                  <td>Dexterity & Wisdom</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Strength & Dexterity</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Unarmored Defense Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-unarmored-defense"
              checked={expand === "UNARMORED_DEFENSE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "UNARMORED_DEFENSE" ? "UNARMORED_DEFENSE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Unarmored Defense
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 1st level, while you are wearing no armor and not
                wielding a shield, your AC equals 10 + your Dexterity modifier +
                your Wisdom modifier.
              </p>
            </div>
          </div>

          {/* Martial Arts Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-martial-arts"
              checked={expand === "MARTIAL_ARTS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "MARTIAL_ARTS" ? "MARTIAL_ARTS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Martial Arts
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 1st level, your practice of martial arts gives you mastery of
                combat styles that use unarmed strikes and monk weapons, which
                are shortswords and any simple melee weapons that don't have the
                two-handed or heavy property.
              </p>
              <br />
              <p>
                You gain the following benefits while you are unarmed or
                wielding only monk weapons and you aren't wearing armor or
                wielding a shield:
              </p>
              <br />
              <ul className="list-disc ml-8">
                <li className="my-2">
                  You can use Dexterity instead of Strength for the attack and
                  damage rolls of your unarmed strikes and monk weapons.
                </li>
                <li className="my-2">
                  You can roll a d4 in place of the normal damage of your
                  unarmed strike or monk weapon. This die changes as you gain
                  monk levels, as shown in the Martial Arts column of the Monk
                  table.
                </li>
                <li className="my-2">
                  When you use the Attack action with an unarmed strike or a
                  monk weapon on your turn, you can make one unarmed strike as a
                  bonus action. For example, if you take the Attack action and
                  attack with a quarterstaff, you can also make an unarmed
                  strike as a bonus action, assuming you haven't already taken a
                  bonus action this turn.
                </li>
                <li className="my-2">
                  Certain monasteries use specialized forms of the monk weapons.
                  For example, you might use a club that is two lengths of wood
                  connected by a short chain (called a nunchaku) or a sickle
                  with a shorter, straighter blade (called a kama). Whatever
                  name you use for a monk weapon, you can use the game
                  statistics provided for the weapon in the Weapons section.
                </li>
              </ul>
            </div>
          </div>
          {/* Ki Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-ki"
              checked={expand === "KI"}
              onChange={() =>
                setExpanded((prev) => (prev !== "KI" ? "KI" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Ki
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 2nd level, your training allows you to harness the
                mystic energy of ki. Your access to this energy is represented
                by a number of ki points. Your monk level determines the number
                of points you have, as shown in the Ki Points column of the Monk
                table.
              </p>
              <br />
              <p>
                You can spend these points to fuel various ki features. You
                start knowing three such features: Flurry of Blows, Patient
                Defense, and Step of the Wind. You learn more ki features as you
                gain levels in this class.
              </p>
              <br />
              <p>
                When you spend a ki point, it is unavailable until you finish a
                short or long rest, at the end of which you draw all of your
                expended ki back into yourself. You must spend at least 30
                minutes of the rest meditating to regain your ki points.
              </p>
              <br />
              <p>
                Some of your ki features require your target to make a saving
                throw to resist the feature's effects. The saving throw DC is
                calculated as follows:
              </p>
              <br />
              <strong>Ki save DC</strong>{" "}
              <span> = 8 + your proficiency bonus + your Wisdom modifier</span>
              <br />
              <h3 className="my-4 font-medium">Flurry of Blows</h3>
              <p>
                Immediately after you take the Attack action on your turn, you
                can spend 1 ki point to make two unarmed strikes as a bonus
                action.
              </p>
              <br />
              <h3 className="my-4 font-medium">Patient Defense</h3>
              <p>
                You can spend 1 ki point to take the Dodge action as a bonus
                action on your turn.
              </p>
              <br />
              <h3 className="my-4 font-medium">Step of the Wind</h3>
              <p>
                You can spend 1 ki point to take the Disengage or Dash action as
                a bonus action on your turn, and your jump distance is doubled
                for the turn.
              </p>
            </div>
          </div>

          {/* Unarmored Movement Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-unarmored-movement"
              checked={expand === "UNARMORED_MOVEMENT"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "UNARMORED_MOVEMENT" ? "UNARMORED_MOVEMENT" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Unarmored Movement
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 2nd level, your speed increases by 10 feet while you
                are not wearing armor or wielding a shield. This bonus increases
                when you reach certain monk levels, as shown in the Monk table.
              </p>
              <br />
              <p>
                At 9th level, you gain the ability to move along vertical
                surfaces and across liquids on your turn without falling during
                the move.
              </p>
            </div>
          </div>

          {/* Monastic Tradition Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-monastic-tradition"
              checked={expand === "MONASTIC_TRADITION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "MONASTIC_TRADITION" ? "MONASTIC_TRADITION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Monastic Tradition
              <span className="block text-gray-500 text-sm mt-1">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                When you reach 3rd level, you commit yourself to a monastic
                tradition: the Way of the Open Hand, detailed at the end of the
                class description or one from another source. Your tradition
                grants you features at 3rd level and again at 6th, 11th, and
                17th level.
              </p>
            </div>
          </div>

          {/* Deflect Missiles Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-deflect-missiles"
              checked={expand === "DEFLECT_MISSILES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DEFLECT_MISSILES" ? "DEFLECT_MISSILES" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Deflect Missiles
              <span className="block text-gray-500 text-sm mt-1">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 3rd level, you can use your reaction to deflect or
                catch the missile when you are hit by a ranged weapon attack.
                When you do so, the damage you take from the attack is reduced
                by 1d10 + your Dexterity modifier + your monk level.
              </p>
              <br />
              <p>
                If you reduce the damage to 0, you can catch the missile if it
                is small enough for you to hold in one hand and you have at
                least one hand free. If you catch a missile in this way, you can
                spend 1 ki point to make a ranged attack with the weapon or
                piece of ammunition you just caught, as part of the same
                reaction. You make this attack with proficiency, regardless of
                your weapon proficiencies, and the missile counts as a monk
                weapon for the attack, which has a normal range of 20 feet and a
                long range of 60 feet.
              </p>
            </div>
          </div>

          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />

          {/* Slow Fall Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-slow-fall"
              checked={expand === "SLOW_FALL"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SLOW_FALL" ? "SLOW_FALL" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Slow Fall
              <span className="block text-gray-500 text-sm mt-1">
                4th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 4th level, you can use your reaction when you fall
                to reduce any falling damage you take by an amount equal to five
                times your monk level.
              </p>
            </div>
          </div>

          {/* Extra Attack Collapsible */}

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
                5th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 5th level, you can attack twice, instead of once,
                whenever you take the Attack action on your turn.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-stunning-strike"
              checked={expand === "STUNNING_STRIKE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "STUNNING_STRIKE" ? "STUNNING_STRIKE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Stunning Strike
              <span className="block text-gray-500 text-sm mt-1">
                5th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 5th level, you can interfere with the flow of ki in
                an opponent's body. When you hit another creature with a melee
                weapon attack, you can spend 1 ki point to attempt a stunning
                strike. The target must succeed on a Constitution saving throw
                or be stunned until the end of your next turn.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-ki-empowered-strikes"
              checked={expand === "KI_EMPOWERED_STRIKES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "KI_EMPOWERED_STRIKES"
                    ? "KI_EMPOWERED_STRIKES"
                    : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Ki-Empowered Strikes
              <span className="block text-gray-500 text-sm mt-1">
                6th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 6th level, your unarmed strikes count as magical for
                the purpose of overcoming resistance and immunity to nonmagical
                attacks and damage.
              </p>
            </div>
          </div>
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
                At 7th level, your instinctive agility lets you dodge out of the
                way of certain area effects, such as a blue dragon's lightning
                breath or a fireball spell. When you are subjected to an effect
                that allows you to make a Dexterity saving throw to take only
                half damage, you instead take no damage if you succeed on the
                saving throw, and only half damage if you fail.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-stillness-of-mind"
              checked={expand === "STILLNESS_OF_MIND"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "STILLNESS_OF_MIND" ? "STILLNESS_OF_MIND" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Stillness of Mind
              <span className="block text-gray-500 text-sm mt-1">
                7th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 7th level, you can use your action to end one effect
                on yourself that is causing you to be charmed or frightened.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-purity-of-body"
              checked={expand === "PURITY_OF_BODY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PURITY_OF_BODY" ? "PURITY_OF_BODY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Purity of Body
              <span className="block text-gray-500 text-sm mt-1">
                10th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 10th level, your mastery of the ki flowing through you makes
                you immune to disease and poison.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-tongue-of-the-sun-and-moon"
              checked={expand === "TONGUE_OF_THE_SUN_AND_MOON"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "TONGUE_OF_THE_SUN_AND_MOON"
                    ? "TONGUE_OF_THE_SUN_AND_MOON"
                    : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Tongue of the Sun and Moon
              <span className="block text-gray-500 text-sm mt-1">
                13th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 13th level, you learn to touch the ki of other minds
                so that you understand all spoken languages. Moreover, any
                creature that can understand a language can understand what you
                say.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-diamond-soul"
              checked={expand === "DIAMOND_SOUL"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DIAMOND_SOUL" ? "DIAMOND_SOUL" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Diamond Soul
              <span className="block text-gray-500 text-sm mt-1">
                14th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 14th level, your mastery of ki grants you
                proficiency in all saving throws.
              </p>
              <br />
              <p>
                Additionally, whenever you make a saving throw and fail, you can
                spend 1 ki point to reroll it and take the second result.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-timeless-body"
              checked={expand === "TIMELESS_BODY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "TIMELESS_BODY" ? "TIMELESS_BODY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Timeless Body
              <span className="block text-gray-500 text-sm mt-1">
                15th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 15th level, your ki sustains you so that you suffer none of
                the frailty of old age, and you can't be aged magically. You can
                still die of old age, however. In addition, you no longer need
                food or water.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-empty-body"
              checked={expand === "EMPTY_BODY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "EMPTY_BODY" ? "EMPTY_BODY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Empty Body
              <span className="block text-gray-500 text-sm mt-1">
                18th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 18th level, you can use your action to spend 4 ki
                points to become invisible for 1 minute. During that time, you
                also have resistance to all damage but force damage.
              </p>
              <br />
              <p>
                Additionally, you can spend 8 ki points to cast the astral
                projection spell, without needing material components. When you
                do so, you can't take any other creatures with you.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-perfect-self"
              checked={expand === "PERFECT_SELF"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PERFECT_SELF" ? "PERFECT_SELF" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Perfect Self
              <span className="block text-gray-500 text-sm mt-1">
                20th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 20th level, when you roll for initiative and have no ki
                points remaining, you regain 4 ki points.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-unarmored-movement"
              checked={expand === "UNARMORED_MOVEMENT"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "UNARMORED_MOVEMENT" ? "UNARMORED_MOVEMENT" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Unarmored Movement
              <span className="block text-gray-500 text-sm mt-1">
                6th, 9th, 10th, 14th, 18th Level
              </span>
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Improvement Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>6th</th>
                      <td>
                        At 6th level, your Unarmored Speed speed bonus increases
                        to 15 feet while you are not wearing armor or wielding a
                        shield.
                      </td>
                    </tr>
                    <tr>
                      <th>9th</th>
                      <td>
                        At 9th level, you gain the ability to move along
                        vertical surfaces and across liquids on your turn
                        without falling during your move.
                      </td>
                    </tr>
                    <tr>
                      <th>10th</th>
                      <td>
                        At 10th level, your Unarmored Speed speed bonus
                        increases to 20 feet while you are not wearing armor or
                        wielding a shield.
                      </td>
                    </tr>
                    <tr>
                      <th>14th</th>
                      <td>
                        At 14th level, your Unarmored Speed speed bonus
                        increases to 25 feet while you are not wearing armor or
                        wielding a shield.
                      </td>
                    </tr>
                    <tr>
                      <th>18th</th>
                      <td>
                        At 18th level, your Unarmored Speed speed bonus
                        increases to 30 feet while you are not wearing armor or
                        wielding a shield.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <p>
                These improvements represent your ability to move swiftly and
                with agility while not burdened by armor or shields.
              </p>
            </div>
          </div>

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
              <div className="overflow-x-auto">
                <table className="table table-zebra bg-base-100">
                  <tbody>
                    <tr>
                      <th>Armor</th>
                      <td>None</td>
                    </tr>
                    <tr>
                      <th>Weapons</th>
                      <td>Simple weapons, shortswords</td>
                    </tr>
                    <tr>
                      <th>Tools</th>
                      <td>
                        Choose one type of artisan's tools or one musical
                        instrument
                      </td>
                    </tr>
                    <tr>
                      <th>Saving Throws</th>
                      <td>Strength, Dexterity</td>
                    </tr>
                    <tr>
                      <th>Skills</th>
                      <td>
                        Choose two from Acrobatics, Athletics, History, Insight,
                        Religion, and Stealth
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
              <div className="overflow-x-auto">
                <table className="table table-zebra bg-base-100">
                  <tbody>
                    <tr>
                      <th>Hit Dice</th>
                      <td>1d8 per monk level</td>
                    </tr>
                    <tr>
                      <th>Hit Points at 1st Level</th>
                      <td>8 + your Constitution modifier</td>
                    </tr>
                    <tr>
                      <th>Hit Points at Higher Levels</th>
                      <td>
                        1d8 (or 5) + your Constitution modifier per monk level
                        after 1st
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide my-8"
              onClick={becomeMonk}
            >
              Monk
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
