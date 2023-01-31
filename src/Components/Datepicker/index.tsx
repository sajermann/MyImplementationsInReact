/* eslint-disable import/no-extraneous-dependencies */
// import ptBr from 'date-fns/locale/pt-BR';
import { enUS, ptBR } from 'date-fns/locale';
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

import { useTranslation } from '~/Hooks/UseTranslation';
import { Input } from '../Input';
import styles from './index.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const LANGUAGE_OPTION = {
	'pt-BR': ptBR,
	en: enUS,
};

type TDateFormat = 'dd/MM/yyyy' | 'yyyy-MM-dd' | 'MM/yyyy';

function formatDataTemp(
	value: string,
	withoutDay?: boolean,
	dateFormat?: TDateFormat
) {
	if (!dateFormat) return value;
	const ob = {
		'dd/MM/yyyy': (valueTemp: string) =>
			valueTemp
				.replace(/\D/g, '')
				.replace(/(\d{2})(\d)/, '$1/$2')
				.replace(/(\d{2})(\d)/, '$1/$2')
				.replace(/(\/\d{4})\d+$/, '$1'),
		'yyyy-MM-dd': (valueTemp: string) =>
			valueTemp
				.replace(/\D/g, '')
				.replace(/(\d{4})(\d)/, '$1-$2')
				.replace(/(\d{2})(\d)/, '$1-$2')
				.replace(/(\/\d{2})\d+$/, '$1'),
		'MM/yyyy': (valueTemp: string) =>
			valueTemp
				.replace(/\D/g, '')
				.replace(/(\d{2})(\d)/, '$1/$2')
				.replace(/(\/\d{4})\d+$/, '$1'),
	};

	return ob[dateFormat](value);
}

const CustomInput = forwardRef(
	(
		props: HTMLProps<HTMLInputElement> & {
			withoutDay?: boolean;
			dateFormat?: TDateFormat;
		},
		ref
	) => {
		const newProps = { ...props };
		delete newProps.withoutDay;

		const result = formatDataTemp(
			newProps.value as string,
			props.withoutDay,
			props.dateFormat
		);
		delete newProps.dateFormat;
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
	dateFormat?: TDateFormat;
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
	dateFormat = 'dd/MM/yyyy',
	withoutDay,
	...rest
}: Props) {
	const [startDate, setStartDate] = useState<Date | null>(
		customDefaultValue || null
	);
	const { currentLanguage } = useTranslation();
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
		console.log(rest.value);
		if (rest.value === '' || rest.value === undefined) {
			setStartDate(null);
		} else {
			setStartDate(new Date(rest.value as string));
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
				calendarClassName="batata"
				className={styles.input}
				popperClassName={styles.popper}
				selected={startDate}
				onChange={onChangeInternal}
				locale={LANGUAGE_OPTION[currentLanguage as 'pt-BR' | 'en']}
				dateFormat={dateFormat}
				closeOnScroll
				shouldCloseOnSelect
				showMonthYearPicker={withoutDay}
				customInput={
					<CustomInput
						withoutDay={withoutDay}
						dateFormat={dateFormat}
						ref={ref}
					/>
				}
			/>
		</div>
	);
}
