import { useState } from "react";
import ToolTip from "../ToolTip";
import { SetEquipmentProps } from "../../../lib/setEquipmentProps";
import WeaponsTable from "./TableWeapons";
import { simpleMeleeWeapons } from "./weaponsSimple";

export default function EquipDruid({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [armor, setArmor] = useState<string>("Leather Armor");
  const [weapon, setWeapon] = useState<string>("");
  const [pack, setPack] = useState<string>("");
  const [focus, setFocus] = useState<string>("");
  const [selection, setSelection] = useState<Boolean>(false);
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
    "Scale"
  ];

  const equip = async () => {
    const err = [];
    if (!armor) err.push("Please select armor");
    if (!weapon) err.push("Please select a weapon");
    if (!pack) err.push("Please select a pack");
    if (!focus) err.push("Please select a druidic focus");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);

    setEquipment({
      armor: [armor],
      inventory: [pack, focus],
      weapons: [weapon],
    });
    console.log('equipment', equipment)
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
              onChange={(e) => setArmor(e.target.value)}
            />
          </div>
        </div>
        {/* Weapon Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Weapon Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Scimitar (1d6 slashing)
            </label>
            <input
              type="radio"
              name="second-weapon-choice"
              className="radio radio-secondary"
              value="Scimitar"
              onChange={(e) => setWeapon(e.target.value)}
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
              className="radio radio-secondary"
              value="Any Simple Weapon"
              onChange={(e) => {
                setSelection(true);
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
        {/* Pack Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Pack Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Herbalism Kit{" "}
              <ToolTip
                tip="The herbalism kit can be used with the nature proficiency to store useful plants, to create potions of healing, and diagnose illneses"
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="pack-choice"
              className="radio radio-warning"
              value="Herbalism Kit"
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
        {/* Druidic Focus */}
        <div className="flex flex-col w-80 my-4">
          <div className="flex flex-col items-center justify-between">
            <label className="label text-xl almendra w-80">Druidic Focus</label>
            <select
              className="select select-success w-full max-w-xs"
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
