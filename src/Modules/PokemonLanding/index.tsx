import React from 'react';
import { Navbar, HeroBanner, ListPokemon } from 'components';
import styled from '@emotion/styled';

const PokemonLanding = () => {
	return (
		<StyledPokemonLanding>
			<WrapperHeroBanner>
				<Navbar />
				<HeroBanner />
			</WrapperHeroBanner>
			<ListPokemon />
		</StyledPokemonLanding>
	);
};

const WrapperHeroBanner = styled.div`
	margin: 16px 150px;
`;

const StyledPokemonLanding = styled.div``;

export default PokemonLanding;
