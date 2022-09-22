import React from 'react';
import styled from '@emotion/styled';
import { Pagination, PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';

const PaginationComponent = () => {
	return (
		<Stack spacing={2}>
			<StyledPagination>
				<Pagination
					count={20}
					variant="outlined"
					shape="rounded"
					onChange={(event, page) => {
						console.log('event', event);
						console.log('page', page);
						console.log('page', 2, 'data', page * 9);
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
