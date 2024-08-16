import { RefObject } from 'react';
import { TReturnInfos } from '../../types/TReturn';

export function getInfos(
	refTextArea: RefObject<HTMLTextAreaElement>,
): TReturnInfos {
	const { selectionStart, selectionEnd } = refTextArea.current!;
	const completeText = refTextArea.current!.value;
	const selectedText = completeText.substring(selectionStart, selectionEnd);

	const beforeText = completeText.substring(0, selectionStart);
	const afterText = completeText.substring(selectionEnd, completeText.length);

	return {
		selectedText,
		completeText,
		beforeText,
		afterText,
		selectionStart,
		selectionEnd,
	};
}
