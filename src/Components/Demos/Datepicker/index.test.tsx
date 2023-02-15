/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { DatepickerDemo } from '.';

describe('Components/Demos/DatepickerDemo', () => {
	it(`must open Modal`, async () => {
		const { getByLabelText } = render(
			<InjectorProviders>
				<DatepickerDemo />
			</InjectorProviders>
		);
		await getByLabelText('Date');
	});
});
