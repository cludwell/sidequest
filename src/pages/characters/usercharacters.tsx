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
import Loading from "../Loading";
import { userProfile } from "@/store/session";
import IconRightArrow from "../IconRightArrow";
import IconTrash from "../IconTrash";
import { User } from "../../../lib/user";
import { useRouter } from "next/router";

export default function UserCharacters() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const user: any = useSelector(userProfile);
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
    router.push('/dungeonmaster')
  };
  // console.log("USER CHARACTERS", usercharacters);
  if (!hasLoaded || !usercharacters) return <Loading />;

  // console.log("USER CHARACTERS", usercharacters);
  if (!user.id)
    return (
      <main className="flex min-h-screen flex-col items-center px-16 ">
        <h1 className="almendra text-2xl">
          You must be signed in to view your characters
        </h1>
      </main>
    );
  //   if (!!Object.values(usercharacters).length)
  //     return (
  //       <main className="flex min-h-screen flex-col items-center px-16 ">
  //         <h1 className="almendra text-2xl">
  //           You need to create some characters first.
  //         </h1>
  //       </main>
  //     );

  return (
    <main className="flex min-h-screen flex-col items-center px-16 fade-in-slide-in">
      <h1 className="text-3xl federant font-bold">Your Characters</h1>
      <div className="divider" />
      <div className="flex flex-wrap justify-center">
        {Object.values(usercharacters).map((char, i) => (
          <div
            className=" bg-base-100 shadow-xl w-96 m-4 rounded-2xl flex flex-col"
            key={`char${i}`}
          >
            {char.imgUrl && (
              <figure>
                <Image
                  src={char.imgUrl}
                  alt="portrait"
                  height={400}
                  width={400}
                  className="object-cover max-h-fit aspect-square rounded-t-2xl"
                />
              </figure>
            )}
            <div className="card-body p-4">
              <h2 className="card-title">{char.name}</h2>
              <p className="text-ellipsis text-xs">{char.background}</p>
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
    </main>
  );
}
