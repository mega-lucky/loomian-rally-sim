import { memo, useEffect, type Dispatch } from "react";
import { getStatFromPersonality, short as statsShort, positive, negative, strong as strongPersonalities } from "@/data/stats";
import type { WeakPersonality } from "@/types";

export interface PersonalityInputs {
    strong: {
        stat: "ENR"|"MATK"|"MDEF"|"RATK"|"RDEF"|"SPE"|"",
        factor: -2|0|2
    },
    pos: {
        stat: "ENR"|"MATK"|"MDEF"|"RATK"|"RDEF"|"SPE"|"",
        factor: -1|0|1
    },
    neg: {
        stat: "ENR"|"MATK"|"MDEF"|"RATK"|"RDEF"|"SPE"|"",
        factor: -1|0|1
    },
};

export type PersonaInputsStrong = PersonalityInputs["strong"];
export type PersonaInputsPos = PersonalityInputs["pos"];
export type PersonaInputsNeg = PersonalityInputs["neg"];
export type PersonaInputsWeak = PersonaInputsPos | PersonaInputsNeg;
export type PersonaInputsAny = PersonaInputsStrong | PersonaInputsWeak;

export type PersonaUpdateAction = {
    type: "SET_STRONG" | "SET_POS" | "SET_NEG" | "RESET",
    value?: string
};

const PersionalityField = memo(function({ loomno, personaInputs, personaInputsDispatch, onChange } : {
    loomno: 1 | 2,
    personaInputs: PersonalityInputs,
    personaInputsDispatch: Dispatch<PersonaUpdateAction>
    onChange?: (inputData: PersonalityInputs) => void
}) {
    const { strong: strongInput, pos: posInput, neg: negInput} = personaInputs;

    const posOptions: readonly WeakPersonality[] = strongInput.factor > 0 ? negative : positive;
    const negOptions: readonly WeakPersonality[] = strongInput.factor < 0 ? positive : negative;

    const updateInputs = (dispatchType: PersonaUpdateAction["type"], value: string) => {
        personaInputsDispatch({type: dispatchType, value: value});
    }
    useEffect(() => {
        onChange?.(personaInputs);
    }, [personaInputs, onChange]);

    return (
        <fieldset className="rally-form-personality-wrap">
            <legend>Personality:</legend>
            <div className="rally-form-personality-row">
                <label htmlFor={`strong-sona-${loomno}`}>Strong:</label>
                <select
                    value={`${strongInput.stat}:${strongInput.factor}`}
                    id={`strong-sona-${loomno}`}
                    onChange={ev => updateInputs("SET_STRONG", ev.target.value)}
                >
                    <option value=":0">(none)</option>
                    {strongPersonalities.positive.map((it,idx) =>
                        <option value={`${getStatFromPersonality(it)}:2`} key={idx}>{it}</option>
                    )}
                    {strongPersonalities.negative.map((it,idx) =>
                        <option value={`${getStatFromPersonality(it)}:-2`} key={idx}>{it}</option>
                    )}
                </select>
            </div>
            <div className="rally-form-personality-row">
                <label htmlFor={`pos-sona-${loomno}`}>{strongInput.factor === 0 ? "Positive" : "Weak"}:</label>
                <select
                    value={`${posInput.stat}:${posInput.factor}`}
                    id={`pos-sona-${loomno}`}
                    onChange={ev => updateInputs("SET_POS", ev.target.value)}
                >
                    {strongInput.factor === 0 && <option value=":0">(none)</option>}
                    {
                        posOptions.map((it, idx) => statsShort[idx+1] == strongInput.stat ? null :
                            <option
                                value={`${getStatFromPersonality(it)}:${strongInput.factor > 0 ? -1 : 1}`}
                                key={idx}
                                disabled={getStatFromPersonality(it) === negInput.stat}
                            >{it}
                            </option>
                        )
                    }
                </select>
            </div>
            <div className="rally-form-personality-row">
                <label htmlFor={`neg-sona-${loomno}`}>{strongInput.factor === 0 ? "Negative" : "Weak"}:</label>
                <select
                    value={`${negInput.stat}:${negInput.factor}`}
                    id={`neg-sona-${loomno}`}
                    onChange={ev => updateInputs("SET_NEG", ev.target.value)}
                >
                    {strongInput.factor === 0 && <option value=":0">(none)</option>}
                    {
                        negOptions.map((it, idx) =>  statsShort[idx+1] == strongInput.stat ? null :
                            <option
                                value={`${getStatFromPersonality(it)}:${strongInput.factor < 0 ? 1 : -1}`}
                                key={idx}
                                disabled={getStatFromPersonality(it) === posInput.stat}
                            >{it}
                            </option>
                        )
                    }
                </select>
            </div>
        </fieldset>
    );
});

export default PersionalityField;