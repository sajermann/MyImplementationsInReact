import { TReturn } from '../../types/TReturn';

type TProps = {
	text: string;
	startSelected: number;
	endSelected: number;
};

export function toBold({ text, startSelected, endSelected }: TProps): TReturn {
	const bold = '**';
	return {
		text: bold.concat(text).concat(bold),
		startForSelection: startSelected + bold.length,
		endForSelection: endSelected + bold.length,
	};
}
