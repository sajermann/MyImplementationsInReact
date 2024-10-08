/// <reference types="vitest" />
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/Config/Test/setup.ts',
		coverage: {
			reporter: ['text', 'lcov', 'html'],
			exclude: ['**/main.tsx', '**/*.config.cjs', '**/*.d.ts'],
			reportOnFailure: true,
		},
	},
});
