import { SetExpandedProps } from "../../../lib/setExpanded";

export default function JobAbilityInfo({
  expand,
  setExpanded,
}: SetExpandedProps) {
  return (
    <>
      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="checkbox"
          name="my-accordion-6"
          checked={expand === "ABILITY_SCORE_IMPROVEMENT_4"}
          onChange={() =>
            setExpanded((prev) =>
              prev !== "ABILITY_SCORE_IMPROVEMENT_4"
                ? "ABILITY_SCORE_IMPROVEMENT_4"
                : null
            )
          }
        />
        <div className="collapse-title text-xl font-medium">
          Ability Score Improvement
          <span className="block text-gray-500 text-sm mt-1">
            4th, 8th, 12th, 16th, 19th Level
          </span>
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto ">
          <table className="table my-2 table-zebra bg-base-100 table-xs sm:table-sm md:table-md">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Improvement Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>4th</th>
                  <td>
                    You can increase one ability score of your choice by 2, or
                    you can increase two ability scores of your choice by 1. As
                    normal, you can't increase an ability score above 20 using
                    this feature.
                  </td>
                </tr>
                <tr>
                  <th>12th</th>
                  <td>
                    You can increase one ability score of your choice by 2, or
                    you can increase two ability scores of your choice by 1. As
                    normal, you can't increase an ability score above 20 using
                    this feature.
                  </td>
                </tr>
                <tr>
                  <th>16th</th>
                  <td>
                    You can increase one ability score of your choice by 2, or
                    you can increase two ability scores of your choice by 1. As
                    normal, you can't increase an ability score above 20 using
                    this feature.
                  </td>
                </tr>
                <tr>
                  <th>19th</th>
                  <td>
                    You can increase one ability score of your choice by 2, or
                    you can increase two ability scores of your choice by 1. As
                    normal, you can't increase an ability score above 20 using
                    this feature.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p className="text-sm sm:text-base">            Using the optional feats rule, you can forgo taking this feature to
            take a feat of your choice instead.
          </p>
        </div>
      </div>
    </>
  );
}
