export type LoomianType = "fire" | "water" | "plant" | "steel" | "light" | "brawler";

export interface SpeciesInfo {
    readonly name: string;
    readonly type: [LoomianType, LoomianType?]
    readonly abilities: {0: string, 1?: string, s?: string}
    readonly rallies: string|false,
}

export const SpeciesData: {[key: string]: SpeciesInfo} = {
    embit: {
        name: "Embit",
        type: ["fire"],
        abilities: {0: "awakening", s: "terrifying"},
        rallies: "embit"
    },
    rabburn: {
        name: "Rabburn",
        type: ["fire"],
        abilities: {0: "awakening", s: "terrifying"},
        rallies: "embit"
    },
    searknight: {
        name: "Searknight",
        type: ["fire", "steel"],
        abilities: {0: "awakening", s: "terrifying"},
        rallies: "embit"
    },
    dripple: {
        name: "Dripple",
        type: ["water"],
        abilities: {0: "awakening", s: "power-napper"},
        rallies: "dripple"
    },
    reptide: {
        name: "Reptide",
        type: ["water"],
        abilities: {0: "awakening", s: "power-napper"},
        rallies: "dripple"
    },
    luminami: {
        name: "Luminami",
        type: ["water", "light"],
        abilities: {0: "awakening", s: "power-napper"},
        rallies: "dripple"
    },
    fevine: {
        name: "Fevine",
        type: ["plant"],
        abilities: {0: "awakening", s: "thriving-pace"},
        rallies: "fevine"
    },
    felver: {
        name: "Felver",
        type: ["plant"],
        abilities: {0: "awakening", s: "thriving-pace"},
        rallies: "fevine"
    },
    tahtab: {
        name: "Tahtab",
        type: ["plant", "brawler"],
        abilities: {0: "awakening", s: "thriving-pace"},
        rallies: "fevine"
    },
}