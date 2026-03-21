import "@styles/rallyform.css"

import PersionalityField, { type PersonaInputsAny, type PersonalityInputs } from "./PersonalityField";
import UPsField from "./UPsField";
import SpeciesInput from "./SpeciesInput";

import type { Loomian, LoomianPersonality, LoomianStat, LoomianUPs, StateSetter, UniquePointValue } from "@/types";
import { SpeciesData, type SpeciesInfo } from "@/data/species";
import { usePersonaInputs } from "@/app/hooks/usePersonaInputs";
import { short } from "@/data/stats";

export type RallyFormProps = {
    loomno: 1 | 2,
    loomianState: [Loomian, StateSetter<Loomian>]
};

const personalitiesEqual = (sonaA: LoomianUPs, sonaB: LoomianPersonality) => {
    return short.every(stat => {
        if (stat === "HP") { return true; }
        return sonaA[stat] === sonaB[stat]}
    );
}

export default function RallyForm({ loomno, loomianState }: RallyFormProps) {
    const [loomianData, setLoomianData] = loomianState;
    const [ personaInputs, personaInputsDispatch ] = usePersonaInputs();
    const loomianSpeciesData: SpeciesInfo = SpeciesData[loomianData.species];

    const personaInputsOnChange = (inputData: PersonalityInputs): void => {
        const newPersonaData =
        Object.values(inputData).reduce((accum: LoomianPersonality, current: PersonaInputsAny) => {
            if (current.stat === "") {
                return accum;
            }
            accum[current.stat] = current.factor;
            return accum;
        }, {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0});

        if (personalitiesEqual(newPersonaData, loomianData.personality)) {
            return;
        }
        setLoomianData(prev => {
            return {...prev, personality: newPersonaData};
        });
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

    const onUpsChanged = (stat: LoomianStat, value: UniquePointValue): void => {
        setLoomianData(prev => {
            return {...prev, ups: {...prev.ups, [stat]: value}};
        });
    }

    return (
        <fieldset className="rally-form">
            <legend>{loomno === 1 ? "Rally Leader" : "Rally Assistant"}</legend>
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
                onChange={onUpsChanged}
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