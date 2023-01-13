import { Moon, Sun } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../Hooks/DarkMode';
import Menu from '../Menu';
import styles from './styles.module.css';

export default function Header() {
	const { darkMode, toggleDarkMode } = useDarkMode();
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<Menu />
				<Link to="/" className={styles.link}>
					<h1 className={styles.title}>My Implementations In React</h1>
				</Link>
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
