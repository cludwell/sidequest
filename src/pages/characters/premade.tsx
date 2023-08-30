import { AppDispatch } from "@/store";
import {
  allCharactersRequest,
  allCharactersState,
  userCharactersRequest,
  userCharactersState,
} from "@/store/characters";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";

export default function PremadeCharacters() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadCharacters = async () => {
      dispatch(userCharactersRequest(1));
      setHasLoaded(true);
    };
    loadCharacters();
  }, [dispatch]);

  const characters = useSelector(allCharactersState);
  const usercharacters = useSelector(userCharactersState);

  console.log("USER CHARACTERS", usercharacters);
  if (!characters || !hasLoaded) return "Loading";

  return (
    <main className="flex min-h-screen flex-col items-center p-">
      <h1 className="text-3xl federant font-bold">Pre-made Characters</h1>
      <div className="divider" />
      <div className="flex flex-wrap w-4/6 justify-center">
        {Object.values(characters).map((char, i) => (
          <div className="card bg-base-100 shadow-xl w-96 m-4" key={`char${i}`}>
            {char.imgUrl && (
              <figure>
                <Image
                  src={char.imgUrl}
                  alt="portrait"
                  height={400}
                  width={400}
                  className="object-cover max-h-fit aspect-square"
                />
              </figure>
            )}
                      <div className="card-body p-4">
            <h2 className="card-title">{characters[1].name}</h2>
            <p className="text-ellipsis text-xs">{characters[1].background}</p>
          </div>
          <button className="btn btn-primary rounded-b-2xl rounded-t-none flex justify-end">
            START BUILDING
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
          </div>
        ))}
      </div>
    </main>
  );
}
