import { useDarkMode } from '../../../Hooks/DarkMode';
import styles from './styles.module.css';

export default function GettingStarted() {
	const { darkMode } = useDarkMode();
	return (
		<div>
			<h1>Introdução</h1>
			Sajermann UI é um conjunto de componentes para React de interface de
			usuário criado para facilitar o uso de determinados componentes que na
			maior parte das vezes se repetiam em todos os projetos.
			<h1>Instalação</h1>
			Sajermann UI está disponível como um pacote NPM e para instalar em seu
			projeto basta executar:
			<code>npm install @sajermann/ui-react</code>
		</div>
	);
}
