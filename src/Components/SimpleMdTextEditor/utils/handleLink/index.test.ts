/**
 * @vitest-environment jsdom
 */
import { RefObject } from 'react';
import { it, describe, expect, vi } from 'vitest';
import { handleLink } from '.';

describe('SimpleMdTextEditor/Utils/handleLink', () => {
	it(`should apply link`, async () => {
		const mock = vi.fn();
		handleLink({
			completeText: `Test`,
			selectedText: `T`,
			selectionStart: 0,
			selectionEnd: 1,
			beforeText: ``,
			afterText: `est`,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: mock,
		});
		expect(mock).toBeCalledWith(`[T](https://google.com.br)est`);
	});

	it(`should unapply italic`, async () => {
		const mock = vi.fn();
		handleLink({
			completeText: `[T](https://google.com.br)est`,
			selectedText: `T`,
			selectionStart: 1,
			selectionEnd: 2,
			beforeText: `[`,
			afterText: `](https://google.com.br)est`,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: mock,
		});
		expect(mock).toBeCalledWith(`Test`);
	});
});
