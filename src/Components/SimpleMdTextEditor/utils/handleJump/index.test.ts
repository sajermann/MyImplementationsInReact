/**
 * @vitest-environment jsdom
 */
import { it, describe, expect, vi } from 'vitest';
import { handleJump } from '.';

describe('SimpleMdTextEditor/Utils/handleJump', () => {
	it(`should apply list - select text empty`, async () => {
		const mockSetStart = vi.fn();
		const mockRemoveAllRanges = vi.fn();
		vi.spyOn(document, 'createRange').mockImplementation(
			() =>
				({
					setStart: mockSetStart,
					collapse: vi.fn(),
				}) as any,
		);
		vi.spyOn(window, 'getSelection').mockImplementation(
			() =>
				({
					removeAllRanges: mockRemoveAllRanges,
					addRange: vi.fn(),
				}) as any,
		);
		const mockRef = {
			current: {
				childNodes: [] as any,
			} as HTMLDivElement,
		};
		handleJump(mockRef);
		expect(mockSetStart).toBeCalled();
		expect(mockRemoveAllRanges).toBeCalled();
	});
});
