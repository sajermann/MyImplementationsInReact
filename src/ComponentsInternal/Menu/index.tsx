import { List } from 'phosphor-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import Drawer from '../../components/Drawer';
import { useDarkMode } from '../../Hooks/DarkMode';
import styles from './styles.module.css';

export default function Menu() {
	const { darkMode } = useDarkMode();
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	function goTo(url: string) {
		navigate(url, { replace: true });
	}

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className={styles.buttonMenu}
			>
				<List size={22} />
			</button>
			<Drawer
				oneClickToClose
				openFrom="left"
				percentage={30}
				isOpen={isOpen}
				setIsOpen={e => setIsOpen(e)}
			>
				<div
					style={{
						backgroundColor: darkMode ? 'rgb(31 41 55 / 1)' : '#fff',
						height: '100%',
					}}
				>
					<nav className={styles.nav}>
						<div className={styles.title}>Menu</div>
					</nav>
					<div className={styles.main}>
						<Button
							colorStyle="Primary"
							type="button"
							onClick={() => goTo('/')}
						>
							Home
						</Button>

						<strong>Componentes</strong>
						<Button
							colorStyle="Primary"
							variant="Option"
							type="button"
							onClick={() => goTo('/docs/button')}
						>
							Button
						</Button>
					</div>
				</div>
			</Drawer>
		</>
	);
}
