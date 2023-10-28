export default function FaithTable({ deities }: Deities) {
  if (!deities) return null;
  return (
    <div className="collapse collapse-plus border border-base-300 bg-base-200 max-w-screen-xl w-full my-1">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">Faiths</div>
      <div className="collapse-content collapse-arrow">
        <div className="overflow-x-auto">
          <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
            {/* Head */}
            <thead>
              <tr>
                <th>Deity</th>
                <th className="before:content-['Align'] sm:before:content-['Alignment']"></th>
                <th>Domains</th>
                <th>Symbol</th>
                  <th>Cliff Notes</th>
              </tr>
            </thead>
            {/* Body */}
            <tbody>
              {deities.map((deity, index) => (
                <tr key={deity[index]}>
                  {/* <th>{index + 1}</th> */}
                  {deity.map((column, colIndex) => (
                    <td
                      key={`td${column}${colIndex}`}
                      className={`${colIndex % 5 === 0 ? "font-bold" : ""}`}
                    >
                      {column}
                    </td>
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
