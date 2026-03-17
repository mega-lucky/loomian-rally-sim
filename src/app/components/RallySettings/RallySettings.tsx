import "@styles/rallysettings.css"
import { useState } from "react";
import RallyItems from "./RallyItems";
import RallyOptionsTable, { type RallyOptionKey, type RallyOptions, type RallyOptionValue } from "./RallyOptionsTable";

export default function RallySettings() {
    const [ rallyItems, setRallyItems ] = useState({fruit: "", toy: "", totem: ""});
    const [ rallyOptions, setRallyOptions] = useState<RallyOptions>({
        gleamCharm: false,
        gleamBoost: false,
        abilityCharm: false,
        autoRally: false,
        autoGleaming: false,
        autoAbility: "",
        autoUPs: false,
        autoHPup: false, autoENRup: false,
        autoMATKup: false, autoMDEFup: false,
        autoRATKup: false, autoRDEFup: false,
        autoSPEup: false,
        autoHPupValue: 40, autoENRupValue: 40,
        autoMATKupValue: 40, autoMDEFupValue: 40,
        autoRATKupValue: 40, autoRDEFupValue: 40,
        autoSPEupValue: 40,
    });

    const rallyItemOnChange = (key: "fruit"|"toy"|"totem", value: string) => {
        setRallyItems(prev => {
            return {...prev, [key]: value};
        });
    }

    const rallyOptionsOnChange = (key: RallyOptionKey, value: RallyOptionValue) => {
        setRallyOptions(prev => {
            return {...prev, [key]: value};
        });
    }

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
            />
        </fieldset>
    );
}