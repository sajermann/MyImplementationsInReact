/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { it, describe } from 'vitest';
import { Button } from '~/Components/Button';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { Modal } from '~/Components/Modal';

import { EditablePage } from '.';

describe('Pages/Table/EditablePage', () => {
	it(`must render `, async () => {
		const { getAllByRole } = render(
			<InjectorProviders>
				<EditablePage />
			</InjectorProviders>
		);
		const result = getAllByRole('button');
	});
});
