import Image from "next/image";
import { useEffect, useState } from "react";
import aarakocra from "../../../public/images/aarakocra.jpeg";
import { SetRaceProps } from "../../../lib/setRaceProps";

declare global {
  interface Window {
    my_modal_4: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalAarakocra({ race, setRace }: SetRaceProps) {
  const [detail, setDetail] = useState<String | null>(null);
  useEffect(() => {
    const myModal4 = document.getElementById("my_modal_4");
    if (myModal4) window.my_modal_4 = myModal4;
  }, []);

  const raceAarakocra = async () => setRace("Aarakocra");
  return (
    <>
      <button
        className="btn w- h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_4.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={aarakocra}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Aarakocra
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
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box ">
          <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Aarakocra
          </h3>
          <Image
            src={aarakocra}
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
              checked={detail === "DETAILS"}
              onChange={() =>
                setDetail((prev) => (prev !== "DETAILS" ? "DETAILS" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Details</div>
            <div className="collapse-content">
              <p>
                Sequestered in high mountains atop tall trees, the aarakocra,
                sometimes called birdfolk, evoke fear and wonder. Many aarakocra
                aren't even native to the Material Plane. They hail from a world
                beyond — from the boundless vistas of the Elemental Plane of
                Air.
              </p>
              <br />
              <p>
                They are immigrants, refugees, scouts, and explorers, their
                outposts functioning as footholds in a world both strange and
                alien.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={detail === "BEAK"}
              onChange={() =>
                setDetail((prev) => (prev !== "BEAK" ? "BEAK" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Beak and Feather
            </div>
            <div className="collapse-content">
              <p>
                From below, aarakocra look much like large birds. Only when they
                descend to roost on a branch or walk across the ground does
                their humanoid appearance reveal itself. Standing upright,
                aarakocra might reach 5 feet tall, and they have long, narrow
                legs that taper to sharp talons.
              </p>
              <br />
              <p>
                Feathers cover their bodies. Their plumage typically denotes
                membership in a tribe. Males are brightly colored, with feathers
                of red, orange, or yellow. Females have more subdued colors,
                usually brown or gray. Their heads complete the avian
                appearance, being something like a parrot or eagle with distinct
                tribal variations.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={detail === "WARDENS"}
              onChange={() =>
                setDetail((prev) => (prev !== "WARDENS" ? "WARDENS" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Sky Wardens
            </div>
            <div className="collapse-content">
              <p>
                Nowhere are the aarakocra more comfortable than in the sky. They
                can spend hours in the air, and some go as long as days, locking
                their wings in place and letting the thermals hold them aloft.
                In battle, they prove dynamic and acrobatic fliers, moving with
                remarkable speed and grace, diving to lash opponents with
                weapons or talons before turning and flying away.
              </p>
              <br />
              <p>
                Once airborne, an aarakocra leaves the sky with reluctance. On
                their native plane, they can fly for days or months, landing
                only to lay their eggs and feed their young before launching
                themselves back into the air. Those that make it to a world in
                the Material Plane find it a strange place. They sometimes
                forget or ignore vertical distances, and they have nothing but
                pity for those earthbound people forced to live and toil on the
                ground.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={detail === "MANNERISMS"}
              onChange={() =>
                setDetail((prev) =>
                  prev !== "MANNERISMS" ? "MANNERISMS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Avian Mannerisms{" "}
            </div>
            <div className="collapse-content">
              <p>
                The resemblance of aarakocra to birds isn't limited to physical
                features. Aarakocra display many of the same mannerisms as
                ordinary birds. They are fastidious about their plumage,
                frequently tending their feathers, cleaning and scratching away
                any tiny passengers they might have picked up. When they deign
                to descend from the sky, they often do so near pools where they
                can catch fish and bathe themselves.
              </p>
              <br />
              <p>
                Many aarakocra punctuate their speech with chirps, sounds they
                use to convey emphasis and to shade meaning, much as a human
                might through facial expressions and gestures. An aarakocra
                might become frustrated with people who fail to pick up on the
                nuances; an aarakocra's threat might be taken as a jest and vice
                versa.
              </p>
              <br />
              <p>
                The idea of ownership baffles most aarakocra. After all, who
                owns the sky? Even when explained to them, they initially find
                the notion of ownership mystifying. As a result, aarakocra who
                have little interaction with other people might be a nuisance as
                they drop from the sky to snatch livestock or plunder harvests
                for fruits and grains. Shiny, glittering objects catch their
                eyes.
              </p>
              <br />
              <p>
                They find it hard not to pluck the treasure and bring it back to
                their settlement to beautify it. An aarakocra who spends years
                among other races can learn to inhibit these impulses.
              </p>
              <br />
              <p>
                Confinement terrifies the aarakocra. To be grounded, trapped
                underground, or imprisoned by the cold, unyielding earth is a
                torment few aarakocra can withstand. Even when perched on a high
                branch or at rest in their mountaintop homes, they appear alert,
                with eyes moving and bodies ready to take flight.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={detail === "HOMELANDS"}
              onChange={() =>
                setDetail((prev) => (prev !== "HOMELANDS" ? "HOMELANDS" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Homelands </div>
            <div className="collapse-content">
              <p>
                Most aarakocra live on the Elemental Plane of Air. Aarakocra can
                be drawn into the Material Plane, sometimes to pursue enemies or
                thwart their foes' designs there. Accident might also send a
                nest of aarakocra tumbling into a world on that plane. A few
                find their way to such a world through portals on their own
                plane and establish nests in high mountains or in the canopies
                of old forests.
              </p>
              <br />
              Once tribes of aarakocra settle in an area, they share a hunting
              territory that extends across an area up to 100 miles on a side,
              with each tribe hunting in the lands nearest to their colony,
              ranging farther should game become scarce.
              <p>
                A typical colony consists of one large, open-roofed nest made of
                woven vines. The eldest acts as leader with the support of a
                shaman.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={detail === "PURPOSE"}
              onChange={() =>
                setDetail((prev) => (prev !== "PURPOSE" ? "PURPOSE" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Great Purpose{" "}
            </div>
            <div className="collapse-content">
              <p>
                Aarakocra enjoy peace and solitude. Most of them have little
                interest in dealing with other peoples and less interest in
                spending time on the ground. For this reason, it takes an
                exceptional circumstance for an aarakocra to leave his or her
                tribe and undertake the adventurer's life. Neither treasure nor
                glory is enough to lure them from their tribes; a dire threat to
                their people, a mission of vengeance, or a catastrophe typically
                lies at the heart of the aarakocra adventurer's chosen path.
              </p>
              <br />
              Two other circumstances might call an aarakocra to adventure.
              First, aarakocra have historical ties to the Wind Dukes of Aaqa.
              Exceptional individuals honor that connection and might seek out
              the missing pieces of the Rod of Seven Parts, the remains of an
              artifact fashioned by the Wind Dukes long ago to defeat the Queen
              of Chaos's monstrous champion, Miska the Wolf-Spider.
              <p>
                When plunged into Miska's body, the chaos in his blood sundered
                the rod and scattered its pieces across the multiverse.
                Recovering the pieces means gaining honor and esteem in the eyes
                of the vaati who forged it and could possibly restore a powerful
                weapon for defense against the agents of elemental evil.
              </p>
              <br />
              Second, aarakocra are sworn foes of elemental earth, in particular
              the gargoyles that serve Ogrémoch, the Prince of Earth. The
              Aarakocra word for gargoyle is loosely translated as “flying
              rock,” and battles between aarakocra and gargoyles have raged
              across the Elemental Planes of Earth and Air, occasionally
              spilling into a world on the Material Plane. Aarakocra on that
              plane might leave their colonies to lend aid to other humanoids
              committed to fighting earth cults and thwarting their efforts.
              <p></p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={detail === "NAMES"}
              onChange={() =>
                setDetail((prev) => (prev !== "NAMES" ? "NAMES" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">
              Aarakocra Names
            </div>
            <div className="collapse-content">
              <p>
                As with much of their speech, aarakocra names include clicks,
                trills, and whistles to the point that other peoples have a
                difficult time pronouncing them. Typically, a name has two to
                four syllables with the sounds acting as connectors. When
                interacting with other races, aarakocra may use nicknames gained
                from people they meet or shortened forms of their full names.
              </p>
              <br />
              <p>
                An aarakocra of either gender may have one of these short names:
                Aera, Aial, Aur, Deekek, Errk, Heehk, Ikki, Kleeck, Oorr, Ouss,
                Quaf, Quierk, Salleek, Urreek, or Zeed.
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
                    Your Dexterity score increases by 2, and your Wisdom score
                    increases by 1.
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Age</td>
                  <td>
                    Aarakocra reach maturity by age 3. Compared to humans,
                    aarakocra don't usually live longer than 30 years.
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Alignment</td>
                  <td>
                    Most aarakocra are good and rarely choose sides when it
                    comes to law and chaos. Tribal leaders and warriors might be
                    lawful, while explorers and adventurers might tend toward
                    chaotic.
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Size</td>
                  <td>
                    Aarakocra are about 5 feet tall. They have thin, lightweight
                    bodies that weigh between 80 and 100 pounds. Your size is
                    Medium.
                  </td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>Speed</td>
                  <td>Your base walking speed is 25 feet.</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <td>Flight</td>
                  <td>
                    You have a flying speed of 50 feet. To use this speed, you
                    can't be wearing medium or heavy armor.
                  </td>
                </tr>
                {/* row 7 */}
                <tr>
                  <td>Talons</td>
                  <td>
                    Your talons are natural weapons, which you can use to make
                    unarmed strikes. If you hit with them, you deal slashing
                    damage equal to 1d4 + your Strength modifier, instead of the
                    bludgeoning damage normal for an unarmed strike.
                  </td>
                </tr>
                {/* row 8 */}
                <tr>
                  <td>Languages</td>
                  <td>
                    You can speak, read, and write Common, Aarakocra, and Auran.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* table end */}
          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide"
              onClick={raceAarakocra}
            >
              Select Aarakocra
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
