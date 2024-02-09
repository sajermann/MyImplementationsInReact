import { Fragment, useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';
import clsx from 'clsx';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { TRoutesMenu } from '~/Types/TRoutesMenu';
import { useTranslation } from '~/Hooks/UseTranslation';

import { Nav } from '../Nav';
import { HeaderButton } from '../HeaderButton';
import { Main } from '../Main';
import { MenuCollapsible } from '../MenuCollapsible';
import { Icons } from '../Icons';
import { Input } from '../Input';
import { BoxScroll } from '../BoxScroll';
import { BlockRightToLeftTransition } from '../BlockRightToLeftTransition';

interface TProps extends TRoutesMenu {
	onClick?: () => void;
}

function BuildNormalOption({ path, label, onClick, hideMenu }: TProps) {
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
	...rest
}: { isOpen: boolean; onClick?: () => void } & TRoutesMenu) {
	const IS_OPEN: Record<string, React.ReactNode> = {
		true: <Icons nameIcon="arrowSingleDown" width="20" />,
		false: <Icons nameIcon="arrowSingleRight" width="20" />,
	};
	return (
		<div className="flex items-center justify-between w-full">
			<div className="flex-1">
				<BuildNormalOption {...rest} />
			</div>
			<div className="w-10 p-2  flex items-center justify-center">
				{IS_OPEN[String(isOpen)]}
			</div>
		</div>
	);
}

function buildMenuWithSub(menu: TProps) {
	if (menu.subs?.find(item => !item.hideMenu) && !menu.hideMenu) {
		return (
			<li>
				<MenuCollapsible
					defaultIsOpen={menu.expandedMenu}
					pathChilds={menu.subs.map(item => item.path)}
					trigger={triggerIsOpen =>
						buildTrigger({
							isOpen: triggerIsOpen,
							...menu,
						})
					}
				>
					<ul>
						{menu.subs.map(subMenu => (
							<Fragment key={generateGuid()}>
								{buildMenuWithSub({ ...subMenu, onClick: menu.onClick })}
							</Fragment>
						))}
					</ul>
				</MenuCollapsible>
			</li>
		);
	}

	return <BuildNormalOption key={generateGuid()} {...menu} />;
}

export default function MenuAccessOptions({
	onClick,
	hideHeader,
}: {
	onClick?: () => void;
	hideHeader?: boolean;
}) {
	const { translate, currentLanguage } = useTranslation();
	const [isVisibleSearch, setIsVisibleSearch] = useState(false);
	const [search, setSearch] = useState('');
	const { globalMenus } = useRoutesMenu();
	const refInputSearch = useRef<HTMLInputElement>(null);

	const mount = useMemo(() => globalMenus(search), [search, currentLanguage]);

	return (
		<Main>
			{!hideHeader && (
				<Nav>
					<div className="w-full flex items-center justify-between gap-2">
						<h2 className="text-xl whitespace-nowrap font-bold text-white">
							Menu
						</h2>
						<div className="flex items-center justify-center gap-2">
							<div>
								<BlockRightToLeftTransition
									width="150px"
									show={isVisibleSearch}
								>
									<Input
										ref={refInputSearch}
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
									if (refInputSearch?.current) {
										refInputSearch.current.focus();
									}
								}}
							>
								{isVisibleSearch ? (
									<Icons nameIcon="close" width="1.5rem" />
								) : (
									<Icons nameIcon="search" width="1.5rem" />
								)}
							</HeaderButton>
						</div>
					</div>
				</Nav>
			)}
			<BoxScroll>
				<ul>
					{mount.map(menu => {
						if (menu.subs) {
							return (
								<Fragment key={generateGuid()}>
									{buildMenuWithSub({ ...menu, onClick })}
								</Fragment>
							);
						}
						return (
							<BuildNormalOption
								key={generateGuid()}
								{...menu}
								onClick={onClick}
							/>
						);
					})}
				</ul>
			</BoxScroll>
		</Main>
	);
}
