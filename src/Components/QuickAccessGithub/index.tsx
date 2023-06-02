import { memo } from 'react';
import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { TRoutesMenu } from '~/Types/TRoutesMenu';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Icons } from '../Icons';

function getImplements(
	type: 'implements_code' | 'docs_code',
	name: string,
	options: TRoutesMenu[]
) {
	const result = options.find(item => item.name === name);
	if (result) return result[type];

	const resultSub = options
		.find(item => item.subs?.find(subItem => subItem.name === name))
		?.subs?.find(itemSubItem => itemSubItem.name === name);
	if (!resultSub) return undefined;
	return resultSub[type];
}

function getClassNames(disableBgColor?: boolean) {
	return managerClassNames([
		{ 'flex flex-col flex-1 items-center justify-center gap-1 p-1': true },
		{ 'hover:text-primary-700 transition-colors duration-500 text-sm': true },
		{ '!bg-dark-700 text-white': !disableBgColor },
	]);
}

type Props = { name: string; disableBgColor?: boolean };

export const QuickAccessGithub = memo(({ name, disableBgColor }: Props) => {
	const { globalRoutes } = useRoutesMenu();

	return (
		<>
			<a
				href={getImplements('implements_code', name, globalRoutes)}
				target="_blank"
				className={getClassNames(disableBgColor)}
				rel="noreferrer"
			>
				<Icons.ListFile width="30px" />
				Impl Code
			</a>
			<a
				href={getImplements('docs_code', name, globalRoutes)}
				target="_blank"
				className={getClassNames(disableBgColor)}
				rel="noreferrer"
			>
				<Icons.ShortList width="30px" />
				Docs Code
			</a>
		</>
	);
});
