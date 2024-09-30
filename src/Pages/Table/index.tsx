import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { CodeBlock } from '~/Components/CodeBlock';
import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { Link } from 'react-router-dom';
import { Icons } from '~/Components/Icons';
import { useState } from 'react';
import { Input } from '~/Components/Input';

export function TablePage() {
	const { translate } = useTranslation();
	const { globalRoutes: options } = useRoutesMenu();
	const [search, setSearch] = useState('');

	const optionsSubTable = options.find(opt => opt.name === 'Table')?.subs;

	function getFiltreds() {
		if (!search) {
			return optionsSubTable;
		}
		return optionsSubTable?.filter(
			opt => opt.label.toLowerCase().indexOf(search.toLowerCase()) > -1,
		);
	}

	const LINK_CLASS =
		'flex flex-col flex-1 items-center justify-center gap-1 p-1 text-sm hover:text-primary-700 transition-colors duration-500';

	return (
		<Main data-content="content-main">
			<Section title={translate('TABLES')} variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate(
					'TABLE',
				)} ${translate('USING_THE_LIB')} @tanstack/react-table`}
			</Section>
			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i @tanstack/react-table;</CodeBlock>
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Table" />
				</div>
			</Section>
			<Section title={translate('IMPLEMENTS')} variant="h2">
				<div className="flex flex-col gap-2">
					<Input
						type="search"
						placeholder={translate('SEARCH_OPTIONS')}
						value={search}
						onChange={({ target }) => setSearch(target.value)}
					/>
					{optionsSubTable &&
						getFiltreds()?.map(opt => (
							<div
								key={opt.name}
								className="border rounded flex bg-dark-400 text-white h-16"
							>
								<div className="flex w-full flex-1 items-center justify-center">
									<div className="flex-1 ml-2">{opt.label}</div>
									<Link to={opt.path} className={LINK_CLASS}>
										<Icons nameIcon="eye" width="30px" />
										Demo
									</Link>
									<QuickAccessGithub name={opt.name} />
								</div>
							</div>
						))}

					{!getFiltreds()?.length && (
						<span className="border rounded bg-dark-400 text-white h-16 flex items-center justify-center">
							{translate('NO_RESULT')}
						</span>
					)}
				</div>
			</Section>
		</Main>
	);
}
