import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Icons } from '~/Components/Icons';
import { AnimateInView } from '~/Components/AnimateInView';
import { DragAndDrop } from '~/Components/DragAndDrop';

const config = {
	en: <Icons nameIcon="Eua" />,
	'pt-BR': <Icons nameIcon="Brazil" />,
};

export function DragAndDropPage() {
	const { translate, currentLanguage } = useTranslation();
	return (
		<Main data-content="content-main">
			<Section title={translate('ANIMATE_IN_VIEW')} variant="h1">
				{translate('IMPLEMENTS_ANIMATE_IN_VIEW')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="Animate In View" />
				</div>
			</Section>
			<Section title="Batata" variant="h2">
				<DragAndDrop />
			</Section>
		</Main>
	);
}
