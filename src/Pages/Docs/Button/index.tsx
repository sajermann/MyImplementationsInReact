import { useState } from 'react';
import { TelegramLogo, WhatsappLogo, YoutubeLogo } from 'phosphor-react';
import { CodeBlock } from '../../../ComponentsInternal/CodeBlock';
import { Button, Loading, OptionButton } from '../../../components';
import palmeiras from '../../../assets/palmeiras.webp';
import styles from './styles.module.css';
import Section from '../../../ComponentsInternal/Section';
import { ComponentBlock } from '../../../ComponentsInternal/ComponentBlock';
import { ex1, ex2, ex3 } from './exs';
import CustomLoading from '../../../ComponentsInternal/CustomLoading';

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
			<Section subHeading="Importação">
				<CodeBlock>{`import {Button} from '@sajermann/ui-react';`}</CodeBlock>
			</Section>
			<Section subHeading="Variantes">
				Existem 3 tipos de variantes que são:{' '}
				<span className="highlight">Default</span> |{' '}
				<span className="highlight">Outlined</span> |{' '}
				<span className="highlight">Option</span>
				<ComponentBlock code={ex1}>
					<Button type="button">Default</Button>
					<Button type="button" variant="Outlined">
						Outlined
					</Button>
					<Button type="button" variant="Option">
						Option
					</Button>
				</ComponentBlock>
			</Section>
			<Section subHeading="Estilos de Cores">
				Existem 4 tipos de estilos de cores que são:{' '}
				<span className="highlight">Primary</span> |{' '}
				<span className="highlight">Secondary</span> |{' '}
				<span className="highlight">Success</span> |{' '}
				<span className="highlight">Warning</span>
				<ComponentBlock code={ex2}>
					<Button type="button" colorStyle="Primary">
						Primary
					</Button>
					<Button type="button" colorStyle="Secondary">
						Secondary
					</Button>
					<Button type="button" colorStyle="Success">
						Success
					</Button>
					<Button type="button" colorStyle="Warning">
						Warning
					</Button>
				</ComponentBlock>
			</Section>
			<Section subHeading="Icones">
				É possível inserir icones personalizados no início ou no fim do botão
				utilizando as propriedades <span className="highlight">startIcon</span>{' '}
				e <span className="highlight">endIcon</span>
				<ComponentBlock code={ex2}>
					<Button
						type="button"
						colorStyle="Success"
						startIcon={<WhatsappLogo size={30} />}
					>
						Whats
					</Button>
					<Button
						type="button"
						colorStyle="Primary"
						endIcon={<TelegramLogo size={30} />}
					>
						Telegram
					</Button>
					<Button
						type="button"
						colorStyle="Secondary"
						startIcon={<YoutubeLogo size={30} />}
						endIcon={<YoutubeLogo size={30} />}
					>
						Youtube
					</Button>
				</ComponentBlock>
			</Section>

			<Section subHeading="Com Feedbacks">
				Os feedbacks são uma maneira intuitiva de informar ao usuário o que está
				ocorrendo no momento, você pode personalizar os feedbacks através da
				propriedade <span className="highlight">withFeedback</span>:
				<div className={styles.blockH3}>
					<h3>Opções de Carregamento</h3>A propriedade{' '}
					<span className="highlight">isLoading</span> mostra o icone de
					carregamento no final do botão, a propriedade{' '}
					<span className="highlight">typeLoadingIcon</span> muda o icone
					apresentado, a propriedade <span className="highlight">fullIcon</span>{' '}
					remove a label do botão deixando apenas o icone, a propriedade{' '}
					<span className="highlight">customIcon</span> permite a renderização
					de um icone personalizado para carregamento, vale lembrar que esse
					icone deve estar com a animação embutida.
					<ComponentBlock code={ex3}>
						<Button
							disabled
							colorStyle="Primary"
							type="button"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading: true,
								},
							}}
						>
							Default
						</Button>
						<Button
							disabled
							colorStyle="Secondary"
							variant="Outlined"
							type="button"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading: true,
									typeLoadingIcon: 'Points',
								},
							}}
						>
							Points
						</Button>
						<Button
							disabled
							colorStyle="Success"
							variant="Option"
							type="button"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading: true,
									fullIcon: true,
								},
							}}
						>
							Full Icon
						</Button>
						<Button
							disabled
							colorStyle="Warning"
							type="button"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading: true,
									customIcon: <CustomLoading />,
								},
							}}
						>
							Custom Icon
						</Button>
					</ComponentBlock>
				</div>
				<div className={styles.blockH3}>
					<h3>Opções de Sucesso</h3>As opções de sucesso retorna um feedback
					para o usuário baseado em função do componente pai informando que ouve
					o sucesso com a ação do clique, no exemplo abaixo vamos simular que
					estamos salvando alguma informação na api e teremos exito após 3
					segundos. A propriedade <span className="highlight">success</span> é o
					boolean que o componente ficará monitorando, assim que ele mudar de
					false para true, o componente exibirá o icone de sucesso, e após 1
					segundo irá altera-la para false através da propriedade{' '}
					<span className="highlight">setSuccess</span>
					<ComponentBlock code={ex3}>
						<Button
							disabled={isLoading}
							colorStyle="Primary"
							type="button"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
									setSuccess,
								},
							}}
						>
							Sucesso
						</Button>
						<Button
							disabled={isLoading}
							colorStyle="Success"
							variant="Outlined"
							type="button"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
									setSuccess,
									fullIcon: true,
								},
							}}
						>
							Full Icon
						</Button>
					</ComponentBlock>
				</div>
			</Section>

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
			</div>
		</main>
	);
}
