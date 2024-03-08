import { WeaponsProps } from "../../lib/weapons";

export default function WeaponsTable({ title, weaponsData }: WeaponsProps) {
  if (!title || !weaponsData) return null
  return (
    <>
      <div className="w-full max-w-screen-xl my-1 border collapse collapse-plus border-base-300 bg-base-200">
        <input type="checkbox" />
        <div className="text-xl font-medium collapse-title">{title}</div>
        <div className="collapse-content collapse-arrow">
          <div className="overflow-x-auto">
          <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
              {/* Head */}
              <thead>
                <tr>
                  <th>Weapon</th>
                  <th>Cost</th>
                  <th>Damage</th>
                  <th>Weight</th>
                  <th>Properties</th>
                </tr>
              </thead>
              {/* Body */}
              <tbody>
                {Object.entries(weaponsData).map(
                  ([weaponName, details]) => (
                    <tr key={weaponName}>
                      <td>{weaponName}</td>
                      <td>{details.cost}</td>
                      <td>{details.damage}</td>
                      <td>{details.weight}</td>
                      <td>{details.properties.join(", ")}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
