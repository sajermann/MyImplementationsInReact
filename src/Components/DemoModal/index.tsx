import { useState } from 'react';

import { Button } from '~/Components/Button';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Modal } from '../Modal';

export function DemoModal() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { translate } = useTranslation();

	return (
		<div className="w-full h-64 flex items-center justify-center">
			<Button
				variant="Outlined"
				colorStyle="Secondary"
				onClick={() => setIsOpenModal(true)}
				className="!w-72 !h-12"
			>
				{translate('OPEN')}
			</Button>
			<Modal
				title={translate('MODAL')}
				width="70%"
				height="50%"
				isOpen={isOpenModal}
				onClose={() => setIsOpenModal(false)}
				closeButton
				closeByEsc
				closeByBackdrop
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
				corrupti illo iusto ipsum incidunt in! Nostrum laudantium, alias in iste
				blanditiis soluta nemo suscipit! Consequuntur recusandae repudiandae
				tempora possimus earum.
			</Modal>
		</div>
	);
}
