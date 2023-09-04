import Image from "next/image";
import { useEffect, useState } from "react";
import goliath from "../../../public/images/goliath3.jpg";
import goliathDetail from "../../../public/images/goliath-feat.jpg";
import { SetRaceProps } from "../../../lib/setRaceProps";
declare global {
  interface Window {
    my_modal_13: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalGoliath({race, setRace}: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal13 = document.getElementById("my_modal_13");
    if (myModal13) window.my_modal_13 = myModal13;
  }, []);
  const raceGoliath = async () => setRace("Goliath");

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_13.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={goliath}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Goliath
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
      <dialog id="my_modal_13" className="modal">
        <form method="dialog" className="modal-box">
        <h3 className="font-bold text-5xl mb-4 almendra text-center">Goliath</h3>
          <Image
            src={goliathDetail}
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
              checked={expand === "DESCRIPTION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DESCRIPTION" ? "DESCRIPTION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Description
            </div>
            <div className="collapse-content">
              <p>
                Goliaths were massive. They averaged between 7 to 8 feet (2.1 to
                2.4 meters) tall, making them even taller than dragonborn and
                half-orcs. Goliaths had noticeably bony or prominent
                supraorbital ridges above their eyes. Goliath eyes were often a
                bright blue or green and sometimes glowed a little.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "GOLIATHSKIN"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "GOLIATHSKIN" ? "GOLIATHSKIN" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Skin</div>
            <div className="collapse-content">
              <p>
                Goliath skin was often gray or brown and was extremely tough
                (often compared to stone). One of the most distinctive features
                of the goliath was the darker (often vertically symmetrical)
                patches of skin that covered their entire bodies. Goliaths
                believed that these markings somehow explained or controlled
                their fate or destiny. For this reason, goliaths never tattooed
                themselves as this could affect their future.
              </p>
              <br />
              <p>
                Goliath skin was littered with bony growths called "lithoderms".
                These growths were roughly the size of a coin and appeared like
                studded pebbles on their arms, shoulders, torso or head.
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
              <p>
                Goliaths' most notable characteristic was their competitiveness.
                They kept track of their accomplishments and saw everything as a
                challenge. Those not familiar with goliath psychology would
                often get annoyed when goliaths constantly reminded them how
                many times a certain thing had happened, thinking them arrogant
                or self-centered. This was not the case however. To goliaths,
                score-keeping was a natural and integral part of life, not meant
                to belittle or demean anyone.
              </p>
              <br />
              <p>
                But a goliath's most fierce competitor was themselves. Beating
                their own records was the most satisfying victory for a goliath.
                They were also competitive with their companions and other
                goliaths, but were never arrogant or cocky. Goliaths had little
                time for cheaters, gloaters, and sore losers. Goliaths never
                held grudges if they lost a fair fight, and would often repeat
                the goliath maxim that "Today's rival is tomorrow's teammate."
              </p>
              {/* Add more personality content as required */}
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "COMBAT"}
              onChange={() =>
                setExpanded((prev) => (prev !== "COMBAT" ? "COMBAT" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Combat</div>
            <div className="collapse-content">
              <p>
                Goliath tribes only went to war as a final option, preferring to
                move away from unsafe lands. They did not do this out of fear or
                cowardice, instead they were aware that loss of life in their
                tribe was undesirable and had long-term consequences. If forced
                to go to war, however, a tribe would do so without fear.
                Circumstances that might force a tribe included being cornered
                or having members of their tribe kidnapped.
              </p>
              <br />
              <p>
                Once weapons were distributed and war-captains were chosen, a
                goliath tribe could quickly become a very capable war-band.
                Goliaths were always at the peak of their physical condition and
                their fine-tuned hunting skills made them competent warriors at
                a moment's notice. All adult goliaths (regardless of sex) fought
                in times of war. Only children and infants were expected not to
                fight.
              </p>
              <br />
              <p>
                Hide and leather armor were favored by goliaths as they already
                had naturally durable bodies and did not like to restrict their
                movement. Goliaths often used large two-handed weapons to make
                the most of their considerable strength. Goliaths often employed
                guerrilla tactics in battle, owing to their upbringing as
                hunters.
              </p>
              <br />
              <p>
                Fair-play was also integral to goliath fights. As long as they
                were fairly sure they could still win, goliaths would even
                handicap themselves to give their opponents a fair chance. For
                example, if a goliath disarmed their opponent, they would throw
                aside their own weapon and continue the fight with their fists.
                As with their recreational sports, goliaths seriously frowned
                upon "cheating" in battle. Finishing off a fallen foe, taking
                hostages, and attacking civilians were considered distasteful
                and unfair.
              </p>
              <br />
              <p>
                Sometimes slavers were known to kidnap goliath infants and raise
                them as brutal gladiators.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "TRIBES"}
              onChange={() =>
                setExpanded((prev) => (prev !== "TRIBES" ? "TRIBES" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Tribes</div>
            <div className="collapse-content">
              <p>
                Goliaths lived in small tribes that numbered between forty and
                sixty goliaths. This was usually made up of three to five
                extended families. Most goliaths lived in the same tribe their
                entire life. On rare occasions, a tribe that got too large would
                split into smaller tribes or smaller tribes would merge
                together.
              </p>
              <br />
              <p>
                Goliath tribes had a number of key roles that were filled by the
                most capable members. These roles included Chieftain, Captain,
                Skywatcher, Dawncaller, Adjudicator, Tent-mother, and Lamentor.
                The Chieftain was the primary authority figure in a tribe and
                had the responsibility of making major decisions. The Captains
                were responsible for assigning daily tasks. Skywatchers, often
                druids or shamans, ensured that resources were not overused.
                Dawncallers guarded the camp overnight. Adjudicators settled
                disputes. Tent-mothers took care of the infants and toddlers.
                Lamentors determined when an elder member was no longer able to
                contribute to the tribe.
              </p>
              <br />
              <p>
                Tribe chieftains only maintained power as long as they could
                prove they were suitable for that role. As a result, leadership
                constantly changed. New leaders were chosen by contests. Any
                goliath could challenge the chieftain to replace them.
                Leadership challenges consisted of three tasks, and the
                challenger had to win all three to become the new chieftain. The
                old chieftain would then leave the tribe permanently. The
                tribes' reliance on innate wisdom in their leaders meant that
                they valued wisdom gained from natural ability over that from
                years of experience.
              </p>
              <br />
              <p>
                The competitive nature of goliaths meant that the attitude and
                achievements of one would quickly inspire the whole tribe.
                Individuals within tribes would constantly be trying to outdo
                each other's good deeds, leading nearby settlements to often
                stereotype goliaths as a heroic and good people.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "RELIGION"}
              onChange={() =>
                setExpanded((prev) => (prev !== "RELIGION" ? "RELIGION" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Religion</div>
            <div className="collapse-content overflow-x-auto">
              <table className="table my-2 table-zebra bg-base-100">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" font-bold">Kavaki, the Ram-Lord</td>
                    <td>The guardian and creator deity of the goliaths.</td>
                  </tr>
                  <tr>
                    <td className=" font-bold">Kuliak, the Dead Goddess</td>
                    <td>
                      Once a goddess of mountain springs, she was spurned by the
                      other gods after she overslept and failed to lead the
                      goliaths to water. Became the goddess of the dead and of
                      exiles.
                    </td>
                  </tr>
                  <tr>
                    <td className=" font-bold">Manethak, the Wise Hunter</td>
                    <td>The god of both hunting and knowledge.</td>
                  </tr>
                  <tr>
                    <td className=" font-bold">
                      Naki-Uthai, the Brave Climber
                    </td>
                    <td>The god of mountains, climbing, and bravery.</td>
                  </tr>
                  <tr>
                    <td className=" font-bold">Theleya, the Fertile One</td>
                    <td>The goddess of fertility and growth.</td>
                  </tr>
                  <tr>
                    <td className=" font-bold">Vanua, the Harbinger of Woe</td>
                    <td>The god of natural disasters and misfortune.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-8"
              checked={expand === "GOLIATH_NAMES"}
              onChange={() => setExpanded("GOLIATH_NAMES")}
            />
            <div className="collapse-title text-xl font-medium">
              Goliath Names
            </div>
            <div className="collapse-content">
              <p>
                Every goliath has three names: a birth name assigned by the
                newborn’s mother and father, a nickname assigned by the tribal
                chief, and a family or clan name. A birth name is up to three
                syllables long. Clan names are five syllables or more and end in
                a vowel.
              </p>
              <br />
              <p>
                Birth names are rarely linked to gender. Goliaths see females
                and males as equal in all things, and they find societies with
                roles divided by gender to be puzzling or worthy of mockery. To
                a goliath, the person who is best at a job should be the one
                tasked with doing it.
              </p>
              <br />
              <p>
                A goliath’s nickname is a description that can change on the
                whim of a chieftain or tribal elder. It refers to a notable
                deed, either a success or failure, committed by the goliath.
                Goliaths assign and use nicknames with their friends of other
                races, and change them to refer to an individual’s notable
                deeds.
              </p>
              <br />
              <p>
                Goliaths present all three names when identifying themselves, in
                the order of birth name, nickname, and clan name. In casual
                conversation, they use their nickname.
              </p>
              <br />
              <strong>Birth Names:</strong> Aukan, Eglath, Gae-Al, Gauthak,
              Ilikan, Keothi, Kuori, Lo-Kag, Manneo, Maveith, Nalla, Orilo,
              Paavu, Pethani, Thalai, Thotham, Uthal, Vaunea, Vimak
              <br />
              <strong>Nicknames:</strong> Bearkiller, Dawncaller, Fearless,
              Flintfinder, Horncarver, Keeneye, Lonehunter, Longleaper,
              Rootsmasher, Skywatcher, Steadyhand, Threadtwister,
              Twice-Orphaned, Twistedlimb, Wordpainter
              <br />
              <strong>Clan Names:</strong> Anakalathai, Elanithino,
              Gathakanathi, Kalagiano, Katho-Olavi, Kolae-Gileana, Ogolakanu,
              Thuliaga, Thunukalathi, Vaimei-Laga
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
                    Your Strength score increases by 2, and your Constitution
                    score increases by 1.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Age</td>
                  <td>
                    Goliaths have lifespans comparable to humans. They enter
                    adulthood in their late teens and usually live less than a
                    century.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Size</td>
                  <td>
                    Goliaths are between 7 and 8 feet tall and weigh between 280
                    and 340 pounds. Your size is Medium.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Speed</td>
                  <td>Your base walking speed is 30 feet.</td>
                </tr>
                <tr>
                  <td className="font-bold">Natural Athlete</td>
                  <td>You have proficiency in the Athletics skill.</td>
                </tr>
                <tr>
                  <td className="font-bold">Stone's Endurance</td>
                  <td>
                    You can focus yourself to occasionally shrug off injury.
                    When you take damage, you can use your reaction to roll a
                    d12. Add your Constitution modifier to the number rolled and
                    reduce the damage by that total. After you use this trait,
                    you can't use it again until you finish a short or long
                    rest.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Powerful Build</td>
                  <td>
                    You count as one size larger when determining your carrying
                    capacity and the weight you can push, drag, or lift.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Mountain Born</td>
                  <td>
                    You have resistance to cold damage. You're also acclimated
                    to high altitude, including elevations above 20,000 feet.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Languages</td>
                  <td>You can speak, read, and write Common and Giant.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide"
              onClick={raceGoliath}
            >
              Select Goliath
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
