import { AnimateInView } from '~/Components/AnimateInView';
import { Icons } from '~/Components/Icons';
import { useTranslation } from '~/Hooks/UseTranslation';

const config = {
	en: <Icons nameIcon="eua" />,
	'pt-BR': <Icons nameIcon="brazil" />,
};

export function AnimateInViewDemo() {
	const { currentLanguage } = useTranslation();
	return (
		<AnimateInView className="w-11/12" type="fromLeft">
			{config[currentLanguage as 'en' | 'pt-BR']}
		</AnimateInView>
	);
}
