import type { SpeciesInfo } from "@/types";
import React, { memo, useEffect, useMemo, useRef, useState, type ChangeEventHandler, type FocusEventHandler, type KeyboardEventHandler } from "react";
import { SpeciesData } from "@/data/species";

const SpeciesInput = memo(function({ loomianSpeciesData, onSpeciesChange }: {
    loomianSpeciesData?: SpeciesInfo,
    onSpeciesChange?: (value: string) => void
}) {
    const [speciesInput, setSpeciesInput] = useState<string>("");
    const [speciesOptionsVisible, setSpeciesOptionsVisible] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const speciesInputRef = useRef<HTMLInputElement>(null);
    const speciesOptionsRef = useRef<HTMLUListElement>(null);
    const isKeyboardActive = useRef<boolean>(false);

    const filteredSpeciesList: [string, SpeciesInfo][] = useMemo(() =>
        [...SpeciesData.entries()].filter(([key]) =>
            key.includes(speciesInput.toLowerCase().replaceAll(/\s/g, '-'))
        ),
    [speciesInput]);

    const speciesInputOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSpeciesInput(event.target.value);
        setActiveIndex(-1);
    }
    const speciesInputOnFocus: FocusEventHandler<HTMLInputElement> = () => {
        setSpeciesInput("");
        setSpeciesOptionsVisible(true);
    }
    const speciesInputOnBlur: FocusEventHandler<HTMLInputElement> = () => {
        tryChangeSpecies(speciesInput);
    }
    const speciesInputOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        switch (event.key) {
            case "ArrowDown": {
                event.preventDefault();
                setActiveIndex(prev => Math.min(prev + 1, filteredSpeciesList.length - 1));
                isKeyboardActive.current = true;
                break;
            }
            case "ArrowUp": {
                event.preventDefault();
                setActiveIndex(prev => Math.max(prev - 1, -1));
                isKeyboardActive.current = true;
                break;
            }
            case "Enter": {
                if (activeIndex >= 0) {
                    event.preventDefault();
                    speciesInputRef.current?.blur();
                    tryChangeSpecies(filteredSpeciesList[activeIndex][0]);
                    return;
                }
                break;
            }
        }

        if (event.key === "Enter") {
            event.preventDefault()
            event.currentTarget.blur();
        }
    }

    const speciesOptionOnMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
        if (isKeyboardActive.current) { return; }

        const target: HTMLLIElement = event.currentTarget;
        setActiveIndex(filteredSpeciesList.findIndex(
            ([key]) => key === target.getAttribute("data-value")
        ));
    }

    const tryChangeSpecies = (newValue: string) => {
        setSpeciesOptionsVisible(false);
        
        const key: string = newValue
            .toLowerCase()
            .replaceAll(/\s/g, '-');

        const species: SpeciesInfo|undefined = SpeciesData.get(key);
        if (!species || species === loomianSpeciesData) {
            setSpeciesInput(loomianSpeciesData?.name ?? "");
            return;
        }
        setSpeciesInput(species.name);
        onSpeciesChange?.(key);
    }

    useEffect(() => {
        if (activeIndex < 0 || !speciesOptionsRef.current) { return; }

        const activeLI: HTMLLIElement = speciesOptionsRef.current.querySelectorAll("li")[activeIndex];
        activeLI?.scrollIntoView({ block: "nearest" });
    }, [activeIndex]);

    return (
        <div className="rally-form-species-wrap">
            <input
                name="species-input"
                className="rally-form-species"
                placeholder="Species..."
                value={speciesInput}
                ref={speciesInputRef}
                onChange={speciesInputOnChange}
                onFocus={speciesInputOnFocus}
                onBlur={speciesInputOnBlur}
                onKeyDown={speciesInputOnKeyDown}
            ></input>
            {
                speciesOptionsVisible &&
                <ul
                    className="rally-form-species-options"
                    onMouseMove={() => isKeyboardActive.current = false}
                    ref={speciesOptionsRef}
                >{
                    filteredSpeciesList.map(([key, info], index) =>
                        <li
                            key={key}
                            data-value={key}
                            className={index === activeIndex ? "highlighted" : undefined}
                            onMouseEnter={speciesOptionOnMouseEnter}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {speciesInputRef.current?.blur(); tryChangeSpecies(key)} }
                        >
                            {info.name}
                        </li>
                    )
                }</ul>
            }
        </div>
    );
});

export default SpeciesInput;