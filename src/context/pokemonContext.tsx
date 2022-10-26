import React, { FC, useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const PokemonContext = createContext({});

export const PokemonProvider: FC<React.ReactNode> = ({ children }) => {
	const [pokemon, setPokemon] = useState([]);
	const [pokemonDetail, setPokemonDetail] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getPokemon = async () => {
			const resPokemon = await axios.get(
				`https://pokeapi.co/api/v2/pokemon?limit=${9}&offset=${0}`
			);
			const resPokemonDetail = await Promise.all(
				resPokemon.data.results.map(async (item: any) => {
					const res = await axios.get(item.url);
					return res.data;
				})
			);
			console.log('resPokemonDetail', resPokemonDetail);
			setPokemonDetail(resPokemonDetail);
			setPokemon(resPokemon.data.results);
			setLoading(false);
		};
		getPokemon();
	}, []);

	const getPokemonPaggination = async (page: number) => {
		const resPokemon = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?limit=${9}&offset=${(page - 1) * 9}`
		);
		const resPokemonDetail = await Promise.all(
			resPokemon.data.results.map(async (item: any) => {
				const res = await axios.get(item.url);
				return res.data;
			})
		);
		console.log('resPokemonDetail', resPokemonDetail);
		setPokemonDetail(resPokemonDetail);
		setPokemon(resPokemon.data.results);
		setLoading(false);
	};

	return (
		<PokemonContext.Provider
			value={{ pokemon, loading, pokemonDetail, getPokemonPaggination }}>
			{children}
		</PokemonContext.Provider>
	);
};
