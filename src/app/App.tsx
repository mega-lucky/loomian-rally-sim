import RallyForm from "@components/RallyForm";
import RallySettings from "@components/RallySettings";
import RallyResult from "@components/RallyResult";
import useRally from "@hooks/useRally";
import "@styles/index.css"

export default function App() {
    const { rallyLeader, rallyAssistant, rallyItems, rallyOptions, rallyResult } = useRally();

    return (
        <>
        <h1>Loomian Rally Simulator</h1>
        <div className="inline-block">
            <RallyForm loomno={1} loomianState={rallyLeader} />
            <RallyForm loomno={2} loomianState={rallyAssistant} />
        </div>
        <div className="rally-option-result-container">
            <RallySettings rallyItemsState={rallyItems} rallyOptionsState={rallyOptions}/>
            <button>Rally</button>
            <RallyResult 
                loomianData={rallyResult[0]}
            />
        </div>
        </>
    );
}