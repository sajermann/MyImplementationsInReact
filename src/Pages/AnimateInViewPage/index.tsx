import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Icons } from '~/Components/Icons';
import { AnimateInView } from '~/Components/AnimateInView';

const config = {
	'en-US': <Icons nameIcon="eua" />,
	'pt-BR': <Icons nameIcon="brazil" />,
};

export function AnimateInViewPage() {
	const { translate, currentLanguage } = useTranslation();
	return (
		<Main data-content="content-main">
			<Section title={translate('ANIMATE_IN_VIEW')} variant="h1">
				{translate('IMPLEMENTS_ANIMATE_IN_VIEW')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2  bg-dark-400">
					<QuickAccessGithub name="Animate In View" />
				</div>
			</Section>
			<Section title={translate('FROM_LEFT_TO_RIGHT')} variant="h2">
				<AnimateInView className="w-full" type="fromLeft">
					{config[currentLanguage]}
				</AnimateInView>
			</Section>
			<Section title={translate('FROM_RIGHT_TO_LEFT')} variant="h2">
				<AnimateInView className="w-full" type="fromRight">
					{config[currentLanguage]}
				</AnimateInView>
			</Section>
			<Section title={translate('FROM_BOTTOM_TO_TOP')} variant="h2">
				<AnimateInView className="w-full" type="fromBottom">
					{config[currentLanguage]}
				</AnimateInView>
			</Section>
			<Section title={translate('FROM_TOP_TO_BOTTOM')} variant="h2">
				<AnimateInView className="w-full" type="fromTop">
					{config[currentLanguage]}
				</AnimateInView>
			</Section>
			<Section title="Fade" variant="h2">
				<AnimateInView className="w-full" type="fade">
					{config[currentLanguage]}
				</AnimateInView>
			</Section>
		</Main>
	);
}
