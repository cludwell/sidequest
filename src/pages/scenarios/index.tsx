import { AppDispatch } from "@/store";
import {
  allScenarioState,
  loadScenarios,
  selectedScenarioRequest,
  selectedScenarioState,
} from "@/store/scenarios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../Loading";
import Image from "next/image";
import { useSelector } from "react-redux";
import IconRightArrow from "../IconRightArrow";
import { ScenariosState } from "../../../lib/scenarioState";

export default function Scenarios() {
  const dispatch = useDispatch<AppDispatch>();
  const [loaded, setLoaded] = useState<Boolean>(false);
  useEffect(() => {
    const loadData = async () => {
      await dispatch(loadScenarios());
      setLoaded(true);
    };
    loadData();
  }, [dispatch]);
  const scenarios = useSelector(allScenarioState);
  // console.log("SCENARIOS", scenarios);

  const selectScenario = async (scene: ScenariosState) => {
    await dispatch(selectedScenarioRequest(scene));
  };
  const selected = useSelector(selectedScenarioState);
  console.log("SELECTED", selected);
  if (!loaded) return <Loading />;
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16 fade-in-slide-in">
      <h1 className="federant text-3xl font-bold">Scenarios</h1>
      <div className="divider" />

      <div className="carousel carousel-center rounded-box max-w-screen-xl w-full ">
        {scenarios &&
          Object.values(scenarios).map((scene, i) => (
            <div
              className=" w-96 glass carousel-item relative glass-container"
              key={scene.id}
            >
              <figure>
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
              <div className=" absolute glass glass-content bottom-0 rounded-2xl opacity-0 transition duration-300 p-4 m-2">
                <h2 className="card-title almendra text-2xl">
                  {scene.description.split("Adventure Prompt:")[0].slice(7)}
                </h2>
                <p className=" overflow-ellipsis">
                  {scene.description
                    .split("Adventure Prompt: ")[1]
                    .slice(0, 300)}
                  ...
                </p>
                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={() => selectScenario(scene)}
                  >
                    <IconRightArrow />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
