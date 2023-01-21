import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useWindow from '../../Hooks/UseWindow';
import styles from './styles.module.css';

type Menu = {
	type: string;
	title: string;
	anchor: string;
	top: number;
	active: boolean;
};

export default function TableOfContents() {
	const [optionsMenu, setOptionsMenu] = useState<Menu[]>([]);
	const location = useLocation();
	const { scrollPosition } = useWindow();

	function load() {
		// if (!location.pathname.includes('/docs/')) {
		// 	setOptionsMenu([]);
		// 	return;
		// }
		const menus: Menu[] = [];
		const subs = document.querySelectorAll(
			'[data-content="content-main"] h1,[data-content="content-main"] h2,[data-content="content-main"] h3'
		);
		for (let i = 0; i < subs.length; i += 1) {
			menus.push({
				type: subs[i].nodeName,
				title: subs[i].textContent || '',
				anchor: `${i}-${subs[i].nodeName}-${subs[i].textContent}`,
				top: subs[i].getBoundingClientRect().top,
				active: false,
			});
			subs[i].setAttribute(
				'id',
				`${i}-${subs[i].nodeName}-${subs[i].textContent}`
			);
		}

		const goal = 0;
		console.log({ menus });
		if (menus.length === 0) return;
		const closest = menus.reduce((prev, curr) =>
			Math.abs(curr.top - goal) < Math.abs(prev.top - goal) ? curr : prev
		);
		const menusWithActive = menus.map(item => {
			if (item.anchor === closest.anchor) {
				return { ...item, active: true };
			}
			return item;
		});

		setOptionsMenu([...menusWithActive]);
	}

	useEffect(() => load(), [scrollPosition, location.pathname]);

	if (!optionsMenu.length) {
		return null;
	}

	return (
		<nav className={styles.container}>
			<strong>Acesso Rápido</strong>
			<ul>
				{optionsMenu.map(item => (
					<li
						key={`#${item.anchor}`}
						className={`${styles[item.type]} ${item.active && styles.active}`}
					>
						<a href={`#${item.anchor}`}>{item.title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
