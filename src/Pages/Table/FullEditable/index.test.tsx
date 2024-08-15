/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { FullEditablePage } from '.';

// TODO: Mudar a lib de Table para por padrao não ter virtualização, pois quebra os testes

describe('Pages/Table/FullEditablePage', () => {
	it(`must update data`, async () => {
		const { getByText, getByTestId } = render(
			<InjectorProviders noLayout>
				<FullEditablePage />
			</InjectorProviders>,
		);
		// screen.logTestingPlaygroundURL();
		const inputName = getByTestId('input-name-0');
		fireEvent.change(inputName, { target: { value: 'Test' } });
		expect(getByText(/"name": "Test",/g)).toBeTruthy();

		const inputLastName = getByTestId('input-lastName-0');
		fireEvent.change(inputLastName, { target: { value: 'Test' } });
		expect(getByText(/"lastName": "Test",/g)).toBeTruthy();

		// TODO: Quando arrumar o test do Select, vir testar a parte desse component que muda o select de Roles

		fireEvent.click(getByTestId('checkbox-isActive-0')); // Line coverage
	});
});
