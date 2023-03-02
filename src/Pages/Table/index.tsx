import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { CodeBlock } from '~/Components/CodeBlock';
import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { Link } from 'react-router-dom';
import { Icons } from '~/Components/Icons';
import { useState } from 'react';
import { Input } from '~/Components/Input';

export function TablePage() {
	const { translate } = useTranslation();
	const { options } = useRoutesMenu();
	const [search, setSearch] = useState('');

	const optionsSubTable = options.find(opt => opt.name === 'Table')?.subs;

	function getFiltreds() {
		if (!search) {
			return optionsSubTable;
		}
		return optionsSubTable?.filter(
			opt =>
				translate(opt.label).toLowerCase().indexOf(search.toLowerCase()) > -1
		);
	}

	const LINK_CLASS =
		'flex flex-col flex-1 items-center justify-center gap-1 p-1 text-sm hover:text-primary-700 transition-colors duration-500';

	return (
		<Main data-content="content-main">
			<Section heading={translate('TABLES')}>
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate(
					'TABLE'
				)} ${translate('USING_THE_LIB')} @tanstack/react-table`}
			</Section>
			<Section subHeading={translate('INSTALLATION_OF_LIB')}>
				<CodeBlock>npm i @tanstack/react-table;</CodeBlock>
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Table" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<div className="flex flex-col gap-2">
					<Input
						type="search"
						placeholder={translate('SEARCH_OPTIONS')}
						value={search}
						onChange={({ target }) => setSearch(target.value)}
					/>
					{optionsSubTable &&
						getFiltreds()?.map(opt => (
							<div key={opt.name} className="border rounded flex">
								<div className="flex w-full flex-1 items-center justify-center">
									<div className="flex-1 ml-2">{opt.label}</div>
									<Link to={opt.path} className={LINK_CLASS}>
										<Icons.Eye width="30px" />
										Demo
									</Link>
									<QuickAccessGithub name={opt.name} disableBgColor />
								</div>
							</div>
						))}
				</div>
			</Section>
		</Main>
	);
}
