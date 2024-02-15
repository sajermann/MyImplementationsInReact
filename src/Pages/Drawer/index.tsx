import { useState } from 'react';

import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Button } from '~/Components/Button';
import { Drawer } from '~/Components/Drawer';
import { ComponentBlock } from '~/Components/ComponentBlock';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { DrawerNew } from '~/Components/DrawerNew';

function Lorem() {
	return (
		<div className="bg-white w-full h-full overflow-auto">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab,
			adipisci dolore iste accusamus quas nemo exercitationem delectus sed quod
			magni? Accusantium ad quibusdam blanditiis dolorum vitae voluptas pariatur
			ipsa.
		</div>
	);
}

export function DrawerPage() {
	const [isOpenLeft, setIsOpenLeft] = useState(false);
	const [isOpenRight, setIsOpenRight] = useState(false);
	const [isOpenBottom, setIsOpenBottom] = useState(false);
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
			{/* <Section heading="Drawer">
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
					<Button onClick={() => setIsOpenLeft(true)}>
						{translate('OPEN_FROM_LEFT')}
					</Button>
					<Drawer
						openFrom="left"
						isOpen={isOpenLeft}
						onClose={() => setIsOpenLeft(false)}
						sectionInternal={{
							className: 'w-5/6 md:w-1/2',
						}}
					>
						<Lorem />
					</Drawer>

					<Button colorStyle="secondary" onClick={() => setIsOpenRight(true)}>
						{translate('OPEN_FROM_RIGHT')}
					</Button>
					<Drawer
						openFrom="right"
						isOpen={isOpenRight}
						onClose={() => setIsOpenRight(false)}
						sectionInternal={{
							className: 'w-5/6 md:w-1/2',
						}}
					>
						<Lorem />
					</Drawer>

					<Button colorStyle="success" onClick={() => setIsOpenBottom(true)}>
						{translate('OPEN_FROM_BOTTOM')}
					</Button>
					<Drawer
						openFrom="bottom"
						isOpen={isOpenBottom}
						onClose={() => setIsOpenBottom(false)}
						sectionInternal={{
							className: 'top-5/6 md:top-1/2',
						}}
					>
						<Lorem />
					</Drawer>
					<Button colorStyle="warning" onClick={() => setIsOpenTop(true)}>
						{translate('OPEN_FROM_TOP')}
					</Button>
					<Drawer
						openFrom="top"
						isOpen={isOpenTop}
						onClose={() => setIsOpenTop(false)}
						sectionInternal={{
							className: 'h-5/6 md:h-1/2',
						}}
					>
						<Lorem />
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('SIZE')}>
				<ComponentBlock>
					<Button onClick={() => setIsOpenLeft10(true)}>
						{translate('LEFT')} 10%
					</Button>
					<DrawerNew
						openFrom="left"
						isOpen={isOpenLeft10}
						onClose={() => setIsOpenLeft10(false)}
						sectionInternal={{
							className: 'w-[10%]',
						}}
					>
						<Lorem />
					</DrawerNew>

					<Button colorStyle="secondary" onClick={() => setIsOpenRight40(true)}>
						{translate('RIGHT')} 40%
					</Button>
					<Drawer
						openFrom="right"
						isOpen={isOpenRight40}
						onClose={() => setIsOpenRight40(false)}
						sectionInternal={{
							className: 'w-[40%]',
						}}
					>
						<Lorem />
					</Drawer>

					<Button colorStyle="success" onClick={() => setIsOpenBottom80(true)}>
						{translate('BOTTOM')} 80%
					</Button>
					<Drawer
						openFrom="bottom"
						isOpen={isOpenBottom80}
						onClose={() => setIsOpenBottom80(false)}
						sectionInternal={{
							className: 'top-[20%]',
						}}
					>
						<Lorem />
					</Drawer>
					<Button colorStyle="warning" onClick={() => setIsOpenTopFull(true)}>
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
								variant="outlined"
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
					<Button onClick={() => setIsOpenBackDrop(true)}>
						{translate('WITH_BACKDROP')}
					</Button>
					<DrawerNew
						openFrom="left"
						isOpen={isOpenBackDrop}
						onClose={() => setIsOpenBackDrop(false)}
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</DrawerNew>

					<Button
						colorStyle="secondary"
						onClick={() => setIsOpenWithoutBackDrop(true)}
					>
						{translate('WITHOUT_BACKDROP')}
					</Button>
					<DrawerNew
						openFrom="left"
						isOpen={isOpenWithoutBackDrop}
						onClose={() => setIsOpenWithoutBackDrop(false)}
						disableBackdrop
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</DrawerNew>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('CLOSE_BY_ESC')}>
				<ComponentBlock>
					<Button onClick={() => setIsOpenEsc(true)}>
						{translate('ENABLED_ESC')}
					</Button>
					<DrawerNew
						openFrom="left"
						isOpen={isOpenEsc}
						onClose={() => setIsOpenEsc(false)}
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</DrawerNew>

					<Button
						colorStyle="secondary"
						onClick={() => setIsOpenEscDisabled(true)}
					>
						{translate('DISABLED_ESC')}
					</Button>
					<DrawerNew
						disableEsc
						openFrom="left"
						isOpen={isOpenEscDisabled}
						onClose={() => setIsOpenEscDisabled(false)}
						disableBackdrop
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</DrawerNew>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('CLOSE_BY_CLICK_OUT')}>
				<ComponentBlock>
					<Button onClick={() => setIsOpenDisableClickOnBackdrop(true)}>
						{translate('CLICK_OUT')}
					</Button>
					<DrawerNew
						openFrom="left"
						isOpen={isOpenDisableClickOnBackdrop}
						onClose={() => setIsOpenDisableClickOnBackdrop(false)}
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</DrawerNew>

					<Button
						colorStyle="secondary"
						onClick={() => setIsOpenDisableClickOnBackdropDisabled(true)}
					>
						{translate('WITHOUT_CLICK_OUT')}
					</Button>
					<DrawerNew
						disableClickOnBackdrop
						openFrom="left"
						isOpen={isOpenDisableClickOnBackdropDisabled}
						onClose={() => setIsOpenDisableClickOnBackdropDisabled(false)}
						disableBackdrop
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</DrawerNew>
				</ComponentBlock>
			</Section> */}

			<Section subHeading={translate('CLOSE_BY_ONE_CLICK')}>
				<ComponentBlock>
					<Button onClick={() => setIsOpenOneClickToClose(true)}>
						{translate('DISABLED_CLOSE_BY_ONE_CLICK')}
					</Button>
					<DrawerNew
						openFrom="left"
						isOpen={isOpenOneClickToClose}
						onClose={() => setIsOpenOneClickToClose(false)}
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</DrawerNew>

					<Button
						colorStyle="secondary"
						onClick={() => setIsOpenOneClickToCloseDisabled(true)}
					>
						{translate('ENABLED_CLOSE_BY_ONE_CLICK')}
					</Button>
					<DrawerNew
						oneClickToClose
						openFrom="left"
						isOpen={isOpenOneClickToCloseDisabled}
						onClose={() => setIsOpenOneClickToCloseDisabled(false)}
						disableBackdrop
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</DrawerNew>
				</ComponentBlock>
			</Section>

			<span>BAtata</span>

			<Section subHeading={translate('OPEN_FROM')}>
				<ComponentBlock>
					<Button onClick={() => setIsOpenLeft(true)}>
						{translate('OPEN_FROM_LEFT')}
					</Button>
					<DrawerNew
						openFrom="left"
						isOpen={isOpenLeft}
						onClose={() => setIsOpenLeft(false)}
						sectionInternal={{
							className: 'w-5/6 md:w-1/2',
						}}
					>
						<div className="backdrop-blur-md w-full h-full">
							{/* <Lorem /> */}
							glo
						</div>
					</DrawerNew>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
