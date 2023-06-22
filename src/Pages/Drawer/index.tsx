import { useState } from 'react';

import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Button } from '~/Components/Button';
import { Drawer } from '~/Components/Drawer';
import { ComponentBlock } from '~/Components/ComponentBlock';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

function Lorem() {
	return (
		<Main>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab,
			adipisci dolore iste accusamus quas nemo exercitationem delectus sed quod
			magni? Accusantium ad quibusdam blanditiis dolorum vitae voluptas pariatur
			ipsa.
		</Main>
	);
}

export function DrawerPage() {
	const [isOpenLeft, setIsOpenLeft] = useState(false);
	const [isOpenRight, setIsOpenRight] = useState(false);
	const [isOpenBotttom, setIsOpenBottom] = useState(false);
	const [isOpenTop, setIsOpenTop] = useState(false);

	const [isOpenLeft10, setIsOpenLeft10] = useState(false);
	const [isOpenRight40, setIsOpenRight40] = useState(false);
	const [isOpenBottom80, setIsOpenBottom80] = useState(false);
	const [isOpenTopFull, setIsOpenTopFull] = useState(false);

	const [isOpenBackDrop, setIsOpenBackDrop] = useState(false);
	const [isOpenWithoutBackDrop, setIsOpenWithoutBackDrop] = useState(false);

	const [isOpenEsc, setIsOpenEsc] = useState(false);
	const [isOpenEscDisabled, setIsOpenEscDisabled] = useState(false);

	const [isOpenDisableClickOnBackdrop, setIsOpenDisableClickOnBackdrop] =
		useState(false);
	const [
		isOpenDisableClickOnBackdropDisabled,
		setIsOpenDisableClickOnBackdropDisabled,
	] = useState(false);

	const [isOpenOneClickToClose, setIsOpenOneClickToClose] = useState(false);
	const [isOpenOneClickToCloseDisabled, setIsOpenOneClickToCloseDisabled] =
		useState(false);

	const { translate } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section heading="Drawer">
				{`${translate('IMPLEMENTS_COMPONENT')} Drawer ${translate(
					'WITHOUT_USING_LIB'
				)}`}
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Drawer" />
				</div>
			</Section>

			<Section subHeading={translate('OPEN_FROM')}>
				<ComponentBlock>
					<Button colorStyle="Primary" onClick={() => setIsOpenLeft(true)}>
						{translate('OPEN_FROM_LEFT')}
					</Button>
					<Drawer
						openFrom="left"
						size="50%"
						isOpen={isOpenLeft}
						onClose={() => setIsOpenLeft(false)}
					>
						<Lorem />
					</Drawer>

					<Button colorStyle="Secondary" onClick={() => setIsOpenRight(true)}>
						{translate('OPEN_FROM_RIGHT')}
					</Button>
					<Drawer
						openFrom="right"
						size="50%"
						isOpen={isOpenRight}
						onClose={() => setIsOpenRight(false)}
					>
						<Lorem />
					</Drawer>

					<Button colorStyle="Success" onClick={() => setIsOpenBottom(true)}>
						{translate('OPEN_FROM_BOTTOM')}
					</Button>
					<Drawer
						openFrom="bottom"
						size="50%"
						isOpen={isOpenBotttom}
						onClose={() => setIsOpenBottom(false)}
					>
						<Lorem />
					</Drawer>
					<Button colorStyle="Warning" onClick={() => setIsOpenTop(true)}>
						{translate('OPEN_FROM_TOP')}
					</Button>
					<Drawer
						openFrom="top"
						size="50%"
						isOpen={isOpenTop}
						onClose={() => setIsOpenTop(false)}
					>
						<Lorem />
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('SIZE')}>
				<ComponentBlock>
					<Button colorStyle="Primary" onClick={() => setIsOpenLeft10(true)}>
						{translate('LEFT')} 10%
					</Button>
					<Drawer
						openFrom="left"
						size="10%"
						isOpen={isOpenLeft10}
						onClose={() => setIsOpenLeft10(false)}
					>
						<Lorem />
					</Drawer>

					<Button colorStyle="Secondary" onClick={() => setIsOpenRight40(true)}>
						{translate('RIGHT')} 40%
					</Button>
					<Drawer
						openFrom="right"
						size="40%"
						isOpen={isOpenRight40}
						onClose={() => setIsOpenRight40(false)}
					>
						<Lorem />
					</Drawer>

					<Button colorStyle="Success" onClick={() => setIsOpenBottom80(true)}>
						{translate('BOTTOM')} 80%
					</Button>
					<Drawer
						openFrom="bottom"
						size="20%"
						isOpen={isOpenBottom80}
						onClose={() => setIsOpenBottom80(false)}
					>
						<Lorem />
					</Drawer>
					<Button colorStyle="Warning" onClick={() => setIsOpenTopFull(true)}>
						{translate('TOP')} 100%
					</Button>
					<Drawer
						openFrom="top"
						isOpen={isOpenTopFull}
						onClose={() => setIsOpenTopFull(false)}
					>
						<Main>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Assumenda ab, adipisci dolore iste accusamus quas nemo
							exercitationem delectus sed quod magni? Accusantium ad quibusdam
							blanditiis dolorum vitae voluptas pariatur ipsa.
							<Button
								colorStyle="Primary"
								variant="Outlined"
								onClick={() => setIsOpenTopFull(false)}
							>
								Fechar
							</Button>
						</Main>
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('BACKDROP')}>
				<ComponentBlock>
					<Button colorStyle="Primary" onClick={() => setIsOpenBackDrop(true)}>
						{translate('WITH_BACKDROP')}
					</Button>
					<Drawer
						openFrom="left"
						size="50%"
						isOpen={isOpenBackDrop}
						onClose={() => setIsOpenBackDrop(false)}
					>
						<Lorem />
					</Drawer>

					<Button
						colorStyle="Secondary"
						onClick={() => setIsOpenWithoutBackDrop(true)}
					>
						{translate('WITHOUT_BACKDROP')}
					</Button>
					<Drawer
						openFrom="left"
						size="50%"
						isOpen={isOpenWithoutBackDrop}
						onClose={() => setIsOpenWithoutBackDrop(false)}
						disableBackdrop
					>
						<Lorem />
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('CLOSE_BY_ESC')}>
				<ComponentBlock>
					<Button colorStyle="Primary" onClick={() => setIsOpenEsc(true)}>
						{translate('ENABLED_ESC')}
					</Button>
					<Drawer
						openFrom="left"
						size="50%"
						isOpen={isOpenEsc}
						onClose={() => setIsOpenEsc(false)}
					>
						<Lorem />
					</Drawer>

					<Button
						colorStyle="Secondary"
						onClick={() => setIsOpenEscDisabled(true)}
					>
						{translate('DISABLED_ESC')}
					</Button>
					<Drawer
						disableEsc
						openFrom="left"
						size="50%"
						isOpen={isOpenEscDisabled}
						onClose={() => setIsOpenEscDisabled(false)}
						disableBackdrop
					>
						<Lorem />
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('CLOSE_BY_CLICK_OUT')}>
				<ComponentBlock>
					<Button
						colorStyle="Primary"
						onClick={() => setIsOpenDisableClickOnBackdrop(true)}
					>
						{translate('CLICK_OUT')}
					</Button>
					<Drawer
						openFrom="left"
						size="50%"
						isOpen={isOpenDisableClickOnBackdrop}
						onClose={() => setIsOpenDisableClickOnBackdrop(false)}
					>
						<Lorem />
					</Drawer>

					<Button
						colorStyle="Secondary"
						onClick={() => setIsOpenDisableClickOnBackdropDisabled(true)}
					>
						{translate('WITHOUT_CLICK_OUT')}
					</Button>
					<Drawer
						disableClickOnBackdrop
						openFrom="left"
						size="50%"
						isOpen={isOpenDisableClickOnBackdropDisabled}
						onClose={() => setIsOpenDisableClickOnBackdropDisabled(false)}
						disableBackdrop
					>
						<Lorem />
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('CLOSE_BY_ONE_CLICK')}>
				<ComponentBlock>
					<Button
						colorStyle="Primary"
						onClick={() => setIsOpenOneClickToClose(true)}
					>
						{translate('DISABLED_CLOSE_BY_ONE_CLICK')}
					</Button>
					<Drawer
						openFrom="left"
						size="50%"
						isOpen={isOpenOneClickToClose}
						onClose={() => setIsOpenOneClickToClose(false)}
					>
						<Lorem />
					</Drawer>

					<Button
						colorStyle="Secondary"
						onClick={() => setIsOpenOneClickToCloseDisabled(true)}
					>
						{translate('ENABLED_CLOSE_BY_ONE_CLICK')}
					</Button>
					<Drawer
						oneClickToClose
						openFrom="left"
						size="50%"
						isOpen={isOpenOneClickToCloseDisabled}
						onClose={() => setIsOpenOneClickToCloseDisabled(false)}
						disableBackdrop
					>
						<Lorem />
					</Drawer>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
