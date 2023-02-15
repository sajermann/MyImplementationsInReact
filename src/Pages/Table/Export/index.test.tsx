/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { it, describe } from 'vitest';
import { Button } from '~/Components/Button';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { Modal } from '~/Components/Modal';

import { ExportPage } from '.';

describe('Pages/Table/ExportPage', () => {
	it(`must render `, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<ExportPage />
			</InjectorProviders>
		);
	});
});
