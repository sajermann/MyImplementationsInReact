import { Fragment } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
		<SyntaxHighlighter
			language="javascript"
			showLineNumbers
			wrapLines
			style={dracula}
		>
			{children}
		</SyntaxHighlighter>
	);
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
			<code>
				{children}
				<OptionButton className={styles.choiseLanguage}>
					Javascript
				</OptionButton>
				<OptionButton className={styles.choiseLanguage}>
					Typescript
				</OptionButton>
			</code>
		</div>
	);
}
