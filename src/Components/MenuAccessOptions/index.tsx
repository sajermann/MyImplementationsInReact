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
		true: <Icons nameIcon="arrowSingleDown" width="20" />,
		false: <Icons nameIcon="arrowSingleRight" width="20" />,
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
	const { globalMenus } = useRoutesMenu();
	const refInputSearch = useRef<HTMLInputElement>(null);

	const mount = useMemo(() => globalMenus(search), [search, currentLanguage]);

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
				<Icons nameIcon="list" width="22px" />
			</HeaderButton>
			<Drawer
				openFrom="left"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				sectionInternal={{
					className: 'w-96',
				}}
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
										<Icons nameIcon="close" width="22" />
									) : (
										<Icons nameIcon="search" width="22" />
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
