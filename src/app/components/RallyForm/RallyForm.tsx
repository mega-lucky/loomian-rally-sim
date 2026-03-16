import "@styles/rallyform.css"

import PersionalityField, { type PersonalityInputs } from "./PersonalityField";
import UPsField from "./UPsField";
import SpeciesInput from "./SpeciesInput";

import { type Loomian } from "@/types";
import { useState } from "react";
import { SpeciesData, type SpeciesInfo } from "@/data/species";
import { usePersonaInputs } from "@/app/hooks/usePersonaInputs";

export type RallyFormProps = {
    loomno: 1 | 2
};

export default function RallyForm({ loomno }: RallyFormProps) {
    const [loomianData, setLoomianData] = useState<Loomian>({
        species: "",
        ability: "",
        personality: {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0},
        ups: {HP: 40, ENR: 40, MATK: 40, MDEF: 40, RATK: 40, RDEF: 40, SPE: 40},
        moves: []
    });
    const [ personaInputs, personaInputsDispatch ] = usePersonaInputs();
    const loomianSpeciesData: SpeciesInfo = SpeciesData[loomianData.species];

    const personaInputsOnChange = (value: PersonalityInputs): void => {
        const newPersonaData =
        Object.values(value).reduce((accum: Loomian["personality"], current: PersonalityInputs["strong"|"pos"|"neg"]) => {
            if (current.stat === "" || current.factor === 0) {
                return accum;
            }
            accum[current.stat] = current.factor;
            return accum;
        }, {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0});
        setLoomianData(prev => {
            return {...prev, personality: newPersonaData};
        })
    }

    const onSpeciesChange = (value: string): void => {
        const newSpeciesData = SpeciesData[value];
        if (newSpeciesData === undefined) { return; }

        setLoomianData({
            species: value,
            ability: newSpeciesData.abilities[0],
            personality: {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0},
            ups: {HP: 40, ENR: 40, MATK: 40, MDEF: 40, RATK: 40, RDEF: 40, SPE: 40},
            moves: []
        });
        personaInputsDispatch({type: "RESET"});
    }

    const abilitySelectChanged: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setLoomianData(prev => {
            return {...prev, ability: event.target.value}
        });
    }

    return (
        <fieldset className="rally-form">
            <legend>Loomian {loomno}</legend>
            <img className="rally-form-img" src="none" alt="Loomian"/>
            <SpeciesInput
            loomianSpeciesData={loomianSpeciesData}
            onSpeciesChange={onSpeciesChange}
            />
            <div className="rally-form-ability-wrap">
                <label htmlFor={`ability-select-${loomno}`}>Ability:</label>
                <select
                    value={loomianData.ability}
                    id={`ability-select-${loomno}`}
                    onChange={abilitySelectChanged}
                >{
                    !loomianSpeciesData ?
                    <option value="none">(none)</option>
                    : Object.entries(loomianSpeciesData.abilities).map( (it, idx) => {
                        return <option key={99+idx} value={it}>
                            {it[1]}
                        </option>
                    })
                }</select>
            </div>

            <PersionalityField
                loomno={loomno}
                personaInputs={personaInputs}
                personaInputsDispatch={personaInputsDispatch}
                onChange={personaInputsOnChange}
            />

            <UPsField 
                loomno={loomno}
                upsData={loomianData.ups}
                setLoomianData={setLoomianData}
            />

            <fieldset className="rally-form-moves-wrap">
                <legend>Moves:</legend>
                <input type="text" placeholder="Move 1" />
                <input type="text" placeholder="Move 2" />
                <input type="text" placeholder="Move 3" />
                <input type="text" placeholder="Move 4" />
            </fieldset>
        </fieldset>
    );
}