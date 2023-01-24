import { List } from 'phosphor-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';
import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { OptionButton } from '../OptionButton';
import { Drawer } from '../Drawer';
import { useDarkMode } from '../../Hooks/DarkMode';
import styles from './styles.module.css';

export default function MenuAccessOptions() {
	const { darkMode } = useDarkMode();
	const [isOpen, setIsOpen] = useState(false);
	const { options } = useRoutesMenu();
	const navigate = useNavigate();

	function goTo(url: string) {
		navigate(url);
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
				onClose={() => setIsOpen(false)}
			>
				<div
					className={darkMode ? styles.containerDark : styles.containerLight}
				>
					<nav className={styles.nav}>
						<div className={styles.title}>Menu</div>
					</nav>
					<div className={styles.main}>
						{options.map(menu => (
							<OptionButton
								key={generateGuid()}
								className={`${styles.menu} ${
									darkMode ? styles.dark : styles.light
								}`}
								onClick={() => goTo(menu.path)}
							>
								{menu.name}
							</OptionButton>
						))}
					</div>
				</div>
			</Drawer>
		</>
	);
}
