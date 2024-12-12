import { ChevronDownIcon, ChevronUp, ChevronUpIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/Components/Button';

const MONTHS = [
	'Jan',
	'Fev',
	'Mar',
	'Abr',
	'Mai',
	'Jun',
	'Jul',
	'Ago',
	'Set',
	'Out',
	'Nov',
	'Dez',
];

type TProps = {
	show?: boolean;
};

export default function SelectorMonthYear({ show }: TProps) {
	const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

	const handleScrollUp = () => {
		setCurrentMonthIndex(prevIndex =>
			prevIndex === 0 ? MONTHS.length - 1 : prevIndex - 1,
		);
	};

	const handleScrollDown = () => {
		setCurrentMonthIndex(prevIndex =>
			prevIndex === MONTHS.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const getVisibleMonths = () => {
		const prevIndex =
			currentMonthIndex === 0 ? MONTHS.length - 1 : currentMonthIndex - 1;

		const nextIndex =
			currentMonthIndex === MONTHS.length - 1 ? 0 : currentMonthIndex + 1;

		return [MONTHS[prevIndex], MONTHS[currentMonthIndex], MONTHS[nextIndex]];
	};

	if (!show) return null;

	return (
		<div className="month-picker">
			<Button
				iconButton="rounded"
				variant="option"
				colorStyle="mono"
				onClick={handleScrollUp}
			>
				<ChevronUpIcon />
			</Button>

			<div className="month-list">
				{getVisibleMonths().map((month, index) => (
					<div
						key={month}
						className={`month ${
							index === 1 ? 'current-month' : 'adjacent-month'
						}`}
					>
						{month}
					</div>
				))}
			</div>

			<Button
				iconButton="rounded"
				variant="option"
				colorStyle="mono"
				onClick={handleScrollDown}
			>
				<ChevronDownIcon />
			</Button>
		</div>
	);
}
