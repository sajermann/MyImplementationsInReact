/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { DrawerDemo } from '.';

describe('Components/Demos/DrawerDemo', () => {
	it(`must open Modal`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<DrawerDemo />
			</InjectorProviders>
		);
		const openButton = await getByText('Open');
		fireEvent.click(openButton);
		await getByText(/Lorem ipsum dolor/i);
	});
});
