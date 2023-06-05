import { useState } from 'react';

import { useTranslation } from '~/Hooks/UseTranslation';
import { Drawer } from '~/Components/Drawer';
import { Icons } from '~/Components/Icons';
import { HeaderButton } from '~/Components/HeaderButton';
import { Nav } from '~/Components/Nav';
import { Main } from '~/Components/Main';
import { SwitchTheme } from '~/Components/SwitchTheme';
import { SwitchLanguage } from '~/Components/SwitchLanguage';
import { ButtonIcon } from '../ButtonIcon';
import { SwitchAccessibility } from '../SwitchAccessibility';

export default function MenuSettings() {
	const [isOpen, setIsOpen] = useState(false);
	const { translate } = useTranslation();

	return (
		<>
			<HeaderButton onClick={() => setIsOpen(!isOpen)}>
				<Icons nameIcon="Gear" width="22" />
			</HeaderButton>

			<Drawer
				openFrom="right"
				size="500px"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<Main>
					<Nav className="flex justify-between w-full">
						<h2 className="text-xl whitespace-nowrap font-bold text-white">
							{translate('SETTINGS')}
						</h2>
						<ButtonIcon
							className="text-primary-500 hover:text-primary-300 hover:bg-slate-600"
							onClick={() => setIsOpen(false)}
							data-testid="closeButtonModal"
						>
							<Icons nameIcon="Close" width="1rem" />
						</ButtonIcon>
					</Nav>
					<div className="flex flex-col p-4 gap-4">
						<SwitchTheme />

						<SwitchLanguage />
						<SwitchAccessibility />
					</div>
				</Main>
			</Drawer>
		</>
	);
}
