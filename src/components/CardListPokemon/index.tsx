import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Grid, Typography, Card } from '@mui/material';

const CardListPokemon: FC = () => {
	return (
		<StyledCardListPokemon>
			<Card className="card-pokemon">
				<img className="pokemon-img" src="/assets/img/Charmander.png" alt="" />
				<Typography className="pokemon-id">#001</Typography>
				<Typography className="pokemon-name" variant="h6">
					Charmander
				</Typography>
				<WrapperTypePokemon>
					<Typography className="pokemon-type">Fire</Typography>
					<Typography className="pokemon-type">Flying</Typography>
					<Typography className="pokemon-type">Dragon</Typography>
					<Typography className="pokemon-type">Water</Typography>
				</WrapperTypePokemon>
			</Card>
		</StyledCardListPokemon>
	);
};

const StyledCardListPokemon = styled.div`
	display: flex;
	justify-content: center;
	.pokemon-img {
		max-width: 275px;
		max-height: 275px;
	}
	.card-pokemon {
		border-radius: 24px;
		max-width: 325px;
		min-height: 550px;
		padding: 45px 25px;
		box-shadow: none;
		:hover {
			cursor: pointer;
			box-shadow: 5px 10px 25px rgba(0, 0, 0, 0.35);
		}
	}
`;

const WrapperTypePokemon = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 10px;
	.pokemon-type {
		padding: 7px 25px;
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 18px;
		width: fit-content;
		height: 100%;
		background: #e66d00;
		border-radius: 25px;
		color: #fff;
	}
`;

export default CardListPokemon;
