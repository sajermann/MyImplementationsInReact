import { List } from 'phosphor-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { OptionButton } from '../OptionButton';
import { Drawer } from '../Drawer';
import { Nav } from '../Nav';
import { HeaderButton } from '../HeaderButton';
import { Main } from '../Main';

export default function MenuAccessOptions() {
	const [isOpen, setIsOpen] = useState(false);
	const { options } = useRoutesMenu();
	const navigate = useNavigate();

	function goTo(url: string) {
		navigate(url);
	}

	return (
		<>
			<HeaderButton onClick={() => setIsOpen(!isOpen)}>
				<List size={22} />
			</HeaderButton>
			<Drawer
				oneClickToClose
				openFrom="left"
				size="500px"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<Main>
					<Nav>
						<h2 className="text-xl whitespace-nowrap font-bold text-white">
							Menu
						</h2>
					</Nav>
					<div>
						{options.map(menu => (
							<OptionButton
								key={generateGuid()}
								onClick={() => goTo(menu.path)}
								className="w-full flex"
							>
								{menu.name}
							</OptionButton>
						))}
					</div>
				</Main>
			</Drawer>
		</>
	);
}
