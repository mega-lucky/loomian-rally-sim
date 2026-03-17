import type { LoomianStat } from "@/types";
import { memo } from "react";
import type { RallyOptions, RallyOptionKey, RallyOptionValue } from "./RallyOptionsTable";

const AutoRallyUPInputs = memo(function({ stat, rallyOptions, onChange, onAutoUPChange }: {
    stat: LoomianStat,
    rallyOptions: RallyOptions,
    onChange?: (key: RallyOptionKey, value: RallyOptionValue) => void
    onAutoUPChange?: (stat: LoomianStat, value: string) => void
}) {
    return (
        <>
            <th>
                <label htmlFor={`auto-ups-${stat.toLowerCase()}-input`}>{stat}</label>
            </th>
            <td>
                <input
                type="checkbox"
                id={`auto-ups-${stat.toLowerCase()}-check`}
                checked={rallyOptions[`auto${stat}up`]}
                onChange={(ev) => onChange?.(`auto${stat}up`, ev.target.checked)}
                />
            </td>
            <td>
                <input
                type="number"
                id={`auto-ups-${stat.toLowerCase()}-input`}
                min={0}
                max={40}
                value={rallyOptions[`auto${stat}upValue`]}
                onChange={(ev) => onAutoUPChange?.(stat, ev.target.value)}
                />
            </td>
        </>
    );
});

export default AutoRallyUPInputs;