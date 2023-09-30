import { useState } from "react";
import ToolTip from "../ToolTip";
import { SetEquipmentProps } from "../../../lib/setEquipmentProps";
import { simpleMeleeWeapons } from "./_weaponsSimple";
export default function EquipMonk({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [weapon, setWeapon] = useState<string>("Shortsword");
  const [pack, setPack] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [selection, setSelection] = useState<Boolean>(false);

  const equip = async () => {
    const err = [];
    if (!weapon) err.push("Please select a weapon");
    if (!pack) err.push("Please select a pack");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);

    setEquipment({
      inventory: [pack, "10 Darts"],
      weapons: [weapon],
      armor: []
    });
    window.location.href = "#submit";
    console.log("EQUIPMENT", equipment);  };

  return (
    <>
      <form className="flex flex-col items-center">
        {/* Weapon Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Weapon Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">Shortsword</label>
            <input
              type="radio"
              name="weapon-choice"
              className="radio radio-secondary"
              value="Shortsword"
              checked={!selection}
              onChange={(e) => setWeapon(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">Any Simple Weapon</label>
            <input
              type="radio"
              name="weapon-choice"
              className="radio radio-secondary"
              value="Any Simple Weapon"
              onChange={(e) => {
                setSelection(true)
            }}
            />
          </div>
          {selection && (
            <>
              <select
                className="select select-secondary w-full max-w-xs"
                onChange={(e) => setWeapon(e.target.value)}
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

        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Pack Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Dungeoneer's Pack{" "}
              <ToolTip
                tip="Includes Backpack, Crowbar, Hammer, 10 pitons, 10 torches, Tinderbox, 10 days of rations, Waterskin, 50 feet of hempen rope"
                position="font-sans"
              />
              {" "}
            </label>
            <input
              type="radio"
              name="pack-choice"
              className="radio radio-warning"
              value="Dungeoneer's Pack"
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Explorer's Pack
              <ToolTip
                tip="Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="pack-choice"
              className="radio radio-warning"
              value="Explorer's Pack"
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
        </div>

        {/* Always Selected: 10 Darts */}
        <div className="flex flex-col w-80 my-4">
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">10 Darts</label>
            <input
              type="radio"
              name="darts"
              className="radio radio-info"
              checked
              readOnly
            />
          </div>
        </div>
      </form>

      <div className="flex flex-row max-w-screen-xl w-full justify-center">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary m-8"
          onClick={equip}
        >
          Confirm Equipment
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary m-8">
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
