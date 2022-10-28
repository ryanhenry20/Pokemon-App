import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Pagination, PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import { PokemonContext } from 'context/pokemonContext';

interface IPaginationProps {
	handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent: React.FC<IPaginationProps> = ({
	handlePageChange,
}) => {
	const { getPokemonPaggination } = useContext(PokemonContext);

	return (
		<Stack spacing={2}>
			<StyledPagination>
				<Pagination
					count={20}
					variant="outlined"
					shape="rounded"
					onChange={(event, page) => {
						console.log('page', page, 'data', page * 9);
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
