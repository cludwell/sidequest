import { AppDispatch } from "@/store";
import {
  selectCharacterRequest,
  userCharactersRequest,
  userCharactersState,
} from "@/store/characters";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Loading from "../Loading";
import { useRouter } from "next/router";
import { selectedScenarioState } from "@/store/scenarios";
import ConfirmModal from "../ConfirmModal";

export default function PremadeCharacters() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const scene = useSelector(selectedScenarioState)
  useEffect(() => {
    const loadCharacters = async () => {
      dispatch(userCharactersRequest(1));
      setHasLoaded(true);
    };
    loadCharacters();
  }, [dispatch]);

  const usercharacters = useSelector(userCharactersState);

  // console.log("USER CHARACTERS", usercharacters);
  if (!hasLoaded || !usercharacters) return <Loading />;

  // console.log("USER CHARACTERS", usercharacters);
  const onClickSelect = async (charData: any) => {
    await dispatch(selectCharacterRequest(charData));
    if (!scene) window.my_modal_confirm.showModal()
    else router.push("/dungeonmaster");
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center px-16 fade-in-slide-in">
      <h1 className="text-3xl federant font-bold">Pre-made Characters</h1>
      <div className="divider" />
      <div className="flex flex-wrap justify-center">
        {Object.values(usercharacters).map((char, i) => (
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
              <h2 className="card-title">{char.name}</h2>
              <p className="text-ellipsis text-xs">{char.background}</p>
            </div>
            <button
              className="btn btn-primary rounded-b-2xl rounded-t-none flex justify-end"
              onClick={() => onClickSelect(char)}
            >
              START ADVENTURE
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
      <ConfirmModal />
    </main>
  );
}
