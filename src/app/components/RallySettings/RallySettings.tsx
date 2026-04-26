import "@styles/rallysettings.css"
import { useCallback } from "react";
import RallyItems from "./RallyItems";
import type { RallyOptionKey, RallyOptions, RallyOptionValue, RallyItemsType, StateSetter } from "@/types"
import RallyOptionsTable from "./RallyOptionsTable";
import type { SpeciesInfo } from "@/data/species";

export default function RallySettings({ rallyItemsState, rallyOptionsState, rallyLoomianAbilityList }: {
    rallyItemsState: [RallyItemsType, StateSetter<RallyItemsType>],
    rallyOptionsState: [RallyOptions, StateSetter<RallyOptions>],
    rallyLoomianAbilityList: SpeciesInfo["abilities"]|undefined
}) {
    const [ rallyItems, setRallyItems ] = rallyItemsState;
    const [ rallyOptions, setRallyOptions] = rallyOptionsState;

    const rallyItemOnChange = useCallback((key: "fruit"|"toy"|"totem", value: string) => {
        setRallyItems(prev => {
            return {...prev, [key]: value};
        });
    }, [setRallyItems]);

    const rallyOptionsOnChange = useCallback((key: RallyOptionKey, value: RallyOptionValue) => {
        setRallyOptions(prev => {
            return {...prev, [key]: value};
        });
    }, [setRallyOptions]);

    return (
        <fieldset className="rally-settings">
            <legend>Rally Settings:</legend>
            <RallyItems
                rallyItems={rallyItems}
                onChange={rallyItemOnChange}
            />
            
            <RallyOptionsTable
                rallyOptions={rallyOptions}
                onChange={rallyOptionsOnChange}
                rallyLoomianAbilityList={rallyLoomianAbilityList}
            />
        </fieldset>
    );
}