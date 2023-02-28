import { useEffect, useState } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { usePrinter } from '~/Hooks/UsePrinter';
import { ToPrint } from '~/Components/ToPrint';

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
			<Section heading={translate('PRINT')}>
				{translate('IMPLEMENTS_PRINT_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Print" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<div className="flex flex-col gap-2">
					<Button disabled={isPrinting} onClick={handlePreparePrint}>
						{translate('PRINT')}
					</Button>

					<ToPrint className="flex flex-col gap-2" ref={componentRef}>
						<div className="grid grid-cols-12">
							<h1 className="col-span-12 bg-dark-700 font-bold text-center">
								{translate('INFOS')}
							</h1>

							<div className="col-span-3 ">
								<div className="bg-dark-700 font-bold text-center">
									{translate('RECORDS')}
								</div>
								<div className="text-center">
									{data.length} ({data.filter(row => row.isActive).length}{' '}
									{translate('ACTIVES')})
								</div>
							</div>

							<div className="col-span-3">
								<div className="bg-dark-700 font-bold text-center">
									{translate('ADMIN_ROLE')}
								</div>
								<div className="text-center">
									{data.filter(row => row.role === 'Admin').length} (
									{
										data.filter(row => row.role === 'Admin' && row.isActive)
											.length
									}{' '}
									{translate('ACTIVES')})
								</div>
							</div>

							<div className="col-span-3">
								<div className="bg-dark-700 font-bold text-center">
									{translate('DEV_ROLE')}
								</div>
								<div className="text-center">
									{data.filter(row => row.role === 'Dev').length} (
									{
										data.filter(row => row.role === 'Dev' && row.isActive)
											.length
									}{' '}
									{translate('ACTIVES')})
								</div>
							</div>

							<div className="col-span-3">
								<div className="bg-dark-700 font-bold text-center">
									{translate('USER_ROLE')}
								</div>
								<div className="text-center">
									{data.filter(row => row.role === 'User').length} (
									{
										data.filter(row => row.role === 'User' && row.isActive)
											.length
									}{' '}
									{translate('ACTIVES')})
								</div>
							</div>
						</div>
						<Table
							height={isPrinting ? '100%' : undefined}
							minHeight={isPrinting ? '100%' : undefined}
							maxHeight={isPrinting ? '100%' : undefined}
							isLoading={isLoading}
							columns={[...columns]}
							data={data}
							disabledVirtualization={!isPrinting}
						/>
					</ToPrint>
				</div>
			</Section>
		</Main>
	);
}
