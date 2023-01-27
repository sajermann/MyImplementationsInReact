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

	function onKeyDownInternal(e: React.KeyboardEvent<HTMLInputElement>) {
		const { value } = e.target as unknown as {
			value: string;
		};

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
				dateFormat={withoutDay ? 'MM/yyyy' : 'dd-yyyy/MM'}
				closeOnScroll
				shouldCloseOnSelect
				showMonthYearPicker={withoutDay}
				onKeyDown={onKeyDownInternal}
			/>
		</div>
		// <ContainerInput
		// 	containerProps={containerProps}
		// 	label={label}
		// 	labelProps={labelProps}
		// >

		// </ContainerInput>
	);
}
