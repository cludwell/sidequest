import { useState } from "react";
import ToolTip from "./ToolTip";
import { SetEquipmentProps } from "../../lib/setEquipmentProps";
import { martialMeleeWeapons } from "../../lib/_weaponsMartial";
import WeaponsTable from "./TableWeapons";
import { simpleMeleeWeapons } from "../../lib/_weaponsSimple";
export default function EquipPaladin({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [weaponA, setWeaponA] = useState<string>("");
  const [weaponB, setWeaponB] = useState<string>("");
  const [weaponC, setWeaponC] = useState<string>("Five Javelins (1d6)");
  const [selectionA, setSelectionA] = useState<Boolean>(false);
  const [selectionB, setSelectionB] = useState<Boolean>(false);
  const [pack, setPack] = useState<string>("Priest's Pack");
  const [holySymbol, setHolySymbol] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const holySymbolForms = [
    "Amulet",
    "Emblazoned Shield",
    "Reliquary",
    "Rod",
    "Staff",
    "Ring",
    "Wearable Patch",
    "Tattoo",
    "Censer",
    "Tabard or Vestment",
  ];

  const equip = async () => {
    const err = [];
    if (!weaponA) err.push("Please select a primary weapon");
    if (!weaponC) err.push("Please select a secondary weapon");
    if (!pack) err.push("Please select a pack");
    if (!holySymbol) err.push("Please select a holy symbol");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);

    setEquipment({
      armor: ["Chain Mail"],
      inventory: [pack, holySymbol],
      weapons: [weaponA, weaponB, weaponC, "Shield"],
    });
    window.location.href = "#submit";
    // console.log("EQUIPMENT", equipment);
  };
  if (!dndClass || !dndClass?.role) return null

  return (
    <>
      <form className="flex flex-col items-center">
        {/* Weapon Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Weapon Selection 1</label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Martial Weapon & Shield
            </label>
            <input
              type="radio"
              name="weapon-choice"
              className="radio radio-secondary"
              value="Martial Weapon"
              checked={!selectionA}
              onChange={(e) => {
                setSelectionA(false);
                setWeaponA(e.target.value);
              }}
            />
          </div>
          {!selectionA && (
            <select
              className="w-full max-w-xs my-2 select select-secondary"
              onChange={(e) => setWeaponA(e.target.value)}
            >
              <option disabled selected>
                Choose First Weapon
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
          )}
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Two Martial Weapons
            </label>
            <input
              type="radio"
              name="weapon-choice"
              className="radio radio-secondary"
              value="Martial Weapon"
              onChange={(e) => setSelectionA(true)}
            />
          </div>
          {selectionA && (
            <>
              <select
                className="w-full max-w-xs my-2 select select-secondary"
                onChange={(e) => setWeaponA(e.target.value)}
              >
                <option disabled selected>
                  Choose First Weapon
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
              <select
                className="w-full max-w-xs my-2 select select-secondary"
                onChange={(e) => setWeaponB(e.target.value)}
              >
                <option disabled selected>
                  Choose Second Weapon
                </option>
                {Object.entries(martialMeleeWeapons).map(([weap, deets], i) => (
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
        {/* Secondary Weapon or Shield Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Weapon Selection 2</label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Five Javelins (1d6)
            </label>
            <input
              type="radio"
              name="second-weapon-choice"
              className="radio radio-success"
              value="Five Javelins (1d6)"
              checked={!selectionB}
              onChange={(e) => {
                setSelectionB(false);
                setWeaponC(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Simple Melee Weapon
            </label>
            <input
              type="radio"
              name="second-weapon-choice"
              className="radio radio-success"
              value="Simple Melee Weapon"
              onChange={(e) => setSelectionB(true)}
            />
          </div>
          {selectionB && (
            <select
              className="w-full max-w-xs my-2 select select-success"
              onChange={(e) => setWeaponC(e.target.value)}
            >
              <option disabled selected>
                Choose Weapon
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
          )}
        </div>
        {/* Pack Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Pack Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Priest's Pack
              <ToolTip
                tip="Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="pack-choice"
              className="radio radio-warning"
              value="Priest's Pack"
              checked={pack === "Priest's Pack"}
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
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
        {/* Holy Symbol Selection */}
        <div className="flex flex-col my-4 w-80">
          <div className="flex flex-col items-center justify-between">
            <label className="text-xl label almendra w-80">
              Chain Mail & A Holy Symbol
            </label>
            <select
              className="w-full max-w-xs select select-error"
              onChange={(e) => setHolySymbol(e.target.value)}
            >
              <option disabled selected>
                Choose Holy Symbol
              </option>
              {holySymbolForms.map((sym, i) => (
                <option key={`symbol-option${i}`} value={`${sym}`}>
                  {sym}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <WeaponsTable weaponsData={martialMeleeWeapons} title="Martial Weapons" />
      {selectionB && (
        <WeaponsTable
          weaponsData={simpleMeleeWeapons}
          title="Simple Melee Weapons"
        />
      )}
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
