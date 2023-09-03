import Image from "next/image";
import { useEffect, useState } from "react";
import halfOrc from "../../../public/images/halforc7.jpeg";
import halfOrcDetail from "../../../public/images/halforc3.jpg";

declare global {
  interface Window {
    my_modal_19: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalHalfOrc() {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal19 = document.getElementById("my_modal_19");
    if (myModal19) window.my_modal_19 = myModal19;
  }, []);

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_19.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={halfOrc}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Half Orc
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#05C3DD"
          className="w-6 h-6 "
        >
          <path
            fill-rule="evenodd"
            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <dialog id="my_modal_19" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Half Orc</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
          <Image
            src={halfOrcDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          {/* Description Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion"
              id="halfOrcDescription"
              checked={expand === "DESCRIPTION"}
              onClick={() =>
                setExpanded((prev) =>
                  prev !== "DESCRIPTION" ? "DESCRIPTION" : null
                )
              }
            />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="halfOrcDescription"
            >
              Description
            </label>
            <div className="collapse-content">
              <p>
                Half-orcs were typically between 5 feet 9 inches to 6 feet 4
                inches in height and weighed around 155 to 225 pounds. This made
                them slightly taller and stronger than the average human. Their
                skin often had a grayish hue, accompanied by jutting jaws,
                prominent teeth, a sloping forehead, and coarse body hair.
                Compared to full-blooded orcs, their canines were smaller, but
                they still appeared bestial to humans. In orcish societies, they
                were seen as having a more human-like appearance. Half-orc hair
                was primarily black and grayed swiftly as they aged.
                Lifespan-wise, they matured by sixteen and usually did not live
                past sixty years.
              </p>
              <p>
                Those raised among orcs might adopt the orcish tradition of
                ritual scarring. These scars weren't seen as blemishes or marks
                of shame but as symbols of pride, courage, and battle prowess.
                However, some half-orcs were forcibly scarred by orcs in a
                manner akin to cattle branding. Generally, half-orcs had shorter
                lifespans than humans, maturing earlier and rarely living beyond
                seventy-five years.
              </p>
            </div>
          </div>

          {/* Personality Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion"
              id="halfOrcPersonality"
              checked={expand === "PERSONALITY"}
              onClick={() =>
                setExpanded((prev) =>
                  prev !== "PERSONALITY" ? "PERSONALITY" : null
                )
              }
            />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="halfOrcPersonality"
            >
              Personality
            </label>
            <div className="collapse-content">
              <p>
                Half-orcs, being a mix of human and orc lineage, displayed a
                combination of both races' traits. They were action-driven,
                persistent, and adaptable like humans. Their ability to thrive
                in unwelcoming environments was crucial, as they were often
                regarded as outsiders. However, from their orcish heritage, they
                inherited some less appreciated qualities, leading many to
                perceive them as uncivilized or impulsive. Their short tempers
                and straightforward approach sometimes made them seem brash, but
                in many situations, such a demeanor was invaluable.
              </p>
              <p>
                Generally, half-orcs were seen as moody and sullen, but they
                were often more cunning than full orcs. They cherished simple
                joys like feasting, singing, and dancing over refined
                activities. Many half-orcs upheld the free spirit of orcs, but
                with fewer malevolent inclinations. Raised among humans, they
                could be as noble as they were wicked. A common misconception
                was that half-orcs lacked intelligence, though this wasn't a
                universal trait.
              </p>
            </div>
          </div>

          {/* Abilities Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion"
              id="halfOrcAbilities"
              checked={expand === "ABILITIES"}
              onClick={() =>
                setExpanded((prev) =>
                  prev !== "ABILITIES" ? "ABILITIES" : null
                )
              }
            />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="halfOrcAbilities"
            >
              Abilities
            </label>
            <div className="collapse-content">
              <p>
                Half-orcs were known for their remarkable strength, comparable
                to orcs but with the added agility uncommon in many humanoids.
                They might not be as resilient as full orcs, but they were
                notably more nimble. A unique trait was their ability to rally
                when gravely wounded, almost as if the injuries invigorated
                them. Additionally, half-orcs could harness their raw emotion
                into formidable attacks. However, these abilities had their
                limits, and as battles dragged on, they could tire and become
                vulnerable like any other being.
              </p>
              <p>
                Their agility was evident when they were enraged, allowing them
                to move swiftly. Some half-orcs had an inherent conflict between
                their dual heritages, turning this inner turmoil into sheer
                power. Others developed an insatiable appetite for battle,
                making them more resilient and deadly in combat.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-7"
              checked={expand === "CULTURE"}
              onClick={() =>
                setExpanded((prev) => (prev !== "CULTURE" ? "CULTURE" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Culture</div>
            <div className="collapse-content">
              <p>
                Half-orcs had no home to truly call their own in most places,
                excepting Palischuk in Vaasa, where a half-orc community
                thrived. There was also the possible exception of Many-Arrows,
                an orcish kingdom whose borders were laid along several human
                nations. Most half-orcs grew up amongst either humans or orcs,
                either in urban environments or—more often—along the outskirts
                of civilization, taking on many of the qualities of their home
                culture.
              </p>
              <br />
              <p>
                In most cultures, half-orcs suffered prejudice. Within the lands
                of their human ancestors, they were commonly seen as savage
                thugs. In orc society, however, they were often looked down upon
                as weaker but were acknowledged for their superior intellect.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-7"
              checked={expand === "RELIGION"}
              onClick={() =>
                setExpanded((prev) => (prev !== "RELIGION" ? "RELIGION" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Religion</div>
            <div className="collapse-content">
              <p>
                Half-orcs who lived among orcs commonly worshiped the orc
                pantheon. Those raised among humans typically worshiped other
                deities including Garagos, Hoar, and others. Tyr was also a
                deity previously worshiped by many half-orcs.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-7"
              checked={expand === "HOMELANDS"}
              onClick={() =>
                setExpanded((prev) =>
                  prev !== "HOMELANDS" ? "HOMELANDS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Homelands</div>
            <div className="collapse-content">
              <p>
                Half-orcs had no true homeland, with exceptions like Palischuk
                in Vaasa and Phsant in Thesk. They were also common in Northwest
                Faerûn, particularly in Many-Arrows and regions like Amn, the
                Moonsea, and Waterdeep.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-7"
              checked={expand === "RELATIONS"}
              onClick={() =>
                setExpanded((prev) =>
                  prev !== "RELATIONS" ? "RELATIONS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Relations with other races
            </div>
            <div className="collapse-content">
              <p>
                Half-orcs often had strained relations with other races,
                especially Tel-quessir or dwarves. Even among humans, they were
                often distrusted or feared. Some half-orcs became introverted,
                others sought approval through charity, while some simply
                demanded acceptance.
              </p>
              <br />
              <p>
                The challenges of their heritage taught most half-orcs to be
                wary and suspicious, making and losing friends with relative
                ease.
              </p>
            </div>
          </div>
          <table className="table my-2 table-zebra bg-base-100">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">Ability Score Increase</td>
                <td>
                  Your Strength score increases by 2, and your Constitution
                  score increases by 1.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Age</td>
                <td>
                  Half-orcs mature a little faster than humans, reaching
                  adulthood around age 14. They age noticeably faster and rarely
                  live longer than 75 years.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Size</td>
                <td>
                  Half-orcs are somewhat larger and bulkier than humans, and
                  they range from 5 to well over 6 feet tall. Your size is
                  Medium.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Speed</td>
                <td>Your base walking speed is 30 feet.</td>
              </tr>
              <tr>
                <td className="font-bold">Darkvision</td>
                <td>
                  Thanks to your orc blood, you have superior vision in dark and
                  dim conditions. You can see in dim light within 60 feet of you
                  as if it were bright light, and in darkness as if it were dim
                  light. You can't discern color in darkness, only shades of
                  gray.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Menacing</td>
                <td>You gain proficiency in the Intimidation skill.</td>
              </tr>
              <tr>
                <td className="font-bold">Relentless Endurance</td>
                <td>
                  When you are reduced to 0 hit points but not killed outright,
                  you can drop to 1 hit point instead. You can't use this
                  feature again until you finish a long rest.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Savage Attacks</td>
                <td>
                  When you score a critical hit with a melee weapon attack, you
                  can roll one of the weapon's damage dice one additional time
                  and add it to the extra damage of the critical hit.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Languages</td>
                <td>
                  You can speak, read, and write Common and Orc. Orc is a harsh,
                  grating language with hard consonants. It has no script of its
                  own but is written in the Dwarvish script.
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
