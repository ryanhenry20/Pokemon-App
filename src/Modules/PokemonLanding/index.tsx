import React, { FC, useState, useRef } from 'react';
import { Navbar, HeroBanner, ListPokemon, ModalComponent } from 'components';
import styled from '@emotion/styled';
import { TypePokemonInfo } from 'types/pokemon';

// type AllPokemonProps = {
//   pokemonData?: string[];

// }

interface IPokemonLandingProps {
	allPokemon: string[];
	allPokemonDetail: string[];
	typePokemon: string[];
}

const PokemonLanding: FC<IPokemonLandingProps> = ({
	allPokemon,
	allPokemonDetail,
	typePokemon,
}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [pokemonInfo, setPokemonInfo] = useState<null | TypePokemonInfo>(null);

	const ref = useRef<null | HTMLDivElement>(null);

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const handleModalOpen = (data: TypePokemonInfo) => {
		console.log('dataaaaaa', data);
		setPokemonInfo(data);
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		console.log('close modal');
		setIsModalOpen(false);
	};
	return (
		<StyledPokemonLanding>
			<WrapperHeroBanner>
				<Navbar />
				<HeroBanner onClick={handleClick} />
			</WrapperHeroBanner>

			<div ref={ref}>
				<ListPokemon
					allPokemonDetail={allPokemonDetail}
					onSelectPokemon={handleModalOpen}
				/>
			</div>
			<ModalComponent
				isModalOpen={isModalOpen}
				pokemonInfo={pokemonInfo}
				handleModalClose={handleModalClose}
			/>
		</StyledPokemonLanding>
	);
};

const WrapperHeroBanner = styled.div`
	margin: 16px 150px;
`;

const StyledPokemonLanding = styled.div``;

export default PokemonLanding;
