import styles from './styles.module.css';

import { ex1, ex2 } from './exs';

import { OptionButton } from '../../Components/OptionButton';
import { useDarkMode } from '../../Hooks/DarkMode';
import Section from '../../Components/Section';
import { CodeBlock } from '../../Components/CodeBlock';
import { ComponentBlock } from '../../Components/ComponentBlock';

export default function OptionButtonDocs() {
	const { darkMode } = useDarkMode();
	return (
		<main data-content="content-main">
			<Section heading="Botão de Opção">
				O componente Botão de Opção pode ser utilizado para destacar uma opção
				ao usuário, geralmente são grandes e não possuem regras que fujam do
				escopo do onClick.
			</Section>
			<Section subHeading="Importação">
				<CodeBlock>{`import { OptionButton } from '@sajermann/ui-react';`}</CodeBlock>
			</Section>
			<Section subHeading="Cover">
				É possível criar botões grandes para que o usuário acesse uma categoria
				<ComponentBlock code={ex1}>
					<OptionButton className={styles.history}>História</OptionButton>
					<OptionButton className={styles.news}>Futebol</OptionButton>
					<OptionButton className={styles.cities}>Cidades</OptionButton>
				</ComponentBlock>
			</Section>
			<Section subHeading="Menu">
				Apesar de não ser semanticamente correto, você pode criar menu de opção
				também:
				<ComponentBlock code={ex2}>
					<OptionButton
						className={`${styles.menuLeft} ${
							darkMode ? styles.dark : styles.light
						}`}
					>
						Esquerda
					</OptionButton>
					<OptionButton
						className={`${styles.menuCenter} ${
							darkMode ? styles.dark : styles.light
						}`}
					>
						Centro
					</OptionButton>
					<OptionButton
						className={`${styles.menuRight} ${
							darkMode ? styles.dark : styles.light
						}`}
					>
						Direita
					</OptionButton>
				</ComponentBlock>
			</Section>
		</main>
	);
}
