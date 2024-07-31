import { RefObject } from 'react';
import { textEditorMdUtils } from '..';

type TProps = {
	selectedText: string;
	completeText: string;
	beforeText: string;
	afterText: string;
	selectionStart: number;
	selectionEnd: number;
	ref: RefObject<HTMLTextAreaElement>;
	callback?: (data: string) => void;
};

export function handleList({
	selectedText,
	selectionStart,
	selectionEnd,
	beforeText,
	afterText,
	ref,
	callback,
}: TProps) {
	const listLimiter = '\n* ';
	let text = '';
	let selectionStartAdjusted = 0;
	let selectionEndAdjusted = 0;
	const isList =
		selectedText.substring(0, 2) ===
			listLimiter.substring(1, listLimiter.length) ||
		selectedText.substring(0, listLimiter.length) === listLimiter;

	if (isList) {
		text = beforeText;
		const rows = selectedText.split('\n');
		for (const [index, row] of rows.entries()) {
			if (row.substring(0, 2) === '* ') {
				text = text.concat(row.substring(2));
			} else {
				text = text.concat(row);
			}
			if (index + 1 !== rows.length) {
				text = text.concat('\n');
			}
		}
		text = text.concat(afterText);
		selectionStartAdjusted = selectionStart;
		selectionEndAdjusted = selectionEnd - listLimiter.length - rows.length;
	}

	if (selectedText === '') {
		text = beforeText.concat(listLimiter).concat(afterText);
		selectionStartAdjusted = selectionStart + listLimiter.length;
		selectionEndAdjusted = selectionEnd + listLimiter.length;
	}

	if (selectedText !== '' && !isList) {
		text = beforeText;
		const rows = selectedText.split('\n');
		for (const [index, row] of rows.entries()) {
			console.log({ index, row });

			text = text
				.concat(
					index === 0
						? listLimiter.substring(1, listLimiter.length)
						: listLimiter,
				)
				.concat(row);
		}
		text = text.concat(afterText);
		selectionStartAdjusted = selectionStart;
		selectionEndAdjusted = selectionEnd + listLimiter.length + rows.length;
	}

	if (callback) {
		callback(text);
	}
	textEditorMdUtils.selectInTextAreaByRange({
		ref,
		start: selectionStartAdjusted,
		end: selectionEndAdjusted,
	});
}
