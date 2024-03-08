import { AppDispatch } from "@/store";
import {
  deleteCharacterRequest,
  selectCharacterRequest,
  userCharactersRequest,
  userCharactersState,
} from "@/store/characters";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Loading from "../../components/Loading";
import { userProfile } from "@/store/session";
import IconRightArrow from "../../components/icons/IconRightArrow";
import IconTrash from "../../components/icons/IconTrash";
import { useRouter } from "next/router";
import ConfirmModal from "../../components/ConfirmModal";
import { selectedScenarioState } from "@/store/scenarios";

export default function UserCharacters() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const user: any = useSelector(userProfile);
  const scene = useSelector(selectedScenarioState);
  useEffect(() => {
    const loadCharacters = async () => {
      if (user && user.id) {
        dispatch(userCharactersRequest(user.id));
      }
      setHasLoaded(true);
    };

    loadCharacters();
  }, [dispatch, user]);

  const usercharacters = useSelector(userCharactersState);
  const deleteButton = async (charId: number) => {
    await dispatch(deleteCharacterRequest(charId));
    await dispatch(userCharactersRequest(user.id));
  };

  const onClickSelect = async (charData: any) => {
    await dispatch(selectCharacterRequest(charData));
    if (!scene) window.my_modal_confirm.showModal();
    else router.push("/dungeonmaster");
  };
  if (!hasLoaded || !usercharacters) return <Loading />;
  if (!user.id)
    return (
      <main className="flex flex-col items-center min-h-screen px-16 ">
        <h1 className="text-2xl almendra">
          You must be signed in to view your characters
        </h1>
      </main>
    );

  return (
    <main className="flex flex-col items-center min-h-screen px-16 fade-in-slide-in">
      <h1 className="text-3xl font-bold federant">Your Characters</h1>
      <div className="divider" />
      <div className="flex flex-wrap justify-evenly">
        {Object.values(usercharacters).map((char, i) => (
          <div
            className="w-64 m-4 shadow-xl card card-compact bg-base-100 sm:w-96 "
            key={`char${i}`}
          >
            {char.imgUrl && (
              <figure>
                <Image
                  src={char.imgUrl}
                  alt="character-portrait"
                  height={800}
                  width={800}
                  className="object-cover aspect-square rounded-t-2xl"
                />
              </figure>
            )}
            <div className="card-body">
              <h2 className="card-title">{char.name}</h2>
              <p className="text-xs text-ellipsis ">{char.background}</p>
            </div>
            <div className="flex flex-row">
              <button
                className="w-1/2 rounded-t-none rounded-br-none btn btn-error rounded-bl-2xl"
                disabled={char.id <= 8}
                onClick={() => deleteButton(char.id)}
              >
                <IconTrash />
                Delete
              </button>
              <button
                className="w-1/2 rounded-t-none rounded-bl-none btn btn-primary rounded-br-2xl"
                onClick={() => onClickSelect(char)}
              >
                START
                <IconRightArrow />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ConfirmModal />
    </main>
  );
}
