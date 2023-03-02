import { useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import clsx from 'clsx';
import { TRoutesMenu } from '~/Types/TRoutesMenu';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Drawer } from '../Drawer';
import { Nav } from '../Nav';
import { HeaderButton } from '../HeaderButton';
import { Main } from '../Main';
import { MenuCollapsible } from '../MenuCollapsible';
import { Icons } from '../Icons';
import { Input } from '../Input';
import { BoxScroll } from '../BoxScroll';
import { BlockRightToLeftTransition } from '../BlockRightToLeftTransition';

interface Props extends Pick<TRoutesMenu, 'path' | 'name'> {
	onClick: () => void;
	isSub?: boolean;
}

function BuildNormalOption({ path, name, onClick, isSub }: Props) {
	return (
		<NavLink
			onClick={onClick}
			key={generateGuid()}
			to={path}
			className={({ isActive }) =>
				clsx({
					[`w-[90%] flex p-2 hover:text-violet-700  transition-colors duration-300`]:
						true,
					[`border border-l-0 rounded-tr-3xl rounded-br-3xl border-violet-700 text-violet-700`]:
						isActive,
					'pl-12': isSub,
				})
			}
			end
		>
			{name}
		</NavLink>
	);
}

function buildTrigger({
	isOpen,
	path,
	name,
	onClick,
}: { isOpen: boolean; onClick: () => void } & Pick<
	TRoutesMenu,
	'path' | 'name'
>) {
	const IS_OPEN: Record<string, React.ReactNode> = {
		true: <Icons.ArrowSingleDown width="20" />,
		false: <Icons.ArrowSingleRight width="20" />,
	};
	return (
		<div className="flex items-center justify-between w-full">
			<div className="flex-1">
				<BuildNormalOption onClick={onClick} name={name} path={path} />
			</div>
			<div className="w-10 p-2  flex items-center justify-center">
				{IS_OPEN[String(isOpen)]}
			</div>
		</div>
	);
}

export default function MenuAccessOptions() {
	const { translate, currentLanguage } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [isVisibleSearch, setIsVisibleSearch] = useState(false);
	const [search, setSearch] = useState('');
	const { options } = useRoutesMenu();
	const refInputSearch = useRef<HTMLInputElement>(null);

	const mount = useMemo(() => {
		const valueFilter = search.toLowerCase();
		if (valueFilter === '') return options;
		const newOptions: TRoutesMenu[] = [];
		options.forEach(opt => {
			const subOptions =
				opt.subs?.filter(
					subOpt =>
						translate(subOpt.label).toLowerCase().indexOf(valueFilter) > -1
				) || [];
			if (translate(opt.label).toLowerCase().indexOf(valueFilter) > -1) {
				newOptions.push(opt);
			} else if (subOptions.length > 0) {
				newOptions.push({
					...opt,
					expandedMenu: true,
					subs: [...subOptions],
				});
			}
		});

		return newOptions;
	}, [search, currentLanguage]);

	return (
		<>
			<HeaderButton onClick={() => setIsOpen(!isOpen)}>
				<Icons.List width="22px" />
			</HeaderButton>
			<Drawer
				openFrom="left"
				size="400px"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<Main>
					<Nav>
						<div className="w-full flex items-center justify-between gap-2">
							<h2 className="text-xl whitespace-nowrap font-bold text-white">
								Menu
							</h2>
							<div className="flex items-center justify-center gap-2">
								<div ref={refInputSearch}>
									<BlockRightToLeftTransition
										width="150px"
										show={isVisibleSearch}
									>
										<Input
											type="search"
											placeholder={translate('SEARCH_MENU')}
											value={search}
											onChange={({ target }) => setSearch(target.value)}
										/>
									</BlockRightToLeftTransition>
								</div>
								<HeaderButton
									onClick={() => {
										setSearch('');
										setIsVisibleSearch(!isVisibleSearch);
										if (refInputSearch && refInputSearch.current) {
											(
												refInputSearch.current.children[0].children[0]
													.children[0] as HTMLElement
											).focus();
										}
									}}
								>
									{isVisibleSearch ? (
										<Icons.Close width="22" />
									) : (
										<Icons.Search width="22" />
									)}
								</HeaderButton>
							</div>
						</div>
					</Nav>
					<BoxScroll>
						{mount.map(menu => {
							if (menu.subs) {
								return (
									<MenuCollapsible
										defaultIsOpen={menu.expandedMenu}
										pathChilds={menu.subs.map(item => item.path)}
										key={generateGuid()}
										trigger={triggerIsOpen =>
											buildTrigger({
												isOpen: triggerIsOpen,
												name: menu.label,
												path: menu.path,
												onClick: () => setIsOpen(false),
											})
										}
									>
										{menu.subs.map(subMenu => (
											<BuildNormalOption
												onClick={() => setIsOpen(false)}
												key={generateGuid()}
												name={subMenu.label}
												path={subMenu.path}
												isSub
											/>
										))}
									</MenuCollapsible>
								);
							}
							return (
								<BuildNormalOption
									onClick={() => setIsOpen(false)}
									key={generateGuid()}
									name={menu.label}
									path={menu.path}
								/>
							);
						})}
					</BoxScroll>
				</Main>
			</Drawer>
		</>
	);
}
