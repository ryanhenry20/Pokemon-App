import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Grid, Typography, Card } from '@mui/material';
import { TypePokemonInfo } from 'types/pokemon';

interface ICardListPokemonProps {
	pokemonData: TypePokemonInfo;
	// pokemonData: {
	// 	id: number;
	// 	name: string;
	// 	types: [
	// 		{
	// 			type: {
	// 				slot?: string;
	// 				name: string;
	// 			};
	// 		}
	// 	];
	// 	sprites: {
	// 		other: {
	// 			dream_world: {
	// 				front_default: string;
	// 			};
	// 		};
	// 	};
	// };
	onSelectPokemon: (data: TypePokemonInfo) => void;
}

type pokemonTypeStyleProps = {
	bg: string;
};

let colorString = '';

const CardListPokemon: FC<ICardListPokemonProps> = ({
	pokemonData,
	onSelectPokemon,
}) => {
	const pokemonImage = pokemonData?.sprites.other.dream_world.front_default;

	const colorType = (type: string) => {
		switch (type) {
			case 'fire':
				return '#e01714';
			case 'grass':
				return '#00C851';
			case 'water':
				return '#00B0FF';
			case 'bug':
				return '#C6FF00';
			case 'normal':
				return '#A4A4A4';
			case 'poison':
				return '#AA66CC';
			case 'electric':
				return '#FFBB33';
			case 'ground':
				return '#D2691E';
			case 'fairy':
				return '#FF33CC';
			case 'fighting':
				return '#CC0000';
			case 'psychic':
				return '#FF4444';
			case 'rock':
				return '#996633';
			case 'ghost':
				return '#9933CC';
			case 'ice':
				return '#33B5E5';
			case 'dragon':
				return '#AA66CC';
			case 'dark':
				return '#666666';
			case 'steel':
				return '#669999';
			case 'flying':
				return '#8686dc';
			default:
				return '#FFFFFF';
		}
	};

	const renderTypePokemon = () => {
		return pokemonData?.types.map((item, index) => {
			colorString = item.type.name;
			return (
				<>
					<PokemonType bg={colorType(item.type.name)} key={index}>
						{item.type.name}
					</PokemonType>
				</>
			);
		});
	};

	const onClickCard = () => {
		console.log('pokemonData', pokemonData);
	};

	return (
		<StyledCardListPokemon>
			<Card
				className="card-pokemon"
				onClick={() => {
					onSelectPokemon(pokemonData);
				}}>
				<img className="pokemon-img" src={pokemonImage} alt="" />
				<Typography className="pokemon-id">#{pokemonData?.id}</Typography>
				<Typography className="pokemon-name" variant="h6">
					{pokemonData?.name}
				</Typography>
				<WrapperTypePokemon>
					{/* <Typography className="pokemon-type">Fire</Typography>
					<Typography className="pokemon-type">Flying</Typography>
					<Typography className="pokemon-type">Dragon</Typography>
					<Typography className="pokemon-type">Water</Typography> */}
					{renderTypePokemon()}
				</WrapperTypePokemon>
			</Card>
		</StyledCardListPokemon>
	);
};

const StyledCardListPokemon = styled.div`
	display: flex;
	justify-content: center;
	.pokemon-img {
		width: 275px;
		height: 275px;
	}
	.card-pokemon {
		border-radius: 24px;
		width: 325px;
		height: 550px;
		padding: 45px 25px;
		box-shadow: none;
		&:hover {
			cursor: pointer;
			box-shadow: 5px 10px 25px rgba(0, 0, 0, 0.35);
		}
	}
	.pokemon-id {
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 20px;
		color: #b3b6b8;
		margin-bottom: 10px;
		margin-top: 10px;
	}
	.pokemon-name {
		font-style: normal;
		font-weight: 700;
		font-size: 40px;
		line-height: 60px;
		color: #42494d;
		margin-bottom: 10px;
	}
`;

const WrapperTypePokemon = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 10px;
`;

const PokemonType = styled(Typography)<pokemonTypeStyleProps>`
	padding: 7px 25px;
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 18px;
	width: fit-content;
	height: 100%;
	/* background: #e66d00; */
	background: ${props => props.bg};
	border-radius: 25px;
	color: #fff;
`;

export default CardListPokemon;
