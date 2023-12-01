import { Dispatch, ForwardedRef, MouseEvent, SetStateAction } from 'react';

type TOnClickInternal = {
	e?: MouseEvent<HTMLButtonElement, Event>;
	ref?: ForwardedRef<HTMLButtonElement>;
	setSituation: Dispatch<SetStateAction<string>>;
	onClick?: (e?: MouseEvent<HTMLButtonElement, Event>) => void;
};

export function onClickInternal({
	e,
	ref,
	setSituation,
	onClick,
}: TOnClickInternal) {
	if (ref) {
		const { attributes } = (ref as any).current;
		if (
			attributes['data-state'].value === 'unchecked' ||
			attributes['data-state'].value === 'indeterminate'
		) {
			setSituation('checked');
		} else {
			setSituation('unchecked');
		}
	}
	if (onClick) onClick(e);
}

type THandleCheckedChange = {
	e: boolean | 'indeterminate';
	onCheckedChange?: (data: {
		target: { value: boolean | 'indeterminate'; id: string | undefined };
	}) => void;
	id?: string;
};
export function handleCheckedChange({
	e,
	onCheckedChange,
	id,
}: THandleCheckedChange) {
	const result = {
		target: {
			value: e,
			id,
		},
	};
	if (onCheckedChange) {
		onCheckedChange(result);
	}
}
