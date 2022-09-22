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

interface IModalProps {
	isModalOpen: boolean;
	handleModalClose: () => void;
	pokemonInfo: {};
}

const ModalComponent: FC<IModalProps> = ({
	isModalOpen,
	handleModalClose,
	pokemonInfo,
}) => {
	const pokemonImage = pokemonInfo?.sprites?.other.dream_world.front_default;
	const pokemonName = pokemonInfo?.name;
	const pokemonWeight = pokemonInfo?.weight;
	const pokemonHeight = pokemonInfo?.height;

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
								<Typography className="pokemon-weight">
									Weight: {pokemonWeight}
								</Typography>
								<Typography className="pokemon-height">
									Height: {pokemonHeight}
								</Typography>
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
`;

export default ModalComponent;
