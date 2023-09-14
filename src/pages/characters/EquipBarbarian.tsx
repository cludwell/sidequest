import { useState } from "react";
import { EquipBarbarianProps } from "../../../lib/equipBarbarianProps";
import { martialMeleeWeapons } from "./weaponsMartial";
import { simpleMeleeWeapons } from "./weaponsSimple";
import WeaponsTable from "./WeaponsTable";
import ToolTip from "../ToolTip";
export default function EquipBarbarian({
  weapon1,
  setWeapon1,
  weapon2,
  setWeapon2,
  weapon3,
  setWeapon3,
  pack,
  setPack,
}: EquipBarbarianProps) {
  const [selection, setSelection] = useState<Boolean>(false);
  setPack("Explorer's Pack");
  setWeapon3("4 Javelins");
  return (
    <>
      <form className="flex flex-col items-center">
        <div className="flex flex-col items-center my-4">
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
        <div className="flex flex-col w-80 my-4">
          <label className="label text-xl almendra">Weapon Selection 2</label>

          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
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
            <label className="label text-xl almendra">Any Simple Weapon</label>

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
                className="select select-success w-full max-w-xs"
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
        <div className="flex flex-col w-80 my-4">
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
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
        <div className="flex flex-col w-80 my-4">
          <div className="flex flex-row items-center justify-between">
            <label className="label text-xl almendra">
              4 Javelins
            </label>
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
    </>
  );
}
