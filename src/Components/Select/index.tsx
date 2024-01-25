import { ForwardedRef, useEffect, useState } from 'react';
import ReactSelect, { GroupBase, Props } from 'react-select';

import { useTranslation } from '~/Hooks/UseTranslation';
import { format } from './Utils';

type TProps = {
	async?: {
		callback: (newValue: string) => void;
		debounce: number;
		minLength?: number;
	};
	iserror?: boolean;
	id?: string;
	innerRef?: ForwardedRef<HTMLSelectElement>;
};

export function Select<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group> & TProps) {
	const { async, iserror, id, innerRef, ...rest } = props;
	const [inputValue, setInputValue] = useState('');
	const { translate } = useTranslation();

	function preInputChange(e: string) {
		if (async && async.minLength && async.minLength > e.length) {
			return;
		}
		setInputValue(e);
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			if (async) {
				async.callback(inputValue);
			}
		}, async?.debounce);

		return () => clearTimeout(timer);
	}, [inputValue]);

	return (
		<ReactSelect
			{...rest}
			ref={innerRef as any}
			inputId={id}
			onInputChange={preInputChange}
			loadingMessage={() => translate('LOADING...')}
			noOptionsMessage={() => translate('NO_DATA')}
			styles={{
				control: (baseStyles, state) => ({
					...baseStyles,
					boxShadow: format.stylesControl({
						isFocused: state.isFocused,
						iserror,
					}),
				}),
				menu: baseStyles => ({
					...baseStyles,
					width: '100%',
				}),
				option: (baseStyles, state) => ({
					...baseStyles,
					color: state.isSelected ? '#fff' : '#6C757D',
					width: '100%',
				}),
				singleValue: baseStyles => ({
					...baseStyles,
					width: '100%',
				}),
				input: baseStyles => ({
					...baseStyles,
				}),
			}}
			classNames={{
				control: state =>
					format.classNamesControl({ isFocused: state.isFocused, iserror }),
			}}
		/>
	);
}
