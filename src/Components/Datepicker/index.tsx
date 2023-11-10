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
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Input } from '../Input';
// import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

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

type TLabelProps = DetailedHTMLProps<
	LabelHTMLAttributes<HTMLLabelElement>,
	HTMLLabelElement
>;

type TContainerProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

const CustomInput = forwardRef(
	(
		props: HTMLProps<HTMLInputElement> & {
			withoutDay?: boolean;
			dateFormat?: TDateFormat;
			labelProps?: TLabelProps;
			containerProps?: TContainerProps;
		},
		ref
	) => {
		const newProps = { ...props };
		delete newProps.withoutDay;
		// delete newProps.className;

		const result = formatDataTemp(
			newProps.value as string,
			props.withoutDay,
			props.dateFormat
		);
		delete newProps.dateFormat;
		return <Input {...newProps} value={result} tabIndex={-1} />;
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
	labelProps?: TLabelProps;
	containerProps?: TContainerProps;
	excludeDateIntervals?: Array<{ start: Date; end: Date }>;
}

export function Datepicker({
	label,
	containerProps,
	labelProps,
	customDefaultValue,
	dateFormat = 'dd/MM/yyyy',
	withoutDay,
	excludeDateIntervals,
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
			if (date.toISOString().indexOf('0001-01-01') === 0) {
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
		<div
			{...containerProps}
			className={managerClassNames([
				{ [containerProps?.className as string]: containerProps?.className },
			])}
		>
			{/* // 	{label && (
		// 		<label htmlFor={rest.id} {...labelProps}>
		// 			{label}
		// 		</label>
		// 	)} */}

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
						containerProps={containerProps}
						labelProps={labelProps}
						label={label}
						withoutDay={withoutDay}
						dateFormat={dateFormat}
						ref={ref}
					/>
				}
			/>
		</div>
	);
}
