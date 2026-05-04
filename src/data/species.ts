import { type SpeciesInfo } from "@/types"

export const SpeciesData: ReadonlyMap<string, SpeciesInfo> = new Map([
	["embit", {
		id: 1,
		name: "Embit",
		type: ["fire"],
		abilities: {0: "awakening", s: "terrifying"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "embit"
	}],
	["rabburn", {
		id: 2,
		name: "Rabburn",
		type: ["fire"],
		abilities: {0: "awakening", s: "terrifying"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "embit"
	}],
	["searknight", {
		id: 3,
		name: "Searknight",
		type: ["fire", "metal"],
		abilities: {0: "awakening", s: "terrifying"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "embit"
	}],
	["dripple", {
		id: 4,
		name: "Dripple",
		type: ["water"],
		abilities: {0: "awakening", s: "power-napper"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "dripple"
	}],
	["reptide", {
		id: 5,
		name: "Reptide",
		type: ["water"],
		abilities: {0: "awakening", s: "power-napper"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "dripple"
	}],
	["luminami", {
		id: 6,
		name: "Luminami",
		type: ["water", "light"],
		abilities: {0: "awakening", s: "power-napper"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "dripple"
	}],
	["fevine", {
		id: 7,
		name: "Fevine",
		type: ["plant"],
		abilities: {0: "awakening", s: "thriving-pace"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "fevine"
	}],
	["felver", {
		id: 8,
		name: "Felver",
		type: ["plant"],
		abilities: {0: "awakening", s: "thriving-pace"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "fevine"
	}],
	["tahtab", {
		id: 9,
		name: "Tahtab",
		type: ["plant", "brawler"],
		abilities: {0: "awakening", s: "thriving-pace"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "fevine"
	}],
	["eaglit", {
		id: 10,
		name: "Eaglit",
		type: ["light"],
		abilities: {0: "awakening", s: "applied-frustration"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "eaglit"
	}],
	["torprey", {
		id: 11,
		name: "Torprey",
		type: ["light"],
		abilities: {0: "awakening", s: "applied-frustration"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "eaglit"
	}],
	["falkyrie", {
		id: 12,
		name: "Falkyrie",
		type: ["light", "metal"],
		abilities: {0: "awakening", s: "applied-frustration"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "eaglit"
	}],
	["vambat", {
		id: 13,
		name: "Vambat",
		type: ["dark"],
		abilities: {0: "awakening", s: "demanding"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "vambat"
	}],
	["dimpire", {
		id: 14,
		name: "Dimpire",
		type: ["dark"],
		abilities: {0: "awakening", s: "demanding"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "vambat"
	}],
	["vesperatu", {
		id: 15,
		name: "Vesperatu",
		type: ["dark", "spirit"],
		abilities: {0: "awakening", s: "demanding"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "vambat"
	}],
	["snocub", {
		id: 16,
		name: "Snocub",
		type: ["ice"],
		abilities: {0: "awakening", s: "staunch"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snocub"
	}],
	["snowki", {
		id: 17,
		name: "Snowki",
		type: ["ice"],
		abilities: {0: "awakening", s: "staunch"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snocub"
	}],
	["himbrr", {
		id: 18,
		name: "Himbrr",
		type: ["ice", "earth"],
		abilities: {0: "awakening", s: "staunch"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snocub"
	}],
	["weevolt", {
		id: 19,
		name: "Weevolt",
		type: ["electric"],
		abilities: {0: "awakening", s: "brute-force"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "weevolt"
	}],
	["stozap", {
		id: 20,
		name: "Stozap",
		type: ["electric"],
		abilities: {0: "awakening", s: "brute-force"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "weevolt"
	}],
	["zuelong", {
		id: 21,
		name: "Zuelong",
		type: ["electric", "ancient"],
		abilities: {0: "awakening", s: "brute-force"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "weevolt"
	}],
	["twilat", {
		id: 22,
		name: "Twilat",
		type: ["simple"],
		abilities: {0: "territorial", 1: "confidence", s: "neutralize"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "twilat"
	}],
	["umbrat", {
		id: 23,
		name: "Umbrat",
		type: ["dark"],
		abilities: {0: "dusk", 1: "confidence", s: "overshadow"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "twilat"
	}],
	["luxoar", {
		id: 24,
		name: "Luxoar",
		type: ["light"],
		abilities: {0: "dawn", 1: "confidence", s: "illuminate"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "twilat"
	}],
	["tiklipse", {
		id: 25,
		name: "Tiklipse",
		type: ["light", "dark"],
		abilities: {0: "circadian", s: "total-eclipse"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "twilat"
	}],
	["cathorn", {
		id: 26,
		name: "Cathorn",
		type: ["bug"],
		abilities: {0: "hasty", s: "defensive-priority"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cathorn"
	}],
	["propae", {
		id: 27,
		name: "Propae",
		type: ["bug"],
		abilities: {0: "hasty", s: "defensive-priority"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cathorn"
	}],
	["cynamoth", {
		id: 28,
		name: "Cynamoth",
		type: ["bug", "air"],
		abilities: {0: "mystery-toxins", s: "flutter"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cathorn"
	}],
	["sumobito", {
		id: 29,
		name: "Sumobito",
		type: ["bug", "brawler"],
		abilities: {0: "guru", s: "double-strike"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cathorn"
	}],
	["twittle", {
		id: 30,
		name: "Twittle",
		type: ["air"],
		abilities: {0: "confidence", 1: "madcap", s: "rev-up"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "twittle"
	}],
	["paratweet", {
		id: 31,
		name: "Paratweet",
		type: ["air"],
		abilities: {0: "confidence", 1: "madcap", s: "rev-up"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "twittle"
	}],
	["avitross", {
		id: 32,
		name: "Avitross",
		type: ["air"],
		abilities: {0: "confidence", 1: "madcap", s: "rev-up"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "twittle"
	}],
	["pyder", {
		id: 33,
		name: "Pyder",
		type: ["bug", "toxic"],
		abilities: {0: "apprehension", 1: "webbing", s: "coursing-venom"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "pyder"
	}],
	["swolder", {
		id: 34,
		name: "Swolder",
		type: ["bug", "toxic"],
		abilities: {0: "apprehension", 1: "webbing", s: "coursing-venom"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "pyder"
	}],
	["antsee", {
		id: 35,
		name: "Antsee",
		type: ["plant", "bug"],
		abilities: {0: "mystery-toxins", 1: "woodsman", s: "drainage"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "antsee"
	}],
	["florant", {
		id: 36,
		name: "Florant",
		type: ["plant", "bug"],
		abilities: {0: "mystery-toxins", 1: "woodsman", s: "drainage"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "antsee"
	}],
	["grubby", {
		id: 37,
		name: "Grubby",
		type: ["bug"],
		abilities: {0: "odd-husk", 1: "premonition", s: "defensive-priority"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "grubby"
	}],
	["coonucopia", {
		id: 38,
		name: "Coonucopia",
		type: ["bug"],
		abilities: {0: "odd-husk", 1: "premonition", s: "defensive-priority"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "grubby"
	}],
	["terrafly", {
		id: 39,
		name: "Terrafly",
		type: ["bug", "toxic"],
		abilities: {0: "hotfoot", 1: "ambush", s: "bug-fever"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "grubby"
	}],
	["terraclaw", {
		id: 40,
		name: "Terraclaw",
		type: ["bug"],
		abilities: {0: "hotfoot", 1: "pincer-trap", s: "slick-shell"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "grubby"
	}],
	["kleptyke", {
		id: 41,
		name: "Kleptyke",
		type: ["dark"],
		abilities: {0: "burglar", 1: "apprehension", s: "ability-thief"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kleptyke"
	}],
	["ragoon", {
		id: 42,
		name: "Ragoon",
		type: ["dark"],
		abilities: {0: "burglar", 1: "apprehension", s: "ability-thief"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kleptyke"
	}],
	["babore", {
		id: 43,
		name: "Babore",
		type: ["earth"],
		abilities: {0: "boast", s: "resilience"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "babore"
	}],
	["boarrok", {
		id: 44,
		name: "Boarrok",
		type: ["earth"],
		abilities: {0: "boast", s: "resilience"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "babore"
	}],
	["geklow", {
		id: 45,
		name: "Geklow",
		type: ["electric", "light"],
		abilities: {0: "lightning-rod", 1: "radiance", s: "prismatic"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "geklow"
	}],
	["eleguana", {
		id: 46,
		name: "Eleguana",
		type: ["electric", "light"],
		abilities: {0: "lightning-rod", 1: "radiance", s: "prismatic"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "geklow"
	}],
	["slugling", {
		id: 47,
		name: "Slugling",
		type: ["plant"],
		abilities: {0: "mystery-toxins", 1: "ungracious-host", s: "slimy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "slugling"
	}],
	["escargrow", {
		id: 48,
		name: "Escargrow",
		type: ["plant"],
		abilities: {0: "mystery-toxins", 1: "ungracious-host", s: "slimy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "slugling"
	}],
	["gastroak", {
		id: 49,
		name: "Gastroak",
		type: ["plant"],
		abilities: {0: "mystery-toxins", 1: "ungracious-host", s: "slimy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "slugling"
	}],
	["kabunga", {
		id: 50,
		name: "Kabunga",
		type: ["plant"],
		abilities: {0: "communication", 1: "territorial", s: "noxious-weeds"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kabunga"
	}],
	["kabunga-h", {
		id: 50,
		name: "Kabunga-H",
		type: ["plant", "mind"],
		abilities: {0: "communication", 1: "expertise", s: "noxious-weeds"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kabunga-h"
	}],
	["wiki-wiki", {
		id: 51,
		name: "Wiki-Wiki",
		type: ["plant"],
		abilities: {0: "communication", 1: "medic", s: "noxious-weeds"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kabunga"
	}],
	["chartiki", {
		id: 52,
		name: "Chartiki",
		type: ["plant", "fire"],
		abilities: {0: "communication", 1: "inferno", s: "combustible"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kabunga"
	}],
	["waka-laka", {
		id: 53,
		name: "Waka-Laka",
		type: ["plant", "mind"],
		abilities: {0: "communication", 1: "expertise", s: "mycotic"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kabunga-h"
	}],
	["shawchi", {
		id: 54,
		name: "Shawchi",
		type: ["mind"],
		abilities: {0: "enchant", 1: "disenchant", s: "sharp-focus"},
		genderRatio: {m: 0, f: 1},
		rallies: "shawchi"
	}],
	["rakrawla", {
		id: 55,
		name: "Rakrawla",
		type: ["earth"],
		abilities: {0: "hasty", 1: "insulated", s: "lazy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "rakrawla"
	}],
	["sedimars", {
		id: 56,
		name: "Sedimars",
		type: ["earth"],
		abilities: {0: "hasty", 1: "insulated", s: "lazy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "rakrawla"
	}],
	["gumpod", {
		id: 57,
		name: "Gumpod",
		type: ["water"],
		abilities: {0: "protective-shell", s: "sharp-edges"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "gumpod"
	}],
	["ventacean", {
		id: 58,
		name: "Ventacean",
		type: ["water"],
		abilities: {0: "protective-shell", s: "sharp-edges"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "gumpod"
	}],
	["phancub", {
		id: 59,
		name: "Phancub",
		type: ["spirit", "brawler"],
		abilities: {0: "prowler", s: "adorable"},
		genderRatio: {m: 0, f: 0},
		rallies: "phancub"
	}],
	["phancub-v", {
		id: 59,
		name: "Phancub-V",
		type: ["spirit", "brawler"],
		abilities: {0: "ignorant", s: "clingy"},
		genderRatio: {m: 0, f: 0},
		rallies: "phancub-v"
	}],
	["ursoul", {
		id: 60,
		name: "Ursoul",
		type: ["spirit", "brawler"],
		abilities: {0: "prowler", s: "terrifying"},
		genderRatio: {m: 0, f: 0},
		rallies: "phancub"
	}],
	["ursnac", {
		id: 61,
		name: "Ursnac",
		type: ["spirit", "brawler"],
		abilities: {0: "tank", s: "bursting-seams"},
		genderRatio: {m: 0, f: 0},
		rallies: "phancub-v"
	}],
	["whispup", {
		id: 62,
		name: "Whispup",
		type: ["spirit", "fire"],
		abilities: {0: "temper", 1: "scorching-skin", s: "vengeance"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "whispup"
	}],
	["revenine", {
		id: 63,
		name: "Revenine",
		type: ["spirit", "fire"],
		abilities: {0: "temper", 1: "prowler", s: "vengeance"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "whispup"
	}],
	["skilava", {
		id: 64,
		name: "Skilava",
		type: ["fire"],
		abilities: {0: "scorching-skin", 1: "combustible", s: "pyro"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "skilava"
	}],
	["geksplode", {
		id: 65,
		name: "Geksplode",
		type: ["fire"],
		abilities: {0: "scorching-skin", 1: "combustible", s: "pyro"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "skilava"
	}],
	["eruptidon", {
		id: 66,
		name: "Eruptidon",
		type: ["fire"],
		abilities: {0: "scorching-skin", 1: "combustible", s: "pyro"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "skilava"
	}],
	["craytal", {
		id: 67,
		name: "Craytal",
		type: ["fire"],
		abilities: {0: "volcanic", 1: "territorial", s: "combustible"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "craytal"
	}],
	["craytal-c", {
		id: 67,
		name: "Craytal-C",
		type: ["ice", "plant"],
		abilities: {0: "parting-gift", 1: "chill", s: "regift"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "craytal-c"
	}],
	["krakaloa", {
		id: 68,
		name: "Krakaloa",
		type: ["fire"],
		abilities: {0: "volcanic", 1: "scorching-skin", s: "combustible"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "craytal"
	}],
	["volkaloa", {
		id: 69,
		name: "Volkaloa",
		type: ["fire", "ancient"],
		abilities: {0: "volcanic", 1: "berserk", s: "combustible"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "craytal"
	}],
	["festifir", {
		id: 70,
		name: "Festifir",
		type: ["ice", "plant"],
		abilities: {0: "parting-gift", 1: "chill", s: "regift"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "craytal-c"
	}],
	["igneol", {
		id: 71,
		name: "Igneol",
		type: ["ancient"],
		abilities: {0: "sharp-edges", 1: "premonition", s: "resilience"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "igneol"
	}],
	["chrysite", {
		id: 72,
		name: "Chrysite",
		type: ["ancient"],
		abilities: {0: "sharp-edges", 1: "premonition", s: "resilience"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "igneol"
	}],
	["obsidrugon", {
		id: 73,
		name: "Obsidrugon",
		type: ["ancient"],
		abilities: {0: "sharp-edges", 1: "sharp-claws", s: "resilience"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "igneol"
	}],
	["cafnote-m", {
		id: 74,
		name: "Cafnote-M",
		type: ["simple"],
		abilities: {0: "triumph", 1: "virtuoso", s: "brute-force"},
		genderRatio: {m: 1, f: 0},
		rallies: "cafnote"
	}],
	["cafnote-f", {
		id: 74,
		name: "Cafnote-F",
		type: ["simple"],
		abilities: {0: "adorable", 1: "virtuoso", s: "tone-deaf"},
		genderRatio: {m: 0, f: 1},
		rallies: "cafnote"
	}],
	["trumbull", {
		id: 75,
		name: "Trumbull",
		type: ["simple"],
		abilities: {0: "triumph", 1: "virtuoso", s: "brute-force"},
		genderRatio: {m: 1, f: 0},
		rallies: "cafnote"
	}],
	["mootune", {
		id: 76,
		name: "Mootune",
		type: ["simple"],
		abilities: {0: "adorable", 1: "virtuoso", s: "tone-deaf"},
		genderRatio: {m: 0, f: 1},
		rallies: "cafnote"
	}],
	["gobbidemic", {
		id: 77,
		name: "Gobbidemic",
		type: ["toxic"],
		abilities: {0: "immunized", s: "baneful"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "gobbidemic"
	}],
	["icigool", {
		id: 78,
		name: "Icigool",
		type: ["spirit", "ice"],
		abilities: {0: "parting-gift", 1: "expertise", s: "power-jaw"},
		genderRatio: {m: 0, f: 0},
		rallies: "icigool"
	}],
	["pyramind", {
		id: 79,
		name: "Pyramind",
		type: ["mind"],
		abilities: {0: "idiosyncratic", 1: "temper", s: "reign"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["pharoglyph", {
		id: 80,
		name: "Pharoglyph",
		type: ["mind"],
		abilities: {0: "idiosyncratic", 1: "temper", s: "reign"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["burroach", {
		id: 81,
		name: "Burroach",
		type: ["bug", "earth"],
		abilities: {0: "trash-armor", 1: "slimy", s: "sharp-claws"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "burroach"
	}],
	["garbantis", {
		id: 82,
		name: "Garbantis",
		type: ["bug", "earth"],
		abilities: {0: "trash-armor", 1: "slimy", s: "sharp-claws"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "burroach"
	}],
	["whimpor", {
		id: 83,
		name: "Whimpor",
		type: ["metal", "air"],
		abilities: {0: "clutch", 1: "frail-armor", s: "toxic-filter"},
		genderRatio: {m: 0, f: 0},
		rallies: "whimpor"
	}],
	["stratusoar", {
		id: 84,
		name: "Stratusoar",
		type: ["metal", "air"],
		abilities: {0: "clutch", 1: "frail-armor", s: "toxic-filter"},
		genderRatio: {m: 0, f: 0},
		rallies: "whimpor"
	}],
	["territi", {
		id: 85,
		name: "Territi",
		type: ["toxic", "metal"],
		abilities: {0: "immunized", 1: "confidence", s: "handy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "territi"
	}],
	["dyeborg", {
		id: 86,
		name: "Dyeborg",
		type: ["toxic", "metal"],
		abilities: {0: "immunized", 1: "tank", s: "handy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "territi"
	}],
	["operaptor", {
		id: 87,
		name: "Operaptor",
		type: ["metal", "earth"],
		abilities: {0: "terrifying", 1: "power-jaw", s: "overclock"},
		genderRatio: {m: 0, f: 0},
		rallies: "operaptor"
	}],
	["concredon", {
		id: 88,
		name: "Concredon",
		type: ["metal", "earth"],
		abilities: {0: "terrifying", 1: "power-jaw", s: "overclock"},
		genderRatio: {m: 0, f: 0},
		rallies: "operaptor"
	}],
	["tyrecks", {
		id: 89,
		name: "Tyrecks",
		type: ["metal", "earth"],
		abilities: {0: "terrifying", 1: "power-jaw", s: "overclock"},
		genderRatio: {m: 0, f: 0},
		rallies: "operaptor"
	}],
	["chompactor", {
		id: 90,
		name: "Chompactor",
		type: ["metal"],
		abilities: {0: "salvage", 1: "rev-up", s: "specialization"},
		genderRatio: {m: 0, f: 0},
		rallies: "chompactor"
	}],
	["munchweel", {
		id: 91,
		name: "Munchweel",
		type: ["metal"],
		abilities: {0: "forge", 1: "rev-up", s: "specialization"},
		genderRatio: {m: 0, f: 0},
		rallies: "chompactor"
	}],
	["scorb", {
		id: 92,
		name: "Scorb",
		type: ["metal"],
		abilities: {0: "communication", 1: "hover", s: "clutch"},
		genderRatio: {m: 0, f: 0},
		rallies: "scorb"
	}],
	["veylens", {
		id: 93,
		name: "Veylens",
		type: ["metal"],
		abilities: {0: "communication", 1: "hover", s: "clutch"},
		genderRatio: {m: 0, f: 0},
		rallies: "scorb"
	}],
	["gardrone", {
		id: 94,
		name: "Gardrone",
		type: ["metal"],
		abilities: {0: "communication", 1: "hover", s: "clutch"},
		genderRatio: {m: 0, f: 0},
		rallies: "scorb"
	}],
	["poochrol", {
		id: 95,
		name: "Poochrol",
		type: ["metal", "electric"],
		abilities: {0: "brute-force", s: "power-jaw"},
		genderRatio: {m: 0, f: 0},
		rallies: "poochrol"
	}],
	["hunder", {
		id: 96,
		name: "Hunder",
		type: ["metal", "electric"],
		abilities: {0: "brute-force", s: "power-jaw"},
		genderRatio: {m: 0, f: 0},
		rallies: "poochrol"
	}],
	["goppie", {
		id: 97,
		name: "Goppie",
		type: ["water"],
		abilities: {0: "rain-rush", 1: "finesse", s: "quick-recovery"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "goppie"
	}],
	["arapaigo", {
		id: 98,
		name: "Arapaigo",
		type: ["water"],
		abilities: {0: "rain-rush", 1: "finesse", s: "quick-recovery"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "goppie"
	}],
	["pyke", {
		id: 99,
		name: "Pyke",
		type: ["ancient", "water"],
		abilities: {0: "bitter-touch", 1: "combative", s: "brute-force"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["skelic", {
		id: 100,
		name: "Skelic",
		type: ["ancient", "water"],
		abilities: {0: "bitter-touch", 1: "combative", s: "brute-force"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["zaleo", {
		id: 101,
		name: "Zaleo",
		type: ["ancient", "electric"],
		abilities: {0: "adorable", 1: "driven", s: "overcharged"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["joltooth", {
		id: 102,
		name: "Joltooth",
		type: ["ancient", "electric"],
		abilities: {0: "ambush", 1: "driven", s: "overcharged"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["dobo", {
		id: 103,
		name: "Dobo",
		type: ["ancient", "fire"],
		abilities: {0: "hotfoot", 1: "pyro", s: "power-napper"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["infernix", {
		id: 104,
		name: "Infernix",
		type: ["ancient", "fire"],
		abilities: {0: "hotfoot", 1: "pyro", s: "power-napper"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["kyogo", {
		id: 105,
		name: "Kyogo",
		type: ["ancient", "dark"],
		abilities: {0: "anomaly", s: "surrogate"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["dorogo", {
		id: 106,
		name: "Dorogo",
		type: ["ancient", "dark"],
		abilities: {0: "anomaly", s: "surrogate"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["wiledile", {
		id: 107,
		name: "Wiledile",
		type: ["water", "plant"],
		abilities: {0: "swampy", s: "woodsman"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "wiledile"
	}],
	["mawamurk", {
		id: 108,
		name: "Mawamurk",
		type: ["water", "plant"],
		abilities: {0: "swampy", s: "woodsman"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "wiledile"
	}],
	["ampole", {
		id: 109,
		name: "Ampole",
		type: ["electric"],
		abilities: {0: "watcher", 1: "specialization", s: "sly"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "ampole"
	}],
	["amphiton", {
		id: 110,
		name: "Amphiton",
		type: ["electric", "mind"],
		abilities: {0: "watcher", 1: "specialization", s: "sly"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "ampole"
	}],
	["meditoad", {
		id: 111,
		name: "Meditoad",
		type: ["electric", "mind"],
		abilities: {0: "watcher", 1: "specialization", s: "sly"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "ampole"
	}],
	["pwuff", {
		id: 112,
		name: "Pwuff",
		type: ["water", "toxic"],
		abilities: {0: "toxic-spines", 1: "sharp-edges", s: "baneful"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "pwuff"
	}],
	["bloatox", {
		id: 113,
		name: "Bloatox",
		type: ["water", "toxic"],
		abilities: {0: "toxic-spines", 1: "sharp-edges", s: "baneful"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "pwuff"
	}],
	["barblast", {
		id: 114,
		name: "Barblast",
		type: ["water", "toxic"],
		abilities: {0: "toxic-spines", 1: "parting-gift", s: "high-explosive"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "pwuff"
	}],
	["swimp", {
		id: 115,
		name: "Swimp",
		type: ["water"],
		abilities: {0: "apprehension", 1: "power-jaw", s: "devious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "swimp"
	}],
	["snapr", {
		id: 116,
		name: "Snapr",
		type: ["water"],
		abilities: {0: "terrifying", 1: "power-jaw", s: "devious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "swimp"
	}],
	["garlash", {
		id: 117,
		name: "Garlash",
		type: ["water"],
		abilities: {0: "terrifying", 1: "power-jaw", s: "devious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "swimp"
	}],
	["hydrini", {
		id: 118,
		name: "Hydrini",
		type: ["bug", "water"],
		abilities: {0: "rain-summon", 1: "vivid-sight", s: "aqua-body"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "hydrini"
	}],
	["bezeldew", {
		id: 119,
		name: "Bezeldew",
		type: ["bug", "water"],
		abilities: {0: "rain-summon", 1: "vivid-sight", s: "aqua-body"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "hydrini"
	}],
	["deludrix", {
		id: 120,
		name: "Deludrix",
		type: ["bug", "water"],
		abilities: {0: "rain-summon", 1: "vivid-sight", s: "aqua-body"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "hydrini"
	}],
	["ceratot", {
		id: 121,
		name: "Ceratot",
		type: ["ancient", "plant"],
		abilities: {0: "staunch", 1: "frail-armor", s: "vigorous"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["trepodon", {
		id: 122,
		name: "Trepodon",
		type: ["ancient", "plant"],
		abilities: {0: "staunch", 1: "frail-armor", s: "vigorous"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["colossotrops", {
		id: 123,
		name: "Colossotrops",
		type: ["ancient", "plant"],
		abilities: {0: "staunch", 1: "frail-armor", s: "vigorous"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["cupoink", {
		id: 124,
		name: "Cupoink",
		type: ["fire"],
		abilities: {0: "caddie", 1: "madcap", s: "sweet-touch"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cupoink"
	}],
	["hoganosh", {
		id: 125,
		name: "Hoganosh",
		type: ["fire"],
		abilities: {0: "caddie", 1: "madcap", s: "sweet-touch"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cupoink"
	}],
	["mochibi", {
		id: 126,
		name: "Mochibi",
		type: ["ice"],
		abilities: {0: "sugar-rush", 1: "lucky", s: "shakedown"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "mochibi"
	}],
	["totemochi", {
		id: 127,
		name: "Totemochi",
		type: ["ice"],
		abilities: {0: "sugar-rush", 1: "lucky", s: "shakedown"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "mochibi"
	}],
	["mocho", {
		id: 128,
		name: "Mocho",
		type: ["ice"],
		abilities: {0: "sugar-rush", 1: "lucky", s: "shakedown"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "mochibi"
	}],
	["gwurm", {
		id: 129,
		name: "Gwurm",
		type: ["bug"],
		abilities: {0: "hard-candy", 1: "clingy", s: "defensive-priority"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "gwurm"
	}],
	["odasho", {
		id: 130,
		name: "Odasho",
		type: ["bug"],
		abilities: {0: "hard-candy", 1: "clingy", s: "defensive-priority"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "gwurm"
	}],
	["spreezy", {
		id: 131,
		name: "Spreezy",
		type: ["bug"],
		abilities: {0: "hard-candy", 1: "clingy", s: "sugar-rush"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "gwurm"
	}],
	["pipsee", {
		id: 132,
		name: "Pipsee",
		type: ["plant", "air"],
		abilities: {0: "glide", 1: "wind-summon", s: "vigilant"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "pipsee"
	}],
	["dandylil", {
		id: 133,
		name: "Dandylil",
		type: ["plant", "air"],
		abilities: {0: "glide", 1: "wind-summon", s: "vigilant"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "pipsee"
	}],
	["whippledriff", {
		id: 134,
		name: "Whippledriff",
		type: ["plant", "air"],
		abilities: {0: "glide", 1: "wind-summon", s: "vigilant"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "pipsee"
	}],
	["vari", {
		id: 135,
		name: "Vari",
		type: ["simple"],
		abilities: {0: "apprehension", 1: "guardian", s: "adorable"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["cervolen", {
		id: 136,
		name: "Cervolen",
		type: ["simple"],
		abilities: {0: "staunch", 1: "confidence", s: "boneheaded"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["wendolen", {
		id: 137,
		name: "Wendolen",
		type: ["spirit"],
		abilities: {0: "sharp-claws", 1: "gloomy", s: "finesse"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["kirolen", {
		id: 138,
		name: "Kirolen",
		type: ["ancient"],
		abilities: {0: "hasty", 1: "shakedown", s: "devious"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["zepholen", {
		id: 139,
		name: "Zepholen",
		type: ["air"],
		abilities: {0: "sharp-focus", 1: "tumultuous", s: "turbulent"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["venolen", {
		id: 140,
		name: "Venolen",
		type: ["toxic"],
		abilities: {0: "devious", 1: "toxic-touch", s: "baneful"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["wresolen", {
		id: 141,
		name: "Wresolen",
		type: ["brawler"],
		abilities: {0: "aggressive", 1: "ignorant", s: "ace"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["buzzolen", {
		id: 142,
		name: "Buzzolen",
		type: ["bug"],
		abilities: {0: "vigorous", 1: "marksman", s: "sweet-aroma"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["tundrolen", {
		id: 143,
		name: "Tundrolen",
		type: ["ice"],
		abilities: {0: "insulated", 1: "mysterious-cloak", s: "resilience"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["pyrolen", {
		id: 144,
		name: "Pyrolen",
		type: ["fire"],
		abilities: {0: "fanning-flame", 1: "volcanic", s: "quick-recovery"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["hydrolen", {
		id: 145,
		name: "Hydrolen",
		type: ["water"],
		abilities: {0: "hydrate", 1: "vigilant", s: "luck-of-the-sea"},
		genderRatio: {m: 0.2, f: 0.8},
		rallies: "vari"
	}],
	["copling", {
		id: 153,
		name: "Copling",
		type: ["ancient", "metal"],
		abilities: {0: "oxidize", 1: "devious", s: "playful"},
		genderRatio: {m: 0, f: 0},
		rallies: "copling"
	}],
	["copperage", {
		id: 154,
		name: "Copperage",
		type: ["ancient", "metal"],
		abilities: {0: "oxidize", 1: "devious", s: "playful"},
		genderRatio: {m: 0, f: 0},
		rallies: "copling"
	}],
	["oxidrake", {
		id: 155,
		name: "Oxidrake",
		type: ["ancient", "metal"],
		abilities: {0: "oxidize", 1: "devious", s: "combative"},
		genderRatio: {m: 0, f: 0},
		rallies: "copling"
	}],
	["spirivii", {
		id: 156,
		name: "Spirivii",
		type: ["bug", "spirit"],
		abilities: {0: "life-force"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "spirivii"
	}],
	["eidohusk", {
		id: 157,
		name: "Eidohusk",
		type: ["bug", "spirit"],
		abilities: {0: "life-force"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "spirivii"
	}],
	["harvesect", {
		id: 158,
		name: "Harvesect",
		type: ["bug", "spirit"],
		abilities: {0: "life-force"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "spirivii"
	}],
	["snowl", {
		id: 159,
		name: "Snowl",
		type: ["ice"],
		abilities: {0: "wise", 1: "chill", s: "glide"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snowl"
	}],
	["stricicle", {
		id: 160,
		name: "Stricicle",
		type: ["ice", "air"],
		abilities: {0: "wise", 1: "chill", s: "glide"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snowl"
	}],
	["wintrix", {
		id: 161,
		name: "Wintrix",
		type: ["ice", "air"],
		abilities: {0: "wise", 1: "chill", s: "glide"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snowl"
	}],
	["snagull", {
		id: 162,
		name: "Snagull",
		type: ["air"],
		abilities: {0: "clingy", 1: "immunized", s: "marksman"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snagull"
	}],
	["snagulp", {
		id: 163,
		name: "Snagulp",
		type: ["air", "toxic"],
		abilities: {0: "clingy", 1: "immunized", s: "marksman"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snagull"
	}],
	["snagoop", {
		id: 164,
		name: "Snagoop",
		type: ["air", "toxic"],
		abilities: {0: "clingy", 1: "immunized", s: "marksman"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snagull"
	}],
	["makame", {
		id: 165,
		name: "Makame",
		type: ["water"],
		abilities: {0: "tone-deaf", 1: "frail-armor", s: "quick-recovery"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "makame"
	}],
	["makoro", {
		id: 166,
		name: "Makoro",
		type: ["water"],
		abilities: {0: "tone-deaf", 1: "frail-armor", s: "quick-recovery"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "makame"
	}],
	["tsukame", {
		id: 167,
		name: "Tsukame",
		type: ["water"],
		abilities: {0: "tone-deaf", 1: "frail-armor", s: "quick-recovery"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "makame"
	}],
	["cavenish", {
		id: 168,
		name: "Cavenish",
		type: ["water", "plant"],
		abilities: {0: "bully", 1: "conspire", s: "sly"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cavenish"
	}],
	["banfino", {
		id: 169,
		name: "Banfino",
		type: ["water", "plant"],
		abilities: {0: "bully", 1: "conspire", s: "sly"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cavenish"
	}],
	["kanki", {
		id: 170,
		name: "Kanki",
		type: ["water", "brawler"],
		abilities: {0: "madcap", 1: "aggressive", s: "ambush"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kanki"
	}],
	["kanibo", {
		id: 171,
		name: "Kanibo",
		type: ["water", "brawler"],
		abilities: {0: "madcap", 1: "aggressive", s: "ambush"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kanki"
	}],
	["sharpod", {
		id: 172,
		name: "Sharpod",
		type: ["water", "metal"],
		abilities: {0: "rev-up", 1: "terrifying", s: "frenzy"},
		genderRatio: {m: 0, f: 0},
		rallies: "sharpod"
	}],
	["samarine", {
		id: 173,
		name: "Samarine",
		type: ["water", "metal"],
		abilities: {0: "rev-up", 1: "terrifying", s: "frenzy"},
		genderRatio: {m: 0, f: 0},
		rallies: "sharpod"
	}],
	["lumica", {
		id: 174,
		name: "Lumica",
		type: ["water"],
		abilities: {0: "sharp-edges", 1: "premonition", s: "repugnant"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "lumica"
	}],
	["lumello", {
		id: 175,
		name: "Lumello",
		type: ["water"],
		abilities: {0: "sharp-edges", 1: "premonition", s: "repugnant"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "lumica"
	}],
	["polypi", {
		id: 176,
		name: "Polypi",
		type: ["water", "light"],
		abilities: {0: "temper", 1: "enchanted-coat", s: "incandescent"},
		genderRatio: {m: 0, f: 0},
		rallies: "polypi"
	}],
	["laphyra", {
		id: 177,
		name: "Laphyra",
		type: ["water", "light"],
		abilities: {0: "temper", 1: "enchanted-coat", s: "incandescent"},
		genderRatio: {m: 0, f: 0},
		rallies: "polypi"
	}],
	["jellusa", {
		id: 178,
		name: "Jellusa",
		type: ["water", "light"],
		abilities: {0: "temper", 1: "enchanted-coat", s: "incandescent"},
		genderRatio: {m: 0, f: 0},
		rallies: "polypi"
	}],
	["taoshi", {
		id: 179,
		name: "Taoshi",
		type: ["simple"],
		abilities: {0: "enchanted-coat", 1: "adorable", s: "sendoff"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "taoshi"
	}],
	["taoshinu", {
		id: 180,
		name: "Taoshinu",
		type: ["simple"],
		abilities: {0: "enchanted-coat", 1: "guardian", s: "sendoff"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "taoshi"
	}],
	["kittone", {
		id: 181,
		name: "Kittone",
		type: ["simple"],
		abilities: {0: "tone-deaf", 1: "adorable", s: "shakedown"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kittone"
	}],
	["lyricat", {
		id: 182,
		name: "Lyricat",
		type: ["simple"],
		abilities: {0: "tone-deaf", 1: "burglar", s: "shakedown"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kittone"
	}],
	["boonary", {
		id: 183,
		name: "Boonary",
		type: ["spirit"],
		abilities: {0: "two-face"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["somata", {
		id: 184,
		name: "Somata",
		type: ["water", "mind"],
		abilities: {0: "guardian", 1: "repugnant", s: "adorable"},
		genderRatio: {m: 0, f: 1},
		rallies: "somata"
	}],
	["clionae", {
		id: 185,
		name: "Clionae",
		type: ["water", "mind"],
		abilities: {0: "guardian", 1: "repugnant", s: "persistence"},
		genderRatio: {m: 0, f: 1},
		rallies: "somata"
	}],
	["cinnaboo", {
		id: 186,
		name: "Cinnaboo",
		type: ["spirit"],
		abilities: {0: "sweet-touch", 1: "playful", s: "shakedown"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cinnaboo"
	}],
	["cinnogre", {
		id: 187,
		name: "Cinnogre",
		type: ["spirit"],
		abilities: {0: "sweet-touch", 1: "ignorant", s: "shakedown"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cinnaboo"
	}],
	["swirelle", {
		id: 188,
		name: "Swirelle",
		type: ["air"],
		abilities: {0: "appetite"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "swirelle"
	}],
	["swishy", {
		id: 189,
		name: "Swishy",
		type: ["water"],
		abilities: {0: "regift", 1: "gummy", s: "viscid"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "swishy"
	}],
	["fiscarna", {
		id: 190,
		name: "Fiscarna",
		type: ["water"],
		abilities: {0: "regift", 1: "gummy", s: "viscid"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "swishy"
	}],
	["bunpuff", {
		id: 191,
		name: "Bunpuff",
		type: ["plant", "earth"],
		abilities: {0: "adorable", 1: "noxious-weeds", s: "glutton"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "bunpuff"
	}],
	["bunnecki", {
		id: 192,
		name: "Bunnecki",
		type: ["plant", "earth"],
		abilities: {0: "adorable", 1: "noxious-weeds", s: "glutton"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "bunpuff"
	}],
	["dractus", {
		id: 193,
		name: "Dractus",
		type: ["plant"],
		abilities: {0: "protective-shell", 1: "insulated", s: "anomaly"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "dractus"
	}],
	["frutress", {
		id: 194,
		name: "Frutress",
		type: ["plant"],
		abilities: {0: "sharp-edges", 1: "insulated", s: "anomaly"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "dractus"
	}],
	["seedrake", {
		id: 195,
		name: "Seedrake",
		type: ["plant"],
		abilities: {0: "sharp-edges", 1: "insulated", s: "anomaly"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "dractus"
	}],
	["volpup", {
		id: 196,
		name: "Volpup",
		type: ["electric", "toxic"],
		abilities: {0: "aggressive", 1: "pitch-black", s: "mystery-toxins"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "volpup"
	}],
	["halvantic", {
		id: 197,
		name: "Halvantic",
		type: ["electric", "toxic"],
		abilities: {0: "aggressive", 1: "pitch-black", s: "mystery-toxins"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "volpup"
	}],
	["impkin", {
		id: 198,
		name: "Impkin",
		type: ["dark"],
		abilities: {0: "resentful", 1: "devious", s: "handy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "impkin"
	}],
	["grimmick", {
		id: 199,
		name: "Grimmick",
		type: ["dark"],
		abilities: {0: "resentful", 1: "devious", s: "handy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "impkin"
	}],
	["imperior", {
		id: 200,
		name: "Imperior",
		type: ["dark"],
		abilities: {0: "resentful", 1: "devious", s: "handy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "impkin"
	}],
	["mistlebud", {
		id: 201,
		name: "Mistlebud",
		type: ["plant"],
		abilities: {0: "festive-spirit"},
		genderRatio: {m: 0, f: 0},
		rallies: "mistlebud"
	}],
	["hollibunch", {
		id: 202,
		name: "Hollibunch",
		type: ["plant", "light"],
		abilities: {0: "festive-spirit"},
		genderRatio: {m: 0, f: 0},
		rallies: "mistlebud"
	}],
	["cryocub", {
		id: 203,
		name: "Cryocub",
		type: ["ice"],
		abilities: {0: "adorable", 1: "communication", s: "mysterious-cloak"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cryocub"
	}],
	["barbadger", {
		id: 204,
		name: "Barbadger",
		type: ["ice", "brawler"],
		abilities: {0: "dauntless", 1: "communication", s: "mysterious-cloak"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cryocub"
	}],
	["kyeggo", {
		id: 205,
		name: "Kyeggo",
		type: ["dark"],
		abilities: {0: "anomaly", 1: "vivid-sight", s: "vicious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kyeggo"
	}],
	["doreggo", {
		id: 206,
		name: "Doreggo",
		type: ["dark", "air"],
		abilities: {0: "anomaly", 1: "vivid-sight", s: "vicious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kyeggo"
	}],
	["dreggodyne", {
		id: 207,
		name: "Dreggodyne",
		type: ["dark", "air"],
		abilities: {0: "staunch", 1: "vivid-sight", s: "vicious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kyeggo"
	}],
	["wispur", {
		id: 208,
		name: "Wispur",
		type: ["spirit", "light"],
		abilities: {0: "radiance", 1: "fog-summon", s: "captivating"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "wispur"
	}],
	["lampurge", {
		id: 209,
		name: "Lampurge",
		type: ["spirit", "light"],
		abilities: {0: "radiance", 1: "fog-summon", s: "captivating"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "wispur"
	}],
	["charonyx", {
		id: 210,
		name: "Charonyx",
		type: ["spirit", "light"],
		abilities: {0: "radiance", 1: "fog-summon", s: "reaper"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "wispur"
	}],
	["smoal", {
		id: 211,
		name: "Smoal",
		type: ["fire", "toxic"],
		abilities: {0: "heat-summon", 1: "scorching-skin", s: "blistering-heat"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "smoal"
	}],
	["charkiln", {
		id: 212,
		name: "Charkiln",
		type: ["fire", "toxic"],
		abilities: {0: "heat-summon", 1: "scorching-skin", s: "blistering-heat"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "smoal"
	}],
	["billoforge", {
		id: 213,
		name: "Billoforge",
		type: ["fire", "toxic"],
		abilities: {0: "heat-summon", 1: "scorching-skin", s: "blistering-heat"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "smoal"
	}],
	["sherbot", {
		id: 214,
		name: "Sherbot",
		type: ["ice", "metal"],
		abilities: {0: "overclock", 1: "sugar-rush", s: "chill"},
		genderRatio: {m: 0, f: 0},
		rallies: "sherbot"
	}],
	["llamba", {
		id: 215,
		name: "Llamba",
		type: ["simple"],
		abilities: {0: "playful", 1: "regurgitate", s: "wholesome"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "llamba"
	}],
	["choochew", {
		id: 216,
		name: "Choochew",
		type: ["simple"],
		abilities: {0: "playful", 1: "regurgitate", s: "wholesome"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "llamba"
	}],
	["loomala", {
		id: 217,
		name: "Loomala",
		type: ["simple"],
		abilities: {0: "herd-behavior", 1: "regurgitate", s: "wholesome"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "llamba"
	}],
	["fentern", {
		id: 218,
		name: "Fentern",
		type: ["simple"],
		abilities: {0: "intern", 1: "rush-hour", s: "trader"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "fentern"
	}],
	["weaselin", {
		id: 219,
		name: "Weaselin",
		type: ["simple"],
		abilities: {0: "partnership", 1: "rush-hour", s: "trader"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "fentern"
	}],
	["singeel", {
		id: 220,
		name: "Singeel",
		type: ["electric"],
		abilities: {0: "safety-pot"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "singeel"
	}],
	["moreel", {
		id: 221,
		name: "Moreel",
		type: ["electric", "dark"],
		abilities: {0: "one-of-many"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "singeel"
	}],
	["crabushi", {
		id: 222,
		name: "Crabushi",
		type: ["metal", "brawler"],
		abilities: {0: "vengeance", 1: "power-claw", s: "razor-sharp"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "crabushi"
	}],
	["crabtana", {
		id: 223,
		name: "Crabtana",
		type: ["metal", "brawler"],
		abilities: {0: "vengeance", 1: "power-claw", s: "razor-sharp"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "crabushi"
	}],
	["teripod", {
		id: 224,
		name: "Teripod",
		type: ["ancient", "light"],
		abilities: {0: "watcher", 1: "illuminate", s: "mesmerizing"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "teripod"
	}],
	["teridescent", {
		id: 225,
		name: "Teridescent",
		type: ["ancient", "light"],
		abilities: {0: "watcher", 1: "illuminate", s: "mesmerizing"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "teripod"
	}],
	["skampi", {
		id: 226,
		name: "Skampi",
		type: ["water"],
		abilities: {0: "protective-shell", 1: "clutch", s: "trash-armor"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "skampi"
	}],
	["prawnsu", {
		id: 227,
		name: "Prawnsu",
		type: ["water"],
		abilities: {0: "applied-frustration", 1: "clutch", s: "vicious"},
		genderRatio: {m: 0, f: 1},
		rallies: "skampi"
	}],
	["shrimposte", {
		id: 228,
		name: "Shrimposte",
		type: ["water"],
		abilities: {0: "combative", 1: "clutch", s: "vicious"},
		genderRatio: {m: 1, f: 0},
		rallies: "skampi"
	}],
	["dokan", {
		id: 229,
		name: "Dokan",
		type: ["earth", "toxic"],
		abilities: {0: "spine-break", 1: "immunized", s: "sponge"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "dokan"
	}],
	["dokumori", {
		id: 230,
		name: "Dokumori",
		type: ["earth", "toxic"],
		abilities: {0: "spine-break", 1: "immunized", s: "sponge"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "dokan"
	}],
	["mirrami", {
		id: 231,
		name: "Mirrami",
		type: ["spirit", "metal"],
		abilities: {0: "reflective", 1: "mimic", s: "analyze"},
		genderRatio: {m: 0, f: 0},
		rallies: "mirrami"
	}],
	["mirraith", {
		id: 232,
		name: "Mirraith",
		type: ["spirit", "metal"],
		abilities: {0: "reflective", 1: "mimic", s: "analyze"},
		genderRatio: {m: 0, f: 0},
		rallies: "mirrami"
	}],
	["thawmin", {
		id: 233,
		name: "Thawmin",
		type: ["ice", "mind"],
		abilities: {0: "communication", 1: "expertise", s: "foresight"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kabunga-h"
	}],
	["leshent", {
		id: 234,
		name: "Leshent",
		type: ["plant", "dark"],
		abilities: {0: "watcher", 1: "gloomy", s: "petrifying"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "craytal-c"
	}],
	["kayute", {
		id: 235,
		name: "Kayute",
		type: ["ice", "dark"],
		abilities: {0: "ravenous", 1: "playful", s: "designated-chompers"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kayute"
	}],
	["kayappa", {
		id: 236,
		name: "Kayappa",
		type: ["ice", "dark"],
		abilities: {0: "ravenous", 1: "playful", s: "designated-chompers"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kayute"
	}],
	["kramboss", {
		id: 237,
		name: "Kramboss",
		type: ["ice", "dark"],
		abilities: {0: "ravenous", 1: "battle-armor", s: "designated-chompers"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "kayute"
	}],
	["leopaw", {
		id: 238,
		name: "Leopaw",
		type: ["light", "ice"],
		abilities: {0: "sharp-claws", 1: "mesmerizing", s: "prismatic"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "leopaw"
	}],
	["chienta", {
		id: 239,
		name: "Chienta",
		type: ["light", "ice"],
		abilities: {0: "sharp-claws", 1: "mesmerizing", s: "prismatic"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "leopaw"
	}],
	["eyebrella", {
		id: 240,
		name: "Eyebrella",
		type: ["water"],
		abilities: {0: "hydro-vortex", 1: "do-or-die", s: "pluvial"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "eyebrella"
	}],
	["parasoul", {
		id: 241,
		name: "Parasoul",
		type: ["water", "dark"],
		abilities: {0: "hydro-vortex", 1: "do-or-die", s: "pluvial"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "call-sound"
	}],
	["lissen", {
		id: 242,
		name: "Lissen",
		type: ["mind"],
		abilities: {0: "motivational", 1: "do-or-die", s: "virtuoso"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "lissen"
	}],
	["biwarned", {
		id: 243,
		name: "Biwarned",
		type: ["mind", "simple"],
		abilities: {0: "motivational", 1: "do-or-die", s: "virtuoso"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "lissen"
	}],
	["lantot", {
		id: 244,
		name: "Lantot",
		type: ["fire"],
		abilities: {0: "wildfire", 1: "do-or-die", s: "sendoff"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "lantot"
	}],
	["lantorch", {
		id: 245,
		name: "Lantorch",
		type: ["fire", "light"],
		abilities: {0: "wildfire", 1: "do-or-die", s: "sendoff"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "lantot"
	}],
	["milgoo", {
		id: 246,
		name: "Milgoo",
		type: ["toxic"],
		abilities: {0: "soul-siphon", 1: "do-or-die", s: "devious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "milgoo"
	}],
	["rancidor", {
		id: 247,
		name: "Rancidor",
		type: ["toxic", "ancient"],
		abilities: {0: "soul-siphon", 1: "do-or-die", s: "devious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "milgoo"
	}],
	["nautling", {
		id: 248,
		name: "Nautling",
		type: ["ancient", "simple"],
		abilities: {0: "watcher", 1: "protective-shell", s: "viscid"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["nautillect", {
		id: 249,
		name: "Nautillect",
		type: ["ancient", "mind"],
		abilities: {0: "watcher", 1: "wise", s: "viscid"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["naukout", {
		id: 250,
		name: "Naukout",
		type: ["ancient", "brawler"],
		abilities: {0: "watcher", 1: "assertive", s: "viscid"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["yutiny", {
		id: 251,
		name: "Yutiny",
		type: ["ancient", "air"],
		abilities: {0: "triumph", 1: "petrifying", s: "tumultuous"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["yuteen", {
		id: 252,
		name: "Yuteen",
		type: ["ancient", "air"],
		abilities: {0: "triumph", 1: "petrifying", s: "tumultuous"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["yutyphoon", {
		id: 253,
		name: "Yutyphoon",
		type: ["ancient", "air"],
		abilities: {0: "triumph", 1: "petrifying", s: "tumultuous"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["venile", {
		id: 254,
		name: "Venile",
		type: ["ancient", "toxic"],
		abilities: {0: "power-claw", 1: "venomous", s: "brutal-wrath"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["verinox", {
		id: 255,
		name: "Verinox",
		type: ["ancient", "toxic"],
		abilities: {0: "power-claw", 1: "venomous", s: "brutal-wrath"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["verinosaur", {
		id: 256,
		name: "Verinosaur",
		type: ["ancient", "toxic"],
		abilities: {0: "power-claw", 1: "venomous", s: "brutal-wrath"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["nymvolt", {
		id: 257,
		name: "Nymvolt",
		type: ["electric", "bug"],
		abilities: {0: "thunder-summon", 1: "recurrent", s: "charged-arc"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "nymvolt"
	}],
	["ohmbolt", {
		id: 258,
		name: "Ohmbolt",
		type: ["electric", "bug"],
		abilities: {0: "thunder-summon", 1: "recurrent", s: "charged-arc"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "nymvolt"
	}],
	["plasmoth", {
		id: 259,
		name: "Plasmoth",
		type: ["electric", "bug"],
		abilities: {0: "thunder-summon", 1: "recurrent", s: "charged-arc"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "nymvolt"
	}],
	["cicalute", {
		id: 260,
		name: "Cicalute",
		type: ["bug", "mind"],
		abilities: {0: "metamorphosis", 1: "mesmerizing", s: "expertise"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cicalute"
	}],
	["violana", {
		id: 261,
		name: "Violana",
		type: ["bug", "mind"],
		abilities: {0: "metamorphosis", 1: "mesmerizing", s: "expertise"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "cicalute"
	}],
	["goswing", {
		id: 262,
		name: "Goswing",
		type: ["air", "simple"],
		abilities: {0: "compliant", 1: "burglar", s: "hydrate"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "goswing"
	}],
	["ganderveil", {
		id: 263,
		name: "Ganderveil",
		type: ["air", "simple"],
		abilities: {0: "compliant", 1: "burglar", s: "hydrate"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "goswing"
	}],
	["banooh", {
		id: 264,
		name: "Banooh",
		type: ["simple"],
		abilities: {0: "shakedown", 1: "assertive", s: "berserk"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "banooh"
	}],
	["banokey", {
		id: 265,
		name: "Banokey",
		type: ["simple", "brawler"],
		abilities: {0: "shakedown", 1: "assertive", s: "berserk"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "banooh"
	}],
	["spirwix", {
		id: 266,
		name: "Spirwix",
		type: ["fire", "spirit"],
		abilities: {0: "disenchant", 1: "raging-fire", s: "devious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "spirwix"
	}],
	["malevowax", {
		id: 267,
		name: "Malevowax",
		type: ["fire", "spirit"],
		abilities: {0: "disenchant", 1: "raging-fire", s: "devious"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "spirwix"
	}],
	["grievestone", {
		id: 268,
		name: "Grievestone",
		type: ["earth", "spirit"],
		abilities: {0: "sob", 1: "bitter-touch", s: "seize"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "grievestone"
	}],
	["obelost", {
		id: 269,
		name: "Obelost",
		type: ["earth", "spirit"],
		abilities: {0: "wail", 1: "bitter-touch", s: "seize"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "grievestone"
	}],
	["jimby", {
		id: 270,
		name: "Jimby",
		type: ["simple"],
		abilities: {0: "fortissimo", 1: "carol", s: "virtuoso"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "jimby"
	}],
	["piccolio", {
		id: 271,
		name: "Piccolio",
		type: ["simple"],
		abilities: {0: "fortissimo", 1: "carol", s: "virtuoso"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "jimby"
	}],
	["wassel", {
		id: 272,
		name: "Wassel",
		type: ["ice"],
		abilities: {0: "adorable", s: "elusive"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "wassel"
	}],
	["borealisk", {
		id: 273,
		name: "Borealisk",
		type: ["ice"],
		abilities: {0: "upper-hand", s: "elusive"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "wassel"
	}],
	["snicle", {
		id: 274,
		name: "Snicle",
		type: ["ice", "dark"],
		abilities: {0: "puncture", s: "toxic-sac"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snicle"
	}],
	["slivyce", {
		id: 275,
		name: "Slivyce",
		type: ["ice", "dark"],
		abilities: {0: "puncture", s: "toxic-sac"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "snicle"
	}],
	["nukichi", {
		id: 276,
		name: "Nukichi",
		type: ["simple"],
		abilities: {0: "lucky", 1: "sly", s: "handy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "nukichi"
	}],
	["dainuki", {
		id: 277,
		name: "Dainuki",
		type: ["simple"],
		abilities: {0: "lucky", 1: "sly", s: "handy"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "nukichi"
	}],
	["terracolt", {
		id: 278,
		name: "Terracolt",
		type: ["fire", "earth"],
		abilities: {0: "power-legs", 1: "rush-hour", s: "confidence"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "terracolt"
	}],
	["broncotta", {
		id: 279,
		name: "Broncotta",
		type: ["fire", "earth"],
		abilities: {0: "power-legs", 1: "rush-hour", s: "confidence"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: "terracolt"
	}],
	["duskit", {
		id: 289,
		name: "Duskit",
		type: ["spirit", "mind"],
		abilities: {0: "harmonize", s: "mean-spirited"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["ikazune", {
		id: 290,
		name: "Ikazune",
		type: ["fire", "electric"],
		abilities: {0: "raging-fire", s: "rechargeable"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["protogon", {
		id: 291,
		name: "Protogon",
		type: ["metal"],
		abilities: {0: "analyze", s: "replicate"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["dakuda", {
		id: 292,
		name: "Dakuda",
		type: ["water"],
		abilities: {0: "brute-force", s: "hydrate"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["cosmeleon", {
		id: 295,
		name: "Cosmeleon",
		type: ["simple"],
		abilities: {0: "adaptable"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["mutagon", {
		id: 296,
		name: "Mutagon",
		type: ["mind", "brawler"],
		abilities: {0: "tank", s: "heavy-fists"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["cephalops", {
		id: 297,
		name: "Cephalops",
		type: ["water", "dark"],
		abilities: {0: "bloodsucker", s: "nightmarish"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["elephage", {
		id: 298,
		name: "Elephage",
		type: ["electric"],
		abilities: {0: "malware", s: "replicate"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["phagenaut", {
		id: 299,
		name: "Phagenaut",
		type: ["electric"],
		abilities: {0: "malware", s: "overcharged"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["glacadia", {
		id: 300,
		name: "Glacadia",
		type: ["ice", "ancient"],
		abilities: {0: "chilling-passion", s: "deep-frostbite"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["arceros", {
		id: 301,
		name: "Arceros",
		type: ["fire", "ancient"],
		abilities: {0: "burning-rage", s: "third-degree-burn"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["novadeaus", {
		id: 302,
		name: "Novadeaus",
		type: ["fire", "ice"],
		abilities: {0: "obsidian-heart"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["morphezu", {
		id: 303,
		name: "Morphezu",
		type: ["air"],
		abilities: {0: "sky-borne", s: "all-seeing"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["behemoroth", {
		id: 304,
		name: "Behemoroth",
		type: ["earth"],
		abilities: {0: "land-borne", s: "all-seeing"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["leviatross", {
		id: 305,
		name: "Leviatross",
		type: ["water"],
		abilities: {0: "depths-borne", s: "all-seeing"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["cosmiore-encased", {
		id: 307,
		name: "Cosmiore-Encased",
		type: ["ancient", "mind"],
		abilities: {0: "enchanted-coat", s: "quick-recovery"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["cosmiore-cracked", {
		id: 307,
		name: "Cosmiore-Cracked",
		type: ["ancient", "mind"],
		abilities: {0: "enchanted-coat", s: "eager"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["cosmiore-unleashed", {
		id: 307,
		name: "Cosmiore-Unleashed",
		type: ["ancient", "mind"],
		abilities: {0: "cosmic-pressure", s: "idiosyncratic"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["solnecta", {
		id: 308,
		name: "Solnecta",
		type: ["bug", "light"],
		abilities: {0: "night-light", s: "intensify"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["nymaurae", {
		id: 309,
		name: "Nymaurae",
		type: ["light", "air"],
		abilities: {0: "quick-recovery", s: "incandescent"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["nymesis", {
		id: 310,
		name: "Nymesis",
		type: ["dark", "air"],
		abilities: {0: "impose", s: "pitch-black"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["metronette", {
		id: 311,
		name: "Metronette",
		type: ["dark", "mind"],
		abilities: {0: "mysterious-cloak", s: "applied-frustration"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["nevermare", {
		id: 312,
		name: "Nevermare",
		type: ["plant", "spirit"],
		abilities: {0: "razor-sharp", s: "frenzy"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["gargolem", {
		id: 313,
		name: "Gargolem",
		type: ["earth", "air"],
		abilities: {0: "immunized", 1: "clutch", s: "master"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["odoyaga", {
		id: 314,
		name: "Odoyaga",
		type: ["mind", "air"],
		abilities: {0: "hag", s: "frenzy"},
		genderRatio: {m: 0, f: 1},
		rallies: false
	}],
	["wabalisc", {
		id: 315,
		name: "Wabalisc",
		type: ["ice"],
		abilities: {0: "ignorant", s: "hasty"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["akhalos", {
		id: 316,
		name: "Akhalos",
		type: ["ice", "water"],
		abilities: {0: "aqua-body", s: "aggressive"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["celesting", {
		id: 317,
		name: "Celesting",
		type: ["metal", "light"],
		abilities: {0: "reverberate", s: "mystic-tone"},
		genderRatio: {m: 0, f: 0},
		rallies: false
	}],
	["mimask", {
		id: 318,
		name: "Mimask",
		type: ["dark"],
		abilities: {0: "mask-swap", s: "facade"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
	["grimyuline", {
		id: 319,
		name: "Grimyuline",
		type: ["dark", "brawler"],
		abilities: {0: "sharp-edges", s: "sharp-claws"},
		genderRatio: {m: 0.5, f: 0.5},
		rallies: false
	}],
]);