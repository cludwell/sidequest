import Image from "next/image";
import { SetClassProps } from "../../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../../public/icons/wizardicon.png";
import wizard from "../../../public/images/dee-holmberg-bg-wizard.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "../IconDoubleChevron";
import { wizardCantrips } from "../../../lib/_wizardCantrips";
import { wizardLevel1Spells } from "../../../lib/_wizardLevel1Spells";
declare global {
  interface Window {
    my_modal_wizard: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Wizard({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [cant1, setCant1] = useState<string>("Select Cantrip 1");
  const [cant2, setCant2] = useState<string>("Select Cantrip 2");
  const [cant3, setCant3] = useState<string>("Select Cantrip 3");
  const [spell1, setSpell1] = useState<string>("Select Spell 1");
  const [spell2, setSpell2] = useState<string>("Select Spell 2");
  const [spell3, setSpell3] = useState<string>("Select Spell 3");
  const [spell4, setSpell4] = useState<string>("Select Spell 4");
  const [spell5, setSpell5] = useState<string>("Select Spell 5");
  const [spell6, setSpell6] = useState<string>("Select Spell 6");
  useEffect(() => {
    const myModalWizard = document.getElementById("my_modal_wizard");
    if (myModalWizard) window.my_modal_wizard = myModalWizard;
  }, []);
  const becomeWizard = async () => {
    setDndClass({
      role: "Wizard",
      specialty: [],
      spells: [
        cant1,
        cant2,
        cant3,
        spell1,
        spell2,
        spell3,
        spell4,
        spell5,
        spell6,
      ],
      languages: [],
    });
    window.my_modal_wizard.close();
    window.location.href = "#item3";
  };
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_wizard.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain rounded-md m-2 max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Wizard
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_wizard" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Barbarian
          </h3> */}
          <Image
            src={wizard}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="text-lg my-4 mx-16 italic">
            A scholarly magic-user capable of manipulating the structures of
            reality
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
                  <td>d6</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Primary Ability</td>
                  <td>Intelligence</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Wisdom & Intelligence</td>
                </tr>
              </tbody>
            </table>
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
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                As a student of arcane magic, you have a spellbook containing
                spells that show the first glimmerings of your true power. See
                Spells Rules for the general rules of spellcasting and the
                Spells Listing for the wizard spell list.
              </p>
              <br />
              <h3 className="text-xl underline my-2">Cantrips</h3>
              <p>
                At 1st level, you know three cantrips of your choice from the
                wizard spell list. You learn additional wizard cantrips of your
                choice at higher levels, as shown in the Cantrips Known column
                of the Wizard table.
              </p>
              <br />
              <h3 className="text-xl underline my-2">Spellbook</h3>
              <p>
                At 1st level, you have a spellbook containing six 1st-level
                wizard spells of your choice. Your spellbook is the repository
                of the wizard spells you know, except your cantrips, which are
                fixed in your mind.
              </p>
              <br />
              <h3 className="text-xl underline my-2">
                Preparing and Casting Spells
              </h3>
              <p>
                The Wizard table shows how many spell slots you have to cast
                your wizard spells of 1st level and higher. To cast one of these
                spells, you must expend a slot of the spell's level or higher.
                You regain all expended spell slots when you finish a long rest.
                Further details are provided in the text.
              </p>
              <br />
              <h3 className="text-xl underline my-2">Spellcasting Ability</h3>
              <p>
                Intelligence is your spellcasting ability for your wizard
                spells. Detailed calculations are provided for Spell save DC and
                Spell attack modifier.
              </p>
              <br />
              <h3 className="text-xl underline my-2">Ritual Casting</h3>
              <p>
                You can cast a wizard spell as a ritual if that spell has the
                ritual tag and you have the spell in your spellbook. You don't
                need to have the spell prepared.
              </p>
              <br />
              <h3 className="text-xl underline my-2">Spellcasting Focus</h3>
              <p>
                You can use an arcane focus (see the Adventuring Gear section)
                as a spellcasting focus for your wizard spells.
              </p>
              <br />
              <h3 className="text-xl underline my-2">Learning Spells</h3>
              <p>
                Each time you gain a wizard level, you can add two wizard spells
                of your choice to your spellbook for free. Further details are
                provided in the text.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-your-spellbook"
              checked={expand === "YOUR_SPELLBOOK"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "YOUR_SPELLBOOK" ? "YOUR_SPELLBOOK" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Your Spellbook
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                The spells that you add to your spellbook as you gain levels
                reflect the arcane research you conduct on your own, as well as
                intellectual breakthroughs you have had about the nature of the
                multiverse. Discovering other spells on your adventures is also
                possible.
              </p>
              <br />
              <h3 className="text-xl underline my-2">
                Copying a Spell into the Book
              </h3>
              <p>
                When you find a wizard spell of 1st level or higher, you can
                incorporate it into your spellbook under certain conditions. The
                process involves both understanding the original notation and
                then transcribing it using your own symbols.
              </p>
              <p>
                For every level of the spell, the procedure requires 2 hours and
                an expense of 50 gp. This cost denotes the materials you use up
                during your experiments with the spell and the fine inks needed
                for recording.
              </p>
              <br />
              <h3 className="text-xl underline my-2">Replacing the Book</h3>
              <p>
                If you wish to make a backup of your spellbook or if you lose
                your original, you can copy spells from your primary spellbook
                to another. This is a quicker and simpler task, consuming only 1
                hour and 10 gp for each level of the transferred spell. In the
                case of a lost spellbook, you'd need to locate new spells for
                any gaps in your backup.
              </p>
              <br />
              <h3 className="text-xl underline my-2">The Book's Appearance</h3>
              <p>
                Your spellbook stands out as a distinct compilation of spells,
                adorned with its special artistic touches and annotations. It
                could be a simple leather book, a lavishly bound volume, or even
                a collection of notes hastily put together after a misadventure.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-arcane-recovery"
              checked={expand === "ARCANE_RECOVERY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ARCANE_RECOVERY" ? "ARCANE_RECOVERY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Arcane Recovery
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                By studying your spellbook, you've mastered the art of regaining
                some of your spent magical energy. After a short rest, you can
                restore expended spell slots once per day. The total levels of
                the slots should be half your wizard level (rounded up) or less,
                and none can be 6th level or higher.
              </p>
              <br />
              <p>
                For instance, a 4th-level wizard might regain a 2nd-level slot
                or two 1st-level slots.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-arcane-tradition"
              checked={expand === "ARCANE_TRADITION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ARCANE_TRADITION" ? "ARCANE_TRADITION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Arcane Tradition
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 2nd level, you select an arcane tradition, focusing your
                magical studies on one of eight schools. Your choice bestows
                upon you features at various stages in your wizard journey.
              </p>
              <p>
                Examples of traditions include Abjuration, Conjuration, and the
                School of Evocation, with more options available in other
                sources.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-spell-mastery"
              checked={expand === "SPELL_MASTERY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SPELL_MASTERY" ? "SPELL_MASTERY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Spell Mastery
              <span className="block text-gray-500 text-sm mt-1">
                18th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                By the time you reach the 18th level, your command over certain
                spells is so profound that you can cast them without expending
                spell slots, as long as they're prepared. After dedicating 8
                hours to studying, you can swap out these spells for others of
                the same level.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-signature-spells"
              checked={expand === "SIGNATURE_SPELLS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SIGNATURE_SPELLS" ? "SIGNATURE_SPELLS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Signature Spells
              <span className="block text-gray-500 text-sm mt-1">
                20th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                By the time you attain the 20th level, you've achieved mastery
                over two potent spells, which you can cast with minimal effort.
                These two 3rd-level wizard spells, designated as your signature
                spells, are always at the ready. Moreover, they don't consume
                any of your prepared spell slots.
              </p>
              <br />
              <p>
                You can cast each of these spells once at their 3rd-level
                without depleting a spell slot. After doing so, you need to rest
                - either short or long - before you can cast them in this manner
                again. If you wish to cast them at a higher level, you'll have
                to use a spell slot in the usual way.
              </p>
            </div>
          </div>

          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />

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
                    <td>Intelligence, Wisdom</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Skills</td>
                    <td>
                      Choose two from Arcana, History, Insight, Investigation,
                      Medicine, and Religion
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
                    <td>1d6 per wizard level</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at 1st Level</td>
                    <td>6 + your Constitution modifier</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at Higher Levels</td>
                    <td>
                      1d6 (or 4) + your Constitution modifier per wizard level
                      after 1st
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col items-center">
          <select
              className="select select-primary w-full max-w-xs my-2"
              onChange={(e) => setCant1(e.target.value)}
              value={cant1}
            >
              <option disabled>Select Cantrip 1</option>
              {wizardCantrips.map((cant, i) => (
                <option key={`cant1${i}`}>
                  {cant.name} - {cant.range} - {cant.duration}
                </option>
              ))}
            </select>

            <select
              className="select select-secondary w-full max-w-xs my-2"
              onChange={(e) => setCant2(e.target.value)}
              value={cant2}
            >
              <option disabled>Select Cantrip 2</option>
              {wizardCantrips.map((cant, i) => (
                <option key={`cant2${i}`}>
                  {cant.name} - {cant.range} - {cant.duration}
                </option>
              ))}
            </select>

            <select
              className="select select-success w-full max-w-xs my-2"
              onChange={(e) => setCant3(e.target.value)}
              value={cant3}
            >
              <option disabled>Select Cantrip 3</option>
              {wizardCantrips.map((cant, i) => (
                <option key={`cant3${i}`}>
                  {cant.name} - {cant.range} - {cant.duration}
                </option>
              ))}
            </select>

            <select
              className="select select-warning w-full max-w-xs my-2"
              onChange={(e) => setSpell1(e.target.value)}
              value={spell1}
            >
              <option disabled>Select Spell 1</option>
              {wizardLevel1Spells.map((spell, i) => (
                <option key={`spell1${i}`}>
                  {spell.name} - {spell.range} - {spell.duration}
                </option>
              ))}
            </select>
            <select
              className="select select-error w-full max-w-xs my-2"
              onChange={(e) => setSpell2(e.target.value)}
              value={spell2}
            >
              <option disabled>Select Spell 2</option>
              {wizardLevel1Spells.map((spell, i) => (
                <option key={`spell2${i}`}>
                  {spell.name} - {spell.range} - {spell.duration}
                </option>
              ))}
            </select>
            <select
              className="select select-error w-full max-w-xs my-2"
              onChange={(e) => setSpell3(e.target.value)}
              value={spell3}
            >
              <option disabled>Select Spell 3</option>
              {wizardLevel1Spells.map((spell, i) => (
                <option key={`spell3${i}`}>
                  {spell.name} - {spell.range} - {spell.duration}
                </option>
              ))}
            </select>
            <select
              className="select select-error w-full max-w-xs my-2"
              onChange={(e) => setSpell4(e.target.value)}
              value={spell4}
            >
              <option disabled>Select Spell 4</option>
              {wizardLevel1Spells.map((spell, i) => (
                <option key={`spell4${i}`}>
                  {spell.name} - {spell.range} - {spell.duration}
                </option>
              ))}
            </select>
            <select
              className="select select-error w-full max-w-xs my-2"
              onChange={(e) => setSpell5(e.target.value)}
              value={spell5}
            >
              <option disabled>Select Spell 5</option>
              {wizardLevel1Spells.map((spell, i) => (
                <option key={`spell5${i}`}>
                  {spell.name} - {spell.range} - {spell.duration}
                </option>
              ))}
            </select>
            <select
              className="select select-error w-full max-w-xs my-2"
              onChange={(e) => setSpell6(e.target.value)}
              value={spell6}
            >
              <option disabled>Select Spell 6</option>
              {wizardLevel1Spells.map((spell, i) => (
                <option key={`spell6${i}`}>
                  {spell.name} - {spell.range} - {spell.duration}
                </option>
              ))}
            </select>
            <button
              className="btn btn-success btn-wide my-8"
              onClick={becomeWizard}
            >
              Wizard
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
