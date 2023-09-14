import { useState } from "react";
import { SetEquipmentProps } from "../../../lib/setEquipmentProps";
import WeaponsMartial from "./WeaponsMartial";
import { martialMeleeWeapons } from "./weaponsMartial";
import { simpleMeleeWeapons } from "./weaponsSimple";

export default function NewCharEquipment({
  race,
  dndClass,
}: SetEquipmentProps) {
  const [weapon1, setWeapon1] = useState<string>("");
  const [weapon2, setWeapon2] = useState<string>("");
  return (
    <div className="flex flex-col max-w-screen-xl w-full">
      <h1 className="text-4xl almendra mb-8 text-center">Equipment</h1>
      <div>
        {dndClass === "Barbarian" ? (
          <>
            <form className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <label className="label text-xl almendra w-80">
                  Weapon Selection 1
                </label>
                <select
                  className="select select-primary w-full max-w-xs"
                  onChange={(e) => setWeapon1(e.target.value)}
                >
                  <option disabled selected>
                    Suggested - Battleaxe or Long Sword
                  </option>
                  {Object.entries(martialMeleeWeapons).map(
                    ([weap, deets], i) => (
                      <option
                        key={`weap-option${i}`}
                        value={`${weap} - ${deets.damage}`}
                      >
                        {weap} - {deets.damage}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="flex flex-col w-80">
                <div className="flex flex-row items-center">
                  <label className="label text-xl almendra">Two handaxes</label>
                  <input
                    type="radio"
                    name="radio-3"
                    className="radio radio-secondary"
                    value={`Two handaxes`}
                    onChange={(e) => setWeapon2(e.target.value)}
                  />
                </div>
                <div className="flex flex-row items-center">
                  <label className="label text-xl almendra">
                    Any Simple Weapon
                  </label>

                  <input
                    type="radio"
                    name="radio-3"
                    className="radio radio-secondary"
                    value={'Any Simple Weapon'}
                    onChange={(e) => setWeapon2(e.target.value)}
                  />
                  {}
                </div>
              </div>
            </form>
            {weapon2 === 'Any Simple Weapon' && (
              <>
              <WeaponsMartial martialMeleeWeapons={simpleMeleeWeapons} />
              </>
            )}
            <WeaponsMartial martialMeleeWeapons={martialMeleeWeapons} />
          </>
        ) : null}
      </div>
    </div>
  );
}
