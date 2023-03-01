import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoadingLazy } from '~/Hooks/LoadingLazy';

import { useTranslation } from '~/Hooks/UseTranslation';
import useWindow from '~/Hooks/UseWindow';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Main } from '../Main';

type Menu = {
	type: string;
	title: string;
	anchor: string;
	top: number;
	active: boolean;
};

export function TableOfContents() {
	const { isLoadingLazy } = useLoadingLazy();
	const [optionsMenu, setOptionsMenu] = useState<Menu[]>([]);
	const location = useLocation();
	const { scrollPosition } = useWindow();
	const { translate, currentLanguage } = useTranslation();

	function load() {
		if (isLoadingLazy) return;
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

	async function handleClick(element: Menu) {
		setOptionsMenu(prev => [
			...prev.map(item => ({
				...item,
				active: item.anchor === element.anchor,
			})),
		]);
		// if (element.top > 0) {
		// 	await delay(1);
		// 	window.scroll({
		// 		top: element.top,
		// 		behavior: 'smooth',
		// 	});
		// }
	}

	useEffect(
		() => load(),
		[scrollPosition, location.pathname, currentLanguage, isLoadingLazy]
	);

	if (!optionsMenu.length) {
		return null;
	}

	return (
		<Main heading={translate('TABLE_OF_CONTENTS')}>
			<nav>
				<ul>
					{optionsMenu.map(item => (
						<li
							key={`#${item.anchor}`}
							className={managerClassNames({
								'pl-6': item.type === 'H2',
								'pl-12': item.type === 'H3',
							})}
						>
							<a
								className={managerClassNames({
									'!text-primary-700 border-l-4 border-primary-700 pl-1':
										item.active,
								})}
								href={`#${item.anchor}`}
								onClick={() => handleClick(item)}
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</Main>
	);
}
