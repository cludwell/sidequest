import { useState } from "react";
import ToolTip from "../ToolTip";
import { SetEquipmentProps } from "../../../lib/setEquipmentProps";
import WeaponsTable from "./TableWeapons";
import { simpleMeleeWeapons } from "../../../lib/_weaponsSimple";
import { simpleRangedWeapons } from "../../../lib/_weaponsSimpleRanged";
export default function EquipDruid({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [weaponA, setWeaponA] = useState<string>("Scimitar");
  const [weaponB, setWeaponB] = useState<string>("Wooden Shield");
  const [selectionB, setSelectionB] = useState<Boolean>(false);
  const [focus, setFocus] = useState<string>("");
  const [selectionA, setSelectionA] = useState<Boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const druidicFocusForms = [
    "Sprig of mistletoe",
    "Totem",
    "Wooden staff",
    "Yew wand",
    "Any other item",
    "Medallion of deity/spirit",
    "Crystal",
    "Sacred Seed",
    "Feather",
    "Scale",
  ];

  const equip = async () => {
    const err = [];
    if (!weaponA) err.push("Please select a primary weapon");
    if (!weaponB) err.push("Please select a shield or weapon");
    if (!focus) err.push("Please select a druidic focus");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);

    setEquipment({
      armor: [
        "Leather Armor",
        weaponB === "Wooden Shield" ? "Wooden Shield" : "",
      ],
      inventory: ["Explorer's Pack", focus],
      weapons: [weaponA, weaponB === "Wooden Shield" ? "" : weaponB],
    });
    window.location.href = "#submit";
    console.log("equipment", equipment);
  };

  return (
    <>
      <form className="flex flex-col items-center">
        {/* Armor Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Armor Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">Leather Armor</label>
            <input
              type="radio"
              name="armor-choice"
              className="radio radio-primary"
              value="Leather Armor"
              checked
            />
          </div>
        </div>
        {/* Weapon Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Weapon Selection 1</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Scimitar (1d6 slashing)
            </label>
            <input
              type="radio"
              name="first-weapon-choice"
              className="radio radio-secondary"
              value="Scimitar"
              checked={!selectionA}
              onChange={(e) => {
                setSelectionA(false);
                setWeaponA(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Any Simple Melee Weapon
              <ToolTip
                tip="Choose any simple weapon from the equipment list."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="first-weapon-choice"
              className="radio radio-secondary"
              value="Any Simple Weapon"
              onChange={(e) => {
                setSelectionA(true);
              }}
            />
          </div>
          {selectionA && (
            <>
              <select
                className="select select-secondary w-full max-w-xs"
                onChange={(e) => setWeaponA(e.target.value)}
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
          <label className="label text-xl almendra">Weapon Selection 2</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">A Wooden Shield</label>
            <input
              type="radio"
              name="second-weapon-choice"
              className="radio radio-success"
              value="Wooden Shield"
              checked={!selectionB}
              onChange={(e) => {
                setSelectionB(false);
                setWeaponA(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
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
                setSelectionB(true);
              }}
            />
          </div>
          {selectionB && (
            <>
              <select
                className="select select-success w-full max-w-xs"
                onChange={(e) => setWeaponB(e.target.value)}
              >
                <option disabled selected>
                  Choose Any Simple Weapon
                </option>
                {Object.entries({
                  ...simpleRangedWeapons,
                  ...simpleMeleeWeapons,
                }).map(([weap, deets], i) => (
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
        {/* Pack Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Pack Selection</label>

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
              checked
              // onChange={(e) => setPack(e.target.value)}
            />
          </div>
        </div>
        {/* Druidic Focus */}
        <div className="flex flex-col w-80 my-4">
          <div className="flex flex-col items-center justify-between">
            <label className="label text-xl almendra w-80">Druidic Focus</label>
            <select
              className="select select-error w-full max-w-xs"
              onChange={(e) => setFocus(e.target.value)}
            >
              <option disabled selected>
                Choose Druidic Focus
              </option>
              {druidicFocusForms.map((foc, i) => (
                <option key={`focus-option${i}`} value={`${foc}`}>
                  {foc}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* TODO: Add any additional equipment options if necessary */}
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
      {selectionA && (
        <WeaponsTable
          weaponsData={simpleMeleeWeapons}
          title="Simple Melee Weapons"
        />
      )}
      {selectionB && (
        <WeaponsTable
          weaponsData={{ ...simpleRangedWeapons, ...simpleMeleeWeapons }}
          title="All Simple Melee Weapons (Including Ranged)"
        />
      )}
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
