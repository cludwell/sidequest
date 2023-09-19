import { col } from "sequelize";
import { deities } from "./DeitiesInfo";
export default function FaithTable({ deities }: Deities) {
  return (
    <div className="collapse collapse-plus border border-base-300 bg-base-200 max-w-screen-xl w-full my-1">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        Faiths
      </div>
      <div className="collapse-content collapse-arrow">
        <div className="overflow-x-auto">
          <table className="table table-zebra table-xs bg-base-100">
            {/* Head */}
            <thead>
              <tr>
                {/* <th></th> */}
                <th>Deity</th>
                <th>Alignment</th>
                <th>Domains</th>
                <th>Symbol</th>
                <th>Cliff Notes</th>
              </tr>
            </thead>
            {/* Body */}
            <tbody>
              {deities.map((deity, index) => (
                <tr key={deity[0]}>
                  {/* <th>{index + 1}</th> */}
                  {deity.map((column, colIndex) => (

                    <td key={`td${column}${colIndex}`}>{column}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}