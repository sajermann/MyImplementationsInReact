import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type Te = {
	type: string;
	title: string;
	anchor: string;
};

export default function TableOfContents() {
	const [optionsMenu, setOptionsMenu] = useState<Te[]>([]);
	function load() {
		const menus: Te[] = [];
		const subs = document.querySelectorAll(
			'[data-content="content-main"] h1,[data-content="content-main"] h2,[data-content="content-main"] h3'
		);
		for (let i = 0; i < subs.length; i += 1) {
			menus.push({
				type: subs[i].nodeName,
				title: subs[i].textContent || '',
				anchor: `${i}-${subs[i].nodeName}-${subs[i].textContent}`,
			});
			subs[i].setAttribute(
				'id',
				`${i}-${subs[i].nodeName}-${subs[i].textContent}`
			);
		}
		setOptionsMenu([...menus]);
	}
	useEffect(() => {
		load();
	}, []);
	return (
		<nav className={styles.container}>
			<strong>Nessa Página</strong>
			<ul>
				{optionsMenu.map(item => (
					<li key={`#${item.anchor}`} className={styles[item.type]}>
						<a href={`#${item.anchor}`}>{item.title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
