export type LoomianType = "fire" | "water" | "plant" | "steel" | "light" | "brawler";

export interface SpeciesInfo {
    readonly name: string;
    readonly type: [LoomianType, LoomianType?]
    readonly abilities: {0: string, 1?: string, s?: string}
}

export const SpeciesData: {[key: string]: SpeciesInfo} = {
    embit: {
        name: "Embit",
        type: ["fire"],
        abilities: {0: "awakening", s: "terrifying"}
    },
    rabburn: {
        name: "Rabburn",
        type: ["fire"],
        abilities: {0: "awakening", s: "terrifying"}
    },
    searknight: {
        name: "Searknight",
        type: ["fire", "steel"],
        abilities: {0: "awakening", s: "terrifying"}
    },
    dripple: {
        name: "Dripple",
        type: ["water"],
        abilities: {0: "awakening", s: "power-napper"}
    },
    reptide: {
        name: "Reptide",
        type: ["water"],
        abilities: {0: "awakening", s: "power-napper"}
    },
    luminami: {
        name: "Luminami",
        type: ["water", "light"],
        abilities: {0: "awakening", s: "power-napper"}
    },
    fevine: {
        name: "Fevine",
        type: ["plant"],
        abilities: {0: "awakening", s: "thriving-pace"}
    },
    felver: {
        name: "Felver",
        type: ["plant"],
        abilities: {0: "awakening", s: "thriving-pace"}
    },
    tahtab: {
        name: "Tahtab",
        type: ["plant", "brawler"],
        abilities: {0: "awakening", s: "thriving-pace"}
    },
}