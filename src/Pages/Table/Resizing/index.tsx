import { useEffect, useState } from 'react';

import { Button } from '~/Components/Button';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';

const DEFAULT = {
	id: 100,
	avatar: 60,
	name: 100,
	lastName: 100,
	birthday: 100,
	email: 100,
	role: 100,
	isActive: 100,
	friends: 100,
};

export default function Resizing() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [columnSize, setColumnSize] = useState<Record<string, number>>(() => {
		const saveds = localStorage.getItem('@CustomTable:Resizing');

		if (!saveds) {
			return DEFAULT;
		}

		return JSON.parse(saveds);
	});

	const { columns } = useColumns(columnSize);

	type PropsResizing = {
		columnSizing: {
			[index: string]: number;
		};
	};

	function onResizing(dataSizing: PropsResizing) {
		const keys = Object.keys(dataSizing.columnSizing);
		if (keys.length === 0) return;

		const saveds = localStorage.getItem('@CustomTable:Resizing');

		const newDefault = saveds ? JSON.parse(saveds) : { ...DEFAULT };

		for (const item of keys) {
			newDefault[item] = dataSizing.columnSizing[item];
		}
		localStorage.setItem('@CustomTable:Resizing', JSON.stringify(newDefault));
	}

	function handleReset() {
		localStorage.removeItem('@CustomTable:Resizing');
		setColumnSize({ ...DEFAULT });
	}

	useEffect(() => {
		setData(makeData.person(5));
	}, []);

	return (
		<div className="p-4 flex flex-col gap-2">
			{translate('SAVE_COLUMN_SIZE_STATE_AFTER_ONE_SECOND_IN_LOCAL_STORAGE')}
			<div>
				<Button onClick={handleReset}>{translate('RESET')}</Button>
			</div>
			<Table columns={columns} data={data} onResizing={onResizing} />
		</div>
	);
}
