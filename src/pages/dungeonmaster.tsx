import { useState } from "react";
import IconCharacters from "./IconCharacters";
import IconMap from "./IconMap";
import IconSend from "./IconSend";
import { ChatObject } from "../../lib/chatObject";

export default function DungeonMaster() {
  const [chatHistory, setChatHistory] = useState<ChatObject[]>([]);
  const [userText, setUserText] = useState("");
  const [rolls, setRolls] = useState<number[]>([]);
  const chatRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setChatHistory([
      ...chatHistory,
      {
        sender: "user",
        message: userText,
        timestamp: new Date().toString(),
      },
    ]);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText }),
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log("RESPONSE DATA", responseData);
      setChatHistory([
        ...chatHistory,
        {
          sender: "ai",
          message: responseData.choices[0].text.trim(),
          timestamp: new Date().toString(),
        },
      ]);
      setUserText("");
    }
  };

  const resetDice = () => setRolls([]);

  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16   self-center">
      {chatHistory.map((chat, index) => chat.sender === 'ai' ? (
      <div className="chat chat-start w-full" key={`chat${chat.timestamp}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <IconMap />
          </div>
        </div>
        <div className="chat-header">
          Dungeon Master
          <time className="text-xs opacity-50">
            {chat.timestamp.slice(0, 21)}
          </time>
        </div>
        <div className="chat-bubble">{chat.message}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      ) : (
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
        <div className="chat-bubble">{chat.message}</div>
      </div>
      ))}
      {/* <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full"></div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full"></div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}

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
