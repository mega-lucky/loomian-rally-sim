import RallyForm from "@components/RallyForm";
import RallySettings from "@components/RallySettings";
import RallyResult from "@components/RallyResult";
import "@styles/index.css"

export default function App() {
    return (
        <>
        <h1>Loomian Rally Simulator</h1>
        <div className="inline-block">
            <RallyForm loomno={1} />
            <RallyForm loomno={2} />
        </div>
        <div className="rally-option-result-container">
            <RallySettings />
            <button>Rally</button>
            <RallyResult 
                loomianData={{
                    species: "none",
                    ability: "none",
                    ups:  {HP:  40, ENR: 40, MATK: 40, MDEF: 40, RATK: 40, RDEF: 40, SPE: 40},
                    personality: {ENR: 0, MATK: 0, MDEF: 0, RATK: 0, RDEF: 0, SPE: 0},
                    moves: []
                }}
            />
        </div>
        </>
    );
}