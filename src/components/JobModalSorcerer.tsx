import Image from "next/image";
import { SetClassProps } from "../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../public/icons/sorcerericon.png";
import cleric from "../../public/images/dee-holmberg-bg-sorcerer.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "./icons/IconDoubleChevron";
import { sorcererCantrips } from "../../lib/_sorcererCantrips";
import { sorcererLevel1Spells } from "../../lib/_sorcererLevel1Spells";

declare global {
  interface Window {
    my_modal_sorcerer: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Sorcerer({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [cant1, setCant1] = useState<string>("Select Cantrip 1");
  const [cant2, setCant2] = useState<string>("Select Cantrip 2");
  const [cant3, setCant3] = useState<string>("Select Cantrip 3");
  const [cant4, setCant4] = useState<string>("Select Cantrip 4");
  const [spell1, setSpell1] = useState<string>("Select Spell 1");
  const [spell2, setSpell2] = useState<string>("Select Spell 2");
  useEffect(() => {
    const myModalSorcerer = document.getElementById("my_modal_sorcerer");
    if (myModalSorcerer) window.my_modal_sorcerer = myModalSorcerer;
  }, []);
  const becomeSorcerer = async () => {
    setDndClass({
      role: "Sorcerer",
      specialty: [],
      spells: [cant1, cant2, cant3, cant4, spell1, spell2],
      languages: [],
    });
    window.my_modal_sorcerer.close();
    window.location.href = "#item3";
  };
  return (
    <>
      <button
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_sorcerer.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain m-2 rounded-md max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Sorcerer
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_sorcerer" className="modal">
        <form method="dialog" className="modal-box">

          <Image
            src={cleric}
            alt="detail image"
            width={800}
            height={800}
            className="object-cover rounded-xl aspect-square"
          />
          <p className="mx-16 my-4 text-lg italic">
            A spellcaster who draws on inherent magic from a gift or bloodline
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
                  <td>d6</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Primary Ability</td>
                  <td>Charisma</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Constitution & Charisma</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Spellcasting Collapsible */}
          <div className="my-1 collapse collapse-plus bg-base-200">
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
            <div className="text-xl font-medium collapse-title">
              Spellcasting
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                An event in your past, or in the life of a parent or ancestor,
                left an indelible mark on you, infusing you with arcane magic.
                This font of magic, whatever its origin, fuels your spells. See
                Spells Rules for the general rules of spellcasting and the
                Spells Listing for the sorcerer spell list.
              </p>
              <br />
              <h3 className="my-2 underline font-xl">Cantrips</h3>
              <p>
                At 1st level, you know four cantrips of your choice from the
                sorcerer spell list. You learn additional sorcerer cantrips of
                your choice at higher levels, as shown in the Cantrips Known
                column of the Sorcerer table.
              </p>
              <br />
              <h3 className="my-2 underline font-xl">Spell Slots</h3>
              <p>
                The Sorcerer table shows how many spell slots you have to cast
                your sorcerer spells of 1st level and higher. To cast one of
                these sorcerer spells, you must expend a slot of the spell’s
                level or higher. You regain all expended spell slots when you
                finish a long rest.
              </p>
              <br />
              <p>
                For example, if you know the 1st-level spell burning hands and
                have a 1st-level and a 2nd-level spell slot available, you can
                cast burning hands using either slot.
              </p>
              <br />
              <h3 className="my-2 underline font-xl">
                Spells Known of 1st Level and Higher
              </h3>
              <p>
                You know two 1st-level spells of your choice from the sorcerer
                spell list. The Spells Known column of the Sorcerer table shows
                when you learn more sorcerer spells of your choice. Each of
                these spells must be of a level for which you have spell slots.
                For instance, when you reach 3rd level in this class, you can
                learn one new spell of 1st or 2nd level. Additionally, when you
                gain a level in this class, you can choose one of the sorcerer
                spells you know and replace it with another spell from the
                sorcerer spell list, which also must be of a level for which you
                have spell slots.
              </p>
              <br />
              <h3 className="my-2 underline font-xl">Spellcasting Ability</h3>
              <p>
                Charisma is your spellcasting ability for your sorcerer spells,
                since the power of your magic relies on your ability to project
                your will into the world. You use your Charisma whenever a spell
                refers to your spellcasting ability. In addition, you use your
                Charisma modifier when setting the saving throw DC for a
                sorcerer spell you cast and when making an attack roll with one.
              </p>
              <br />
              <p>
                Spell save DC = 8 + your proficiency bonus + your Charisma
                modifier
              </p>
              <br />
              <p>
                <br />
                Spell attack modifier = your proficiency bonus + your Charisma
                modifier
              </p>
              <br />
              <h3 className="my-2 underline font-xl">Spellcasting Focus</h3>
              <p>
                You can use an arcane focus (see the Adventuring Gear section)
                as a spellcasting focus for your sorcerer spells.
              </p>
            </div>
          </div>

          {/* Sorcerous Origin Collapsible */}
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-sorcerous-origin"
              checked={expand === "SORCEROUS_ORIGIN"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SORCEROUS_ORIGIN" ? "SORCEROUS_ORIGIN" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Sorcerous Origin
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Choose a sorcerous origin, which describes the source of your
                innate magical power: Draconic Bloodline, detailed at the end of
                the class description, or one from another source.
              </p>
              <p>
                Your choice grants you features when you choose it at 1st level
                and again at 6th, 14th, and 18th level.
              </p>
            </div>
          </div>

          {/* Font of Magic Collapsible */}
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-font-of-magic"
              checked={expand === "FONT_OF_MAGIC"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FONT_OF_MAGIC" ? "FONT_OF_MAGIC" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Font of Magic
              <span className="block mt-1 text-sm text-gray-500">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 2nd level, you tap into a deep wellspring of magic within
                yourself. This wellspring is represented by sorcery points,
                which allow you to create a variety of magical effects.
              </p>
              <h3 className="my-4 underline font-xl">Sorcery Points</h3>
              <p>
                You have 2 sorcery points, and you gain more as you reach higher
                levels, as shown in the Sorcery Points column of the Sorcerer
                table. You can never have more sorcery points than shown on the
                table for your level. You regain all spent sorcery points when
                you finish a long rest.
              </p>
              <h3 className="my-4 underline font-xl">Flexible Casting</h3>
              <p>
                You can use your sorcery points to gain additional spell slots,
                or sacrifice spell slots to gain additional sorcery points. You
                learn other ways to use your sorcery points as you reach higher
                levels.
              </p>
              <h3 className="my-4 underline font-xl">Creating Spell Slots</h3>
              <p>
                You can transform unexpended sorcery points into one spell slot
                as a bonus action on your turn. The table below shows the cost
                of creating a spell slot of a given level. You can create spell
                slots no higher in level than 5th. Any spell slot you create
                with this feature vanishes when you finish a long rest.
              </p>
              <br />
              <div className="overflow-x-auto">
                <table className="table w-full table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Spell Slot Level</th>
                      <th>Sorcery Point Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1st</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>2nd</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>3rd</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>4th</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>5th</td>
                      <td>7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="my-4 underline font-xl">
                Converting a Spell Slot to Sorcery Points
              </h3>
              <p>
                As a bonus action on your turn, you can expend one spell slot
                and gain a number of sorcery points equal to the slot’s level.
              </p>
            </div>
          </div>

          {/* Metamagic Collapsible */}
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-metamagic"
              checked={expand === "METAMAGIC"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "METAMAGIC" ? "METAMAGIC" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Metamagic
              <span className="block mt-1 text-sm text-gray-500">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 3rd level, you gain the ability to twist your spells to suit
                your needs. You gain two of the following Metamagic options of
                your choice. You gain another one at 10th and 17th level.
              </p>
              <p>
                You can use only one Metamagic option on a spell when you cast
                it, unless otherwise noted.
              </p>
            </div>
          </div>

          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />
          {/* Sorcerous Restoration Collapsible */}
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-sorcerous-restoration"
              checked={expand === "SORCEROUS_RESTORATION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SORCEROUS_RESTORATION"
                    ? "SORCEROUS_RESTORATION"
                    : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Sorcerous Restoration
              <span className="block mt-1 text-sm text-gray-500">
                20th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 20th level, you regain 4 expended sorcery points whenever you
                finish a short rest.
              </p>
            </div>
          </div>

          {/* Proficiencies Collapsible */}
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-proficiencies-sorcerer"
              checked={expand === "PROFICIENCIES_SORCERER"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PROFICIENCIES_SORCERER"
                    ? "PROFICIENCIES_SORCERER"
                    : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Proficiencies
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="overflow-x-auto collapse-content">
              <table className="table w-full table-zebra bg-base-100">
                <thead>
                  <tr>
                    <th>Proficiency</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Armor</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Weapons</td>
                    <td>
                      Daggers, darts, slings, quarterstaffs, light crossbows
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Tools</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Saving Throws</td>
                    <td>Constitution, Charisma</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Skills</td>
                    <td>
                      Choose two from Arcana, Deception, Insight, Intimidation,
                      Persuasion, and Religion
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hit Points Collapsible */}
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-hit-points-sorcerer"
              checked={expand === "HIT_POINTS_SORCERER"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HIT_POINTS_SORCERER" ? "HIT_POINTS_SORCERER" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Hit Points
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="overflow-x-auto collapse-content">
              <table className="table w-full table-zebra bg-base-100">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Hit Dice</td>
                    <td>1d6 per sorcerer level</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at 1st Level</td>
                    <td>6 + your Constitution modifier</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at Higher Levels</td>
                    <td>
                      1d6 (or 4) + your Constitution modifier per sorcerer level
                      after 1st
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col items-center my-4">
            <select
              className="w-full max-w-xs my-2 select select-primary"
              onChange={(e) => setCant1(e.target.value)}
              value={cant1}
            >
              <option disabled>Select Cantrip 1</option>
              {sorcererCantrips.map((cant, i) => (
                <option key={`cant1${i}`}>
                  {cant.name} - {cant.range} - {cant.duration}
                </option>
              ))}
            </select>

            <select
              className="w-full max-w-xs my-2 select select-secondary"
              onChange={(e) => setCant2(e.target.value)}
              value={cant2}
            >
              <option disabled>Select Cantrip 2</option>
              {sorcererCantrips.map((cant, i) => (
                <option key={`cant2${i}`}>
                  {cant.name} - {cant.range} - {cant.duration}
                </option>
              ))}
            </select>

            <select
              className="w-full max-w-xs my-2 select select-success"
              onChange={(e) => setCant3(e.target.value)}
              value={cant3}
            >
              <option disabled>Select Cantrip 3</option>
              {sorcererCantrips.map((cant, i) => (
                <option key={`cant3${i}`}>
                  {cant.name} - {cant.range} - {cant.duration}
                </option>
              ))}
            </select>

            <select
              className="w-full max-w-xs my-2 select select-info"
              onChange={(e) => setCant4(e.target.value)}
              value={cant4}
            >
              <option disabled>Select Cantrip 4</option>
              {sorcererCantrips.map((cant, i) => (
                <option key={`cant4${i}`}>
                  {cant.name} - {cant.range} - {cant.duration}
                </option>
              ))}
            </select>

            <select
              className="w-full max-w-xs my-2 select select-warning"
              onChange={(e) => setSpell1(e.target.value)}
              value={spell1}
            >
              <option disabled>Select Spell 1</option>
              {sorcererLevel1Spells.map((spell, i) => (
                <option key={`spell1${i}`}>
                  {spell.name} - {spell.range} - {spell.duration}
                </option>
              ))}
            </select>
            <select
              className="w-full max-w-xs my-2 select select-error"
              onChange={(e) => setSpell2(e.target.value)}
              value={spell2}
            >
              <option disabled>Select Spell 2</option>
              {sorcererLevel1Spells.map((spell, i) => (
                <option key={`spell2${i}`}>
                  {spell.name} - {spell.range} - {spell.duration}
                </option>
              ))}
            </select>
            <button
              className="my-8 btn btn-success btn-wide"
              onClick={becomeSorcerer}
            >
              Sorcerer
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
