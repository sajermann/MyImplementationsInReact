/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import clsx from 'clsx';

import { useTranslation } from '~/Hooks/UseTranslation';
import { Drawer } from '../Drawer';
import { useDarkMode } from '../../Hooks/DarkMode';
import styles from './styles.module.css';
import { Icons } from '../Icons';

export default function MenuSettings() {
	const [isOpen, setIsOpen] = useState(false);
	const { translate } = useTranslation();
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className={styles.buttonMenu}
			>
				<Icons.Gear width="22" />
			</button>
			<Drawer
				openFrom="right"
				percentage={30}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<div
					className={darkMode ? styles.containerDark : styles.containerLight}
				>
					<nav className={styles.nav}>
						<div className={styles.title}>{translate('SETTINGS')}</div>
					</nav>
					<div className={styles.main}>
						<div>
							<div>{translate('THEME')}</div>
							<div className="flex items-center justify-center gap-2">
								<button
									type="button"
									className={clsx('w-32 h-32 rounded border cursor-pointer', {
										'border-violet-700': darkMode,
									})}
									onClick={!darkMode ? toggleDarkMode : undefined}
								>
									<Icons.Moon />
								</button>
								<button
									type="button"
									className={clsx('w-32 h-32 rounded border cursor-pointer', {
										'border-violet-700': !darkMode,
									})}
									onClick={darkMode ? toggleDarkMode : undefined}
								>
									<Icons.Sun />
								</button>
							</div>
						</div>

						<div>
							<div>{translate('LANGUAGE')}</div>
							<div className="flex items-center justify-center gap-2">
								<div className="w-32 rounded border">
									<Icons.Brazil />
								</div>
								<div className="w-32 rounded border-2 border-violet-700">
									<Icons.Eua />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Drawer>
		</>
	);
}
