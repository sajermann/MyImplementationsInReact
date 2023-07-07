import { delay } from '@sajermann/utils/Delay';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useToast } from '~/Hooks/UseToast';

import { Button } from '../Button';
import { Icons } from '../Icons';
import styles from './styles.module.css';

type Props = {
	children: string;
	language?: 'jsx' | 'shell';
};
export function CodeBlock({ children, language }: Props) {
	const { customToast } = useToast();
	const [success, setSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function handleCopy() {
		try {
			setIsLoading(true);
			await navigator.clipboard.writeText(children);
			setSuccess(true);
		} catch {
			customToast({
				msg: 'Modo copy só disponível em ambientes seguros (HTTPS)',
				type: 'error',
			});
		} finally {
			setIsLoading(false);
			await delay(1000);
			setSuccess(false);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.copy}>
				<Button
					title="Copiar"
					type="button"
					variant="Option"
					onClick={handleCopy}
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
					endIcon={<Icons nameIcon="ClipboardText" color="#fff" />}
				/>
			</div>
			<SyntaxHighlighter language={language || 'jsx'} style={dracula}>
				{children}
			</SyntaxHighlighter>
		</div>
	);
}
