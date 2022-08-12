import { Moon, Sun } from 'phosphor-react';
import { useDarkMode } from '../../Hooks/DarkMode';
import styles from './styles.module.css';

export default function Header() {
	const { darkMode, toggleDarkMode } = useDarkMode();
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<a href="/" className={styles.link}>
					<span className={styles.title}>Sajermann UI for React</span>
				</a>
				<button
					onClick={toggleDarkMode}
					type="button"
					className={styles.buttonDarkMode}
				>
					{!darkMode && <Moon size={22} />}
					{darkMode && <Sun size={22} />}
				</button>
			</div>
		</nav>
	);
}
