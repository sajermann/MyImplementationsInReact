/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { DragAndDropPage } from '.';

describe('Pages/DragAndDropPage', () => {
	it(`should render component`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<DragAndDropPage />
			</InjectorProviders>,
		);

		expect(getByText('Brawl Stars')).toBeTruthy();
	});
});
