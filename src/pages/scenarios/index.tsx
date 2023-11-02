import { AppDispatch } from "@/store";
import {
  allScenarioState,
  loadScenarios,
  selectedScenarioRequest,
} from "@/store/scenarios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../Loading";
import Image from "next/image";
import { useSelector } from "react-redux";
import IconRightArrow from "../IconRightArrow";
import { selectedCharacterState } from "@/store/characters";
import { useRouter } from "next/router";
import ConfirmModal from "../ConfirmModal";
import { Scenarios } from "@prisma/client";

export default function Scenarios() {
  const dispatch = useDispatch<AppDispatch>();
  const [loaded, setLoaded] = useState<Boolean>(false);
  const char = useSelector(selectedCharacterState);
  const router = useRouter();
  useEffect(() => {
    const loadData = async () => {
      await dispatch(loadScenarios());
      setLoaded(true);
    };
    loadData();
  }, [dispatch]);
  const scenarios = useSelector(allScenarioState);

  const selectScenario = async (scene: Scenarios) => {
    await dispatch(selectedScenarioRequest(scene));
    if (!char) window.my_modal_confirm.showModal();
    else router.push("/dungeonmaster");
  };
  if (!loaded) return <Loading />;
  const focusOnclick = async (idString: string | null) => {
    if (idString) {
      const element = document.getElementById(idString);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16 fade-in-slide-in">
      <h1 className="federant text-3xl font-bold">Scenarios</h1>
      <div className="divider" />

      <div className="carousel carousel-center rounded-box max-w-screen-xl w-full ">
        {scenarios &&
          Object.values(scenarios).map((scene, i) => (
            <div
              className=" w-60 sm:w-80 md:w-96 glass carousel-item relative glass-container"
              key={scene.id}
              id={`${scene.description.slice(0, 50)}`}
            >
              <figure
                onClick={() =>
                  focusOnclick(
                    scene.description.slice(0, 50)
                      ? scene.description.slice(0, 50)
                      : null
                  )
                }
              >
                {scene.imgUrl && (
                  <Image
                    height={1000}
                    width={1000}
                    alt="scenario-image"
                    src={scene.imgUrl}
                    className=" object-cover w-full h-full"
                  />
                )}
              </figure>
              <div className=" absolute glass glass-content bottom-0 rounded-2xl opacity-0 transition duration-300 p-2 sm:p-4 m-1 sm:m-2">
                <h2 className="card-title almendra sm:text-2xl">
                  {scene.description.split("Adventure Prompt:")[0].slice(7)}
                </h2>
                <p className="text-xs sm:text-base overflow-ellipsis">
                  {scene.description
                    .split("Adventure Prompt: ")[1]
                    .slice(0, 300)}
                  ...
                </p>
                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn btn-primary btn-xs sm:btn-sm md:btn-md"
                    onClick={() => selectScenario(scene)}
                  >
                    <IconRightArrow />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <ConfirmModal />
    </main>
  );
}
