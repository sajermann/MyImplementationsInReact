/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { CheckboxDemo } from '.';

describe('Components/Demos/CheckboxDemo', () => {
	it(`must open Modal`, async () => {
		const { getByLabelText } = render(
			<InjectorProviders>
				<CheckboxDemo />
			</InjectorProviders>
		);
		const openButton = await getByLabelText('Checkbox');
		fireEvent.click(openButton);
	});
});
