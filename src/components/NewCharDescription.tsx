import { useState } from "react";
import { SetDescriptionProps } from "../../lib/setDescriptionProps";
import FaithTable from "./TableFaiths";
import { deities } from "../../lib/_DeitiesInfo";
import ToolTip from "./ToolTip";
import Image from "next/image";
import Loading from "./Loading";
export default function NewCharDescription({
  description,
  setDescription,
  race,
  dndClass,
}: SetDescriptionProps) {
  const [appearance, setAppearance] = useState<string>("");
  // this useState will be used for error handling purposes before being sent to description
  const [descript, setDescript] = useState<string>("");
  const [alignment, setAlignment] = useState<string>("Lawful Good");
  const [level, setLevel] = useState<number>(1);
  const [faith, setFaith] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [imgUrl, setImgUrl] = useState<string>(
    "https://i.imgur.com/2W9RzPc.jpg"
  );
  const [imgSource, setImgSource] = useState<string>("Generate");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [chatHistory, setChatHistory] = useState<Object[]>([]);
  const [error, setError] = useState<Boolean>();
  const settingDescriptionStates = () => {
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
  };
  const confirmDescription = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    settingDescriptionStates();
    window.location.href = "#item5";
    // console.log("DESCRIPTION", description);
  };

  const chatGPTImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // have to create new api route that uses dalle 2
    // amend this function so that it receives shape of json response from dalle
    e.preventDefault();
    setIsLoading(true);
    settingDescriptionStates();
    const characterDraft = {
      ...race,
      ...dndClass,
      ...description,
    };
    setChatHistory([
      ...chatHistory,
      {
        role: "system",
        content: `Please generate an image for a Dungeon and Dragons character in the style approximating that of the Dungeon and Dragons player hand books. I understand that you don't have access to copyrighted material. Remember that the character is level 1. The character has the following characteristics: ${JSON.stringify(
          description
        )}`,
      },
    ]);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: chatHistory }),
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.error) {
        setError(responseData.error.message);
      } else {
        console.log(responseData);
        // Assuming the response includes the image URL directly or the data needed to construct it
        const imageUrl = responseData.data[0].url;
        // Adjust this line based on the actual structure of your response
        setImgUrl(imageUrl); // Update the state with the new image URL
      }
    } else {
      const errorData = await response.json();
      setError(errorData.message || "An error occurred");
    }
    setIsLoading(false);
  };
  const alignments: Array<string> = [
    "Lawful Good",
    "Lawful Neutral",
    "Lawful Evil",
    "Neutral Good",
    "True Neutral",
    "Neutral Evil",
    "Chaotic Good",
    "Chaotic Neutral",
    "Chaotic Evil",
  ];
  return (
    <div className="flex flex-col w-full max-w-screen-xl">
      <h1 className="mb-4 text-4xl text-center almendra">Description</h1>

      <form className="flex flex-col items-center">
        <div>
          <label className="items-start text-xl label almendra">Name</label>
          <input
            type="text"
            placeholder="Formal, religious, or street name"
            className="input input-bordered input-primary w-80"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xl label almendra">
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
          <label className="text-xl label almendra">
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
            {alignments.map((alignment, i) => (
              <option value={alignment} key={alignment}>
                {alignment}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xl label almendra">Appearance (text)</label>
          <textarea
            placeholder="What a passerby notice?"
            className="h-40 textarea textarea-bordered textarea-accent w-80"
            value={appearance}
            onChange={(e) => setAppearance(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="text-xl label-text almendra">Your bio</span>
          </label>
          <textarea
            className="textarea textarea-bordered textarea-warning w-80 h-80"
            placeholder="Your characters motivations? Background? Upbringing?"
            value={descript}
            onChange={(e) => setDescript(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl label almendra ">
            Faith{" "}
            <ToolTip
              tip="Choose a faith that matches your alignment in one capacity for best experience. See 'Faiths' drop down for more information about gods, their domains, and holy symbols."
              position="tooltip-left font-sans"
            />
          </label>
          <select
            className="w-full max-w-xs select select-error"
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
        <div className="my-4 w-80">
          <label className="text-xl label almendra">
            Portrait
            <ToolTip
              tip="AWS image uploads coming soon, please use a hosting site like imgur in the meantime"
              position="tooltip-left font-normal font-sans"
            />
          </label>

          <select
            className="w-full max-w-xs my-4 select select-error"
            value={imgSource}
            onChange={(e) => setImgSource(e.target.value)}
          >
            <option selected value={"Generate"}>
              Generate
            </option>
            <option value={"Use URL"}>Use URL</option>
          </select>
          {/* {imgSource == "Generate" ? (
            <button className="w-full btn btn-accent" onClick={chatGPTImage}>
              Generate Portrait
            </button>
          ) : (
            )} */}
            <input
              type="text"
              defaultValue={"https://imgur.com/2W9RzPc.jpg"}
              className="input input-bordered input-info w-80"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          {imgUrl && !isLoading ? (
            <Image
              height={800}
              width={800}
              src={imgUrl}
              alt="character preview"
              className="object-cover my-4 rounded-2xl aspect-square"
            />
          ) : (
            <Loading />
          )}
        </div>
        <FaithTable deities={deities as Deity[]} />
        <div className="flex flex-col justify-center w-full max-w-screen-xl md:flex-row">
          <button className="m-4 btn btn-primary" onClick={confirmDescription}>
            Confirm Description
          </button>
          <button
            className="m-4 btn btn-secondary"
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
