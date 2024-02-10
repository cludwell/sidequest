import Image from "next/image";
import { RacialInfoProps } from "../../lib/racialInfoProps";
import rock from "../../../public/images/rock.png";
import deep from "../../../public/images/deepgnome2.jpg";
export default function GnomeInfo({
  expand,
  setExpanded,
  type,
}: RacialInfoProps) {
  if (!type) return null
  return (
    <>
      <Image
        src={type === "rock" ? rock : deep}
        alt="detail image"
        width={800}
        height={800}
        className="rounded-xl aspect-square object-cover"
      />
      <p className="py-4"></p>
      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="gnome-details-accordion"
          checked={expand === "VIBRANT_EXPRESSION"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "VIBRANT_EXPRESSION" ? "VIBRANT_EXPRESSION" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Vibrant Expression
        </div>
        <div className="collapse-content">
          <p className="text-sm sm:text-base">
            A gnome's energy and enthusiasm for living shines through every inch
            of his or her tiny body. Gnomes average slightly over 3 feet tall
            and weigh 40 to 45 pounds. Their tan or brown faces are usually
            adorned with broad smiles (beneath their prodigious noses), and
            their bright eyes shine with excitement. Their fair hair has a
            tendency to stick out in every direction, as if expressing the
            gnome's insatiable interest in everything around.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            A gnome's personality is writ large in his or her appearance. A male
            gnome's beard, in contrast to his wild hair, is kept carefully
            trimmed but often styled into curious forks or neat points. A
            gnome's clothing, though usually made in modest earth tones, is
            elaborately decorated with embroidery, embossing, or gleaming
            jewels.
          </p>
        </div>
      </div>
      {/* Delighted Dedication */}
      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="gnome-details-accordion"
          checked={expand === "DELIGHTED_DEDICATION"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "DELIGHTED_DEDICATION" ? "DELIGHTED_DEDICATION" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Delighted Dedication
        </div>
        <div className="collapse-content">
          <p className="text-sm sm:text-base">
            As far as gnomes are concerned, being alive is a wonderful thing,
            and they squeeze every ounce of enjoyment out of their three to five
            centuries of life. Humans might wonder about getting bored over the
            course of such a long life, and elves take plenty of time to savor
            the beauties of the world in their long years, but gnomes seem to
            worry that even with all that time, they can't get in enough of the
            things they want to do and see.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            Gnomes speak as if they can't get the thoughts out of their heads
            fast enough. Even as they offer ideas and opinions on a range of
            subjects, they still manage to listen carefully to others, adding
            the appropriate exclamations of surprise and appreciation along the
            way.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            Though gnomes love jokes of all kinds, particularly puns and pranks,
            they're just as dedicated to the more serious tasks they undertake.
            Many gnomes are skilled engineers, alchemists, tinkers, and
            inventors. They're willing to make mistakes and laugh at themselves
            in the process of perfecting what they do, taking bold (sometimes
            foolhardy) risks and dreaming large.
          </p>
        </div>
      </div>

      {/* Bright Burrows */}
      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="gnome-details-accordion"
          checked={expand === "BRIGHT_BURROWS"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "BRIGHT_BURROWS" ? "BRIGHT_BURROWS" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">Bright Burrows</div>
        <div className="collapse-content">
          <p className="text-sm sm:text-base">
            Gnomes make their homes in hilly, wooded lands. They live
            underground but get more fresh air than dwarves do, enjoying the
            natural, living world on the surface whenever they can. Their homes
            are well hidden by both clever construction and simple illusions.
            Welcome visitors are quickly ushered into the bright, warm burrows.
            Those who are not welcome are unlikely to find the burrows in the
            first place.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            Gnomes who settle in human lands are commonly gemcutters, engineers,
            sages, or tinkers. Some human families retain gnome tutors, ensuring
            that their pupils enjoy a mix of serious learning and delighted
            enjoyment. A gnome might tutor several generations of a single human
            family over the course of his or her long life.
          </p>
        </div>
      </div>

      {/* And so on for the other sections... */}

      {type === "rock" ? (
        <>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="gnome-details-accordion"
              checked={expand === "TINKER"}
              onChange={() =>
                setExpanded((prev) => (prev !== "TINKER" ? "TINKER" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Tinker</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                You have proficiency with artisan's tools (tinker's tools).
                Using those tools, you can spend 1 hour and 10 gp worth of
                materials to construct a Tiny clockwork device (AC 5, 1 hp). The
                device ceases to function after 24 hours (unless you spend 1
                hour repairing it to keep the device functioning), or when you
                use your action to dismantle it; at that time, you can reclaim
                the materials used to create it. You can have up to three such
                devices active at a time.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                When you create a device, choose one of the following options:
              </p>
              <br />
              <ul className="text-sm sm:text-base">
                <li className="m-4 list-disc">
                  <strong>Clockwork Toy.</strong> This toy is a clockwork
                  animal, monster, or person, such as a frog, mouse, bird,
                  dragon, or soldier. When placed on the ground, the toy moves 5
                  feet across the ground on each of your turns in a random
                  direction. It makes noises as appropriate to the creature it
                  represents.
                </li>
                <li className="m-4 list-disc">
                  <strong>Fire Starter.</strong> The device produces a miniature
                  flame, which you can use to light a candle, torch, or
                  campfire. Using the device requires your action.
                </li>
                <li className="m-4 list-disc">
                  <strong>Music Box.</strong> When opened, this music box plays
                  a single song at a moderate volume. The box stops playing when
                  it reaches the song's end or when it is closed.
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-3"
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
                Rock gnomes possessed many of the traits of other races,
                particularly humans, attributed to children. Most rock gnomes
                enjoyed life to their very fullest; asking questions endlessly,
                playing pranks on friends and strangers, and finding new and
                interesting hobbies were just a few of the countless chores that
                rock gnomes burdened each day with. Much like a child, a rock
                gnome possessed very little tolerance for long term mental focus
                unless the task at hand was of notable interest.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                While their joyful, child-like viewpoint of life gave the
                impression that a rock gnome would be incapable of achieving
                something as mundane as physical labor, rock gnomes managed to
                use their keen intelligence to turn something as generally
                unexciting as work into a fun and enjoyable expenditure of their
                time and energy.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-3"
              checked={expand === "SOCIETY"}
              onChange={() =>
                setExpanded((prev) => (prev !== "SOCIETY" ? "SOCIETY" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Society</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Rock gnomes gathered in small towns, rarely reaching 500 adults.
                They considered large cities to be uncomfortable, partially
                because of the great amount of demand the Big Folk had for their
                skills. Rock gnomes were comfortable deep underground almost as
                much as on the surface world, possessing skill in ore and
                gemcutting that surpassed that of the dwarves, along with
                notable skills in toymaking and clockwork engineering. Rock
                gnomes were also the finest producers of the unusual weapons
                known as "guns."
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Rock gnome homes were burrows, small but clean cave-like
                carvings into stone and hillsides. Married gnome couples had
                rooms for each to use, though rock gnome children generally
                slept together in a single room. Rock gnome burrows were
                constructed by clan, allowing underground tunnels to conjoin one
                another for defense and other purposes.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Although rock gnomes could theoretically be of any alignment,
                the majority of rock gnomes, as a culture, leaned towards
                neutral good. Rock gnomes would aid someone in need and oppose
                all who would impose their will upon those weaker than them.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-3"
              checked={expand === "RELIGION"}
              onChange={() =>
                setExpanded((prev) => (prev !== "RELIGION" ? "RELIGION" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Religion</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Rock gnomes typically possessed a nonchalant reverence of their
                chosen deity, bringing up the name of their god in any form of
                conversation as if they were referring to a friend. Rock gnomes
                rarely went to church and had no particularly great amount of
                zeal towards the worship of their pantheon of gods. In typical
                gnomish manner, the gnomish gods required no particularly
                impressive display of faith, being more interested in following
                their own admittedly mundane agendas.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Most rock gnomes worshiped the head of the gnomish pantheon,
                Garl Glittergold, considering him to be the idealized gnome,
                personifying mischief and merry-making.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-3"
              checked={expand === "RELATIONS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "RELATIONS" ? "RELATIONS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Relations with other races
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Rock gnomes were especially easy going with dwarves and
                halflings, especially those who appreciated a good joke. They
                were typically more cautious and subdued around the Big Folk
                (humans, elves and the other medium size humanoids), taking a
                considerably longer time (a day longer, perhaps) to consider
                them a friend and ally. They considered all forms of goblinkin
                to be extremely untrustworthy and gave them a very wide berth if
                possible.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-3"
              checked={expand === "HOMELANDS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HOMELANDS" ? "HOMELANDS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Homelands</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Rock gnomes roamed the lands of Faerûn far and wide, using their
                impressive natural intelligence as inventors, mages, and other
                positions which required mechanical aptitude or just sheer
                knowledge of their surroundings. Rock gnomes who chose to study
                the paths of arcane magic typically chose the school of
                illusion, which they often used to enhance storytelling or
                defending their small villages from goblinoid attack. Rock
                gnomes were also found commonly in the Western Heartlands, the
                Dalelands, and the woodlands between the Great Dale and Thesk.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Though unknown to most-every civilization of Toril, rock gnomes
                additionally inhabited and ruled a secret realm below the
                Sunrise Mountains known as Songfarla the Hidden Kingdom.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "PSYCHOLOGY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PSYCHOLOGY" ? "PSYCHOLOGY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Psychology</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Deep gnomes were a surly and cynical people who fatalistically
                expected little more from life than what they had. While they
                treated their own kind with respect and even goodwill, trust was
                not easily given to anyone from outside their village, or even
                outside their family. They kept to themselves, were extremely
                cautious when contacting other races, and eyed all strangers
                with suspicion.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Sullen and hard-working, deep gnomes were wholly dedicated to
                any task to which they set themselves, typically mining for
                males and housekeeping for females. Although outsiders found
                deep gnomes' overly serious attitude made for sour company,
                those qualities made the svirfneblin tireless pursuers of
                excellence in their metalworking and weapon forging. These
                attitudes were also justified in part by the harsh environs the
                deep gnomes inhabited, which required a degree of stoicism and
                quiet suffering in order to serve the greater good. Any sounds
                or raised voices could attract danger to deep gnome homes and
                fire was used sparingly for cooking and warmth. Their
                seriousness and pessimism only faded when admiring the gems
                which fascinated them so much.
              </p>
              <br />

              <p className="text-sm sm:text-base">
                Although far more serious than most gnomes, deep gnomes
                nonetheless exhibited the same insatiable curiosity and
                craftiness when put in the right circumstances. It was this
                trait, more than any other, which led some deep gnomes to
                abandon their cautious upbringing and explore the world around
                them. Some of these wandering deep gnomes turned upwards and
                investigated the surface world from which their ancestors came,
                particularly deep gnome illusionists who hoped to find advanced
                instruction in the Art beyond what could be obtained in their
                isolated homes. Others become prospectors, searching the
                Underdark for new veins of gems and ore to mine.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "ABILITIES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ABILITIES" ? "ABILITIES" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Abilities</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Deep gnome were better adapted for underground living than
                either rock gnomes or forest gnomes, with darkvision to help
                them see in total darkness and a dwarf-like affinity for stone,
                allowing them to innately understand it on a level few other
                races could appreciate. Conversely, deep gnomes lacked most
                gnomes' predilection for cantrip-like abilities, but could
                instead blind other beings, obscure their own presence, or
                shapeshift. Deep gnomes also had a great deal of resistance to
                magic of any kind, and could go undetected as if they were using
                the nondetection spell, alongside their natural affinity for
                avoiding danger or hiding.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "SOCIETY"}
              onChange={() =>
                setExpanded((prev) => (prev !== "SOCIETY" ? "SOCIETY" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Society</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                The harsh conditions of life in the Underdark shaped gnome
                society in a number of unusual ways. Children were an extremely
                important part of deep gnome society, in part due to a low
                birthrate relative to the mortality rate.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Deep gnome couples usually had fewer than four children and
                rarely more than six. Deep gnome mothers doted on their children
                obsessively, but not in such a way that inhibited their growth.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                When they reach adolescence, children were quickly apprenticed
                to masters in whatever trade they were expected to take on.
                Adulthood was less defined among deep gnomes than among their
                kin, with maturity commonly agreed upon to be the time at which
                a deep gnome started working full-time in a trade.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Most males were miners or lapidaries, while females were the
                masters of the home, raising children, keeping the house tidy,
                gathering food, and preparing meals.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Deep gnomes considered male and female gender roles equally
                important. Males were masters outside of the home and females
                were masters within. This concept of equal labor for either sex
                carried all the way to the top of svirfneblin society, with each
                city governed by a king and queen who ruled as equals.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                The king was often the head of the community's mining operations
                and defenses, while the queen was tasked with ensuring that the
                community had enough food and water to survive, while also
                handling the day in and day out bureaucracy. Significantly, the
                king and queen were rarely married to each another, but instead
                came into their positions independently, elected for life upon
                the death of their predecessor. Regardless of gender, there was
                no true conception of retirement among deep gnomes, who worked
                until they could physically work no more.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "CULTURE"}
              onChange={() =>
                setExpanded((prev) => (prev !== "CULTURE" ? "CULTURE" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Culture</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Deep gnome culture was largely defined by the environment in
                which they lived. Deep gnome settlements were usually centered
                in a single large cavern, surrounded by an interlocking set of
                tunnels and other caverns into which the city spread.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                These settlements were often large villages or small towns, with
                a population of around a thousand gnomes. Typically cut off from
                all outside contact, even from other deep gnome settlements,
                many inhabitants never ventured out of their havens, instead
                crowding together for protection. Population density was
                extremely high as most families shared a single, small room for
                their living space, with children living with their parents
                until they themselves married and had children.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Svirfneblin lived in harmony with the rocks they carved and
                their natural environment. They were skillful artisans who
                created functional homes without destroying the natural beauty
                of their habitat. Their skill in mining, gem-cutting, and
                artificing made their handiwork well sought after by neutral
                merchants throughout the whole Underdark.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                They were also excellent guides, scouts and foragers because
                they knew of underground portals, tunnels, and passages long
                forgotten by the other races. Having to rely on stealth and
                cunning, they had truly mastered traveling through their
                environment, resulting in some of the finest subterranean deep
                gnome rangers.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Deep gnomes rarely wandered far beyond their hidden cities, but
                when they did, it was usually as bold prospectors, youthful
                illusionists, or exploring warriors. These bold souls shared a
                deep curiosity that allowed them to overcome their hard-bred
                caution and shyness, although other motives such as economic
                drive or a desire to seek aid to fight a threat the deep gnomes
                could not conquer on their own might also play into their
                departure.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Deep gnomes who became adventurers most frequently were
                fighters, rangers, rogues, or wizards (particularly
                illusionists). Although well-suited to the arcane arts like
                other gnomes, they were also fit to becoming rangers or rogues,
                adapted as they were to hiding and navigating the labyrinthine
                caverns of the Underdark. Deep gnomes of the martial persuasion
                who survived their adventures and came back with knowledge and
                experience sometimes became breachgnomes, elite warriors trained
                to defend a position against superior numbers.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "ART_LEISURE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "ART_LEISURE" ? "ART_LEISURE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Art & Leisure
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                As a whole, deep gnomes were a hard-working and joyless people,
                but even the crustiest deep gnome required time to relax and let
                off steam. Deep gnomes' intense dedication and ability to
                survive under harsh conditions often showed up in such
                activities.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Deep gnome architecture, for instance, was shaped largely by the
                conditions they lived in, with the oldest homes often carved
                directly out of the surrounding rock. The highest-ranking
                members of any one clan usually inhabited large stalagmites
                while the lower-class lodged in the surrounding cavern floors or
                walls.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Deep gnome cuisine was also a reflection of their livelihood,
                with the common staples made up of a variety of exotic fungi
                found only in the Underdark. Other common foods included blind
                fish and occasionally a roast made of rothé, goat, or mutton.
                Because fire produced unwanted light and smoke, deep gnomes
                generally preferred to salt their food instead of cook it, which
                made most svirfneblin food practically inedible to outsiders.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                For drink, most deep gnomes drank a salty spirit, fermented
                fish, which, like svirfneblin food, was an acquired taste. On
                occasion, deep gnomes might drink a more potent beverage called
                Gogondy, said to contained powdered ruby and grant powerful
                visions to those who drank it.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Artistically, deep gnomes preferred to use lots of gemstones,
                which were relatively common in svirfneblin communities, mined
                out of the veins along which their cities were built. Deep
                gnomes were some of the best jewelers in the Underdark.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Deep gnomes also turned their cultivation of mushrooms for food
                into a wider industry, developing fungi not only for food but
                for textiles and wood as well. For their defense, deep gnomes
                most often designed weapons that could be used as non-violent
                tools as well, largely favoring the use of light picks, darts,
                or crossbows. Deep gnomes also used specialized weapons, such as
                acid darts, caltrops made from crystals, and flash grenades.
              </p>
            </div>
          </div>
        </>
      )}
      <div className="overflow-x-auto">
        <table className="table table-zebra my-4">
          {/* head */}
          <thead>
            <tr>
              <th className="font-bold">Trait</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">Gnome Cunning</td>
              <td>
                You have advantage on all Intelligence, Wisdom, and Charisma
                saving throws against magic.
              </td>
            </tr>
            <tr>
              <td className="font-bold">Size</td>
              <td>
                Gnomes are between 3 and 4 feet tall and average about 40
                pounds. Your size is Small.
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td className="font-bold">Speed</td>
              <td>Your base walking speed is 25 feet.</td>
            </tr>
            {type === "deep" ? (
              <>
                <tr>
                  <td className="font-bold">Ability Score Increase</td>
                  <td>Dex +1; Int+2</td>
                </tr>
                <tr>
                  <td className="font-bold">Age</td>
                  <td>
                    Deep gnomes are short-lived for gnomes. They mature at the
                    same rate humans do and are considered full-grown adults by
                    25. They live 200 to 250 years, although hard toil and the
                    dangers of the Underdark often claim them before their time.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Alignment</td>
                  <td>
                    Svirfneblin believe that survival depends on avoiding
                    entanglements with other creatures and not making enemies,
                    so they favor neutral alignments. They rarely wish others
                    ill, and they are unlikely to take risks on behalf of
                    others.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Size</td>
                  <td>
                    A typical svirfneblin stands about 3 to 3½ feet tall and
                    weighs 80 to 120 pounds. Your size is Small.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Superior Darkvision</td>
                  <td>Your darkvision has a radius of 120 feet.</td>
                </tr>
                <tr>
                  <td className="font-bold">Stone Camouflage</td>
                  <td>
                    You have advantage on Dexterity (Stealth) checks to hide in
                    rocky terrain.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Languages</td>
                  <td>
                    You can speak, read, and write Common, Gnomish, and
                    Undercommon. The svirfneblin dialect is more guttural than
                    surface Gnomish, and most svirfneblin know only a little bit
                    of Common, but those who deal with outsiders (and that
                    includes you as an adventurer) pick up enough Common to get
                    by in other lands.
                  </td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td className="font-bold">Ability Score Increase</td>
                  <td>Int +2; Con+1</td>
                </tr>
                <tr>
                  <td className="font-bold">Age</td>
                  <td>
                    Gnomes mature at the same rate humans do, and most are
                    expected to settle down into an adult life by around age 40.
                    They can live 350 to almost 500 years.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Darkvision</td>
                  <td>
                    Accustomed to life underground, you have superior vision in
                    dark and dim conditions. You can see in dim light within 60
                    feet of you as if it were bright light, and in darkness as
                    if it were dim light. You can't discern color in darkness,
                    only shades of gray.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Artificer's Lore</td>
                  <td>
                    Whenever you make an Intelligence (History) check related to
                    magic items, alchemical objects, or technological devices,
                    you can add twice your proficiency bonus, instead of any
                    proficiency bonus you normally apply.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Languages</td>
                  <td>
                    You can speak, read, and write Common and Gnomish. The
                    Gnomish language, which uses the Dwarvish script, is
                    renowned for its technical treatises and its catalogs of
                    knowledge about the natural world.
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
