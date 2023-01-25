import clsx from 'clsx';

import { useDarkMode } from '~/Hooks/DarkMode';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Icons } from '~/Components/Icons';

export function SwitchTheme() {
	const { darkMode, toggleDarkMode } = useDarkMode();
	const { translate } = useTranslation();
	return (
		<div>
			<div>{translate('THEME')}</div>
			<div className="flex items-center justify-center">
				<button
					type="button"
					className={clsx(
						'h-16 border flex items-center justify-center gap-2 p-4 rounded-l-lg',
						{
							'border-violet-700': darkMode,
						}
					)}
					onClick={!darkMode ? toggleDarkMode : undefined}
				>
					<Icons.Moon />
					{translate('DARK')}
				</button>
				<button
					type="button"
					className={clsx(
						'h-16 border flex items-center justify-center gap-2 p-4 rounded-r-lg',
						{
							'border-violet-700 cursor-pointer': !darkMode,
						}
					)}
					onClick={darkMode ? toggleDarkMode : undefined}
				>
					<Icons.Sun />
					{translate('LIGHT')}
				</button>
			</div>
		</div>
	);
}
