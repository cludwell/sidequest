import { useState } from "react";
import { SetEquipmentProps } from "../../../lib/setEquipmentProps";
import WeaponsTable from "./TableWeapons";
import { martialMeleeWeapons } from "./weaponsMartial";
import { simpleMeleeWeapons } from "./weaponsSimple";
import EquipBarbarian from "./EquipBarbarian";
export default function NewCharEquipment({
  race,
  dndClass,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  // refacotoring useState to use object, will make type and propr mgmt easier
  // this useState will be a draft for of equipment

  const [errors, setErrors] = useState<string[]>([]);

  const confirmEquipment = async () => {
    const err = [];
  };
  return (
    <div className="flex flex-col max-w-screen-xl w-full">
      <h1 className="text-4xl almendra mb-8 text-center">Equipment</h1>
      <div>
        {dndClass === "Barbarian" ? (
          <EquipBarbarian
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : null}

      </div>
    </div>
  );
}
