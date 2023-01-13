import { useState } from 'react';
import {
	TelegramLogo,
	TrendDown,
	TrendUp,
	WhatsappLogo,
	YoutubeLogo,
} from 'phosphor-react';
import { CodeBlock } from '../../../ComponentsInternal/CodeBlock';
import { Button } from '../../../ComponentsInternal/Button';
import styles from './styles.module.css';
import Section from '../../../ComponentsInternal/Section';
import { ComponentBlock } from '../../../ComponentsInternal/ComponentBlock';
import { ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8 } from './exs';
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

	async function handleSave() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
		await delay(2000);
		setSuccess(false);
	}

	async function handleSaveFailed() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setFailed(true);
		await delay(2000);
		setFailed(false);
	}

	return (
		<main data-content="content-main">
			<Section heading="Botões">
				Os componentes de botões permitem que os usuários realizem ações. O
				intuito desse componente é oferecer o mesmo botão que você já está
				acostumado, porém com funcionalidades a mais.
			</Section>
			<Section subHeading="Importação">
				<CodeBlock>{`import { Button } from '@sajermann/ui-react';`}</CodeBlock>
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
					<h3>Opções de Sucesso</h3>As opções de sucessos retornam feedbacks
					para o usuário baseado em função do componente pai informando que
					ocorreu o sucesso com a ação do clique, no exemplo abaixo vamos
					simular que estamos salvando alguma informação na api e teremos êxito
					após 3 segundos. A propriedade{' '}
					<span className="highlight">success</span> é o boolean que o
					componente ficará monitorando, enquanto ele for true, o icone de
					sucesso será exibido. A propriedade{' '}
					<span className="highlight">fullIcon</span> remove a label do botão
					deixando apenas o icone de sucesso. A propriedade{' '}
					<span className="highlight">customIcon</span> permite a renderização
					de um icone personalizado.
					<ComponentBlock code={ex4}>
						<Button
							disabled={isLoading}
							colorStyle="Primary"
							type="button"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
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
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
									fullIcon: true,
								},
							}}
						>
							Full Icon
						</Button>
						<Button
							disabled={isLoading}
							colorStyle="Warning"
							type="button"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
									customIcon: (
										<TrendUp>
											<animate
												attributeName="opacity"
												values="0;1;0"
												dur="1s"
												repeatCount="indefinite"
											/>
										</TrendUp>
									),
								},
							}}
						>
							Custom Icon
						</Button>
					</ComponentBlock>
				</div>
				<div className={styles.blockH3}>
					<h3>Opções de Falha</h3>As opções de falhas retornam feedbacks para o
					usuário baseado em função do componente pai informando que ocorreu a
					falha com a ação do clique, no exemplo abaixo vamos simular que
					estamos salvando alguma informação na api e não teremos êxito após 3
					segundos. A propriedade <span className="highlight">failed</span> é o
					boolean que o componente ficará monitorando, enquanto ele for true, o
					icone de falha será exibido. A propriedade{' '}
					<span className="highlight">fullIcon</span> remove a label do botão
					deixando apenas o icone de falha. A propriedade{' '}
					<span className="highlight">customIcon</span> permite a renderização
					de um icone personalizado.
					<ComponentBlock code={ex5}>
						<Button
							disabled={isLoading}
							colorStyle="Primary"
							type="button"
							onClick={handleSaveFailed}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								failedOptions: {
									failed,
								},
							}}
						>
							Falha
						</Button>
						<Button
							disabled={isLoading}
							colorStyle="Secondary"
							variant="Outlined"
							type="button"
							onClick={handleSaveFailed}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								failedOptions: {
									failed,
									fullIcon: true,
								},
							}}
						>
							Full Icon
						</Button>
						<Button
							disabled={isLoading}
							colorStyle="Warning"
							type="button"
							onClick={handleSaveFailed}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								failedOptions: {
									failed: true,
									customIcon: (
										<TrendDown>
											<animate
												attributeName="opacity"
												values="0;1;0"
												dur="1s"
												repeatCount="indefinite"
											/>
										</TrendDown>
									),
								},
							}}
						>
							Custom Icon
						</Button>
					</ComponentBlock>
				</div>
			</Section>

			<Section subHeading="Outras Possibilidades">
				É possível personalizar seus botões de diversas formas diferentes, por
				exemplo manter o botão com tamanho fixo para que ele não fique se
				mexendo na alteração dos icones, outro recurso bacana é o ellipsis, veja
				abaixo alguns exemplos diversificados.
				<div className={styles.blockH3}>
					<h3>Tamanhos</h3>
					<ComponentBlock code={ex6}>
						<Button
							style={{ width: '250px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Primary"
							type="button"
							onClick={handleSave}
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
						>
							Fixo Somente Icone
						</Button>
						<Button
							style={{ width: '250px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Secondary"
							type="button"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
								},
							}}
						>
							Fixo Com Icone
						</Button>
						<Button
							style={{ width: '100px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Success"
							type="button"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
								},
							}}
						>
							Ellipsis
						</Button>
					</ComponentBlock>
				</div>
				<div className={styles.blockH3}>
					<h3>Botões de Icones</h3> Caso queira que seu botão tenha apenas o
					icone, utilize a propriedades{' '}
					<span className="highlight">endIcon</span> não passando nenhum filho.
					<ComponentBlock code={ex7}>
						<Button
							style={{ minWidth: '50px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Success"
							variant="Outlined"
							type="button"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
								},
							}}
							endIcon={<WhatsappLogo size={30} />}
						/>
						<Button
							style={{ minWidth: '50px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Secondary"
							variant="Outlined"
							type="button"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
									typeLoadingIcon: 'Points',
								},
								successOptions: {
									success,
								},
							}}
							endIcon={<YoutubeLogo size={30} />}
						/>
						<Button
							style={{ minWidth: '50px', height: '50px', borderRadius: '50%' }}
							disabled={isLoading}
							colorStyle="Primary"
							variant="Outlined"
							type="button"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
									typeLoadingIcon: 'Points',
								},
								successOptions: {
									success,
								},
							}}
							endIcon={<TelegramLogo size={30} />}
						/>
					</ComponentBlock>
				</div>
				<div className={styles.blockH3}>
					<h3>Personalizações</h3> Você pode personalizar as cores de seus
					botões do jeito que quiser, veja alguns exemplos:
					<ComponentBlock code={ex8}>
						<Button type="button" variant="Outlined" className={styles.custom}>
							Custom 1
						</Button>
						<Button type="button" variant="Outlined" className={styles.custom2}>
							Custom 2
						</Button>
					</ComponentBlock>
				</div>
			</Section>
		</main>
	);
}
