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
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isPresent, safeToRemove] = usePresence();
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
  const letters = "Side Quest".split("");
  useEffect(() => {
    const loadData = async () => {
      dispatch(loadScenarios());
      setHasLoaded(true);
    };
    loadData();
  }, [dispatch]);

  const dieSelector = "#die";
  const swordSelectorA = "#sworda";
  const swordSelectorB = "#swordb";
  const checkSelectors = () => {
    return (
      document.querySelector(dieSelector) &&
      document.querySelector(swordSelectorA) &&
      document.querySelector(swordSelectorB)
    );
  };

  useEffect(() => {
    const rollDie = async () => {
      if (scope?.current && checkSelectors()) {
        await animate(
          dieSelector,
          { y: 200, rotate: 720, x: -140, opacity: 1 },
          { duration: 0.6 }
        );
        await animate(
          dieSelector,
          { y: -150, rotate: 1080, x: -40, opacity: 1 },
          { duration: 0.4 }
        );
        await animate(
          dieSelector,
          { y: 150, rotate: 2160, x: 0, opacity: 1 },
          { duration: 0.3 }
        );
        await animate(
          swordSelectorA,
          { rotate: 300, y: -500, x: 120, opacity: 0 },
          { duration: 0.5 }
        );
        await animate(
          swordSelectorA,
          { y: 120, x: 20, opacity: 1, rotate: 0 },
          { duration: 0.5 }
        );
        await animate(
          swordSelectorB,
          { rotate: 300, y: -500, x: 120, opacity: 0 },
          { duration: 0.5 }
        );
        await animate(
          swordSelectorB,
          { y: 120, x: 20, opacity: 1, rotate: 0 },
          { duration: 0.5 }
        );
        // await animate(
        //   swordSelector,
        //   { rotate: 300, y: -500, x: 120, opacity:0 },
        //   { duration: 0.5 }
        // );
        // await animate(swordSelector, { y: 90, x: 20, opacity:1, rotate:300 }, { duration: 0.5 });
      }
    };
    setTimeout(() => rollDie(), 300);
  }, [scope, animate]);

  const scenarios = useSelector(allScenarioState);
  if (!hasLoaded || !scenarios) return <Loading />;

  return (
    <main
      className={`flex min-h-screen flex-col items-center  px-4 md:px-16 self-center ${inter.className} `}
    >
      <Head>
        <title>Side🎲Quest</title>
      </Head>
      <Link href={"/splash"} className="flex flex-col items-center ">
        {/* <h1 className="my-4 text-2xl almendra md:text-4xl ">SideQuest</h1> */}
      </Link>

      <div
        id="container "
        ref={scope}
        className="flex flex-row justify-center mt-[10vmin] w-fit h-fit"
      >
        <Image
          src={d20}
          alt="logo of the app"
          className="absolute z-20 object-cover w-32 opacity-0 "
          id="die"
        />

        <Image
          src={sword}
          alt="a sword on a transparent background"
          className="absolute z-10 object-contain opacity-0 w-80"
          id="sworda"
        />
        <Image
          src={swordb}
          alt="a sword on a transparent background"
          className="absolute z-10 object-contain opacity-0 w-80 "
          id="swordb"
        />

        {letters.map((l, i) => (
          <motion.span
            className={`${l == " " ? "w-8" : ""} text-6xl sm:text-8xl almendra z-30 `}
            initial={{ opacity: 0, x: -200, y: -200 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: 2.5 + i * 0.3,
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            key={l + i}
            id={l}
          >
            {l}
          </motion.span>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          className="absolute top-[50vh] md:top-[60vh] mx-auto"
        >
          <Link href={"/splash"} className="flex flex-col items-center ">
            <h1 className="my-4 text-2xl almendra md:text-4xl">
              ChatGPT Assisted DnD
            </h1>
            <DungeonDoor />
          </Link>
        </motion.div>
      </div>

      {/* <div className="w-full max-w-screen-xl carousel carousel-center rounded-box">
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
      </div>*/}
    </main>
  );
}
