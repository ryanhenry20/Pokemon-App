import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { Typography, Button } from '@mui/material';

const HeroBanner = () => {
	return (
		<StyledHeroBanner>
			<Grid container>
				<Grid alignSelf="center" item xs={6} md={6} sm={6}>
					<Typography className="title" variant="h1">
						All the Pokémon data you'll ever need in one place!
					</Typography>
					<Typography className="sub-title" variant="subtitle1">
						Thousands of data compiled into one place
					</Typography>
					<Button className="btn-banner" variant="contained">
						Check PokèDex
					</Button>
				</Grid>
				<Grid className="image-grid" item xs={6} md={6} sm={6}>
					<img className="squirtle-img" src="/assets/img/Squirtle.png" alt="" />
					<img
						className="bulbasaur-img"
						src="/assets/img/Bulbasaur.png"
						alt=""
					/>
					<img
						className="charmander-img"
						src="/assets/img/Charmander.png"
						alt=""
					/>
				</Grid>
			</Grid>
		</StyledHeroBanner>
	);
};

const StyledHeroBanner = styled.div`
	.title {
		font-style: normal;
		font-weight: 700;
		font-size: 52px;
		line-height: 78px;
		color: #42494d;
	}
	.sub-title {
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 30px;
		color: #7b8082;
		margin-top: 16px;
	}
	.btn-banner {
		background-color: #e6ab09;
		width: 240px;
		height: 56px;
		border-radius: 14px;
		margin-top: 32px;
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 30px;
		box-shadow: none;
	}
	.image-grid {
		width: 534px;
		height: 631px;
		position: relative;
	}
	.squirtle-img {
		position: absolute;
		width: 368px;
		height: 352px;
		top: -12px;
		left: 17px;
	}
	.bulbasaur-img {
		position: absolute;
		width: 350px;
		height: 350px;
		top: 90px;
		left: 152px;
	}
	.charmander-img {
		position: absolute;
		width: 368px;
		height: 352px;
		transform: scale(-1, 1);
		bottom: 0px;
		right: 30px;
	}
`;

export default HeroBanner;
