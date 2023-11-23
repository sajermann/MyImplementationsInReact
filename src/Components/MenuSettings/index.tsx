import { useState } from 'react';

import { useTranslation } from '~/Hooks/UseTranslation';
import { Drawer } from '~/Components/Drawer';
import { Icons } from '~/Components/Icons';
import { HeaderButton } from '~/Components/HeaderButton';
import { Nav } from '~/Components/Nav';
import { Main } from '~/Components/Main';
import { SwitchTheme } from '~/Components/SwitchTheme';
import { SwitchLanguage } from '~/Components/SwitchLanguage';
import { SwitchAccessibility } from '../SwitchAccessibility';
import { Button } from '../Button';

export default function MenuSettings() {
	const [isOpen, setIsOpen] = useState(false);
	const { translate } = useTranslation();

	return (
		<>
			<HeaderButton onClick={() => setIsOpen(!isOpen)}>
				<Icons nameIcon="gear" width="1.5rem" />
			</HeaderButton>

			<Drawer
				openFrom="right"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				sectionInternal={{
					className: 'w-96',
				}}
			>
				<Main>
					<Nav className="flex justify-between w-full">
						<h2 className="text-xl whitespace-nowrap font-bold text-white">
							{translate('SETTINGS')}
						</h2>
						<Button
							iconButton="rounded"
							variant="option"
							onClick={() => setIsOpen(false)}
							data-testid="closeButtonModal"
						>
							<Icons nameIcon="close" width="1rem" />
						</Button>
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
