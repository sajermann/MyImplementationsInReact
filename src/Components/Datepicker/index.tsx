import { enUS, ptBR } from 'date-fns/locale';
import {
	useEffect,
	useState,
	DetailedHTMLProps,
	InputHTMLAttributes,
	ChangeEvent,
	forwardRef,
} from 'react';
import DatePicker from 'react-datepicker';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Input } from '../Input';
import './index.css';

const LANGUAGE_OPTION = {
	'pt-BR': ptBR,
	en: enUS,
};

type TInput = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

type TInputDatepicker = TInput & {
	withoutDay?: boolean;
	dateFormat?: TDateFormat;
	iserror?: boolean;
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
				.substring(0, 8)
				.replace(/(\d{6})(\d)/, '$1-$2')
				.replace(/(\d{4})(\d)/, '$1-$2'),
		'MM/yyyy': (valueTemp: string) =>
			valueTemp
				.replace(/\D/g, '')
				.replace(/(\d{2})(\d)/, '$1/$2')
				.replace(/(\/\d{4})\d+$/, '$1'),
	};

	return ob[dateFormat](value);
}
const CustomInput = forwardRef<HTMLInputElement, TInputDatepicker>(
	(props, ref) => {
		const newProps = { ...props };
		delete newProps.withoutDay;

		const result = formatDataTemp(
			newProps.value as string,
			props.withoutDay,
			props.dateFormat
		);
		delete newProps.dateFormat;
		return (
			<Input
				{...(newProps as TInput)}
				ref={ref as any}
				value={result}
				tabIndex={-1}
				iserror={props.iserror}
			/>
		);
	}
);

interface Props
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	withoutDay?: boolean;
	customDefaultValue?: Date;
	dateFormat?: TDateFormat;
	excludeDateIntervals?: Array<{ start: Date; end: Date }>;
	iserror?: boolean;
}

export const Datepicker = forwardRef<HTMLInputElement, Props>(
	(
		{
			customDefaultValue,
			dateFormat = 'dd/MM/yyyy',
			withoutDay,
			excludeDateIntervals,
			iserror,
			...rest
		},
		ref
	) => {
		const [startDate, setStartDate] = useState<Date | null>(
			customDefaultValue || null
		);
		const { currentLanguage } = useTranslation();

		console.log('datepicker', { ref });

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
			} else {
				setStartDate(new Date(rest.value as string));
			}
		}, [rest.value]);

		useEffect(() => {
			if (customDefaultValue) {
				onChangeInternal(customDefaultValue);
			}
		}, []);

		function formatMonthAndYear(date: Date): string {
			try {
				if (date.toISOString().startsWith('0001-01-01')) {
					return '';
				}
				const result = new Intl.DateTimeFormat(currentLanguage, {
					month: 'long',
					year: 'numeric',
					timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
				}).format(new Date(date));
				return result;
			} catch {
				return '';
			}
		}

		return (
			<div>
				<DatePicker
					autoComplete="off"
					id={rest.id}
					disabled={rest.disabled}
					placeholderText={rest.placeholder}
					fixedHeight
					selected={startDate}
					onChange={onChangeInternal}
					locale={LANGUAGE_OPTION[currentLanguage as 'pt-BR' | 'en']}
					dateFormat={dateFormat}
					closeOnScroll
					shouldCloseOnSelect
					showMonthYearPicker={withoutDay}
					excludeDateIntervals={excludeDateIntervals}
					customInput={
						<CustomInput
							ref={ref}
							withoutDay={withoutDay}
							dateFormat={dateFormat}
							iserror={iserror}
						/>
					}
				/>
			</div>
		);
	}
);
