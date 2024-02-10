import Image from "next/image";
import { RacialInfoProps } from "../../lib/racialInfoProps";
import eladrin from "../../../public/images/eladrin4.jpg";
import high from "../../../public/images/elf4.jpeg";
import wood from "../../../public/images/elf3.jpeg";
import { wizardCantrips } from "../../lib/_wizardCantrips";
import { cantrips } from "../../lib/_Cantrips";
export default function ElfInfo({
  expand,
  setExpanded,
  type,
}: RacialInfoProps) {
  if (!type) return null
  return (
    <>
      <Image
        src={type === "eladrin" ? eladrin : type === "wood" ? wood : high}
        alt="detail image"
        width={800}
        height={800}
        className="rounded-xl aspect-square object-cover"
      />
      <p className="py-4"></p>

      {type === "eladrin" ? (
        <div className="collapse collapse-plus bg-base-200 my-1">
          <input
            type="checkbox"
            name="my-accordion-3"
            checked={expand === "ELADRIN_VARIANT"}
            onChange={() =>
              setExpanded((prev) =>
                prev !== "ELADRIN_VARIANT" ? "ELADRIN_VARIANT" : null
              )
            }
          />
          <div className="collapse-title text-xl font-medium">
            Eladrin (Variant)
          </div>
          <div className="collapse-content">
            <p className="text-sm sm:text-base">
              Elves are a magical people of otherworldly grace, living in the
              world but not entirely part of it.
            </p>
            <br />
            <p className="text-sm sm:text-base">
              This version of the eladrin originally appeared in the Dungeon
              Master's Guide as an example for creating your own subraces.
            </p>
            <br />
            <p className="text-sm sm:text-base">
              Creatures of magic with strong ties to nature, eladrin live in the
              twilight realm of the Feywild. Their cities sometimes cross over
              to the Material Plane, appearing briefly in mountain valleys or
              deep forest glades before fading back into the Feywild.
            </p>
          </div>
        </div>
      ) : type === "high" ? (
        <>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-4"
              checked={expand === "HIGH_ELF"}
              onChange={() =>
                setExpanded((prev) => (prev !== "HIGH_ELF" ? "HIGH_ELF" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">High Elf</div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Elves are a magical people of otherworldly grace, living in the
                world but not entirely part of it.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                As a high elf, you have a keen mind and a mastery of at least
                the basics of magic. In many of the worlds of D&D, there are two
                kinds of high elves. One type (which includes the gray elves and
                valley elves of Greyhawk, the Silvanesti of Dragonlance, and the
                sun elves of the Forgotten Realms) is haughty and reclusive,
                believing themselves to be superior to non-elves and even other
                elves. The other type (including the high elves of Greyhawk, the
                Qualinesti of Dragonlance, and the moon elves of the Forgotten
                Realms) are more common and more friendly, and often encountered
                among humans and other races.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                The sun elves of Faerûn (also called gold elves or sunrise
                elves) have bronze skin and hair of copper, black, or golden
                blond. Their eyes are golden, silver, or black. Moon elves (also
                called silver elves or gray elves) are much paler, with
                alabaster skin sometimes tinged with blue. They often have hair
                of silver-white, black, or blue, but various shades of blond,
                brown, and red are not uncommon. Their eyes are blue or green
                and flecked with gold.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-4"
              checked={expand === "EXTRA_CANTRIP"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "EXTRA_CANTRIP" ? "EXTRA_CANTRIP" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Extra Cantrip
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                As a High Elf you may choose a cantrip from the Wizard's cantrip
                list.
              </p>
              <br />
              <div className="overflow-x-auto">
              <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Cantrip</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {wizardCantrips.map((cant, i) => {
                      const cantInfo = cantrips[cant.name as keyof typeof cantrips];
                      if (!cantInfo) {
                        return null;
                      }
                      return (
                        <tr key={`cantinfo${i}`}>
                          <td className="font-bold">{cant.name}</td>
                          <td>
                            <strong>
                              Range - {cantInfo.range}, {cantInfo.duration}.
                            </strong>{" "}
                            {cantInfo.description}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="collapse collapse-plus bg-base-200 my-1">
          <input
            type="checkbox"
            name="my-accordion-5"
            checked={expand === "WOOD_ELF"}
            onChange={() =>
              setExpanded((prev) => (prev !== "WOOD_ELF" ? "WOOD_ELF" : null))
            }
          />
          <div className="collapse-title text-xl font-medium">Wood Elf</div>
          <div className="collapse-content">
            <p className="text-sm sm:text-base">
              Elves are a magical people of otherworldly grace, living in the
              world but not entirely part of it.
            </p>
            <br />
            <p className="text-sm sm:text-base">
              As a wood elf, you have keen senses and intuition, and your fleet
              feet carry you quickly and stealthily through your native forests.
              This category includes the wild elves (grugach) of Greyhawk and
              the Kagonesti of Dragonlance, as well as the races called wood
              elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves
              (also called wild elves, green elves, or forest elves) are
              reclusive and distrusting of non-elves.
            </p>
            <br />
            <p className="text-sm sm:text-base">
              Wood elves' skin tends to be copperish in hue, sometimes with
              traces of green. Their hair tends toward browns and blacks, but it
              is occasionally blond or copper-colored. Their eyes are green,
              brown, or hazel.
            </p>
          </div>
        </div>
      )}

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-2"
          checked={expand === "SLENDER_AND_GRACEFUL"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "SLENDER_AND_GRACEFUL" ? "SLENDER_AND_GRACEFUL" : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Slender and Graceful
        </div>
        <div className="collapse-content">
          <p className="text-sm sm:text-base">
            With their unearthly grace and fine features, elves appear
            hauntingly beautiful to humans and members of many other races. They
            are slightly shorter than humans on average, ranging from well under
            5 feet tall to just over 6 feet. They are more slender than humans,
            weighing only 100 to 145 pounds. Males and females are about the
            same height, and males are only marginally heavier than females.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            Elves' coloration encompasses the normal human range and also
            includes skin in shades of copper, bronze, and almost bluish-white,
            hair of green or blue, and eyes like pools of liquid gold or silver.
            Elves have no facial and little body hair. They favor elegant
            clothing in bright colors, and they enjoy simple yet lovely jewelry.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-2"
          checked={expand === "A_TIMELESS_PERSPECTIVE"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "A_TIMELESS_PERSPECTIVE"
                ? "A_TIMELESS_PERSPECTIVE"
                : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          A Timeless Perspective
        </div>
        <div className="collapse-content">
          <p className="text-sm sm:text-base">
            Elves can live well over 700 years, giving them a broad perspective
            on events that might trouble the shorter-lived races more deeply.
            They are more often amused than excited, and more likely to be
            curious than greedy. They tend to remain aloof and unfazed by petty
            happenstance. When pursuing a goal, however, whether adventuring on
            a mission or learning a new skill or art, elves can be focused and
            relentless. They are slow to make friends and enemies, and even
            slower to forget them. They reply to petty insults with disdain and
            to serious insults with vengeance.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            Like the branches of a young tree, elves are flexible in the face of
            danger. They trust in diplomacy and compromise to resolve
            differences before they escalate to violence. They have been known
            to retreat from intrusions into their woodland homes, confident that
            they can simply wait the invaders out. But when the need arises,
            elves reveal a stern martial side, demonstrating skill with sword,
            bow, and strategy.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-2"
          checked={expand === "HIDDEN_WOODLAND_REALMS"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "HIDDEN_WOODLAND_REALMS"
                ? "HIDDEN_WOODLAND_REALMS"
                : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Hidden Woodland Realms
        </div>
        <div className="collapse-content">
          <p className="text-sm sm:text-base">
            Most elves dwell in small forest villages hidden among the trees.
            Elves hunt game, gather food, and grow vegetables, and their skill
            and magic allow them to support themselves without the need for
            clearing and plowing land. They are talented artisans, crafting
            finely worked clothes and art objects. Their contact with outsiders
            is usually limited, though a few elves make a good living by trading
            crafted items for metals (which they have no interest in mining).
          </p>
          <br />
          <p className="text-sm sm:text-base">
            Elves encountered outside their own lands are commonly traveling
            minstrels, artists, or sages. Human nobles compete for the services
            of elf instructors to teach swordplay or magic to their children.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-2"
          checked={expand === "EXPLORATION_AND_ADVENTURE"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "EXPLORATION_AND_ADVENTURE"
                ? "EXPLORATION_AND_ADVENTURE"
                : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Exploration and Adventure
        </div>
        <div className="collapse-content">
          <p className="text-sm sm:text-base">
            Elves take up adventuring out of wanderlust. Since they are so
            long-lived, they can enjoy centuries of exploration and discovery.
            They dislike the pace of human society, which is regimented from day
            to day but constantly changing over decades, so they find careers
            that let them travel freely and set their own pace. Elves also enjoy
            exercising their martial prowess or gaining greater magical power,
            and adventuring allows them to do so. Some might join with rebels
            fighting against oppression, and others might become champions of
            moral causes.
          </p>
        </div>
      </div>
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
            <td className="font-bold">Ability Scores</td>
            {type === "high" || type === "eladrin" ? (
              <td>Int +1</td>
            ) : (
              <td>Wis +1</td>
            )}
          </tr>
          {/* row 2 */}
          <tr>
            <td className="font-bold">Size</td>
            <td>
              Elves range from under 5 to over 6 feet tall and have slender
              builds. Your size is Medium.
            </td>
          </tr>
          {/* row 3 */}
          {type !== "wood" ? (
            <tr>
              <td className="font-bold">Speed</td>
              <td>30 feet</td>
            </tr>
          ) : (
            <tr>
              <td>Fleet of Foot</td>
              <td>Your base walking speed increases to 35 feet.</td>
            </tr>
          )}
          {/* row 4 */}
          <tr>
            <td className="font-bold">Age</td>
            <td>
              Although elves reach physical maturity at about the same age as
              humans, the elven understanding of adulthood goes beyond physical
              growth to encompass worldly experience. An elf typically claims
              adulthood and an adult name around the age of 100 and can live to
              be 750 years old.
            </td>
          </tr>
          {/* row 5 */}
          <tr>
            <td className="font-bold">Alignment</td>
            <td>
              Elves love freedom, variety, and self-expression, so they lean
              strongly toward the gentler aspects of chaos. They value and
              protect others' freedom as well as their own, and they are more
              often good than not.
            </td>
          </tr>
          {/* row 6 */}
          <tr>
            <td className="font-bold">Darkvision</td>
            <td>
              Accustomed to twilit forests and the night sky, you have superior
              vision in dark and dim conditions. You can see in dim light within
              60 feet of you as if it were bright light, and in darkness as if
              it were dim light. You can't discern color in darkness, only
              shades of gray.
            </td>
          </tr>
          {/* row 7 */}
          <tr>
            <td className="font-bold">Keen Senses</td>
            <td>You have proficiency in the Perception skill.</td>
          </tr>
          {/* row 8 */}
          <tr>
            <td className="font-bold">Fey Ancestry</td>
            <td>
              You have advantage on saving throws against being charmed, and
              magic can't put you to sleep.
            </td>
          </tr>
          {/* row 9 */}
          <tr>
            <td className="font-bold">Trance</td>
            <td>
              Elves don't need to sleep. Instead, they meditate deeply,
              remaining semiconscious, for 4 hours a day. While meditating, you
              can dream after a fashion; such dreams are actually mental
              exercises that have become reflexive through years of practice.
              After resting in this way, you gain the same benefit that a human
              does from 8 hours of sleep.
            </td>
          </tr>
          {type === "eladrin" ? (
            <tr>
              <td className="font-bold">Fey Step</td>
              <td>
                You can cast the misty step spell once using this trait. You
                regain the ability to do so when you finish a short or long
                rest.
              </td>
            </tr>
          ) : type === "high" ? (
            <>
              <tr>
                <td className="font-bold">Cantrip</td>
                <td>
                  You know one cantrip of your choice from the wizard spell
                  list. Intelligence is your spellcasting ability for it
                </td>
              </tr>
              <tr>
                <td className="font-bold">Extra Language</td>
                <td>
                  You can speak, read, and write one extra language of your
                  choice.
                </td>
              </tr>
            </>
          ) : (
            <tr>
              <td className="font-bold">Mask of the Wild</td>
              <td>
                You can attempt to hide even when you are only lightly obscured
                by foliage, heavy rain, falling snow, mist, and other natural
                phenomena.
              </td>
            </tr>
          )}
          {/* row 10 */}
          <tr>
            <td className="font-bold">Languages</td>
            <td>
              You can speak, read, and write Common and Elvish. Elvish is fluid,
              with subtle intonations and intricate grammar. Elven literature is
              rich and varied, and their songs and poems are famous among other
              races. Many bards learn their language so they can add Elvish
              ballads to their repertoires.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
