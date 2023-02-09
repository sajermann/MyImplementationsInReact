import { useState } from 'react';

import { Button } from '~/Components/Button';
import { Main } from '~/Components/Main';
import { Drawer } from '~/Components/Drawer';
import { useTranslation } from '~/Hooks/UseTranslation';

export function DrawerDemo() {
	const { translate } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
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
		</>
	);
}
