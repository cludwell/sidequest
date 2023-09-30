import Image from "next/image";
import { useEffect, useState } from "react";
import dragonborn from "../../../public/images/dragonborn.jpeg";
import dragonbornDetail from "../../../public/images/dragonborn5.jpeg";
import { SetRaceProps } from "../../../lib/setRaceProps";
declare global {
  interface Window {
    my_modal_3: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalDragonBorn({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  const [dragonType, setDragonType] = useState<string>("");
  useEffect(() => {
    const myModal3 = document.getElementById("my_modal_3");
    if (myModal3) window.my_modal_3 = myModal3;
  }, []);

  const dragonbornAncestries = [
    {
      ancestry: "Black",
      damageType: "Acid",
      area: "5 by 30 ft. line",
      save: "Dex. save",
    },
    {
      ancestry: "Blue",
      damageType: "Lightning",
      area: "5 by 30 ft. line",
      save: "Dex. save",
    },
    {
      ancestry: "Brass",
      damageType: "Fire",
      area: "5 by 30 ft. line",
      save: "Dex. save",
    },
    {
      ancestry: "Bronze",
      damageType: "Lightning",
      area: "5 by 30 ft. line",
      save: "Dex. save",
    },
    {
      ancestry: "Copper",
      damageType: "Acid",
      area: "5 by 30 ft. line",
      save: "Dex. save",
    },
    {
      ancestry: "Gold",
      damageType: "Fire",
      area: "15 ft. cone",
      save: "Dex. save",
    },
    {
      ancestry: "Green",
      damageType: "Poison",
      area: "15 ft. cone",
      save: "Con. save",
    },
    {
      ancestry: "Red",
      damageType: "Fire",
      area: "15 ft. cone",
      save: "Dex. save",
    },
    {
      ancestry: "Silver",
      damageType: "Cold",
      area: "15 ft. cone",
      save: "Con. save",
    },
    {
      ancestry: "White",
      damageType: "Cold",
      area: "15 ft. cone",
      save: "Con. save",
    },
  ];
  const raceDragonBorn = async () => {
    setRace({
      race: `Dragonborn - ${dragonType}`,
      languages: ["Common", "Draconic"],
      vision: "Normal",
      inventory: [],
      spells: [],
      tools: [],
      specialty: [],
    });
    window.my_modal_3.close();
    window.location.href = "#item2";
  };
  // const dragonSelected = async (e: React.ChangeEvent<HTMLSelectElement>) =>
  //   setDragonType(e.target.value);
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_3.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={dragonborn}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Dragonborn
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
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Dragonborn
          </h3>
          <Image
            src={dragonbornDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="py-4"></p>
          {/* accordion start */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "DETAILS"}
              onChange={() =>
                setExpanded((prev) => (prev !== "DETAILS" ? "DETAILS" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Details</div>
            <div className="collapse-content">
              <p>
                Born of dragons, as their name proclaims, the dragonborn walk
                proudly through a world that greets them with fearful
                incomprehension. Shaped by draconic gods or the dragons
                themselves, dragonborn originally hatched from dragon eggs as a
                unique race, combining the best attributes of dragons and
                humanoids. Some dragonborn are faithful servants to true
                dragons, others form the ranks of soldiers in great wars, and
                still others find themselves adrift, with no clear calling in
                life.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "PROUD"}
              onChange={() =>
                setExpanded((prev) => (prev !== "PROUD" ? "PROUD" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Proud Dragon Kin
            </div>
            <div className="collapse-content">
              <p>
                Dragonborn look very much like dragons standing erect in
                humanoid form, though they lack wings or a tail. The first
                dragonborn had scales of vibrant hues matching the colors of
                their dragon kin, but generations of interbreeding have created
                a more uniform appearance. Their small, fine scales are usually
                brass or bronze in color, sometimes ranging to scarlet, rust,
                gold, or copper-green. They are tall and strongly built, often
                standing close to 6½ feet tall and weighing 300 pounds or more.
                Their hands and feet are strong, talonlike claws with three
                fingers and a thumb on each hand.
              </p>
              <br />
              <p>
                The blood of a particular type of dragon runs very strong
                through some dragonborn clans. These dragonborn often boast
                scales that more closely match those of their dragon
                ancestor—bright red, green, blue, or white, lustrous black, or
                gleaming metallic gold, silver, brass, copper, or bronze.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "CLANS"}
              onChange={() =>
                setExpanded((prev) => (prev !== "CLANS" ? "CLANS" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Self-Sufficient Clans
            </div>
            <div className="collapse-content">
              <p>
                To any dragonborn, the clan is more important than life itself.
                Dragonborn owe their devotion and respect to their clan above
                all else, even the gods. Each dragonborn's conduct reflects on
                the honor of his or her clan, and bringing dishonor to the clan
                can result in expulsion and exile. Each dragonborn knows his or
                her station and duties within the clan, and honor demands
                maintaining the bounds of that position.
              </p>
              <br />
              <p>
                A continual drive for self-improvement reflects the
                self-sufficiency of the race as a whole. Dragonborn value skill
                and excellence in all endeavors. They hate to fail, and they
                push themselves to extreme efforts before they give up on
                something. A dragonborn holds mastery of a particular skill as a
                lifetime goal. Members of other races who share the same
                commitment find it easy to earn the respect of a dragonborn.
              </p>
              <br />
              <p>
                Though all dragonborn strive to be self-sufficient, they
                recognize that help is sometimes needed in difficult situations.
                But the best source for such help is the clan, and when a clan
                needs help, it turns to another dragonborn clan before seeking
                aid from other races—or even from the gods.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "NAMES"}
              onChange={() =>
                setExpanded((prev) => (prev !== "NAMES" ? "NAMES" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Dragonborn Names{" "}
            </div>
            <div className="collapse-content">
              <p>
                Dragonborn have personal names given at birth, but they put
                their clan names first as a mark of honor. A childhood name or
                nickname is often used among clutchmates as a descriptive term
                or a term of endearment. The name might recall an event or
                center on a habit.
              </p>
              <br />
              <p>
                Male Names: Arjhan, Balasar, Bharash, Donaar, Ghesh, Heskan,
                Kriv, Medrash, Mehen, Nadarr, Pandjed, Patrin, Rhogar, Shamash,
                Shedinn, Tarhun, Torinn
              </p>
              <br />
              <p>
                Female Names: Akra, Biri, Daar, Farideh, Harann, Havilar, Jheri,
                Kava, Korinn, Mishann, Nala, Perra, Raiann, Sora, Surina, Thava,
                Uadjit
              </p>
              <br />
              <p>
                Childhood Names: Climber, Earbender, Leaper, Pious, Shieldbiter,
                Zealous
              </p>
              <br />
              <p>
                Clan Names: Clethtinthiallor, Daardendrian, Delmirev,
                Drachedandion, Fenkenkabradon, Kepeshkmolik, Kerrhylon,
                Kimbatuul, Linxakasendalor, Myastan, Nemmonis, Norixius,
                Ophinshtalajiir, Prexijandilin, Shestendeliath, Turnuroth,
                Verthisathurgiesh, Yarjerit
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "DRAGON-BREATH"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DRAGON-BREATH" ? "DRAGON-BREATH" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Dragon Breath
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table bg-base-100 table-zebra ">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Dragon</th>
                      <th>Damage Type</th>
                      <th>Breath Weapon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Black</td>
                      <td>Acid</td>
                      <td>5 by 30 ft. line (Dex. save)</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Blue</td>
                      <td>Lightning</td>
                      <td>5 by 30 ft. line (Dex. save)</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Brass</td>
                      <td>Fire</td>
                      <td>5 by 30 ft. line (Dex. save)</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <th>4</th>
                      <td>Bronze</td>
                      <td>Lightning</td>
                      <td>5 by 30 ft. line (Dex. save)</td>
                    </tr>
                    {/* row 5 */}
                    <tr>
                      <th>5</th>
                      <td>Copper</td>
                      <td>Acid</td>
                      <td>5 by 30 ft. line (Dex. save)</td>
                    </tr>
                    {/* row 6 */}
                    <tr>
                      <th>6</th>
                      <td>Gold</td>
                      <td>Fire</td>
                      <td>15 ft. cone (Dex. save)</td>
                    </tr>
                    {/* row 7 */}
                    <tr>
                      <th>7</th>
                      <td>Green</td>
                      <td>Poison</td>
                      <td>15 ft. cone (Con. save)</td>
                    </tr>
                    {/* row 8 */}
                    <tr>
                      <th>8</th>
                      <td>Red</td>
                      <td>Fire</td>
                      <td>15 ft. cone (Dex. save)</td>
                    </tr>
                    {/* row 9 */}
                    <tr>
                      <th>9</th>
                      <td>Silver</td>
                      <td>Cold</td>
                      <td>15 ft. cone (Con. save)</td>
                    </tr>
                    {/* row 10 */}
                    <tr>
                      <th>10</th>
                      <td>White</td>
                      <td>Cold</td>
                      <td>15 ft. cone (Con. save)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                    Your Strength score increases by 2, and your Charisma score
                    increases by 1.
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Age</td>
                  <td>
                    Young dragonborn grow quickly. They walk hours after
                    hatching, attain the size and development of a 10-year-old
                    human child by the age of 3, and reach adulthood by 15. They
                    live to be around 80.
                  </td>
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
                    Dragonborn are taller and heavier than humans, standing well
                    over 6 feet tall and averaging almost 250 pounds. Your size
                    is Medium.{" "}
                  </td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>Speed</td>
                  <td>Your base walking speed is 30 feet.</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <td>Draconic Ancestry</td>
                  <td>
                    You have draconic ancestry. Choose one type of dragon from
                    the Draconic Ancestry table. Your breath weapon and damage
                    resistance are determined by the dragon type, as shown in
                    the table.{" "}
                  </td>
                </tr>

                {/* row 8 */}
                <tr>
                  <td>Breath Weapon</td>
                  <td>
                    You can use your action to exhale destructive energy. Your
                    draconic ancestry determines the size, shape, and damage
                    type of the exhalation. When you use your breath weapon,
                    each creature in the area of the exhalation must make a
                    saving throw, the type of which is determined by your
                    draconic ancestry. The DC for this saving throw equals 8 +
                    your Constitution modifier + your proficiency bonus. A
                    creature takes 2d6 damage on a failed save, and half as much
                    damage on a successful one. The damage increases to 3d6 at
                    6th level, 4d6 at 11th level, and 5d6 at 16th level. After
                    you use your breath weapon, you can't use it again until you
                    complete a short or long rest.
                  </td>
                </tr>
                {/* row 9 */}
                <tr>
                  <td>Damage Resistance</td>
                  <td>
                    You have resistance to the damage type associated with your
                    draconic ancestry.
                  </td>
                </tr>
                {/* row 10 */}
                <tr>
                  <td>Languages</td>
                  <td>
                    You can speak, read, and write Common and Draconic. Draconic
                    is thought to be one of the oldest languages and is often
                    used in the study of magic. The language sounds harsh to
                    most other creatures and includes numerous hard consonants
                    and sibilants.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* table end */}
          <div className="flex flex-col items-center">
            <select
              className="select select-primary w-full max-w-xs  my-4"
              value={dragonType}
              onChange={(e) => setDragonType(e.target.value)}
            >
              <option disabled value={""}>
                Select a Dragon Type
              </option>
              {dragonbornAncestries.map((race, i) => (
                <option
                  key={i}
                  value={`${race.ancestry}, ${race.damageType}, ${race.area}, ${race.save}`}
                >
                  {race.ancestry}, {race.damageType}, {race.area}, {race.save}
                </option>
              ))}
            </select>

            <button
              className="btn btn-success btn-wide my-4"
              onClick={raceDragonBorn}
            >
              Select Dragonborn
            </button>
          </div>{" "}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
