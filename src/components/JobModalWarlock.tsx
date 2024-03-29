import Image from "next/image";
import { SetClassProps } from "../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../public/icons/warlockicon.png";
import warlock from "../../public/images/dee-holmberg-warlock2.png";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "./icons/IconDoubleChevron";
import { warlockCantrips } from "../../lib/_warlockCantrips";
import { warlockLevel1Spells } from "../../lib/_warlockLevel1Spells";
declare global {
  interface Window {
    my_modal_warlock: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Warlock({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [cant1, setCant1] = useState<string>("Select Cantrip 1");
  const [cant2, setCant2] = useState<string>("Select Cantrip 2");
  const [spell1, setSpell1] = useState<string>("Select Spell 1");
  const [spell2, setSpell2] = useState<string>("Select Spell 2");

  useEffect(() => {
    const myModalWarlock = document.getElementById("my_modal_warlock");
    if (myModalWarlock) window.my_modal_warlock = myModalWarlock;
  }, []);
  const becomeWarlock = async () => {
    setDndClass({
      role: "Warlock",
      specialty: [],
      spells: [cant1, cant2, spell1, spell2],
      languages: [],
    });
    window.my_modal_warlock.close();
    window.location.href = "#item3";
  };
  return (
    <>
      <button
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_warlock.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain m-2 rounded-md max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Warlock
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_warlock" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="mb-4 text-5xl font-bold text-center almendra">
            Barbarian
          </h3> */}
          <Image
            src={warlock}
            alt="detail image"
            width={800}
            height={800}
            className="object-cover rounded-xl aspect-square"
          />
          <p className="mx-16 my-4 text-lg italic">
            A wielder of magic that is derived from a bargain with an
            extraplanar entity
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
                  <td>d8</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Primary Ability</td>
                  <td>Charisma</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Wisdom & Charisma</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Otherworldly Patron Collapsible */}
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-otherworldly-patron"
              checked={expand === "OTHERWORLDLY_PATRON"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "OTHERWORLDLY_PATRON" ? "OTHERWORLDLY_PATRON" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Otherworldly Patron
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 1st level, you have struck a bargain with an otherworldly
                being of your choice: the Fiend, which is detailed at the end of
                the class description, or one from another source. Your choice
                grants you features at 1st level and again at 6th, 10th, and
                14th level.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-pact-magic"
              checked={expand === "PACT_MAGIC"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PACT_MAGIC" ? "PACT_MAGIC" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Pact Magic
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Your arcane research and the magic bestowed on you by your
                patron have given you facility with spells. See Spells Rules for
                the general rules of spellcasting and the Spells Listing for the
                warlock spell list.
              </p>
              <br />
              <h3 className="my-2 text-xl underline">Cantrips</h3>
              <p>
                You know two cantrips of your choice from the warlock spell
                list. You learn additional warlock cantrips of your choice at
                higher levels, as shown in the Cantrips Known column of the
                Warlock table.
              </p>
              <br />
              <h3 className="my-2 text-xl underline">Spell Slots</h3>
              <p>
                The Warlock table shows how many spell slots you have to cast
                your warlock spells of 1st through 5th level. The table also
                shows what the level of those slots is; all of your spell slots
                are the same level. To cast one of your warlock spells of 1st
                level or higher, you must expend a spell slot. You regain all
                expended Pact Magic spell slots when you finish a short or long
                rest.
              </p>
              <br />
              <h3 className="my-2 text-xl underline">
                Spells Known of 1st Level and Higher
              </h3>
              <p>
                At 1st level, you know two 1st-level spells of your choice from
                the warlock spell list. The Spells Known column of the Warlock
                table shows when you learn more warlock spells of your choice of
                1st level and higher. A spell you choose must be of a level no
                higher than what’s shown in the table’s Slot Level column for
                your level. When you reach 6th level, for example, you learn a
                new warlock spell, which can be 1st, 2nd, or 3rd level.
              </p>
              <br />
              <h3 className="my-2 text-xl underline">Spellcasting Ability</h3>
              <p>
                Charisma is your spellcasting ability for your warlock spells,
                so you use your Charisma whenever a spell refers to your
                spellcasting ability. In addition, you use your Charisma
                modifier when setting the saving throw DC for a warlock spell
                you cast and when making an attack roll with one.
              </p>
              <br />
              <h3 className="my-2 text-xl underline">Spellcasting Focus</h3>
              <p>
                You can use an arcane focus (see the Adventuring Gear section)
                as a spellcasting focus for your warlock spells.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-eldritch-invocations"
              checked={expand === "ELDRITCH_INVOCATIONS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ELDRITCH_INVOCATIONS"
                    ? "ELDRITCH_INVOCATIONS"
                    : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Eldritch Invocations
              <span className="block mt-1 text-sm text-gray-500">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                In your study of occult lore, you have unearthed eldritch
                invocations, fragments of forbidden knowledge that imbue you
                with an abiding magical ability.
              </p>
              <br />
              <h3 className="my-2 text-xl underline">
                Eldritch Invocations Knowledge
              </h3>
              <p>
                At 2nd level, you gain two eldritch invocations of your choice.
                Your invocation options are detailed at the end of the class
                description. When you gain certain warlock levels, you gain
                additional invocations of your choice, as shown in the
                Invocations Known column of the Warlock table.
              </p>
              <br />
              <h3 className="my-2 text-xl underline">Invocation Replacement</h3>
              <p>
                Additionally, when you gain a level in this class, you can
                choose one of the invocations you know and replace it with
                another invocation that you could learn at that level.
              </p>
              <br />
              <h3 className="my-2 text-xl underline">
                Prerequisites for Invocations
              </h3>
              <p>
                If an eldritch invocation has prerequisites, you must meet them
                to learn it. You can learn the invocation at the same time that
                you meet its prerequisites. A level prerequisite refers to your
                level in this class.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-pact-boon"
              checked={expand === "PACT_BOON"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PACT_BOON" ? "PACT_BOON" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Pact Boon
              <span className="block mt-1 text-sm text-gray-500">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 3rd level, your otherworldly patron bestows a gift upon you
                for your loyal service. You gain one of the following features
                of your choice.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-mystic-arcanum"
              checked={expand === "MYSTIC_ARCANUM"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "MYSTIC_ARCANUM" ? "MYSTIC_ARCANUM" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Mystic Arcanum (6th level)
              <span className="block mt-1 text-sm text-gray-500">
                11th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 11th level, your patron bestows upon you a magical secret
                called an arcanum. Choose one 6th-level spell from the warlock
                spell list as this arcanum.
              </p>
              <br />
              <p>
                You can cast your arcanum spell once without expending a spell
                slot. You must finish a long rest before you can do so again.
              </p>
              <br />
              <p>
                At higher levels, you gain more warlock spells of your choice
                that can be cast in this way: one 7th-level spell at 13th level,
                one 8th-level spell at 15th level, and one 9th-level spell at
                17th level. You regain all uses of your Mystic Arcanum when you
                finish a long rest.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-eldritch-master"
              checked={expand === "ELDRITCH_MASTER"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ELDRITCH_MASTER" ? "ELDRITCH_MASTER" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Eldritch Master
              <span className="block mt-1 text-sm text-gray-500">
                20th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 20th level, you can draw on your inner reserve of mystical
                power while entreating your patron to regain expended spell
                slots. You can spend 1 minute entreating your patron for aid to
                regain all your expended spell slots from your Pact Magic
                feature. Once you regain spell slots with this feature, you must
                finish a long rest before you can do so again.
              </p>
            </div>
          </div>

          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "MYSTIC_ARCANUM_6TH"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "MYSTIC_ARCANUM_6TH" ? "MYSTIC_ARCANUM_6TH" : null
                )
              }
            />
            <div className="text-xl font-medium collapse-title">
              Mystic Arcanum
              <span className="block mt-1 text-sm text-gray-500">
                11th, 13th, 15th, 17th Level
              </span>
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <p>
                  At given level, your patron bestows upon you a magical secret
                  called an arcanum. Choose one nth-level spell (see table
                  below) from the warlock spell list as this arcanum.
                </p>
                <br />
                <p>
                  You can cast your arcanum spell once without expending a spell
                  slot. You must finish a long rest before you can do so again.
                </p>
                <br />
                <p>
                  At higher levels, you gain more warlock spells of your choice
                  that can be cast in this way: one 7th-level spell at 13th
                  level, one 8th-level spell at 15th level, and one 9th-level
                  spell at 17th level. You regain all uses of your Mystic
                  Arcanum when you finish a long rest.
                </p>
                <br />
                <table className="table table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>11th</th>
                      <td>
                        Choose one 6th-level spell from the warlock spell list
                        as this arcanum.
                      </td>
                    </tr>
                    <tr>
                      <th>13th</th>
                      <td>
                        Choose one 7th-level spell from the warlock spell list
                        as this arcanum.
                      </td>
                    </tr>
                    <tr>
                      <th>15th</th>
                      <td>
                        Choose one 8th-level spell from the warlock spell list
                        as this arcanum.
                      </td>
                    </tr>
                    <tr>
                      <th>17th</th>
                      <td>
                        Choose one 9th-level spell from the warlock spell list
                        as this arcanum.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />
          {/* Proficiencies Section */}
          <div className="my-1 collapse collapse-plus bg-base-200">
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
            <div className="text-xl font-medium collapse-title">
              Proficiencies
              <span className="block mt-1 text-sm text-gray-500">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <table className="table bg-base-100">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Armor</td>
                    <td>Light armor</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Weapons</td>
                    <td>Simple weapons</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Tools</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Saving Throws</td>
                    <td>Wisdom, Charisma</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Skills</td>
                    <td>
                      Choose two from Arcana, Deception, History, Intimidation,
                      Investigation, Nature, and Religion
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hit Points Section */}
          <div className="my-1 collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              name="my-accordion-hitpoints"
              checked={expand === "HIT_POINTS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HIT_POINTS" ? "HIT_POINTS" : null
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
              <table className="table bg-base-100">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Hit Dice</td>
                    <td>1d8 per warlock level</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at 1st Level</td>
                    <td>8 + your Constitution modifier</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at Higher Levels</td>
                    <td>
                      1d8 (or 5) + your Constitution modifier per warlock level
                      after 1st
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <select
              className="w-full max-w-xs my-2 select select-primary"
              onChange={(e) => setCant1(e.target.value)}
              value={cant1}
            >
              <option disabled>Select Cantrip 1</option>
              {warlockCantrips.map((cant, i) => (
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
              {warlockCantrips.map((cant, i) => (
                <option key={`cant2${i}`}>
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
              {warlockLevel1Spells.map((spell, i) => (
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
              {warlockLevel1Spells.map((spell, i) => (
                <option key={`spell2${i}`}>
                  {spell.name} - {spell.range} - {spell.duration}
                </option>
              ))}
            </select>
            <button
              className="my-8 btn btn-success btn-wide"
              onClick={becomeWarlock}
            >
              Warlock
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
