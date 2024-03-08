import { useEffect } from "react";
import IconRightArrow from "./icons/IconRightArrow";
import { useSelector } from "react-redux";
import { selectedScenarioState } from "@/store/scenarios";
import { selectedCharacterState } from "@/store/characters";
import Link from "next/link";

declare global {
  interface Window {
    my_modal_confirm: any; // Replace `any` with the type of your modal if possible
  }
}

export default function ConfirmModal() {
  const scene = useSelector(selectedScenarioState);
  const char = useSelector(selectedCharacterState);

  useEffect(() => {
    const myModalConfirm = document.getElementById("my_modal_confirm");
    if (myModalConfirm) window.my_modal_confirm = myModalConfirm;
  }, []);

  return (
    <>
      <button
        className="hidden btn"
        onClick={() => window.my_modal_confirm.showModal()}
      >
        <IconRightArrow />
      </button>
      <dialog id="my_modal_confirm" className="modal">
        <div className="modal-box">
          <h3 className="text-3xl font-bold text-center almendra">Steel yourself</h3>
          <p className="py-4 text-center">Do you need to make other selections?</p>
          <div className="flex flex-col">

          {char && (
            <Link href={"/scenarios"} className="m-4 btn btn-info">
              Scenarios
            </Link>
          )}
          {scene && (
            <Link href={"/characters"} className="m-4 btn btn-accent">
              Characters
            </Link>
          )}
          <Link href={"/dungoenmaster"} className="m-4 btn btn-primary">Adventure Now!</Link>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
