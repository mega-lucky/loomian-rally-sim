import RallyForm from "@components/RallyForm";
import "@styles/index.css"
import RallySettings from "./components/RallySettings";

export default function App() {
    return (
        <>
        <h1>Loomian Rally Simulator</h1>
        <div className="inline-block">
            <RallyForm loomno={1} />
            <RallyForm loomno={2} />
        </div>
        <RallySettings />
        </>
    );
}