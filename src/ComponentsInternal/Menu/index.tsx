import { List } from 'phosphor-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';
import { OptionButton } from '../../components/OptionButton';
import { Drawer } from '../../components/Drawer';
import { useDarkMode } from '../../Hooks/DarkMode';
import styles from './styles.module.css';

export default function Menu() {
	const { darkMode } = useDarkMode();
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	function goTo(url: string) {
		navigate(url);
	}

	const optionsMenu = [
		{
			title: 'Home',
			url: '/',
		},
		{
			title: 'Instalação',
			url: '/getting-started',
		},
		{
			title: 'Botão',
			url: '/docs/button',
		},
		{
			title: 'Botão Opção',
			url: '/docs/option-button',
		},
		{
			title: 'Drawer',
			url: '/docs/drawer',
		},
		{
			title: 'Input',
			url: '/docs/input',
		},
	];

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
						{optionsMenu.map(menu => (
							<OptionButton
								key={generateGuid()}
								className={`${styles.menu} ${
									darkMode ? styles.dark : styles.light
								}`}
								onClick={() => goTo(menu.url)}
							>
								{menu.title}
							</OptionButton>
						))}
					</div>
				</div>
			</Drawer>
		</>
	);
}
