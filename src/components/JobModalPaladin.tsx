import Image from "next/image";
import { SetClassProps } from "../../lib/setClassProps";
import { useEffect, useState } from "react";
import icon from "../../public/icons/paladinicon.png";
import paladin from "../../public/images/dee-holmberg-bg-paladin.jpg";
import JobAbilityInfo from "./JobAbilityInfo";
import IconDoubleChevron from "./icons/IconDoubleChevron";
declare global {
  interface Window {
    my_modal_paladin: any; // Replace `any` with the type of your modal if possible
  }
}
export default function Paladin({ dndClass, setDndClass }: SetClassProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModalPaladin = document.getElementById("my_modal_paladin");
    if (myModalPaladin) window.my_modal_paladin = myModalPaladin;
  }, []);
  const becomePaladin = async () => {
    setDndClass({ role: "Paladin", specialty: [], spells: [], languages: [] });
    window.my_modal_paladin.close();
    window.location.href = "#item3";
  };
  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_paladin.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={icon}
            className="object-contain rounded-md m-2 max-h-14"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Paladin
        </span>
<IconDoubleChevron />
      </button>
      <dialog id="my_modal_paladin" className="modal">
        <form method="dialog" className="modal-box">
          {/* <h3 className="font-bold text-5xl mb-4 almendra text-center">
            Barbarian
          </h3> */}
          <Image
            src={paladin}
            alt="detail image"
            width={800}
            height={800}
            className="rounded-xl aspect-square object-cover"
          />
          <p className="text-lg my-4 mx-16 italic">
            A holy warrior bound to a sacred oath
          </p>
          <div className="overflow-x-auto m-1">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Stat</th>
                  <th>Feature</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Hit Die</td>
                  <td>d10</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Primary Ability</td>
                  <td>Strength & Charisma</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Saves</td>
                  <td>Wisdom & Charisma</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-divine-sense"
              checked={expand === "DIVINE_SENSE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DIVINE_SENSE" ? "DIVINE_SENSE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Divine Sense
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                The presence of strong evil registers on your senses like a
                noxious odor, and powerful good rings like heavenly music in
                your ears. As an action, you can open your awareness to detect
                such forces. Until the end of your next turn, you know the
                location of any celestial, fiend, or undead within 60 feet of
                you that is not behind total cover. You know the type
                (celestial, fiend, or undead) of any being whose presence you
                sense, but not its identity (the vampire Count Strahd von
                Zarovich, for instance). Within the same radius, you also detect
                the presence of any place or object that has been consecrated or
                desecrated, as with the hallow spell.
              </p>
              <br />
              <p>
                You can use this feature a number of times equal to 1 + your
                Charisma modifier. When you finish a long rest, you regain all
                expended uses.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-lay-on-hands"
              checked={expand === "LAY_ON_HANDS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "LAY_ON_HANDS" ? "LAY_ON_HANDS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Lay on Hands
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Your blessed touch can heal wounds. You have a pool of healing
                power that replenishes when you take a long rest. With that
                pool, you can restore a total number of hit points equal to your
                paladin level x 5.
              </p>
              <br />
              <p>
                As an action, you can touch a creature and draw power from the
                pool to restore a number of hit points to that creature, up to
                the maximum amount remaining in your pool.
              </p>
              <br />
              <p>
                Alternatively, you can expend 5 hit points from your pool of
                healing to cure the target of one disease or neutralize one
                poison affecting it. You can cure multiple diseases and
                neutralize multiple poisons with a single use of Lay on Hands,
                expending hit points separately for each one.
              </p>
              <br />
              <p>This feature has no effect on undead and constructs.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-fighting-style"
              checked={expand === "FIGHTING_STYLE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "FIGHTING_STYLE" ? "FIGHTING_STYLE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Fighting Style
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                At 2nd level, you adopt a style of fighting as your specialty.
                Choose one of the following options. You can't take a Fighting
                Style option more than once, even if you later get to choose
                again.
              </p>
              <br />
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full bg-base-100">
                  <thead>
                    <tr>
                      <th>Fighting Style</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">Blessed Warrior</td>
                      <td>
                        You learn two cantrips of your choice from the cleric
                        spell list. They count as paladin spells for you, and
                        Charisma is your spellcasting ability for them. Whenever
                        you gain a level in this class, you can replace one of
                        these cantrips with another cantrip from the cleric
                        spell list.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Blind Fighting</td>
                      <td>
                        You have blindsight with a range of 10 feet. Within that
                        range, you can effectively see anything that isn't
                        behind total cover, even if you're blinded or in
                        darkness. Moreover, you can see an invisible creature
                        within that range, unless the creature successfully
                        hides from you.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Defense</td>
                      <td>
                        While you are wearing armor, you gain a +1 bonus to AC.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Dueling</td>
                      <td>
                        When you are wielding a melee weapon in one hand and no
                        other weapons, you gain a +2 bonus to damage rolls with
                        that weapon.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Great Weapon Fighting</td>
                      <td>
                        When you roll a 1 or 2 on a damage die for an attack you
                        make with a melee weapon that you are wielding with two
                        hands, you can reroll the die and must use the new roll,
                        even if the new roll is a 1 or a 2. The weapon must have
                        the two-handed or versatile property for you to gain
                        this benefit.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Interception</td>
                      <td>
                        When a creature you can see hits a target, other than
                        you, within 5 feet of you with an attack, you can use
                        your reaction to reduce the damage the target takes by
                        1d10 + your proficiency bonus (to a minimum of 0
                        damage). You must be wielding a shield or a simple or
                        martial weapon to use this reaction.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Protection</td>
                      <td>
                        When a creature you can see attacks a target other than
                        you that is within 5 feet of you, you can use your
                        reaction to impose disadvantage on the attack roll. You
                        must be wielding a shield.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Close Quarters Shooter (UA)</td>
                      <td>
                        When making a ranged attack while you are within 5 feet
                        of a hostile creature, you do not have disadvantage on
                        the attack roll. Your ranged attacks ignore half cover
                        and three-quarters cover against targets within 30 feet
                        of you. You have a +1 bonus to attack rolls on ranged
                        attacks.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Mariner (UA)</td>
                      <td>
                        As long as you are not wearing heavy armor or using a
                        shield, you have a swimming speed and a climbing speed
                        equal to your normal speed, and you gain a +1 bonus to
                        armor class.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Thrown Weapon Fighting (UA)</td>
                      <td>
                        You can draw a weapon that has the thrown property as
                        part of the attack you make with the weapon. In
                        addition, when you hit with a ranged attack using a
                        thrown weapon, you gain a +1 bonus to the damage roll.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Tunnel Fighter (UA)</td>
                      <td>
                        As a bonus action, you can enter a defensive stance that
                        lasts until the start of your next turn. While in your
                        defensive stance, you can make opportunity attacks
                        without using your reaction, and you can use your
                        reaction to make a melee attack against a creature that
                        moves more than 5 feet while within your reach.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Unarmed Fighting (UA)</td>
                      <td>
                        Your unarmed strikes can deal bludgeoning damage equal
                        to 1d6 + your Strength modifier. If you strike with two
                        free hands, the d6 becomes a d8. When you successfully
                        start a grapple, you can deal 1d4 bludgeoning damage to
                        the grappled creature. Until the grapple ends, you can
                        also deal this damage to the creature whenever you hit
                        it with a melee attack.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-spellcasting"
              checked={expand === "SPELLCASTING"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SPELLCASTING" ? "SPELLCASTING" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Spellcasting
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <h3 className="text-xl my-4 underline">Spellcasting</h3>
              <p>
                By 2nd level, you have learned to draw on divine magic through
                meditation and prayer to cast spells as a cleric does. See
                Spells Rules for the general rules of spellcasting and the
                Spells Listing for the paladin spell list.
              </p>
              <br />

              <h3 className="text-xl my-4 underline">
                Preparing and Casting Spells
              </h3>
              <p>
                The Paladin table shows how many spell slots you have to cast
                your paladin spells. To cast one of your paladin spells of 1st
                level or higher, you must expend a slot of the spell's level or
                higher. You regain all expended spell slots when you finish a
                long rest. You prepare the list of paladin spells that are
                available for you to cast, choosing from the paladin spell list.
                The spells must be of a level for which you have spell slots.
              </p>
              <p>
                For example, if you are a 5th-level paladin, you have four
                1st-level and two 2nd-level spell slots. If you prepare the
                1st-level spell cure wounds, you can cast it using a 1st-level
                or a 2nd-level slot. Casting the spell doesn't remove it from
                your list of prepared spells. You can change your list of
                prepared spells when you finish a long rest. Preparing a new
                list of paladin spells requires time spent in prayer and
                meditation: at least 1 minute per spell level for each spell on
                your list.
              </p>
              <br />

              <h3 className="text-xl my-4 underline">Spellcasting Ability</h3>
              <p>
                Charisma is your spellcasting ability for your paladin spells,
                since their power derives from the strength of your convictions.
                You use your Charisma whenever a spell refers to your
                spellcasting ability. In addition, you use your Charisma
                modifier when setting the saving throw DC for a paladin spell
                you cast and when making an attack roll with one.
              </p>
              <br />
              <p>
                Spell save DC = 8 + your proficiency bonus + your Charisma
                modifier Spell attack modifier = your proficiency bonus + your
                Charisma modifier
              </p>
              <br />

              <h3 className="text-xl my-4 underline">Spellcasting Focus</h3>
              <p>
                You can use a holy symbol (see the Adventuring Gear section) as
                a spellcasting focus for your paladin spells.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-divine-smite"
              checked={expand === "DIVINE_SMITE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DIVINE_SMITE" ? "DIVINE_SMITE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Divine Smite
              <span className="block text-gray-500 text-sm mt-1">
                2nd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 2nd level, when you hit a creature with a melee
                weapon attack, you can expend one spell slot to deal radiant
                damage to the target, in addition to the weapon's damage. The
                extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for
                each spell level higher than 1st, to a maximum of 5d8. The
                damage increases by 1d8 if the target is an undead or a fiend,
                to a maximum of 6d8.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-divine-health"
              checked={expand === "DIVINE_HEALTH"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "DIVINE_HEALTH" ? "DIVINE_HEALTH" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Divine Health
              <span className="block text-gray-500 text-sm mt-1">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                By 3rd level, the divine magic flowing through you makes you
                immune to disease.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-sacred-oath"
              checked={expand === "SACRED_OATH"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "SACRED_OATH" ? "SACRED_OATH" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Sacred Oath
              <span className="block text-gray-500 text-sm mt-1">
                3rd Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                When you reach 3rd level, you swear the oath that binds you as a
                paladin forever. Up to this time you have been in a preparatory
                stage, committed to the path but not yet sworn to it. Now you
                choose the Oath of Devotion detailed at the end of the class
                description or one from another source.
              </p>
              <br />
              <p>
                Your choice grants you features at 3rd level and again at 7th,
                15th, and 20th level. Those features include oath spells and the
                Channel Divinity feature.
              </p>
              <br />
              <h3 className="text-xl my-4 underline">Oath Spells</h3>
              <p>
                Each oath has a list of associated spells. You gain access to
                these spells at the levels specified in the oath description.
                Once you gain access to an oath spell, you always have it
                prepared. Oath spells don't count against the number of spells
                you can prepare each day.
              </p>
              <br />
              <p>
                If you gain an oath spell that doesn't appear on the paladin
                spell list, the spell is nonetheless a paladin spell for you.
              </p>
              <br />
              <h3 className="text-xl my-4 underline">Channel Divinity</h3>
              <p>
                Your oath allows you to channel divine energy to fuel magical
                effects. Each Channel Divinity option provided by your oath
                explains how to use it.
              </p>
              <br />
              <p>
                When you use your Channel Divinity, you choose which option to
                use. You must then finish a short or long rest to use your
                Channel Divinity again.
              </p>
              <br />
              <p>
                Some Channel Divinity effects require saving throws. When you
                use such an effect from this class, the DC equals your paladin
                spell save DC.
              </p>
            </div>
          </div>

          <JobAbilityInfo expand={expand} setExpanded={setExpanded} />

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-extra-attack"
              checked={expand === "EXTRA_ATTACK"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "EXTRA_ATTACK" ? "EXTRA_ATTACK" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Extra Attack
              <span className="block text-gray-500 text-sm mt-1">
                5th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 5th level, you can attack twice, instead of once,
                whenever you take the Attack action on your turn.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-aura-protection"
              checked={expand === "AURA_PROTECTION"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "AURA_PROTECTION" ? "AURA_PROTECTION" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Aura of Protection
              <span className="block text-gray-500 text-sm mt-1">
                6th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 6th level, whenever you or a friendly creature
                within 10 feet of you must make a saving throw, the creature
                gains a bonus to the saving throw equal to your Charisma
                modifier (with a minimum bonus of +1). You must be conscious to
                grant this bonus.
              </p>
              <p>At 18th level, the range of this aura increases to 30 feet.</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-aura-courage"
              checked={expand === "AURA_COURAGE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "AURA_COURAGE" ? "AURA_COURAGE" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Aura of Courage
              <span className="block text-gray-500 text-sm mt-1">
                10th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Starting at 10th level, you and friendly creatures within 10
                feet of you can’t be frightened while you are conscious.
              </p>
              <p>At 18th level, the range of this aura increases to 30 feet.</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-improved-divine-smite"
              checked={expand === "IMPROVED_DIVINE_SMITE"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "IMPROVED_DIVINE_SMITE"
                    ? "IMPROVED_DIVINE_SMITE"
                    : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Improved Divine Smite
              <span className="block text-gray-500 text-sm mt-1">
                11th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                By 11th level, you are so suffused with righteous might that all
                your melee weapon strikes carry divine power with them. Whenever
                you hit a creature with a melee weapon, the creature takes an
                extra 1d8 radiant damage.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-cleansing-touch"
              checked={expand === "CLEANSING_TOUCH"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "CLEANSING_TOUCH" ? "CLEANSING_TOUCH" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Cleansing Touch
              <span className="block text-gray-500 text-sm mt-1">
                14th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>
                Beginning at 14th level, you can use your action to end one
                spell on yourself or on one willing creature that you touch.
              </p>
              <br />
              <p>
                You can use this feature a number of times equal to your
                Charisma modifier (a minimum of once). You regain expended uses
                when you finish a long rest.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-aura-improvements"
              checked={expand === "AURA_IMPROVEMENTS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "AURA_IMPROVEMENTS" ? "AURA_IMPROVEMENTS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Aura Improvements
              <span className="block text-gray-500 text-sm mt-1">
                18th Level
              </span>
            </div>
            <div className="collapse-content">
              <p>At 18th level, the range of your auras increase to 30 feet.</p>
            </div>
          </div>

          {/* Proficiencies Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-proficiencies"
              checked={expand === "PROFICIENCIES"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "PROFICIENCIES" ? "PROFICIENCIES" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Proficiencies
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <table className="table table-zebra w-full bg-base-100">
                <tbody>
                  <tr>
                    <td className="font-bold">Armor</td>
                    <td>All armor, shields</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Weapons</td>
                    <td>Simple weapons, martial weapons</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Tools</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Saving Throws</td>
                    <td>Wisdom, Charisma</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Skills</td>
                    <td>
                      Choose two from Athletics, Insight, Intimidation,
                      Medicine, Persuasion, and Religion
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hit Points Collapsible */}
          <div className="collapse collapse-plus bg-base-200 my-1">
            <input
              type="checkbox"
              name="my-accordion-hit-points"
              checked={expand === "HIT_POINTS"}
              onChange={() =>
                setExpanded((prev) =>
                  prev !== "HIT_POINTS" ? "HIT_POINTS" : null
                )
              }
            />
            <div className="collapse-title text-xl font-medium">
              Hit Points
              <span className="block text-gray-500 text-sm mt-1">
                1st Level
              </span>
            </div>
            <div className="collapse-content">
              <table className="table table-zebra w-full bg-base-100">
                <tbody>
                  <tr>
                    <td className="font-bold">Hit Dice</td>
                    <td>1d10 per paladin level</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at 1st Level</td>
                    <td>10 + your Constitution modifier</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Hit Points at Higher Levels</td>
                    <td>
                      1d10 (or 6) + your Constitution modifier per paladin level
                      after 1st
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide my-8"
              onClick={becomePaladin}
            >
              Paladin
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
