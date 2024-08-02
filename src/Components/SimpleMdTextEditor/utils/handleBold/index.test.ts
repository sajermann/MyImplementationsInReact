/**
 * @vitest-environment jsdom
 */
import { RefObject } from 'react';
import { it, describe, expect, vi } from 'vitest';
import { handleBold } from '.';

describe('SimpleMdTextEditor/Utils/handleBold', () => {
	it(`should apply bold`, async () => {
		const mock = vi.fn();
		handleBold({
			completeText: `Test`,
			selectedText: `T`,
			selectionStart: 0,
			selectionEnd: 1,
			beforeText: ``,
			afterText: `est`,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: mock,
		});
		expect(mock).toBeCalledWith(`**T**est`);
	});

	it(`should unapply bold`, async () => {
		const mock = vi.fn();
		handleBold({
			completeText: `**T**est`,
			selectedText: `T`,
			selectionStart: 3,
			selectionEnd: 4,
			beforeText: `**`,
			afterText: `**est`,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: mock,
		});
		expect(mock).toBeCalledWith(`Test`);
	});
});
