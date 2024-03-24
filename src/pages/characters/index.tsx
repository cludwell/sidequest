import { AppDispatch } from "@/store";
import { allCharactersRequest, allCharactersState } from "@/store/characters";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import IconRightArrow from "../../components/icons/IconRightArrow";

export default function CreateCharacter() {
  const { data: session, status: loading } = useSession();
  const [hasLoaded, setHasLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    const loadCharacters = async () => {
      dispatch(allCharactersRequest());
      setHasLoaded(true);
    };
    loadCharacters();
  }, [dispatch]);

  const characters = useSelector(allCharactersState);

  console.log("characters", characters);
  const handlePremade = () => router.push("/characters/premade");
  const handleCreate = () => router.push("/characters/new");

  if (!hasLoaded || !characters) return <Loading />;

  return (
    <main
      className={`flex min-h-screen flex-col items-center px-4 md:px-16 fade-in-slide-in`}
    >
      {/* title */}
      <h1 className="text-3xl font-bold federant">Character Creation Method</h1>
      <h2>Choose how you would like to create your character</h2>
      {/* divider */}
      <div className="flex flex-col w-full">
        <div className="divider" />
      </div>
      {/* card container */}
      <div className="flex flex-row flex-wrap justify-evenly">
        {/* card to display character selections */}
        {/* removing card from class name allows drawer to behave correctly */}
        <div className="w-64 m-4 shadow-xl card card-compact bg-base-100 sm:w-96 rounded-2xl">
          <figure>
            {characters[5].imgUrl && (
              <Image
                height={800}
                width={800}
                src={characters[5].imgUrl}
                alt="character preview"
                className="object-cover rounded-t-2xl aspect-square"
              />
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">STANDARD</h2>
            <p className="text-sm md:text-lg">
              Create a character using a step-by-step approach
            </p>
            <div className="justify-end card-actions"></div>
          </div>
          <button
            className="flex justify-end w-full rounded-t-none btn btn-primary rounded-b-2xl"
            onClick={handleCreate}
          >
            START BUILDING
            <IconRightArrow />
          </button>
        </div>

        <div className="w-64 m-4 shadow-xl card card-compact bg-base-100 sm:w-96 rounded-2xl">
          <figure>
            {characters[4].imgUrl && (
              <Image
                height={800}
                width={800}
                src={characters[4].imgUrl}
                alt="character preview"
                className="object-cover rounded-t-2xl aspect-square"
              />
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">PREMADE</h2>
            <p className="text-sm md:text-lg">
              Browse a selection of ready-to-play, premade characters and claim
              one to your account.
            </p>
            <div className="justify-end card-actions"></div>
          </div>
          <button
            className="flex justify-end w-full rounded-t-none btn btn-primary rounded-b-2xl"
            onClick={handlePremade}
          >
            START BROWSING
            <IconRightArrow />
          </button>
        </div>
      </div>
    </main>
  );
}
