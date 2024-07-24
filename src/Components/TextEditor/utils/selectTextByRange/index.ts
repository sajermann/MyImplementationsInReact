import { RefObject } from 'react';

type TProps = {
	start: number;
	end: number;
	ref: RefObject<HTMLDivElement>;
};

export function selectTextByRange({ ref, start, end }: TProps) {
	const selection = window.getSelection();
	if (!selection || !ref.current) {
		return;
	}

	// Define o range para selecionar
	const range = document.createRange();
	range.setStart(ref.current.childNodes[0], start);
	range.setEnd(ref.current.childNodes[0], end);

	// Adiciona o range à seleção
	selection.removeAllRanges();
	selection.addRange(range);
}
