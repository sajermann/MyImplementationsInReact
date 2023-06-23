import { useTranslation } from '~/Hooks/UseTranslation';
import { Icons } from '~/Components/Icons';
import { useDarkModeZustand } from '~/Store/UseDarkMode';
import { managerClassNames } from '~/Utils/ManagerClassNames';

export function SwitchTheme() {
	const { darkMode, toggleDarkMode } = useDarkModeZustand();
	const { translate } = useTranslation();
	return (
		<div>
			<div>{translate('THEME')}</div>
			<div className="flex items-center justify-center">
				<button
					type="button"
					className={managerClassNames(
						'h-16 border flex items-center justify-center gap-2 p-4 rounded-l-lg',
						{
							'border-violet-700': darkMode,
						}
					)}
					onClick={!darkMode ? toggleDarkMode : undefined}
				>
					<Icons nameIcon="Moon" />
					{translate('DARK')}
				</button>
				<button
					type="button"
					className={managerClassNames(
						'h-16 border flex items-center justify-center gap-2 p-4 rounded-r-lg',
						{
							'border-violet-700 cursor-pointer': !darkMode,
						}
					)}
					onClick={darkMode ? toggleDarkMode : undefined}
				>
					<Icons nameIcon="Sun" />
					{translate('LIGHT')}
				</button>
			</div>
		</div>
	);
}
