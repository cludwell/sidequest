import Image from "next/image";
import { SetClassProps } from "../../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../../public/icons/druidicon.png";
import druid from "../../../public/images/dee-holmberg-bg-druid.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
declare global {
  interface Window {
    my_modal_druid: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Druid({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModalDruid = document.getElementById("my_modal_druid");
    if (myModalDruid) window.my_modal_druid = myModalDruid;
  }, []);
  const becomeDruid = async () => setDndClass("Druid");
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_druid.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain rounded-md m-2 max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Druid
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
      <dialog id="my_modal_druid" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Barbarian
          </h3> */}
          <Image
            src={druid}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />

          <p className="text-lg my-4 mx-16 italic">
            A priest of the Old Faith, wielding the powers of nature and
            adopting animal forms.
          </p>
          <div className="overflow-x-auto m-1">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Stat</th>
                  <th>Feature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hit Die</td>
                  <td>d8</td>
                </tr>
                <tr>
                  <td>Primary Ability</td>
                  <td>Wisdom</td>
                </tr>
                <tr>
                  <td>Saves</td>
                  <td>Intelligence & Wisdom</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-divine-domain"
              checked={expand === "DIVINE_DOMAIN"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DIVINE_DOMAIN" ? "DIVINE_DOMAIN" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Divine Domain
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Choose one domain related to your deity. Your choice grants you
                domain spells and other features when you choose it at 1st
                level. It also grants you additional ways to use Channel
                Divinity when you gain that feature at 2nd level, and additional
                benefits at 6th, 8th, and 17th levels.
              </p>
              <br />
              <h2 className="font-medium ">Domain Spells</h2>
              <p>
                Each domain has a list of spells — its domain spells — that you
                gain at the cleric levels noted in the domain description. Once
                you gain a domain spell, you always have it prepared, and it
                doesn't count against the number of spells you can prepare each
                day.
              </p>
              <p>
                If you have a domain spell that doesn't appear on the cleric
                spell list, the spell is nonetheless a cleric spell for you.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-druidic"
              checked={expand === "DRUIDIC"}
              onChange={() =>
                setExpanded((prev) => (prev !== "DRUIDIC" ? "DRUIDIC" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Druidic
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                You know Druidic, the secret language of druids. You can speak
                the language and use it to leave hidden messages. You and others
                who know this language automatically spot such a message. Others
                spot the message's presence with a successful DC 15 Wisdom
                (Perception) check but can't decipher it without magic.
              </p>
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
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Drawing on the divine essence of nature itself, you can cast
                spells to shape that essence to your will. See Spells Rules for
                the general rules of spellcasting and the Spells Listing for the
                druid spell list.
              </p>
              <br />
              <h2 className="font-medium">Cantrips</h2>
              <p>
                At 1st level, you know two cantrips of your choice from the
                druid spell list. You learn additional druid cantrips of your
                choice at higher levels, as shown in the Cantrips Known column
                of the Druid table.
              </p>
              <br />
              <h2 className="font-medium">Preparing and Casting Spells</h2>
              <p>
                The Druid table shows how many spell slots you have to cast your
                druid spells of 1st level and higher. ... (rest of the text
                here)
              </p>
              <br />
              <h2 className="font-medium">Spellcasting Ability</h2>
              <p>
                Wisdom is your spellcasting ability for your druid spells, since
                your magic draws upon your devotion and attunement to nature.
                ... (rest of the text here)
              </p>
              <br />
              <h2 className="font-medium">Ritual Casting</h2>
              <p>
                You can cast a druid spell as a ritual if that spell has the
                ritual tag and you have the spell prepared.
              </p>
              <br />
              <h2 className="font-medium">Spellcasting Focus</h2>
              <p>
                You can use a druidic focus (see the Adventuring Gear section)
                as a spellcasting focus for your druid spells.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-wild-shape"
              checked={expand === "WILD_SHAPE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "WILD_SHAPE" ? "WILD_SHAPE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Wild Shape
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 2nd level, you can use your action to magically
                assume the shape of a beast that you have seen before. You can
                use this feature twice. You regain expended uses when you finish
                a short or long rest.
              </p>
              <br />
              <p>
                Your druid level determines the beasts you can transform into,
                as shown in the Beast Shapes table. At 2nd level, for example,
                you can transform into any beast that has a challenge rating of
                1/4 or lower that doesn't have a flying or swimming speed.
              </p>
              <h3 className="text-lg my-4">Beast Shape</h3>
              <div className="overflow-x-auto m-1">
                <table className="table table-zebra bg-base-100">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Max CR</th>
                      <th>Limitations</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2nd</td>
                      <td>1/4</td>
                      <td>No flying or swimming speed</td>
                      <td>Wolf</td>
                    </tr>
                    <tr>
                      <td>4th</td>
                      <td>1/2</td>
                      <td>No flying speed</td>
                      <td>Crocodile</td>
                    </tr>
                    <tr>
                      <td>8th</td>
                      <td>1</td>
                      <td>—</td>
                      <td>Giant eagle</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <p>
                You can stay in a beast shape for a number of hours equal to
                half your druid level (rounded down). You then revert to your
                normal form unless you expend another use of this feature. You
                can revert to your normal form earlier by using a bonus action
                on your turn. You automatically revert if you fall unconscious,
                drop to 0 hit points, or die.
              </p>

              <h3 className="text-lg my-4">While Transformed</h3>
              <p>
                Your game statistics are replaced by the statistics of the
                beast, but you retain your alignment, personality, and
                Intelligence, Wisdom, and Charisma scores. You also retain all
                of your skill and saving throw proficiencies, in addition to
                gaining those of the creature.
              </p>
              <br />
              <p>
                When you transform, you assume the beast's hit points and Hit
                Dice. When you revert to your normal form, you return to the
                number of hit points you had before you transformed. However, if
                you revert as a result of dropping to 0 hit points, any excess
                damage carries over to your normal form.
              </p>
              <br />
              <p>
                You can't cast spells, and your ability to speak or take any
                action that requires hands is limited to the capabilities of
                your beast form. Transforming doesn't break your concentration
                on a spell you've already cast, however, or prevent you from
                taking actions that are part of a spell, such as call lightning,
                that you've already cast.
              </p>
              <br />
              <p>
                You retain the benefit of any features from your class, race, or
                other source and can use them if the new form is physically
                capable of doing so. However, you can't use any of your special
                senses, such as darkvision, unless your new form also has that
                sense.
              </p>
              <br />
              <p>
                You choose whether your equipment falls to the ground in your
                space, merges into your new form, or is worn by it. Worn
                equipment functions as normal, but the DM decides whether it is
                practical for the new form to wear a piece of equipment, based
                on the creature's shape and size. Your equipment doesn't change
                size or shape to match the new form, and any equipment that the
                new form can't wear must either fall to the ground or merge with
                it. Equipment that merges with the form has no effect until you
                leave the form.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-druid-circle"
              checked={expand === "DRUID_CIRCLE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DRUID_CIRCLE" ? "DRUID_CIRCLE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Druid Circle
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 2nd level, you choose to identify with a circle of druids:
                the Circle of the Land detailed at the end of the class
                description or one from the Player's Handbook or other sources.
                Your choice grants you features at 2nd level and again at 6th,
                10th, and 14th level.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-beast-spells"
              checked={expand === "BEAST_SPELLS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "BEAST_SPELLS" ? "BEAST_SPELLS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Beast Spells
              <span className="block text-gray-500 text-sm mt-1">
                18th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 18th level, you can cast many of your druid spells
                in any shape you assume using Wild Shape. You can perform the
                somatic and verbal components of a druid spell while in a beast
                shape, but you aren't able to provide material components.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-archdruid"
              checked={expand === "ARCHDRUID"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ARCHDRUID" ? "ARCHDRUID" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Archdruid
              <span className="block text-gray-500 text-sm mt-1">
                20th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 20th level, you can use your Wild Shape an unlimited number
                of times.
              </p>
              <br />
              <p>
                Additionally, you can ignore the verbal and somatic components
                of your druid spells, as well as any material components that
                lack a cost and aren't consumed by a spell. You gain this
                benefit in both your normal shape and your beast shape from Wild
                Shape.
              </p>
            </div>
          </div>
          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />

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
                    <td>
                      Light armor, medium armor, shields (druids will not wear
                      armor or use shields made of metal)
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Weapons</td>
                    <td>
                      Clubs, daggers, darts, javelins, maces, quarterstaffs,
                      scimitars, sickles, slings, spears
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Tools</td>
                    <td>Herbalism kit</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Saving Throws</td>
                    <td>Intelligence, Wisdom</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Skills</td>
                    <td>
                      Choose two from Arcana, Animal Handling, Insight,
                      Medicine, Nature, Perception, Religion, and Survival
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-hitpoints"
              checked={expand === "HITPOINTS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HITPOINTS" ? "HITPOINTS" : null
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
                    <td>1d8 per druid level</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at 1st Level</td>
                    <td>8 + your Constitution modifier</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at Higher Levels</td>
                    <td>
                      1d8 (or 5) + your Constitution modifier per druid level
                      after 1st
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide my-8"
              onClick={becomeDruid}
            >
              Druid
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
