import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Pagination, PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import { PokemonContext } from 'context/pokemonContext';

const PaginationComponent: React.FC = () => {
	const { getPokemonPaggination } = useContext<any>(PokemonContext);

	return (
		<Stack spacing={2}>
			<StyledPagination>
				<Pagination
					count={20}
					variant="outlined"
					shape="rounded"
					onChange={(event, page) => {
						getPokemonPaggination(page);
					}}
					hidePrevButton
					hideNextButton
					showFirstButton
					showLastButton
				/>
			</StyledPagination>
		</Stack>
	);
};

const StyledPagination = styled.div`
	.MuiPaginationItem-root {
		border-color: #fff;
		color: #fff;
	}

	.Mui-selected {
		background-color: #fff !important;
		color: #ffcb3b;
	}
`;

export default PaginationComponent;
