import Image from "next/image";
import { useEffect, useState } from "react";
import halfElf from "../../../public/images/halfelf3.jpeg";
import halfElfDetail from "../../../public/images/halfelf5.png";

declare global {
  interface Window {
    my_modal_14: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalHalfElf() {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal14 = document.getElementById("my_modal_14");
    if (myModal14) window.my_modal_14 = myModal14;
  }, []);

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_14.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={halfElf}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Half Elf
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
      <dialog id="my_modal_14" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Half Elf</h3>
          <Image
            src={halfElfDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover object-top"
            objectPosition="top"
          />
          <p className="py-4">Press ESC key or click outside to close</p>
          {/* Description Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input type="radio" name="my-accordion" id="description" />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="description"
            >
              Description
            </label>
            <div className="collapse-content">
              <p>
                Half-elves (also called Cha'Tel'Quessir in Elven) were humanoids
                born through the union of an elf and a human. Whether a half-elf
                was raised by their human parent or their elven parent, they
                often felt isolated and alone. Because they took around twenty
                years to reach adulthood, they matured quickly when raised by
                elves (who think they look like humans), making them feel like
                an outsider in either place.
              </p>
              <br />
              <p>
                Most half-elves were descended from moon elves. Pairings of
                elves and other races also existed, though they were rare.
              </p>{" "}
              <br />
              <p>
                Half-elves stood roughly around 5 feet and 5 inches to 6 feet
                and 2 inches (1.7 to 1.9 meters), making them only slightly
                shorter overall than humans, and weighed in at 130 to 190 pounds
                (59 to 86 kilograms). Like humans, half-elves had a wide variety
                of complexions, some of which were inherited from the elven half
                of their heritage, such as a tendency for metallic-hued skin and
                inhuman hair colors. For example, half-moon elves typically
                exhibited a pale, bluish tint around the ears and chin, while
                half-sun elves had a color more reminiscent of bronze, with hair
                of gold.
              </p>
              <br />
              <p>
                Unlike true Tel'Quessir, however, male half-elves were capable
                of growing facial hair and often did so to distinguish
                themselves, in part, from their elven parents. Half-elven ears
                were about the size of human ones, but like elves, they were
                pointed on the ends. Half-elves were also notably more durable
                and passionate than either elves or humans, a unique result of
                the two races' blending.
              </p>
            </div>
          </div>

          {/* EyesAndEars Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input type="radio" name="my-accordion" id="eyesAndEars" />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="eyesAndEars"
            >
              EyesAndEars
            </label>
            <div className="collapse-content">
              <p>
                Comparison of features. Half-elves usually adopted the dress and
                hairstyles of the culture among which they were raised. However,
                it was also fairly common for half-elves raised among humans to
                wear elven clothing in order to proudly display signs of their
                dual heritage. Regardless of what they wore, half-elves stood
                out in a crowd through the combination of physical
                distinctiveness and force of personality. Half-elves matured at
                a slower rate than humans, and could live for over 180 years.
              </p>
            </div>
          </div>

          {/* Abilities Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input type="radio" name="my-accordion" id="abilities" />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="abilities"
            >
              Abilities
            </label>
            <div className="collapse-content">
              <p>
                Half-elves gained an unusual blend of abilities from their two
                heritages. More durable and more innately charming than either
                humans or elves, half-elves lacked the grace or wisdom of their
                elven parents, though they did have some of the versatility of
                their human ancestors. Half-elves had a natural ability to learn
                outside of their specialty, giving them a strength in
                adaptability. Half-elves, like their elven parents, worked well
                with others and could lend some of their own skill to friends or
                allies.
              </p>
              <br />

              <p>
                Like their elven parents, half-elves were typically immune to
                the effects of the enchantment school of magic. Likewise,
                half-elves also inherited the ability to see keenly in low-light
                conditions, with little or no ill effect, and had enhanced
                senses of sight and hearing compared to their human brethren.
              </p>
            </div>
          </div>

          {/* Personality Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input type="radio" name="my-accordion" id="personality" />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="personality"
            >
              Personality
            </label>
            <div className="collapse-content">
              <p>
                Half-elves, as a result of their unique heritage, exhibited a
                confidence and strength of personality uncommon amongst both
                humans and elves, a result of the blending between elven
                perceptiveness and human passion and drive. Half-elves were
                natural leaders and negotiators, and, perhaps because of their
                reality of living in two worlds, were unusually open-minded.
                Some half-elves manifested this leadership through confidence
                and bravery, but others were cordial and polite, manifesting
                their force of personality in a subtler but no less effective
                manner.
              </p>
              <br />
              <p>
                Like elves, half-elves were curious and inventive creatures,
                though this was coupled with the powerful ambition of their
                human parents. Half-elves also shared a love of the natural
                world and art with their fey parents. A dancing half-elf.
                Half-elves, like their fey parents, were free-spirited and
                chaotic, with a distaste for overbearing rules and regulations.
                However, like humans, half-elves leaned neither towards good nor
                evil, and while they valued creativity and liberty like the
                Tel-quessir, half-elves lacked the virtuous bent that moderated
                these tendencies in elves. As a result, half-elves could prove
                unreliable and unpredictable allies at times.
              </p>
              <br />
              <p>
                Half-elves generally liked to be around others, the more diverse
                the better. Perhaps due to the circumstances of their birth, or
                to a simple drive towards diversity, half-elves were often found
                in large population centers where other races mingled freely.
                Half-elves naturally gathered others around them, forming a
                large network of contacts that was both pleasing to their psyche
                and practical for other purposes. In spite of this love for
                forming connections, or perhaps because of it, half-elves rarely
                settled down for any length of time and possessed a genuine
                sense of wanderlust, moving from place to place in a way that
                made them very natural adventurers. However, whenever a half-elf
                returned to a place where they had already been, they hunted
                down old friends and renewed relations.
              </p>{" "}
              <br />
              <p>
                Half-elves typically got along well with elves and humans who
                were understanding of their heritage. Half-elves also enjoyed
                the company of dwarves, gnomes, and halflings. Half-elves
                benefited in these relations from the fact they had the grace of
                an elf without the arrogance and the enthusiasm of a human
                without the latter race's common coarseness. Half-elves were
                less than entirely trusting, however, of half-orcs, with whom
                they shared a human heritage but whose orcish ancestry was
                historically opposed to the fey heritage of a half-elf.
              </p>{" "}
              <br />
              <p>
                Half-elves often make excellent intermediaries between their two
                parent races, though often both sides suspected the half-elf of
                favoring one or the other. Where humans and elves were not on
                good terms, half-elves often found themselves caught in the
                middle. In particular, humans could come to view both half-elves
                and their parents with a degree of envy and fear, mistreating
                half-elves in places where contact between the two races was
                rare, an attitude to which half-elves often reacted by leaving
                civilization to take on a solitary existence in the wild. By
                contrast, in places such as Silverymoon, where racial relations
                were more amiable, a half-elf was rarely seen as an enemy or
                outsider.
              </p>{" "}
              <br />
              <p>
                Though many half-elves were beloved by members of other races,
                not all half-elves were born to a loving human-elf couple. Such
                a troubling past could affect half-elves in many ways, sometimes
                causing them to become bitter or feel burdened by the past. This
                led them into conflict with members of other races, (who often
                expected half-elves to be friendly and joyful,) in turn putting
                undue pressure on troubled members of the race.
              </p>{" "}
              <br />
              <p>
                Ultimately, half-elves endured, both physically and socially.
                Admired and respected by others of all races, half-elves
                naturally inspired loyalty and returned the fealty with deep
                friendship and a sense of responsibility. As such, half-elven
                leaders often led from the front of a battle, preferring not to
                send friends or followers into danger that they themselves would
                not face and putting themselves at risk while inspiring even
                more devout loyalty.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
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
                    Your Charisma score increases by 2, and two other ability
                    scores of your choice increase by 1.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Age</td>
                  <td>
                    Half-elves mature at the same rate humans do and reach
                    adulthood around the age of 20. They live much longer than
                    humans, however, often exceeding 180 years.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Size</td>
                  <td>
                    Half-elves are about the same size as humans, ranging from 5
                    to 6 feet tall. Your size is Medium.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Speed</td>
                  <td>Your base walking speed is 30 feet.</td>
                </tr>
                <tr>
                  <td className="font-bold">Darkvision</td>
                  <td>
                    Thanks to your elf blood, you have superior vision in dark
                    and dim conditions. You can see in dim light within 60 feet
                    of you as if it were bright light, and in darkness as if it
                    were dim light. You can't discern color in darkness, only
                    shades of gray.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Fey Ancestry</td>
                  <td>
                    You have advantage on saving throws against being charmed,
                    and magic can't put you to sleep.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Skill Versatility</td>
                  <td>You gain proficiency in two skills of your choice.</td>
                </tr>
                <tr>
                  <td className="font-bold">Languages</td>
                  <td>
                    You can speak, read, and write Common, Elvish, and one extra
                    language of your choice.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
