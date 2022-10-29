import React, { FC } from 'react';
import styled from '@emotion/styled';
import {
	Typography,
	Button,
	Grid,
	Modal,
	Fade,
	Backdrop,
	Box,
} from '@mui/material';
import { TypePokemonInfo } from 'types/pokemon';

interface IModalProps {
	isModalOpen: boolean;
	handleModalClose: () => void;
	pokemonInfo: null | TypePokemonInfo;
}

type pokemonTypeStyleProps = {
	bg: string;
};

let colorString = '';

const ModalComponent: FC<IModalProps> = ({
	isModalOpen,
	handleModalClose,
	pokemonInfo,
}) => {
	const pokemonImage = pokemonInfo?.sprites?.other.dream_world.front_default;
	const pokemonName = pokemonInfo?.name;
	const pokemonWeight = pokemonInfo?.weight;
	const pokemonHeight = pokemonInfo?.height;

	const renderPokemonAbilites = () => {
		return pokemonInfo?.abilities?.map((ability: any) => {
			return (
				<Typography className="pokemon-abilites" key={ability.ability.name}>
					<li>
						{ability.ability.name} {ability.is_hidden && '(hidden ability)'}
					</li>
				</Typography>
			);
		});
	};

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

	const renderPokemonType = () => {
		return pokemonInfo?.types?.map((item, index) => {
			colorString = item?.type?.name;
			return (
				<>
					<PokemonType
						className="pokemon-type-item"
						bg={colorType(item?.type?.name)}
						key={index}>
						{item?.type?.name}
					</PokemonType>
				</>
			);
		});
	};

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={isModalOpen}
				onClose={handleModalClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={isModalOpen}>
					<BoxModal>
						<Grid container spacing={10}>
							<Grid item xs={12} sm={12} md={4} lg={4}>
								<img
									className="pokemon-image"
									src={pokemonImage}
									alt="pokemon-image"
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={8} lg={8}>
								<Typography className="pokemon-name">{pokemonName}</Typography>
								<FlexContainer>
									<Typography className="pokemon-weight">
										Weight:
										<span className="pokemon-weight-item">{pokemonWeight}</span>
									</Typography>
									<Typography className="pokemon-height">
										Height:{' '}
										<span className="pokemon-height-item">{pokemonHeight}</span>
									</Typography>
								</FlexContainer>
								<Typography className="pokemon-abilites-title">
									Abilities:
									<div className="pokemon-abilites-wrapper">
										{renderPokemonAbilites()}
									</div>
								</Typography>
								<Typography className="pokemon-type-title">
									Type: {renderPokemonType()}
								</Typography>
								<Button className="btn-more-detail" variant="contained">
									More Detail
								</Button>
							</Grid>
						</Grid>
					</BoxModal>
				</Fade>
			</Modal>
		</div>
	);
};

const BoxModal = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* @media (max-width: 400px) {
	
	} */
	width: 1162px;
	height: 544px;
	background-color: #fff;
	/* box-shadow: 24; */
	&:focus-visible {
		outline: none;
	}
	padding: 140px 40px 40px 40px;
	border-radius: 24px;

	.pokemon-image {
		width: 375px;
		height: 375px;
	}
	.pokemon-name {
		font-weight: 700;
		font-size: 40px;
		line-height: 60px;
		color: #42494d;
		margin-bottom: 36px;
	}
	.pokemon-weight {
		font-weight: 700;
	}
	.pokemon-weight-item {
		font-weight: 100;
		margin-left: 16px;
	}
	.pokemon-height {
		font-weight: 700;
	}
	.pokemon-height-item {
		font-weight: 100;
		margin-left: 16px;
	}
	.pokemon-abilites-title {
		display: flex;
		align-self: flex-start;
		font-weight: 700;
		margin-bottom: 20px;
	}
	.pokemon-abilites-wrapper {
		margin-left: 30px;
		display: inline-block;
	}
	.pokemon-type-title {
		display: flex;
		gap: 16px;
		font-weight: 700;
	}
	.btn-more-detail {
		background-color: #e6ab09;
		width: 167px;
		height: 50px;
		border-radius: 14px;
		margin-top: 32px;
		font-weight: 700;
		font-size: 20px;
		line-height: 30px;
		box-shadow: none;
		:hover {
			background-color: #bf8d04;
		}
	}
`;

const FlexContainer = styled('div')`
	display: flex;
	align-items: flex-start;
	padding: 0px;
	gap: 50px;
	margin-bottom: 20px;
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

export default ModalComponent;
