import { useState } from "react";
import ToolTip from "./ToolTip";
import { SetEquipmentProps } from "../../lib/setEquipmentProps";
import { simpleMeleeWeapons } from "../../lib/_weaponsSimple";
import { simpleRangedWeapons } from "../../lib/_weaponsSimpleRanged";
import WeaponsTable from "./TableWeapons";
export default function EquipMagicCaster({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [weaponA, setWeaponA] = useState<string>(
   dndClass && dndClass?.role === "Wizard" ? "Quarterstaff" : "Light Crossbow & 20 bolts"
  );
  const [weaponB, setWeaponB] = useState<string>("");
  const [selectionA, setSelectionA] = useState<Boolean>(false);
  const [arcaneFocus, setArcaneFocus] = useState<string>("Component Pouch");
  const [selectionB, setSelectionB] = useState<Boolean>(false);
  const [pack, setPack] = useState<string>("Dungeoneer's Pack");
  const [errors, setErrors] = useState<string[]>([]);

  const arcaneFocusArray = [
    "Crystal",
    "Orb",
    "Rod",
    "Staff",
    "Wand",
    // Homebrew or Flavorful additions
    "Enchanted Tattoo",
    "Runestone",
    "Bound Spirit",
    "Eldritch Chain",
    "Mystic Gem",
    "Prism",
    "Sacred Totem",
    "Bizarre Trinket",
    "Shadow Lantern",
    "Ethereal Quill",
  ];

  const equip = async () => {
    const err = [];
    if (!weaponA) err.push("Please select a primary weapon");
    if (!weaponB && dndClass.role === "Warlock")
      err.push("Please select a secondary weapon");
    if (selectionB && arcaneFocus === "Component Pouch")
      err.push("Please select an arcane focus");
    if (!pack) err.push("Please select a pack");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);

    setEquipment({
      weapons: [
        weaponA,
        dndClass && dndClass?.role === "Wizard" ? '' : "Dagger",
        dndClass && dndClass?.role === "Wizard" ? '' : "Dagger",
      ],
      armor: [dndClass && dndClass?.role === "Warlock" ? "Leather Armor" : ''],
      inventory: [pack, arcaneFocus, dndClass && dndClass?.role === 'Wizard' ? 'Spellbook' : ''],
    });
    window.location.href = "#submit";
  };
  if (!dndClass || !dndClass?.role) return null
  return (
    <>
      <form className="flex flex-col items-center">
        {/* Primary Weapon Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">
            Primary Weapon Selection
          </label>
          {dndClass && dndClass?.role === "Wizard" ? (
            <>
              <div className="flex flex-row items-center justify-between">
                <label className="text-xl label almendra">Quarterstaff</label>
                <input
                  type="radio"
                  name="weapon-choice1"
                  className="radio radio-primary"
                  value="Quarterstaff"
                  checked={weaponA === "Quarterstaff"}
                  onChange={(e) => setWeaponA(e.target.value)}
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <label className="text-xl label almendra">Dagger</label>
                <input
                  type="radio"
                  name="weapon-choice1"
                  className="radio radio-primary"
                  value="Dagger"
                  checked={weaponA === "Dagger"}
                  onChange={(e) => setWeaponA(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-row items-center justify-between">
                <label className="text-xl label almendra">
                  Light Crossbow & 20 bolts
                </label>
                <input
                  type="radio"
                  name="weapon-choice1"
                  className="radio radio-primary"
                  value="Light Crossbow & 20 bolts"
                  checked={!selectionA}
                  onChange={(e) => {
                    setSelectionA(false);
                    setWeaponA(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <label className="text-xl label almendra">
                  Any simple weapon
                </label>
                <input
                  type="radio"
                  name="weapon-choice1"
                  className="radio radio-primary"
                  value="Any simple weapon"
                  onChange={(e) => setSelectionA(true)}
                />
              </div>
            </>
          )}
          {selectionA && (
            <select
              className="w-full max-w-xs my-2 select select-secondary"
              onChange={(e) => setWeaponA(e.target.value)}
            >
              <option disabled selected>
                Choose First Weapon
              </option>
              {Object.entries({
                ...simpleMeleeWeapons,
                ...simpleRangedWeapons,
              }).map(([weap, deets], i) => (
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
        {/* Arcane Focus Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Arcane Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">Component Pouch</label>
            <input
              type="radio"
              name="arcane-choice"
              className="radio radio-secondary"
              value="Component Pouch"
              checked={!selectionB}
              onChange={(e) => {
                setSelectionB(false);
                setArcaneFocus(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">Arcane Focus</label>
            <input
              type="radio"
              name="arcane-choice"
              className="radio radio-secondary"
              value="Arcane Focus"
              onChange={(e) => setSelectionB(true)}
            />
          </div>
          {selectionB && (
            <select
              className="w-full max-w-xs my-2 select select-secondary"
              onChange={(e) => setArcaneFocus(e.target.value)}
            >
              <option disabled selected>
                Choose Arcane Focus
              </option>
              {arcaneFocusArray.map((foc, i) => (
                <option key={`weap-option${i}`} value={foc}>
                  {foc}
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
              Dungeoneer's Pack
              <ToolTip
                tip="Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="pack-choice"
              className="radio radio-success"
              value="Dungeoneer's Pack"
              checked={pack == "Dungeoneer's Pack"}
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
          {dndClass && dndClass?.role === "Sorcerer" ? (
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
                className="radio radio-success"
                value="Explorer's Pack"
                onChange={(e) => setPack(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-row items-center justify-between">
              <label className="text-xl label almendra">
                Scholar's Pack
                <ToolTip
                  tip="Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife."
                  position="font-sans"
                />
              </label>
              <input
                type="radio"
                name="pack-choice"
                className="radio radio-success"
                value="Scholar's Pack"
                onChange={(e) => setPack(e.target.value)}
              />
            </div>
          )}
        </div>
        {dndClass && dndClass?.role === "Sorcerer" ? (
          <div className="flex flex-col my-4 w-80">
            {/* <label className="text-xl label almendra">Pack Selection</label> */}
            <div className="flex flex-row items-center justify-between">
              <label className="text-xl label almendra">Two Daggers</label>
              <input
                type="radio"
                name="dagger-choice"
                className="radio radio-warning"
                checked
              />
            </div>
          </div>
        ) : dndClass && dndClass?.role === "Warlock" ? (
          <div className="flex flex-col my-4 w-80">
            <label className="text-xl label almendra">
              Leather Armor, Simple Weapon, & 2 Daggers
            </label>
            <div className="flex flex-row items-center justify-between">
              <select
                className="w-full max-w-xs my-2 select select-warning"
                onChange={(e) => setWeaponB(e.target.value)}
              >
                <option disabled selected>
                  Choose Second Weapon
                </option>
                {Object.entries({
                  ...simpleMeleeWeapons,
                  ...simpleRangedWeapons,
                }).map(([weap, deets], i) => (
                  <option
                    key={`weap-option${i}`}
                    value={`${weap} - ${deets.damage}`}
                  >
                    {weap} - {deets.damage}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <div className="flex flex-col my-4 w-80">
            {/* <label className="text-xl label almendra">Pack Selection</label> */}
            <div className="flex flex-row items-center justify-between">
              <label className="text-xl label almendra">A Spellbook</label>
              <input
                type="radio"
                name="dagger-choice"
                className="radio radio-warning"
                checked
              />
            </div>
          </div>
        )}
        {selectionA || dndClass && dndClass?.role === "Warlock" ? (
          <WeaponsTable
            weaponsData={{ ...simpleMeleeWeapons, ...simpleRangedWeapons }}
            title="Simple Weapons"
          />
        ) : null}
      </form>
      <div className="flex flex-row justify-center w-full max-w-screen-xl">
        <button
          className="m-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary"
          onClick={equip}
        >
          Confirm Equipment
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
