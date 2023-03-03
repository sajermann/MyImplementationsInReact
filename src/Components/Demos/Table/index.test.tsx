/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { TableDemo } from '.';

describe('Components/Demos/TableDemo', () => {
	it(`must open Modal`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<TableDemo />
			</InjectorProviders>
		);
		const button = await getByText('Success');
		fireEvent.click(button);
	});
});
