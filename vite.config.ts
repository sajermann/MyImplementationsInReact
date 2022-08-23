/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), Pages()],
	base: '/NPM-SajermannUiReact/',
	build: {
		rollupOptions: {
			input: {
				main: './index.html',
				error: './404.html',
			},
		},
	},
});
