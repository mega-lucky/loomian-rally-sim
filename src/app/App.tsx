import RallyForm from "@components/RallyForm";
import RallySettings from "@components/RallySettings";
import RallyResult from "@components/RallyResult";
import useRally from "@hooks/useRally";
import "@styles/index.css"
import { SpeciesData, type SpeciesInfo } from "@/data/species";
import type { Loomian } from "@/types";

export default function App() {
    const { rallyLeader, rallyAssistant, rallyItems, rallyOptions, rallyResult, solveRally } = useRally();

    const leaderObject: Loomian = rallyLeader[0];
    const leaderBaseInfo: SpeciesInfo|undefined = leaderObject.species
        ? SpeciesData.get(leaderObject.species)
        : undefined;
    const rallyLoomInfo = leaderBaseInfo?.rallies
        ? SpeciesData.get(leaderBaseInfo.rallies)
        : undefined;

    return (
        <>
        <h1>Loomian Rally Simulator</h1>
        <div className="inline-block">
            <RallyForm loomno={1} loomianState={rallyLeader} />
            <RallyForm loomno={2} loomianState={rallyAssistant} />
        </div>
        <div className="rally-option-result-container">
            <RallySettings
                rallyItemsState={rallyItems}
                rallyOptionsState={rallyOptions}
                rallyLoomianAbilityList={rallyLoomInfo?.abilities}
            />
            <button onClick={()=>solveRally()}>Rally</button>
            <RallyResult 
                loomianData={rallyResult[0]}
            />
        </div>
        </>
    );
}