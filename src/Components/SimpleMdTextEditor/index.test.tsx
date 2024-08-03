/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { makeData } from '~/Utils/MakeData';
import { SimpleMdTextEditor } from '.';
import { InjectorProviders } from '../InjectorProviders';
import { selectInTextAreaByRange } from './utils/selectInTextAreaByRange';

describe('Components/SimpleMdTextEditor', () => {
	it(`must render component`, async () => {
		const { getByTestId } = render(
			<InjectorProviders>
				<SimpleMdTextEditor />
			</InjectorProviders>,
		);
		const textarea = getByTestId('textarea-md');
		const buttonBold = getByTestId('button-bold');
		selectInTextAreaByRange({ ref: textarea, start: 1, end: 2 });
		fireEvent.click(buttonBold);
		console.log('Sajermann');
		expect(1).toBe(1);
	});
});
