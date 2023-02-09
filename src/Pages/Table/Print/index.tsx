import { useEffect, useState } from 'react';

import { ToPrint } from '~/Components/ToPrint';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';
import { usePrinter } from '~/Hooks/UsePrinter';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export function PrintPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const { isPrinting, componentRef, handlePreparePrint } = usePrinter();
	const { columns } = useColumns();

	async function load() {
		setIsLoading(true);
		setData(makeData.person(100));
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
			</Section>
		</Main>
	);
}
