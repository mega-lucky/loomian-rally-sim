import type { Loomian, RallyOptions, RallyItemsType } from "@/types"
import { useState } from "react"

const useRally = function() {
    const rallyLeaderState = useState<Loomian>({
        species: "",
        ability: "",
        ups: {HP: 40, ENR: 40, MATK: 40, MDEF: 40, RATK: 40, RDEF: 40, SPE: 40},
        personality: {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0},
        moves: []
    });
    const rallyAssistantState = useState<Loomian>({
        species: "",
        ability: "",
        ups: {HP: 40, ENR: 40, MATK: 40, MDEF: 40, RATK: 40, RDEF: 40, SPE: 40},
        personality: {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0},
        moves: []
    });
    const rallyItemsState = useState<RallyItemsType>({fruit: "", toy: "", totem: ""});
    const rallyOptionsState = useState<RallyOptions>({
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

    const rallyResultState = useState<Loomian>({
        species: "",
        ability: "",
        ups: {HP: 40, ENR: 40, MATK: 40, MDEF: 40, RATK: 40, RDEF: 40, SPE: 40},
        personality: {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0},
        moves: []
    });

    return {
        rallyLeader: rallyLeaderState,
        rallyAssistant: rallyAssistantState,
        rallyItems: rallyItemsState,
        rallyOptions: rallyOptionsState,
        rallyResult: rallyResultState,
    }
}

export default useRally;