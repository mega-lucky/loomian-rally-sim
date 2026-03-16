import { memo, type Dispatch, type SetStateAction } from "react";
import { short as statsShort } from "@/data/stats"
import { type Loomian } from "@/types";

const UPsField = memo(function({ loomno, upsData, setLoomianData } : {
    loomno: 1 | 2,
    upsData: Loomian["ups"],
    setLoomianData: Dispatch<SetStateAction<Loomian>>
}) {
    const handleUpChange = (stat: typeof statsShort[number], value: string) => {
        let numberVal = Number(value.match(/^\d+/));
        if (numberVal > 40) numberVal = 40;
        else if (numberVal < 0) numberVal = 0;

        setLoomianData(prev => {
            return {...prev, ups: {...prev.ups, [stat]: numberVal}}
        })
    }
    return (
        <fieldset className="rally-form-ups-wrap">
            <legend>UPs:</legend>
            <div className="rally-form-ups-inputs-wrap">{
                statsShort.map((it, idx) => {
                    const id: string = `${it}-up-${loomno}`;

                    return (
                        <div className="rally-form-ups-input" key={idx}>
                            <label htmlFor={id}>{it}</label>
                            <input
                            type="number"
                            min="0" max="40"
                            value={upsData[it].toString()}
                            id={id}
                            onChange={(ev) => handleUpChange(it, ev.target.value)}
                            />
                        </div>
                    );
                })
            }</div>
        </fieldset>
    );
});

export default UPsField;