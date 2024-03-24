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
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import { selectedScenarioState } from "@/store/scenarios";
import ConfirmModal from "../../components/ConfirmModal";

export default function PremadeCharacters() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const scene = useSelector(selectedScenarioState);
  useEffect(() => {
    const loadCharacters = async () => {
      dispatch(userCharactersRequest(1));
      setHasLoaded(true);
    };
    loadCharacters();
  }, [dispatch]);

  const usercharacters = useSelector(userCharactersState);

  if (!hasLoaded || !usercharacters) return <Loading />;

  const onClickSelect = async (charData: any) => {
    await dispatch(selectCharacterRequest(charData));
    if (!scene) window.my_modal_confirm.showModal();
    else router.push("/dungeonmaster");
  };

  return (
    <main className="flex flex-col items-center min-h-screen px-16 fade-in-slide-in">
      <h1 className="text-3xl font-bold federant">Pre-made Characters</h1>
      <div className="divider" />
      <div className="flex flex-wrap justify-center">
        {Object.values(usercharacters).map((char, i) => (
          <div
            className="m-4 shadow-xl card card-compact bg-base-100 w-72 sm:w-96 rounded-2xl"
            key={`char${i}`}
          >
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
            <div className="p-4 card-body">
              <h2 className="card-title">{char.name}</h2>
              <p className="text-xs text-ellipsis">{char.background}</p>
            </div>
            <button
              className="flex justify-end rounded-t-none btn btn-primary rounded-b-2xl"
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
