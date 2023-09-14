import { useState } from "react";
import { SetEquipmentProps } from "../../../lib/setEquipmentProps";
import WeaponsTable from "./WeaponsTable";
import { martialMeleeWeapons } from "./weaponsMartial";
import { simpleMeleeWeapons } from "./weaponsSimple";
import EquipBarbarian from "./EquipBarbarian";
export default function NewCharEquipment({
  race,
  dndClass,
  equipment,
  setEquipment
}: SetEquipmentProps) {
  const [weapon1, setWeapon1] = useState<string | null>("");
  const [weapon2, setWeapon2] = useState<string | null>("");
  const [weapon3, setWeapon3] = useState<string | null>("");
  const [pack, setPack] = useState<string | null>("");
  const [errors, setErrors] = useState<string[]>([]);

  const confirmEquipment = async () => {
    const err = [];
    if (!weapon1) err.push("Please select a primary weapon.");
    if (!weapon2) err.push("Please select a secondary weapon.");
    if (!weapon3) err.push("Please select a third weapon.");
    if (!pack) err.push("Please select a pack to begin with.");
    setErrors(err);
    if (errors.length) return;
    setEquipment({
      weapons: [weapon1, weapon2, weapon3],
      
    })
  };
  return (
    <div className="flex flex-col max-w-screen-xl w-full">
      <h1 className="text-4xl almendra mb-8 text-center">Equipment</h1>
      <div>
        {dndClass === "Barbarian" ? (
          <EquipBarbarian
            weapon1={weapon1}
            setWeapon1={setWeapon1}
            weapon2={weapon2}
            setWeapon2={setWeapon2}
            weapon3={weapon3}
            setWeapon3={setWeapon3}
            pack={pack}
            setPack={setPack}
          />
        ) : null}
        <div className="flex flex-row max-w-screen-xl w-full justify-center">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8"
            // onClick={}
          >
            Confirm Equipment
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary m-8">
            Finished
          </button>
        </div>
      </div>
    </div>
  );
}
