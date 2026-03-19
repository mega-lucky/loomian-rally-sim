import type { PersonalityStat } from "@/types";

export const short = ["HP", "ENR", "MATK", "MDEF", "RATK", "RDEF", "SPE"] as const;
export const long = ["Health", "Energy", "Melee Attack", "Melee Defence", "Ranged Attack", "Ranged Defence", "Speed"] as const;
export const abbreviatedLong = ["Health", "Energy", "M. Attack", "M. Defence", "R. Attack", "R. Defence", "Speed"] as const;

export const positive = ["Hyper", "Brawny", "Robust", "Smart", "Clever", "Nimble"] as const;
export const negative = ["Dull", "Frail", "Tender", "Clumsy", "Foolish", "Sluggish"] as const;
export const strong = {
    positive: ["Very Hyper", "Very Brawny", "Very Robust", "Very Smart", "Very Clever", "Very Nimble"],
    negative: ["Very Dull", "Very Frail", "Very Tender", "Very Clumsy", "Very Foolish", "Very Sluggish"],
} as const;

export const getStatFromPersonality = (personality: string) => {
    switch (personality) {
        case "Hyper":
        case "Dull":
        case "Very Hyper":
        case "Very Dull":
            return "ENR";

        case "Brawny":
        case "Frail":
        case "Very Brawny":
        case "Very Frail":
            return "MATK";

        case "Robust":
        case "Tender":
        case "Very Robust":
        case "Very Tender":
            return "MDEF";

        case "Smart":
        case "Clumsy":
        case "Very Smart":
        case "Very Clumsy":
            return "RATK";

        case "Clever":
        case "Foolish":
        case "Very Clever":
        case "Very Foolish":
            return "RDEF";

        case "Nimble":
        case "Sluggish":
        case "Very Nimble":
        case "Very Sluggish":
            return "SPE";
    }
}

export const getPersonalityFromStat = (stat: PersonalityStat, factor: -2|-1|0|1|2) => {
    if (factor === 0) { return "Indifferent"; }

    const index = short.indexOf(stat);
    if (index === -1 || index === 0) { return; }

    const array = factor === -2 ? strong.negative :
    factor === -1 ? negative :
    factor === 1 ? positive :
    factor === 2 ? strong.positive :
    (null as never);

    return array?.[index-1];
}