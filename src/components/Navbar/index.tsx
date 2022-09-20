import React, { FC } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const NavBar: FC = () => {
	return (
		<StyledNavBar>
			<Image src="/assets/img/pokemon-logo.svg" height={69} width={167} />
			<Link href="/">
				<div className="home">Home</div>
			</Link>
			<Link href="/pokemon-detail" className="pokemon-type">
				<div className="pokemon-type">Pokemon Type</div>
			</Link>
		</StyledNavBar>
	);
};

const StyledNavBar = styled.div`
	display: flex;
	align-items: center;
	.home {
		margin-left: 40px;
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		color: #757575;
		:hover {
			cursor: pointer;
			border-bottom: 1px solid #d2d2d2ef;
			color: #e6ab09;
		}
		:active {
			border-bottom: 1px solid #d2d2d2ef;
			color: #e6ab09;
		}
	}
	.pokemon-type {
		margin-left: 40px;
		margin-left: 40px;
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		color: #757575;
		:hover {
			cursor: pointer;
			border-bottom: 1px solid #d2d2d2ef;
			color: #e6ab09;
		}
		:active {
			border-bottom: 1px solid #d2d2d2ef;
			color: #e6ab09;
		}
	}
`;

export default NavBar;
