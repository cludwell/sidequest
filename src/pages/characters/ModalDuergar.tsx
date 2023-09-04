import Image from "next/image";
import { useEffect, useState } from "react";
import Duergar from "../../../public/images/duergar.png";
import duergarDetail from "../../../public/images/duergar2.jpg";
import { SetRaceProps } from "../../../lib/setRaceProps";
declare global {
  interface Window {
    my_modal_22: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalDuergar({race, setRace}: SetRaceProps) {
  const [expand, setExpanded] = useState<String | null>(null);
  useEffect(() => {
    const myModal22 = document.getElementById("my_modal_22");
    if (myModal22) window.my_modal_22 = myModal22;
  }, []);
  const raceDuergar = async () => setRace("Duergar");

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_22.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={Duergar}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Duergar
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
      <dialog id="my_modal_22" className="modal">
        <form method="dialog" className="modal-box">
        <h3 className="font-bold text-5xl mb-4 almendra text-center">Duergar</h3>
          <Image
            src={duergarDetail}
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
                Like other dwarves, duergar were typically thick, stocky
                figures, though beyond this there were many differences. Both
                male and female duergar were typically bald, with females also
                lacking the capacity to grow facial hair. Many were also thinner
                than their dwarven brethren. Most obvious, however, was their
                dull gray skin and hair, often matched with an equally stolid
                expression. Regular dwarves said they had flat heads, possibly
                as an insult.
              </p>
              <br />
              <p>
                Because many duergar found on the surface world were criminal
                exiles, a surface dweller who encountered one of the gray
                dwarves was likely to notice facial and arm tattoos that marked
                the duergar as a traitor to his or her people.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "PERSONALITY"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PERSONALITY" ? "PERSONALITY" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Personality{" "}
            </div>
            <div className="collapse-content">
              <p>
                Tyrannical, grim, industrious and pessimistic, the lives of the
                gray dwarves were bleak and brutal. Rather than a flaw, however,
                they viewed their lack of happiness as their greatest strength,
                the defining feature of duergar pride. The duergar saw
                themselves as the true paragons of dwarvish ideals compared to
                their weak and pampered kin, but in truth, their ways were a
                dark reflection of those found in normal dwarves.
              </p>
              <br />
              <p>
                While they did display the redeeming virtues of determination
                and bravery, duergar took dwarven flaws to their logical
                extremes. They were violent and hateful, sullen and insular,
                greedy and ungrateful, deeply cynical of others' motives and
                dutifully tracked and nursed every grudge, whether or not any
                offense was meant. Though their vices were many, the moral
                failings of the gray dwarves could be traced to three primary
                principles: bottomless greed, unceasing conflict, and rejection
                of emotion.
              </p>
              <br />
              <p>
                Most dwarves were accustomed to the inevitability of struggle to
                be found in existence, but such knowledge was colored by their
                essential love of industry. Dwarves enjoyed their work, from the
                art of crafting to the trials of their everyday lives, seeing
                opportunity for success where others saw labor. In contrast,
                duergar industriousness was spurred on simply by the primal urge
                to build and create, driven by a need to own and acquire as much
                as possible. The duergar were dauntless perfectionists who never
                left a job half done and worked hard to excel in their field,
                and yet the dwarven ideal of achieving mastery of a craft meant
                nothing to them.
              </p>
              <br />
              <p>
                Duergar creations weren't flawed or subpar, and in fact were
                rather enduring, but were completely utilitarian, considered
                valuable only for their function and bereft of warmth and
                artistry. Appreciation of beauty had been erased from their
                minds, the aesthetics of their creation ignored. Their works
                were not labors of love, for their goal was not quality, but
                quantity, an attempt to craft as many items as possible as fast
                as possible. At the heart of duergar efforts was simply desire,
                an insatiable desire for wealth and prestige. Yet even when
                their great schemes to acquire succeeded, the success was never
                cause for celebration, each acquisition just as incapable of
                satisfying their unending need for more.
              </p>
              <br />
              <p>
                The higher a duergar rose and the more items they possessed, the
                stronger they would need to be to hold on to what they already
                had. They were not above stealing to get their beloved gold, and
                by making war on others they demonstrated one of their
                principles: might makes right. The weak were unfit to possess
                what was meant for the strong and those too weak to defend their
                holdings or themselves were considered by most to be unworthy of
                pity. Most placed little value on the lives and possessions of
                others, or at least their rights to these things. The helpless,
                weak, and less fortunate than themselves earned little mercy,
                yet all-consuming envy was harbored for anyone relatively better
                off.
              </p>
              <br />
              <p>
                The suffering of others was one of the rare times that the
                duergar could feel some semblance of happiness. They enjoyed
                tormenting those vulnerable to their predations, but this was
                not to be mistaken for the wasteful and extravagant displays of
                cruelty shown by the drow. Rather, the duergar enjoyed more
                "down-to-earth" suffering, working others to the death and using
                cruel jokes and petty abuse to bring a momentary smile to their
                faces. The closest they came to feeling true joy was when
                satisfying their violent urges and desire for treasure,
                especially when raiding dwarven strongholds to do it.
              </p>
              <br />
              <p>
                To show weakness was a mortal sin to the duergar, whether on an
                individual or societal level. To their minds, weakness included
                such emotions as happiness or kindness, and they had no
                tolerance for those that failed to show the proper levels of
                ambition and cruelty. While regular dwarves showed a lack of
                trust to outsiders, they had strong family bonds, their
                dedication to furthering their clans and leaving behind a proper
                legacy showing in every aspect of their activities. The duergar
                inverted this value, for while they were bound by their rigid
                society, they did so because they had to, and indeed had no love
                of their kin.
              </p>
              <br />
              <p>
                The gray dwarves were consumed by feelings of bitterness,
                convinced not only that their race had been denied their due,
                but that the world, other dwarves, and even their own kin and
                clan had cheated them of their birthright. They were forbidden
                from trusting others and raised from a young age to believe that
                betrayal was simply their inevitable fate, a self-fulfilling
                prophecy. Though the duergar were assigned life partners, this
                was merely to ensure the continued survival of the clan, for
                life in the Underdark required cooperation. The creation of a
                legacy was not considered because they had abandoned
                individuality, each member of society expected to perform their
                determined role as best they could.
              </p>
              <br />
              <p>
                In the eyes of the duergar, life was nothing but harsh endless,
                toil, working from the cradle to the grave in ceaseless labor
                and drudgery. They were taught that this was their lot in life
                early, and so expected nothing else. In many ways, their lives
                were fundamentally empty, a hollow, unfulfilling version of the
                dwarven way of life. Despite their many accumulated treasures,
                their successful military operations, and all their pride in the
                purging of their weakness, the duergar felt no happiness or
                satisfaction. Indeed, they had no memory of what it meant to be
                happy, or even what it meant to be truly proud. They simply
                continued to toil and grumble about their lives, existing as
                cogs in a machine to forge products they cared not for, a life
                antithetical to joy and purpose found in the dwarven cycles of
                creation.
              </p>
              <br />
              <p>
                On the positive side of duergar behavior, they shared the
                dwarven virtue of minding one's own business (at least as long
                as others didn't have something they wanted). Though most were
                evil, a fair number leant towards hardhearted neutrality,
                wanting nothing more than to be left alone, and a rare few
                managed to become good.
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
            <div className="collapse-title text-xl font-medium">Abilities </div>
            <div className="collapse-content">
              <p>
                Duergar were in some ways even better adapted to underground
                living than other dwarves. While other dwarves lacked the
                capacity to see completely in the deepest darkness, this was not
                a problem for duergar. Duergar were also immune to many of the
                ancient techniques used by the mind flayers to control them,
                such as paralysis, phantasms, alchemical poisons, or some types
                of illusion.
              </p>
              <br />
              <p>
                Duergar were also a sneaky, crafty people, unlike their
                honor-bound cousins, and often excelled at setting up ambushes
                or moving out of sight. Conversely, many were also good at
                detecting hidden objects. A few duergar also possessed natural
                abilities akin to the enlarge and invisibility spells. This came
                at a cost, however, and duergar, like drow, had a special
                vulnerability to sunlight.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "COMBAT"}
              onChange={() =>
                setExpanded((prev) => (prev !== "COMBAT" ? "COMBAT" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">Combat </div>
            <div className="collapse-content">
              <p>
                Duergar adventurers were most commonly concerned with personal
                gratification, and were frequently fighters or rogues, leaning
                on their training against the threats of the Underdark. Because
                of their cruel nature, experienced duergar adventurers often
                became assassins or blackguards.[11]
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
            <div className="collapse-title text-xl font-medium">Society </div>
            <div className="collapse-content">
              <p>
                Duergar were, as a whole, generally cruel and malevolent
                creatures, but as in most evil races this was as much a cultural
                affectation as a psychological trait.
              </p>
              <br />
              <p>
                Duergar would often ferment fire lichen into their alcoholic
                beverages, to create a hot and spicy drink.
              </p>
              <h1 className="text-xl underline my-4">Language</h1>
              <p>
                Duergar primarily spoke Duergan, a dialect of Dwarven descended
                from the dialect of the shield dwarves and heavily influenced by
                mind flayer and drow words found in Undercommon. Duergar
                themselves were commonly fluent in Undercommon, the lingua
                franca of the Underdark. Other common second languages for
                duergar were those of their enemies, such as Draconic, Drow,
                Giant, Goblin, or Orc. Others might learn Terran in order to
                conduct trade with earth elementals, while others learned Common
                to trade with the surface world.
              </p>
              <h1 className=" text-xl underline my-4">Art</h1>
              <p>
                As worshipers of Laduguer, the duergar had a long tradition of
                crafting that went back to their days as the rulers of Barakuir.
                Like other dwarves, duergar were fine craftsmen with an eye for
                detail, though they were often pragmatic enough to eschew the
                ostentatious decorations of their kin, which they felt were not
                only wasteful, but which could potentially give away their
                presence when treading the Underdark. Additionally, duergar art,
                unlike that of their brethren, was notable for its veneration of
                blood and cruelty, with scenes of warfare marking much of their
                art.
              </p>
              <br />
              <p>
                Most of all, duergar were concerned with practicality, peddling
                military saddles, thunderstones, poisons, and an extraordinarily
                effective form of armor lubricant. Like Gold and Shield Dwarves,
                duergar preferred weapons that could serve as tools on the fly,
                such as hammers or picks.
              </p>

              <h1 className=" text-xl underline my-4">Animals</h1>
              <p>
                For pets and familiars, duergar often enjoyed the company of
                Underdark creatures, such as bats, spiders, osquips, or spitting
                crawlers. For beasts of burden, duergar used large lizards or
                steeders.
              </p>
              <h1 className=" text-xl underline my-4">Magic</h1>
              <p>
                Unlike other dwarves, duergar had a strong tradition of magic,
                both in the divine and arcane varieties, and duergar clerics,
                runecasters, runesmiths, and wizards were highly respected for
                their skill. Clerics were fairly common, serving the duergar
                gods in order to gain power and influence within society.
              </p>
              <br />
              <p>
                In particular, the duergar had a fondness for magically crafted
                items that they could use to aid them in combat, protect their
                minds against tampering, or to hide from enemy senses. Duergar
                crafted many magic items unique to them, such as absorbing
                shields, bolts of battering, and stonereaver axes.
              </p>
              <h1 className=" text-xl underline my-4">Religion</h1>
              <p>
                The chief god of the duergar was Laduguer, the dwarven god of
                crafting, a tradition going back to the days of Clan Duergar,
                when the god served as the clan's divine patron. Early on, the
                veneration of Laduguer led to disputes with many of the other
                kingdoms of Shanatar, who chose to venerate Dumathoin as the
                patron of the entire shield dwarven race. When Clan Duergar was
                enslaved by the mind flayers, the duergar carried on their
                worship in captivity,[11] although some secretly formed pacts
                with the devils of the Nine Hells as well.
              </p>
              <br />
              <p>
                Although the duergar formally venerated all the Morndinsamman,
                the duergar in their captivity became only more devout in their
                exclusive worship of Laduguer and, later on, his adopted
                daughter Deep Duerra. Duerra, initially a duergar herself, was
                beloved among the duergar for having stolen the Invisible Art
                from the mind flayers during her campaign against them. They
                didn't receive the Thunder Blessing like other dwarves and saw
                it as yet another sign of the Morndinsamman having abandoned
                them. Still, a few duergar turned away from the worship of the
                wicked gods who ruled over the duergar such as Laduguer and Deep
                Duerra and found salvation through the Morndinsamman.
              </p>
              <br />
              <p>
                During the Spellplague, during which Laduguer and Duerra had
                perished, the duergar, in their desperation, turned to Asmodeus.
              </p>

              <h1 className=" text-xl underline my-4">Relations</h1>
              <p>
                Duergar were a coarse and distrustful race who felt that other
                races were out to get them, whether they were from the Underdark
                or the surface world. In spite of this, duergar were usually
                willing to trade with outside races, particularly from the
                surface world, for the sake of profit and the relations between
                duergar and their sometime-enemies, sometime-friends the drow
                and deep gnomes were especially complicated.
              </p>
              <br />
              <p>
                However, the duergar had absolutely no love in their heart for
                their closest of kin, the shield dwarves, who the duergar felt
                abandoned them to the onslaught of the mind flayers. Since then,
                the duergar had waged war time and time again against the shield
                dwarves, demonstrating a deep-seated loathing.
              </p>
              <br />
              <p>
                Because of their pessimism, duergar rarely adventured of their
                own free will and were instead most commonly exiles cast out of
                their society. Some found escape from their society through
                petty crime, tattooed and cast out from their cities beneath the
                surface and driven into the arms of other races. Their grim
                disposition, however, made them unlikely to form many lasting
                friendships.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-2"
              checked={expand === "HISTORY"}
              onChange={() =>
                setExpanded((prev) => (prev !== "HISTORY" ? "HISTORY" : null))
              }
            />
            <div className="collapse-title text-xl font-medium">History </div>
            <div className="collapse-content">
              <p>
                Initially, the duergar were a clan of shield dwarves in the
                dwarven kingdom of Barakuir, located within the ancient realm of
                Shanatar. Clan Duergar, which venerated Laduguer as their
                patron, was an ambitious and powerful clan, believing that they
                should lead the kingdoms of Shanatar themselves. When they were
                denied following the Second Spider War, Clan Duergar turned away
                from the other dwarven clans, paying only lip service to
                Shanatar's rulers. This proved a mistake when the mind flayers
                of Oryndoll, seeing the isolation of Barakuir, attacked the
                realm in -8100 DR, enslaving or killing most of the
                population.[11]
              </p>
              <br />
              <p>
                During their captivity, which lasted for generations, the mind
                flayers performed many cruel and unusual experiments on the
                dwarves. It was during this harsh period of their history that
                the duergar emerged as a distinct subrace. Eventually, they rose
                up against their captors and gained their freedom from the mind
                flayers.
              </p>
              <br />
              <p>
                Now free, the duergar carved out a new home for themselves
                beneath the Great Glacier, founding the city of Gracklstugh in
                -3717 DR. The Deepkingdom spread rapidly through the northern
                reaches of the Underdark, reaching its peak in -2600 DR before a
                war with the quaggoths of Ursandunthar caused it to enter a
                gradual decline, battling the remnants of the nation and urged
                on by drow for centuries thereafter.
              </p>
              <br />
              <p>
                Further to the south, beneath central Faerûn, the duergar
                established Dunspeirrin underneath the Orsraun Mountains, which
                grew to encompass the caverns beneath Turmish and the Dragon
                Coast. Dunspeirrin reached its height of power in -1800 DR, when
                Queen Duerra defeated an alliance of drow from Undreath and the
                mind flayers of Oryndoll, reclaiming Deep Shanatar and Alatorin.
                As her divine reward, Duerra was raised to godhood by Laduguer.
                Afterward, however, the duergar of Dunspeirrin fell into a
                decline, returning to power following the Time of Troubles, only
                to fall into a long and arduous war with the Army of Gold.
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
                  <td>Constitution +2; Strength +1</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Age</td>
                  <td>Duergar live up to 350 years.</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Alignment</td>
                  <td>
                    Most dwarves are lawful, believing firmly in the benefits of
                    a well-ordered society. They tend toward good as well, with
                    a strong sense of fair play and a belief that everyone
                    deserves to share in the benefits of a just order.
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Size</td>
                  <td>
                    Dwarves stand between 4 and 5 feet tall and average about
                    150 pounds. Your size is Medium.
                  </td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>Speed</td>
                  <td>
                    Your base walking speed is 30 feet. Your speed is not
                    reduced by wearing heavy armor.
                  </td>
                </tr>
                {/* row 6 */}
                <tr>
                  <td>Duergar Magic</td>
                  <td>
                    When you reach 3rd level, you can cast the Enlarge/Reduce
                    spell on yourself once with this trait, using only the
                    spell's enlarge option. When you reach 5th level, you can
                    cast the Invisibility spell on yourself once with this
                    trait. You don't need material components for either spell,
                    and you can't cast them while you're in direct sunlight,
                    although sunlight has no effect on them once cast. You
                    regain the ability to cast these spells with this trait when
                    you finish a long rest. Intelligence is your spellcasting
                    ability for these spells.
                  </td>
                </tr>

                {/* row 8 */}
                <tr>
                  <td>Superior Darkvision</td>
                  <td>
                    Accustomed to life underground, you have superior vision in
                    dark and dim conditions. You can see in dim light within 120
                    feet of you as if it were bright light, and in darkness as
                    if it were dim light. You can't discern color in darkness,
                    only shades of gray.
                  </td>
                </tr>

                {/* row 9 */}
                <tr>
                  <td>Sunlight Sensitivity </td>
                  <td>
                    You have disadvantage on attack rolls and Wisdom
                    (Perception) checks that rely on sight when you, the target
                    of your attack, or whatever you are trying to perceive is in
                    direct sunlight.
                  </td>
                </tr>

                {/* row 10 */}
                <tr>
                  <td>Duergar Resilience</td>
                  <td>
                    You have advantage on saving throws against poison, and you
                    have resistance against poison damage.
                  </td>
                </tr>
                {/* row 11 */}
                <tr>
                  <td>Dwarven Combat Training</td>
                  <td>
                    You have proficiency with the battleaxe, handaxe, light
                    hammer, and warhammer.
                  </td>
                </tr>
                {/* row 12 */}
                <tr>
                  <td>Tool Proficiency</td>
                  <td>
                    You gain proficiency with the artisan's tools of your
                    choice: Smith's tools, brewer's supplies, or mason's tools.
                  </td>
                </tr>
                {/* row 13 */}
                <tr>
                  <td>Stonecunning</td>
                  <td>
                    Whenever you make an Intelligence (History) check related to
                    the origin of stonework, you are considered proficient in
                    the History skill and add double your proficiency bonus to
                    the check, instead of your normal proficiency bonus.
                  </td>
                </tr>
                {/* row 14 */}
                <tr>
                  <td>Psionic Fortitude</td>
                  <td>
                    You have advantage on saving throws you make to avoid or end
                    the charmed or stunned condition on yourself.
                  </td>
                </tr>
                {/* row 15 */}
                <tr>
                  <td>Languages</td>
                  <td>
                    You can speak, read, and write Common, Dwarvish, and
                    Undercommon.{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* table end */}
          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide"
              onClick={raceDuergar}
            >
              Select Duergar
            </button>
          </div>        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
