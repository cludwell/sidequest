import Image from "next/image";
import { useEffect, useState } from "react";
import lightfoot from "../../public/images/lightfoot9.jpeg";
import HalflingInfo from "./HalflingInfo";
import { SetRaceProps } from "../../lib/setRaceProps";
import IconDoubleChevron from "./icons/IconDoubleChevron";

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
        className="justify-between w-full max-w-screen-xl my-1 text-lg font-bold btn h-fit"
        onClick={() => window.my_modal_15.showModal()}
      >
        <span className="flex flex-row items-center">
          <Image
            src={lightfoot}
            className="object-cover m-2 rounded-md aspect-square"
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
          <h3 className="mb-4 text-4xl font-bold text-center sm:text-5xl almendra">
            Lightfoot Halfling
          </h3>
          <HalflingInfo
            expand={expand}
            setExpanded={setExpanded}
            type={"lightfoot"}
          />
          <div className="flex flex-row justify-center">
            <button
              className="m-4 btn btn-success btn-wide"
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
