export type personalityValue = -2 | -1 | 0 | 1 | 2;
export type uniquePointValue =
    1 |2 |3 |4 |5 |6 |7 |8 |9 |10|
    11|12|13|14|15|16|17|18|19|20|
    21|22|23|24|25|26|27|28|29|30|
    31|32|33|34|35|36|37|38|39|40|
    0;

export interface Loomian {
    species: string,
    ability: string,
    personality: {
        ENR: personalityValue,
        MATK: personalityValue,
        MDEF: personalityValue,
        RATK: personalityValue,
        RDEF: personalityValue,
        SPE: personalityValue,
    },
    ups: {
        HP: uniquePointValue,
        ENR: uniquePointValue,
        MATK: uniquePointValue,
        MDEF: uniquePointValue,
        RATK: uniquePointValue,
        RDEF: uniquePointValue,
        SPE: uniquePointValue,
    },
    moves: [string?, string?, string?, string?]
}