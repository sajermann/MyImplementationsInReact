/**
 * @vitest-environment jsdom
 */
import { delay } from '@sajermann/utils/Delay';
import { fireEvent, render } from '@testing-library/react';

import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { SearchBoxPage } from '.';

describe('Pages/SearchBoxPage', () => {
	it(`must show result by onChange`, async () => {
		const { findAllByRole, findAllByText } = render(
			<InjectorProviders noLayout>
				<SearchBoxPage />
			</InjectorProviders>
		);

		const input = (await findAllByRole('searchbox'))[0];
		fireEvent.change(input, { target: { value: 'Braz' } });
		const input1 = (await findAllByRole('searchbox'))[1];
		fireEvent.change(input1, { target: { value: 'Braz' } });
		const input2 = (await findAllByRole('searchbox'))[2];
		fireEvent.change(input2, { target: { value: 'Braz' } });
		const input3 = (await findAllByRole('searchbox'))[3];
		fireEvent.change(input3, { target: { value: 'Braz' } });
		await delay(3000);
		const resultText = await findAllByText('Braz');
		expect(resultText.length).toBe(4);
	});
});
