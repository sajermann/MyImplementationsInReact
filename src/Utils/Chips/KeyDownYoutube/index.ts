import { Dispatch, SetStateAction, KeyboardEvent } from 'react';

type TKeyDownYoutubeProps = {
	event: KeyboardEvent<HTMLInputElement>;
	valueYoutube: string;
	setChipsYoutube: Dispatch<SetStateAction<string[]>>;
	setValueYoutube: Dispatch<SetStateAction<string>>;
};
export function keyDownYoutube({
	event,
	valueYoutube,
	setChipsYoutube,
	setValueYoutube,
}: TKeyDownYoutubeProps) {
	if (event.key === 'Backspace' && valueYoutube.trim() === '') {
		console.log('TODO: Ativar Edição Por Backspace');
	}
	if (
		(event.key === ',' || event.key === 'Enter') &&
		valueYoutube.trim() !== ''
	) {
		event.preventDefault();
		setChipsYoutube(prev => [...prev, valueYoutube.trim()]);
		setValueYoutube('');
	}
}
