import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import styled from '@emotion/styled';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PokemonProvider } from 'context/pokemonContext';
import '@fontsource/poppins';

declare module '@mui/material/styles' {
	interface white {
		main?: string;
	}
}

const theme = createTheme({
	palette: {
		background: {
			default: '#EEE',
		},
		secondary: {
			main: '#F5F5F5',
		},
	},
});

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe');
			axe(React, ReactDOM, 1000);
		}

		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Pokemon</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<PokemonProvider>
						<Wrapper>
							<Component {...pageProps} />
						</Wrapper>
					</PokemonProvider>
				</CssBaseline>
			</ThemeProvider>
		</>
	);
};

const Wrapper = styled.body`
	font-family: 'Poppins', sans-serif;
	overflow-x: hidden;
	.MuiTypography-root {
		font-family: 'Poppins', sans-serif;
	}
`;

export default MyApp;
