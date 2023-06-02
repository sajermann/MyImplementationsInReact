/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { SearchBoxDemo } from '.';

describe('Components/Demos/SearchBoxDemo', () => {
	it(`must open Modal`, async () => {
		const { getAllByRole } = render(
			<InjectorProviders>
				<SearchBoxDemo />
			</InjectorProviders>
		);
	});
});
