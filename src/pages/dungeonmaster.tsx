import { useState } from "react";
import IconCharacters from "./IconCharacters";
import IconMap from "./IconMap";
import IconSend from "./IconSend";

export default function DungeonMaster() {
  const [userText, setUserText] = useState("");
  const [rolls, setRolls] = useState<number[]>([]);
  const chatRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserText("");
  };
  const resetDice = () => setRolls([]);


  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16   self-center">
      <div className="chat chat-start w-full">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <IconMap />
            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">
            {new Date().toString().slice(0, 21)}
          </time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end w-full">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <IconCharacters />
            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">
            {new Date().toString().slice(0, 21)}
          </time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
      </div>

      <form
        className="w-full my-8 max-w-screen-xl flex flex-col"
        onSubmit={chatRequest}
      >
        <textarea
          placeholder="Bio"
          className="textarea textarea-primary textarea-lg w-full"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        ></textarea>
        <button className="btn btn-primary my-4 w-fit ml-auto" type="submit">
          <IconSend />
        </button>
      </form>
    </main>
  );
}
