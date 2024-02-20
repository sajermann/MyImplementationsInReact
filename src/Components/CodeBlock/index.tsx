import { delay } from '@sajermann/utils/Delay';
import { useState } from 'react';

import { useToast } from '~/Hooks/UseToast';
import { useTranslation } from '~/Hooks/UseTranslation';

import { Button } from '../Button';
import { Icons } from '../Icons';
import styles from './styles.module.css';

type TProps = {
	children: string;
};
export function CodeBlock({ children }: TProps) {
	const { customToast } = useToast();
	const [success, setSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { translate } = useTranslation();

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
					iconButton="squared"
					title={translate('COPY')}
					type="button"
					variant="option"
					colorStyle={success ? 'success' : undefined}
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
					endIcon={<Icons nameIcon="clipboardText" color="#fff" />}
				/>
			</div>
			<div className="p-2 rounded bg-dark-400 text-white">{children}</div>
		</div>
	);
}
