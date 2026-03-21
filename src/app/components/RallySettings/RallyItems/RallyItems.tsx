import { memo } from "react";
import RallyItemListItem from "./RallyItemListItem";

const RallyItems = memo(function({ rallyItems, onChange }: {
    rallyItems: {fruit: string, toy: string, totem: string},
    onChange?: (key: "fruit"|"toy"|"totem", value: string) => void
}) {
    const fruitItems: [string, string, string][] = [
        ["stromberry", "Stromberry", "Rally Loomians that share at least one Unique Point with each Rallying Loomian."],
        ["blumelon", "Blumelon", "Rally Loomians that share at least two Unique Points with each Rallying Loomian."],
        ["tutifruit", "Tutifruit", "Rally Loomians that share at least three Unique Points with each Rallying Loomian."],
        ["wonderbean", "Wonderbean", "Rally Loomians that share at least four Unique Points with the Rally Leader."],
        ["jewelfruit", "Jewelfruit", "Rally Loomians that share three to five perfect Unique Points with any of the Rallying Loomians."],
    ];
    const toyItems: [string, string, string][] = [
        ["rubber-toy", "Rubber Toy", "Rally Loomians that share a personality trait with the Rally Leader or Assistant."],
        ["bouncy-ball", "Bouncy Ball", "Rally Loomians that share a positive personality trait with the Rally Leader."],
        ["puzzle-cube", "Puzzle Cube", "Rally Loomians that share a positive personality trait with the Rally Assistant."],
        ["yo-yo", "Yo-yo", "Rally Loomians that have the exact same personality as the Rally Leader."],
    ];
    const totems: [string, string, string][] = [
        ["smiling", "Smiling Totem", "Rally Loomians with two positive personality traits and one strong negative trait."],
        ["scowling", "Scowling Totem", "Rally Loomians with a strong positive personality trait and two negative traits."],
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