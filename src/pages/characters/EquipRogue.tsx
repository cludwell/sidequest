import { useState } from "react";
import ToolTip from "../ToolTip";
import { SetEquipmentProps } from "../../../lib/setEquipmentProps";

export default function EquipRogue({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [weaponA, setWeaponA] = useState<string>("Shortsword");
  const [weaponB, setWeaponB] = useState<string>("Shortsword");
  const [pack, setPack] = useState<string>("Dungeoneer's Pack");

  const [errors, setErrors] = useState<string[]>([]);

  const equip = async () => {
    const err = [];
    if (!weaponA) err.push("Please select a primary weapon");
    if (!weaponB) err.push("Please select a secondary weapon");
    if (!pack) err.push("Please select a pack");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);

    setEquipment({
      armor: ["Leather Armor"],
      inventory: [pack],
      weapons: [weaponA, weaponB],
    });
    console.log("ranger", equipment);
  };

  return (
    <>
      <form className="flex flex-col items-center">
        {/* Primary Weapon Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Weapon Selection 1</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">Shortsword (1d6)</label>
            <input
              type="radio"
              name="weapon-choice1"
              className="radio radio-primary"
              value="Shortsword"
              checked={weaponA === "Shortsword"}
              onChange={(e) => setWeaponA(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Shortbow & 20 Arrows (1d6)
            </label>
            <input
              type="radio"
              name="weapon-choice1"
              className="radio radio-primary"
              value="Shortbow and quiver of 20 arrows"
              onChange={(e) => setWeaponA(e.target.value)}
            />
          </div>
        </div>
        {/* Secondary Weapon Selection */}
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Weapon Selection 2</label>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">Shortsword (1d6)</label>
            <input
              type="radio"
              name="weapon-choice2"
              className="radio radio-secondary"
              value="Shortsword"
              checked={weaponB === "Shortsword"}
              onChange={(e) => setWeaponB(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Rapier (1d8 finesse)
            </label>
            <input
              type="radio"
              name="weapon-choice2"
              className="radio radio-secondary"
              value="Rapier"
              onChange={(e) => setWeaponB(e.target.value)}
            />
          </div>
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
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              Burglar's Pack
              <ToolTip
                tip="Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="pack-choice"
              className="radio radio-success"
              value="Burglar's Pack"
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-80 my-4">
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">Leather Armor</label>
            <input
              type="radio"
              name="armor-choice"
              className="radio radio-warning"
              checked
              value="Leather Armor"
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
