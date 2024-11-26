import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useMemo,
	useRef,
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
	rootRef: React.RefObject<HTMLInputElement>;
	onChange?: (data: TDate) => void;
	defaultDate?: Date;
	isOpenCalendar: boolean;
	setIsOpenCalendar: (
		value: boolean | ((prevState: boolean) => boolean),
	) => void;
	isAmPmMode?: boolean;
};

const datepickerMegaContextDefaultValues: DatepickerMegaContextType =
	{} as DatepickerMegaContextType;

const DatepickerMegaContext = createContext<DatepickerMegaContextType>(
	datepickerMegaContextDefaultValues,
);

export function useDatepickerMega() {
	return useContext(DatepickerMegaContext);
}

type Props = {
	children: ReactNode;
	defaultDate?: Date;
	isAmPm?: boolean;
	onChange?: (data: TDate) => void;
};

export function DatepickerMegaProvider({
	children,
	defaultDate,
	onChange,
	isAmPm,
}: Props) {
	const [date, setDate] = useState<TDate>(() => {
		if (defaultDate) {
			console.log({ defaultDate });
			const values: TDate = {
				date: defaultDate,
				day: defaultDate.getDate(),
				month: defaultDate.getMonth(),
				hour:
					isAmPm && defaultDate.getHours() > 12
						? defaultDate.getHours() - 12
						: defaultDate.getHours(),
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
			clockType: isAmPm ? 'pm' : 'am',
		};
	});
	const [isAmPmMode] = useState(!!isAmPm);
	const [isOpenCalendar, setIsOpenCalendar] = useState(false);

	const inputDayRef = useRef<HTMLInputElement>(null);
	const inputMonthRef = useRef<HTMLInputElement>(null);
	const inputYearRef = useRef<HTMLInputElement>(null);
	const inputHourRef = useRef<HTMLInputElement>(null);
	const inputMinuteRef = useRef<HTMLInputElement>(null);
	const rootRef = useRef<HTMLInputElement>(null);

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
		}),
		[date, isOpenCalendar, isAmPmMode],
	);

	return (
		<DatepickerMegaContext.Provider value={memoizedValue}>
			{children}
		</DatepickerMegaContext.Provider>
	);
}
