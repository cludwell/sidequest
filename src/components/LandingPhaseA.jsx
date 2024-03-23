import Image from "next/image";
import mimic from "/public/images/mimic.png";
import dungeon2 from "/public/images/dungeon2.jpg";
import dialoguev2 from "/public/images/dialoguev2.gif";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import Logo from "./Logo";
export default function LandingPhaseA() {
  const [scope, animate] = useAnimate();

  const dungeonSelector = "#dungeon";
  const mimicSelector = "#mimic";
  const dialogueSelector = "#dialogue";
  const checkSelectors = () => {
    return document.querySelector(dungeonSelector);
    //   &&
    //   document.querySelector(mimicSelector) &&
    //   document.querySelector(dialogueSelector)
  };

  useEffect(() => {
    const introPhase = async () => {
      if (scope?.current && checkSelectors()) {
        await animate(
          dungeonSelector,
          { opacity: 0, x: -1700 },
          { duration: 0 }
        );
        await animate(dungeonSelector, { opacity: 1, x: 0 }, { duration: 1 });
        await animate(
          mimicSelector,
          { opacity: 0, rotate: 0, scale: 0.1 },
          { duration: 0 }
        );
        await animate(
          mimicSelector,
          { opacity: 1, rotate: 720, scale: 1 },
          { duration: 0.8 }
        );
        animate(
          mimicSelector,
          {
            scale: 1.05,
            x: [20, 0, -20, 0, 10, 0],
            y: [5, 0, -5, 0, 10, 0],
            scaleX: [1, 1.1, 1, 0.9],
          },
          { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
        );
        await animate(
          dialogueSelector,
          { opacity: 1, scale: .5, opacity: 1 },
          { duration: 1 }
        );
      }
    };
    setTimeout(() => introPhase(), 300);
  }, [scope, animate]);

  return (
    <>
      <div ref={scope} className="relative w-full max-w-screen-lg h-96">
        <Logo />
        <Image
          src={dungeon2}
          alt="rpg scene of traversing a dungeon"
          className="absolute object-cover object-right w-full h-full opacity-0 rounded-xl "
          id="dungeon"
        />
        <div id="aperture" className="overflow-hidden rounded-full"></div>
        <Image
          src={mimic}
          alt="stereotypical mimic from dungeons and dragons"
          className="absolute bottom-0 z-10 w-40 opacity-0 left-1/4"
          id="mimic"
        />

        <Image
          src={dialoguev2}
          alt="earthbound dialogue window"
          className="absolute bottom-[-7rem] right-[-7rem] opacity-0 z-20"
          id="dialogue"
        />
      </div>
    </>
  );
}
