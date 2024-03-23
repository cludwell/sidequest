import Image from "next/image";
import { useAnimate } from "framer-motion";
import orc from "/public/landing/orc.png";
import creature from "/public/landing/creature.png";
import beholder from "/public/landing/beholder.png";
import dragonborn from "/public/landing/dragonborn.png";
import turt from "/public/landing/turt.png";
import dungeon from "/public/scenes/dungeon.jpeg";
import village2 from "/public/scenes/village2.jpeg";
import darkdungeon from "/public/scenes/darkdungeon.jpeg";
import ancientruins3 from "/public/scenes/ancientruins3.jpeg";
import oldchest from "/public/landing/oldchest.png";
import { useEffect } from "react";
export default function LandingPhaseE() {
  const [scope, animate] = useAnimate();

  const beholderSelector = "#beholder";
  const checkSelectors = () => {
    return document.querySelector(beholderSelector);
  };

  useEffect(() => {
    const startScenes = async () => {
      if (scope?.current && checkSelectors()) {
        animate(
          beholderSelector,
          { x: [0,5,10,5,0,-5,-10,-5,0], y: [0,5,10,5,0,-5,-10] },
          { duration: 3, repeat: Infinity, repeatType:"reverse" }
        );
        await animate(
          beholderSelector,
          { scale: 0.01, opacity: 0 },
          { duration: 1 }
        );
        await animate(
          beholderSelector,
          { scale: 0.4, opacity: 1 },
          { duration: 1 }
        );
      }
    };
    setTimeout(() => startScenes(), 300);
  }, [scope, animate]);
  return (
    <div
      className="relative flex flex-row flex-wrap justify-between w-full max-w-screen-lg min-h-screen bg-red-400"
      ref={scope}
    >
      {/* <div className="relative bg-cyan-400 h-96" id="dungeon-container">

      <Image
        src={orc}
        alt="orc stands stupidly in the scene"
        className="absolute z-10 w-48 left-1/4 bottom-5"
      />
      <Image
        src={oldchest}
        alt="a very old chest guarded by an orc"
        className="absolute bottom-0 z-10 w-40 right-1/4"
      />
        </div> */}
      <Image
        src={dungeon}
        alt="a dimly light dungeon during the day"
        className="object-cover h-96 w-96 aspect-square rounded-xl"
      />
      <div className="relative w-96">

      <Image
        src={village2}
        alt="a medieval looking village on a sunny day"
        className="object-cover h-96 w-96 aspect-square rounded-xl"
      />
      <Image
      src={turt}
      alt="a cute turtle man in a village field"
      className="absolute "
      id="turtle"
      />
      </div>

      {/* beholder scene */}
      <div className="relative w-96 ">
        <Image
          src={darkdungeon}
          alt="a dimly light dungeon"
          className="object-cover rounded-xl"
        />
        <Image
          src={beholder}
          alt="a zombie beholder"
          className="absolute left-0 z-10 object-cover opacity-0 top-14"
          id="beholder"
        />
      </div>
      <Image
        src={ancientruins3}
        alt="a dimly light dungeon"
        className="object-cover h-96 w-96 aspect-square rounded-xl"
      />
    </div>
  );
}
