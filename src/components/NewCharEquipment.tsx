import { SetEquipmentProps } from "../../lib/setEquipmentProps";
import EquipBarbarian from "./EquipBarbarian";
import EquipBard from "./EquipBard";
import EquipCleric from "./EquipCleric";
import EquipDruid from "./EquipDruid";
import EquipFighter from "./EquipFighter";
import EquipMonk from "./EquipMonk";
import EquipPaladin from "./EquipPaladin";
import EquipRanger from "./EquipRanger";
import EquipRogue from "./EquipRogue";
import EquipMagicCaster from "./EquipMagicCaster";
export default function NewCharEquipment({
  race,
  dndClass,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  // refacotoring useState to use object, will make type and propr mgmt easier
  // this useState will be a draft for of equipment

  return (
    <div className="flex flex-col max-w-screen-xl w-full">
      <h1 className="text-4xl almendra mb-8 text-center">
        {dndClass && dndClass?.role ? dndClass.role : null} Equipment
      </h1>
      <div>
        {dndClass?.role === "Barbarian" ? (
          <EquipBarbarian
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : dndClass?.role === "Bard" ? (
          <EquipBard
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : dndClass?.role === "Cleric" ? (
          <EquipCleric
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : dndClass?.role === "Druid" ? (
          <EquipDruid
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : dndClass?.role === "Fighter" ? (
          <EquipFighter
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : dndClass?.role === "Monk" ? (
          <EquipMonk
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : dndClass?.role === "Paladin" ? (
          <EquipPaladin
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : dndClass?.role === "Ranger" ? (
          <EquipRanger
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : dndClass?.role === "Rogue" ? (
          <EquipRogue
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : dndClass?.role === "Sorcerer" ||
          dndClass?.role === "Warlock" ||
          dndClass?.role === "Wizard" ? (
          <EquipMagicCaster
            dndClass={dndClass}
            race={race}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        ) : (
          <h1 className="almendra text-2xl text-center">
            Please select a class to start this step
          </h1>
        )}
      </div>
    </div>
  );
}
