import { List } from 'phosphor-react';
import { useRef, useState } from 'react';
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

interface Props extends Pick<TRoutesMenu, 'path' | 'name'> {
	onClick: () => void;
}

function BuildNormalOption({ path, name, onClick }: Props) {
	return (
		<NavLink
			onClick={onClick}
			key={generateGuid()}
			to={path}
			className={({ isActive }) =>
				clsx({
					[`flex p-2 hover:!bg-gray-500 hover:text-white transition-colors duration-300`]:
						true,
					[` border-primary-700 !bg-gray-500 text-white`]: isActive,
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
	const { translate } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [isVisibleSearch, setIsVisibleSearch] = useState(false);
	const [search, setSearch] = useState('');
	const { options } = useRoutesMenu();
	const refButtonSearch = useRef<HTMLInputElement>(null);

	const OPTIONS_FILTREDS = options.filter(
		item =>
			item.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
			(item.subs &&
				item.subs?.filter(
					sub => sub.name.toLowerCase().indexOf(search.toLowerCase()) > -1
				).length > 0)
	);

	return (
		<>
			<HeaderButton onClick={() => setIsOpen(!isOpen)}>
				<List size={22} />
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
								<div ref={refButtonSearch}>
									<Input
										className={clsx({
											'transition-all ease-linear origin-left duration-500':
												true,
											'opacity-0 w-0': !isVisibleSearch,
											'opacity-100 w-full': isVisibleSearch,
											'w-full': isVisibleSearch,
										})}
										autoFocus
										type="search"
										placeholder={translate('SEARCH_MENU')}
										value={search}
										onChange={({ target }) => setSearch(target.value)}
									/>
								</div>
								<HeaderButton
									onClick={() => {
										setSearch('');
										setIsVisibleSearch(!isVisibleSearch);
										if (refButtonSearch && refButtonSearch.current) {
											(
												refButtonSearch.current.children[0]
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
					<div>
						{OPTIONS_FILTREDS.map(menu => {
							if (menu.subs) {
								return (
									<MenuCollapsible
										pathChilds={menu.subs.map(item => item.path)}
										key={generateGuid()}
										trigger={triggerIsOpen =>
											buildTrigger({
												isOpen: triggerIsOpen,
												name: menu.name,
												path: menu.path,
												onClick: () => setIsOpen(false),
											})
										}
									>
										{menu.subs.map(subMenu => (
											<BuildNormalOption
												onClick={() => setIsOpen(false)}
												key={generateGuid()}
												name={subMenu.name}
												path={subMenu.path}
											/>
										))}
									</MenuCollapsible>
								);
							}
							return (
								<BuildNormalOption
									onClick={() => setIsOpen(false)}
									key={generateGuid()}
									name={menu.name}
									path={menu.path}
								/>
							);
						})}
					</div>
				</Main>
			</Drawer>
		</>
	);
}
