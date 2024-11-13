import { CalendarIcon } from 'lucide-react';
import {
	DetailedHTMLProps,
	InputHTMLAttributes,
	forwardRef,
	useState,
	useRef,
} from 'react';
import { tv } from 'tailwind-variants';
import { TDate } from './types';
import {
	onChangeDay,
	onBlurDay,
	onChangeMonth,
	onBlurMonth,
	onChangeYear,
	onBlurYear,
} from './utils';

const input = tv({
	slots: {
		inputPropsInternal: [
			'group outline-none focus:ring-1 border h-11 py-1 px-2 rounded w-full bg-transparent',
			'transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-50',
			'flex',
		],
	},
	variants: {
		color: {
			primary: {
				inputPropsInternal:
					'focus:ring-blue-500 group-hover:border-blue-500 focus:border-blue-500 group-focus-within:border-blue-500',
			},
			error: {
				inputPropsInternal:
					'focus:ring-red-500 group-hover:border-red-500 focus:border-red-500 group-focus-within:border-red-500',
			},

			normal: {
				inputPropsInternal: '',
			},
		},
	},

	defaultVariants: {
		color: 'normal',
	},
});

interface Props
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	withoutDay?: boolean;
	customDefaultValue?: Date;
	excludeDateIntervals?: Array<{ start: Date; end: Date }>;
	iserror?: boolean;
}

export const DatepickerMega = forwardRef<HTMLInputElement, Props>(
	({ ...rest }, ref) => {
		const { inputPropsInternal } = input({
			color: 'primary',
		});

		// usar o isValid e colocar a date iso no date

		const [date, setDate] = useState<TDate>({
			day: null,
			month: null,
			year: null,
			iso: null,
		});
		const inputDayRef = useRef<HTMLInputElement>(null);
		const inputMonthRef = useRef<HTMLInputElement>(null);
		const inputYearRef = useRef<HTMLInputElement>(null);

		return (
			<>
				<pre>{JSON.stringify({ date }, null, 2)}</pre>
				<div className={inputPropsInternal()}>
					<input
						ref={inputDayRef}
						placeholder="dd"
						className="group ring-0 outline-none bg-transparent w-8 h-8 p-1 flex  text-center"
						onChange={event => onChangeDay({ event, date, setDate })}
						onBlur={event => onBlurDay({ event, dayRef: inputDayRef })}
					/>
					<div className="w-4 h-8 p-1 flex items-center justify-center ">/</div>
					<input
						ref={inputMonthRef}
						placeholder="mm"
						className="group ring-0 outline-none bg-transparent w-9 h-8 p-1 flex  text-center"
						onChange={event => onChangeMonth({ event, setDate })}
						onBlur={event =>
							onBlurMonth({
								date,
								setDate,
								dayRef: inputDayRef,
								event,
								monthRef: inputMonthRef,
							})
						}
					/>
					<div className="w-4 h-8 p-1 flex items-center justify-center ">/</div>
					<input
						ref={inputYearRef}
						placeholder="yyyy"
						className="group ring-0 outline-none bg-transparent w-12 h-8 p-1 flex  text-center"
						onChange={event => onChangeYear({ event, setDate })}
						onBlur={event =>
							onBlurYear({
								date,
								setDate,
								dayRef: inputDayRef,
								yearRef: inputYearRef,
								event,
							})
						}
					/>
					<button
						type="button"
						aria-label="icon:calendar"
						className="ring-0 outline-none flex items-center justify-center h-8 p-1 "
					>
						<CalendarIcon />
					</button>
				</div>
			</>
		);
	},
);
