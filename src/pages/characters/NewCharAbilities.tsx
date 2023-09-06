import { useState } from "react";
import { SetAbilitiesProps } from "../../../lib/setAbilitiesProps";

export default function NewCharAbilities({
  abilities,
  setAbilities,
}: SetAbilitiesProps) {
  const [str, setStr] = useState<number>(0);
  const [dex, setDex] = useState<number>(0);
  const [con, setCon] = useState<number>(0);
  const [int, setInt] = useState<number>(0);
  const [wis, setWis] = useState<number>(0);
  const [cha, setCha] = useState<number>(0);

  const standardArray = [8, 10, 12, 13, 14, 15];
  const assignedArray = [str, dex, con, int, wis, cha];
  const selected = [];
  const attributes = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  const colors = [
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
  ];
  const randomArray = () => {
    const payload: number[] = [];
    standardArray.forEach((e) => payload.push(Math.floor(Math.random() * 20)));
    return console.log(payload);
  };
  const addToAssigned = async (e: React.ChangeEvent<HTMLSelectElement>) =>
  selected.push(e.target.value);
  return (
    <>
      <h1 className="text-4xl almendra">Ability Scores</h1>

      <div className=" flex flex-row flex-wrap">
        <div id="str-select" className="m-4 w-28">
          <h3 className="font-bold text-lg">Strength</h3>
          <select className="select select-primary w-full max-w-xs" value={str} onChange={addToAssigned}>
            <option disabled selected>
              --
            </option>
            {standardArray.map((ele, i) =>
              assignedArray.includes(ele) ? (
                <></>
              ) : (
                <option key={`optstr${i}`}>{ele}</option>
              )
            )}
          </select>
        </div>
        <div id="dex-select" className="m-4 w-28 ">
          <h3 className="font-bold text-lg">Dexterity</h3>
          <select className="select select-accent w-full max-w-xs" value={dex}>
            <option disabled selected>
              --
            </option>
            {standardArray.map((ele, i) =>
              assignedArray.includes(ele) ? (
                <></>
              ) : (
                <option key={`optdex${i}`}>{ele}</option>
              )
            )}
          </select>
        </div>
        <div id="con-select" className="m-4 w-28">
          <h3 className="font-bold text-lg">Constitution</h3>
          <select className="select select-info w-full max-w-xs" value={con}>
            <option disabled selected>
              --
            </option>

          </select>
        </div>
        <div id="int-select" className="m-4 w-28">
          <h3 className="font-bold text-lg">Intelligence</h3>
          <select className="select select-success w-full max-w-xs" value={int}>
            <option disabled selected>
              --
            </option>

          </select>
        </div>
        <div id="wis-select" className="m-4 w-28">
          <h3 className="font-bold text-lg">Wisdom</h3>
          <select className="select select-success w-full max-w-xs" value={wis}>
            <option disabled selected>
              --
            </option>

          </select>
        </div>
        <div id="cha-select" className="m-4 w-28">
          <h3 className="font-bold text-lg">Charisma</h3>
          <select className="select select-warning w-full max-w-xs" value={cha}>
            <option disabled selected>
              --
            </option>

          </select>
        </div>
      </div>
      <div className="flex flex-row">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8"
          onClick={randomArray}
        >
          Choose Random Race
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary m-8">
          Next Step
        </button>
      </div>
    </>
  );
}
