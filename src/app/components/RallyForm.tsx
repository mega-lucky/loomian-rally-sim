import "@styles/rallyform.css"

export interface RallyFormData {
    species: string,
};
export type RallyFormProps = {
    loomno: 1 | 2
};

const stats: string[] = ["HP", "ENR", "MATK", "MDEF", "RATK", "RDEF", "SPE"];

export default function RallyForm({ loomno }: RallyFormProps) {
    return (
        <fieldset className="rally-form">
            <legend>Loomian {loomno}</legend>
            <img className="rally-form-img" src="" alt="Loomian"/>
            <input
                name="species-input"
                className="rally-form-species"
                placeholder="Species..."
            ></input>
            <div className="rally-form-ability-wrap">
                <label htmlFor={`ability-select-${loomno}`}>Ability:</label>
                <select id={`ability-select-${loomno}`}>
                    <option value="none">(none)</option>
                </select>
            </div>

            <fieldset className="rally-form-personality-wrap">
                <legend>Personality:</legend>
                <div className="rally-form-personality-row">
                    <label htmlFor={`strong-sona-${loomno}`}>Strong:</label>
                    <select id={`strong-sona-${loomno}`}>
                        <option value="">Very Brawny</option>
                    </select>
                </div>
                <div className="rally-form-personality-row">
                    <label htmlFor={`pos-sona-${loomno}`}>Positive:</label>
                    <select id={`pos-sona-${loomno}`}></select>
                </div>
                <div className="rally-form-personality-row">
                    <label htmlFor={`neg-sona-${loomno}`}>Negative:</label>
                    <select id={`neg-sona-${loomno}`}></select>
                </div>
            </fieldset>

            <fieldset className="rally-form-ups-wrap">
                <legend>UPs:</legend>
                <div className="rally-form-ups-inputs-wrap">{
                    stats.map((it, idx) => {
                        const id: string = `${it}-up-${loomno}`;

                        return (
                            <div className="rally-form-ups-input" key={idx}>
                                <label htmlFor={id}>{it}</label>
                                <input type="number" min="0" max="40" value={0} id={id} />
                            </div>
                        );
                    })
                }</div>
            </fieldset>

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