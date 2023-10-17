import Image from "next/image";
import { SetClassProps } from "../../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../../public/icons/clericicon.png";
import cleric from "../../../public/images/dee-holmberg-bg-cleric.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "../IconDoubleChevron";
declare global {
  interface Window {
    my_modal_cleric: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Cleric({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModalCleric = document.getElementById("my_modal_cleric");
    if (myModalCleric) window.my_modal_cleric = myModalCleric;
  }, []);
  const becomeCleric = async () => {
    setDndClass({ role: "Cleric", specialty: [], spells: [], languages: [] });
    window.my_modal_cleric.close();
    window.location.href = "#item3";
  };
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_cleric.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain rounded-md m-2 max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Cleric
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_cleric" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Barbarian
          </h3> */}
          <Image
            src={cleric}
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
                  <td>d8</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Primary Ability</td>
                  <td>Wisdom</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Wisdom & Charisma</td>
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
              name="my-accordion-channel-divinity"
              checked={expand === "CHANNEL_DIVINITY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "CHANNEL_DIVINITY" ? "CHANNEL_DIVINITY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Channel Divinity
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 2nd level, you gain the ability to channel divine energy
                directly from your deity, using that energy to fuel magical
                effects. You start with two such effects: Turn Undead and an
                effect determined by your domain. Some domains grant you
                additional effects as you advance in levels, as noted in the
                domain description.
              </p>
              <br />
              <p>
                When you use your Channel Divinity, you choose which effect to
                create. You must then finish a short or long rest to use your
                Channel Divinity again.
              </p>
              <br />
              <p>
                Some Channel Divinity effects require saving throws. When you
                use such an effect from this class, the DC equals your cleric
                spell save DC.
              </p>
              <br />
              <p>
                Beginning at 6th level, you can use your Channel Divinity twice
                between rests, and beginning at 18th level, you can use it three
                times between rests. When you finish a short or long rest, you
                regain your expended uses.
              </p>
              <br />
              <h2 className="text-medium font-semibold mt-4">
                Channel Divinity: Turn Undead
              </h2>
              <p>
                As an action, you present your holy symbol and speak a prayer
                censuring the undead. Each undead that can see or hear you
                within 30 feet of you must make a Wisdom saving throw. If the
                creature fails its saving throw, it is turned for 1 minute or
                until it takes any damage.
              </p>
              <br />
              <p>
                A turned creature must spend its turns trying to move as far
                away from you as it can, and it can't willingly move to a space
                within 30 feet of you. It also can't take reactions. For its
                action, it can use only the Dash action or try to escape from an
                effect that prevents it from moving. If there's nowhere to move,
                the creature can use the Dodge action.
              </p>
            </div>
          </div>

          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-destroy-undead"
              checked={expand === "DESTROY_UNDEAD"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DESTROY_UNDEAD" ? "DESTROY_UNDEAD" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Destroy Undead
              <span className="block text-gray-500 text-sm mt-1">
                5th, 8th, 11th, 15th, 17th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 5th level, when an undead fails its saving throw
                against your Turn Undead feature, the creature is instantly
                destroyed if its challenge rating is at or below a certain
                threshold, as shown in the Destroy Undead table.
              </p>
              <div className="overflow-x-auto mt-2">
                <table className="table table-zebra w-full bg-base-100">
                  <thead>
                    <tr>
                      <th>Cleric Level</th>
                      <th>Destroys Undead of Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">5th</td>
                      <td>1/2 or lower</td>
                    </tr>
                    <tr>
                      <td className="font-bold">8th</td>
                      <td>1 or lower</td>
                    </tr>
                    <tr>
                      <td className="font-bold">11th</td>
                      <td>2 or lower</td>
                    </tr>
                    <tr>
                      <td className="font-bold">14th</td>
                      <td>3 or lower</td>
                    </tr>
                    <tr>
                      <td className="font-bold">17th</td>
                      <td>4 or lower</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-divine-intervention"
              checked={expand === "DIVINE_INTERVENTION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DIVINE_INTERVENTION" ? "DIVINE_INTERVENTION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Divine Intervention
              <span className="block text-gray-500 text-sm mt-1">
                10th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 10th level, you can call on your deity to intervene
                on your behalf when your need is great.
              </p>
              <p className="mt-2">
                Imploring your deity's aid requires you to use your action.
                Describe the assistance you seek, and roll percentile dice. If
                you roll a number equal to or lower than your cleric level, your
                deity intervenes. The DM chooses the nature of the intervention;
                the effect of any cleric spell or cleric domain spell would be
                appropriate.
              </p>
              <p className="mt-2">
                If your deity intervenes, you can't use this feature again for 7
                days. Otherwise, you can use it again after you finish a long
                rest.
              </p>
              <p className="mt-2">
                At 20th level, your call for intervention succeeds
                automatically, no roll required.
              </p>
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
                    <td>Light armor, medium armor, shields</td>
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
                      Choose two from History, Insight, Medicine, Persuasion,
                      and Religion
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
                    <td>1d8 per cleric level</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at 1st Level</td>
                    <td>8 + your Constitution modifier</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at Higher Levels</td>
                    <td>
                      1d8 (or 5) + your Constitution modifier per cleric level
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
              onClick={becomeCleric}
            >
              Cleric
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
