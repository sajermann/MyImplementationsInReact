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

function getClassNames() {
	return managerClassNames([
		{ 'flex flex-col flex-1 items-center justify-center gap-1 p-1': true },
		{ 'hover:text-primary-700 transition-colors duration-500 text-sm': true },
		{ 'text-white': true },
	]);
}

type TProps = { name: string };

export const QuickAccessGithub = memo(({ name }: TProps) => {
	const { globalRoutes } = useRoutesMenu();

	return (
		<>
			<a
				href={getImplements('implements_code', name, globalRoutes)}
				target="_blank"
				className={getClassNames()}
				rel="noreferrer"
			>
				<Icons nameIcon="listFile" width="30px" />
				Impl Code
			</a>
			<a
				href={getImplements('docs_code', name, globalRoutes)}
				target="_blank"
				className={getClassNames()}
				rel="noreferrer"
			>
				<Icons nameIcon="shortList" width="30px" />
				Docs Code
			</a>
		</>
	);
});
