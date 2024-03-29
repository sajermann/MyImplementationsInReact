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

export function LoadingPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { columns } = useColumns();

	async function load() {
		setIsLoading(true);
		setData(makeData.person(1000));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	function handleLoading(withData?: boolean) {
		setData(withData ? makeData.person(1000) : []);
		setIsLoading(true);
	}

	return (
		<Main data-content="content-main">
			<Section title={translate('LOADING')} variant="h1">
				{translate('IMPLEMENTS_LOADING_MODE')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Loading" />
				</div>
			</Section>
			<Section title={translate('IMPLEMENTS')} variant="h2">
				<div className="flex flex-col gap-2">
					<div className="flex gap-2">
						<Button onClick={() => handleLoading(true)}>
							{translate('LOADING_WITH_DATA')}
						</Button>
						<Button onClick={() => handleLoading()}>
							{translate('LOADING_WITHOUT_DATA')}
						</Button>

						<Button onClick={() => load()}>{translate('NORMAL_STATE')}</Button>
					</div>
					<Table isLoading={isLoading} columns={columns} data={data} />
				</div>
			</Section>
		</Main>
	);
}
