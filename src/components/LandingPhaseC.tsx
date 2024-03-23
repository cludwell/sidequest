import { useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import woodedpath2 from "/public/scenes/woodedpath2.jpeg";
import owlbear from "/public/images/owlbear.png";
import d20 from "/public/images/d20.png";
import bard from "/public/images/bard.png";
import { useEffect } from "react";
export default function LandingPhaseC() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope)
  const owlbearSelector = "#owlbear";
  const bubble1Selector = "#bubble1";
  const bubble2Selector = "#bubble2";
  const bubble3Selector = "#bubble3";
  const bubble4Selector = "#bubble4";
  const bubble5Selector = "#bubble5";
  const checkSelectors = () => {
    return (
      document.querySelector(owlbearSelector) &&
      document.querySelector(bubble1Selector) &&
      document.querySelector(bubble2Selector) &&
      document.querySelector(bubble3Selector) &&
      document.querySelector(bubble4Selector) &&
      document.querySelector(bubble5Selector)
    );
  };

  useEffect(() => {
    const scene = async () => {
      if (scope?.current && isInView &&checkSelectors()) {
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
            scale: [0.6, 0.61, 0.6, 0.61],
            scaleY: [1, 1.02, 1, 1.02],
            scaleX: [1, 1.05, 1, 0.98],
          },
          { duration: 3, repeat: Infinity, repeatType: "reverse" }
        );
        // bubble 1 DM
        await animate(bubble1Selector, { y: 50, opacity: 1 }, { duration: 0 });
        await animate(bubble1Selector, { y: 0, opacity: 1 }, { duration: 20 });
        await animate(bubble1Selector, { y: -50, opacity: 0 }, { duration: 1 });
        // bubble 2 PLAYER
        await animate(bubble2Selector, { y: 50, opacity: 1 }, { duration: 0 });
        await animate(bubble2Selector, { y: 0, opacity: 1 }, { duration: 15 });
        await animate(bubble2Selector, { y: -50, opacity: 0 }, { duration: 1 });
        // bubble 3 DM
        await animate(bubble3Selector, { y: 50, opacity: 1 }, { duration: 0 });
        await animate(bubble3Selector, { y: 0, opacity: 1 }, { duration: 20 });
        await animate(bubble3Selector, { y: -50, opacity: 0 }, { duration: 1 });
        // bubble 4 PLAYER
        await animate(bubble4Selector, { y: 50, opacity: 1 }, { duration: 0 });
        await animate(bubble4Selector, { y: 0, opacity: 1 }, { duration: 15 });
        await animate(bubble4Selector, { y: -50, opacity: 0 }, { duration: 1 });
        // bubble 5 DM
        await animate(bubble5Selector, { y: 50, opacity: 1 }, { duration: 0 });
        await animate(bubble5Selector, { y: 0, opacity: 1 }, { duration: 15 });
        await animate(bubble5Selector, { y: -50, opacity: 0 }, { duration: 1 });
      }
    };
    scene()
    // setTimeout(() => scene(), 50);
  }, [animate, scope, isInView]);
  return (
    <div
      ref={scope}
      className="relative flex flex-row justify-between w-full max-w-screen-lg my-24 "
    >
      <div className="overflow-hidden h-96 aspect-square rounded-xl drop-shadow-xl">
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
      <div className="relative w-1/2 rounded-xl bg-base-300 drop-shadow-xl">
        {/* first bubble */}
        <div className="absolute opacity-0 chat chat-start" id="bubble1">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image src={d20} alt="a twenty sided die" className="" />
            </div>
          </div>
          <div className="text-sm chat-bubble">
            Suddenly, you come to a clearing, and there, in the middle of the
            road, stands an owlbear. It's a massive creature, with the body of a
            bear, covered in thick fur, and the head of an owl, complete with
            large, piercing eyes and a sharp beak. It seems to have caught wind
            of your presence and turns its gaze towards you, letting out a low
            growl. What do you do?
          </div>
        </div>

        {/* second bubble */}
        <div className="absolute opacity-0 chat chat-end" id="bubble2">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <div className="text-sm chat-bubble chat-bubble-primary">
            Can I roll for perception? Does the owlbear look aggressive, or has
            he noticed me?
          </div>
        </div>
        {/* third bubble */}
        <div className="absolute opacity-0 chat chat-start " id="bubble3">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image src={d20} alt="a twenty sided die" className="" />
            </div>
          </div>
          <div className="text-sm chat-bubble">
            With a roll of 13 on your perception check, you keenly observe the
            owlbear's behavior. Despite its imposing appearance, you notice a
            subtlety in its stance. While it seems alert and aware of your
            presence, it doesn't appear overtly aggressive at the moment. Its
            body language suggests a cautious curiosity rather than immediate
            hostility. As you continue to observe, you notice small twitches in
            its movements, indicating a slight nervousness. It seems uncertain
            of your intentions and is perhaps wary of a potential threat. What
            would you like to do next?
          </div>
        </div>
        {/* fourth bubble */}
        <div className="absolute opacity-0 chat chat-end " id="bubble4">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <div className="text-sm chat-bubble chat-bubble-primary">
            I'll roll for performance, my character plays a calming song.
          </div>
        </div>

        {/* fifth bubble */}
        <div className="absolute opacity-0 chat chat-start " id="bubble5">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image src={d20} alt="a twenty sided die" className="" />
            </div>
          </div>
          <div className="text-sm chat-bubble">
            Excellent choice! Your halfling bard, recognizing the tension in the
            air, swiftly reaches for their instrument—a finely crafted lute.
            With practiced fingers, you begin to play a soothing melody, filling
            the forest clearing with gentle notes that dance on the wind.
          </div>
        </div>
        <Image
          src={bard}
          alt="a representation of the character"
          className="absolute transform scale-50 translate-x-1/2 translate-y-1/2 bottom-5 right-10"
        />
      </div>
    </div>
  );
}
