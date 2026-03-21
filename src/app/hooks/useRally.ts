import type { Loomian, RallyOptions, RallyItemsType, LoomianUPs, LoomianStat, UniquePointValue, LoomianPersonality, PersonalityStat, PersonalityValue } from "@/types"
import { SpeciesData, type SpeciesInfo } from "@/data/species";
import { useState, type Dispatch, type SetStateAction } from "react"
import { short } from "@/data/stats";

const solveUPs = (leaderUPs: LoomianUPs, assistantUPs: LoomianUPs|undefined, fruit: string): LoomianUPs => {
    const statsSelection = [...short];
    const result = {} as LoomianUPs;
    const loomianUPs = [leaderUPs, assistantUPs].filter(Boolean) as LoomianUPs[];
    
    const addUPToResult = (ups: LoomianUPs) => {
        const index = Math.floor(Math.random() * statsSelection.length);
        const stat: LoomianStat = statsSelection[index];
        statsSelection.splice(index, 1);
        result[stat] = ups[stat];
    }
    
    switch (fruit) {
        case "stromberry": {
            loomianUPs.forEach(addUPToResult);
            break;
        }
        case "blumelon": {
            loomianUPs.forEach(ups => {
                for (let i = 0; i < 2; i ++) {
                    addUPToResult(ups);
                }
            });
            break;
        }
        case "tutifruit": {
            loomianUPs.forEach(ups => {
                for (let i = 0; i < 3; i ++) {
                    addUPToResult(ups);
                }
            });
            break;
        }
        case "wonderbean": {
            for (let i = 0; i < 4; i ++) {
                addUPToResult(leaderUPs);
            }
            break;
        }
        case "jewelfruit": {
            const countUPs = Math.floor(Math.random() * 3) + 3;
            const ups = loomianUPs[Math.floor(Math.random() * loomianUPs.length)] as LoomianUPs;
            for (let i = 0; i < countUPs; i ++) {
                addUPToResult(ups);
            }
            break;
        }
    }

    statsSelection.forEach((stat) => {
        result[stat] = Math.floor(Math.random() * 41) as UniquePointValue;
    });
    return result;
}

const getPersonalityStat = (
    personaStats: PersonalityStat[],
    totem: string,
    toy: string,
    index: number|undefined = undefined,
): PersonalityStat => {
    let splice: boolean;
    switch (toy) {
        case "rubber-toy":
        case "bouncy-ball":
        case "puzzle-cube":
            splice = true; break;
        default: splice = totem !== ""; break;
    }

    const maxSonaIDX = totem ? personaStats.length : personaStats.length + 1;
    index ??= Math.floor(Math.random() * maxSonaIDX);

    const stat = personaStats[index];
    if (splice) {
        personaStats.splice(index, 1);
    }
    return stat;
}

const solvePersonality = (leaderPersona: LoomianPersonality, assistantPersona: LoomianPersonality|undefined, toy: string, totem: string): LoomianPersonality => {
    let posStat: PersonalityStat|undefined = undefined;
    let negStat: PersonalityStat|undefined = undefined;
    const personaStats = short.filter(it => it !== "HP");

    switch (toy) {
        case "rubber-toy": {
            const personaEntries = [
                ...Object.entries(leaderPersona),
                ...Object.entries(assistantPersona ?? {})
            ].filter(entry => entry[1] !== 0);
            if (personaEntries.length === 0) {
                posStat = getPersonalityStat(personaStats, totem, "");
                negStat = getPersonalityStat(personaStats, totem, "");
                break;
            }
            const entryIndex = Math.floor(Math.random() * personaEntries.length);
            const entry = personaEntries[entryIndex] as [PersonalityStat, PersonalityValue];

            const posIndex = entry[1] > 0 ? personaStats.indexOf(entry[0]): undefined;
            const negIndex = entry[1] < 0 ? personaStats.indexOf(entry[0]): undefined;
            if (posIndex !== undefined) {
                posStat = getPersonalityStat(personaStats, totem, toy, posIndex);
                negStat = getPersonalityStat(personaStats, totem, toy, negIndex);
            } else {
                negStat = getPersonalityStat(personaStats, totem, toy, negIndex);
                posStat = getPersonalityStat(personaStats, totem, toy, posIndex);
            }
            break;
        }
        case "bouncy-ball": {
            const leaderPosStats = Object.entries(leaderPersona)
                .reduce((acc, curr) => {
                    if (curr[1] > 0) { acc.push(curr[0] as LoomianStat); }
                    return acc;
                }, [] as LoomianStat[]);

            if (leaderPosStats.length === 0) {
                posStat = getPersonalityStat(personaStats, totem, "");
                negStat = getPersonalityStat(personaStats, totem, "");
                break;
            }

            const posLeaderIndex = Math.floor(Math.random() * leaderPosStats.length);

            const posIndex = personaStats.indexOf(leaderPosStats[posLeaderIndex] as PersonalityStat);
            posStat = getPersonalityStat(personaStats, totem, toy, posIndex);
            negStat = getPersonalityStat(personaStats, totem, toy);
            break;
        }
        case "puzzle-cube": {
            const assistantPosStats = Object.entries(assistantPersona ?? {})
                .reduce((acc, curr) => {
                    if (curr[1] > 0) { acc.push(curr[0] as LoomianStat); }
                    return acc;
                }, [] as LoomianStat[]);

            if (assistantPosStats.length === 0) {
                posStat = getPersonalityStat(personaStats, totem, "");
                negStat = getPersonalityStat(personaStats, totem, "");
                break;
            }

            const posLeaderIndex = Math.floor(Math.random() * assistantPosStats.length);

            const posIndex = personaStats.indexOf(assistantPosStats[posLeaderIndex] as PersonalityStat);
            posStat = getPersonalityStat(personaStats, totem, toy, posIndex);
            negStat = getPersonalityStat(personaStats, totem, toy);
            break;
        }
        case "yo-yo": {
            return {...leaderPersona};
        }
        default: {
            posStat = getPersonalityStat(personaStats, totem, "");
            negStat = getPersonalityStat(personaStats, totem, "");
            break;
        }
    }

    const result: LoomianPersonality = {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0};
    switch (totem) {
        case "smiling": {
            const otherStat = getPersonalityStat(personaStats, totem, toy);

            result[posStat] = 1;
            result[negStat] = -2;
            result[otherStat] = 1;
            break;
        }
        case "scowling": {
            const otherStat = getPersonalityStat(personaStats, totem, toy);

            result[posStat] = 2;
            result[negStat] = -1;
            result[otherStat] = -1;
            break;
        }
        default: {
            if (posStat) { result[posStat] += 1; }
            if (negStat) { result[negStat] -= 1; }
            break;
        }
    }

    return result;
}

const useRally = function() {
    const [rallyLeader, setRallyLeader] = useState<Loomian>({
        species: "",
        ability: "",
        ups: {HP: 40, ENR: 40, MATK: 40, MDEF: 40, RATK: 40, RDEF: 40, SPE: 40},
        personality: {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0},
        moves: []
    });
    const [rallyAssistant, setRallyAssistant] = useState<Loomian>({
        species: "",
        ability: "",
        ups: {HP: 40, ENR: 40, MATK: 40, MDEF: 40, RATK: 40, RDEF: 40, SPE: 40},
        personality: {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0},
        moves: []
    });
    const [rallyItems, setRallyItems] = useState<RallyItemsType>({fruit: "", toy: "", totem: ""});
    const [rallyOptions, setRallyOptions] = useState<RallyOptions>({
        gleamCharm: false,
        gleamBoost: false,
        abilityCharm: false,
        autoRally: false,
        autoGleaming: false,
        autoAbility: "",
        autoUPs: false,
        autoHPup: false,
        autoENRup: false,
        autoMATKup: false,
        autoMDEFup: false,
        autoRATKup: false,
        autoRDEFup: false,
        autoSPEup: false,
        autoHPupValue: 40,
        autoENRupValue: 40,
        autoMATKupValue: 40,
        autoMDEFupValue: 40,
        autoRATKupValue: 40,
        autoRDEFupValue: 40,
        autoSPEupValue: 40
    });
    const [rallyResult, setRallyResult] = useState<Loomian>({
        species: "",
        ability: "",
        ups: {HP: 40, ENR: 40, MATK: 40, MDEF: 40, RATK: 40, RDEF: 40, SPE: 40},
        personality: {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0},
        moves: []
    });
    const solveRally = (): void => {
        const leaderSpeciesData: SpeciesInfo|undefined = SpeciesData[rallyLeader.species];
        if (!leaderSpeciesData) {
            return;
        }

        const rallySpecies = leaderSpeciesData.rallies;
        if (rallySpecies === false) {
            return;
        }

        const rallySpeciesData: SpeciesInfo|undefined = SpeciesData[rallySpecies];
        if (!rallySpeciesData) {
            return;
        }

        const newRallyData: Loomian = {
            species: rallySpecies,
            ability: rallySpeciesData.abilities[0],
            ups: solveUPs(
                rallyLeader.ups,
                rallyAssistant.species ? rallyAssistant.ups : undefined,
                rallyItems.fruit
            ),
            personality: solvePersonality(
                rallyLeader.personality,
                rallyAssistant.species ? rallyAssistant.personality : undefined,
                rallyItems.toy,
                rallyItems.totem
            ),
            moves: []
        };

        setRallyResult(newRallyData);
    }

    return {
        rallyLeader: [rallyLeader, setRallyLeader] as [Loomian, Dispatch<SetStateAction<Loomian>>],
        rallyAssistant: [rallyAssistant, setRallyAssistant] as [Loomian, Dispatch<SetStateAction<Loomian>>],
        rallyItems: [rallyItems, setRallyItems] as [RallyItemsType, Dispatch<SetStateAction<RallyItemsType>>],
        rallyOptions: [rallyOptions, setRallyOptions] as [RallyOptions, Dispatch<SetStateAction<RallyOptions>>],
        rallyResult: [rallyResult, setRallyResult] as [Loomian, Dispatch<SetStateAction<Loomian>>],
        solveRally: solveRally
    }
}

export default useRally;