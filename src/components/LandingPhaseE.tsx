import Image from "next/image";
import { useAnimate, useInView } from "framer-motion";
import orc from "/public/landing/orc.png";
import creature from "/public/landing/creature.png";
import beholder from "/public/landing/beholder.png";
import dragonborn from "/public/landing/dragonborn.png";
import elf from "/public/landing/elf.png";
import kobold from "/public/landing/kobold.png";
import turt from "/public/landing/turt.png";
import dangerousCave from "/public/scenes/dangerouscave.jpeg";
import village2 from "/public/scenes/village2.jpeg";
import darkdungeon from "/public/scenes/darkdungeon.jpeg";
import ancientruins3 from "/public/scenes/ancientruins3.jpeg";
import bridgecrossing from "/public/scenes/bridgecrossing.jpeg";
import oldchest from "/public/landing/oldchest.png";
import { useEffect, useRef } from "react";
export default function LandingPhaseE() {
  const [scope, animate] = useAnimate();

  const isInView = useInView(scope);
  const ref = useRef(null)
  const beholderSelector = "#beholder";
  const turtleSelector = "#turtle";
  const koboldSelector = "#kobold";
  const elfSelector = "#elf";
  const creatureSelector = "#creature";
  const koboldSceneSelector = "#koboldScene";
  const turtleSceneSelector = "#turtleScene";
  const beholderSceneSelector = "#beholderScene";
  const villageSceneSelector = "#villageScene";
  const bubbleSelector = "#bubble";
  const checkSelectors = () => {
    return (
      document.querySelector(beholderSelector) &&
      document.querySelector(turtleSelector) &&
      document.querySelector(elfSelector) &&
      document.querySelector(creatureSelector) &&
      document.querySelector(koboldSceneSelector) &&
      document.querySelector(turtleSceneSelector) &&
      document.querySelector(beholderSceneSelector) &&
      document.querySelector(villageSceneSelector) &&
      document.querySelector(bubbleSelector) &&
      document.querySelector(koboldSelector)
    );
  };

  useEffect(() => {
    const startScenes = async () => {
      if (scope?.current && isInView && checkSelectors()) {
        // initial animation states
        animate(
          elfSelector,
          { scaleX: [1, 1.02, 1, 1.02], scaleY: [0.98, 1, 1.02, 1] },
          { duration: 3, repeat: Infinity, repeatType: "reverse" }
        );
        animate(
          creatureSelector,
          { scaleX: [-1.02, -1, -1.02, -1], scaleY: [1, 1.02, 1, 0.98] },
          { duration: 3, repeat: Infinity, repeatType: "reverse" }
        );
        animate(
          koboldSelector,
          { scaleX: [1, 1.02, 1, 1.02], scaleY: [0.98, 1, 1.02, 1] },
          { duration: 3, repeat: Infinity, repeatType: "reverse" }
        );
        animate(
          turtleSelector,
          { scaleX: [1, 1.02, 1, 1.02], scaleY: [0.98, 1, 1.02, 1] },
          { duration: 3, repeat: Infinity, repeatType: "reverse" }
        );
        animate(
          beholderSelector,
          {
            x: [0, 5, 10, 5, 0, -5, -10, -5, 0],
            y: [0, 5, 10, 5, 0, -5, -10],
            rotate: [-24, 24],
          },
          { duration: 3, repeat: Infinity, repeatType: "reverse" }
        );
        animate(
          beholderSceneSelector,
          { x: [-400], opacity: 0 },
          { duration: 0 }
        );
        animate(
          turtleSceneSelector,
          { opacity: 0, y: [-500] },
          { duration: 0 }
        );
        animate(villageSceneSelector, { x: 400, opacity: 0 }, { duration: 0 });
        animate(elfSelector, { x: [-200] }, { duration: 0 });
        animate(creatureSelector, { x: [200] }, { duration: 0 });

        // kobold scene animation
        await animate(
          koboldSceneSelector,
          { opacity: 0, x: [-500] },
          { duration: 0 }
        );
        await animate(
          koboldSceneSelector,
          { opacity: 1, x: [-500, 0] },
          { duration: 5 }
        );

        // turtle scene animation

        await animate(
          turtleSceneSelector,
          { opacity: 1, y: [-500, 0] },
          { duration: 5 }
        );

        await animate(
          turtleSelector,
          { scale: 0.7, x: 40, y: -300 },
          { duration: 5 }
        );

        // beholder scene

        await animate(
          beholderSceneSelector,
          { x: [-400, 0], opacity: 1 },
          { duration: 5 }
        );
        await animate(
          beholderSelector,
          { scale: 0.01, opacity: 0 },
          { duration: 1 }
        );
        await animate(
          beholderSelector,
          { scale: 0.6, opacity: 1 },
          { duration: 4 }
        );

        // village scene
        await animate(
          villageSceneSelector,
          { x: [400, 0], opacity: 1 },
          { duration: 5 }
        );
        animate(elfSelector, { x: [-200, 0] }, { duration: 3 });
        animate(creatureSelector, { x: [200, 0] }, { duration: 3 });
        await animate(bubbleSelector, { y: 50, opacity: 1 }, { duration: 2 });
      }
    };
    setTimeout(() => startScenes(), 300);
  }, [scope, animate, isInView]);
  return (
    <div
      className="relative flex flex-row flex-wrap justify-around w-full max-w-screen-lg gap-4 my-24 overflow-hidden rounded-xl"
      ref={scope}
    >
      <div className="relative h-96 w-96 translate-x-[-500]" id="koboldScene">
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
      <div className="relative overflow-hidden w-96 h-96" id="turtleScene">
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
      <div className="relative w-96 h-96" id="beholderScene">
        <Image
          src={darkdungeon}
          alt="a dimly light dungeon"
          className="object-cover h-full rounded-xl"
        />
        <Image
          src={beholder}
          alt="a zombie beholder"
          className="absolute top-0 left-0 z-10 object-cover opacity-0"
          id="beholder"
        />
      </div>
      <div className="relative overflow-hidden w-96 h-96" id="villageScene">
        <Image
          src={village2}
          alt="a medieval looking village on a sunny day"
          className="object-cover h-96 w-96 aspect-square rounded-xl"
        />
        <Image
          src={elf}
          alt="an elf wearing robes"
          className="absolute z-10 left-10 w-36 top-10"
          id="elf"
        />
        <Image
          src={creature}
          alt="a humanoid creature drinking coffee"
          className="absolute right-[-5rem] w-64 z-10 top-10"
          id="creature"
        />
      </div>
      <div
        className="absolute z-30 opacity-0 chat chat-start top-1/4 drop-shadow-xl"
        id="bubble"
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            {/* <Image src={d20} alt="a twenty sided die" className="" /> */}
          </div>
        </div>
        <div className="text-xl eagle chat-bubble chat-bubble-accent">
          Are you ready to begin your adventure?
        </div>
      </div>
    </div>
  );
}
