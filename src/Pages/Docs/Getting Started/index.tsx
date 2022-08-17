/* eslint-disable react/no-unescaped-entities */
import ex1 from './ex1';
import { CodeBlock } from '../../../ComponentsInternal/CodeBlock';
import { useDarkMode } from '../../../Hooks/DarkMode';
import styles from './styles.module.css';
import Section from '../../../ComponentsInternal/Section';

export default function GettingStarted() {
	const { darkMode } = useDarkMode();

	return (
		<main>
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
				{/* <CodeBlock>{ex1}</CodeBlock>
				<CodeBlock>npm install @sajermann/ui-react</CodeBlock> */}
			</Section>
		</main>
	);
}
