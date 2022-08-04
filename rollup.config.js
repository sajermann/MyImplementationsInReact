import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

export default [
	{
		preserveModules: true,
		input: 'src/components/Button/index.tsx',
		output: {
			dir: 'build',
			format: 'esm',
		},
		plugins: [
			typescript({
				tsconfig: './tsconfig.json',
			}),
			image(),
			postcss({
				plugins: [autoprefixer()],
				// sourceMap: true,
				extract: true,
				// minimize: true,
				// modules: true,
			}),
		],
	},
];
