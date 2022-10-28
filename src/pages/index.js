import PokemonLanding from 'Modules/PokemonLanding';

export default function Index({ allPokemon, allPokemonDetail, typePokemon }) {
	return (
		<main>
			<PokemonLanding
				data={allPokemon}
				allPokemonDetail={allPokemonDetail}
				typePokemon={typePokemon}
			/>
		</main>
	);
}

export async function getServerSideProps() {
	try {
		const resAllPokemon = await fetch(
			'https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0'
		);

		const allPokemon = await resAllPokemon.json();

		const allPokemonDetail = await Promise.all(
			allPokemon.results.map(async allPokemon => {
				const resPokemon = await fetch(allPokemon.url);
				const pokemonData = await resPokemon.json();
				return pokemonData;
			})
		);

		const resTypePokemon = await fetch('https://pokeapi.co/api/v2/type');
		const typePokemon = await resTypePokemon.json();

		return {
			props: {
				allPokemon,
				allPokemonDetail,
				typePokemon: typePokemon.results,
			},
		};
	} catch (error) {
		return {
			props: {
				data: [],
			},
		};
	}
}
