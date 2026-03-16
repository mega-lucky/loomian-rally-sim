import { useReducer, type ActionDispatch } from "react";
import { type PersonaInputsAny, type PersonaInputsStrong, type PersonaInputsWeak, type PersonalityInputs, type PersonaUpdateAction } from "@components/RallyForm/PersonalityField";
import { short as statsShort } from "@/data/stats";
import { type PersonalityStat, type personalityValue } from "@/types";

const parsePersonaValue = (value?: string): PersonaInputsAny => {
    if (!value) { return {stat: "", factor: 0}; }

    const stat = value.replace(/^(\w*):-?\d+$/, "$1") as PersonalityStat;
    const factor = Number(value.replace(/^\w*:(-?\d+)$/, "$1")) as personalityValue;

    return {stat: stat, factor: factor};
}

const personaReducer = (state: PersonalityInputs, action: PersonaUpdateAction): PersonalityInputs => {
    switch (action.type) {
        case "SET_STRONG": {
            const {stat, factor} = parsePersonaValue(action.value) as PersonaInputsStrong;

            if (stat === "" || factor === 0) {
                return {
                    strong: {stat: "", factor: 0},
                    pos: {stat: "", factor: 0},
                    neg: {stat: "", factor: 0}
                }
            }

            const availableStats = statsShort.filter(it => {
                return it !== "HP" && it !== stat;
            }) as PersonalityStat[];

            let posStat = state.pos.stat;
            let negStat = state.neg.stat;

            if (posStat === "" || !availableStats.includes(posStat)) {
                posStat = availableStats[0];
            }
            if (negStat === "" || !availableStats.includes(negStat) || negStat === posStat) {
                negStat = availableStats.find((it: string) => it !== posStat) as PersonalityStat;
            }

            const weakFactor: 1 | -1 = factor > 0 ? -1 : 1;

            return {
                strong: {stat: stat, factor: factor},
                pos: {stat: posStat, factor: weakFactor},
                neg: {stat: negStat, factor: weakFactor}
            }
        }
        case "SET_POS":
        case "SET_NEG": {
            const key = action.type === "SET_POS" ? "pos" : "neg";
            const {stat, factor} = parsePersonaValue(action.value) as PersonaInputsWeak;
            return {
                ...state,
                [key]: {
                    stat: stat,
                    factor: factor
                }
            };
        }
        default: {
            return {
                strong: {stat: "", factor: 0},
                pos: {stat: "", factor: 0},
                neg: {stat: "", factor: 0}
            }
        }
    }
}

export const usePersonaInputs = function(): [PersonalityInputs, ActionDispatch<[action: PersonaUpdateAction]>] {
    const [personaInputs, personaInputsDispatch] =
    useReducer<PersonalityInputs, [action: PersonaUpdateAction]>(personaReducer, {
        strong: {stat: "", factor: 0},
        pos: {stat: "", factor: 0},
        neg: {stat: "", factor: 0},
    });

    return [ personaInputs, personaInputsDispatch ];
}