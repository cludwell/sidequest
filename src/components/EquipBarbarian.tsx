import { useState } from "react";
import { martialMeleeWeapons } from "../../lib/_weaponsMartial";
import { simpleMeleeWeapons } from "../../lib/_weaponsSimple";
import WeaponsTable from "./TableWeapons";
import ToolTip from "./ToolTip";
import { SetEquipmentProps } from "../../lib/setEquipmentProps";

export default function EquipBarbarian({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [selection, setSelection] = useState<Boolean>(false);
  const [weapon1, setWeapon1] = useState<string>("");
  const [weapon2, setWeapon2] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const equip = async () => {
    const err = [];
    if (!weapon1) err.push("Please select a primary weapon");
    if (!weapon2) err.push("Please select a secondary weapon");
    if (err.length) {
      setErrors(err);
      return;
    }
    setEquipment({
      armor: [],
      inventory: ["Explorer's Pack"],
      weapons: ["4 Javelins", weapon1, weapon2],
    });
    window.location.href = "#submit";
    // console.log("EQUIPMENT", equipment);
  };
  if (!dndClass || !dndClass?.role) return null

  return (
    <>
      <form className="flex flex-col items-center">
        <div className="flex flex-col items-center my-4">
          <label className="text-xl label almendra w-80">
            Weapon Selection 1
          </label>
          <select
            className="w-full max-w-xs select select-primary"
            onChange={(e) => setWeapon1(e.target.value)}
          >
            <option disabled selected>
              Suggested - Battleaxe or Long Sword
            </option>
            {Object.entries(martialMeleeWeapons).map(([weap, deets], i) => (
              <option
                key={`weap-option${i}`}
                value={`${weap} - ${deets.damage}`}
              >
                {weap} - {deets.damage}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Weapon Selection 2</label>

          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Two handaxes (1d6 each)
            </label>
            <input
              type="radio"
              name="radio-3"
              className="radio radio-secondary"
              value={`Two handaxes`}
              onChange={(e) => {
                setWeapon2(e.target.value);
                setSelection(false);
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">Any Simple Weapon</label>

            <input
              type="radio"
              name="radio-3"
              className="radio radio-secondary"
              value={"Any Simple Weapon"}
              onChange={(e) => {
                setWeapon2(e.target.value);
                setSelection(true);
              }}
            />
          </div>
          {selection && (
            <>
              <select
                className="w-full max-w-xs select select-success"
                onChange={(e) => setWeapon2(e.target.value)}
              >
                <option disabled selected>
                  Choose Simple Weapon
                </option>
                {Object.entries(simpleMeleeWeapons).map(([weap, deets], i) => (
                  <option
                    key={`weap-option${i}`}
                    value={`${weap} - ${deets.damage}`}
                  >
                    {weap} - {deets.damage}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
        <div className="flex flex-col my-4 w-80">
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Explorer's Pack{" "}
              <ToolTip
                tip="Backpack, bedroll, mess kit, tinderbox, torch (10), rations (10), waterskin, hempen rope"
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="radio-4"
              className="radio radio-accent"
              checked
            />
          </div>
        </div>
        <div className="flex flex-col my-4 w-80">
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">4 Javelins</label>
            <input
              type="radio"
              name="radio-5"
              className="radio radio-warning"
              checked
            />
          </div>
        </div>
      </form>
      {selection && (
        <>
          <WeaponsTable
            title="Simple Weapons"
            weaponsData={simpleMeleeWeapons}
          />
        </>
      )}
      <WeaponsTable title="Martial Weapons" weaponsData={martialMeleeWeapons} />
      <div className="flex flex-row justify-center w-full max-w-screen-xl">
        <button
          className="m-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary"
          onClick={equip}
        >
          Confirm Equipment
        </button>
        <button className="m-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary">
          Finished
        </button>
      </div>
      <div className="toast toast-end">
        {!!errors.length &&
          errors.map((e, i) => (
            <div className="alert alert-error" key={`error${i}`}>
              <span>{e}</span>
            </div>
          ))}
      </div>
    </>
  );
}
