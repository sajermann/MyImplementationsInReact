import { useState } from 'react';
import { Column } from '@tanstack/react-table';

import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';
import { Popover } from '~/Components/Popover';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { Datepicker } from '~/Components/Datepicker';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';

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
					<Icons nameIcon="funnel" fullFill={verifyFillFilter()} />
				</button>
			}
		>
			<>
				<div className="flex flex-col gap-4">
					<div className="w-48">
						<ContainerInput>
							<Label htmlFor="from">{translate('FROM')}</Label>
							<Datepicker
								placeholder={translate('DD/MM/YYYY')}
								id="from"
								value={dates.from}
								onChange={e =>
									setDates(prev => ({ ...prev, from: e.target.value }))
								}
							/>
						</ContainerInput>
					</div>
					<div className="w-48">
						<ContainerInput>
							<Label htmlFor="to">{translate('TO')}</Label>
							<Datepicker
								placeholder={translate('DD/MM/YYYY')}
								id="to"
								value={dates.to}
								onChange={e =>
									setDates(prev => ({ ...prev, to: e.target.value }))
								}
							/>
						</ContainerInput>
					</div>
				</div>

				<div className="w-full flex justify-center gap-4 mt-4">
					<Button
						iconButton="rounded"
						colorStyle="secondary"
						variant="outlined"
						onClick={() => setDates({ from: '', to: '' })}
						endIcon={<Icons nameIcon="trash" />}
					/>

					<Button
						iconButton="rounded"
						variant="outlined"
						onClick={() => {
							column.setFilterValue(dates);
							setIsOpen(false);
						}}
						endIcon={<Icons nameIcon="save" />}
					/>
				</div>
			</>
		</Popover>
	);
}
