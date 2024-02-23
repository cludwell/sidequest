import { AppDispatch, wrapper } from "@/store";
import { Inter } from "next/font/google";
import Head from "next/head";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { allScenarioState, loadScenarios } from "@/store/scenarios";
import { useSelector } from "react-redux";
import Image from "next/image";
import DungeonDoor from "../components/DungeonDoor";
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
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [hasLoaded, setHasLoaded] = useState(false);

  const scenes = [
    dungeon,
    ancientruins,
    // village,
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
    // woodsGodRays,
  ];
  useEffect(() => {
    const loadData = async () => {
      dispatch(loadScenarios());
      setHasLoaded(true);
    };
    loadData();
  }, [dispatch]);

  const scenarios = useSelector(allScenarioState);
  if (!hasLoaded || !scenarios) return <Loading />;
  console.log(scenarios);
  return (
    <main
      className={`flex min-h-screen flex-col items-center  px-4 md:px-16 self-center ${inter.className} fade-in-slide-in`}
    >
      <Head>
        <title>Side🎲Quest</title>
      </Head>
      <Link href={"/splash"} className="flex flex-col items-center ">
        <h1 className="almendra text-2xl md:text-4xl my-4 ">SideQuest</h1>
      </Link>

      <div className="carousel carousel-center rounded-box max-w-screen-xl w-full">
        {!!scenes.length &&
          scenes.map((scen, i) => (
            <div className="carousel-item" key={`scene${i}`}>
              <Image
                width={400}
                height={400}
                className="object-cover w-60 md:w-96"
                src={scen}
                alt={`scene${i}`}
              />
            </div>
          ))}
      </div>
      <Link href={"/splash"} className="flex flex-col items-center">
        <h1 className="almendra text-2xl md:text-4xl my-4 ">
          AI Assisted Dungeons and Dragons
        </h1>
        <DungeonDoor />
      </Link>
    </main>
  );
}
