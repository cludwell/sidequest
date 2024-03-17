import React, { useEffect, useRef, useState } from "react";
import IconCharacters from "../components/icons/IconCharacters";
import IconMap from "../components/icons/IconMap";
import IconSend from "../components/icons/IconSend";
import d20Icon from "../../public/images/d20.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectedCharacterState } from "@/store/characters";
import ModalCharacterSheet from "../components/ModalCharacterSheet";
import { selectedScenarioState } from "@/store/scenarios";
import { Characters, Scenarios } from "@prisma/client";

export default function DungeonMaster() {
  const char: Characters | null = useSelector(selectedCharacterState);
  const scene: Scenarios | null = useSelector(selectedScenarioState);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content: `You are the dungeon master, providing assistance in a Dungeons and Dragons 5e game session. Please generate and guide user through a short adventure. Suggest to the user that they roll dice for relevant skill checks if applicable. If the user has selected a character it looks like: ${JSON.stringify(
        char
      )}.
      If the user has selected a pregenerated scenario, it is: ${JSON.stringify(
        scene
      )}. If the user needs to roll dice other than d20, please prompt them in this format "roll: 3d6 " `,
      timestamp: new Date().toString(),
    },
  ]);
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [rolls, setRolls] = useState<number[]>([]);
  const [d20, setD20] = useState<number>(0);
  const [rollingA, setRollingA] = useState<Boolean>(false);
  const [rollingB, setRollingB] = useState<Boolean>(false);
  const [error, setError] = useState("");
  const chatContainerRef = useRef(null);

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
      content: `${userText}`,
      // timestamp: new Date().toString(),
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

  const d20Roll = async (e: React.MouseEvent) => {
    e.preventDefault();
    setD20(0);
    setRollingA(true);
    // const diceResult: any = document.getElementById("diceResult");
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    setTimeout(() => {
      setD20(randomNumber);
      setRollingA(false);
    }, 200);
  };

  const resp = " roll: 3d6 .";

  const onCustomRoll = async (e: React.MouseEvent) => {
    e.preventDefault();
    setRolls([]);
    const afterRollPrompt = resp.split("roll:");
    const diceNumber = parseInt(afterRollPrompt[1].trim().split("d")[0]);
    const diceSides = afterRollPrompt[1].trim().split("d")[1].split(" ")[0];
    for (let i = 0; i < diceNumber; i++) {
      setRollingB(true);
      const num = Math.floor(Math.random() * parseInt(diceSides)) + 1;
      await new Promise((resolve) => setTimeout(resolve, 200));
      setRolls((prev) => [...prev, num]);
      setRollingB(false);
    }
  };

  return (
    <main className="flex flex-col items-center self-center min-h-screen px-4 md:px-16 fade-in-slide-in">
      <div className="max-w-screen-lg">
        {char && char.imgUrl && (
          <Image
            height={50}
            width={50}
            className="hidden "
            src={char.imgUrl}
            alt="profile pic"
          />
        )}
        {chatHistory.length > 1 && (
          <div className="overflow-y-scroll h-96" ref={chatContainerRef}>
            {chatHistory.map((chat) =>
              chat.role === "assistant" ? (
                <div
                  className="w-full chat chat-start"
                  key={`chat${chat.timestamp}`}
                >
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <Image width={50} height={50} src={d20Icon} alt="logo" />
                      <IconMap />
                    </div>
                  </div>
                  <div className="chat-header">
                    Dungeon Master
                    <time className="text-xs opacity-50">
                      {chat.timestamp.slice(0, 21)}
                    </time>
                  </div>
                  <div className="w-full text-xs chat-bubble sm:text-sm md:text-base">
                    {chat.content}
                  </div>
                  <div className="opacity-50 chat-footer">Delivered</div>
                </div>
              ) : chat.role === "user" ? (
                <div
                  className="w-full chat chat-end"
                  key={`user${chat.timestamp}`}
                >
                  <div className="mr-4 chat-image avatar">
                    <div className="w-10 rounded-full ">
                      {char && char.imgUrl ? (
                        <Image
                          height={50}
                          width={50}
                          className="object-cover "
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
                  <div className="text-xs chat-bubble chat-bubble-primary sm:text-sm md:text-base">
                    {chat.content}
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
      {loading && (
        <div className="flex flex-col items-center w-full">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      )}
      <form
        className="flex flex-col w-full max-w-screen-lg my-8"
        onSubmit={chatRequest}
      >
        <textarea
          placeholder="What will you do?"
          className="w-full text-base textarea textarea-primary textarea-lg sm:text-lg"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        ></textarea>
        <div className="flex flex-row justify-end">
          {resp.includes("roll:") && (
            <>
              <div
                className="m-4 tooltip tooltip-bottom"
                data-tip="Click to roll dice for specific situations, weapon damage, etc."
              >
                <button
                  className={`btn btn-neutral text-2xl tooltip `}
                  onClick={onCustomRoll}
                >
                  🎲
                </button>
              </div>
            </>
          )}
          <div
            className="my-4 tooltip tooltip-left "
            data-tip="Roll a d20 for all skill checks. Can your character make that jump? Roll athletics. Is someone lying to you? Roll Perception. Will be sent to Dungeon Master"
          >
            <button
              className={`btn btn-neutral text-2xl tooltip `}
              onClick={d20Roll}
            >
              d20🎲
            </button>
          </div>
          {char && <ModalCharacterSheet character={char} />}
          <button className="mx-4 my-4 btn btn-accent w-fit" type="submit">
            <IconSend />
          </button>
        </div>
        <div className="flex flex-row flex-wrap h-14">
          <div
            className="w-14 tooltip tooltip-right"
            data-tip="Results of d20 roll."
          >
            {d20 !== 0 && (
              <kbd className="kbd kbd-lg fade-in-slide-in ">{d20}</kbd>
            )}
          </div>
          <div
            className="tooltip tooltip-right"
            data-tip="Results of whatever other rolls dungeon masters has prompted (ex Weapon Damage). Will be sent to Dungeon Master."
          >
            {!!rolls.length &&
              rolls.map((r, i) => (
                <kbd
                  key={`roll${i}`}
                  className="m-1 kbd w-fit h-fit fade-in-slide-in"
                >
                  {r}
                </kbd>
              ))}
          </div>
        </div>
      </form>
    </main>
  );
}
