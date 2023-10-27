import { AppDispatch } from "@/store";
import {
  deleteCharacterRequest,
  selectCharacterRequest,
  selectedCharacterState,
  userCharactersRequest,
  userCharactersState,
} from "@/store/characters";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Loading from "../Loading";
import { userProfile } from "@/store/session";
import IconRightArrow from "../IconRightArrow";
import IconTrash from "../IconTrash";
import { User } from "../../../lib/user";
import { useRouter } from "next/router";
import ConfirmModal from "../ConfirmModal";
import { selectedScenarioState } from "@/store/scenarios";

export default function UserCharacters() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const user: any = useSelector(userProfile);
  const scene = useSelector(selectedScenarioState)
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
    if (!scene) window.my_modal_confirm.showModal()
    else router.push('/dungeonmaster')
  };
  if (!hasLoaded || !usercharacters) return <Loading />;
  if (!user.id)
    return (
      <main className="flex min-h-screen flex-col items-center px-16 ">
        <h1 className="almendra text-2xl">
          You must be signed in to view your characters
        </h1>
      </main>
    );

  return (
    <main className="flex min-h-screen flex-col items-center px-16 fade-in-slide-in">
      <h1 className="text-3xl federant font-bold">Your Characters</h1>
      <div className="divider" />
      <div className="flex flex-wrap justify-evenly">
        {Object.values(usercharacters).map((char, i) => (
          <div
            className="card card-compact bg-base-100 shadow-xl max-w-96 m-4 "
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
              <p className="text-ellipsis text-xs md:text-lg">{char.background}</p>
            </div>
            <div className="flex flex-row">
              <button
                className="btn btn-error rounded-bl-2xl rounded-br-none rounded-t-none w-1/2"
                disabled={char.id <= 8}
                onClick={() => deleteButton(char.id)}
              >
                <IconTrash />
                Delete
              </button>
              <button className="btn btn-primary rounded-br-2xl rounded-bl-none rounded-t-none w-1/2"
              onClick={() => onClickSelect(char)}>
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
