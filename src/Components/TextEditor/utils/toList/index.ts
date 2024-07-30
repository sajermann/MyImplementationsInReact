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

export function toList({
	selectedText,
	selectionStart,
	selectionEnd,
	beforeText,
	afterText,
	ref,
	callback,
}: TProps) {
	// TODO: Essa função apenas adiciona a lista se a seleção for vazia, entao tem que por outras verificações pra adicionar lista no texto selecionado, remover lista e etc
	if (!ref.current) return;
	const listLimiter = '\n* ';
	let text = '';

	if (selectedText === '') {
		text = beforeText.concat(listLimiter).concat(afterText);
	} else {
		text = beforeText.concat(afterText);
	}

	ref.current.value = text;
	if (callback) {
		callback(text);
	}
	textEditorMdUtils.selectInTextAreaByRange({
		ref,
		start: selectionStart + listLimiter.length,
		end: selectionEnd + listLimiter.length,
	});
}
