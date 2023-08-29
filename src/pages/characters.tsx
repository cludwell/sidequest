import { AppDispatch } from "@/store";
import { allCharactersRequest, allCharactersState } from "@/store/characters";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CreateCharacter() {
  const { data: session, status: loading } = useSession();
  const [ hasLoaded, setHasLoaded ] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const loadCharacters = async () => {
      dispatch(allCharactersRequest());
      setHasLoaded(true)
    };
    loadCharacters();
  }, [dispatch]);

  const characters = useSelector(allCharactersState);

  if (!hasLoaded || !characters) return 'Loading'

  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      {/* title */}
      <h1 className="text-3xl federant font-bold">Character Creation Method</h1>
      {/* divider */}
      <div className="flex flex-col w-full">
        <div className="divider"></div>
      </div>
      {/* card container */}
      <div className="flex flew-row justify-around" >

      {/* card to display character selections */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure >
          <img src={characters && characters[0]?.characters.imgUrl} alt="character preview"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">STANDARD</h2>
          <p>Create a character using a step-by-step approach</p>
          <div className="card-actions justify-end"></div>
        </div>
        <button className="btn btn-primary rounded-b-2xl rounded-t-none flex justify-end">
          START BUILDING
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 3L16 12L8 21"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </button>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure >
          <img src={characters && characters[2]?.characters.imgUrl} alt="character preview"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">PREMADE</h2>
          <p>Browse a selection of ready-to-play, premade characters and claim one to your account.</p>
          <div className="card-actions justify-end"></div>
        </div>
        <button className="btn btn-primary rounded-b-2xl rounded-t-none flex justify-end">
          START BROWSING
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 3L16 12L8 21"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </button>
      </div>
      </div>
    </main>
  );
}
