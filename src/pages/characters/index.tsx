import { AppDispatch } from "@/store";
import { allCharactersRequest, allCharactersState } from "@/store/characters";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading";
import IconRightArrow from "../IconRightArrow";

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

  const handlePremade = () => router.push("/characters/premade");
  const handleCreate = () => router.push("/characters/new");

  if (!hasLoaded || !characters) return <Loading />;

  return (
    <main className={`flex min-h-screen flex-col items-center px-16 fade-in-slide-in`}>
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
        {/* removing card from class name allows drawer to behave correctly */}
        <div className=" card-compact w-96 bg-base-100 shadow-xl m-4 rounded-2xl  ">
          <figure>
            {characters[6].imgUrl && (
              <Image
                height={800}
                width={800}
                src={characters[6].imgUrl}
                alt="character preview"
                className="rounded-t-2xl"
              />
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">STANDARD</h2>
            <p>Create a character using a step-by-step approach</p>
            <div className="card-actions justify-end"></div>
          </div>
          <button className="btn btn-primary rounded-b-2xl rounded-t-none flex justify-end w-full"
                      onClick={handleCreate}
                      >
            START BUILDING
            <IconRightArrow />
          </button>
        </div>
        {/* <div className="divider divider-horizontal md:invisible md:absolute">OR</div> */}
        <div className="flex flex-col card-compact w-96 bg-base-100 shadow-xl m-4 rounded-2xl ">
          <figure>
            {characters[7].imgUrl && (
              <Image
                height={800}
                width={800}
                src={characters[7].imgUrl}
                alt="character preview"
                className="rounded-t-2xl"
              />
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">PREMADE</h2>
            <p>
              Browse a selection of ready-to-play, premade characters and claim
              one to your account.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
          <button
            className="btn btn-primary rounded-b-2xl rounded-t-none flex justify-end w-full"
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
