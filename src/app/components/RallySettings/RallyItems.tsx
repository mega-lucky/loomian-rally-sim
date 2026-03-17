import { memo } from "react";

const RallyItems = memo(function({ rallyItems, onChange }: {
    rallyItems: {fruit: string, toy: string, totem: string},
    onChange?: (key: "fruit"|"toy"|"totem", value: string) => void
}) {
    return (
        <ul className="rally-items-list">
            <li>
                <img src="none" alt="none" />
                <label htmlFor="rally-fruit-select">
                    Rally Fruit:
                </label>
                <select
                id="rally-fruit-select"
                onChange={(ev) => onChange?.("fruit", ev.target.value)}
                value={rallyItems.fruit}
                >
                    <option value="">(none)</option>
                    <option value="tutifruit">Tutifruit</option>
                </select>
            </li>
            <li>
                <img src="none" alt="none" />
                <label htmlFor="rally-toy-select">
                    Rally Toy:
                </label>
                <select
                id="rally-toy-select"
                onChange={(ev) => onChange?.("toy", ev.target.value)}
                value={rallyItems.toy}
                >
                    <option value="">(none)</option>
                    <option value="bouncing-ball">Bouncing Ball</option>
                    <option value="yo-yo">Rally Yo-yo</option>
                </select>
            </li>
            <li>
                <img src="none" alt="none" />
                <label htmlFor="rally-totem-select">
                    Rally Totem:
                </label>
                <select
                id="rally-totem-select"
                onChange={(ev) => onChange?.("fruit", ev.target.value)}
                value={rallyItems.totem}
                >
                    <option value="">(none)</option>
                    <option value="smiling">Smiling Totem</option>
                    <option value="scowling">Scowling Totem</option>
                </select>
            </li>
        </ul>
    );
});

export default RallyItems;