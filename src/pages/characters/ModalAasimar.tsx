import Image from "next/image";
import { useEffect, useState } from "react";
import aasimar from "../../../public/images/aasimar.jpeg";
import aasimarDetail from "../../../public/images/aasimar5.jpg";

declare global {
  interface Window {
    my_modal_20: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalAasimar() {
  const [detail, setDetail] = useState<String | null>(null);
  useEffect(() => {
    const myModal20 = document.getElementById("my_modal_20");
    if (myModal20) window.my_modal_20 = myModal20;
  }, []);

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_20.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={aasimar}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Aasimar
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
      <dialog id="my_modal_20" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-5xl mb-4 almendra text-center">Aasimar</h3>
          <Image
            src={aasimarDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="py-4"></p>

          {/* accordion start */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-2"
              checked={detail === "DETAILS"}
              onClick={() =>
                setDetail((prev) => (prev !== "DETAILS" ? "DETAILS" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Details</div>
            <div className="collapse-content">
              <p>
                Aasimar bore the mark of their celestial touch through many
                different physical features that often varied from individual to
                individual. Most commonly, aasimar were very similar to humans,
                like tieflings and other planetouched. Nearly all aasimar were
                uncommonly beautiful and still, and they were often
                significantly taller than humans as well.
              </p>
              <br />
              <p>
                While several aasimar were immediately identifiable as such,
                others were even less distinguishable than tieflings from their
                human ancestors, commonly standing out with only one unusual
                feature. Most Aasimar had pupil-less pale white, gray, or golden
                eyes and silver hair, but those descended from planetars could
                also have emerald skin, while those descended from avoral
                celestials might have feathers mixed in with their hair. Those
                descended from ghaeles often had pearly opalescent eyes.
                Solar-descended Aasimars often had brilliant topaz eyes instead
                or silvery or golden skin and those with couatl or lillend
                lineage most commonly had small, iridescent scales. Many Aasimar
                also had a light covering of feathers on their shoulders, where
                an angel's wings might sprout. As in tieflings, Aasimar
                bloodlines could sometimes run dormant for generations,
                reemerging after being hidden for some time.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-2"
              checked={detail === "PERSONALITY"}
              onClick={() =>
                setDetail((prev) =>
                  prev !== "PERSONALITY" ? "PERSONALITY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Personality{" "}
            </div>
            <div className="collapse-content">
              <p>
                Most Aasimar grew up cautious around others and, like tieflings,
                were sometimes misunderstood, though never to the hateful extent
                many of the fiendish bloodlines were. Even those raised by
                understanding parents could not escape their strangeness, or the
                curiosity (or even fear) that their unique nature sometimes
                provoked. Many Aasimar even suffered prejudice, something that
                deeply hurt the soul of the Aasimar in question since most had
                an inherent bent towards empathy for others.
              </p>
              <br />
              <p>
                Though many Aasimar were good in nature, thanks in a large part
                to their celestial ancestors, not all were, just as not all
                tieflings or fey'ri were evil. Some Aasimar fell into the trap
                of evil, corrupted perhaps by experience or the counsel and aid
                of an evil god. Shar and Sseth in particular took pleasure in
                corrupting Aasimar and turning them from the ways of their
                celestial forebears, nursing grudges fueled by the prejudice of
                others. Most Aasimar avoided this path, however, and a few even
                received direct counsel from their celestial ancestor or a
                creature in its service. These individuals were the Aasimar most
                likely to manifest the stereotypical virtues of a celestial.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-2"
              checked={detail === "ABILITIES"}
              onClick={() =>
                setDetail((prev) => (prev !== "ABILITIES" ? "ABILITIES" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Abilities </div>
            <div className="collapse-content">
              <p>
                As a general rule, Aasimar were a wise and charismatic race,
                possessed of strong insights and a powerful allure with which
                most races could not compare. Aasimar were also quite
                perceptive, noticing things that others did not, and many could
                see largely unimpeded in perfect darkness, while also possessing
                the ability to cast magical light to aid those who could not
                see. Aasimar were also, like many of their celestial forebears,
                resistant to the effects of acidic elements, extreme cold, or
                electrical charges.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-2"
              checked={detail === "MANNERISMS"}
              onClick={() =>
                setDetail((prev) =>
                  prev !== "MANNERISMS" ? "MANNERISMS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Society </div>
            <div className="collapse-content">
              <p>
                Aasimar were rare throughout Toril and, as such, had no true
                cities or societies of their own, much like other planetouched.
                Aasimar could live for the whole of their life without ever
                meeting another of their kind and, as such, were resigned to
                living amongst other races.
              </p>
              <br />
              <p>
                Very few Aasimar had siblings who were also Aasimar, in large
                part due to the rarity of a celestial or god mating with a human
                but also due to the fact that Aasimar who sprang from ancient
                bloodlines long left dormant were even rarer. As a result, not
                many Aasimar met others of their kind, though such meetings were
                more common in Mulhorand, owing to the relatively larger number
                of Aasimar there. On the rare occasions where two Aasimar did
                meet, they often felt a kind of kinship and unspoken
                understanding with one another. Most Aasimar were likely to take
                the side of another instinctively, regardless of personal
                feeling and there was a strong bond between Aasimar of all
                stripes.
              </p>
              <br />
              <p>
                Because of their ties to the goodly gods and celestial beings,
                many Aasimar were drawn to a religious path and most Aasimar
                spellcasters called on divine magic as opposed to arcane magic.
                A great many become paladins, most in the service of good, and
                the philosophy of lawful good paladins often resonated strongly
                with Aasimar. Those descended from non-lawful outsiders, on the
                other hand, most often became clerics, though a few also became
                paladins.
              </p>
              <br />
              <p>
                Like other half-breeds, Aasimar did not feel, as a whole,
                beholden to any one god or pantheon, but many Aasimar worshiped
                the Mulhorandi pantheon and a large proportion of the race was
                descended from the goodly gods of Mulhorand. Many of these
                Aasimar in particular often felt a strange bond to the animals
                whom their divine ancestor was a patron of. Others, particularly
                those born outside of Mulhorand or its neighbors, often took on
                gods appropriate for the nation in which they lived.
              </p>
              <br />
              <p>
                On the Outer Planes, Aasimar were the servants of many of the
                dwarven and elven gods, including Aerdrie Faenya, Berronar
                Truesilver, Corellon Larethian, Dugmaren Brightmantle,
                Eilistraee, Erevan Ilesere, Haela Brightaxe, Hanali Celanil,
                Labelas Enoreth, Moradin, Shevarash, and Solonor Thelandira—
                despite not having dwarven or elven blood. The human gods Lliira
                and Milil also had Aasimar as servants.
              </p>
              <br />
              <p>
                Aasimar, despite their human ancestry, did not typically feel a
                strong draw to their kin but instead felt a stronger bond with
                other half-breeds. Many Aasimar enjoyed the company of races as
                varied as half-elves or half-orcs, though very few Aasimar got
                along well with tieflings, whom the celestial-descended race was
                instinctively wary of. Genasi were likewise alien to Aasimar,
                who found the elemental race strange even by their own
                standards. Of the other common races, Aasimar had little overall
                opinion, since dwarves, elves, and the like had little history
                of persecuting Aasimar but neither did they have a history of
                befriending them.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-2"
              checked={detail === "HISTORY"}
              onClick={() =>
                setDetail((prev) => (prev !== "HISTORY" ? "HISTORY" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">History </div>
            <div className="collapse-content">
              <p>
                Though mortal Aasimar were the result of breeding between humans
                and celestials, devas were unheard of in the local multiverse
                prior to the arrival of the Mulani from a forgotten plane. Drawn
                to Imaskar by powerful wizards, the Mulani slaves called upon
                their gods for aid. Just as the gods could initially appear only
                as avatars so did their celestial servitors initially require
                mortal bodies, resulting in the first devas.[9] Since then,
                devas, also commonly called Aasimar in Mulhorand, (a term then
                adopted for the mortal progeny of celestials and mortals by
                others), were created through other means, but all of the race
                shared certain qualities with these first individuals.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-2"
              checked={detail === "HOMELANDS"}
              onClick={() =>
                setDetail((prev) => (prev !== "HOMELANDS" ? "HOMELANDS" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Homelands </div>
            <div className="collapse-content">
              <p>
                Aasimar were most commonly found in the eastern lands of Unther
                and Mulhorand, where they were the descendants of the good
                deities who once walked among the mortals. Since the
                Spellplague, however, and the devastation of both lands, Aasimar
                became wandering nomads bound to no land or god and spread
                widely over the face of Faerûn, as well as other parts of Toril.
                Those from outside of Faerûn were often drawn to it, perhaps by
                the ancestral lure of Unther and Mulhorand, and so many Aasimar
                could be found in borderlands such as Durpar, Murghôm, Thesk, or
                Waterdeep, though none of these places were considered
                traditional homelands.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="radio"
              name="my-accordion-2"
              checked={detail === "SUBRACES"}
              onClick={() =>
                setDetail((prev) => (prev !== "SUBRACES" ? "SUBRACES" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Subraces </div>
            <div className="collapse-content">
              <h1 className="text-lg my-4 underline">Fallen Aasimar</h1>
              <p>
                Some Aasimar were marked by some form of darkness in their
                lives, that tarnished their inner light. In most instances these
                fallen Aasimar were either influenced by some evil power in
                their youth, or they themselves had turned to the ways of evil.
              </p>
              <br />
              <p>
                Fallen Aasimar typically possessed greater strength than their
                other celestial-blooded kin. Once per day, they could release
                the divine energy stored deep within them to form an aura of
                necrosis around them for a single minute. This effect was so
                horrific that it often caused others to run away in terror.
              </p>
              <h1 className="text-lg my-4 underline">Protector Aasimar</h1>
              <p>
                Yet other Aasimar were tasked by the greater powers of good to
                protect the weak and innocent of the Realms. From their youth
                they were given a divine missive, along with guidance, to smite
                evil in the defense of those unable to fight on their own.
              </p>
              <br />
              <p>
                Protector Aasimar were often more learned and judicious than
                others. Around once per day, they could channel their inner
                light to conjure to angelic, incorporeal wings from their back
                for one minute. They could fly at the speed of about 300 ft (91
                m) per minute and unleash radiant energy when they attack.
              </p>
              <h1 className="text-lg my-4 underline">Scourge Aasimar</h1>
              <p>
                These individuals of divine heritage that possessed an intense
                drive to purge evil from the Realms. They imbued with powerful
                radiant energy to help them carry out their natural drive to
                smite evil. They were easily identifiable as the energy coursing
                through their body radiated outward. They were exceptionally
                hearty and robust individuals.
              </p>
              <br />
              <p>
                About once per day, scourge Aasimar could release the radiant
                energy held within them in a blast that extended outwards for 10
                ft (3 m). This power could last upwards of one minute.
              </p>
              <br />
              <p>
                Scourge Aasimar often wore masks to hide away their otherworldly
                appearance, except when engaged in combat.
              </p>
            </div>
          </div>

          {/* accordion end */}
          {/* table start */}
          <div className="overflow-x-auto">
            <table className="table table-zebra my-4">
              {/* head */}
              <thead>
                <tr>
                  <th>Trait</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Ability Score Increase</td>
                  <td>
                    +2 to Charisma, which is useful for characters who want to
                    be "the face of the party" and it's the primary casting
                    ability for Bards, Paladins, Sorcerers, and Warlocks.
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Age</td>
                  <td>Aasimar live up to 160 years.</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Alignment</td>
                  <td>
                    Understandably good leaning, though if you play a fallen
                    Aasimar you should shift to evil or neutral.
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Size</td>
                  <td>
                    Aasimar have the same range of height and weight as humans.{" "}
                  </td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>Speed</td>
                  <td>Your base walking speed is 30 feet.</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <td>Celestial Resistance</td>
                  <td>
                    You have resistance to necrotic damage and radiant damage.
                  </td>
                </tr>
                {/* row 7 */}
                <tr>
                  <td>Healing Hands</td>
                  <td>
                    As an action, you can touch a creature and cause it to
                    regain a number of hit points equal to your level. Once you
                    use this trait, you can't use it again until you finish a
                    long rest. This racial bonus isn't amazing, but can be a
                    clutch racial trait.
                  </td>
                </tr>

                {/* row 8 */}
                <tr>
                  <td>Darkvision</td>
                  <td>
                    Blessed with a radiant soul, your vision can easily cut
                    through darkness. You can see in dim light within 60 feet of
                    you as if it were bright light, and in darkness as if it
                    were dim light. You can't discern color in darkness, only
                    shades of gray.
                  </td>
                </tr>
                {/* row 9 */}
                <tr>
                  <td>Languages</td>
                  <td>You can speak, read, and write Common and Celestial.</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* table end */}
          <button className="btn btn-success self-end">Select race</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
