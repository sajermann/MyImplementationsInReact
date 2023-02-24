import { useState } from 'react';
import { Column } from '@tanstack/react-table';

import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';
import { Popover } from '~/Components/Popover';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { Datepicker } from '~/Components/Datepicker';

export function FilterBirthday({
	column,
}: {
	column: Column<TPerson, string>;
}) {
	const { translate } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [dates, setDates] = useState({
		from: '',
		to: '',
	});

	function verifyFillFilter() {
		if (dates.from === '' && dates.to === '') return false;
		return true;
	}

	return (
		<Popover
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
			trigger={
				<button
					className="w-5 h-4 flex items-center justify-center"
					type="button"
					onClick={() => setIsOpen(true)}
				>
					<Icons.Funnel fullFill={verifyFillFilter()} />
				</button>
			}
		>
			<>
				<div className="flex flex-col gap-4">
					<div className="w-48">
						<Datepicker
							label={translate('FROM')}
							placeholder={translate('DD/MM/YYYY')}
							id="from"
							value={dates.from}
							onChange={e =>
								setDates(prev => ({ ...prev, from: e.target.value }))
							}
						/>
					</div>
					<div className="w-48">
						<Datepicker
							label={translate('TO')}
							placeholder={translate('DD/MM/YYYY')}
							id="to"
							value={dates.to}
							onChange={e =>
								setDates(prev => ({ ...prev, to: e.target.value }))
							}
						/>
					</div>
				</div>

				<div className="w-full flex justify-center gap-4 mt-4">
					<Button
						style={{ width: '50px', height: '50px', borderRadius: '50%' }}
						colorStyle="Secondary"
						variant="Outlined"
						type="button"
						onClick={() => setDates({ from: '', to: '' })}
						endIcon={<Icons.Trash />}
					/>

					<Button
						style={{ width: '50px', height: '50px', borderRadius: '50%' }}
						colorStyle="Primary"
						variant="Outlined"
						type="button"
						onClick={() => {
							column.setFilterValue(dates);
							setIsOpen(false);
						}}
						endIcon={<Icons.Save />}
					/>
				</div>
			</>
		</Popover>
	);
}
