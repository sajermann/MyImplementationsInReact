/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { it, describe } from 'vitest';
import { Button } from '~/Components/Button';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { Modal } from '~/Components/Modal';

import { SortPage } from '.';

describe('Pages/Table/SortPage', () => {
	it(`must render `, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<SortPage />
			</InjectorProviders>
		);
	});
});
