import { useNavigate } from 'react-router-dom';
import { OptionButton } from '../../Components/OptionButton';

import { useDarkMode } from '../../Hooks/DarkMode';

import styles from './styles.module.css';

export default function Home() {
	const { darkMode } = useDarkMode();
	const navigate = useNavigate();

	function handleGotTo(url: string) {
		navigate(url);
	}

	return (
		<main>
			<p>
				<strong>Bem Vindo ao My Implementations In React</strong>
			</p>
			<p>
				Projeto criado para demonstrar como realizo minhas implementações em
				React
			</p>

			<a
				href="https://github.com/sajermann/MyImplementationsInReact/"
				target="_blank"
				rel="noreferrer"
			>
				<img
					src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
					alt="github"
					height="18"
					style={{ borderRadius: 5, marginRight: 5 }}
				/>
			</a>

			<div className={styles.options}>
				<OptionButton
					className={`${styles.blocks} ${
						darkMode ? styles.dark : styles.light
					}`}
					onClick={() => handleGotTo('/getting-started')}
				>
					Get Started {`${'>'}`}
				</OptionButton>
				<OptionButton
					className={`${styles.blocks} ${
						darkMode ? styles.dark : styles.light
					}`}
					onClick={() => handleGotTo('/Button')}
				>
					Componentes {`${'>'}`}
				</OptionButton>
			</div>
		</main>
	);
}
