import { useState } from "react";
import { SetDescriptionProps } from "../../../lib/setDescriptionProps";
import FaithTable from "./FaithCollapse";
import { deities } from "./DeitiesInfo";
export default function NewCharDescription({
  description,
  setDescription,
}: SetDescriptionProps) {
  const [appearance, setAppearance] = useState<string>("");
  // this useState will be used for error handling purposes before being sent to description
  const [descript, setDescript] = useState<string>("");
  const [alignment, setAlignment] = useState<string>("Neutral Good");
  const [faith, setFaith] = useState<string>("");
  const [name, setName] = useState<string>('')
  return (
    <>
      <h1 className="text-4xl almendra my-12">Description</h1>

      <form>
        <label className="label text-xl almendra">Alignment</label>
        <select
          className="select select-accent w-full max-w-xs"
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
        <label className="label text-xl almendra">Name</label>
        <input
          type="text"
          placeholder="Formal, religious, or street name"
          className="input input-bordered input-accent w-full max-w-xs"
          value={name}
          onChange={(e) => setAppearance(e.target.value)}
        />
        <label className="label text-xl almendra">Appearance</label>
        <input
          type="text"
          placeholder=""
          className="input input-bordered input-accent w-full max-w-xs"
          value={appearance}
          onChange={(e) => setAppearance(e.target.value)}
        />
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl almendra">Your bio</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 textarea-secondary w-96 h-36"
            placeholder="Your characters motivations? Background? Upbringing?"
            value={descript}
            onChange={(e) => setDescript(e.target.value)}
          ></textarea>
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </label>
        </div>
      </form>
      <FaithTable deities={deities as Deity[]} />
    </>
  );
}
