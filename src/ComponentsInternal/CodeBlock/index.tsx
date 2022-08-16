// import { Fragment } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyBlock, dracula } from 'react-code-blocks';
import { OptionButton } from '../../components/OptionButton';
import styles from './styles.module.css';

type Props = {
	children: React.ReactNode;
};

type PropsJs = {
	children: string;
};

export function JsCode({ children }: PropsJs) {
	console.log(children);

	return (
		<CopyBlock
			text={children}
			language="jsx"
			theme={dracula}
			codeBlock
			showLineNumbers={false}
		/>
	);
	return <p>Olá</p>;
}

export function TsCode({ children }: Props) {
	return children;
}

export function CodeBlock({ children }: Props) {
	const t = children as {
		type: {
			name: string;
		};
	};
	console.log({ children });
	console.log({ t });
	// console.log(t?.type.name);
	// console.log(t?.type.name === 'JsCode' || '');
	return (
		<div>
			{children}
			<OptionButton className={styles.choiseLanguage}>Javascript</OptionButton>
			<OptionButton className={styles.choiseLanguage}>Typescript</OptionButton>
		</div>
	);
}
