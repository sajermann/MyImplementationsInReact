import { TReturn } from '../../types/TReturn';

type TProps = {
	text: string;
	startSelected: number;
	endSelected: number;
};

export function toLink({ text, startSelected }: TProps): TReturn {
	const demoLink = 'http://google.com.br';
	const startLabel = '[';
	const endLabel = ']';
	const startLink = '(';
	const endLink = ')';
	const startForSelection =
		startSelected +
		startLabel.length +
		text.length +
		endLabel.length +
		startLink.length;
	return {
		text: startLabel
			.concat(text)
			.concat(endLabel)
			.concat(startLink)
			.concat(demoLink)
			.concat(endLink),
		startForSelection,
		endForSelection: startForSelection + demoLink.length,
	};
}
