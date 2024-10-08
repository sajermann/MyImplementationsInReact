import { useState } from 'react';

import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Button } from '~/Components/Button';
import { Drawer } from '~/Components/Drawer';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

function Lorem({ children }: { children?: React.ReactNode }) {
	return (
		<div className="backdrop-blur-md text-white w-full h-full overflow-auto">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab,
			adipisci dolore iste accusamus quas nemo exercitationem delectus sed quod
			magni? Accusantium ad quibusdam blanditiis dolorum vitae voluptas pariatur
			ipsa.
			{children}
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
			<Section title="Drawer" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Drawer ${translate(
					'WITHOUT_USING_LIB',
				)}`}
			</Section>

			<Section title={translate('CODES')}>
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Drawer" />
				</div>
			</Section>

			<Section title={translate('OPEN_FROM')} variant="h2">
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

			<Section title={translate('SIZE')} variant="h2">
				<ComponentBlock>
					<Button onClick={() => setIsOpenLeft10(true)}>
						{translate('LEFT')} 10%
					</Button>
					<Drawer
						openFrom="left"
						isOpen={isOpenLeft10}
						onClose={() => setIsOpenLeft10(false)}
						sectionInternal={{
							className: 'w-[10%]',
						}}
					>
						<Lorem />
					</Drawer>

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
						<Lorem>
							<Button
								variant="outlined"
								onClick={() => setIsOpenTopFull(false)}
							>
								{translate('CLOSE')}
							</Button>
						</Lorem>
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section title={translate('BACKDROP')} variant="h2">
				<ComponentBlock>
					<Button onClick={() => setIsOpenBackDrop(true)}>
						{translate('WITH_BACKDROP')}
					</Button>
					<Drawer
						openFrom="left"
						isOpen={isOpenBackDrop}
						onClose={() => setIsOpenBackDrop(false)}
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</Drawer>

					<Button
						colorStyle="secondary"
						onClick={() => setIsOpenWithoutBackDrop(true)}
					>
						{translate('WITHOUT_BACKDROP')}
					</Button>
					<Drawer
						openFrom="left"
						isOpen={isOpenWithoutBackDrop}
						onClose={() => setIsOpenWithoutBackDrop(false)}
						disableBackdrop
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section title={translate('CLOSE_BY_ESC')} variant="h2">
				<ComponentBlock>
					<Button onClick={() => setIsOpenEsc(true)}>
						{translate('ENABLED_ESC')}
					</Button>
					<Drawer
						openFrom="left"
						isOpen={isOpenEsc}
						onClose={() => setIsOpenEsc(false)}
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</Drawer>

					<Button
						colorStyle="secondary"
						onClick={() => setIsOpenEscDisabled(true)}
					>
						{translate('DISABLED_ESC')}
					</Button>
					<Drawer
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
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section title={translate('CLOSE_BY_CLICK_OUT')} variant="h2">
				<ComponentBlock>
					<Button onClick={() => setIsOpenDisableClickOnBackdrop(true)}>
						{translate('CLICK_OUT')}
					</Button>
					<Drawer
						openFrom="left"
						isOpen={isOpenDisableClickOnBackdrop}
						onClose={() => setIsOpenDisableClickOnBackdrop(false)}
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</Drawer>

					<Button
						colorStyle="secondary"
						onClick={() => setIsOpenDisableClickOnBackdropDisabled(true)}
					>
						{translate('WITHOUT_CLICK_OUT')}
					</Button>
					<Drawer
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
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section title={translate('CLOSE_BY_ONE_CLICK')} variant="h2">
				<ComponentBlock>
					<Button onClick={() => setIsOpenOneClickToClose(true)}>
						{translate('DISABLED_CLOSE_BY_ONE_CLICK')}
					</Button>
					<Drawer
						openFrom="left"
						isOpen={isOpenOneClickToClose}
						onClose={() => setIsOpenOneClickToClose(false)}
						sectionInternal={{
							className: 'w-1/2',
						}}
					>
						<Lorem />
					</Drawer>

					<Button
						colorStyle="secondary"
						onClick={() => setIsOpenOneClickToCloseDisabled(true)}
					>
						{translate('ENABLED_CLOSE_BY_ONE_CLICK')}
					</Button>
					<Drawer
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
					</Drawer>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
