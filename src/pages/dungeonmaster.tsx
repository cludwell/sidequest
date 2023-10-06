import { useEffect, useRef, useState } from "react";
import IconCharacters from "./IconCharacters";
import IconMap from "./IconMap";
import IconSend from "./IconSend";
import d20 from "../../public/images/d20.png";
import Image from "next/image";

export default function DungeonMaster({char}) {
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content:
        `You are the dungeon master, providing assistance in a Dungeons and Dragons 5e game session. Please generate and guide user through a short adventure. The user's character data looks like: ${JSON.stringify(char)}`,
      timestamp: new Date().toString(),
    },
  ]);
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [rolls, setRolls] = useState<number[]>([]);
  const resetDice = () => setRolls([]);
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
    setLoading(false);
  };


  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16   self-center slide-in">
      {chatHistory.length > 1 && (
        <div className="overflow-y-scroll h-96" ref={chatContainerRef}>
          {chatHistory.map((chat, index) =>
            chat.role === "assistant" ? (
              <div
                className="chat chat-start w-full slide-in"
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
                <div className="chat-bubble">{chat.content}</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
            ) : chat.role === "user" ? (
              <div
                className="chat chat-end w-full slide-in"
                key={`user${chat.timestamp}`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full ">
                    <IconCharacters />
                  </div>
                </div>
                <div className="chat-header">
                  Player
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
        <button className="btn btn-accent my-4 w-fit ml-auto" type="submit">
          <IconSend />
        </button>
      </form>
    </main>
  );
}
