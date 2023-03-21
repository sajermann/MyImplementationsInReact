/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.tsx', './index.html'],

	theme: {
		extend: {
			colors: {
				brand: {
					300: '#996DFF',
					500: '#8257e6',
				},
				primary: {
					300: '#0068E2',
					500: '#0054B6',
					700: '#476fe6',
				},
				secondary: {
					100: '#FDB713',
					500: '#F5821F',
					700: '#F05A22',
					900: '#EF402F',
				},
				info: {
					500: '#E2E3E5',
					700: '#41464B',
				},
				success: {
					500: '#D1E7DD',
					700: '#0F5132',
				},
				error: {
					500: '#F8D7DA',
					600: '#BF2E3A',
					700: '#842029',
				},
				warning: {
					500: '#FFF3CD',
					700: '#664D03',
				},
				dark: {
					500: '#3C3C3C',
					700: '#0f1926',
				},
				odd: {
					500: '#F2F2F2',
				},
			},
			screens: {
				xm: '400px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1366px',
				'3xl': '1536px',
				'4xl': '1980px',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('tailwindcss-animate'),
	],
	variants: {
		scrollbar: ['rounded'],
	},
};
