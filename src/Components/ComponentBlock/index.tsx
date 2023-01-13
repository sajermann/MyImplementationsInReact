import { useState } from 'react';
import { Button } from '../Button';
import { CodeBlock } from '../CodeBlock';
import styles from './styles.module.css';

type Props = {
	children: React.ReactNode;
	code: string;
};
export function ComponentBlock({ children, code }: Props) {
	const [codeVisible, setCodeVisible] = useState(false);
	return (
		<>
			<div className="componentBlock">
				<div className="children">{children}</div>
			</div>
			<div className="toggleCode">
				<Button
					variant="Option"
					colorStyle={!codeVisible ? 'Primary' : 'Success'}
					type="button"
					className={styles.buttonToggleCode}
					onClick={() => setCodeVisible(!codeVisible)}
				>
					Exemplo de Código
				</Button>
			</div>
			{codeVisible && <CodeBlock>{code}</CodeBlock>}
		</>
	);
}
