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

export function handleBold({
	selectedText,
	selectionStart,
	selectionEnd,
	beforeText,
	afterText,
	ref,
	callback,
}: TProps) {
	const IDENTIFIER = '**';
	let text = '';
	let selectionStartAdjusted = 0;
	let selectionEndAdjusted = 0;

	// Verify if selected text has bold applied
	if (
		beforeText.substring(beforeText.length - IDENTIFIER.length) ===
			IDENTIFIER &&
		afterText.substring(0, IDENTIFIER.length) === IDENTIFIER
	) {
		text = beforeText
			.substring(0, beforeText.length - IDENTIFIER.length) // Remove Bold from Before Text
			.concat(selectedText)
			.concat(afterText.substring(IDENTIFIER.length));
		selectionStartAdjusted = selectionStart - IDENTIFIER.length;
		selectionEndAdjusted = selectionEnd - IDENTIFIER.length;
	} else {
		text = beforeText
			.concat(IDENTIFIER)
			.concat(selectedText)
			.concat(IDENTIFIER)
			.concat(afterText);
		selectionStartAdjusted = selectionStart + IDENTIFIER.length;
		selectionEndAdjusted = selectionEnd + IDENTIFIER.length;
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
