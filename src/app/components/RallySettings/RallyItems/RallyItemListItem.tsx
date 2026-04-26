import { memo } from "react";

const RallyItemListItem = memo(function({ value, rallyItemKey, items, onChange }: {
    value: string,
    rallyItemKey: "fruit"|"toy"|"totem",
    items: [value: string, name: string, description: string][],
    onChange?: (key: "fruit"|"toy"|"totem", value: string) => void
}) {
    return (
        <li>
            <img src="none" alt="none" />
            <label htmlFor={`rally-${rallyItemKey}-select`}>
                Rally {rallyItemKey[0].toUpperCase() + rallyItemKey.slice(1)}:
            </label>
            <select
                id={`rally-${rallyItemKey}-select`}
                onChange={(ev) => onChange?.(rallyItemKey, ev.target.value)}
                value={value}
            >
                <option value="">(none)</option>
                {
                    items.map(rally_item =>
                        <option 
                            value={rally_item}
                            key={JSON.stringify(rally_item)}
                            title={rally_item[2]}
                        >
                            {rally_item[1]}
                        </option>
                    )
                }
            </select>
        </li>
    );
});

export default RallyItemListItem;