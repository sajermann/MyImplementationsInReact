import { forwardRef, useEffect, useState } from 'react';
import ReactSelect, { OptionsOrGroups } from 'react-select';

import { useTranslation } from '~/Hooks/UseTranslation';
import { format } from './Utils';

type Props = {
	isClearable?: boolean;
	isDisabled?: boolean;
	isLoading?: boolean;
	isSearchable?: boolean;
	id?: string;
	placeholder?: string;
	value?: unknown;
	defaultValue?: string;
	options?: OptionsOrGroups<unknown, any>;
	onChange?: (data: { target: { id?: string; value: string } }) => void;
	isMulti?: {
		onChange: (data: { target: { id?: string; value: string[] } }) => void;
		value?: string[];
	};

	menuPosition?: 'fixed' | 'absolute';
	menuPortalTarget?: HTMLElement | null;
	async?: {
		callback: (newValue: string) => void;
		debounce: number;
		minLength?: number;
	};
	iserror?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
	(
		{
			isClearable,
			isDisabled,
			isLoading,
			isSearchable,
			options,
			id,
			placeholder,
			value,
			defaultValue,
			onChange,
			isMulti,
			menuPosition,
			menuPortalTarget,
			async,
			iserror,
			...rest
		},
		ref
	) => {
		const [inputValue, setInputValue] = useState('');
		const { translate } = useTranslation();

		function handleOnChange(e: unknown) {
			if (!e && onChange) {
				onChange({ target: { value: '', id } });
				return;
			}

			if (isMulti) {
				const dataArray = e as { value: string }[];
				const onlyValue = dataArray.map(item => item.value);
				isMulti.onChange({ target: { value: onlyValue, id } });
				return;
			}

			const { value: valueNow } = e as { value: string };
			if (onChange) {
				onChange({ target: { value: valueNow, id } });
			}
		}

		function getValue() {
			if (!options) {
				return undefined;
			}

			if (isMulti && isMulti.value) {
				const optionsTemp: { value: string; label: string }[] = [];
				for (const valueTemp of isMulti.value) {
					const result = options.find(opt => opt.value === valueTemp);
					if (result) {
						optionsTemp.push(result);
					}
				}

				return optionsTemp;
			}

			return options.find(item => item.value === value);
		}

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
				ref={ref as any}
				onInputChange={preInputChange}
				isMulti={!!isMulti}
				menuPosition={menuPosition}
				menuPortalTarget={menuPortalTarget}
				loadingMessage={() => translate('LOADING...')}
				noOptionsMessage={() => translate('NO_DATA')}
				key={`react-select-${value}`}
				inputId={id}
				defaultValue={options?.find(item => item.value === defaultValue)}
				isDisabled={isDisabled}
				isLoading={isLoading}
				isClearable={isClearable}
				isSearchable={isSearchable}
				options={options}
				placeholder={placeholder}
				onChange={handleOnChange}
				value={getValue()}
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
);
