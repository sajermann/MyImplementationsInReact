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

export function handleLink({
	selectedText,
	selectionStart,
	beforeText,
	afterText,
	ref,
	callback,
}: TProps) {
	const DEMO_LINK = 'https://google.com.br';
	const START_LABEL = '[';
	const END_LABEL = ']';
	const START_LINK = '(';
	const END_LINK = ')';

	let text = '';
	let selectionStartAdjusted = 0;
	let selectionEndAdjusted = 0;
	const regexLink = /]\(.*?\)/;

	// Verify is text has link applied
	if (beforeText.at(-1) === START_LABEL && regexLink.test(afterText)) {
		const textWithoutLink = afterText.replace(regexLink, '');
		text = beforeText
			.substring(0, beforeText.length - 1)
			.concat(selectedText)
			.concat(textWithoutLink);

		selectionStartAdjusted = selectionStart - 1;
		selectionEndAdjusted = selectionStart + selectedText.length - 1;
	} else {
		text = beforeText
			.concat(START_LABEL)
			.concat(selectedText)
			.concat(END_LABEL)
			.concat(START_LINK)
			.concat(DEMO_LINK)
			.concat(END_LINK)
			.concat(afterText);

		const result =
			selectionStart +
			START_LABEL.length +
			selectedText.length +
			END_LABEL.length +
			START_LINK.length;

		selectionStartAdjusted = result;
		selectionEndAdjusted = result + DEMO_LINK.length;
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
