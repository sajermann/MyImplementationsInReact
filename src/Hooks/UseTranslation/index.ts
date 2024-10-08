import { useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation as useTranslationOficial } from 'react-i18next';

export function useTranslation() {
	const { t, i18n } = useTranslationOficial();
	const { language: currentLanguage } = i18next;

	function translate(text: string) {
		return t(text);
	}

	function changeLanguage(language: string) {
		i18n.changeLanguage(language);
	}

	useEffect(() => {
		if (currentLanguage === 'en') {
			changeLanguage('en-US');
		}
	}, []);

	return {
		translate,
		changeLanguage,
		currentLanguage: currentLanguage as 'pt-BR' | 'en-US',
	};
}
