import { AppDispatch, wrapper } from "@/store";
import { Inter } from "next/font/google";
import Head from "next/head";
import Dungeon from "./Dungeon";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadScenarios, scenarioState } from "@/store/scenarios";
import { useSelector } from "react-redux";
import Image from "next/image";
import DungeonDoor from "./DungeonDoor";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      dispatch(loadScenarios());
      setHasLoaded(true);
    };
    loadData();
  }, [dispatch]);

  const scenarios = useSelector(scenarioState);
  if (!hasLoaded || !scenarios) return Loading;
  console.log(scenarios);
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-16 ${inter.className}`}
    >
      <Head>
        <title>Side🎲Quest</title>
      </Head>
      <h1 className="almendra text-4xl">Hello, fellow travelers</h1>

      <div className="carousel carousel-center rounded-box">
        {scenarios.allScenarios &&
          Object.values(scenarios.allScenarios).map((scen, i) => (
            <div className="carousel-item" key={`scenario${i}`}>
              {scen.imgUrl && (
                <Image
                  src={scen.imgUrl}
                  alt="campaign scene"
                  width={500}
                  height={750}
                  className="object-cover"
                />
              )}
            </div>
          ))}
      </div>
      <h1 className="almendra text-4xl">Adventure awaits...</h1>
      <DungeonDoor />
    </main>
  );
}
