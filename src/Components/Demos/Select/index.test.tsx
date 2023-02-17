/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { SelectDemo } from '.';

describe('Components/Demos/SelectDemo', () => {
	it(`must open Modal`, async () => {
		const { queryByLabelText } = render(
			<InjectorProviders>
				<SelectDemo />
			</InjectorProviders>
		);
		await queryByLabelText('Vehicles');
	});
});
