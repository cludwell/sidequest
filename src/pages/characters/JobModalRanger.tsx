import Image from "next/image";
import { SetClassProps } from "../../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../../public/icons/rangericon.png";
import ranger from "../../../public/images/dee-holmberg-bg-ranger.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "../IconDoubleChevron";
declare global {
  interface Window {
    my_modal_ranger: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Ranger({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [favored, setFavored] = useState<string>("Aberrations");
  const [errors, setErrors] = useState<string[]>([]);
  useEffect(() => {
    const myModalRanger = document.getElementById("my_modal_ranger");
    if (myModalRanger) window.my_modal_ranger = myModalRanger;
  }, []);

  const favoredEnemies = [
    "Aberrations",
    "Beasts",
    "Celestials",
    "Constructs",
    "Dragons",
    "Elementals",
    "Fey",
    "Fiends",
    "Giants",
    "Monstrosities",
    "Oozes",
    "Plants",
    "Undead",
    "Goblins", // Humanoid subtype
    "Orcs", // Humanoid subtype
    "Elves", // Humanoid subtype
    "Dwarves", // Humanoid subtype
    // ... any other humanoid subtypes or specific creature types relevant to your game
  ];

  const becomeRanger = async () => {
    const err = [];
    if (!favored) {
      err.push("Please select a favored enemy");
      setErrors(err);
      return;
    } else setErrors([]);
    setDndClass({
      role: "Ranger",
      specialty: [`Favored Enemy - ${favored}`],
      spells: [],
      languages: [],
    });
    window.my_modal_ranger.close();
    window.location.href = "#item3";
  };
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_ranger.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain rounded-md m-2 max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Ranger
        </span>
<IconDoubleChevron />
      </button>
      <dialog id="my_modal_ranger" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Barbarian
          </h3> */}
          <Image
            src={ranger}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="text-lg my-4 mx-16 italic">
            A priestly champion who wields divine magic in service of a higher
            power
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
                  <td>d10</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Primary Ability</td>
                  <td>Dexteritty & Wisdom</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Strength & Dexterity</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Favored Enemy Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-favored-enemy"
              checked={expand === "FAVORED_ENEMY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FAVORED_ENEMY" ? "FAVORED_ENEMY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Favored Enemy
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 1st level, you have significant experience
                studying, tracking, hunting, and even talking to a certain type
                of enemy.
              </p>
              <br />
              <p>
                Choose a type of favored enemy: aberrations, beasts, celestials,
                constructs, dragons, elementals, fey, fiends, giants,
                monstrosities, oozes, plants, or undead. Alternatively, you can
                select two races of humanoid (such as gnolls and orcs) as
                favored enemies.
              </p>
              <br />
              <p>
                You have advantage on Wisdom (Survival) checks to track your
                favored enemies, as well as on Intelligence checks to recall
                information about them.
              </p>
              <br />
              <p>
                When you gain this feature, you also learn one language of your
                choice that is spoken by your favored enemies, if they speak one
                at all.
              </p>
              <br />
              <p>
                You choose one additional favored enemy, as well as an
                associated language, at 6th and 14th level. As you gain levels,
                your choices should reflect the types of monsters you have
                encountered on your adventures.
              </p>
            </div>
          </div>
          {/* Natural Explorer Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-natural-explorer"
              checked={expand === "NATURAL_EXPLORER"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "NATURAL_EXPLORER" ? "NATURAL_EXPLORER" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Natural Explorer
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                You are particularly familiar with one type of natural
                environment and are adept at traveling and surviving in such
                regions. Choose one type of favored terrain: arctic, coast,
                desert, forest, grassland, mountain, swamp, or the Underdark.
                When you make an Intelligence or Wisdom check related to your
                favored terrain, your proficiency bonus is doubled if you are
                using a skill that you're proficient in.
              </p>
              <br />
              <p>
                While traveling for an hour or more in your favored terrain, you
                gain the following benefits:
              </p>
              <ul className="list-disc my-4 ml-8">
                <li className="my-2">
                  Difficult terrain doesn't slow your group's travel.
                </li>
                <li className="my-2">
                  Your group can't become lost except by magical means.
                </li>
                <li className="my-2">
                  Even when you are engaged in another activity while traveling
                  (such as foraging, navigating, or tracking), you remain alert
                  to danger.
                </li>
                <li className="my-2">
                  If you are traveling alone, you can move stealthily at a
                  normal pace.
                </li>
                <li className="my-2">
                  When you forage, you find twice as much food as you normally
                  would.
                </li>
                <li className="my-2">
                  While tracking other creatures, you also learn their exact
                  number, their sizes, and how long ago they passed through the
                  area.
                </li>
              </ul>
              <p>
                You choose additional favored terrain types at 6th and 10th
                level.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-natural-explorer"
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
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 2nd level, you adopt a particular style of fighting as your
                specialty. Choose one of the following options. You can't take a
                Fighting Style option more than once, even if you later get to
                choose again.
              </p>
              <br />
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full bg-base-100">
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
                      <td className="font-bold">Blind Fighting</td>
                      <td>
                        You have blind sight with a range of 10 feet. Within
                        that range, you can effectively see anything that isn't
                        behind total cover, even if you're blinded or in
                        darkness. Moreover, you can see an invisible creature
                        within that range, unless the creature successfully
                        hides from you.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Defense</td>
                      <td>
                        While you are wearing armor, you gain a +1 bonus to AC.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Druidic Warrior</td>
                      <td>
                        You learn two cantrips of your choice from the Druid
                        spell list. They count as ranger spells for you, and
                        Wisdom is your spellcasting ability for them. Whenever
                        you gain a level in this class, you can replace one of
                        these cantrips with another cantrip from the Druid spell
                        list.
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
                      <td className="font-bold">Thrown Weapon Fighting</td>
                      <td>
                        You can draw a weapon that has the thrown property as
                        part of the attack you make with the weapon. In
                        addition, when you hit with a ranged attack using a
                        thrown weapon, you gain a +2 bonus to the damage roll.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Two-Weapon Fighting</td>
                      <td>
                        When you engage in two-weapon fighting, you can add your
                        ability modifier to the damage of the second attack.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Close Quarters Shooter (UA)</td>
                      <td>
                        When making a ranged attack while you are within 5 feet
                        of a hostile creature, you do not have disadvantage on
                        the attack roll. Your ranged attacks ignore half cover
                        and three-quarters cover against targets within 30 feet
                        of you. You have a +1 bonus to attack rolls on ranged
                        attacks.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Interception (UA)</td>
                      <td>
                        When a creature you can see hits a target that is within
                        5 feet of you with an attack, you can use your reaction
                        to reduce the damage the target takes by 1d10 + your
                        proficiency bonus (to a minimum of 0 damage). You must
                        be wielding a shield or a simple or martial weapon to
                        use this reaction.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Mariner (UA)</td>
                      <td>
                        As long as you are not wearing heavy armor or using a
                        shield, you have a swimming speed and a climbing speed
                        equal to your normal speed, and you gain a +1 bonus to
                        armor class.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Tunnel Fighter (UA)</td>
                      <td>
                        As a bonus action, you can enter a defensive stance that
                        lasts until the start of your next turn. While in your
                        defensive stance, you can make opportunity attacks
                        without using your reaction, and you can use your
                        reaction to make a melee attack against a creature that
                        moves more than 5 feet while within your reach.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Unarmed Fighting (UA)</td>
                      <td>
                        Your unarmed strikes can deal bludgeoning damage equal
                        to 1d6 + your Strength modifier. If you strike with two
                        free hands, the d6 becomes a d8. When you successfully
                        start a grapple, you can deal 1d4 bludgeoning damage to
                        the grappled creature. Until the grapple ends, you can
                        also deal this damage to the creature whenever you hit
                        it with a melee attack.
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
              name="my-accordion-spellcasting"
              checked={expand === "SPELLCASTING"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SPELLCASTING" ? "SPELLCASTING" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Spellcasting
              <span className="block text-gray-500 text-sm mt-1">
                2nd level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                By the time you reach 2nd level, you have learned to use the
                magical essence of nature to cast spells, much as a druid does.
                See Spells Rules for the general rules of spellcasting and the
                Spells Listing for the ranger spell list.
              </p>
              <br />

              <h3 className="font-xl my-4 underline">Spell Slots</h3>
              <p>
                The Ranger table shows how many spell slots you have to cast
                your ranger spells of 1st level and higher. To cast one of these
                spells, you must expend a slot of the spell's level or higher.
                You regain all expended spell slots when you finish a long rest.
              </p>
              <br />
              <p>
                For example, if you know the 1st-level spell animal friendship
                and have a 1st-level and a 2nd-level spell slot available, you
                can cast animal friendship using either slot.
              </p>
              <br />

              <h3 className="font-xl my-4 underline">
                Spells Known of 1st Level and Higher
              </h3>
              <p>
                You know two 1st-level spells of your choice from the ranger
                spell list.
              </p>
              <br />
              <p>
                The Spells Known column of the Ranger table shows when you learn
                more ranger spells of your choice. Each of these spells must be
                of a level for which you have spell slots. For instance, when
                you reach 5th level in this class, you can learn one new spell
                of 1st or 2nd level.
              </p>
              <br />
              <p>
                Additionally, when you gain a level in this class, you can
                choose one of the ranger spells you know and replace it with
                another spell from the ranger spell list, which also must be of
                a level for which you have spell slots.
              </p>
              <br />

              <h3 className="font-xl my-4 underline">Spellcasting Ability</h3>
              <p>
                Wisdom is your spellcasting ability for your ranger spells,
                since your magic draws on your attunement to nature. You use
                your Wisdom whenever a spell refers to your spellcasting
                ability. In addition, you use your Wisdom modifier when setting
                the saving throw DC for a ranger spell you cast and when making
                an attack roll with one.
              </p>
              <br />
              <p>
                Spell save DC = 8 + your proficiency bonus + your Wisdom
                modifier
              </p>
              <br />
              <p>
                Spell attack modifier = your proficiency bonus + your Wisdom
                modifier
              </p>
            </div>
          </div>

          {/* Ranger Archetype */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-ranger-archetype"
              checked={expand === "RANGER_ARCHETYPE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "RANGER_ARCHETYPE" ? "RANGER_ARCHETYPE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Ranger Archetype
              <span className="block text-gray-500 text-sm mt-1">
                3rd level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 3rd level, you choose an archetype that you strive to
                emulate: the Hunter that is detailed at the end of the class
                description or one from another source. Your choice grants you
                features at 3rd level and again at 7th, 11th, and 15th level.
              </p>
            </div>
          </div>

          {/* Primeval Awareness */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-primeval-awareness"
              checked={expand === "PRIMEVAL_AWARENESS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PRIMEVAL_AWARENESS" ? "PRIMEVAL_AWARENESS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Primeval Awareness
              <span className="block text-gray-500 text-sm mt-1">
                3rd level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 3rd level, you can use your action and expend one
                ranger spell slot to focus your awareness on the region around
                you. For 1 minute per level of the spell slot you expend, you
                can sense whether the following types of creatures are present
                within 1 mile of you (or within up to 6 miles if you are in your
                favored terrain): aberrations, celestials, dragons, elementals,
                fey, fiends, and undead. This feature doesn't reveal the
                creatures' location or number.
              </p>
            </div>
          </div>

          {/* Extra Attack */}
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
                5th level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 5th level, you can attack twice, instead of once,
                whenever you take the Attack action on your turn.
              </p>
            </div>
          </div>

          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />

          {/* Land's Stride */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-lands-stride"
              checked={expand === "LANDS_STRIDE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "LANDS_STRIDE" ? "LANDS_STRIDE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Land's Stride
              <span className="block text-gray-500 text-sm mt-1">
                8th level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 8th level, moving through nonmagical difficult
                terrain costs you no extra movement. You can also pass through
                nonmagical plants without being slowed by them and without
                taking damage from them if they have thorns, spines, or a
                similar hazard.
              </p>
              <p>
                In addition, you have advantage on saving throws against plants
                that are magically created or manipulated to impede movement,
                such those created by the entangle spell.
              </p>
            </div>
          </div>

          {/* Hide in Plain Sight */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-hide-in-plain-sight"
              checked={expand === "HIDE_IN_PLAIN_SIGHT"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HIDE_IN_PLAIN_SIGHT" ? "HIDE_IN_PLAIN_SIGHT" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Hide in Plain Sight
              <span className="block text-gray-500 text-sm mt-1">
                10th level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 10th level, you can spend 1 minute creating
                camouflage for yourself. You must have access to fresh mud,
                dirt, plants, soot, and other naturally occurring materials with
                which to create your camouflage.
              </p>
              <p>
                Once you are camouflaged in this way, you can try to hide by
                pressing yourself up against a solid surface, such as a tree or
                wall, that is at least as tall and wide as you are. You gain a
                +10 bonus to Dexterity (Stealth) checks as long as you remain
                there without moving or taking actions. Once you move or take an
                action or a reaction, you must camouflage yourself again to gain
                this benefit.
              </p>
            </div>
          </div>

          {/* Vanish */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-vanish"
              checked={expand === "VANISH"}
              onChange={() =>
                setExpanded((prev) => (prev !== "VANISH" ? "VANISH" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Vanish
              <span className="block text-gray-500 text-sm mt-1">
                14th level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 14th level, you can use the Hide action as a bonus
                action on your turn. Also, you can't be tracked by nonmagical
                means, unless you choose to leave a trail.
              </p>
            </div>
          </div>

          {/* Feral Senses */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-feral-senses"
              checked={expand === "FERAL_SENSES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FERAL_SENSES" ? "FERAL_SENSES" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Feral Senses
              <span className="block text-gray-500 text-sm mt-1">
                18th level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 18th level, you gain preternatural senses that help you fight
                creatures you can't see. When you attack a creature you can't
                see, your inability to see it doesn't impose disadvantage on
                your attack rolls against it.
              </p>
              <p>
                You are also aware of the location of any invisible creature
                within 30 feet of you, provided that the creature isn't hidden
                from you and you aren't blinded or deafened.
              </p>
            </div>
          </div>

          {/* Foe Slayer */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-foe-slayer"
              checked={expand === "FOE_SLAYER"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FOE_SLAYER" ? "FOE_SLAYER" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Foe Slayer
              <span className="block text-gray-500 text-sm mt-1">
                20th level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 20th level, you become an unparalleled hunter of your
                enemies. Once on each of your turns, you can add your Wisdom
                modifier to the attack roll or the damage roll of an attack you
                make against one of your favored enemies. You can choose to use
                this feature before or after the roll, but before any effects of
                the roll are applied.
              </p>
            </div>
          </div>

          {/* Proficiencies Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-proficiencies-ranger"
              checked={expand === "PROFICIENCIES_RANGER"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PROFICIENCIES_RANGER"
                    ? "PROFICIENCIES_RANGER"
                    : null
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
                    <td>Light armor, medium armor, shields</td>
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
                    <td>Strength, Dexterity</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Skills</td>
                    <td>
                      Choose three from Animal Handling, Athletics, Insight,
                      Investigation, Nature, Perception, Stealth, and Survival
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
              name="my-accordion-hit-points-ranger"
              checked={expand === "HIT_POINTS_RANGER"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HIT_POINTS_RANGER" ? "HIT_POINTS_RANGER" : null
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
                    <td>1d10 per ranger level</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at 1st Level</td>
                    <td>10 + your Constitution modifier</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at Higher Levels</td>
                    <td>
                      1d10 (or 6) + your Constitution modifier per ranger level
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
              onChange={(e) => setFavored(e.target.value)}
              defaultValue="default"
            >
              {favoredEnemies.map((enem, i) => (
                <option key={`${enem}`} value={enem}>
                  {enem}
                </option>
              ))}
            </select>
            <button
              className="btn btn-success btn-wide my-8"
              onClick={becomeRanger}
            >
              Ranger
            </button>
          </div>
          <div className="toast toast-end">
            {!!errors.length &&
              errors.map((e, i) => (
                <div className="alert alert-error" key={`error${i}`}>
                  <span>{e}</span>
                </div>
              ))}
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
