import { useState } from "react";
import ToolTip from "./ToolTip";
import { SetEquipmentProps } from "../../lib/setEquipmentProps";
import WeaponsTable from "./TableWeapons";
import { simpleMeleeWeapons } from "../../lib/_weaponsSimple";

export default function EquipCleric({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [armor, setArmor] = useState<string>("");
  const [weapon1, setWeapon1] = useState<string>("");
  const [weapon2, setWeapon2] = useState<string>("");
  const [selection, setSelection] = useState<Boolean>(false);
  const [symbol, setSymbol] = useState<string>("");
  const [pack, setPack] = useState<string>("");
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
    if (!armor) err.push("Please select armor");
    if (!weapon1) err.push("Please select a weapon");
    if (!pack) err.push("Please select a pack");
    if (!symbol) err.push("Please select a holy");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);

    setEquipment({
      armor: [armor],
      inventory: [pack, symbol],
      weapons: [weapon1, weapon2, "Shield"],
    });
    window.location.href = "#submit";
    // console.log("EQUIPMENT", equipment);
  };
  if (!dndClass || !dndClass?.role) return null

  return (
    <>
      <form className="flex flex-col items-center">
        {/* Armor Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Armor Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">Chain Mail</label>
            <input
              type="radio"
              name="armor-choice"
              className="radio radio-primary"
              value="Chain Mail"
              onChange={(e) => setArmor(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">Scale Mail</label>
            <input
              type="radio"
              name="armor-choice"
              className="radio radio-primary"
              value="Scale Mail"
              onChange={(e) => setArmor(e.target.value)}
            />
          </div>
        </div>
        {/* Weapon Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Weapon Selection 1</label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Mace (1d6 bludgeoning)
            </label>
            <input
              type="radio"
              name="weapon-choice"
              className="radio radio-secondary"
              value="Mace"
              onChange={(e) => setWeapon1(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Warhammer (1d8 versatile)
            </label>
            <input
              type="radio"
              name="weapon-choice"
              className="radio radio-secondary"
              value="Warhammer"
              onChange={(e) => setWeapon1(e.target.value)}
            />
          </div>
        </div>
        {/* Crossbow & Bolts Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Weapon Selection 2</label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Light Crossbow & 20 Bolts
              <ToolTip
                tip="A two-handed ranged weapon that uses bolts as ammunition."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="second-weapon-choice"
              className="radio radio-success"
              value="Light Crossbow & 20 Bolts"
              onChange={(e) => {
                setSelection(false);
                setWeapon2(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Any Simple Weapon
              <ToolTip
                tip="Choose any simple weapon from the equipment list."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="second-weapon-choice"
              className="radio radio-success"
              value="Any Simple Weapon"
              onChange={(e) => {
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
        {/* Always Selected: Shield */}
        <div className="flex flex-col my-4 w-80">
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">Shield</label>
            <input
              type="radio"
              name="shield"
              className="radio radio-info"
              checked
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-col my-4 w-80">
          <div className="flex flex-col items-center justify-between">
            <label className="text-xl label almendra w-80">Holy Symbol</label>
            <select
              className="w-full max-w-xs select select-success"
              onChange={(e) => setSymbol(e.target.value)}
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
        {selection && (
          <WeaponsTable
            title="Simple Weapons"
            weaponsData={simpleMeleeWeapons}
          />
        )}
      </form>

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
