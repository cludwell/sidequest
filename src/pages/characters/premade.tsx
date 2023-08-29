import { AppDispatch } from "@/store";
import { allCharactersRequest, allCharactersState } from "@/store/characters";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function PremadeCharacters() {
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

  if (!characters) return "Loading";
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl federant font-bold">PreMade Characters</h1>
      <div className="divider" />

      <div className="carousel carousel-end rounded-box">
        <div className="card w-96 glass carousel-item">
          <figure>
            <img
              src={characters[1].imgUrl}
              alt="character portrait"
              className="h-100"
            />
          </figure>
          <div className="card-body h-60 p-4">
            <h2 className="card-title">{characters[1].name}</h2>
            <p className="text-ellipsis text-xs">{characters[1].background}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary sticky bottom-0">
                Learn now!
              </button>
            </div>
          </div>
        </div>
        {/* carousel closing */}
      </div>
    </main>
  );
}
