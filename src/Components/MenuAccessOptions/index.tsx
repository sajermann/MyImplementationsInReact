import { Fragment, useMemo, useRef, useState } from 'react';
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

interface Props extends TRoutesMenu {
	onClick: () => void;
}

function BuildNormalOption({ path, label, onClick, hideMenu }: Props) {
	if (hideMenu) return null;
	return (
		<li>
			<NavLink
				onClick={onClick}
				key={generateGuid()}
				to={path}
				className={({ isActive }) =>
					clsx({
						[`w-[90%] flex p-2 hover:text-violet-700  transition-colors duration-300`]:
							true,
						[`border-2 border-x-0 border-t-0 border-violet-700 text-violet-700`]:
							isActive,
					})
				}
				end
			>
				{label}
			</NavLink>
		</li>
	);
}

function buildTrigger({
	isOpen,
	onClick,
	...rest
}: { isOpen: boolean; onClick: () => void } & TRoutesMenu) {
	const IS_OPEN: Record<string, React.ReactNode> = {
		true: <Icons.ArrowSingleDown width="20" />,
		false: <Icons.ArrowSingleRight width="20" />,
	};
	return (
		<div className="flex items-center justify-between w-full">
			<div className="flex-1">
				<BuildNormalOption onClick={onClick} {...rest} />
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

	function filterSubs(
		menu: TRoutesMenu,
		valueFilter: string
	): TRoutesMenu[] | null {
		const newOptions: TRoutesMenu[] = [];
		if (!menu.subs) return null;
		for (const subs of menu.subs) {
			const result = subs.label.toLowerCase().indexOf(valueFilter) > -1;
			if (result) {
				newOptions.push(subs);
			}

			if (subs.subs) {
				const t = filterSubs(subs, valueFilter);
				if (t) newOptions.push(...t);
			}
		}
		return newOptions;
	}

	const mount = useMemo(() => {
		const valueFilter = search.toLowerCase();
		if (valueFilter === '') return options;

		const newOptions: TRoutesMenu[] = [];
		const optionsWithChild: TRoutesMenu[] = [];

		for (const menu of options) {
			if (menu.label.toLowerCase().indexOf(valueFilter) > -1) {
				newOptions.push(menu);
			}
			if (menu.subs) {
				const result = filterSubs(menu, valueFilter);
				if (result) {
					newOptions.push(...result);
				}
			}
		}

		// remove childs
		for (const opt of newOptions) {
			const temp = { ...opt };
			if (temp.subs) {
				delete temp.subs;
			}
			optionsWithChild.push(temp);
		}
		return optionsWithChild;
	}, [search, currentLanguage]);

	function buildMenuWithSub(menu: TRoutesMenu) {
		if (menu.subs && menu.subs.find(item => !item.hideMenu) && !menu.hideMenu) {
			return (
				<li>
					<MenuCollapsible
						defaultIsOpen={menu.expandedMenu}
						pathChilds={menu.subs.map(item => item.path)}
						trigger={triggerIsOpen =>
							buildTrigger({
								isOpen: triggerIsOpen,
								onClick: () => setIsOpen(false),
								...menu,
							})
						}
					>
						<ul>
							{menu.subs.map(subMenu => (
								<Fragment key={generateGuid()}>
									{buildMenuWithSub(subMenu)}
								</Fragment>
							))}
						</ul>
					</MenuCollapsible>
				</li>
			);
		}

		return (
			<BuildNormalOption
				onClick={() => setIsOpen(false)}
				key={generateGuid()}
				{...menu}
			/>
		);
	}

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
						<ul>
							{mount.map(menu => {
								if (menu.subs) {
									return (
										<Fragment key={generateGuid()}>
											{buildMenuWithSub(menu)}
										</Fragment>
									);
								}
								return (
									<BuildNormalOption
										onClick={() => setIsOpen(false)}
										key={generateGuid()}
										{...menu}
									/>
								);
							})}
						</ul>
					</BoxScroll>
				</Main>
			</Drawer>
		</>
	);
}
