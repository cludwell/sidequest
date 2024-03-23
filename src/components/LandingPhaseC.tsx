import { useAnimate } from "framer-motion";
import Image from "next/image";
import woodedpath2 from "/public/scenes/woodedpath2.jpeg";
import owlbear from "/public/images/owlbear.png";
import d20 from '/public/images/d20.png'
import halfing from '/public/images/halfing.jpeg'
import { useEffect } from "react";
export default function LandingPhaseC() {
  const [scope, animate] = useAnimate();

  const owlbearSelector = "#owlbear";

  const checkSelectors = () => {
    return document.querySelector(owlbearSelector);
  };

  useEffect(() => {
    const scene = async () => {
      if (scope?.current && checkSelectors()) {
        await animate(
          owlbearSelector,
          {
            y: 0,
            scale: 0.6,
          },
          { duration: 0 }
        );
        await animate(
          owlbearSelector,
          { y: -400, scale: 0.6 },
          { duration: 3 }
        );
        animate(
            owlbearSelector,
            {
              x: [5, 0, -5, 0, 2, 0],
              y: [-400],
            scale: [.6,.61,.6,.61],
              scaleY: [  1, 1.02,1,1.02,],
              scaleX: [1, 1.05, 1, 0.98],
            },
            { duration: 3, repeat: Infinity, repeatType: "reverse" }
          );
      }
    };
    setTimeout(() => scene(), 300);
  }, [animate, scope]);
  return (
    <div
      ref={scope}
      className="relative flex flex-row justify-between w-full max-w-screen-lg my-24 bg-red-300"
    >
      <div className="overflow-hidden h-96 aspect-square rounded-xl">
        <Image
          src={woodedpath2}
          alt="a scene in which there is an orc"
          className="z-0 object-cover object-bottom w-full h-full"
          id="woodedpath"
        />
        <Image
          src={owlbear}
          alt="a monster appears before the player"
          className="z-10 "
          id="owlbear"
        />
      </div>
      <div className="w-1/2 bg-cyan-400 h-96 ">

{/* first bubble */}
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
        <Image
        src={d20}
        alt="a twenty sided die"
        className=""
        />
    </div>
  </div>
  <div className="chat-bubble">An owl bear blocks the road! What will you do?</div>
</div>

{/* second bubble */}
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">

    </div>
  </div>
  <div className="chat-bubble chat-bubble-primary">Can I roll for perception? Does the owlbear look aggressive, or has he noticed me?</div>
</div>
{/* third bubble */}



{/* fourth bubble */}
      </div>
    </div>
  );
}
