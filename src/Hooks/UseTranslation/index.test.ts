import { renderHook } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import '~/Config/i18n';

import { useTranslation } from '.';

describe('Hooks/UseTranslation', () => {
	it(`must change language and translate`, async () => {
		const { result } = renderHook(() => useTranslation());
		expect(result.current.translate('USING_THE_MY_SELF_LIB')).toBe(
			'using the my self lib'
		);
		result.current.changeLanguage('pt-BR');
		expect(result.current.translate('USING_THE_MY_SELF_LIB')).toBe(
			'usando minha própria biblioteca'
		);
	});
});
