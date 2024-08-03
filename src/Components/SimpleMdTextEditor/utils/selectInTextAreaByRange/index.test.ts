/**
 * @vitest-environment jsdom
 */
import { it, describe, expect, vi } from 'vitest';
import { selectInTextAreaByRange } from '.';

describe('SimpleMdTextEditor/Utils/selectInTextAreaByRange', () => {
	it(`should test selectInTextAreaByRange`, async () => {
		const mockSetSelection = vi.fn();
		const mockRemoveAllRanges = vi.fn();

		vi.spyOn(window, 'getSelection').mockImplementation(
			() =>
				({
					removeAllRanges: mockRemoveAllRanges,
					addRange: vi.fn(),
				}) as any,
		);
		const mockRef = {
			current: {
				value: `Test`,
				setSelectionRange: mockSetSelection,
			},
		} as any;
		selectInTextAreaByRange({ ref: mockRef, start: 0, end: 2 });

		expect(mockSetSelection).toBeCalledWith(0, 2, 'forward');
	});

	it(`should test selectInTextAreaByRange - textarea empty`, async () => {
		const mockSetSelection = vi.fn();
		const mockRemoveAllRanges = vi.fn();

		vi.spyOn(window, 'getSelection').mockImplementation(
			() =>
				({
					removeAllRanges: mockRemoveAllRanges,
					addRange: vi.fn(),
				}) as any,
		);
		const mockRef = {
			current: {
				value: ``,
				setSelectionRange: mockSetSelection,
			},
		} as any;
		selectInTextAreaByRange({ ref: mockRef, start: 0, end: 2 });

		expect(mockSetSelection).not.toBeCalled();
	});

	it(`should test selectInTextAreaByRange - index invalid`, async () => {
		const mockSetSelection = vi.fn();
		const mockRemoveAllRanges = vi.fn();

		vi.spyOn(window, 'getSelection').mockImplementation(
			() =>
				({
					removeAllRanges: mockRemoveAllRanges,
					addRange: vi.fn(),
				}) as any,
		);
		const mockRef = {
			current: {
				value: `Test`,
				setSelectionRange: mockSetSelection,
			},
		} as any;
		selectInTextAreaByRange({ ref: mockRef, start: 5, end: 2 });

		expect(mockSetSelection).not.toBeCalled();
	});
});
