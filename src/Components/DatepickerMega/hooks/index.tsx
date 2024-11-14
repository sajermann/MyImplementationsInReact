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
	onChange?: (data: TDate) => void;
	defaultDate?: Date;
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
	onChange?: (data: TDate) => void;
};

export function DatepickerMegaProvider({
	children,
	defaultDate,
	onChange,
}: Props) {
	const [date, setDate] = useState<TDate>(() => {
		if (defaultDate) {
			const temp = new Date(defaultDate);
			return {
				date: temp,
				day: temp.getDate(),
				month: temp.getMonth(),
				year: temp.getFullYear(),
				iso: temp.toISOString(),
			};
		}
		return {
			date: null,
			day: null,
			month: null,
			year: null,
			iso: null,
		};
	});

	const inputDayRef = useRef<HTMLInputElement>(null);
	const inputMonthRef = useRef<HTMLInputElement>(null);
	const inputYearRef = useRef<HTMLInputElement>(null);

	const memoizedValue = useMemo(
		() => ({
			date,
			setDate,
			inputDayRef,
			inputMonthRef,
			inputYearRef,
			onChange,
			defaultDate,
		}),
		[date],
	);

	return (
		<DatepickerMegaContext.Provider value={memoizedValue}>
			{children}
		</DatepickerMegaContext.Provider>
	);
}
