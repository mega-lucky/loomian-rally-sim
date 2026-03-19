import { memo } from "react";
import type { RallyOptionKey, RallyOptionValue, RallyOptions } from "@/types";

const RallyCheckOption = memo(function({ rallyOptions, rallyOptionKey, onChange }: {
    rallyOptions: RallyOptions,
    rallyOptionKey: RallyOptionKey,
    onChange?: (key: RallyOptionKey, value: RallyOptionValue) => void
}) {
    return (
        <>
            <th>
                <label htmlFor={`${rallyOptionKey}-checkbox`}>{
                    rallyOptionKey
                        .replace(/([a-z])([A-Z])/g, "$1 $2")
                        .replace(/(^|\s)\S/g, match => match.toUpperCase())
                }:</label>
            </th>
            <td>
                <input
                    type="checkbox"
                    id={`${rallyOptionKey}-checkbox`}
                    checked={rallyOptions[rallyOptionKey] as boolean}
                    onChange={(ev) => onChange?.(rallyOptionKey, ev.target.checked)}
                />
            </td>
        </>
    );
});

export default RallyCheckOption;