/* eslint-disable import/no-extraneous-dependencies */
import ptBr from 'date-fns/locale/pt-BR';
import {
	useEffect,
	useState,
	DetailedHTMLProps,
	HTMLAttributes,
	InputHTMLAttributes,
	LabelHTMLAttributes,
	ChangeEvent,
} from 'react';
import DatePicker from 'react-datepicker';
// import { ContainerInput } from '../ContainerInput';
import styles from './index.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '../Input';

type TEvent = {
	value: string;
};

interface Props
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	withoutDay?: boolean;
	label?: string;
	customDefaultValue?: Date;
	labelProps?: DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	>;
	containerProps?: DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
}

export function Datepicker({
	label,
	containerProps,
	labelProps,
	customDefaultValue,
	withoutDay,
	...rest
}: Props) {
	const [valueInput, setValueInput] = useState('');
	const [startDate, setStartDate] = useState<Date | null>(
		customDefaultValue || null
	);

	function onChangeInternal(date: Date | null) {
		setStartDate(date);

		const dataVerify = date ? date.toISOString() : '';

		if (rest.onChange) {
			const t = {
				target: {
					value: dataVerify,
					id: rest.id,
				},
			} as ChangeEvent<HTMLInputElement>;
			rest.onChange(t);
		}
	}

	useEffect(() => {
		if (rest.value === '' || rest.value === undefined) {
			setStartDate(null);
		}
	}, [rest.value]);

	useEffect(() => {
		if (customDefaultValue) {
			onChangeInternal(customDefaultValue);
		}
	}, []);

	function formatDataTemp(value: string) {
		if (withoutDay) {
			return value
				.replace(/\D/g, '')
				.replace(/(\d{2})(\d)/, '$1/$2')
				.replace(/(\/\d{4})\d+$/, '$1');
		}

		return value
			.replace(/\D/g, '')
			.replace(/(\d{2})(\d)/, '$1/$2')
			.replace(/(\d{2})(\d)/, '$1/$2')
			.replace(/(\/\d{4})\d+$/, '$1');
	}

	function onKeyDownInternal(e: React.KeyboardEvent<HTMLInputElement>) {
		const { value } = e.target as unknown as TEvent;

		const limit = withoutDay ? 6 : 9;
		const allowsNormal = [
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'/',
		];
		const allowsTools = [
			'backspace',
			'delete',
			'arrowright',
			'arrowleft',
			'arrowup',
			'arrowdown',
			'tab',
		];
		const controlKeyAllow = ['c', 'v'];

		console.log((e.target as unknown as TEvent).value);

		(e.target as unknown as TEvent).value = formatDataTemp(value);

		if (allowsTools.includes(e.key.toLowerCase())) {
			return; // Pass
		}

		if (value.length > limit) {
			e.preventDefault();
			return;
		}
		if (controlKeyAllow.includes(e.key.toLowerCase()) && e.ctrlKey) {
			return; // Pass
		}

		if (allowsNormal.includes(e.key.toLowerCase())) {
			return; // Pass
		}

		e.preventDefault();
	}
	function classContainer() {
		if (containerProps?.className) {
			return `${styles.customContainer} ${containerProps?.className}`;
		}
		return styles.customContainer;
	}

	return (
		<div {...containerProps} className={classContainer()}>
			{label && (
				<label htmlFor={rest.id} {...labelProps} className={styles.label}>
					{label}
				</label>
			)}
			<Input
				value={valueInput}
				onChange={e =>
					setValueInput(
						e.target.value
							.replace(/\D/g, '')
							.replace(/(\d{2})(\d)/, '$1/$2')
							.replace(/(\d{2})(\d)/, '$1/$2')
							.replace(/(\/\d{4})\d+$/, '$1')
					)
				}
			/>
			<DatePicker
				autoComplete="off"
				id={rest.id}
				disabled={rest.disabled}
				placeholderText={rest.placeholder}
				className={styles.input}
				popperClassName={styles.popper}
				selected={startDate}
				onChange={onChangeInternal}
				locale={ptBr}
				dateFormat={withoutDay ? 'MM/yyyy' : 'dd/MM/yyyy'}
				closeOnScroll
				shouldCloseOnSelect
				showMonthYearPicker={withoutDay}
				onKeyDown={onKeyDownInternal}
			/>
		</div>
	);
}
