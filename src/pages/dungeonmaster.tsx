import { useState } from "react";
import IconCharacters from "./IconCharacters";
import IconMap from "./IconMap";
import IconSend from "./IconSend";
import { ChatObject } from "../../lib/chatObject";
import { ChatError } from "../../lib/chatError";
import d20 from "../../public/images/d20.png";
import Image from "next/image";
export default function DungeonMaster() {
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content:
        "You are the dungeon master, providing assistance in a tabletop role-playing game scenario. Please generate a short adventure for the player's character.",
      timestamp: new Date().toString(),
    },
  ]);
  const [userText, setUserText] = useState("");
  
  const [rolls, setRolls] = useState<number[]>([]);
  const [error, setError] = useState("");

  const chatRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      console.log("RESPONSE DATA", responseData);

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
  };

  const resetDice = () => setRolls([]);

  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16   self-center">
      {chatHistory.map((chat, index) =>
        chat.role === "assistant" ? (
          <div className="chat chat-start w-full" key={`chat${chat.timestamp}`}>
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
            <div className="chat-bubble">{chat.content}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ) : chat.role === "user" ? (
          <div className="chat chat-end w-full" key={`user${chat.timestamp}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <IconCharacters />
              </div>
            </div>
            <div className="chat-header">
              Player
              <time className="text-xs opacity-50">
                {chat.timestamp.slice(0, 21)}
              </time>
            </div>
            <div className="chat-bubble">{chat.content}</div>
          </div>
        ) : null
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
        <button className="btn btn-accent my-4 w-fit ml-auto" type="submit">
          <IconSend />
        </button>
      </form>
    </main>
  );
}
