import { useState } from "react";
import { martialMeleeWeapons } from "../../lib/_weaponsMartial";
import { simpleMeleeWeapons } from "../../lib/_weaponsSimple";
import WeaponsTable from "./TableWeapons";
import ToolTip from "./ToolTip";
import { SetEquipmentProps } from "../../lib/setEquipmentProps";

export default function EquipBard({
  dndClass,
  race,
  equipment,
  setEquipment,
}: SetEquipmentProps) {
  const [selection, setSelection] = useState<Boolean>(false);
  const [instrument1, setInstrument1] = useState<string>("");
  const [instrument2, setInstrument2] = useState<string>("");
  const [instrument3, setInstrument3] = useState<string>("");
  const [weapon, setWeapon] = useState<string>("");
  const [pack, setPack] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const instruments = [
    "Bagpipes", // Official D&D
    "Birdpipes",
    "Drum", // Official D&D
    "Dulcimer", // Official D&D
    "Flute", // Official D&D
    "Longhorn",
    "Lute", // Official D&D
    "Lyre", // Official D&D
    "Horn", // Official D&D
    "Pan Flute", // Official D&D
    "Shawm", // Official D&D
    "Tantan",
    "Viol", // Official D&D
    "Wargong",
    "Guitar", // Historical
    "Accordion", // Historical
    "Harp", // Historical
    "Mandolin", // Historical
    // "Recorder",        // Historical
    "Fiddle", // Historical
    "Hurdy-Gurdy", // Historical
    "Crumhorn", // Historical
    "Zither", // Historical
    "Psaltery", // Historical
  ];

  const equip = async () => {
    const err = [];
    if (!instrument1) err.push("Please select a primary instrument");
    if (!instrument2) err.push("Please select a secondary instrument");
    if (!instrument3) err.push("Please select a third instrument");
    if (!weapon) err.push("Please select a secondary weapon");
    if (!pack) err.push("Please select a pack");
    if (err.length) {
      setErrors(err);
      return;
    } else setErrors([]);
    setEquipment({
      armor: ["Leather Armor"],
      inventory: [pack, instrument1, instrument2, instrument3],
      weapons: [weapon, "Dagger"],
    });
    window.location.href = "#submit";
    // console.log("equipment", equipment);
  };
  if (!dndClass || !dndClass?.role) return null

  return (
    <>
      <form className="flex flex-col items-center">
        <div className="flex flex-col items-center my-4">
          <label className="text-xl label almendra w-80">
            Instrument Selection
          </label>
          <select
            className="w-full max-w-xs my-2 select select-primary"
            onChange={(e) => setInstrument1(e.target.value)}
          >
            <option disabled selected>
              Instrument 1
            </option>
            {instruments.map((instru, i) => (
              <option key={`instru-option${i}`} value={instru}>
                {instru}
              </option>
            ))}
          </select>
          <select
            className="w-full max-w-xs my-2 select select-secondary"
            onChange={(e) => setInstrument2(e.target.value)}
          >
            <option disabled selected>
              Instrument 2
            </option>
            {instruments.map((instru, i) => (
              <option key={`instru-option${i}`} value={instru}>
                {instru}
              </option>
            ))}
          </select>
          <select
            className="w-full max-w-xs my-2 select select-accent"
            onChange={(e) => setInstrument3(e.target.value)}
          >
            <option disabled selected>
              Instrument 3
            </option>
            {instruments.map((instru, i) => (
              <option key={`instru-option${i}`} value={instru}>
                {instru}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col my-4 w-80">
          <label className="text-xl label almendra">Weapon Selection 2</label>

          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Rapier (1d8 - finesse)
            </label>
            <input
              type="radio"
              name="radio-3"
              className="radio radio-success"
              value={`Rapier`}
              onChange={(e) => {
                setWeapon(e.target.value);
                setSelection(false);
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Longsword (1d8 - versatile)
            </label>
            <input
              type="radio"
              name="radio-3"
              className="radio radio-success"
              value={`Longsword`}
              onChange={(e) => {
                setWeapon(e.target.value);
                setSelection(false);
              }}
            />
          </div>

          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">Any Simple Weapon</label>

            <input
              type="radio"
              name="radio-3"
              className="radio radio-success"
              value={"Any Simple Weapon"}
              onChange={(e) => {
                setWeapon(e.target.value);
                setSelection(true);
              }}
            />
          </div>
          {selection && (
            <>
              <select
                className="w-full max-w-xs select select-success"
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
        <div className="flex flex-col my-4 w-80">
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Diplomat's Pack{" "}
              <ToolTip
                tip="Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="radio-4"
              className="radio radio-warning"
              value={"Diplomat's pack"}
              checked={pack === "Diplomat's pack"}
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Entertainer's Pack{" "}
              <ToolTip
                tip="Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days' rations, a waterskin, and a disguise kit."
                position="font-sans"
              />
            </label>
            <input
              type="radio"
              name="radio-4"
              className="radio radio-warning"
              value={"Entertainer's pack"}
              checked={pack === "Entertainer's pack"}
              onChange={(e) => setPack(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col my-4 w-80">
          <div className="flex flex-row items-center justify-between">
            <label className="text-xl label almendra">
              Leather Armor and Dagger
            </label>
            <input
              type="radio"
              name="radio-5"
              className="radio radio-info"
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
