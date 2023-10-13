import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Icons } from '~/Components/Icons';
import { AnimateInView } from '~/Components/AnimateInView';

const config = {
	en: <Icons nameIcon="eua" />,
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
				<div className="flex gap-2">
					<QuickAccessGithub name="Animate In View" />
				</div>
			</Section>
			<Section title="From Left" variant="h2">
				<AnimateInView className="w-full" type="fromLeft">
					{config[currentLanguage as 'en' | 'pt-BR']}
				</AnimateInView>
			</Section>
			<Section title="From Right" variant="h2">
				<AnimateInView className="w-full" type="fromRight">
					{config[currentLanguage as 'en' | 'pt-BR']}
				</AnimateInView>
			</Section>
			<Section title="From Bottom" variant="h2">
				<AnimateInView className="w-full" type="fromBottom">
					{config[currentLanguage as 'en' | 'pt-BR']}
				</AnimateInView>
			</Section>
			<Section title="From Top" variant="h2">
				<AnimateInView className="w-full" type="fromTop">
					{config[currentLanguage as 'en' | 'pt-BR']}
				</AnimateInView>
			</Section>
			<Section title="From Fade" variant="h2">
				<AnimateInView className="w-full" type="fade">
					{config[currentLanguage as 'en' | 'pt-BR']}
				</AnimateInView>
			</Section>
		</Main>
	);
}
