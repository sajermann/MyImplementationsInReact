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
				variant="outlined"
				colorStyle="success"
				onClick={() => setIsOpen(true)}
				className="!w-72 !h-12"
			>
				{translate('OPEN')}
			</Button>
			<Drawer
				openFrom="left"
				sectionInternal={{
					className: 'w-5/6 md:w-1/2',
				}}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<div className="backdrop-blur-md text-white w-full h-full overflow-auto">
					<Main>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						maxime qui enim ipsa cupiditate aut provident ad eos consectetur
						vitae ullam dolorem ex in est illo, cum quas obcaecati architecto.
					</Main>
				</div>
			</Drawer>
		</>
	);
}
