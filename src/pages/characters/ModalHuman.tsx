import Image from "next/image";
import { useEffect, useState } from "react";
import human from "../../../public/images/humanportrait.jpg";
import humanDetail from "../../../public/images/human6.jpg";
import { SetRaceProps } from "../../../lib/setRaceProps";

declare global {
  interface Window {
    my_modal_17: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalHuman({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal17 = document.getElementById("my_modal_17");
    if (myModal17) window.my_modal_17 = myModal17;
  }, []);
  const raceHuman = async () => setRace("Human");

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_17.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={human}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Human
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
      <dialog id="my_modal_17" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Human
          </h3>
          <Image
            src={humanDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="py-4"></p>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "HUMAN-DETAILS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HUMAN-DETAILS" ? "HUMAN-DETAILS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Details</div>
            <div className="collapse-content">
              <p>
                In the reckonings of most worlds, humans are the youngest of the
                common races, late to arrive on the world scene and short-lived
                in comparison to dwarves, elves, and dragons. Perhaps it is
                because of their shorter lives that they strive to achieve as
                much as they can in the years they are given. Or maybe they feel
                they have something to prove to the elder races, and that's why
                they build their mighty empires on the foundation of conquest
                and trade. Whatever drives them, humans are the innovators, the
                achievers, and the pioneers of the worlds.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "SPECTRUM"}
              onChange={() =>
                setExpanded((prev) => (prev !== "SPECTRUM" ? "SPECTRUM" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              A Broad Spectrum
            </div>
            <div className="collapse-content">
              <p>
                With their penchant for migration and conquest, humans are more
                physically diverse than other common races. There is no typical
                human. An individual can stand from 5 feet to a little over 6
                feet tall and weigh from 125 to 250 pounds. Human skin shades
                range from nearly black to very pale, and hair colors from black
                to blond (curly, kinky, or straight); males might sport facial
                hair that is sparse or thick. A lot of humans have a dash of
                nonhuman blood, revealing hints of elf, orc, or other lineages.
                Humans reach adulthood in their late teens and rarely live even
                a single century.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "VARIETY"}
              onChange={() =>
                setExpanded((prev) => (prev !== "VARIETY" ? "VARIETY" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Variety in All Things
            </div>
            <div className="collapse-content">
              <p>
                Humans are the most adaptable and ambitious people among the
                common races. They have widely varying tastes, morals, and
                customs in the many different lands where they have settled.
                When they settle, though, they stay: they build cities to last
                for the ages, and great kingdoms that can persist for long
                centuries. An individual human might have a relatively short
                life span, but a human nation or culture preserves traditions
                with origins far beyond the reach of any single human's memory.
                They live fully in the present—making them well suited to the
                adventuring life—but also plan for the future, striving to leave
                a lasting legacy. Individually and as a group, humans are
                adaptable opportunists, and they stay alert to changing
                political and social dynamics.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "FRIENDSHIPS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FRIENDSHIPS" ? "FRIENDSHIPS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Everyone's Second Best Friend
            </div>
            <div className="collapse-content">
              <p>
                Just as readily as they mix with each other, humans mingle with
                members of other races. They get along with almost everyone,
                though they might not be close to many. Humans serve as
                ambassadors, diplomats, magistrates, merchants, and
                functionaries of all kinds.
              </p>
              <br />
              <p>
                <strong>Dwarves:</strong> “They're stout folk, stalwart friends,
                and true to their word. Their greed for gold is their downfall,
                though.”
              </p>
              <br />
              <p>
                <strong>Elves:</strong> “It's best not to wander into elven
                woods. They don't like intruders, and you'll as likely be
                bewitched as peppered with arrows. Still, if an elf can get past
                that damned racial pride and actually treat you like an equal,
                you can learn a lot from them.”
              </p>
              <br />
              <p>
                <strong>Halflings:</strong> “It's hard to beat a meal in a
                halfling home, as long as you don't crack your head on the
                ceiling—good food and good stories in front of a nice, warm
                fire. If halflings had a shred of ambition, they might really
                amount to something.”
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "INSTITUTIONS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "INSTITUTIONS" ? "INSTITUTIONS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Lasting Institutions
            </div>
            <div className="collapse-content">
              <p>
                Where a single elf or dwarf might take on the responsibility of
                guarding a special location or a powerful secret, humans found
                sacred orders and institutions for such purposes. While dwarf
                clans and halfling elders pass on the ancient traditions to each
                new generation, human temples, governments, libraries, and codes
                of law fix their traditions in the bedrock of history. Humans
                dream of immortality, but (except for those few who seek undeath
                or divine ascension to escape death's clutches) they achieve it
                by ensuring that they will be remembered when they are gone.
              </p>
              <br />
              <p>
                Although some humans can be xenophobic, in general their
                societies are inclusive. Human lands welcome large numbers of
                nonhumans compared to the proportion of humans who live in
                nonhuman lands.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "AMBITION"}
              onChange={() =>
                setExpanded((prev) => (prev !== "AMBITION" ? "AMBITION" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Exemplars of Ambition
            </div>
            <div className="collapse-content">
              <p>
                Humans who seek adventure are the most daring and ambitious
                members of a daring and ambitious race. They seek to earn glory
                in the eyes of their fellows by amassing power, wealth, and
                fame. More than other people, humans champion causes rather than
                territories or groups.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "NAMES-AND-ETHNICITIES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "NAMES-AND-ETHNICITIES"
                    ? "NAMES-AND-ETHNICITIES"
                    : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Human Names and Ethnicities
            </div>
            <div className="collapse-content">
              <p>
                Having so much more variety than other cultures, humans as a
                whole have no typical names. Some human parents give their
                children names from other languages, such as Dwarvish or Elvish
                (pronounced more or less correctly), but most parents give names
                that are linked to their region's culture or to the naming
                traditions of their ancestors.
              </p>
              <br />
              <p>
                The material culture and physical characteristics of humans can
                change wildly from region to region. In the Forgotten Realms,
                for example, the clothing, architecture, cuisine, music, and
                literature are different in the northwestern lands of the Silver
                Marches than in distant Turmish or Impiltur to the east—and even
                more distinctive in far-off Kara-Tur. Human physical
                characteristics, though, vary according to the ancient
                migrations of the earliest humans, so that the humans of the
                Silver Marches have every possible variation of coloration and
                features.
              </p>
              <br />
              <p>
                In the Forgotten Realms, nine human ethnic groups are widely
                recognized, though over a dozen others are found in more
                localized areas of Faerûn. These groups, and the typical names
                of their members, can be used as inspiration no matter which
                world your human is in.
              </p>
              <div className="overflow-x-auto">
                <table className="table my-2 table-zebra bg-base-100 ">
                  <thead>
                    <tr>
                      <th>Ethnicity</th>
                      <th>Male Names</th>
                      <th>Female Names</th>
                      <th>Surnames</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold font-sm">Calishite</td>
                      <td>
                        Aseir, Bardeid, Haseid, Khemed, Mehmen, Sudeiman,
                        Zasheir
                      </td>
                      <td>
                        Atala, Ceidil, Hama, Jasmal, Meilil, Seipora, Yasheira,
                        Zasheida
                      </td>
                      <td>
                        Basha, Dumein, Jassan, Khalid, Mostana, Pashar, Rein
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold font-sm">Chondathan</td>
                      <td>
                        Darvin, Dorn, Evendur, Gorstag, Grim, Helm, Malark,
                        Morn, Randal, Stedd
                      </td>
                      <td>
                        Arveene, Esvele, Jhessail, Kerri, Lureene, Miri, Rowan,
                        Shandri, Tessele
                      </td>
                      <td>
                        Amblecrown, Buckman, Dundragon, Evenwood, Greycastle,
                        Tallstag
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold font-sm">Damaran</td>
                      <td>
                        Bor, Fodel, Glar, Grigor, Igan, Ivor, Kosef, Mival,
                        Orel, Pavel, Sergor
                      </td>
                      <td>
                        Alethra, Kara, Katernin, Mara, Natali, Olma, Tana, Zora
                      </td>
                      <td>
                        Bersk, Chernin, Dotsk, Kulenov, Marsk, Nemetsk, Shemov,
                        Starag
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold font-sm">Illuskan</td>
                      <td>
                        Ander, Blath, Bran, Frath, Geth, Lander, Luth, Malcer,
                        Stor, Taman, Urth
                      </td>
                      <td>
                        Amafrey, Betha, Cefrey, Kethra, Mara, Olga, Silifrey,
                        Westra
                      </td>
                      <td>
                        Brightwood, Helder, Hornraven, Lackman, Stormwind,
                        Windrivver
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold font-sm">Mulan</td>
                      <td>
                        Aoth, Bareris, Ehput-Ki, Kethoth, Mumed, Ramas,
                        So-Kehur, Thazar-De, Urhur
                      </td>
                      <td>
                        Arizima, Chathi, Nephis, Nulara, Murithi, Sefris, Thola,
                        Umara, Zolis
                      </td>
                      <td>
                        Ankhalab, Anskuld, Fezim, Hahpet, Nathandem, Sepret,
                        Uuthrakt
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold font-sm">Rashemi</td>
                      <td>
                        Borivik, Faurgar, Jandar, Kanithar, Madislak, Ralmevik,
                        Shaumar, Vladislak
                      </td>
                      <td>
                        Fyevarra, Hulmarra, Immith, Imzel, Navarra, Shevarra,
                        Tammith, Yuldra
                      </td>
                      <td>
                        Chergoba, Dyernina, Iltazyara, Murnyethara, Stayanoga,
                        Ulmokina
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold font-sm">Shou</td>
                      <td>
                        An, Chen, Chi, Fai, Jiang, Jun, Lian, Long, Meng, On,
                        Shan, Shui, Wen
                      </td>
                      <td>Bai, Chao, Jia, Lei, Mei, Qiao, Shui, Tai</td>
                      <td>
                        Chien, Huang, Kao, Kung, Lao, Ling, Mei, Pin, Shin, Sum,
                        Tan, Wan
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold font-sm">Turami</td>
                      <td>
                        Anton, Diero, Marcon, Pieron, Rimardo, Romero, Salazar,
                        Umbero
                      </td>
                      <td>
                        Balama, Dona, Faila, Jalana, Luisa, Marta, Quara,
                        Selise, Vonda
                      </td>
                      <td>
                        Agosto, Astorio, Calabra, Domine, Falone, Marivaldi,
                        Pisacar, Ramondo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                  <td>Your ability scores each increase by 1.</td>
                </tr>
                <tr>
                  <td className="font-bold">Age</td>
                  <td>
                    Humans reach adulthood in their late teens and live less
                    than a century.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Size</td>
                  <td>
                    Humans vary widely in height and build, from barely 5 feet
                    to well over 6 feet tall. Regardless of your position in
                    that range, your size is Medium.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Speed</td>
                  <td>Your base walking speed is 30 feet.</td>
                </tr>
                <tr>
                  <td className="font-bold">Languages</td>
                  <td>
                    You can speak, read, and write Common and one extra language
                    of your choice. Humans typically learn the languages of
                    other peoples they deal with, including obscure dialects.
                    They are fond of sprinkling their speech with words borrowed
                    from other tongues: Orc curses, Elvish musical expressions,
                    Dwarvish military phrases, and so on.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row justify-center">
            <button className="btn btn-success btn-wide" onClick={raceHuman}>
              Select Human
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
