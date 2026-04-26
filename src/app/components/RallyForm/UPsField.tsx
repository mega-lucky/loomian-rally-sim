import { memo } from "react";
import { short as statsShort } from "@/data/stats"
import { type LoomianStat, type LoomianUPs, type UniquePointValue } from "@/types";

const UPsField = memo(function({ loomno, upsData, onChange } : {
    loomno: 1 | 2,
    upsData: LoomianUPs,
    onChange?: (stat: LoomianStat, value: UniquePointValue) => void
}) {
    const handleUpChange = (stat: LoomianStat, value: string) => {
        let numberVal = Number(value.match(/^\d+/));
        if (numberVal > 40) numberVal = 40;
        else if (numberVal < 0) numberVal = 0;
        
        onChange?.(stat, numberVal as UniquePointValue);
    }
    return (
        <fieldset className="rally-form-ups-wrap">
            <legend>UPs:</legend>
            <div className="rally-form-ups-inputs-wrap">{
                statsShort.map(stat => {
                    const id: string = `${stat}-up-${loomno}`;

                    return (
                        <div className="rally-form-ups-input" key={stat}>
                            <label htmlFor={id}>{stat}</label>
                            <input
                            type="number"
                            min="0" max="40"
                            value={upsData[stat].toString()}
                            id={id}
                            onChange={(ev) => handleUpChange(stat, ev.target.value)}
                            />
                        </div>
                    );
                })
            }</div>
        </fieldset>
    );
});

export default UPsField;