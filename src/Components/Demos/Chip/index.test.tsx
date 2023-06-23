/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { ChipDemo } from '.';

describe('Components/Demos/ChipDemo', () => {
	it(`must open Modal`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<ChipDemo />
			</InjectorProviders>
		);
	});
});
