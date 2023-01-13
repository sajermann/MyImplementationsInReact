/* eslint-disable react/no-unescaped-entities */
import { CodeBlock } from '../../Components/CodeBlock';
import Section from '../../Components/Section';

export default function GettingStarted() {
	return (
		<main data-content="content-main">
			<Section heading="Introdução">
				<span>
					Sajermann UI é um conjunto de componentes para React de interface de
					usuário criado para facilitar o uso de determinados componentes que na
					maior parte das vezes se repetiam em todos os projetos.
				</span>
			</Section>
			<Section heading="Instalação">
				<span>
					Sajermann UI está disponível como um pacote NPM e para instalar em seu
					projeto basta executar:
				</span>
				<CodeBlock language="shell">npm install @sajermann/ui-react</CodeBlock>
				<span>Insira em algum arquivo raiz de seu projeto o css abaixo:</span>
				<CodeBlock>import '@sajermann/ui-react/index.css';</CodeBlock>
			</Section>
			<Section heading="Dúvidas">
				<span>
					Caso tenha alguma dúvida ou queira compartilhar alguma opinião sugiro
					abrir uma discussão dentro do github através desse{' '}
					<a
						href="https://github.com/sajermann/MyImplementationsInReact/discussions"
						target="_blank"
						rel="noopener noreferrer"
					>
						link
					</a>
					.
				</span>
			</Section>
		</main>
	);
}
