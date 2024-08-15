/**
 * @vitest-environment jsdom
 */
import { RefObject } from 'react';
import { it, describe, expect, vi } from 'vitest';
import { handleItalic } from '.';

describe('SimpleMdTextEditor/Utils/handleItalic', () => {
	it(`should apply italic`, async () => {
		const mock = vi.fn();
		handleItalic({
			completeText: `Test`,
			selectedText: `T`,
			selectionStart: 0,
			selectionEnd: 1,
			beforeText: ``,
			afterText: `est`,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: mock,
		});
		expect(mock).toBeCalledWith(`_T_est`);
	});

	it(`should unapply italic`, async () => {
		const mock = vi.fn();
		handleItalic({
			completeText: `_T_est`,
			selectedText: `T`,
			selectionStart: 1,
			selectionEnd: 2,
			beforeText: `_`,
			afterText: `_est`,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: mock,
		});
		expect(mock).toBeCalledWith(`Test`);
	});
});
