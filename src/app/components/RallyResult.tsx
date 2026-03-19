import { getPersonalityFromStat } from "@/data/stats";
import type { Loomian, PersonalityStat, PersonalityValue } from "@/types";
import "@styles/rallyresult.css"

export default function RallyResult({loomianData} : {
    loomianData: Loomian
}) {

    const personalityString: string =
    Object.entries(loomianData.personality).reduce((accum: string, [stat, factor]: [string, PersonalityValue]) => {
        if (factor === 0) { return accum; }
        return accum + getPersonalityFromStat(stat as PersonalityStat, factor);
    }, "") || "Indifferent";

    return (
        <div className="rally-result">
            <img src="none" alt="none" />
            <table>
                <tbody>
                    <tr>
                        <th>Species:</th>
                        <td>{loomianData.species}</td>
                    </tr>
                    <tr>
                        <th>Ability:</th>
                        <td>{loomianData.ability}</td>
                    </tr>
                    <tr>
                        <th>Personality:</th>
                        <td>{personalityString}</td>
                    </tr>
                    <tr>
                        <th style={{verticalAlign: "start"}}>UPs:</th>
                        <td>
                            <table className="result-up-table">
                                <tbody>
                                    <tr>
                                        <th>Health:</th>
                                        <td>{loomianData.ups.HP}</td>
                                    </tr>
                                    <tr>
                                        <th>Energy:</th>
                                        <td>{loomianData.ups.ENR}</td>
                                    </tr>
                                    <tr>
                                        <th>M. Attack:</th>
                                        <td>{loomianData.ups.MATK}</td>
                                    </tr>
                                    <tr>
                                        <th>M. Defence:</th>
                                        <td>{loomianData.ups.MDEF}</td>
                                    </tr>
                                    <tr>
                                        <th>R. Attack:</th>
                                        <td>{loomianData.ups.RATK}</td>
                                    </tr>
                                    <tr>
                                        <th>R. Defence:</th>
                                        <td>{loomianData.ups.RDEF}</td>
                                    </tr>
                                    <tr>
                                        <th>Speed:</th>
                                        <td>{loomianData.ups.SPE}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};