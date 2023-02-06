import { useState } from 'react';

import { Button } from '~/Components/Button';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Drawer } from '../Drawer';
import { Main } from '../Main';

export function DemoDrawer() {
	const { translate } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full h-64 flex items-center justify-center">
			<Button
				variant="Outlined"
				colorStyle="Success"
				onClick={() => setIsOpen(true)}
				className="!w-72 !h-12"
			>
				{translate('OPEN')}
			</Button>
			<Drawer
				openFrom="left"
				size="50%"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<Main>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime
					qui enim ipsa cupiditate aut provident ad eos consectetur vitae ullam
					dolorem ex in est illo, cum quas obcaecati architecto.
				</Main>
			</Drawer>
		</div>
	);
}
