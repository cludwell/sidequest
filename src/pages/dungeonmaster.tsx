import { useEffect, useRef, useState } from "react";
import IconCharacters from "./IconCharacters";
import IconMap from "./IconMap";
import IconSend from "./IconSend";
import d20 from "../../public/images/d20.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectedCharacterState } from "@/store/characters";
import { CharacterData } from "../../lib/characterData";
import d20green from "../../public/images/d20green.png";
import d20pastel from "../../public/images/d20pastel.png";
import ModalCharacterSheet from "./ModalCharacterSheet";
import { ScenariosState } from "../../lib/scenarioState";
import { selectedScenarioState } from "@/store/scenarios";

export default function DungeonMaster() {
  const char: CharacterData | null = useSelector(selectedCharacterState);
  const scene: ScenariosState | null = useSelector(selectedScenarioState);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content: `You are the dungeon master, providing assistance in a Dungeons and Dragons 5e game session. Please generate and guide user through a short adventure. Suggest to the user that they roll dice for relevant skill checks if applicable. If the user has selected a character it looks like: ${JSON.stringify(
        char
      )}.
      If the user has selected a pregenerated scenario, it is: ${JSON.stringify(
        scene
      )}`,
      timestamp: new Date().toString(),
    },
  ]);
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [rolls, setRolls] = useState<number[]>([]);
  const [rolling, setRolling] = useState<Boolean>(false);
  const resetDice = () => setRolls([]);
  const [error, setError] = useState("");
  const chatContainerRef = useRef(null);

  // console.log("SELECTED CHARACTER", char);
  useEffect(() => {
    if (chatContainerRef.current) {
      const element: any = chatContainerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [chatHistory]);

  const chatRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const newChatEntry = {
      role: "user",
      content: userText,
    };

    setChatHistory([
      ...chatHistory,
      {
        role: newChatEntry.role,
        content: newChatEntry.content,
        timestamp: new Date().toString(),
      },
    ]);

    const messagesToSend = chatHistory.map((chat) => ({
      role: chat.role,
      content: chat.content,
    }));
    messagesToSend.push(newChatEntry);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: messagesToSend }),
    });
    if (response.ok) {
      const responseData = await response.json();
      // console.log("RESPONSE DATA", responseData);

      let message = "Unknown error";
      if (responseData.error) {
        message = responseData.error.message;
      } else if (
        Array.isArray(responseData.choices) &&
        responseData.choices.length > 0
      ) {
        message = responseData.choices[0].message.content.trim();
      }
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          role: "assistant",
          content: message,
          timestamp: new Date().toString(),
        },
      ]);

      setUserText("");
    } else {
      const errorData = await response.json();
      setError(errorData.message || "An error occurred");
    }
    setLoading(false);
  };

  const onClickRoll = () => {
    setRolling(true);
    const diceResult: any = document.getElementById("diceResult");
    const randomNumber = Math.floor(Math.random() * 20) + 1;

    // Apply animation
    diceResult.textContent = "...";
    diceResult.style.opacity = 1;
    // diceResult.classList.add("rollAnimation");

    // After the animation, display the result
    setTimeout(() => {
      diceResult.textContent = randomNumber;
      // diceResult.classList.remove("rollAnimation");
      setRolling(false);
    }, 1000); // The timeout should match the animation duration in CSS.
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16 self-center fade-in-slide-in">
      {char && char.imgUrl && (
        <Image
          height={50}
          width={50}
          className=" hidden"
          src={char.imgUrl}
          alt="profile pic"
        />
      )}
      {chatHistory.length > 1 && (
        <div className="overflow-y-scroll h-96" ref={chatContainerRef}>
          {chatHistory.map((chat, index) =>
            chat.role === "assistant" ? (
              <div
                className="chat chat-start w-full"
                key={`chat${chat.timestamp}`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image width={50} height={50} src={d20} alt="logo" />
                    <IconMap />
                  </div>
                </div>
                <div className="chat-header">
                  Dungeon Master
                  <time className="text-xs opacity-50">
                    {chat.timestamp.slice(0, 21)}
                  </time>
                </div>
                <div className="chat-bubble w-full">{chat.content}</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
            ) : chat.role === "user" ? (
              <div
                className="chat chat-end w-full"
                key={`user${chat.timestamp}`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full ">
                    {char && char.imgUrl ? (
                      <Image
                        height={50}
                        width={50}
                        className=" object-cover"
                        src={char.imgUrl}
                        alt="profile pic"
                      />
                    ) : (
                      <IconCharacters />
                    )}
                  </div>
                </div>
                <div className="chat-header">
                  {char && char.name ? char.name : "Player"}
                  <time className="text-xs opacity-50">
                    {chat.timestamp.slice(0, 21)}
                  </time>
                </div>
                <div className="chat-bubble chat-bubble-primary">
                  {chat.content}
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
      {loading && (
        <div className="flex flex-col items-center w-full">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      )}
      <form
        className="w-full my-8 max-w-screen-xl flex flex-col"
        onSubmit={chatRequest}
      >
        <textarea
          placeholder="What will you do?"
          className="textarea textarea-primary textarea-lg w-full"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        ></textarea>
        <div className="flex flex-row justify-end">
          {char && <ModalCharacterSheet character={char} />}
          <button className="btn btn-accent my-4 w-fit" type="submit">
            <IconSend />
          </button>
        </div>

        <div
          className="relative cursor-pointer flex tooltip w-fit"
          onClick={onClickRoll}
          data-tip="Roll Dice"
        >
          <h3
            id="diceResult"
            className="absolute font-2xl federant top-6 left-[65px] font-bold z-10 "
          >
            20
          </h3>
          <Image
            height={150}
            width={150}
            className={`${rolling ? "rollAnimation" : ""}`}
            alt="die"
            src={d20pastel}
          />
        </div>
      </form>
    </main>
  );
}
