import type { SpeciesInfo } from "@/data/species";
import { memo, useState, type ChangeEventHandler, type FocusEventHandler, type KeyboardEventHandler } from "react";
import { SpeciesData } from "@/data/species";

const SpeciesInput = memo(function({ loomianSpeciesData, onSpeciesChange }: {
    loomianSpeciesData: SpeciesInfo,
    onSpeciesChange?: (value: string) => void
}) {
    const [speciesInput, setSpeciesInput] = useState<string>("");

    const speciesInputOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSpeciesInput(event.target.value);
    }
    const speciesInputOnBlur: FocusEventHandler<HTMLInputElement> = () => {
        tryChangeSpecies();
    }
    const speciesInputOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            tryChangeSpecies();
            event.currentTarget.blur();
        }
    }
    const tryChangeSpecies = () => {
        const key: string = speciesInput
            .toLowerCase()
            .replaceAll(/\s/g, '-');

        const species: SpeciesInfo|undefined = SpeciesData[key];
        if (!species || species === loomianSpeciesData) {
            setSpeciesInput(loomianSpeciesData?.name ?? "");
            return;
        }
        setSpeciesInput(species.name);
        onSpeciesChange?.(key);
    }
    return (
        <input
            name="species-input"
            className="rally-form-species"
            placeholder="Species..."
            value={speciesInput}
            onChange={speciesInputOnChange}
            onBlur={speciesInputOnBlur}
            onKeyDown={speciesInputOnKeyDown}
        ></input>
    );
});

export default SpeciesInput;