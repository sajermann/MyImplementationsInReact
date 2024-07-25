import { TReturn } from '../../types/TReturn';

type TProps = {
	text: string;
	startSelected: number;
	endSelected: number;
};

export function toList({ text, startSelected, endSelected }: TProps): TReturn {
	const italic = '_';
	return {
		text: italic.concat(text).concat(italic),
		startForSelection: startSelected + italic.length,
		endForSelection: endSelected + italic.length,
	};
}
