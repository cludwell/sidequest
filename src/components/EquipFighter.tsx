import { useState } from "react";
import ToolTip from "./ToolTip";
import { SetEquipmentProps } from "../../lib/setEquipmentProps";
import WeaponsTable from "./TableWeapons";
import { martialMeleeWeapons } from "../../lib/_weaponsMartial";

export default function EquipFighter({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [armor, setArmor] = useState<string>("Chain Mail");
  const [weaponA, setWeaponA] = useState<string>("");
  const [weaponB, setWeaponB] = useState<string>("");
  const [weaponC, setWeaponC] = useState<string>("");
  const [weaponD, setWeaponD] = useState<string>(
    "A light crossbow and 20 bolts"
  );
  const [selection, setSelection] = useState<Boolean>(false);
  const [pack, setPack] = useState<string>("Dungeoneer's Pack");
  const [errors, setErrors] = useState<string[]>([]);

  const equip = () => {
    const err = [];
    if (!armor) err.push("Please select armor");
    if (
      (!weaponA && !selection) ||
      (selection && (!weaponB || !weaponC)) ||
      !weaponD
    )
      err.push("Please make all weapon selections");

    if (!pack) err.push("Please select a pack");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);

    setEquipment({
      armor: [armor.includes("Leather") ? "Leather Armor" : "Chain Mail"],
      inventory: [
        pack,
        armor.includes("Leather") ? "Longbow and 20 Arrows" : "",
      ],
      weapons: [weaponA, weaponB, weaponC, weaponD],
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
              checked={armor === "Chain Mail"}
              onChange={(e) => setArmor(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Leather Armor, Longbow, and 20 Arrows
            </label>
            <input
              type="radio"
              name="armor-choice"
              className="radio radio-primary"
              value="Leather Armor, Longbow, and 20 Arrows"
              onChange={(e) => setArmor(e.target.value)}
            />
          </div>
          {/* You can add more armors as options here */}
        </div>

        {/* Primary Weapon Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">
            Primary Weapon Selection
          </label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              One Martial Weapon And Shield
            </label>
            <input
              type="radio"
              name="second-weapon-choice"
              className="radio radio-secondary"
              value="Martial Weapon and Shield"
              onChange={(e) => {
                setSelection(false);
              }}
              checked={!selection}
            />
          </div>
          {!selection && (
            <>
              <select
                className="w-full max-w-xs my-2 select select-secondary"
                onChange={(e) => setWeaponA(e.target.value)}
              >
                <option disabled selected>
                  Choose Martial Weapon
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
            </>
          )}
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Two Martial Weapons
            </label>
            <input
              type="radio"
              name="second-weapon-choice"
              className="radio radio-secondary"
              value="Two Martial Weapons"
              onChange={(e) => {
                setSelection(true);
              }}
            />
          </div>
          {selection && (
            <>
              <select
                className="w-full max-w-xs my-2 select select-secondary"
                onChange={(e) => setWeaponB(e.target.value)}
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
                onChange={(e) => setWeaponC(e.target.value)}
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
          <label className="text-xl label almendra">
            Secondary Weapon Selection
          </label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              A light crossbow and 20 bolts
            </label>
            <input
              type="radio"
              name="third-weapon-choice"
              className="radio radio-success"
              value="A light crossbow and 20 bolts"
              checked={weaponD === "A light crossbow and 20 bolts"}
              onChange={(e) => setWeaponD(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">Two handaxes</label>
            <input
              type="radio"
              name="third-weapon-choice"
              className="radio radio-success"
              value="2 handaxes"
              onChange={(e) => setWeaponD(e.target.value)}
            />
          </div>
        </div>

        {/* Pack Selection */}
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Pack Selection</label>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Dungeoneer's Pack
              <ToolTip
                tip="Includes an assortment of utility items for dungeon exploration."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="pack-choice"
              className="radio radio-warning"
              value="Dungeoneer's Pack"
              checked={pack === "Dungeoneer's Pack"}
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Explorer's Pack
              <ToolTip
                tip="Includes an assortment of utility items for dungeon exploration."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="pack-choice"
              className="radio radio-warning"
              value="Explorer's Pack"
              checked={pack === "Dungeoneer's Pack"}
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
          {/* Add other packs as options if necessary */}
        </div>
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
      <WeaponsTable title="Martial Weapons" weaponsData={martialMeleeWeapons} />

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
