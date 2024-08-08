/**
 * @vitest-environment jsdom
 */
import { RefObject } from 'react';
import { it, describe, expect } from 'vitest';
import { getInfos } from '.';

describe('Utils/getInfos', () => {
	it(`should return correctly params`, async () => {
		const {
			selectedText,
			completeText,
			beforeText,
			afterText,
			selectionStart,
			selectionEnd,
		} = getInfos({
			current: {
				selectionStart: 6,
				selectionEnd: 8,
				value: `React is Awesome`,
			},
		} as RefObject<HTMLTextAreaElement>);
		expect(selectedText).toEqual(`is`);
		expect(completeText).toEqual(`React is Awesome`);
		expect(beforeText).toEqual(`React `);
		expect(afterText).toEqual(` Awesome`);
		expect(selectionStart).toEqual(6);
		expect(selectionEnd).toEqual(8);
	});
});
