import { useState } from 'react';
import { Button, Loading, OptionButton } from '../../../components';
import palmeiras from '../../../assets/palmeiras.webp';
import styles from './styles.module.css';

export default function ButtonDocs() {
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

	function delay(delayMs: number): Promise<void> {
		return new Promise(resolve => {
			setTimeout(() => resolve(), delayMs);
		});
	}
	async function handle() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
	}
	async function handleSave() {
		setIsLoading(true);
		await delay(3001);

		setIsLoading(false);
		setSuccess(true);
	}
	return (
		<div>
			O componente de Button permite renderizar alguns tipos de botões baseados
			nas configurações abaixo: Default:
			<div className={styles.containerButtons}>
				<Button
					disabled={isLoading}
					colorStyle="Primary"
					type="button"
					onClick={() => handleSave()}
					withFeedback={{
						isLoading,
						typeLoadingIcon: 'Points',
						inSuccess: {
							setSuccess,
							success,
						},
						inFailed: {
							setFailed,
							failed,
						},
					}}
				>
					Default
				</Button>
				<Button
					disabled={isLoading}
					colorStyle="Primary"
					variant="Outlined"
					type="button"
					onClick={() => handleSave()}
					withFeedback={{
						typeLoadingIcon: 'Points',
						isLoading: true,
						inSuccess: {
							setSuccess,
							success,
						},
						inFailed: {
							setFailed,
							failed,
						},
					}}
				>
					Outlined
				</Button>
				<Button
					disabled={isLoading}
					colorStyle="Primary"
					variant="Option"
					type="button"
					withFeedback={{
						isLoading: true,
					}}
				>
					Option
				</Button>
			</div>
			<div className={styles.containerButtons}>
				<Button disabled={isLoading} colorStyle="Secondary" type="button">
					Secondary Default
				</Button>
				<Button
					disabled={isLoading}
					colorStyle="Secondary"
					variant="Outlined"
					type="button"
				>
					Secondary Outilined
				</Button>
				<Button
					disabled={isLoading}
					colorStyle="Secondary"
					variant="Option"
					type="button"
				>
					Secondary Option
				</Button>
			</div>
			<div className={styles.containerButtons}>
				<Button disabled={isLoading} colorStyle="Success" type="button">
					Success Default
				</Button>
				<Button
					disabled={isLoading}
					colorStyle="Success"
					variant="Outlined"
					type="button"
				>
					Success Outilined
				</Button>
				<Button
					disabled={isLoading}
					colorStyle="Success"
					variant="Option"
					type="button"
				>
					Success Option
				</Button>
			</div>
			<div className={styles.containerButtons}>
				<Button disabled={isLoading} colorStyle="Warning" type="button">
					Warning Default
				</Button>
				<Button
					disabled={isLoading}
					colorStyle="Warning"
					variant="Outlined"
					type="button"
				>
					Warning Outilined
				</Button>
				<Button
					disabled={isLoading}
					colorStyle="Warning"
					variant="Option"
					type="button"
					onClick={e => console.log(e)}
				>
					Warning Option
				</Button>
			</div>
			<div className={styles.containerButtons}>
				<OptionButton
					// srcForImage={palmeiras}
					style={{
						color: '#fff',
						width: '150px',
						height: '150px',
					}}
				>
					Warning Default
				</OptionButton>
				<Loading />
			</div>
		</div>
	);
}
