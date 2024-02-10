import { useState } from "react";
import ToolTip from "./ToolTip";
import { SetEquipmentProps } from "../../lib/setEquipmentProps";
import { simpleMeleeWeapons } from "../../lib/_weaponsSimple";
import WeaponsTable from "./TableWeapons";
export default function EquipRanger({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [armor, setArmor] = useState<string>("Leather Armor");
  const [weaponA, setWeaponA] = useState<string>("Two Shortswords");
  const [weaponB, setWeaponB] = useState<string>("");
  const [selection, setSelection] = useState<Boolean>(false);
  const [pack, setPack] = useState<string>("Dungeoneer's Pack");
  const [extraEquip, setExtraEquip] = useState<string>(
    "Longbow and a quiver of 20 arrows"
  );
  const [errors, setErrors] = useState<string[]>([]);

  const equip = async () => {
    const err = [];
    if (!armor) err.push("Please select an armor");
    if (!weaponA) err.push("Please select a primary weapon");
    if (selection && !weaponB) err.push("Please select a secondary weapon");
    if (!pack) err.push("Please select a pack");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);

    setEquipment({
      armor: [armor],
      inventory: [pack, extraEquip],
      weapons: [weaponA, weaponB],
    });
    window.location.href = "#submit";
    // console.log("EQUIPMENT", equipment);
  };
  if (!dndClass || !dndClass?.role) return null

  return (
    <>
      <form className="flex flex-col items-center">
        {/* Primary Weapon Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Armor Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Leather Armor
              <ToolTip tip="AC: 11, Weight: 10" position="font-sans" />
            </label>
            <input
              type="radio"
              name="weapon-choice1"
              className="radio radio-primary"
              checked={armor === "Leather Armor"}
              value="Leather Armor"
              onChange={(e) => setArmor(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Scale Mail{" "}
              <ToolTip
                tip="AC: 14, Stealth: Disadvantage, Weight: 45"
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="weapon-choice1"
              className="radio radio-primary"
              value="Scale Mail"
              checked={armor === "Scale Mail"}
              onChange={(e) => setArmor(e.target.value)}
            />
          </div>
        </div>
        {/* Secondary Weapon Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Weapon Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Two Shortswords (1d6)
            </label>
            <input
              type="radio"
              name="weapon-choice2"
              className="radio radio-secondary"
              value="Two Shortswords"
              checked={!selection}
              onChange={(e) => {
                setSelection(false);
                setWeaponB(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Two Simple Melee Weapons
            </label>
            <input
              type="radio"
              name="weapon-choice2"
              className="radio radio-secondary"
              value="Two Simple Melee Weapons"
              onChange={(e) => setSelection(true)}
            />
          </div>
          {selection && (
            <>
              <select
                className="select select-secondary w-full max-w-xs my-2"
                onChange={(e) => setWeaponA(e.target.value)}
              >
                <option disabled selected>
                  Choose First Weapon
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
              <select
                className="select select-secondary w-full max-w-xs my-2"
                onChange={(e) => setWeaponB(e.target.value)}
              >
                <option disabled selected>
                  Choose Second Weapon
                </option>
                {Object.entries(simpleMeleeWeapons).map(([weap, deets], i) => (
                  <option
                    key={`weap-option2${i}`}
                    value={`${weap} - ${deets.damage}`}
                  >
                    {weap} - {deets.damage}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
        {/* Pack Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Pack Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Dungeoneer's Pack
              <ToolTip
                tip="Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="pack-choice"
              className="radio radio-success"
              checked={pack == "Dungeoneer's Pack"}
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
              className="radio radio-success"
              value="Explorer's Pack"
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-80 my-4">
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Longbow and 20 Arrows
            </label>
            <input
              type="radio"
              name="longbow-choice"
              className="radio radio-warning"
              checked
              value="Dungeoneer's Pack"
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
        </div>
      </form>
      {selection && (
        <WeaponsTable
          weaponsData={simpleMeleeWeapons}
          title="Simple Melee Weapons"
        />
      )}
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
