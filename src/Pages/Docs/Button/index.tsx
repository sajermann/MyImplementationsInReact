import { useState } from 'react';
import { CodeBlock } from '../../../ComponentsInternal/CodeBlock';
import { Button, Loading, OptionButton } from '../../../components';
import palmeiras from '../../../assets/palmeiras.webp';
import styles from './styles.module.css';
import Section from '../../../ComponentsInternal/Section';
import { ComponentBlock } from '../../../ComponentsInternal/ComponentBlock';
import { ex1, ex2 } from './exs';

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
		<main>
			<Section heading="Botões">
				Os componentes de botões permitem que os usuários realizem ações. O
				intuito desse componente é oferecer o mesmo botão que você já está
				acostumado, porém com funcionalidades a mais.
			</Section>
			<Section subHeading="Variantes">
				Existem 3 tipos de variantes que são:{' '}
				<span className="highlight">Default</span> |{' '}
				<span className="highlight">Outlined</span> |{' '}
				<span className="highlight">Option</span>
				<ComponentBlock>
					<Button type="button">Default</Button>
					<Button type="button" variant="Outlined">
						Outlined
					</Button>
					<Button type="button" variant="Option">
						Option
					</Button>
				</ComponentBlock>
				<CodeBlock>{ex1}</CodeBlock>
			</Section>
			<Section subHeading="Estilos de Cores">
				Existem 4 tipos de estilos de cores que são:{' '}
				<span className="highlight">Primary</span> |{' '}
				<span className="highlight">Secondary</span> |{' '}
				<span className="highlight">Success</span> |{' '}
				<span className="highlight">Warning</span>
				<ComponentBlock>
					<div>
						<Button type="button" colorStyle="Primary">
							Primary
						</Button>
					</div>

					{/* <Button type="button" colorStyle="Secondary">
						Secondary
					</Button>
					<Button type="button" colorStyle="Success">
						Success
					</Button>
					<Button type="button" colorStyle="Warning">
						Warning
					</Button> */}
				</ComponentBlock>
				<CodeBlock>{ex2}</CodeBlock>
			</Section>

			{/* <div className={styles.containerButtons}>
				<Button
					startIcon={<p>B</p>}
					disabled={isLoading}
					colorStyle="Primary"
					type="button"
					onClick={() => handleSave()}
					withFeedback={{
						loadingOptions: {
							isLoading,
							typeLoadingIcon: 'Points',
						},
						successOptions: {
							setSuccess,
							success,
						},
						failedOptions: {
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
						loadingOptions: {
							isLoading,
							typeLoadingIcon: 'Points',
							fullIcon: true,
						},
						successOptions: {
							setSuccess,
							success,
							fullIcon: true,
						},
						failedOptions: {
							setFailed,
							failed,
							fullIcon: true,
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
						loadingOptions: {
							isLoading: true,
							typeLoadingIcon: 'Points',
							customIcon: <Loading size="2rem" color="green" />,
						},
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
					style={{
						color: '#fff',
						width: '150px',
						height: '150px',
					}}
				>
					<img
						src={palmeiras}
						style={{
							width: '100px',
							height: '100px',
						}}
						alt="edasd"
					/>
					Warning Default
				</OptionButton>

				<Loading />
			</div> */}
		</main>
	);
}
