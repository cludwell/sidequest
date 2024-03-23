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
import d20 from "/public/images/d20.png";
import { MotionConfig, useAnimate, usePresence, motion } from "framer-motion";
import sword from "/public/images/sword.png";
import swordb from "/public/images/swordb.png";
import LandingPhaseA from '../components/LandingPhaseA'
import Logo from "@/components/Logo";
import LandingPhaseB from "@/components/LandingPhaseB";
import LandingPhaseC from "@/components/LandingPhaseC";
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [scope, animate] = useAnimate();
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

  return (
    <main
      className={`flex min-h-screen flex-col items-center  px-4 md:px-16 self-center ${inter.className} `}
    >
      <Head>
        <title>Side🎲Quest</title>
      </Head>
      <LandingPhaseA />
      <LandingPhaseB />
      <LandingPhaseC />
    </main>
  );
}
