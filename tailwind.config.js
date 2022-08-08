/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				brand: {
					300: '#996DFF',
					500: '#8257e6',
				},
			},
			borderRadius: {
				md: '4px',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
