import Image from "next/image";
import { useEffect, useState } from "react";
import tiefling from "../../../public/images/tiefling9.jpeg";
import tieflingDetail from "../../../public/images/tiefling6.jpg";
import { SetRaceProps } from "../../../lib/setRaceProps";
import IconDoubleChevron from "../../components/icons/IconDoubleChevron";

declare global {
  interface Window {
    my_modal_18: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalTiefling({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal18 = document.getElementById("my_modal_18");
    if (myModal18) window.my_modal_18 = myModal18;
  }, []);
  const raceTiefling = async () => {
    setRace({
      race: "Tiefling",
      languages: ["Common", "Infernal"],
      spells: ["Thaumaturgy"],
      vision: "Darkvision (60 feet).",
      inventory: [],
      specialty: [],
      tools: [],
    });
    window.my_modal_18.close();
    window.location.href = "#item2";
  };

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_18.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={tiefling}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Tiefling
        </span>
        <IconDoubleChevron/>
      </button>
      <dialog id="my_modal_18" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-4xl sm:text-5xl mb-4 almendra text-center">
            Tiefling
          </h3>
          <Image
            src={tieflingDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover object-top"
          />
          <p className="py-4"></p>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion"
              id="description-tieflings"
              checked={expand === "DESCRIPTION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DESCRIPTION" ? "DESCRIPTION" : null
                )
              }
            />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="description-tieflings"
            >
              Description
            </label>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Tieflings were human-based planetouched, native outsiders that
                were infused with the touch of the fiendish planes, most often
                through descent from fiends—demons, Yugoloths, devils, evil
                deities, and others who had bred with humans. Tieflings were
                known for their cunning and personal allure, which made them
                excellent deceivers as well as inspiring leaders when prejudices
                were laid aside.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Although their evil ancestors could be many generations removed,
                the taint lingered. Unlike half-fiends, tieflings were not
                predisposed to evil alignments and varied in alignment nearly as
                widely as full humans, though tieflings were certainly devious.
                The celestial counterparts of tieflings were called aasimar.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Tieflings tended to have an unsettling air about them, and most
                people were uncomfortable around them, whether they were aware
                of the tiefling's unsavory ancestry or not. While some looked
                like normal humans, most retained physical characteristics
                derived from their ancestor, with the most common such features
                being horns, prehensile or non-prehensile tails, and pointed
                teeth. Some tieflings also had eyes that were solid orbs of
                black, red, white, silver, or gold, while others had eyes more
                similar to those of humans. Other, more unusual characteristics
                included a sulfurous odor, cloven feet, or a general aura of
                discomfort they left on others.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                In many other ways, tieflings were similar to humans physically.
                Tieflings were, on average, just as tall as humans, from 5 feet
                and 6 inches to 6 feet and 2 inches and weighed just a little
                bit heavier at 140 to 220 pounds. Tiefling skin was usually
                human-like in color, though extending past normal human colors
                into reddish hues as well. Tiefling hair was also often the same
                color as human hair, though dark blue, red, or purple were
                common shades amongst the race. Although it was not always the
                case, tieflings tended to have better reflexes than their human
                kin. This, along with their natural propensity for hiding and
                deceit, helped to give tieflings a reputation for thievery and
                duplicity.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Tieflings who had strikingly inhuman features were often killed
                at birth by their horrified parents or others. Only those
                tieflings with subtle features or born to someone indifferent to
                their appearance, either out of acceptance or cruel purpose,
                were likely to reach adulthood. Those tieflings who did reach
                adulthood could be expected to age at roughly the same rate.
                They had life spans roughly 20 to 40 years longer than normal
                humans.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion"
              id="tiefling-bloodlines"
              checked={expand === "BLOODLINES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "BLOODLINES" ? "BLOODLINES" : null
                )
              }
            />
            <label
              className="collapse-title text-xl font-medium"
              htmlFor="tiefling-bloodlines"
            >
              Tiefling Bloodlines
            </label>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                The physical appearance of a tiefling often depended on the
                exact ancestry that spawned it, a bloodline that might have
                remained dormant for generations. Diabolic or demonic tieflings
                could, besides the common horns and tails, possess a forked
                tongue, leathery or scaly skin, the smell of brimstone, or
                unusually warm flesh. Some accounts even held these tieflings to
                cast neither shadows nor reflections. Some diabolic tieflings
                also sported goat-like legs or hooves. Tieflings descended from
                rakshasa might have furred skin or feline eyes. Most tieflings
                had only one or two of these features.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Some tieflings were not descended from mere fiends at all, but
                from powerful gods. These tieflings often had their own physical
                characteristics that set them apart. Tieflings sired by Beshaba,
                for instance, often had antlers instead of horns and pale, white
                hair. Those sired by Mask, on the other hand, were known for
                their tendency to cast no reflection.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                In Mulhorand, the most common tieflings were often those spawned
                from a union with Set or Sebek. Most tieflings were, however,
                the grandchildren or even great-grandchildren of fiends and in
                Mulhorand's neighbor, Thay, most tieflings were spawned
                deliberately by powerful wizards as part of some elaborate plot
                for power.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                In 1358 DR, a warlock coven known as the Toril thirteen
                performed a ritual that cursed most tiefling lineages—those of
                demons, devils, hags, and rakshasas, among others—with the
                "blood of Asmodeus", changing their original lineage with that
                of the archdevil himself. This was done to make Asmodeus a
                "racial god", ensuring him enough followers to attain godly
                powers. After the Spellplague of 1385 DR, when Asmodeus became a
                god, the magic of the ritual took effect across all of Toril and
                afterwards most tieflings living in the 15th century DR were of
                the Asmodean lineage, all having a similar devilish appearance.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Prior to Asmodeus's ascension to godhood, the infernal blood
                could be diluted through intermarriage, but afterward, the union
                of a tiefling with another race always produced a tiefling
                child.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                In the late years of the 15th century, tieflings of other
                bloodlines began to be born again, but the Asmodean lineage was
                still the most numerous by a wide margin at the time.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "PERSONALITY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PERSONALITY" ? "PERSONALITY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Personality
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Tieflings had a number of abilities gifted to them by their
                fiendish heritage. They were often alluring and intelligent,
                exuding a seductive aura despite their dark ancestry. Their
                cunning and guile were notable, even though these weren't always
                their defining traits.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Early awareness of their distinction from others shaped many
                Tieflings into wary individuals, often expecting rejection. Some
                chose the path of evil, but a notable few sought to make
                positive impacts, displaying unparalleled heroism. However, most
                fell between these two extremes.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "TIEFLING-COMBAT"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "TIEFLING-COMBAT" ? "TIEFLING-COMBAT" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Combat</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                In combat, Tieflings showcased their finesse as agile and quick
                warriors. They held a preference for weapons blending sharpness
                with speed, such as daggers, scimitars, and stilettos. Their
                ambidexterity led many to opt for a two-hand fighting style.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Preferring light armor, Tieflings rarely utilized shields,
                focusing more on their mobility and offensive capabilities.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "TIEFLING-HISTORY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "TIEFLING-HISTORY" ? "TIEFLING-HISTORY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Abilities</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Tieflings who sought arcane might typically gravitated towards
                becoming warlocks. However, their link to the fiendish realms
                meant many of their spellcasters had inclinations towards
                divination or conjuration magic.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Their heritage granted them an innate resistance to heat, a hint
                of bloodlust in combat, and the potent infernal wrath ability. A
                subset even manifested fiendish wings or the power to cast
                darkness.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "TEIFLING-SOCIETY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "TEIFLING-SOCIETY" ? "TEIFLING-SOCIETY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Society</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Like other races that were the result of the breeding of two or
                more others, tieflings had no true culture they could call their
                own. However, there were many archetypal features of tieflings
                that were not necessarily innate. This include their attitude
                regarding their heritage, and while some tieflings embraced it,
                others were repulsed by it, forging the two most common
                stereotypes of tieflings.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                The former tieflings, who were proud of their fiendish past,
                were often fascinated by the dark and sinister events that
                touched the world, but were not necessarily evil or inclined to
                perpetuate them. Some tieflings of this type chose to use their
                knowledge of evil and their own fiendish abilities to thwart
                these dark plots and schemes. Others sought to learn more and to
                emulate these evil deeds.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Other tieflings were ashamed or even frightened of their
                heritage and wished only to escape the shadow that lurked over
                them as a result. Some did this through constantly doing good,
                as though to make up for the evil that begot them. Others
                instead hid and tried to go unnoticed as they passed through the
                world, preferring to be ignored and forgotten than noticed and
                made a target because of their past.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Regardless of their motivations, tieflings often distrusted one
                another, sometimes even casting the same preconceptions on one
                another that others did on them. In spite of this, many secretly
                desired to have another tiefling nearby, if only to experience
                some small kind of kinship. Some of these tieflings gathered as
                partners-in-crime, while others were sought out by good
                tieflings who hoped to redeem others of their race.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "TIEFLING-RELATIONS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "TIEFLING-RELATIONS" ? "TIEFLING-RELATIONS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Relations with other races
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Tieflings, in general, didn't get along well with the other
                races of the world and were slow to trust others of any race,
                even their own. This animosity that tieflings had for others was
                taken to its extreme in the case of aasimar, whom tieflings
                instinctively feared or loathed. Devas often had a similar
                reaction, making it difficult for members of either race to
                successfully interact with each other. Of all the common races,
                tieflings felt the most kinship with half-orcs, who were
                similarly a target of revulsion and hate.{" "}
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "TIEFLING-RELIGION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "TIEFLING-RELIGION" ? "TIEFLING-RELIGION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Religion</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Those tieflings who were religious were a varied lot, since no
                god held more sway over tieflings than any other, though
                Asmodeus, as the lord over the fiendish race of devils, may come
                close. Most tieflings called on one of the primary gods of their
                homeland, though there were exceptions. Beshaba, the goddess of
                bad luck, for instance, appealed to many of the race, owing to
                tieflings' collective sense of misfortune. Many evil tieflings
                who channeled their dark emotions into aggression often found
                themselves in the service of Cyric, as well. Prior to the
                Spellplague and the god's subsequent disappearance, Gargauth
                also drew a large number of worshipers seeking vengeance, as did
                Mask, who gathered tiefling thieves to his church. Shar, like
                Gargauth, appealed to those with a taste for vengeance.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
          <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
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
                    Your Intelligence score increases by 1, and your Charisma
                    score increases by 2.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Age</td>
                  <td>
                    Tieflings mature at the same rate as humans but live a few
                    years longer.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Size</td>
                  <td>
                    Tieflings are about the same size and build as humans. Your
                    size is Medium.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Speed</td>
                  <td>Your base walking speed is 30 feet.</td>
                </tr>
                <tr>
                  <td className="font-bold">Darkvision</td>
                  <td>
                    Thanks to your infernal heritage, you have superior vision
                    in dark and dim conditions. You can see in dim light within
                    60 feet of you as if it were bright light, and in darkness
                    as if it were dim light. You can't discern color in
                    darkness, only shades of gray.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Hellish Resistance</td>
                  <td>You have resistance to fire damage.</td>
                </tr>
                <tr>
                  <td className="font-bold">Infernal Legacy</td>
                  <td>
                    You know the thaumaturgy cantrip. When you reach 3rd level,
                    you can cast the hellish rebuke spell as a 2nd-level spell
                    once with this trait and regain the ability to do so when
                    you finish a long rest. When you reach 5th level, you can
                    cast the darkness spell once with this trait and regain the
                    ability to do so when you finish a long rest. Charisma is
                    your spellcasting ability for these spells.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Languages</td>
                  <td>You can speak, read, and write Common and Infernal.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row justify-center">
            <button className="btn btn-success btn-wide m-4" onClick={raceTiefling}>
              Select Tiefling
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
