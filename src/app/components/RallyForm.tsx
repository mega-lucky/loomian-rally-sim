import "@styles/rallyform.css"
import { short as statsShort, negative, positive, strong as strongPersonalities, getStatFromPersonality } from "@/data/stats";
import { type Loomian } from "@/types";
import { useState, memo, type Dispatch, type SetStateAction, type ChangeEventHandler, useEffect } from "react";

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

    return (
        <fieldset className="rally-form">
            <legend>Loomian {loomno}</legend>
            <img className="rally-form-img" src="" alt="Loomian"/>
            <input
                name="species-input"
                className="rally-form-species"
                placeholder="Species..."
                value={loomianData.species}
            ></input>
            <div className="rally-form-ability-wrap">
                <label htmlFor={`ability-select-${loomno}`}>Ability:</label>
                <select
                    value={loomianData.ability}
                    id={`ability-select-${loomno}`}
                >
                    <option value="none">(none)</option>
                </select>
            </div>

            <PersionalityField
                loomno={loomno}
                setLoomianData={setLoomianData}
                personalityData={loomianData.personality}
            />

            <UPSField 
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

interface personalityInputs {
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
}

const PersionalityField = memo(function({ loomno, setLoomianData } : {
    loomno: 1 | 2,
    setLoomianData: Dispatch<SetStateAction<Loomian>>,
    personalityData: Loomian["personality"]
}) {
    const [personaInputs, setPersonaInputs] = useState<personalityInputs>({
        strong: {stat: "", factor: 0},
        pos: {stat: "", factor: 0},
        neg: {stat: "", factor: 0},
    });

    useEffect(() => {
        const personality: Loomian["personality"] = Object.values(personaInputs).reduce((accum: Loomian["personality"], value: personalityInputs["strong"|"pos"|"neg"]) => {
            if (value.stat !== "") {
                accum[value.stat] = value.factor;
            }
            return accum;
        }, {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0});

        setLoomianData(prev => {
            return {...prev, personality: personality}
        });
    }, [personaInputs, setLoomianData]);

    const { strong: strongInput, pos: posInput, neg: negInput} = personaInputs;
    
    const handleStrongChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        const value: string = event.target.value;

        const strongStat = value.replace(/^(\w*):-?\d+$/, "$1") as
            personalityInputs["strong"]["stat"];
        const strongFact = Number(value.replace(/^\w*:(-?\d+)$/, "$1")) as
            personalityInputs["strong"]["factor"];

        const newPersonaInputs: personalityInputs = {
            strong: {stat: strongStat, factor: strongFact},
            pos: {...posInput},
            neg: {...negInput}
        };
        const {pos: newPosInput, neg: newNegInput} = newPersonaInputs;

        const changePos: boolean =
            posInput.stat ?
            posInput.stat === strongStat || posInput.stat === newNegInput.stat
            : strongStat !== "";

        const changeNeg: boolean =
            negInput.stat ?
            negInput.stat === strongStat || negInput.stat === newPosInput.stat
            : strongStat !== "";

        if (!changePos && !changeNeg) {
            setPersonaInputs(newPersonaInputs);
            return;
        }

        if (changePos)
        newPosInput.stat = statsShort.find(it => {
            return it !== "HP" &&
                it !== strongStat &&
                it !== newNegInput.stat;
        }) as personalityInputs["pos"]["stat"];

        if (changeNeg)
        newPosInput.stat = statsShort.find(it => {
            return it !== "HP" &&
                it !== strongStat &&
                it !== newPosInput.stat;
        }) as personalityInputs["neg"]["stat"];

        newPosInput.factor = newPosInput.stat === "" ? 0 : (strongFact > 0 ? -1 : 1);
        newNegInput.factor = newNegInput.stat === "" ? 0 : (strongFact < 0 ? 1 : -1);

        setPersonaInputs(newPersonaInputs);
    }
    const handleWeakChange = (key: "pos" | "neg", value: string): void => {
        const stat = value.replace(/^(\w*):-?\d+$/, "$1") as personalityInputs[typeof key]["stat"];
        const factor = Number(value.replace(/^\w*:(-?\d+)$/, "$1")) as personalityInputs[typeof key]["factor"];

        setPersonaInputs(prev => {
            return {...prev, [key]: {stat: stat, factor: factor}}
        });
    }

    const posOptions: readonly string[] = strongInput.factor > 0 ? negative : positive;
    const negOptions: readonly string[] = strongInput.factor < 0 ? positive : negative;

    return (
        <fieldset className="rally-form-personality-wrap">
            <legend>Personality:</legend>
            <div className="rally-form-personality-row">
                <label htmlFor={`strong-sona-${loomno}`}>Strong:</label>
                <select
                    value={`${strongInput.stat}:${strongInput.factor}`}
                    id={`strong-sona-${loomno}`}
                    onChange={handleStrongChange}
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
                    onChange={(ev)=>handleWeakChange("pos", ev.target.value)}
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
                    onChange={(ev)=>handleWeakChange("neg", ev.target.value)}
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

const UPSField = memo(function({ loomno, upsData, setLoomianData } : {
    loomno: 1 | 2,
    upsData: Loomian["ups"],
    setLoomianData: Dispatch<SetStateAction<Loomian>>
}) {
    const handleUpChange = (stat: typeof statsShort[number], value: string) => {
        let numberVal = Number(value.match(/^\d+/));
        if (numberVal > 40) numberVal = 40;
        else if (numberVal < 0) numberVal = 0;

        setLoomianData(prev => {
            return {...prev, ups: {...prev.ups, [stat]: numberVal}}
        })
    }
    return (
        <fieldset className="rally-form-ups-wrap">
            <legend>UPs:</legend>
            <div className="rally-form-ups-inputs-wrap">{
                statsShort.map((it, idx) => {
                    const id: string = `${it}-up-${loomno}`;

                    return (
                        <div className="rally-form-ups-input" key={idx}>
                            <label htmlFor={id}>{it}</label>
                            <input
                            type="number"
                            min="0" max="40"
                            value={upsData[it].toString()}
                            id={id}
                            onChange={(ev) => handleUpChange(it, ev.target.value)}
                            />
                        </div>
                    );
                })
            }</div>
        </fieldset>
    );
});