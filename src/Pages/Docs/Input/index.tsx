import { OptionButton } from '../../../components/OptionButton';
import styles from './styles.module.css';
import Section from '../../../ComponentsInternal/Section';
import { ComponentBlock } from '../../../ComponentsInternal/ComponentBlock';
import { ex1, ex2 } from './exs';
import { useDarkMode } from '../../../Hooks/DarkMode';
import { CodeBlock } from '../../../ComponentsInternal/CodeBlock';
import { Input } from '../../../components/Input';

export default function InputDocs() {
	const { darkMode } = useDarkMode();
	return (
		<main>
			<Section heading="Inputs">Componente de input</Section>
			<Section subHeading="Importação">
				<CodeBlock>{`import { Input } from '@sajermann/ui-react';`}</CodeBlock>
			</Section>
			<Section subHeading="Cover">
				É possível criar botões grandes para que o usuário acesse uma categoria
				<ComponentBlock code={ex1}>
					<Input className={styles.history} />
				</ComponentBlock>
			</Section>
		</main>
	);
}
