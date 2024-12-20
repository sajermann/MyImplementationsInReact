import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useMemo,
	useRef,
	useEffect,
} from 'react';
import { TDate } from '../types';

type DatepickerMegaContextType = {
	date: TDate;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	inputDayRef: React.RefObject<HTMLInputElement>;
	inputMonthRef: React.RefObject<HTMLInputElement>;
	inputYearRef: React.RefObject<HTMLInputElement>;
	inputHourRef: React.RefObject<HTMLInputElement>;
	inputMinuteRef: React.RefObject<HTMLInputElement>;
	rootRef: React.RefObject<HTMLDivElement>;
	onChange?: (data: TDate) => void;
	defaultDate?: Date;
	isOpenCalendar: boolean;
	setIsOpenCalendar: (
		value: boolean | ((prevState: boolean) => boolean),
	) => void;
	isAmPmMode?: boolean;
	setIsAmPmMode: (value: boolean | ((prevState: boolean) => boolean)) => void;
	disabledDates?: Date[];
	disabledWeeks?: (0 | 1 | 2 | 3 | 4 | 5 | 6)[];
	minDate?: Date;
	maxDate?: Date;
	hasTrigger?: boolean;
	setHasTrigger: (value: boolean | ((prevState: boolean) => boolean)) => void;
};

const datepickerMegaContextDefaultValues: DatepickerMegaContextType =
	{} as DatepickerMegaContextType;

const DatepickerMegaContext = createContext<DatepickerMegaContextType>(
	datepickerMegaContextDefaultValues,
);

export function useDatepickerMega(props?: { hasTrigger?: boolean }) {
	const { setHasTrigger, ...rest } = useContext(DatepickerMegaContext);

	useEffect(() => {
		if (props?.hasTrigger) {
			setHasTrigger(props.hasTrigger);
		}
	}, [props]);

	return {
		...rest,
	};
}

type Props = {
	children: ReactNode;
	defaultDate?: Date;
	onChange?: (data: TDate) => void;
	disabledDates?: Date[];
	disabledWeeks?: (0 | 1 | 2 | 3 | 4 | 5 | 6)[];
	minDate?: Date;
	maxDate?: Date;
};

export function DatepickerMegaProvider({
	children,
	defaultDate,
	onChange,
	disabledDates,
	disabledWeeks,
	minDate,
	maxDate,
}: Props) {
	const [isAmPmMode, setIsAmPmMode] = useState(false);
	const [isOpenCalendar, setIsOpenCalendar] = useState(false);
	const [hasTrigger, setHasTrigger] = useState(false);
	const [date, setDate] = useState<TDate>(() => {
		if (defaultDate) {
			console.log({ defaultDate });
			const values: TDate = {
				date: defaultDate,
				day: defaultDate.getDate(),
				month: defaultDate.getMonth(),
				hour: defaultDate.getHours(),
				// hour:
				// 	isAmPm && defaultDate.getHours() > 12
				// 		? defaultDate.getHours() - 12
				// 		: defaultDate.getHours(),
				minute: defaultDate.getMinutes(),
				year: defaultDate.getFullYear(),
				iso: defaultDate.toISOString(),
				clockType: defaultDate.getHours() > 12 ? 'pm' : 'am',
			};
			onChange?.(values);
			return values;
		}
		return {
			date: null,
			day: null,
			month: null,
			hour: null,
			minute: null,
			year: null,
			iso: null,
			// clockType: isAmPm ? 'pm' : 'am',
			clockType: 'am',
		};
	});

	const inputDayRef = useRef<HTMLInputElement>(null);
	const inputMonthRef = useRef<HTMLInputElement>(null);
	const inputYearRef = useRef<HTMLInputElement>(null);
	const inputHourRef = useRef<HTMLInputElement>(null);
	const inputMinuteRef = useRef<HTMLInputElement>(null);
	const rootRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		setDate(prev => {
			const hourNew =
				isAmPmMode && prev.hour && prev.hour > 12 ? prev.hour - 12 : prev.hour;
			const values: TDate = {
				...prev,
				hour: hourNew,
				clockType: prev.hour && prev.hour > 12 ? 'pm' : 'am',
			};
			if (inputHourRef.current && hourNew && hourNew > -1) {
				inputHourRef.current.value = hourNew.toString();
			}
			return values;
		});
	}, [isAmPmMode]);

	const memoizedValue = useMemo(
		() => ({
			date,
			setDate,
			inputDayRef,
			inputMonthRef,
			inputYearRef,
			inputHourRef,
			inputMinuteRef,
			rootRef,
			onChange,
			defaultDate,
			isOpenCalendar,
			setIsOpenCalendar,
			isAmPmMode,
			setIsAmPmMode,
			disabledDates,
			disabledWeeks,
			minDate,
			maxDate,
			hasTrigger,
			setHasTrigger,
		}),
		[
			date,
			isOpenCalendar,
			isAmPmMode,
			disabledDates,
			disabledWeeks,
			minDate,
			maxDate,
			hasTrigger,
		],
	);

	return (
		<DatepickerMegaContext.Provider value={memoizedValue}>
			{children}
		</DatepickerMegaContext.Provider>
	);
}
