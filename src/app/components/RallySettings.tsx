import "@styles/rallysettings.css"
import { useState } from "react";

export default function RallySettings() {
    const [ rallyItems, setRallyItems ] = useState({fruit: "", toy: "", totem: ""});

    return (
        <fieldset className="rally-settings">
            <legend>Rally Settings:</legend>
            <ul className="rally-items-list">
                <li>
                    <img src="none" alt="none" />
                    <label htmlFor="rally-fruit-select">
                        Rally Fruit:
                    </label>
                    <select
                    id="rally-fruit-select"
                    onChange={(ev) => setRallyItems(prev => {
                        return {...prev, fruit: ev.target.value};
                    })}
                    value={rallyItems.fruit}
                    >
                        <option value="">(none)</option>
                        <option value="tutifruit">Tutifruit</option>
                    </select>
                </li>
                <li>
                    <img src="none" alt="none" />
                    <label htmlFor="rally-toy-select">
                        Rally Toy:
                    </label>
                    <select
                    id="rally-toy-select"
                    onChange={(ev) => setRallyItems(prev => {
                        return {...prev, toy: ev.target.value};
                    })}
                    value={rallyItems.toy}
                    >
                        <option value="">(none)</option>
                        <option value="bouncing-ball">Bouncing Ball</option>
                        <option value="yo-yo">Rally Yo-yo</option>
                    </select>
                </li>
                <li>
                    <img src="none" alt="none" />
                    <label htmlFor="rally-totem-select">
                        Rally Totem:
                    </label>
                    <select
                    id="rally-totem-select"
                    onChange={(ev) => setRallyItems(prev => {
                        return {...prev, totem: ev.target.value};
                    })}
                    value={rallyItems.totem}
                    >
                        <option value="">(none)</option>
                        <option value="smiling">Smiling Totem</option>
                        <option value="scowling">Scowling Totem</option>
                    </select>
                </li>
            </ul>
            <table className="rally-table-options">
                <thead>
                    <tr>
                        <th colSpan={2}>Boosts & Charms</th>
                        <th colSpan={2}>Auto Rally</th>
                        <th colSpan={4}>Auto UPs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <label htmlFor="gleam-charm-checkbox">Gleam Charm:</label>
                        </th>
                        <td>
                            <input type="checkbox" id="gleam-charm-checkbox"/>
                        </td>

                        <th>
                            <label htmlFor="auto-rally-checkbox">Auto Rally:</label>
                        </th>
                        <td>
                            <input type="checkbox" id="auto-rally-checkbox"/>
                        </td>

                        <th>
                            <label htmlFor="auto-ups-hp-input">HP</label>
                        </th>
                        <td>
                            <input type="number" id="auto-ups-hp-input" min={0} max={40} value={0}/>
                        </td>

                        <th>
                            <label htmlFor="auto-ups-enr-input">ENR</label>
                        </th>
                        <td>
                            <input type="number" id="auto-ups-enr-input" min={0} max={40} value={0}/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="gleam-boost-checkbox">Gleam Boost:</label>
                        </th>
                        <td>
                            <input type="checkbox" id="gleam-boost-checkbox"/>
                        </td>
                        
                        <th>
                            <label htmlFor="auto-gleam-checkbox">Gleaming?</label>
                        </th>
                        <td>
                            <input type="checkbox" id="auto-gleam-checkbox" />
                        </td>

                        <th>
                            <label htmlFor="auto-ups-matk-input">MATK</label>
                        </th>
                        <td>
                            <input type="number" id="auto-ups-matk-input" min={0} max={40} value={0}/>
                        </td>

                        <th>
                            <label htmlFor="auto-ups-mdef-input">MDEF</label>
                        </th>
                        <td>
                            <input type="number" id="auto-ups-mdef-input" min={0} max={40} value={0}/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="ability-charm-checkbox">Ability Charm:</label>
                        </th>
                        <td>
                            <input type="checkbox" id="ability-charm-checkbox"/>
                        </td>
                        
                        <th>
                            <label htmlFor="auto-ups-checkbox">UPs?</label>
                        </th>
                        <td>
                            <input type="checkbox" id="auto-ups-checkbox"/>
                        </td>

                        <th>
                            <label htmlFor="auto-ups-ratk-input">RATK</label>
                        </th>
                        <td>
                            <input type="number" id="auto-ups-ratk-input" min={0} max={40} value={0}/>
                        </td>
                        <th>
                            <label htmlFor="auto-ups-rdef-input">RDEF</label>
                        </th>
                        <td>
                            <input type="number" id="auto-ups-rdef-input" min={0} max={40} value={0}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} ></td>
                        <td className="auto-ability-section">
                            <select id="auto-ability-select" style={{display: "block"}}>
                                <option value="">(any ability)</option>
                                <option value="">Awakening</option>
                                <option value="">Terrifying</option>
                            </select>
                        </td>
                        <td></td>

                        <th>
                            <label htmlFor="auto-ups-spe-input">SPE</label>
                        </th>
                        <td>
                            <input type="number" id="auto-ups-spe-input" min={0} max={40} value={0}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </fieldset>
    );
}