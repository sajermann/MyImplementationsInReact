import { Fragment } from 'react';
import { OptionButton } from '../../components/OptionButton';
import styles from './styles.module.css';

type Props = {
	children: React.ReactNode;
};

export function JsCode({ children }: Props) {
	return <Fragment key={41231}>{children}</Fragment>;
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
