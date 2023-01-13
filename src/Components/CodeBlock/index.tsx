import { ClipboardText } from 'phosphor-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '../Button';
import { delay } from '../../components/utils';
import styles from './styles.module.css';

type Props = {
	children: string;
	language?: 'jsx' | 'shell';
};
export function CodeBlock({ children, language }: Props) {
	const [success, setSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function handleCopy() {
		setIsLoading(true);
		await navigator.clipboard.writeText(children);
		setIsLoading(false);
		setSuccess(true);
		await delay(2000);
		setSuccess(false);
	}

	return (
		<div className={styles.container}>
			<Button
				title="Copiar"
				type="button"
				variant="Option"
				onClick={handleCopy}
				className={styles.copy}
				withFeedback={{
					loadingOptions: {
						isLoading,
						fullIcon: true,
					},
					successOptions: {
						success,
						fullIcon: true,
					},
				}}
				endIcon={<ClipboardText />}
			/>
			<SyntaxHighlighter language={language || 'jsx'} style={dracula}>
				{children}
			</SyntaxHighlighter>
		</div>
	);
}
