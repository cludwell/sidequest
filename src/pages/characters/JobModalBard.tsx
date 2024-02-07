import Image from "next/image";
import { SetClassProps } from "../../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../../public/icons/bardicon.png";
import bard from "../../../public/images/dee-holmberg-bg-bard.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import { bardCantrips } from "../../../lib/_bardCantrips";
import { bardLevel1Spells } from "../../../lib/_bardLevel1Spells";
import IconDoubleChevron from "../../components/icons/IconDoubleChevron";

declare global {
  interface Window {
    my_modal_bard: any;
  }
}
export default function Bard({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [cant1, setCant1] = useState<string>("Select Cantrip 1");
  const [cant2, setCant2] = useState<string>("Select Cantrip 2");
  const [spell1, setSpell1] = useState<string>("Select Spell 1");
  const [spell2, setSpell2] = useState<string>("Select Spell 2");
  const [spell3, setSpell3] = useState<string>("Select Spell 3");
  const [spell4, setSpell4] = useState<string>("Select Spell 4");

  useEffect(() => {
    const myModalBard = document.getElementById("my_modal_bard");
    if (myModalBard) window.my_modal_bard = myModalBard;
  }, []);

  const becomeBard = async () => {
    setDndClass({
      role: "Bard",
      specialty: [],
      spells: [cant1, cant2, spell1, spell2, spell3, spell4],
      languages: [],
    });
    window.my_modal_bard.close();
    window.location.href = "#item3";
    console.log("character bard", dndClass);
  };
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_bard.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain rounded-md m-2 max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Bard
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_bard" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Barbarian
          </h3> */}
          <Image
            src={bard}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="text-lg my-4 mx-16 italic">
            An inspiring magician whose power echoes the music of creation
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
                  <td>Charisma</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Dexterity & Charisma</td>
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
              <p className="text-sm sm:text-base">
                You have learned to untangle and reshape the fabric of reality
                in harmony with your wishes and music. Your spells are part of
                your vast repertoire, magic that you can tune to different
                situations. See Spells Rules for the general rules of
                spellcasting and the Spells Listing for the bard spell list.
              </p>

              <h3 className="text-lg font-medium mt-4">Cantrips</h3>
              <p className="text-sm sm:text-base">
                You know two cantrips of your choice from the bard spell list.
                You learn additional bard cantrips of your choice at higher
                levels, as shown in the Cantrips Known column of the Bard table.
              </p>

              <h3 className="text-lg font-medium mt-4">Spell Slots</h3>
              <p className="text-sm sm:text-base">
                The Bard table shows how many spell slots you have to cast your
                bard spells of 1st level and higher. To cast one of these
                spells, you must expend a slot of the spell’s level or higher.
                You regain all expended spell slots when you finish a long rest.
              </p>

              <h3 className="text-lg font-medium mt-4">
                Spells Known of 1st Level and Higher
              </h3>
              <p className="text-sm sm:text-base">
                You know four 1st-level spells of your choice from the bard
                spell list. The Spells Known column of the Bard table shows when
                you learn more bard spells of your choice. Each of these spells
                must be of a level for which you have spell slots, as shown on
                the table. Additionally, when you gain a level in this class,
                you can choose one of the bard spells you know and replace it
                with another spell from the bard spell list, which also must be
                of a level for which you have spell slots.
              </p>

              <h3 className="text-lg font-medium mt-4">Spellcasting Ability</h3>
              <p className="text-sm sm:text-base">
                Charisma is your spellcasting ability for your bard spells. Your
                magic comes from the heart and soul you pour into the
                performance of your music or oration. You use your Charisma
                whenever a spell refers to your spellcasting ability. In
                addition, you use your Charisma modifier when setting the saving
                throw DC for a bard spell you cast and when making an attack
                roll with one.
              </p>

              <h3 className="text-lg font-medium mt-4">Ritual Casting</h3>
              <p className="text-sm sm:text-base">
                You can cast any bard spell you know as a ritual if that spell
                has the ritual tag.
              </p>

              <h3 className="text-lg font-medium mt-4">Spellcasting Focus</h3>
              <p className="text-sm sm:text-base">
                You can use a musical instrument (see the Tools section) as a
                spellcasting focus for your bard spells.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-bardic-inspiration"
              checked={expand === "BARDIC_INSPIRATION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "BARDIC_INSPIRATION" ? "BARDIC_INSPIRATION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Bardic Inspiration
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                You can inspire others through stirring words or music. To do
                so, you use a bonus action on your turn to choose one creature
                other than yourself within 60 feet of you who can hear you. That
                creature gains one Bardic Inspiration die, a d6.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Once within the next 10 minutes, the creature can roll the die
                and add the number rolled to one ability check, attack roll, or
                saving throw it makes. The creature can wait until after it
                rolls the d20 before deciding to use the Bardic Inspiration die,
                but must decide before the DM says whether the roll succeeds or
                fails. Once the Bardic Inspiration die is rolled, it is lost. A
                creature can have only one Bardic Inspiration die at a time.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                You can use this feature a number of times equal to your
                Charisma modifier (a minimum of once). You regain any expended
                uses when you finish a long rest.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Your Bardic Inspiration die changes when you reach certain
                levels in this class. The die becomes a d8 at 5th level, a d10
                at 10th level, and a d12 at 15th level.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-jack-of-all-trades"
              checked={expand === "JACK_OF_ALL_TRADES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "JACK_OF_ALL_TRADES" ? "JACK_OF_ALL_TRADES" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Jack of All Trades
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Starting at 2nd level, you can add half your proficiency bonus,
                rounded down, to any ability check you make that doesn’t already
                include your proficiency bonus.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-song-of-rest"
              checked={expand === "SONG_OF_REST"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SONG_OF_REST" ? "SONG_OF_REST" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Song of Rest
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Beginning at 2nd level, you can use soothing music or oration to
                help revitalize your wounded allies during a short rest. The
                extra hit points increase when you reach certain levels in this
                class.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-bard-college"
              checked={expand === "BARD_COLLEGE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "BARD_COLLEGE" ? "BARD_COLLEGE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Bard College
              <span className="block text-gray-500 text-sm mt-1">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                At 3rd level, you delve into the advanced techniques of a bard
                college of your choice. Your choice grants you features at
                specific levels.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-expertise-3rd"
              checked={expand === "EXPERTISE_3RD"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "EXPERTISE_3RD" ? "EXPERTISE_3RD" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Expertise
              <span className="block text-gray-500 text-sm mt-1">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                At 3rd level, choose two of your skill proficiencies. Your
                proficiency bonus is doubled for specific checks.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-expertise-10th"
              checked={expand === "EXPERTISE_10TH"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "EXPERTISE_10TH" ? "EXPERTISE_10TH" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Expertise
              <span className="block text-gray-500 text-sm mt-1">
                10th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                At 10th level, choose two more of your skill proficiencies. Your
                proficiency bonus is doubled for specific checks.
              </p>
            </div>
          </div>
          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "FONT_OF_INSPIRATION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FONT_OF_INSPIRATION" ? "FONT_OF_INSPIRATION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Font of Inspiration
              <span className="block text-gray-500 text-sm mt-1">
                5th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Beginning when you reach 5th level, you regain all of your
                expended uses of Bardic Inspiration when you finish a short or
                long rest.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-8"
              checked={expand === "COUNTERCHARM"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "COUNTERCHARM" ? "COUNTERCHARM" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Countercharm
              <span className="block text-gray-500 text-sm mt-1">
                6th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                At 6th level, you gain the ability to use musical notes or words
                of power to disrupt mind-influencing effects. As an action, you
                can start a performance that lasts until the end of your next
                turn. During that time, you and any friendly creatures within 30
                feet of you have advantage on saving throws against being
                frightened or charmed. A creature must be able to hear you to
                gain this benefit. The performance ends early if you are
                incapacitated or silenced or if you voluntarily end it (no
                action required).
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-9"
              checked={expand === "SUPERIOR_INSPIRATION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SUPERIOR_INSPIRATION"
                    ? "SUPERIOR_INSPIRATION"
                    : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Superior Inspiration
              <span className="block text-gray-500 text-sm mt-1">
                20th Level
              </span>
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                At 20th level, when you roll initiative and have no uses of
                Bardic Inspiration left, you regain one use.{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-23"
              checked={expand === "PROFICIENCIES_2"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PROFICIENCIES_2" ? "PROFICIENCIES_2" : null
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
              <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Armor</th>
                      <td>Light armor</td>
                    </tr>
                    <tr>
                      <th>Weapons</th>
                      <td>
                        Simple weapons, hand crossbows, longswords, rapiers,
                        shortswords
                      </td>
                    </tr>
                    <tr>
                      <th>Tools</th>
                      <td>Three musical instruments of your choice</td>
                    </tr>
                    <tr>
                      <th>Saving Throws</th>
                      <td>Dexterity, Charisma</td>
                    </tr>
                    <tr>
                      <th>Skills</th>
                      <td>Choose any three</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-24"
              checked={expand === "HIT_POINTS_1"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HIT_POINTS_1" ? "HIT_POINTS_1" : null
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
              <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Hit Dice</th>
                      <td>1d8 per bard level</td>
                    </tr>
                    <tr>
                      <th>Hit Points at 1st Level</th>
                      <td>8 + your Constitution modifier</td>
                    </tr>
                    <tr>
                      <th>Hit Points at Higher Levels</th>
                      <td>
                        1d8 (or 5) + your Constitution modifier per bard level
                        after 1st
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
              name="my-accordion-7"
              checked={expand === "MAGICAL_SECRETS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "MAGICAL_SECRETS" ? "MAGICAL_SECRETS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Magical Secrets
              <span className="block text-gray-500 text-sm mt-1">
                10th, 14th, 18th Level
              </span>
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto">
              <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>10th</th>
                      <td>
                        Choose two spells from any classes, including this one.
                        They must be of a level you can cast or a cantrip. These
                        spells count as bard spells and are included in the
                        Spells Known column of the Bard table. You learn two
                        more spells from any classes at 14th and 18th level.
                      </td>
                    </tr>
                    <tr>
                      <th>14th</th>
                      <td>
                        Choose two spells from any classes, including this one.
                        They must be of a level you can cast or a cantrip. These
                        spells count as bard spells and are included in the
                        Spells Known column of the Bard table. You learn two
                        more spells from any class at 18th level.
                      </td>
                    </tr>
                    <tr>
                      <th>18th</th>
                      <td>
                        Choose two spells from any classes, including this one.
                        They must be of a level you can cast or a cantrip. These
                        spells count as bard spells and are included in the
                        Spells Known column of the Bard table.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center my-4">
            <select
              className="select select-primary w-full max-w-xs my-2"
              onChange={(e) => setCant1(e.target.value)}
              value={cant1}
            >
              <option disabled>Select Cantrip 1</option>
              {bardCantrips.map((cant, i) => (
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
              {bardCantrips.map((cant, i) => (
                <option key={`cant2${i}`}>
                  {cant.name} - {cant.range} - {cant.duration}
                </option>
              ))}
            </select>

            <select
              className="select select-success w-full max-w-xs my-2"
              onChange={(e) => setSpell1(e.target.value)}
              value={spell1}
            >
              <option disabled>Select Spell 1</option>
              {bardLevel1Spells.map((spell, i) => (
                <option key={`spell1${i}`}>
                  {spell.name} - {spell.castingTime} - {spell.duration}
                </option>
              ))}
            </select>

            <select
              className="select select-info w-full max-w-xs my-2"
              onChange={(e) => setSpell2(e.target.value)}
              value={spell2}
            >
              <option disabled>Select Spell 2</option>
              {bardLevel1Spells.map((spell, i) => (
                <option key={`spell2${i}`}>
                  {spell.name} - {spell.castingTime} - {spell.duration}
                </option>
              ))}
            </select>

            <select
              className="select select-warning w-full max-w-xs my-2"
              onChange={(e) => setSpell3(e.target.value)}
              value={spell3}
            >
              <option disabled>Select Spell 3</option>
              {bardLevel1Spells.map((spell, i) => (
                <option key={`spell3${i}`}>
                  {spell.name} - {spell.castingTime} - {spell.duration}
                </option>
              ))}
            </select>

            <select
              className="select select-error w-full max-w-xs my-2"
              onChange={(e) => setSpell4(e.target.value)}
              value={spell4}
            >
              <option disabled>Select Spell 4</option>
              {bardLevel1Spells.map((spell, i) => (
                <option key={`spell4${i}`}>
                  {spell.name} - {spell.castingTime} - {spell.duration}
                </option>
              ))}
            </select>

            <button
              className="btn btn-success btn-wide my-2"
              onClick={becomeBard}
            >
              Bard
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
