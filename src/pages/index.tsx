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
import ancientruins from "../../public/scenes/ancientruins.jpeg";
import ancientruins2 from "../../public/scenes/ancientruins2.jpg";
import ancientruins3 from "../../public/scenes/ancientruins3.jpeg";
import aristocratManor from "../../public/scenes/aristocratmanor.jpeg";
import bridgeCrossing from "../../public/scenes/bridgecrossing.jpeg";
import brightCave from "../../public/scenes/brightcave.jpeg";
import dangerousCave from "../../public/scenes/dangerouscave.jpeg";
import darkDungeon from "../../public/scenes/darkdungeon.jpeg";
import dungeon from "../../public/scenes/dungeon.jpeg";
import mountainPass from "../../public/scenes/mountainpass.jpeg";
import redwoods from "../../public/scenes/redwoods.jpeg";
import village from "../../public/scenes/village.jpeg";
import village2 from "../../public/scenes/village2.jpeg";
import woodedPath from "../../public/scenes/woodedpath.jpeg";
import woodedPath2 from "../../public/scenes/woodedpath2.jpeg";
import woodsGodRays from "../../public/scenes/woodsgodrays.jpeg";
import cityStreets from "../../public/scenes/citystreets.jpg";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [hasLoaded, setHasLoaded] = useState(false);

  const scenes = [
    dungeon,
    ancientruins,
    village,
    redwoods,
    ancientruins2,
    darkDungeon,
    ancientruins3,
    aristocratManor,
    woodedPath2,
    bridgeCrossing,
    brightCave,
    dangerousCave,
    cityStreets,
    mountainPass,
    village2,
    woodedPath,
    woodsGodRays,
  ];
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
      <h1 className="almendra text-4xl my-4">Hello, fellow travelers</h1>

      <div className="carousel carousel-center rounded-box">
        {!!scenes.length &&
          scenes.map((scen, i) => (
            <div className="carousel-item" key={`scene${i}`}>
              <Image
              width={400}
              height={400}
              className="object-cover"
              src={scen}
              alt={`scene${i}`} />
            </div>
          ))}
      </div>
      {/* <div className="carousel carousel-center rounded-box">
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
      </div> */}
      <h1 className="almendra text-4xl my-4">Adventure awaits...</h1>
      <DungeonDoor />
    </main>
  );
}
