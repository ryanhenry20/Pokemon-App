export type TypePokemonDetail = {
	name: string;
	id: number;
	types: string[];
	abilities: string[];
	stats: {
		hp: number;
		attack: number;
		defense: number;
		specialAttack: number;
		specialDefense: number;
		speed: number;
	};
};
