import stoutDetail from "../../../public/images/stout2.jpg";
import lightfootDetail from "../../../public/images/lightfoot8.jpg";
import { RacialInfoProps } from "../../lib/racialInfoProps";
import Image from "next/image";

export default function HalflingInfo({
  expand,
  setExpanded,
  type,
}: RacialInfoProps) {
  if (!type) return null
  return (
    <>
      <Image
        src={type === "stout" ? stoutDetail : lightfootDetail}
        alt="detail image"
        width={800}
        height={800}
        className="rounded-xl aspect-square object-cover"
      />
      <p className="py-4"></p>
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
            The comforts of home are the goals of most halflings' lives: a place
            to settle in peace and quiet, far from marauding monsters and
            clashing armies; a blazing fire and a generous meal; fine drink and
            fine conversation.
          </p>
          <br />
          <p>
            Though some halflings live out their days in remote agricultural
            communities, others form nomadic bands that travel constantly, lured
            by the open road and the wide horizon to discover the wonders of new
            lands and peoples. But even these wanderers love peace, food,
            hearth, and home, though home might be a wagon jostling along a dirt
            road or a raft floating downriver.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-2"
          checked={expand === "SMALL_PRACTICAL"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "SMALL_PRACTICAL" ? "SMALL_PRACTICAL" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Small and Practical
        </div>
        <div className="collapse-content">
          <p>
            The diminutive halflings survive in a world full of larger creatures
            by avoiding notice or, barring that, avoiding offense. Standing
            about 3 feet tall, they appear relatively harmless and so have
            managed to survive for centuries in the shadow of empires and on the
            edges of wars and political strife. They are inclined to be stout,
            weighing between 40 and 45 pounds.
          </p>
          <br />
          <p>
            Halflings' skin ranges from tan to pale with a ruddy cast, and their
            hair is usually brown or sandy brown and wavy. They have brown or
            hazel eyes. Halfling men often sport long sideburns, but beards are
            rare among them and mustaches even more so. They like to wear
            simple, comfortable, and practical clothes, favoring bright colors.
          </p>
          <br />
          <p>
            Halfling practicality extends beyond their clothing. They're
            concerned with basic needs and simple pleasures and have little use
            for ostentation. Even the wealthiest of halflings keep their
            treasures locked in a cellar rather than on display for all to see.
            They have a knack for finding the most straightforward solution to a
            problem, and have little patience for dithering.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-2"
          checked={expand === "KIND_CURIOUS"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "KIND_CURIOUS" ? "KIND_CURIOUS" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Kind and Curious
        </div>
        <div className="collapse-content">
          <p>
            Halflings are an affable and cheerful people. They cherish the bonds
            of family and friendship as well as the comforts of hearth and home,
            harboring few dreams of gold or glory. Even adventurers among them
            usually venture into the world for reasons of community, friendship,
            wanderlust, or curiosity. They love discovering new things, even
            simple things, such as an exotic food or an unfamiliar style of
            clothing.
          </p>
          <br />
          <p>
            Halflings are easily moved to pity and hate to see any living thing
            suffer. They are generous, happily sharing what they have even in
            lean times.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-2"
          checked={expand === "BLEND_CROWD"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "BLEND_CROWD" ? "BLEND_CROWD" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Blend into the Crowd
        </div>
        <div className="collapse-content">
          <p>
            Halflings are adept at fitting into a community of humans, dwarves,
            or elves, making themselves valuable and welcome. The combination of
            their inherent stealth and their unassuming nature helps halflings
            to avoid unwanted attention.
          </p>
          <br />
          <p>
            Halflings work readily with others, and they are loyal to their
            friends, whether halfling or otherwise. They can display remarkable
            ferocity when their friends, families, or communities are
            threatened.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-2"
          checked={expand === "PASTORAL_PLEASANTRIES"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "PASTORAL_PLEASANTRIES" ? "PASTORAL_PLEASANTRIES" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Pastoral Pleasantries
        </div>
        <div className="collapse-content">
          <p>
            Most halflings live in small, peaceful communities with large farms
            and well-kept groves. They rarely build kingdoms of their own or
            even hold much land beyond their quiet shires. They typically don't
            recognize any sort of halfling nobility or royalty, instead looking
            to family elders to guide them. Families preserve their traditional
            ways despite the rise and fall of empires.
          </p>
          <br />
          <p>
            Many halflings live among other races, where the halflings' hard
            work and loyal outlook offer them abundant rewards and creature
            comforts. Some halfling communities travel as a way of life, driving
            wagons or guiding boats from place to place and maintaining no
            permanent home.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-2"
          checked={expand === "AFFABLE_POSITIVE"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "AFFABLE_POSITIVE" ? "AFFABLE_POSITIVE" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Affable And Positive
        </div>
        <div className="collapse-content">
          <p>
            Halflings try to get along with everyone else and are loath to make
            sweeping generalizations—especially negative ones.
          </p>
          <br />
          <p>
            Dwarves. “Dwarves make loyal friends, and you can count on them to
            keep their word. But would it hurt them to smile once in a while?”
          </p>
          <br />
          <p>
            Elves. “They're so beautiful! Their faces, their music, their grace
            and all. It's like they stepped out of a wonderful dream. But
            there's no telling what's going on behind their smiling faces—surely
            more than they ever let on.”
          </p>
          <br />
          <p>
            Humans. “Humans are a lot like us, really. At least some of them
            are. Step out of the castles and keeps, go talk to the farmers and
            herders and you'll find good, solid folk. Not that there's anything
            wrong with the barons and soldiers—you have to admire their
            conviction. And by protecting their own lands, they protect us as
            well.”
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-8"
          checked={expand === "EXPLORING_OPPORTUNITIES"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "EXPLORING_OPPORTUNITIES"
                ? "EXPLORING_OPPORTUNITIES"
                : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Exploring Opportunities
        </div>
        <div className="collapse-content">
          <p>
            Halflings usually set out on the adventurer's path to defend their
            communities, support their friends, or explore a wide and
            wonder-filled world. For them, adventuring is less a career than an
            opportunity or sometimes a necessity.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-9"
          checked={expand === "HALFLING_NAMES"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "HALFLING_NAMES" ? "HALFLING_NAMES" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">Halfling Names</div>
        <div className="collapse-content">
          <p>
            A halfling has a given name, a family name, and possibly a nickname.
            Family names are often nicknames that stuck so tenaciously they have
            been passed down through the generations.
          </p>
          <br />
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
                  <td className="font-bold">Male Names</td>
                  <td>
                    Alton, Ander, Cade, Corrin, Eldon, Errich, Finnan, Garret,
                    Lindal, Lyle, Merric, Milo, Osborn, Perrin, Reed, Roscoe,
                    Wellby
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Female Names</td>
                  <td>
                    Andry, Bree, Callie, Cora, Euphemia, Jillian, Kithri,
                    Lavinia, Lidda, Merla, Nedda, Paela, Portia, Seraphina,
                    Shaena, Trym, Vani, Verna
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Family Names</td>
                  <td>
                    Brushgather, Goodbarrel, Greenbottle, High-hill, Hilltopple,
                    Leagallow, Tealeaf, Thorngage, Tosscobble, Underbough
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
            {type === "lightfoot" ? (
              <tr>
                <td>Ability Score Increase</td>
                <td>Dex +2; Cha +1</td>
              </tr>
            ) : (
              <tr>
                <td>Ability Score Increase</td>
                <td>Dex +2; Con +1</td>
              </tr>
            )}
            {/* row 2 */}
            <tr>
              <td>Age</td>
              <td>
                A halfling reaches adulthood at the age of 20 and generally
                lives into the middle of his or her second century.
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Size</td>
              <td>
                Halflings average about 3 feet tall and weigh about 40 pounds.
                Your size is Small.
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>Speed</td>
              <td>Your base walking speed is 25 feet.</td>
            </tr>
            {/* row 5 */}
            <tr>
              <td>Lucky</td>
              <td>
                When you roll a 1 on the d20 for an attack roll, ability check,
                or saving throw, you can reroll the die and must use the new
                roll.
              </td>
            </tr>
            {/* row 6 */}
            <tr>
              <td>Brave</td>
              <td>
                You have advantage on saving throws against being frightened.
              </td>
            </tr>
            {/* row 7 */}
            <tr>
              <td>Halfling Nimbleness</td>
              <td>
                You can move through the space of any creature that is of a size
                larger than yours.
              </td>
            </tr>
            {type === "lightfoot" ? (
              <tr>
                <td>Naturally Stealthy</td>
                <td>
                  You can attempt to hide even when you are obscured only by a
                  creature that is at least one size larger than you.
                </td>
              </tr>
            ) : (
              <tr>
                <td>Stout Resilience</td>
                <td>
                  You have advantage on saving throws against poison, and you
                  have resistance against poison damage.
                </td>
              </tr>
            )}
            {/* row 8 */}
            <tr>
              <td>Languages</td>
              <td>
                You can speak, read, and write Common and Halfling. The Halfling
                language isn't secret, but halflings are loath to share it with
                others. They write very little, so they don't have a rich body
                of literature. Their oral tradition, however, is very strong.
                Almost all halflings speak Common to converse with the people in
                whose lands they dwell or through which they are traveling.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
