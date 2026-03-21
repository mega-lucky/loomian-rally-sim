import { memo } from "react";
import RallyItemListItem from "./RallyItemListItem";

const RallyItems = memo(function({ rallyItems, onChange }: {
    rallyItems: {fruit: string, toy: string, totem: string},
    onChange?: (key: "fruit"|"toy"|"totem", value: string) => void
}) {
    const fruitItems: [string, string][] = [
        ["stromberry", "Stromberry"],
        ["blumelon", "Blumelon"],
        ["tutifruit", "Tutifruit"],
        ["wonderbean", "Wonderbean"],
        ["jewelfruit", "Jewelfruit"],
    ];
    const toyItems: [string, string][] = [
        ["rubber-toy", "Rubber Toy"],
        ["bouncy-ball", "Bouncy Ball"],
        ["puzzle-cube", "Puzzle Cube"],
        ["yo-yo", "Rally Yo-yo"],
    ];
    const totems: [string, string][] = [
        ["smiling", "Smiling Totem"],
        ["scowling", "Scowling Totem"],
    ];

    return (
        <ul className="rally-items-list">
            <RallyItemListItem
                value={rallyItems.fruit}
                rallyItemKey="fruit"
                items={fruitItems}
                onChange={onChange}
            />
            <RallyItemListItem
                value={rallyItems.toy}
                rallyItemKey="toy"
                items={toyItems}
                onChange={onChange}
            />
            <RallyItemListItem
                value={rallyItems.totem}
                rallyItemKey="totem"
                items={totems}
                onChange={onChange}
            />
        </ul>
    );
});

export default RallyItems;