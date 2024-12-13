import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/Components/Button';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type TProps = {
	months: {
		month: string;
	}[];

	currentMonthIndex?: number;
	visibleMonths?: number;
	onMonthChange?: (month: number) => void;
};

export default function SelectorMonthYear({
	currentMonthIndex = 0,
	visibleMonths = 5,
	onMonthChange,
	months,
}: TProps) {
	const [currentMonthIndexInternal, setCurrentMonthIndexInternal] =
		useState(currentMonthIndex);

	const changeMonth = (month: number) => {
		console.log(`Opa`, { month });
		let fixed = month;
		if (month < 0) {
			fixed = months.length - 1;
		}
		if (month > months.length - 1) {
			fixed = 0;
		}
		setCurrentMonthIndexInternal(fixed);
		onMonthChange?.(fixed);
	};

	const getVisibleMonths = () => {
		const visibleMonthsList = [];
		const safeVisibleMonths =
			visibleMonths % 2 === 0 ? visibleMonths + 1 : visibleMonths;
		const middleIndex = Math.floor(safeVisibleMonths / 2);

		for (let i = 0; i < safeVisibleMonths; i += 1) {
			// Calcula o índice do mês considerando a rolagem circular
			const monthIndex =
				(currentMonthIndexInternal + i - middleIndex + months.length) %
				months.length;
			visibleMonthsList.push({
				month: months[monthIndex].month,
				index: months.map(item => item.month).indexOf(months[monthIndex].month),
			});
		}

		return visibleMonthsList;
	};
	// if (!show) return null;

	return (
		<div className="w-1/2 flex flex-col items-center border">
			<button
				type="button"
				className="p-0"
				// iconButton="rounded"
				// variant="option"
				// colorStyle="mono"
				aria-label="previous month"
				onClick={() => changeMonth(currentMonthIndexInternal - 1)}
			>
				<ChevronUpIcon />
			</button>

			<div className="flex flex-col gap-2">
				{getVisibleMonths().map((month, index) => (
					<button
						type="button"
						key={month.month}
						className={managerClassNames(
							'text-xs px-2 hover:opacity-70 transition-opacity duration-500',
							{
								'border rounded': index === 2,
							},
						)}
						onClick={() => changeMonth?.(month.index)}
					>
						{month.month}
					</button>
				))}
			</div>

			<Button
				className="p-0"
				iconButton="rounded"
				variant="option"
				colorStyle="mono"
				onClick={() => changeMonth(currentMonthIndexInternal + 1)}
			>
				<ChevronDownIcon />
			</Button>
		</div>
	);
}
