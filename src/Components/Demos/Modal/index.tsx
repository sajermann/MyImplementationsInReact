import { useState } from 'react';

import { Button } from '~/Components/Button';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Modal } from '../../Modal';

export function ModalDemo() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { translate } = useTranslation();

	return (
		<>
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
				contentProps={{
					className: 'w-3/4 h-1/2',
				}}
				isOpen={isOpenModal}
				onClose={() => setIsOpenModal(false)}
				closeButton
				closeByEsc
				closeByBackdrop
				expand={{
					resetOnClose: false,
				}}
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
				corrupti illo iusto ipsum incidunt in! Nostrum laudantium, alias in iste
				blanditiis soluta nemo suscipit! Consequuntur recusandae repudiandae
				tempora possimus earum.
			</Modal>
		</>
	);
}
