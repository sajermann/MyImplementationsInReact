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
	HTMLProps,
	useRef,
	forwardRef,
} from 'react';
import DatePicker from 'react-datepicker';
import { Input } from '../Input';
import styles from './index.module.css';
import 'react-datepicker/dist/react-datepicker.css';

function formatDataTemp(value: string, withoutDay?: boolean) {
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

const CustomInput = forwardRef(
	(props: HTMLProps<HTMLInputElement> & { withoutDay?: boolean }, ref) => {
		const newProps = { ...props };
		delete newProps.withoutDay;
		const result = formatDataTemp(newProps.value as string, props.withoutDay);

		return <Input {...newProps} value={result} />;
	}
);

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
	const ref = useRef(null);

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
				dateFormat={withoutDay ? 'MM/yyyy' : 'dd/MM/yyyy'}
				closeOnScroll
				shouldCloseOnSelect
				showMonthYearPicker={withoutDay}
				customInput={<CustomInput withoutDay={withoutDay} ref={ref} />}
			/>
		</div>
	);
}
