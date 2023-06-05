import { AnimateInView } from '~/Components/AnimateInView';
import { Icons } from '~/Components/Icons';
import { useTranslation } from '~/Hooks/UseTranslation';

const config = {
	en: <Icons nameIcon="Eua" />,
	'pt-BR': <Icons nameIcon="Brazil" />,
};

export function AnimateInViewDemo() {
	const { currentLanguage } = useTranslation();
	return (
		<AnimateInView className="w-11/12" type="fromLeft">
			{config[currentLanguage as 'en' | 'pt-BR']}
		</AnimateInView>
	);
}
