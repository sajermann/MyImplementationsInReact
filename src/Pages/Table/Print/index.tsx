import { ReactInstance, useEffect, useRef, useState } from 'react';

import { ToPrint } from '~/Components/ToPrint';
import { useReactToPrint } from 'react-to-print';
import { delay } from '~/Utils/Delay';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';

export default function Print() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isPrinting, setIsPrinting] = useState(false);
	const componentRef = useRef<HTMLDivElement>();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current as ReactInstance,
		onAfterPrint: () => setIsPrinting(false),
	});
	const { columns } = useColumns();

	async function handlePreparePrint() {
		setIsPrinting(true);
		await delay(1);
		handlePrint();
	}

	async function load() {
		setIsLoading(true);
		setData(makeData.person(100));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	return (
		<div className="p-4 flex flex-col gap-2">
			<div className="flex flex-col w-48 gap-2">
				{translate('PRINT_ONLY_TABLE')}
				<Button disabled={isPrinting} onClick={handlePreparePrint}>
					{translate('PRINT')}
				</Button>
			</div>
			<ToPrint ref={componentRef}>
				<Table
					height={isPrinting ? '100%' : undefined}
					minHeight={isPrinting ? '100%' : undefined}
					maxHeight={isPrinting ? '100%' : undefined}
					isLoading={isLoading}
					columns={columns}
					data={data}
					disabledVirtualization={isPrinting}
				/>
			</ToPrint>
		</div>
	);
}
