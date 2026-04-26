import type { Loomian, RallyOptions, RallyItemsType, LoomianUPs, LoomianStat, UniquePointValue, LoomianPersonality, PersonalityStat, PersonalityValue, StateSetter } from "@/types"
import { SpeciesData, type SpeciesInfo } from "@/data/species";
import { useState } from "react"
import { short } from "@/data/stats";
import { createLoomian, createRallyItems, createRallyOptions } from "@/factories";

interface useRallyReturnType {
    rallyLeader: [Loomian, StateSetter<Loomian>],
    rallyAssistant: [Loomian, StateSetter<Loomian>],
    rallyItems: [RallyItemsType, StateSetter<RallyItemsType>],
    rallyOptions: [RallyOptions, StateSetter<RallyOptions>],
    rallyResult: [Loomian, StateSetter<Loomian>],
    solveRally: () => void,
}

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
const getPositiveStat = (original: LoomianPersonality|undefined, personaStats: PersonalityStat[], totem: string, toy: string) => {
    const positiveStats = Object.entries(original ?? {})
        .reduce((acc, curr) => {
            if (curr[1] > 0) { acc.push(curr[0] as PersonalityStat); }
            return acc;
        }, [] as PersonalityStat[]);

    if (positiveStats.length === 0) {
        const posStat = getPersonalityStat(personaStats, totem, "");
        const negStat = getPersonalityStat(personaStats, totem, "");
        return [posStat, negStat];
    }

    const posLeaderIndex = Math.floor(Math.random() * positiveStats.length);

    const posIndex = personaStats.indexOf(positiveStats[posLeaderIndex]);
    const posStat = getPersonalityStat(personaStats, totem, toy, posIndex);
    const negStat = getPersonalityStat(personaStats, totem, toy);
    return [posStat, negStat];
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

            const statIndex = personaStats.indexOf(entry[0]);
            if (entry[1] > 0) {
                posStat = getPersonalityStat(personaStats, totem, toy, statIndex);
                negStat = getPersonalityStat(personaStats, totem, toy);
            } else {
                negStat = getPersonalityStat(personaStats, totem, toy, statIndex);
                posStat = getPersonalityStat(personaStats, totem, toy);
            }
            break;
        }
        case "bouncy-ball": {
            [posStat, negStat] = getPositiveStat(leaderPersona, personaStats, totem, toy);
            break;
        }
        case "puzzle-cube": {
            [posStat, negStat] = getPositiveStat(assistantPersona, personaStats, totem, toy);
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

const solveAbility = (speciesData: SpeciesInfo, isLeaderSA: boolean, abilityCharm: boolean): string => {
    const abilitiesData = speciesData.abilities;

    const saChance = (abilitiesData.s ? 256 : 0) /
        (isLeaderSA ? 4 : 1) /
        (abilityCharm ? 2 : 1);
    
    const isSA: boolean = Math.floor(Math.random() * saChance) === 0;
    if (isSA) { return abilitiesData.s as string; }

    const nAbilities = abilitiesData[1] ? 2 : 1;
    const abilityIndex = Math.floor(Math.random() * nAbilities) as 0 | 1;

    return abilitiesData[abilityIndex] as string;
}

const solveGleam = (gleamCharm: boolean, gleamBoost: boolean): Loomian["gleam"] => {
    const gleamChance = 4096
     / (gleamCharm ? 2 : 1)
     / (gleamBoost ? 16 : 1)

     const isAlpha = Math.floor(Math.random() * gleamChance) === 0;
     return isAlpha ? "alpha" : false;
}

const autoUPsMatch = (rallyOptions: RallyOptions, UPs: LoomianUPs) => {
    return (
        (!rallyOptions.autoHPup || rallyOptions.autoHPupValue == UPs.HP) &&
        (!rallyOptions.autoENRup || rallyOptions.autoENRupValue == UPs.ENR) &&
        (!rallyOptions.autoMATKup || rallyOptions.autoMATKupValue == UPs.MATK) &&
        (!rallyOptions.autoMDEFup || rallyOptions.autoMDEFupValue == UPs.MDEF) &&
        (!rallyOptions.autoRATKup || rallyOptions.autoRATKupValue == UPs.RATK) &&
        (!rallyOptions.autoRDEFup || rallyOptions.autoRDEFupValue == UPs.RDEF) &&
        (!rallyOptions.autoSPEup || rallyOptions.autoSPEupValue == UPs.SPE)
    );
}

const MAX_AUTO_RALLY_TRIES: number = 999999;

const useRally = function(): useRallyReturnType {
    const [rallyLeader, setRallyLeader] = useState<Loomian>(createLoomian());
    const [rallyAssistant, setRallyAssistant] = useState<Loomian>(createLoomian());
    const [rallyResult, setRallyResult] = useState<Loomian>(createLoomian());
    const [rallyItems, setRallyItems] = useState<RallyItemsType>(createRallyItems());
    const [rallyOptions, setRallyOptions] = useState<RallyOptions>(createRallyOptions());
    
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

        const saLeader = rallyLeader.ability === leaderSpeciesData.abilities.s;
        const { autoRally, autoAbility, autoUPs, autoGleaming } = rallyOptions;

        let newRallyData: Loomian;
        let rally_tries: number = 0;
        do {
            newRallyData = {
                species: rallySpecies,
                gleam: solveGleam(rallyOptions.gleamCharm, rallyOptions.gleamBoost),
                level: Math.floor(Math.random() * 5) + 1,
                ability: solveAbility(rallySpeciesData, saLeader, rallyOptions.abilityCharm),
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
            rally_tries ++;
        } while (
            (autoRally && rally_tries < MAX_AUTO_RALLY_TRIES) &&
            ((autoAbility && newRallyData.ability !== autoAbility) ||
            (autoUPs && !autoUPsMatch(rallyOptions, newRallyData.ups)) ||
            (autoGleaming && newRallyData.gleam !== "alpha"))
        )

        if (rally_tries < MAX_AUTO_RALLY_TRIES) {
            setRallyResult(newRallyData);
        } else {
            alert(`Failed to rally loomian. Exceeded maximum number of tries (${MAX_AUTO_RALLY_TRIES})`);
        }
    }

    return {
        rallyLeader: [rallyLeader, setRallyLeader],
        rallyAssistant: [rallyAssistant, setRallyAssistant],
        rallyItems: [rallyItems, setRallyItems],
        rallyOptions: [rallyOptions, setRallyOptions],
        rallyResult: [rallyResult, setRallyResult],
        solveRally: solveRally
    }
}

export default useRally;