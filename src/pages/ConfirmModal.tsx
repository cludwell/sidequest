import { useEffect } from "react";
import IconRightArrow from "../components/icons/IconRightArrow";
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
        className="btn hidden"
        onClick={() => window.my_modal_confirm.showModal()}
      >
        <IconRightArrow />
      </button>
      <dialog id="my_modal_confirm" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-3xl almendra text-center">Steel yourself</h3>
          <p className="py-4 text-center">Do you need to make other selections?</p>
          <div className="flex flex-col">

          {char && (
            <Link href={"/scenarios"} className="btn btn-info m-4">
              Scenarios
            </Link>
          )}
          {scene && (
            <Link href={"/characters"} className="btn btn-accent m-4">
              Characters
            </Link>
          )}
          <Link href={"/dungoenmaster"} className="btn btn-primary m-4">Adventure Now!</Link>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
