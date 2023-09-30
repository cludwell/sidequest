import Image from "next/image";
import { SetClassProps } from "../../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../../public/icons/bardicon.png";
import bard from "../../../public/images/dee-holmberg-bg-bard.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
declare global {
  interface Window {
    my_modal_bard: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Bard({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModalBard = document.getElementById("my_modal_bard");
    if (myModalBard) window.my_modal_bard = myModalBard;
  }, []);
  const becomeBard = async () => {
    setDndClass({ role: "Bard", specialty: [], spells: [], languages: [] });
    window.my_modal_bard.close();
    window.location.href = "#item3";
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
              <p>
                You have learned to untangle and reshape the fabric of reality
                in harmony with your wishes and music. Your spells are part of
                your vast repertoire, magic that you can tune to different
                situations. See Spells Rules for the general rules of
                spellcasting and the Spells Listing for the bard spell list.
              </p>

              <h3 className="text-lg font-medium mt-4">Cantrips</h3>
              <p>
                You know two cantrips of your choice from the bard spell list.
                You learn additional bard cantrips of your choice at higher
                levels, as shown in the Cantrips Known column of the Bard table.
              </p>

              <h3 className="text-lg font-medium mt-4">Spell Slots</h3>
              <p>
                The Bard table shows how many spell slots you have to cast your
                bard spells of 1st level and higher. To cast one of these
                spells, you must expend a slot of the spell’s level or higher.
                You regain all expended spell slots when you finish a long rest.
              </p>

              <h3 className="text-lg font-medium mt-4">
                Spells Known of 1st Level and Higher
              </h3>
              <p>
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
              <p>
                Charisma is your spellcasting ability for your bard spells. Your
                magic comes from the heart and soul you pour into the
                performance of your music or oration. You use your Charisma
                whenever a spell refers to your spellcasting ability. In
                addition, you use your Charisma modifier when setting the saving
                throw DC for a bard spell you cast and when making an attack
                roll with one.
              </p>

              <h3 className="text-lg font-medium mt-4">Ritual Casting</h3>
              <p>
                You can cast any bard spell you know as a ritual if that spell
                has the ritual tag.
              </p>

              <h3 className="text-lg font-medium mt-4">Spellcasting Focus</h3>
              <p>
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
              <p>
                You can inspire others through stirring words or music. To do
                so, you use a bonus action on your turn to choose one creature
                other than yourself within 60 feet of you who can hear you. That
                creature gains one Bardic Inspiration die, a d6.
              </p>
              <br />
              <p>
                Once within the next 10 minutes, the creature can roll the die
                and add the number rolled to one ability check, attack roll, or
                saving throw it makes. The creature can wait until after it
                rolls the d20 before deciding to use the Bardic Inspiration die,
                but must decide before the DM says whether the roll succeeds or
                fails. Once the Bardic Inspiration die is rolled, it is lost. A
                creature can have only one Bardic Inspiration die at a time.
              </p>
              <br />
              <p>
                You can use this feature a number of times equal to your
                Charisma modifier (a minimum of once). You regain any expended
                uses when you finish a long rest.
              </p>
              <br />
              <p>
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
              <p>
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
              <p>
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
              <p>
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
              <p>
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
              <p>
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
              Beginning when you reach 5th level, you regain all of your
              expended uses of Bardic Inspiration when you finish a short or
              long rest.
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
              At 6th level, you gain the ability to use musical notes or words
              of power to disrupt mind-influencing effects. As an action, you
              can start a performance that lasts until the end of your next
              turn. During that time, you and any friendly creatures within 30
              feet of you have advantage on saving throws against being
              frightened or charmed. A creature must be able to hear you to gain
              this benefit. The performance ends early if you are incapacitated
              or silenced or if you voluntarily end it (no action required).
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
              At 20th level, when you roll initiative and have no uses of Bardic
              Inspiration left, you regain one use.
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
                <table className="table table-zebra bg-base-100">
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
                <table className="table table-zebra bg-base-100">
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

          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide my-8"
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
