import Image from "next/image";
import { useEffect, useState } from "react";
import drow from "../../../public/images/drow.jpg";
import drowDetail from "../../../public/images/drow6.png";
import { SetRaceProps } from "../../../lib/setRaceProps";
import IconDoubleChevron from "../IconDoubleChevron";
declare global {
  interface Window {
    my_modal_21: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalDrow({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal21 = document.getElementById("my_modal_21");
    if (myModal21) window.my_modal_21 = myModal21;
  }, []);
  const raceDrow = async () => {
    setRace({
      race: "Drow",
      languages: ["Common", "Elvish", "Undercommon"],
      spells: ["Dancing Lights"],
      vision: "Superior Darkvision (120 feet); sunlight sensitivity.",
      inventory: [],
      tools: [],
      specialty: [],
    });
    window.my_modal_21.close();
    window.location.href = "#item2";
  };

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_21.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={drow}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Drow
        </span>
       <IconDoubleChevron />
      </button>
      <dialog id="my_modal_21" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-5xl mb-4 almendra text-center">Drow</h3>
          <Image
            src={drowDetail}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="py-4"></p>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-6"
              checked={expand === "DROW_DESCRIPTION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DROW_DESCRIPTION" ? "DROW_DESCRIPTION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Description
            </div>
            <div className="collapse-content">
              <p>
                In many ways, the drow resembled other elves or eladrin. Their
                bodies were wiry and athletic, while their faces were chiseled
                and attractive. They were shorter and thinner than other elven
                sub-races. Due to a process of selective breeding that lasted
                for several generations, the drow, especially nobles, looked
                attractive even in comparison to other elven subraces. Though
                their alluring appearance could be used for seduction, it was
                more often utilized to instill fear. According to the goblin
                Nojheim, the beauty standards of the surface races made them
                prone to turn a blind eye to the deeds of the drow, showing them
                greater leniency and acceptance.
              </p>
              <br />
              <p>
                Reports varied on the physical differences between the drow
                sexes. Some purported that females were generally bigger and
                stronger than males, while others claimed the males had superior
                strength. Both sexes varied in height, averaging at 5 feet.
                Males weighed between 87 to 157 pounds, averaging 109.5 pounds,
                while females were a bit lighter, averaging 104.5 pounds.
              </p>

              <h2 className="text-xl underline my-4">Coloration</h2>
              <p>
                Drow skin tones ranged from dark grey, jet-black, and obsidian,
                the albino drow known as the Szarkai being an exception. Drow
                had white, black, or purple teeth. Drow eyes could be of any
                color, with bright red being the most common. Pale shades that
                appeared nearly white of blue, lilac, pink, or silver were also
                frequent. Drow with green, brown, black, amber, or rose-hued
                eyes existed, but they were rare. The color of a drow's eyes
                could also be indicative of their current mental or physical
                state.
              </p>

              <h2 className="text-xl underline my-4">Hair</h2>
              <p>
                Drow hair could be stark white, pale yellow and, more rarely,
                silver or copper in color. It thinned and changed color with
                age. Drow generally kept their hair long, and decorated it with
                pins and webbing made of precious metals. They were incapable of
                growing proper beards, but some males managed to grow long
                sideburns or tufts of wispy hair on the cheek or chin.
              </p>

              <h2 className="text-xl underline my-4">Clothing</h2>
              <p>
                The majority of drow wore a piwafwi, a fire-resistant,
                protective cloak, footwear that functioned as boots of
                elvenkind, and a drow house insignia. The latter showed the
                House or merchant clan to which a drow belonged. Noble drow wore
                clothes and equipment of superior quality. For example, a
                noble's house insignia didn't just show house allegiance but
                also carried magic that could be used on command. Web chokers
                were considered fashionable by drow priestesses, who also often
                used powdered Ormu, an Underdark-moss, as eye shadow.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-7"
              checked={expand === "DROW_PERSONALITY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DROW_PERSONALITY" ? "DROW_PERSONALITY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Personality
            </div>
            <div className="collapse-content">
              <p>
                Compared to other sentient beings, drow were notably
                intelligent, as having an analytical mindset and being observant
                at all times was needed to survive in their society. Intellect,
                along with force of personality, were mental traits that had
                been ruthlessly selected for in their socially darwinian
                civilization over several generations. However, a lifetime of
                being indoctrinated with Lolth's dogma, combined with their
                upbringing giving them limited contact with other beings,
                surroundings, and alternative ways of life, made them
                close-minded, and left them with little worldly experience.
              </p>
              <br />
              <p>
                The drow, fittingly for the dark perversions of the elves they
                were, were decadent and hedonistic beings with a love for what
                they considered beautiful and a desire to surround themselves
                with it, generally without paying attention to the cost of
                acquiring it. For example, they were often lecherous, with a
                tendency to take lovers at their leisure and discard them at
                their whim. However, the drow were able to (or at least tried
                to) hide some of their more heinous traits behind a veneer of
                sophistication.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-8"
              checked={expand === "DROW_MORALITY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DROW_MORALITY" ? "DROW_MORALITY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Morality</div>
            <div className="collapse-content">
              <p>
                The moral code of the average drow was informed by the teachings
                of Lolth. From birth, the drow were taught that they were
                superior to other races, and as such they believed themselves to
                be the ultimate beings. This mindset created an arrogance so
                strong that drow could be incapable of viewing other creatures
                as their equals, including members of their own kind; almost
                every drow believed themselves to be the epitome of their
                superior species. The treatment reserved for non-drow ran the
                entire gamut from pets, to slaves, to grudgingly respected
                partners if they proved themselves a military match for them,
                though never equals.
              </p>
              <br />
              <p>
                As one might expect, this atmosphere of utter condescension
                meant that most drow generally felt entitled to do whatever they
                wanted, whenever they wanted to do it. If a drow was not where
                they believed they should be, their pride demanded they blame
                someone else (sometimes everyone else) for their incorrect
                position. They were also taught that they should crush those
                beneath them, for cruelty was seen as a method of
                self-validation. If someone could not defend themselves, as the
                logic went, they deserved to have cruelty inflicted on them,
                which would prove the superiority of the drow performing the
                torment. They were a vengeful people by necessity, as not
                answering to slights with punishment was easily perceived as
                weakness by other drow, and was essentially the same as inviting
                exploitation, abuse, or even death.
              </p>
              <br />
              <p>
                Most drow sought to rise in rank, desiring the power over others
                that a higher station would provide. Ironically for a race that
                put such a focus on individual merit, personal achievement and
                ability carried so little weight in their minds they had almost
                no notion of its worth. Military genius, battle prowess, magical
                capability, the ability to create, and all other skills had no
                intrinsic value to the dark elves. The idea of passion for one's
                career, and of an activity having worth in and of itself was
                alien; abilities and resources, whether obtained by training or
                granted by birth, only mattered insofar as it increased a drow's
                ability to advance in station, thus granting them more power
                over others.
              </p>
              <br />
              <p>
                Given the scarcity of resources in the Underdark and the limited
                chances for advancement within their society, most drow had to
                be aggressively competitive. They had a propensity for violence,
                which was their favorite, even instinctive, form of conflict
                resolution, and they managed to fight this urge when waiting for
                a more propitious time to strike.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-9"
              checked={expand === "DROW_MISTRUST"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DROW_MISTRUST" ? "DROW_MISTRUST" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Mistrust</div>
            <div className="collapse-content">
              <p>
                As a general rule, drow living within a Lolthite society
                couldn't afford to show emotions like compassion or love, for
                they were easy to exploit and drow often preferred emotional
                cruelty over causing physical harm. The strife they constantly
                endured led them to be paranoid, with a fear of everyone and
                everything, from the potential loss of personal position,
                Lolth's favor, the loyalty (or even the threat of outright
                rebellion) of their inferiors, to punishment by their own
                superiors' hands.
              </p>
              <br />
              <p>
                The end result of being raised in this environment was that the
                drow were untrusting sadists with a constant readiness to stab
                others in the back, both in the figurative and literal sense.
                They were an emotionally stunted people with a tenuous grasp on
                sanity (a trait they placed less importance on than cunning and
                deviousness) and scarred minds, among which relatively undamaged
                individuals were considered abnormal. Most were incapable of
                trusting other creatures, no matter their race, and were taught
                from an early age not to do so, as they were expected to advance
                at the expenses of others by any means, including treachery and
                even outright murder (although not overtly). Even in moments of
                safety or relaxation, they were always alert and constantly
                expecting attacks of any kind, and were rarely surprised when
                such attacks did come.
              </p>
              <br />
              <p>
                While the drow understood the advantage of forging bonds with
                others, they did not see the value in honesty. Forming relations
                with others was therefore a dangerous endeavor, and mostly
                temporary, since any alliance or cordial relationship could end
                in treachery. Drow normally went into engagements of this sort
                expecting the worst, and alliances were always under scrutiny
                for signs of treachery, often ending violently. They were
                generally formed when the supposed ally was susceptible to
                blackmail, considered weak enough to not be a serious threat, or
                when cooperation was forced by the existence of a common enemy.
                In fact, the mere inconvenience of maintaining the bond could be
                a reason to end it.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-10"
              checked={expand === "DROW_ALIGNMENT"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DROW_ALIGNMENT" ? "DROW_ALIGNMENT" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Alignment</div>
            <div className="collapse-content">
              <p>
                For a race so chaotic in a society focused on individual
                advancement at the expense of others, the majority of drow
                strangely leant towards being neutral evil in alignment. The
                drow were, in many way, contradictory in outlook, cooperating to
                some degree almost in spite of their very nature. They
                simultaneously encouraged personal ambition and innovative
                problem solving (creativity being needed to get ahead of the
                older elites) while paradoxically placing the good of the many
                over the good of the individual and reinforcing staunch
                traditionalism.
              </p>
              <br />
              <p>
                To achieve their individual desires required their society to
                retain at least some level of stability, and they were held
                tightly to tradition even if that code wasn't actually codified
                into law. In fact, the drow responded poorly to social norms
                being turned into written rules, obeying them primarily out of
                fear and social pressure (but obeying them nonetheless). This
                lead to the phenomenon where a lone drow would drift towards
                chaos, whereas a drow community would be forced to work together
                against one another, setting up rules to stabilize the power
                each individual wanted for themselves and allowing for
                cooperation beyond what chaos could typically create.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-11"
              checked={expand === "GOOD_DROW"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "GOOD_DROW" ? "GOOD_DROW" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">Good Drow</div>
            <div className="collapse-content">
              <p>
                Unlike creatures such as orcs, drow had no innate inclination
                towards evil, with their morality having been colored by their
                society. "Good drow" made up about 15% of the entire race,
                although most of them weren't actually of the good alignment,
                being merely chaotic neutral or lawful neutral. Within Lolthite
                societies, even drow with a disposition towards what was
                considered good generally had problems developing a strong
                personal sense of morality. They generally behaved the same way
                as evil drow due to social pressure, as being soft in any way
                was lethal in drow society and often resulted in the death of
                such drow.
              </p>
              <br />
              <p>
                Only truly exceptional "good drow", such as Drizzt Do'Urden,
                were capable of freeing themselves from a Lolthite society. The
                majority were found out and sacrificed to Lolth, and those who
                managed to leave their settlements would often die in the
                dangerous wilderness of the Underdark. Furthermore, even those
                who escaped the cruelties of the Underdark found it more
                difficult to form long-term friendships than most races did and
                had to constantly be on the lookout for pursuers who could kill
                them.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-13"
              checked={expand === "COMBAT"}
              onChange={() =>
                setExpanded((prev) => (prev !== "COMBAT" ? "COMBAT" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Combat</div>
            <div className="collapse-content">
              <section>
                <h2 className="text-xl underline my-4">Drow Combat Tactics</h2>
                <p>
                  Drow were as frail as any other elves, and had a fascination
                  with stealth and subtlety. They had a tendency to ambush their
                  enemies with ranged weaponry, choosing hand crossbows when
                  possible, to deliver their poisons from afar. They also
                  favored light and quick weapons like rapiers in melee but
                  normally retreated if close combat was the only remaining
                  option.
                </p>
              </section>
              <section>
                <h2 className="text-xl underline my-4">
                  Stealth and Subterfuge
                </h2>
                <p>
                  Specific training was available for their rogues, which
                  included lessons on how to blend in with the heat hues and
                  patterns of their surroundings, similarly to how other races
                  could hide in the shadows of light sources. Their famous (or
                  infamous) assassin schools doubled as assassins' guilds. Male
                  drow were normally competent fighters, and rangers were also
                  valued as scouts.
                </p>
              </section>
              <section>
                <h2 className="text-xl underline my-4">Magic in Combat</h2>
                <p>
                  Apart from its obvious use as a light source, drow used their
                  ability to create dancing lights to surprise the enemy with
                  the sudden appearance of a glowing figure or will-o'-wisp-like
                  light balls. Teaming up with actual will-o'-wisps to make this
                  more effective was a known technique, however, this was viewed
                  as corrupted behavior.
                  <br />
                  Besides the obvious utility of cancelling light sources, the
                  drow ability to create darkness was an integral part of their
                  combat strategy, as it could be used to limit sight or
                  otherwise hamper their enemies. Since magical darkness looked
                  like black stone when looked at with darkvision, there were
                  many creative uses of the spell form a tactical standpoint.
                  For example, a drow could hide behind the "black stone" and
                  ambush their enemies from behind the cover, or use it to cover
                  up a pitfall.
                  <br />
                  Like dancing lights, faerie fire could be used as a diversion,
                  but the ability to change the colors of the lights allowed for
                  the creation of color signals for the purpose of long distance
                  communication.
                </p>
              </section>
              <section>
                <h2 className="text-xl underline my-4">Lolthtouched Combat</h2>
                <p>
                  Lolthtouched drow sometimes trained to slip into the cover of
                  their created darkness, or learnt to hit the targets of
                  darkfire not just more accurately, but also harder, similarly
                  to how drow wanderers did.
                </p>
              </section>
            </div>
          </div>
          <table className="table table-zebra my-4">
            <thead>
              <tr>
                <th>Trait</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ability Score Increase</td>
                <td>
                  Your Dexterity score increases by 2 and your Charisma score
                  increases by 1.
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  Although elves reach physical maturity at about the same age
                  as humans, the elven understanding of adulthood goes beyond
                  physical growth to encompass worldly experience. An elf
                  typically claims adulthood and an adult name around the age of
                  100 and can live to be 750 years old.
                </td>
              </tr>
              <tr>
                <td>Alignment</td>
                <td>
                  Elves love freedom, variety, and self-expression, so they lean
                  strongly toward the gentler aspects of chaos. They value and
                  protect others' freedom as well as their own, and they are
                  more often good than not. The drow are an exception; their
                  exile into the Underdark has made them vicious and dangerous.
                  Drow are more often evil than not.
                </td>
              </tr>
              <tr>
                <td>Size</td>
                <td>
                  Elves range from under 5 to over 6 feet tall and have slender
                  builds. Your size is Medium.
                </td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>Your base walking speed is 30 feet.</td>
              </tr>
              <tr>
                <td>Superior Darkvision</td>
                <td>
                  Accustomed to twilit forests and the night sky, you have
                  superior vision in dark and dim conditions. You can see in dim
                  light within 120 feet of you as if it were bright light, and
                  in darkness as if it were dim light. You can't discern color
                  in darkness, only shades of gray.
                </td>
              </tr>
              <tr>
                <td>Keen Senses</td>
                <td>You have proficiency in the Perception skill.</td>
              </tr>
              <tr>
                <td>Fey Ancestry</td>
                <td>
                  You have advantage on saving throws against being charmed, and
                  magic can't put you to sleep.
                </td>
              </tr>
              <tr>
                <td>Trance</td>
                <td>
                  Elves don't need to sleep. Instead, they meditate deeply,
                  remaining semiconscious, for 4 hours a day. (The Common word
                  for such meditation is "trance.") While meditating, you can
                  dream after a fashion; such dreams are actually mental
                  exercises that have become reflexive through years of
                  practice. After resting in this way, you gain the same benefit
                  that a human does from 8 hours of sleep.
                </td>
              </tr>
              <tr>
                <td>Sunlight Sensitivity</td>
                <td>
                  You have disadvantage on attack rolls and on Wisdom
                  (Perception) checks that rely on sight when you, the target of
                  your attack, or whatever you are trying to perceive is in
                  direct sunlight.
                </td>
              </tr>
              <tr>
                <td>Drow Magic</td>
                <td>
                  You know the dancing lights cantrip. When you reach 3rd level,
                  you can cast the faerie fire spell once with this trait and
                  regain the ability to do so when you finish a long rest. When
                  you reach 5th level, you can cast the darkness spell once with
                  this trait and regain the ability to do so when you finish a
                  long rest. Charisma is your spellcasting ability for these
                  spells.
                </td>
              </tr>
              <tr>
                <td>Drow Weapon Training</td>
                <td>
                  You have proficiency with rapiers, shortswords, and hand
                  crossbows.
                </td>
              </tr>
              <tr>
                <td>Languages</td>
                <td>
                  You can speak, read, and write Common and Elvish. Elvish is
                  fluid, with subtle intonations and intricate grammar. Elven
                  literature is rich and varied, and their songs and poems are
                  famous among other races. Many bards learn their language so
                  they can add Elvish ballads to their repertoires.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-row justify-center">
            <button className="btn btn-success btn-wide" onClick={raceDrow}>
              Select Drow
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
