import { useState } from "react";
import { SetDescriptionProps } from "../../../lib/setDescriptionProps";
import FaithTable from "./TableFaiths";
import { deities } from "../../../lib/_DeitiesInfo";
import ToolTip from "../ToolTip";
export default function NewCharDescription({
  description,
  setDescription,
}: SetDescriptionProps) {
  const [appearance, setAppearance] = useState<string>("");
  // this useState will be used for error handling purposes before being sent to description
  const [descript, setDescript] = useState<string>("");
  const [alignment, setAlignment] = useState<string>("Lawful Good");
  const [level, setLevel] = useState<number>(1);
  const [faith, setFaith] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [imgUrl, setImgUrl] = useState<string>("https://imgur.com/2W9RzPc");
  const confirmDescription = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const err = [];
    if (descript.length < 100)
      err.push("Please provide description of 100 characters or more.");
    if (!alignment || alignment.length < 8)
      err.push("Please select an alignment.");
    if (!faith || faith.length < 8)
      err.push("Please select a faith to follow.");
    if (!name || name.length < 3)
      err.push("Please enter a name of 3 or more characters");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);
    setDescription({
      description: descript,
      alignment,
      faith,
      name,
      level,
      imgUrl: imgUrl,
    });
    window.location.href = "#item5";
    // console.log("DESCRIPTION", description);
  };
  return (
    <div className="flex flex-col max-w-screen-xl w-full">
      <h1 className="text-4xl almendra mb-4 text-center">Description</h1>

      <form className="flex flex-col items-center">
        <div>
          <label className="label text-xl almendra items-start">Name</label>
          <input
            type="text"
            placeholder="Formal, religious, or street name"
            className="input input-bordered input-primary w-80"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="label text-xl almendra">
            Level
            <ToolTip
              tip="All players start at level 1. Option to choose higher level coming soon."
              position="tooltip-left font-sans"
            />
          </label>
          <select
            className="select select-secondary w-80"
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value))}
          >
            <option value={1}>1</option>
          </select>
        </div>
        <div>
          <label className="label text-xl almendra">
            Alignment
            <ToolTip
              tip="D&D alignments serve as a general description of a creature's moral beliefs and attitudes. They're a set of basic rules which loosely determine how a character will interact with their environment, and with other people."
              position="tooltip-left font-sans"
            />
          </label>
          <select
            className="select select-success w-80"
            value={alignment}
            onChange={(e) => setAlignment(e.target.value)}
          >
            <option value={"Lawful Good"}>Lawful Good</option>
            <option value={"Lawful Neutral"}>Lawful Neutral</option>
            <option value={"Lawful Evil"}>Lawful Evil</option>
            <option value={"Neutral Good"}>Neutral Good</option>
            <option value={"True Neutral"}>True Neutral</option>
            <option value={"Neutral Good"}>Neutral Good</option>
            <option value={"Chaotic Good"}>Chaotic Good</option>
            <option value={"Chaotic Neutral"}>Chaotic Neutral</option>
            <option value={"Chaotic Evil"}>Chaotic Evil</option>
          </select>
        </div>
        <div>
          <label className="label text-xl almendra">Appearance (text)</label>
          <textarea
            placeholder="What a passerby notice?"
            className="textarea textarea-bordered textarea-accent w-80 h-40"
            value={appearance}
            onChange={(e) => setAppearance(e.target.value)}
          />
        </div>
        <div>
          <label className="label text-xl almendra">
            Portrait
            <ToolTip
              tip="AWS image uploads coming soon, please use a hosting site like imgur in the meantime"
              position="tooltip-left font-normal font-sans"
            />
          </label>
          <input
            type="text"
            defaultValue={"https://imgur.com/2W9RzPc"}
            className="input input-bordered input-info w-80"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl almendra">Your bio</span>
          </label>
          <textarea
            className="textarea textarea-bordered textarea-warning w-80 h-80"
            placeholder="Your characters motivations? Background? Upbringing?"
            value={descript}
            onChange={(e) => setDescript(e.target.value)}
          />
          {/* <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </label> */}
        </div>
        <div className="my-4">
          <label className="label text-xl almendra ">
            Faith{" "}
            <ToolTip
              tip="Choose a faith that matches your alignment in one capacity for best experience. See 'Faiths' drop down for more information about gods, their domains, and holy symbols."
              position="tooltip-left font-sans"
            />
          </label>
          <select
            className="select select-error w-full max-w-xs"
            value={faith}
            onChange={(e) => setFaith(e.target.value)}
          >
            <option selected hidden>
              Select Deity
            </option>
            {deities.length &&
              deities.map((god, i) => (
                <option value={`${god[0]}, ${god[1]}`} key={`god${i}`}>
                  {god[0]}, {god[1]}
                </option>
              ))}
          </select>
        </div>

        <FaithTable deities={deities as Deity[]} />
        <div className="flex flex-col md:flex-row max-w-screen-xl w-full justify-center">
          <button
            className="btn btn-primary m-4"
            onClick={confirmDescription}
          >
            Confirm Description
          </button>
          <button
            className="btn  btn-secondary m-4"
            onClick={() => (window.location.hash = "#item5")}
          >
            Next Step
          </button>
        </div>
      </form>
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
