/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { it, describe } from 'vitest';
import { Button } from '~/Components/Button';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { Modal } from '~/Components/Modal';

import { FavoritesPage } from '.';

describe('Pages/Table/FavoritesPage', () => {
	it(`must render `, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<FavoritesPage />
			</InjectorProviders>
		);
	});
});
