import { useState } from "react";
import { SetAbilitiesProps } from "../../../lib/setAbilitiesProps";
import ToolTip from "../ToolTip";

export default function NewCharAbilities({
  abilities,
  setAbilities,
}: SetAbilitiesProps) {
  const [array, setArray] = useState<string>("Standard");
  const [str, setStr] = useState<string>("--");
  const [dex, setDex] = useState<string>("--");
  const [con, setCon] = useState<string>("--");
  const [int, setInt] = useState<string>("--");
  const [wis, setWis] = useState<string>("--");
  const [cha, setCha] = useState<string>("--");
  const modifiers: Modifiers = {
    "1": -5,
    "2": -4,
    "3": -4,
    "4": -3,
    "5": -3,
    "6": -2,
    "7": -2,
    "8": -1,
    "9": -1,
    "10": 0,
    "11": 0,
    "12": 1,
    "13": 1,
    "14": 2,
    "15": 2,
    "16": 3,
    "17": 3,
    "18": 4,
    "19": 4,
    "20": 5,
  };

  // const [acrobatics, setAcrobatics] = useState<number>(0);
  // const [animalHandling, setAnimalHandling] = useState<number>(0);
  // const [arcana, setArcana] = useState<number>(0);
  // const [athletics, setAthletics] = useState<number>(0);
  // const [deception, setDeception] = useState<number>(0);
  // const [history, setHistory] = useState<number>(0);
  // const [insight, setInsight] = useState<number>(0);
  // const [intimidation, setIntimidation] = useState<number>(0);
  // const [investigation, setInvestigation] = useState<number>(0);
  // const [medicine, setMedicine] = useState<number>(0);
  // const [nature, setNature] = useState<number>(0);
  // const [perception, setPerception] = useState<number>(0);
  // const [performance, setPerformance] = useState<number>(0);
  // const [persuasion, setPersuasion] = useState<number>(0);
  // const [religion, setReligion] = useState<number>(0);
  // const [sleightOfHand, setSleightOfHand] = useState<number>(0);
  // const [stealth, setStealth] = useState<number>(0);
  // const [survival, setSurvival] = useState<number>(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [custom, setCustom] = useState<Record<string, number[]>>({});
  const standardArray: string[] = ["8", "10", "12", "13", "14", "15", "--"];
  const assignedArray = [str, dex, con, int, wis, cha, "--"];

  const customArray = Object.values(custom).map((arr, i) =>
    arr.slice(1).reduce((acc, next) => (acc += next), 0)
  );
  const rollKeys = ["str", "dex", "con", "int", "wis", "cha"];
  const customRoll: Record<string, number[]> = {};
  //  let customAssigned = Object.values(custom).map(ele=>ele[1].slice(1).reduce((acc, next) => (acc += next), 0))

  const rollDice = () => {
    setStr("--");
    setDex("--");
    setCon("--");
    setInt("--");
    setWis("--");
    setCha("--");
    rollKeys.forEach((stat) => {
      customRoll[stat] = [1, 2, 3, 4]
        .map((num) => Math.floor(Math.random() * 6 + 1))
        .sort();
    });
    setCustom(customRoll);
    setErrors([]);
    console.log(custom);
    return custom;
  };
  // const makeSelection = async (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const filtered = customAssigned.filter(ele=> String(ele) === e.target.value)
  //   customAssigned = filtered
  //   return e
  // }
  const confirmAssignment = async () => {
    const err: string[] = [];
    if (str == "--") err.push("Str must have a value");
    if (dex == "--") err.push("Dex must have a value");
    if (con == "--") err.push("Con must have a value");
    if (int == "--") err.push("Int must have a value");
    if (wis == "--") err.push("Wis must have a value");
    if (cha == "--") err.push("Cha must have a value");
    setAbilities({
      str: parseInt(str),
      dex: parseInt(dex),
      con: parseInt(con),
      int: parseInt(int),
      wis: parseInt(wis),
      cha: parseInt(cha),
      acrobatics: modifiers[dex],
      animalHandling: modifiers[wis],
      arcana: modifiers[int],
      athletics: modifiers[str],
      deception: modifiers[cha],
      history: modifiers[int],
      insight: modifiers[wis],
      intimidation: modifiers[cha],
      investigation: modifiers[int],
      medicine: modifiers[wis],
      nature: modifiers[int],
      perception: modifiers[wis],
      performance: modifiers[cha],
      persuasion: modifiers[cha],
      religion: modifiers[int],
      sleightOfHand: modifiers[dex],
      stealth: modifiers[dex],
      survival: modifiers[wis],
    });
    setErrors(err);
    console.log("custom assigned", customArray);
    // console.log('custom', custom);
  };
  return (
    <div className="flex flex-col max-w-screen-xl w-full content-center">
      {/* <div className="divider"></div> */}
      <h1 className="text-4xl almendra mb-8 text-center">Ability Scores</h1>

      <div className="flex flex-col items-center">
        <label className="text-2xl  almendra w-80">
          Distribution{" "}
          <ToolTip
            tip="Standard Distribution is a commonly accepted array of values for character abilities allowing a fair and challenging game. Or you can roll dice for a custom distribution of points. For custom each stat is 3d6 with advantage (an extra die is rolled, and lowest number discounted)"
            position="tooltip-bottom font-sans"
          />
        </label>

        <select
          className="select select-primary w-full max-w-xs"
          value={array}
          onChange={(e) => setArray(e.target.value)}
        >
          <option value={`Standard`}>Standard</option>
          <option value={`Roll Custom`}>Roll Custom</option>
        </select>
      </div>
      {array === "Roll Custom" && (
        <div className="flex flex-col items-center">
          <div>
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8"
              onClick={rollDice}
            >
              Roll Random Array
            </button>
          </div>
          {/* max width changed spread of columns */}
          <div className="overflow-x-auto max-w-md">
            <table className="table table-zebra bg-base-100">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Dice</th>
                  <th>Sum</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {!!Object.values(custom).length &&
                  Object.values(custom).map((e, i) => (
                    <>
                      <tr>
                        <th>{i + 1}</th>
                        <td key={`row${i}`} className="flex flex-row">
                          <kbd className="kbd mx-1  bg-slate-300">{e[0]}</kbd>
                          <kbd className="kbd mx-1 ">{e[1]}</kbd>
                          <kbd className="kbd mx-1 ">{e[2]}</kbd>
                          <kbd className="kbd mx-1">{e[3]}</kbd>
                        </td>
                        <td>
                          {e.slice(1).reduce((acc, next) => (acc += next), 0)}
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="flex flex-row flex-wrap justify-center">
        <div id="str-select" className="m-4 w-30">
          <h3 className="font-bold text-md flex flex-row">
            Strength{" "}
            <ToolTip
              tip="Strength measures a characters ability to exert physical force. A character with high Strength can lift heavier objects, carry more gear without being overloaded, break things with brute strength, shove and grapple creatures more effectively, and is more accurate and more effective with melee weapons."
              position="tooltip-right"
            />
          </h3>
          <select
            className="select select-primary w-full max-w-xs"
            value={str}
            onChange={(e) => setStr(e.target.value)}
          >
            <option disabled selected>
              --
            </option>
            {customArray.length
              ? customArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    // hidden={assignedArray.includes(String(ele))}
                  >
                    {ele}
                  </option>
                ))
              : standardArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    hidden={assignedArray.includes(ele)}
                  >
                    {ele}
                  </option>
                ))}
          </select>
        </div>
        <div id="dex-select" className="m-4 w-30">
          <h3 className="font-bold text-md flex flex-row">
            Dexterity{" "}
            <ToolTip
              tip="Dexterity measures a character's nimbleness, their agility, and their fine motor skills. A character with high Dexterity is able to avoid attacks in combat, evade area effects like dragon's breath and explosions, move stealthily, perform feats of acrobatics, pick locks, and use both light, nimble melee weapons like daggers and rapiers and ranged weapons like bows and crossbows more effectively."
              position=""
            />
          </h3>
          <select
            className="select select-accent w-full max-w-xs"
            value={dex}
            onChange={(e) => setDex(e.target.value)}
          >
            <option disabled selected>
              --
            </option>
            {customArray.length
              ? customArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    // hidden={assignedArray.includes(String(ele))}
                  >
                    {ele}
                  </option>
                ))
              : standardArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    hidden={assignedArray.includes(ele)}
                  >
                    {ele}
                  </option>
                ))}
          </select>
        </div>
        <div id="con-select" className="m-4 w-30">
          <h3 className="font-bold text-md flex flex-row">
            Constitution
            <ToolTip
              tip="Constitution describes a character's physical fortitude; their ability to endure pain, to take damage without falling unconscious, to resist the effects of poison, disease, and other physical maladies, to hold your breath, to travel long distances without rest, and to go without sleep for extended periods."
              position=""
            />
          </h3>
          <select
            className="select select-info w-full max-w-xs"
            value={con}
            onChange={(e) => setCon(e.target.value)}
          >
            <option disabled selected>
              --
            </option>
            {customArray.length
              ? customArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    // hidden={assignedArray.includes(String(ele))}
                  >
                    {ele}
                  </option>
                ))
              : standardArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    hidden={assignedArray.includes(ele)}
                  >
                    {ele}
                  </option>
                ))}
          </select>
        </div>
        <div id="int-select" className="m-4 w-30">
          <h3 className="font-bold text-md flex flex-row">
            Intelligence{" "}
            <ToolTip
              tip="Intelligence measures a character's analytical ability, their memory, and their ability to reason logically. A character with high Intelligence knows many facts and pieces of trivia, can estimate the value of items, can communicate nonverbally, and they are often good at puzzles, games of skill, researching, investigation, forgery, and investigation."
              position=""
            />
          </h3>
          <select
            className="select select-success w-full max-w-xs"
            value={int}
            onChange={(e) => setInt(e.target.value)}
          >
            <option disabled selected>
              --
            </option>
            {customArray.length
              ? customArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    // hidden={assignedArray.includes(String(ele))}
                  >
                    {ele}
                  </option>
                ))
              : standardArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    hidden={assignedArray.includes(ele)}
                  >
                    {ele}
                  </option>
                ))}
          </select>
        </div>
        <div id="wis-select" className="m-4 w-30">
          <h3 className="font-bold text-md flex flex-row">
            Wisdom
            <ToolTip
              tip="Wisdom measures a character's practical intelligence, their cleverness, their perceptiveness, and how in tune they are with the world around them. Characters with high Wisdom are perceptive, observant, and sensible. They are able to handle animals, notice subtle details about creature's motives and about the world around them, and to make decisions when the right choice isn't clear."
              position=""
            />
          </h3>
          <select
            className="select select-success w-full max-w-xs"
            value={wis}
            onChange={(e) => setWis(e.target.value)}
          >
            <option disabled selected>
              --
            </option>
            {customArray.length
              ? customArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    // hidden={assignedArray.includes(String(ele))}
                  >
                    {ele}
                  </option>
                ))
              : standardArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    hidden={assignedArray.includes(ele)}
                  >
                    {ele}
                  </option>
                ))}
          </select>
        </div>
        <div id="cha-select" className="m-4 w-30">
          <h3 className="font-bold text-md flex flex-row">
            Charisma
            <ToolTip
              tip="Charisma measures a character's charm and eloquence, their force of personality, their self-confidence, and their ability to interact with other creatures. Characters with high Charisma are charming, well-liked, and are often natural leaders. These characters are able to make friends, talk their way out of trouble, negotiate, and otherwise get by on talk."
              position="tooltip-left"
            />
          </h3>
          <select
            className="select select-warning w-full max-w-xs"
            value={cha}
            onChange={(e) => setCha(e.target.value)}
          >
            <option disabled selected>
              --
            </option>
            {customArray.length
              ? customArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    // hidden={assignedArray.includes(String(ele))}
                  >
                    {ele}
                  </option>
                ))
              : standardArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele}
                    hidden={assignedArray.includes(ele)}
                  >
                    {ele}
                  </option>
                ))}
          </select>
        </div>
      </div>
      {str !== "--" &&
        dex !== "--" &&
        con !== "--" &&
        int !== "--" &&
        wis !== "--" &&
        cha !== "--" && (
          <div className="flex flex-col items-center">
            <div className=" max-w-md">
              <h2 className="text-3xl almendra">
                Skills
                <ToolTip
                  tip="In Dungeons and Dragons you can do almost anything, however your success will depend on you skills"
                  position="font-sans"
                />
              </h2>
              <table className="table table-zebra bg-base-100">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Skill </th>
                    <th>Modifier</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Strength </th>
                    <td>
                      Athletics{" "}
                      <ToolTip
                        tip="Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming. Examples include the following activities: You attempt to climb a sheer or slippery cliff, avoid hazards while scaling a wall, or cling to a surface while something is trying to knock you off. You try to jump an unusually long distance or pull off a stunt midjump. You struggle to swim or stay afloat in treacherous currents, storm-tossed waves, or areas of thick seaweed. Or another creature tries to push or pull you underwater or otherwise interfere with your swimming."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[str] > 0
                          ? "+" + modifiers[str]
                          : modifiers[str]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th>Dexterity</th>
                    <td>
                      Acrobatics{" "}
                      <ToolTip
                        tip="Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[dex] > 0
                          ? "+" + modifiers[dex]
                          : modifiers[dex]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Sleight of Hand{" "}
                      <ToolTip
                        tip="Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The GM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person's pocket."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[dex] > 0
                          ? "+" + modifiers[dex]
                          : modifiers[dex]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Stealth{" "}
                      <ToolTip
                        tip="Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[dex] > 0
                          ? "+" + modifiers[dex]
                          : modifiers[dex]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th>Intelligence</th>
                    <td>
                      Arcana{" "}
                      <ToolTip
                        tip="Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[int] > 0
                          ? "+" + modifiers[int]
                          : modifiers[int]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      History{" "}
                      <ToolTip
                        tip="Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[int] > 0
                          ? "+" + modifiers[int]
                          : modifiers[int]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Investigation{" "}
                      <ToolTip
                        tip="When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[int] > 0
                          ? "+" + modifiers[int]
                          : modifiers[int]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Nature{" "}
                      <ToolTip
                        tip="Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[int] > 0
                          ? "+" + modifiers[int]
                          : modifiers[int]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Religion{" "}
                      <ToolTip
                        tip="Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[int] > 0
                          ? "+" + modifiers[int]
                          : modifiers[int]}
                      </kbd>
                    </td>
                  </tr>

                  <tr>
                    <th>Wisdom</th>
                    <td>
                      Animal Handling{" "}
                      <ToolTip
                        tip="When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal's intentions, the GM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[wis] > 0
                          ? "+" + modifiers[wis]
                          : modifiers[wis]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Insight{" "}
                      <ToolTip
                        tip="Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[wis] > 0
                          ? "+" + modifiers[wis]
                          : modifiers[wis]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Medicine{" "}
                      <ToolTip
                        tip="A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[wis] > 0
                          ? "+" + modifiers[wis]
                          : modifiers[wis]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Perception{" "}
                      <ToolTip
                        tip="Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. "
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[wis] > 0
                          ? "+" + modifiers[wis]
                          : modifiers[wis]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Survival{" "}
                      <ToolTip
                        tip="The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[wis] > 0
                          ? "+" + modifiers[wis]
                          : modifiers[wis]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th>Charisma</th>
                    <td>
                      Deception{" "}
                      <ToolTip
                        tip="Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[cha] > 0
                          ? "+" + modifiers[cha]
                          : modifiers[cha]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Intimidation{" "}
                      <ToolTip
                        tip="When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[cha] > 0
                          ? "+" + modifiers[cha]
                          : modifiers[cha]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Performance{" "}
                      <ToolTip tip="Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment." position=""/>
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[cha] > 0
                          ? "+" + modifiers[cha]
                          : modifiers[cha]}
                      </kbd>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Persuasion{" "}
                      <ToolTip
                        tip="When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk."
                        position=""
                      />
                    </td>
                    <td>
                      <kbd className="kbd mx-1 ">
                        {modifiers[cha] > 0
                          ? "+" + modifiers[cha]
                          : modifiers[cha]}
                      </kbd>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      <div className="flex flex-row max-w-screen-xl w-full justify-center">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8"
          onClick={confirmAssignment}
        >
          Confirm
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary m-8">
          Next Step
        </button>
      </div>
      <div className="toast toast-end">
        {!!errors.length &&
          errors.map((e, i) => (
            <div className="alert alert-error" key={`error${i}`}>
              <span>{e}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
