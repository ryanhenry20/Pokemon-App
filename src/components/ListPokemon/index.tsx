import React, { FC, useState, useContext } from 'react';
import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import {
	CardListPokemon,
	PaginationComponent,
	ModalComponent,
} from 'components';
import { PokemonContext } from 'context/pokemonContext';
import { TypePokemonDetail, TypePokemonInfo } from 'types/pokemon';

interface IListPokemon {
	allPokemonDetail?: string[];
	onSelectPokemon: (data: TypePokemonInfo) => void;
}

const ListPokemon: FC<IListPokemon> = ({
	allPokemonDetail,
	onSelectPokemon,
}) => {
	const { pokemonDetail } = useContext<any>(PokemonContext);

	// console.log('pokemon Context', pokemon);
	console.log('pokemon pokemonDetail', pokemonDetail);

	const renderCardPokemon = () => {
		return pokemonDetail?.map((item: TypePokemonInfo, index: number) => {
			return (
				<Grid item xs={12} sm={6} md={4} lg={4} key={index}>
					<CardListPokemon
						pokemonData={item}
						onSelectPokemon={onSelectPokemon}
					/>
				</Grid>
			);
		});
	};

	return (
		<StyledListPokemon>
			<img
				className="quarter-circle-top"
				src="/assets/img/quarter-circle-yellow.svg"
				alt=""
			/>
			<img
				className="quarter-circle-bottom"
				src="/assets/img/quarter-circle-yellow.svg"
				alt=""
			/>
			<Typography className="title">PokèDex</Typography>
			<Typography className="sub-title-1">All Generation Totaling</Typography>
			<Typography className="sub-title-2">9999 Pokemon</Typography>
			<Grid
				container
				rowSpacing={6}
				columnSpacing={2}
				className="grid-container">
				{renderCardPokemon()}
			</Grid>
			<WrapperPagination>
				<PaginationComponent />
			</WrapperPagination>
		</StyledListPokemon>
	);
};

const StyledListPokemon = styled.div`
	position: relative;
	background-color: #ffcb3b;

	.quarter-circle-top {
		position: absolute;
		width: 65%;
		top: 0;
	}
	.quarter-circle-bottom {
		position: absolute;
		width: 65%;
		bottom: 0;
		right: 0;
		transform: rotate(180deg);
	}
	.title {
		font-style: normal;
		font-weight: 800;
		font-size: 40px;
		line-height: 60px;
		color: #42494d;
		text-align: center;
		margin-top: 80px;
		padding-top: 80px;
		margin-bottom: 16px;
	}
	.sub-title-1 {
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 36px;
		text-align: center;
		margin-bottom: 8px;
		color: #42494d;
	}
	.sub-title-2 {
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 36px;
		text-align: center;
		color: #42494d;
	}
	.grid-container {
		padding: 58px 140px;
		position: relative;
		// media query
		@media (max-width: 600px) {
			padding: 24px 24px;
		}
	}
	.card-pokemon {
	}
`;

const WrapperPagination = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 36px;
`;
export default ListPokemon;
