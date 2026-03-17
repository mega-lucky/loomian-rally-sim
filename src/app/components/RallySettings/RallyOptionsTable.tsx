import { memo } from "react";
import { type LoomianStat, type uniquePointValue } from "@/types";

export interface RallyOptions {
    gleamCharm: boolean,
    gleamBoost: boolean,
    abilityCharm: boolean,
    autoRally: boolean,
    autoGleaming: boolean,
    autoAbility: string,
    autoUPs: boolean,
    autoHPup: boolean,
    autoENRup: boolean,
    autoMATKup: boolean,
    autoMDEFup: boolean,
    autoRATKup: boolean,
    autoRDEFup: boolean,
    autoSPEup: boolean,
    autoHPupValue: uniquePointValue,
    autoENRupValue: uniquePointValue,
    autoMATKupValue: uniquePointValue,
    autoMDEFupValue: uniquePointValue,
    autoRATKupValue: uniquePointValue,
    autoRDEFupValue: uniquePointValue,
    autoSPEupValue: uniquePointValue,
}
export type RallyOptionKey = keyof RallyOptions;
export type RallyOptionValue = RallyOptions[RallyOptionKey];

const RallyOptionsTable = memo(function({ rallyOptions, onChange }: {
    rallyOptions: RallyOptions,
    onChange?: (key: RallyOptionKey, value: RallyOptionValue) => void
}) {
    const { autoRally } = rallyOptions;
    const onAutoUPChange = (stat: LoomianStat, value: string) => {
        let numberVal = Number(value.match(/^\d+/));
        if (numberVal > 40) numberVal = 40;
        else if (numberVal < 0) numberVal = 0;
        
        onChange?.(`auto${stat}upValue`, numberVal as uniquePointValue);
    }

    return (
        <table className="rally-table-options">
            <thead>
                <tr>
                    <th colSpan={2}>Boosts & Charms</th>
                    <th colSpan={2}>Auto Rally</th>
                    <th colSpan={6}>Auto UPs</th>
                </tr>
            </thead>
            <colgroup>
                <col span={4} />
                <col span={6} style={{
                    visibility: rallyOptions.autoRally && rallyOptions.autoUPs ? undefined : "collapse"
                }}/>
            </colgroup>
            <tbody>
                <tr>
                    <th>
                        <label htmlFor="gleam-charm-checkbox">Gleam Charm:</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="gleam-charm-checkbox"
                        checked={rallyOptions.gleamCharm}
                        onChange={(ev) => onChange?.("gleamCharm", ev.target.checked)}
                        />
                    </td>

                    <th>
                        <label htmlFor="auto-rally-checkbox">Auto Rally:</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-rally-checkbox"
                        checked={rallyOptions.autoRally}
                        onChange={(ev) => onChange?.("autoRally", ev.target.checked)}
                        />
                    </td>

                    <th>
                        <label htmlFor="auto-ups-hp-input">HP</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-ups-hp-check"
                        checked={rallyOptions.autoHPup}
                        onChange={(ev) => onChange?.("autoHPup", ev.target.checked)}
                        />
                    </td>
                    <td>
                        <input
                        type="number"
                        id="auto-ups-hp-input"
                        min={0}
                        max={40}
                        value={rallyOptions.autoHPupValue}
                        onChange={(ev) => onAutoUPChange("HP", ev.target.value)}
                        />
                    </td>

                    <th>
                        <label htmlFor="auto-ups-enr-input">ENR</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-ups-enr-check"
                        checked={rallyOptions.autoENRup}
                        value={rallyOptions.autoENRupValue}
                        onChange={(ev) => onChange?.("autoENRup", ev.target.checked)}
                        />
                    </td>
                    <td>
                        <input
                        type="number"
                        id="auto-ups-enr-input"
                        min={0}
                        max={40}
                        value={rallyOptions.autoENRupValue}
                        onChange={(ev) => onAutoUPChange("ENR", ev.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label htmlFor="gleam-boost-checkbox">Gleam Boost:</label>
                    </th>
                    <td>
                        <input type="checkbox" id="gleam-boost-checkbox"
                        checked={rallyOptions.gleamBoost}
                        onChange={(ev) => onChange?.("gleamBoost", ev.target.checked)}
                        />
                    </td>
                    
                    <th>
                        <label htmlFor="auto-gleam-checkbox" className={autoRally ? undefined : "hidden"}>Gleaming?</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-gleam-checkbox"
                        className={autoRally ? undefined : "hidden"}
                        checked={rallyOptions.autoGleaming}
                        onChange={(ev) => onChange?.("autoGleaming", ev.target.checked)}
                        />
                    </td>

                    <th>
                        <label htmlFor="auto-ups-matk-input">MATK</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-ups-matk-check"
                        checked={rallyOptions.autoMATKup}
                        onChange={(ev) => onChange?.("autoMATKup", ev.target.checked)}
                        />
                    </td>
                    <td>
                        <input
                        type="number"
                        id="auto-ups-matk-input"
                        min={0}
                        max={40}
                        value={rallyOptions.autoMATKupValue}
                        onChange={(ev) => onAutoUPChange("MATK", ev.target.value)}
                        />
                    </td>
                    <th>
                        <label htmlFor="auto-ups-mdef-input">MDEF</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-ups-mdef-check"
                        checked={rallyOptions.autoMDEFup}
                        onChange={(ev) => onChange?.("autoMDEFup", ev.target.checked)}
                        />
                    </td>
                    <td>
                        <input
                        type="number"
                        id="auto-ups-mdef-input" 
                        min={0}
                        max={40}
                        value={rallyOptions.autoMDEFupValue}
                        onChange={(ev) => onAutoUPChange("MDEF", ev.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label htmlFor="ability-charm-checkbox">Ability Charm:</label>
                    </th>
                    <td>
                        <input type="checkbox" id="ability-charm-checkbox"
                        checked={rallyOptions.abilityCharm}
                        onChange={(ev) => onChange?.("abilityCharm", ev.target.checked)}
                        />
                    </td>
                    
                    <th>
                        <label htmlFor="auto-ups-checkbox" className={autoRally ? undefined : "hidden"}>UPs?</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-ups-checkbox"
                        className={autoRally ? undefined : "hidden"}
                        checked={rallyOptions.autoUPs ? true : false}
                        onChange={(ev) => onChange?.("autoUPs", ev.target.checked)}
                        />
                    </td>

                    <th>
                        <label htmlFor="auto-ups-ratk-input">RATK</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-ups-ratk-check"
                        checked={rallyOptions.autoRATKup}
                        onChange={(ev) => onChange?.("autoRATKup", ev.target.checked)}
                        />
                    </td>
                    <td>
                        <input
                        type="number"
                        id="auto-ups-ratk-input"
                        min={0}
                        max={40}
                        value={rallyOptions.autoRATKupValue}
                        onChange={(ev) => onAutoUPChange("RATK", ev.target.value)}
                        />
                    </td>
                    <th>
                        <label htmlFor="auto-ups-rdef-input">RDEF</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-ups-rdef-check"
                        checked={rallyOptions.autoRDEFup}
                        onChange={(ev) => onChange?.("autoRDEFup", ev.target.checked)}
                        />
                    </td>
                    <td>
                        <input
                        type="number"
                        id="auto-ups-rdef-input"
                        min={0}
                        max={40}
                        value={rallyOptions.autoRDEFupValue}
                        onChange={(ev) => onAutoUPChange("RDEF", ev.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} ></td>
                    <td className={autoRally ? undefined : "hidden"}>
                        <select
                        id="auto-ability-select"
                        style={{display: "block"}}
                        onChange={(ev) => onChange?.("autoAbility", ev.target.value)}
                        >
                            <option value="">(any ability)</option>
                            <option value="">Awakening</option>
                            <option value="">Terrifying</option>
                        </select>
                    </td>
                    <td></td>

                    <th>
                        <label htmlFor="auto-ups-spe-input">SPE</label>
                    </th>
                    <td>
                        <input
                        type="checkbox"
                        id="auto-ups-spe-check"
                        checked={rallyOptions.autoSPEup}
                        onChange={(ev) => onChange?.("autoSPEup", ev.target.checked)}
                        />
                    </td>
                    <td>
                        <input
                        type="number"
                        id="auto-ups-spe-input"
                        min={0}
                        max={40}
                        value={rallyOptions.autoSPEupValue}
                        onChange={(ev) => onAutoUPChange("SPE", ev.target.value)}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
});

export default RallyOptionsTable;