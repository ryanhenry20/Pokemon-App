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

export type TypePokemonInfo = {
	id: number;
	name: string;
	weight: string;
	height: string;
	sprites: {
		other: {
			dream_world: {
				front_default: string;
			};
		};
	};
	abilities: [];
	types: [
		{
			type: {
				name: string;
			};
		}
	];
};
