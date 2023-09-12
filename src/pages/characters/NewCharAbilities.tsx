import { useState } from "react";
import { SetAbilitiesProps } from "../../../lib/setAbilitiesProps";

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
  const modifiers = {
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

  const customArray = Object.entries(custom)//.map((arr, i) =>
    //arr.slice(1).reduce((acc, next) => (acc += next), 0)
 //);
 const rollKeys = ["str", "dex", "con", "int", "wis", "cha"];
 const customRoll: Record<string, number[]> = {};
 let customAssigned = Object.values(customRoll).map(ele=>ele.join(''))


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
  const makeSelection = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filtered = customAssigned.filter(ele=> String(ele) === e.target.value)
    customAssigned = filtered
    return e
  }
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
    });
    setErrors(err);
    console.log('custom assigned', customAssigned);
  };
  return (
    <>
      <div className="divider"></div>
      <h1 className="text-4xl almendra my-12">Ability Scores</h1>

      <h3 className="font-bold text-xl">
        Distribution{" "}
        <div
          className="tooltip"
          data-tip="Standard Distribution is a commonly accepted array of values for character abilities allowing a fair and challenging game. Or you can roll dice for a custom distribution of points. For custom each stat is 3d6 with advantage (an extra die is rolled, and lowest number discounted)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
      </h3>
      <select
        className="select select-primary w-full max-w-xs"
        value={array}
        onChange={(e) => setArray(e.target.value)}
      >
        <option value={`Standard`}>Standard</option>
        <option value={`Roll Custom`}>Roll Custom</option>
      </select>
      {array === "Roll Custom" && (
        <div className="flex flex-col justify-center">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary  m-8"
            onClick={rollDice}
          >
            Roll Random Array
          </button>
          <div className="overflow-x-auto">
            <table className="table">
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
      <div className="flex flex-row flex-wrap">
        <div id="str-select" className="m-4 w-30">
          <h3 className="font-bold text-md flex flex-row">
            Strength{" "}
            <div
              className="tooltip"
              data-tip="Strength measures a characters ability to exert physical force. A character with high Strength can lift heavier objects, carry more gear without being overloaded, break things with brute strength, shove and grapple creatures more effectively, and is more accurate and more effective with melee weapons."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
          </h3>
          <select
            className="select select-primary w-full max-w-xs"
            value={str}
            onChange={(e) => customArray.length ? setStr(makeSelection(e.target.value)) :   setStr(e.target.value)}
          >
            <option disabled selected>
              --
            </option>
            {customArray.length
              ? customArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele[1].slice(1).reduce((acc, next) => (acc += next), 0)}
                    hidden={customAssigned.includes(ele.join())}
                  >
                    {ele[1].slice(1).reduce((acc, next) => (acc += next), 0)}
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
            <div
              className="tooltip"
              data-tip="Dexterity measures a character's nimbleness, their agility, and their fine motor skills. A character with high Dexterity is able to avoid attacks in combat, evade area effects like dragon's breath and explosions, move stealthily, perform feats of acrobatics, pick locks, and use both light, nimble melee weapons like daggers and rapiers and ranged weapons like bows and crossbows more effectively."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
          </h3>
          <select
            className="select select-accent w-full max-w-xs"
            value={dex}
            onChange={(e) =>  setDex(e.target.value)}
          >
            <option disabled selected>
              --
            </option>
            {customArray.length
              ? customArray.map((ele, i) => (
                  <option
                    key={`optstr${i}`}
                    value={ele[1].slice(1).reduce((acc, next) => (acc += next), 0)}
                    hidden={customAssigned.includes(ele.join())}
                  >
                    {ele[1].slice(1).reduce((acc, next) => (acc += next), 0)}
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
            <div
              className="tooltip"
              data-tip="Constitution describes a character's physical fortitude; their ability to endure pain, to take damage without falling unconscious, to resist the effects of poison, disease, and other physical maladies, to hold your breath, to travel long distances without rest, and to go without sleep for extended periods."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
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
                    hidden={assignedArray.includes(String(ele))}
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
            <div
              className="tooltip"
              data-tip="Intelligence measures a character's analytical ability, their memory, and their ability to reason logically. A character with high Intelligence knows many facts and pieces of trivia, can estimate the value of items, can communicate nonverbally, and they are often good at puzzles, games of skill, researching, investigation, forgery, and investigation.

"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
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
                    hidden={assignedArray.includes(String(ele))}
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
            <div
              className="tooltip"
              data-tip="Wisdom measures a character's practical intelligence, their cleverness, their perceptiveness, and how in tune they are with the world around them. Characters with high Wisdom are perceptive, observant, and sensible. They are able to handle animals, notice subtle details about creature's motives and about the world around them, and to make decisions when the right choice isn't clear."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
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
                    hidden={assignedArray.includes(String(ele))}
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
            <div
              className="tooltip"
              data-tip="Charisma measures a character's charm and eloquence, their force of personality, their self-confidence, and their ability to interact with other creatures. Characters with high Charisma are charming, well-liked, and are often natural leaders. These characters are able to make friends, talk their way out of trouble, negotiate, and otherwise get by on talk."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
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
                    hidden={assignedArray.includes(String(ele))}
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
      <div className="flex flex-row">
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
    </>
  );
}
