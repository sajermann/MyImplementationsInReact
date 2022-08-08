import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';

export default [
	{
		preserveModules: true,
		input: 'src/index.ts',
		output: {
			dir: 'build',
			format: 'esm',
		},
		plugins: [
			typescript({
				tsconfig: './tsconfig.json',
				// exclude: ['**/Pages', '**/test'],
				compilerOptions: {
					jsx: 'react-jsx',
					declaration: true,
					declarationDir: 'build',
					// useDefineForClassFields: true,
					// lib: ['DOM', 'DOM.Iterable', 'ESNext'],
					// allowJs: false,
					// module: 'ESNext',
					// allowSyntheticDefaultImports: true,
					// moduleResolution: 'Node',
					// resolveJsonModule: true,
					// isolatedModules: true,
					// declaration: true,
					// declarationDir: 'build',
					// // "noEmit": true,
					// target: 'ESNext',
					// rootDir: 'src',
					// outDir: './build',
					// esModuleInterop: false,
					// forceConsistentCasingInFileNames: true,
					// strict: true,
					// skipLibCheck: true,
					// plugins: [{ name: 'typescript-plugin-css-modules' }],
				},
			}),
			image(),
			svg(),
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
