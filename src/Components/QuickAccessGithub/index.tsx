import { memo } from 'react';
import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { Icons } from '../Icons';

type Props = { name: string; disableBgColor?: boolean };

export const QuickAccessGithub = memo(({ name, disableBgColor }: Props) => {
	const { globalRoutes: options } = useRoutesMenu();
	const LINK_CLASS = `flex flex-col flex-1 items-center justify-center gap-1 p-1 text-sm ${
		disableBgColor ? '' : '!bg-dark-700 text-white'
	}  hover:text-primary-700 transition-colors duration-500`;

	function getImplements(type: 'implements_code' | 'docs_code') {
		const result = options.find(item => item.name === name);
		if (result) return result[type];

		const resultSub = options
			.find(item => item.subs?.find(subItem => subItem.name === name))
			?.subs?.find(itemSubItem => itemSubItem.name === name);
		if (!resultSub) return undefined;
		return resultSub[type];
	}

	return (
		<>
			<a
				href={getImplements('implements_code')}
				target="_blank"
				className={LINK_CLASS}
				rel="noreferrer"
			>
				<Icons.ListFile width="30px" />
				Impl Code
			</a>
			<a
				href={getImplements('docs_code')}
				target="_blank"
				className={LINK_CLASS}
				rel="noreferrer"
			>
				<Icons.ShortList width="30px" />
				Docs Code
			</a>
		</>
	);
});
