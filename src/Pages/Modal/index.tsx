import { useState } from 'react';

import { Modal } from '~/Components/Modal';
import { useTranslation } from '~/Hooks/UseTranslation';
import { CodeBlock } from '~/Components/CodeBlock';
import { Button } from '~/Components/Button';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';

import { Main } from '~/Components/Main';
import styles from './styles.module.css';

export function ModalPage() {
	const { translate } = useTranslation();
	const [withCloseButton, setWithCloseButton] = useState(true);
	const [closeByEsc, setCloseByEsc] = useState(false);
	const [closeByBackdrop, setCloseByBackdrop] = useState(false);
	const [expandResetOnClose, setExpandResetOnClose] = useState(false);
	const [isOpenModal1, setIsOpenModal1] = useState(false);
	const [isOpenModal2, setIsOpenModal2] = useState(false);

	return (
		<Main data-content="content-main">
			<Section heading={translate('MODALS')}>
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate(
					'MODAL'
				)} ${translate('USING_THE_LIB')} @radix-ui/react-dialog.`}
			</Section>
			<Section subHeading={translate('INSTALLATION_OF_LIB')}>
				<CodeBlock>npm i @radix-ui/react-dialog;</CodeBlock>
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<a
						href="https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Modal"
						target="_blank"
						rel="noopener noreferrer"
					>
						{translate('IMPLEMENTS_CODE')}
					</a>
					<a
						href="https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Modal"
						target="_blank"
						rel="noopener noreferrer"
					>
						{translate('EXAMPLES_CODE')}
					</a>
				</div>
			</Section>

			<Section subHeading={translate('CLOSE_OPTIONS')}>
				{translate('COMUM_MODAL_WITH_OPIONS_FOR_CLOSING')}
				<ComponentBlock>
					<Button
						className={styles.btn}
						onClick={() => {
							setWithCloseButton(true);
							setIsOpenModal1(true);
						}}
					>
						{translate('WITH_CLOSE_BUTTON')}
					</Button>
					<Button
						className={styles.btn}
						onClick={() => {
							setWithCloseButton(false);
							setCloseByEsc(true);
							setIsOpenModal1(true);
						}}
					>
						{translate('WITH_CLOSE_BY_ESC')}
					</Button>
					<Button
						className={styles.btn}
						onClick={() => {
							setWithCloseButton(false);
							setCloseByEsc(false);
							setCloseByBackdrop(true);
							setIsOpenModal1(true);
						}}
					>
						{translate('WITH_CLOSE_BY_BACKDROP')}
					</Button>
					<Button
						className={styles.btn}
						onClick={() => {
							setWithCloseButton(false);
							setCloseByEsc(false);
							setCloseByBackdrop(false);
							setIsOpenModal1(true);
						}}
					>
						{translate('WITHOUT_OPTIONS_CLOSING')}
					</Button>
					<Modal
						title={translate('COMUM_MODAL')}
						width="70%"
						height="50%"
						isOpen={isOpenModal1}
						onClose={() => setIsOpenModal1(false)}
						closeButton={withCloseButton}
						closeByEsc={closeByEsc}
						closeByBackdrop={closeByBackdrop}
					>
						{withCloseButton && (
							<p>{translate('CLICK_IN_CLOSE_BUTTON_FOR_CLOSING_MODAL')}</p>
						)}

						{closeByEsc && (
							<p>{translate('TYPE_IN_ESC_BUTTON_FOR_CLOSING_MODAL')}</p>
						)}

						{closeByBackdrop && (
							<p>{translate('CLICK_IN_BACKDROP_FOR_CLOSING_MODAL')}</p>
						)}
						{!withCloseButton && !closeByEsc && !closeByBackdrop && (
							<Button
								className={styles.btn}
								onClick={() => {
									setIsOpenModal1(false);
								}}
							>
								{translate('CLOSE')}
							</Button>
						)}
					</Modal>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('EXPAND_OPTIONS')}>
				{translate('OPTION_FOR_EXPAND_MODAL_FOR_FULL_SCREEN')}
				<ComponentBlock>
					<Button
						className={styles.btn}
						onClick={() => {
							setExpandResetOnClose(true);
							setIsOpenModal2(true);
						}}
					>
						{translate('RESET_ON_CLOSE')}
					</Button>
					<Button
						className={styles.btn}
						onClick={() => {
							setExpandResetOnClose(false);
							setIsOpenModal2(true);
						}}
					>
						{translate('DONT_RESET_ON_CLOSE')}
					</Button>
					<Modal
						title={translate('EXPAND_MODAL')}
						width="70%"
						height="50%"
						isOpen={isOpenModal2}
						onClose={() => setIsOpenModal2(false)}
						closeButton
						expand={{
							resetOnClose: expandResetOnClose,
						}}
					>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
							assumenda, magni et nam provident eveniet? Hic maiores tempore
							aut, aliquid id quisquam? Dicta, laborum at earum ab totam quis?
							Accusamus. Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Exercitationem laboriosam dolor autem illo nesciunt
							distinctio sequi quisquam debitis illum modi? Enim quis dolorum
							dolor nostrum pariatur quidem earum ratione a.
						</div>
					</Modal>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
