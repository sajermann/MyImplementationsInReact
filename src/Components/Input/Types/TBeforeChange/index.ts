import { ChangeEvent } from 'react';
import { TCep } from '~/Components/Input/Types/TCep';
import { TCnpj } from '~/Components/Input/Types/TCnpj';
import { TCpf } from '~/Components/Input/Types/TCpf';
import { TCurrency } from '~/Components/Input/Types/TCurrency';

export type TBeforeChange = {
	removeNumber?: boolean;
	removeUpperCase?: boolean;
	removeLowerCase?: boolean;
	removeSpecialCharacter?: boolean;
	regexForReplace?: RegExp;
	fn?: (e: ChangeEvent<HTMLInputElement>) => ChangeEvent<HTMLInputElement>;
	applyMask?: TCurrency | TCnpj | TCpf | TCep;
};
