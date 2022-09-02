import { useNavigate } from 'react-router-dom';
import { OptionButton } from '../../components/OptionButton';
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
				<strong>Bem Vindo ao @sajermann/ui-react</strong>
			</p>
			<p>
				Biblioteca UI criada a fim de estudos sobre desenvolvimento de pacotes
				NPM para React.
			</p>
			<p>Confira nosso projeto em:</p>

			<a
				href="https://github.com/sajermann/NPM-SajermannUiReact"
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

			<a
				target="_blank"
				rel="noreferrer"
				href="https://badge.fury.io/js/@sajermann%2Fui-react"
			>
				<img
					src="https://badge.fury.io/js/@sajermann%2Fui-react.svg"
					alt="npm version"
					width="120"
					height="18"
				/>
			</a>

			<div className={styles.options}>
				<OptionButton
					className={`${styles.blocks} ${
						darkMode ? styles.dark : styles.light
					}`}
					onClick={() => handleGotTo('/docs/getting-started')}
				>
					Get Started {`${'>'}`}
				</OptionButton>
				<OptionButton
					className={`${styles.blocks} ${
						darkMode ? styles.dark : styles.light
					}`}
					onClick={() => handleGotTo('/docs/button')}
				>
					Componentes {`${'>'}`}
				</OptionButton>
			</div>
		</main>
	);
}
