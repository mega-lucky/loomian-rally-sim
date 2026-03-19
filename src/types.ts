export type PersonalityValue = -2 | -1 | 0 | 1 | 2;
export type UniquePointValue =
    1 |2 |3 |4 |5 |6 |7 |8 |9 |10|
    11|12|13|14|15|16|17|18|19|20|
    21|22|23|24|25|26|27|28|29|30|
    31|32|33|34|35|36|37|38|39|40|
    0;
    
export type LoomianStat = "HP" | "ENR" | "MATK" | "MDEF" | "RATK" | "RDEF" | "SPE";
export type PersonalityStat = "ENR" | "MATK" | "MDEF" | "RATK" | "RDEF" | "SPE";
export type StrongPersonality = "Very Hyper"|"Very Brawny"|"Very Robust"|"Very Smart"|"Very Clever"|"Very Nimble";
export type PosPersonality = "Hyper"|"Brawny"|"Robust"|"Smart"|"Clever"|"Nimble";
export type NegPersonality = "Dull"|"Frail"|"Tender"|"Clumsy"|"Foolish"|"Sluggish";
export type WeakPersonality = PosPersonality | NegPersonality;

export type LoomianPersonality = {
    [K in PersonalityStat]: PersonalityValue
}
export type LoomianUPs = {
    [K in LoomianStat]: UniquePointValue
}

export interface Loomian {
    species: string,
    ability: string,
    personality: LoomianPersonality,
    ups: LoomianUPs,
    moves: [string?, string?, string?, string?]
}