import { AppDispatch } from "@/store";
import { allCharactersRequest, allCharactersState } from "@/store/characters";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CreateCharacter() {
  const { data: session, status: loading } = useSession();
  const [hasLoaded, setHasLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadCharacters = async () => {
      dispatch(allCharactersRequest());
      setHasLoaded(true);
    };
    loadCharacters();
  }, [dispatch]);

  const characters = useSelector(allCharactersState);

  if (!hasLoaded || !characters) return "Loading";

  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      {/* title */}
      <h1 className="text-3xl federant font-bold">Character Creation Method</h1>
      <h2>Choose how you would like to create your character</h2>
      {/* divider */}
      <div className="flex flex-col w-full">
        <div className="divider"></div>
      </div>
      {/* card container */}
      <div className="flex flex-row flex-wrap justify-evenly">
        {/* card to display character selections */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img
              src={characters && characters[0]?.characters.imgUrl}
              alt="character preview"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">STANDARD</h2>
            <p>Create a character using a step-by-step approach</p>
            <div className="card-actions justify-end"></div>
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
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img
              src={characters && characters[2]?.characters.imgUrl}
              alt="character preview"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PREMADE</h2>
            <p>
              Browse a selection of ready-to-play, premade characters and claim
              one to your account.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
          <button className="btn btn-primary rounded-b-2xl rounded-t-none flex justify-end">
            START BROWSING
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
      </div>
    </main>
  );
}
