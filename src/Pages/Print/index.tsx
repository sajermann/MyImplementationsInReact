import { useEffect, useState } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { usePrinter } from '~/Hooks/UsePrinter';
import { ToPrint } from '~/Components/ToPrint';

function Card({
	title,
	data,
	roleUser,
}: {
	title: string;
	data: TPerson[];
	roleUser: string;
}) {
	const { translate } = useTranslation();

	const active = `${data.length} (${data.filter(row => row.isActive).length}`;
	const comum = `${data.filter(row => row.role === roleUser).length} (${
		data.filter(row => row.role === roleUser && row.isActive).length
	}`;
	return (
		<div className="col-span-3 ">
			<div className="bg-dark-700 font-bold text-center">
				{translate(title)}
			</div>
			<div className="text-center">
				{roleUser === 'IsActive' ? active : comum}
				{translate('ACTIVES')})
			</div>
		</div>
	);
}

export function PrintPage() {
	const { isPrinting, componentRef, handlePreparePrint } = usePrinter();
	const { translate } = useTranslation();
	const { columns } = useColumns();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	async function load() {
		setIsLoading(true);
		setData(makeData.person(50));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	return (
		<Main data-content="content-main">
			<Section title={translate('PRINT')} variant="h1">
				{translate('IMPLEMENTS_PRINT_MODE')}
			</Section>
			<Section title={translate('CODES')}>
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Print" />
				</div>
			</Section>
			<Section title={translate('IMPLEMENTS')} variant="h2">
				<div className="flex flex-col gap-2">
					<Button disabled={isPrinting} onClick={handlePreparePrint}>
						{translate('PRINT')}
					</Button>

					<ToPrint className="flex flex-col gap-2" ref={componentRef}>
						<div className="grid grid-cols-12">
							<h1 className="col-span-12 bg-dark-700 font-bold text-center">
								{translate('INFOS')}
							</h1>

							<Card title="RECORDS" data={data} roleUser="IsActive" />

							<Card title="ADMIN_ROLE" data={data} roleUser="Admin" />

							<Card title="DEV_ROLE" data={data} roleUser="Dev" />

							<Card title="USER_ROLE" data={data} roleUser="User" />
						</div>
						<Table
							height={isPrinting ? '100%' : undefined}
							minHeight={isPrinting ? '100%' : undefined}
							maxHeight={isPrinting ? '100%' : undefined}
							isLoading={isLoading}
							columns={[...columns]}
							data={data}
							enableVirtualization={!isPrinting}
						/>
					</ToPrint>
				</div>
			</Section>
		</Main>
	);
}
