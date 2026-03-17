import { memo, useCallback, useEffect } from "react";
import { type LoomianStat, type uniquePointValue } from "@/types";
import AutoRallyUPInputs from "./AutoRallyUPInputs";
import RallyCheckOption from "./RallyCheckOption";

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
    const { autoRally, autoUPs } = rallyOptions;
    const onAutoUPChange = useCallback((stat: LoomianStat, value: string) => {
        let numberVal = Number(value.match(/^\d+/));
        if (numberVal > 40) numberVal = 40;
        else if (numberVal < 0) numberVal = 0;
        
        onChange?.(`auto${stat}upValue`, numberVal as uniquePointValue);
    }, [onChange]);

    useEffect(()=>console.log(rallyOptions), [rallyOptions]);

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
                    visibility: autoRally && autoUPs ? undefined : "collapse"
                }}/>
            </colgroup>
            <tbody>
                <tr>
                    <RallyCheckOption
                        rallyOptionKey="gleamCharm"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                    />
                    <RallyCheckOption
                        rallyOptionKey="autoRally"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                    />

                    <AutoRallyUPInputs
                        stat="HP"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                        onAutoUPChange={onAutoUPChange}
                    />
                    <AutoRallyUPInputs
                        stat="ENR"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                        onAutoUPChange={onAutoUPChange}
                    />
                </tr>
                <tr>
                    <RallyCheckOption
                        rallyOptionKey="gleamBoost"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                    />
                    {autoRally ? <RallyCheckOption
                        rallyOptionKey="autoGleaming"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                    /> : <td colSpan={2}></td>}

                    <AutoRallyUPInputs
                        stat="MATK"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                        onAutoUPChange={onAutoUPChange}
                    />
                    <AutoRallyUPInputs
                        stat="MDEF"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                        onAutoUPChange={onAutoUPChange}
                    />
                </tr>
                <tr>
                    <RallyCheckOption
                        rallyOptionKey="abilityCharm"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                    />
                    {autoRally ? <RallyCheckOption
                        rallyOptionKey="autoUPs"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                    /> : <td colSpan={2}></td>}

                    <AutoRallyUPInputs
                        stat="RATK"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                        onAutoUPChange={onAutoUPChange}
                    />
                    <AutoRallyUPInputs
                        stat="RDEF"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                        onAutoUPChange={onAutoUPChange}
                    />
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

                    <AutoRallyUPInputs
                        stat="SPE"
                        rallyOptions={rallyOptions}
                        onChange={onChange}
                        onAutoUPChange={onAutoUPChange}
                    />
                </tr>
            </tbody>
        </table>
    );
});

export default RallyOptionsTable;