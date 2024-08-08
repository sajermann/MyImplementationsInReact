/**
 * @vitest-environment jsdom
 */

import { it, describe, expect, vi } from 'vitest';
import { TPerson } from '~/Types/TPerson';
import { onClickRow } from '.';

describe('Utils/Table/OnClickRow', () => {
	it(`should fire toggleSelectedMock`, async () => {
		onClickRow<TPerson>({
			row: undefined,
			selection: undefined,
		}); // Line Coverage
		const toggleSelectedMock = vi.fn();
		onClickRow<TPerson>({
			row: {
				toggleSelected: toggleSelectedMock,
			},
			selection: {
				disableSelectionRow: undefined,
			},
		} as any);

		expect(toggleSelectedMock).toBeCalled();
	});

	it(`should fire disableSelectionRow`, async () => {
		onClickRow<TPerson>({
			row: undefined,
			selection: undefined,
		}); // Line Coverage
		const disableSelectionRowMock = vi.fn();
		onClickRow<TPerson>({
			row: {
				toggleSelected: vi.fn(),
			},
			selection: {
				disableSelectionRow: disableSelectionRowMock,
			},
		} as any);

		expect(disableSelectionRowMock).toBeCalled();
	});
});
