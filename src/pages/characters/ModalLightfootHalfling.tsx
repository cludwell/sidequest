import Image from "next/image";
import { useEffect, useState } from "react";
import lightfoot from "../../../public/images/lightfoot9.jpeg";
import HalflingInfo from "./HalflingInfo";
import { SetRaceProps } from "../../../lib/setRaceProps";
import IconDoubleChevron from "../IconDoubleChevron";

declare global {
  interface Window {
    my_modal_15: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ModalLightfootHalfing({ race, setRace }: SetRaceProps) {
  const [expand, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const myModal15 = document.getElementById("my_modal_15");
    if (myModal15) window.my_modal_15 = myModal15;
  }, []);
  const raceLightfoot = async () => {
    setRace({
      race: "Lightfoot Halfling",
      languages: ["Common", "Halfing"],
      vision: "Normal",
      inventory: [],
      spells: [],
      tools: [],
      specialty: [],
    });
    window.my_modal_15.close();
    window.location.href = "#item2";
  };

  return (
    <>
      <button
        className="btn h-fit justify-between font-bold text-lg max-w-screen-xl w-full my-1"
        onClick={() => window.my_modal_15.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={lightfoot}
            className="object-cover aspect-square rounded-md m-2"
            alt="portrait preview"
            width={50}
            height={50}
          />
          Lightfoot Halfling
        </span>
        <IconDoubleChevron />
      </button>
      <dialog id="my_modal_15" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-4xl sm:text-5xl mb-4 almendra text-center">
            Lightfoot Halfling
          </h3>
          <HalflingInfo
            expand={expand}
            setExpanded={setExpanded}
            type={"lightfoot"}
          />
          <div className="flex flex-row justify-center">
            <button
              className="btn btn-success btn-wide m-4"
              onClick={raceLightfoot}
            >
              Select Lightfoot Halfling
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
