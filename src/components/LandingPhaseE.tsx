import Image from "next/image";
import { useAnimate } from "framer-motion";
import orc from "/public/landing/orc.png";
import creature from "/public/landing/creature.png";
import beholder from "/public/landing/beholder.png";
import dragonborn from "/public/landing/dragonborn.png";
import kobold from "/public/landing/kobold.png";
import turt from "/public/landing/turt.png";
import dangerousCave from "/public/scenes/dangerouscave.jpeg";
import village2 from "/public/scenes/village2.jpeg";
import darkdungeon from "/public/scenes/darkdungeon.jpeg";
import ancientruins3 from "/public/scenes/ancientruins3.jpeg";
import bridgecrossing from "/public/scenes/bridgecrossing.jpeg";
import oldchest from "/public/landing/oldchest.png";
import { useEffect } from "react";
export default function LandingPhaseE() {
  const [scope, animate] = useAnimate();

  const beholderSelector = "#beholder";
  const turtleSelector = "#turtle";
  const koboldSelector = "#kobold"
  const checkSelectors = () => {
    return (
      document.querySelector(beholderSelector) &&
      document.querySelector(turtleSelector) &&
      document.querySelector(koboldSelector)
    );
  };

  useEffect(() => {
    const startScenes = async () => {
      if (scope?.current && checkSelectors()) {

        animate(
            koboldSelector,
            { scaleX: [1, 1.02, 1, 1.02], scaleY: [0.98, 1, 1.02, 1] },
            { duration: 3, repeat: Infinity, repeatType: "reverse" }
          );
        // turtle
        animate(
          turtleSelector,
          { scaleX: [1, 1.02, 1, 1.02], scaleY: [0.98, 1, 1.02, 1] },
          { duration: 3, repeat: Infinity, repeatType: "reverse" }
        );
        await animate(
          turtleSelector,
          { scale: 0.7, x: 40, y: -300 },
          { duration: 5 }
        );

        // beholder scene
        animate(
          beholderSelector,
          { x: [0, 5, 10, 5, 0, -5, -10, -5, 0], y: [0, 5, 10, 5, 0, -5, -10], rotate: [-24,24] },
          { duration: 3, repeat: Infinity, repeatType: "reverse" }
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

      <div className="relative h-96 w-96">
        <Image
          src={dangerousCave}
          alt="a dimly light dungeon during the day"
          className="object-cover aspect-square rounded-xl"
        />
        <Image
          src={kobold}
          alt="a dog like lizard monster"
          className="absolute z-10 w-40 bottom-1/4 left-1/3"
          id="kobold"
        />

      </div>
      <div className="relative overflow-hidden w-96 h-96 " id="turtleScene">
        <Image
          src={ancientruins3}
          alt="a dimly light dungeon"
          className="object-cover h-96 w-96 aspect-square rounded-xl"
        />
        <Image
          src={turt}
          alt="a cute turtle man in a village field"
          className="absolute hue-rotate-15 "
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
        src={village2}
        alt="a medieval looking village on a sunny day"
        className="object-cover h-96 w-96 aspect-square rounded-xl"
      />
    </div>
  );
}
