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

      <div className="carousel carousel-end rounded-box w-3/6">
        {/* carousel items follow */}
        <div className="card w-96 glass carousel-item">
          <figure>
            {characters[1].imgUrl && (
              <Image
                src={characters[1].imgUrl}
                alt="character portrait"
                className="h-100 aspect-square object-cover"
                width={1000}
                height={1000}
              />
            )}
          </figure>
          <div className="card-body h-60 p-4">
            <h2 className="card-title">{characters[1].name}</h2>
            <p className="text-ellipsis text-xs">{characters[1].background}</p>
          </div>
          <div className="card-actions justify-end sticky">
            <button className="btn btn-primary">START GAME</button>
          </div>
        </div>
        <div className="card w-96 glass carousel-item">
          <figure>
            {characters[1].imgUrl && (
              <Image
                src={characters[1].imgUrl}
                alt="character portrait"
                className="h-100 aspect-square object-cover"
                width={1000}
                height={1000}
              />
            )}
          </figure>
          <div className="card-body h-60 p-4">
            <h2 className="card-title">{characters[1].name}</h2>
            <p className="text-ellipsis text-xs">{characters[1].background}</p>
          </div>
          <div className="card-actions justify-end sticky">
            <button className="btn btn-primary">START GAME</button>
          </div>
        </div>
        <div className="card w-96 glass carousel-item">
          <figure>
            {characters[1].imgUrl && (
              <Image
                src={characters[1].imgUrl}
                alt="character portrait"
                className="h-100 aspect-square object-cover"
                width={1000}
                height={1000}
              />
            )}
          </figure>
          <div className="card-body h-60 p-4">
            <h2 className="card-title">{characters[1].name}</h2>
            <p className="text-ellipsis text-xs">{characters[1].background}</p>
          </div>
          <div className="card-actions justify-end sticky">
            <button className="btn btn-primary">START GAME</button>
          </div>
        </div>

        {/* carousel closing */}
      </div>
    </main>
  );
}
