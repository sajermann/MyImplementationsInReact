import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { Icons } from '../Icons';

export function QuickAccessGithub({
	name,
	disableBgColor,
}: {
	name: string;
	disableBgColor?: boolean;
}) {
	const { options } = useRoutesMenu();
	const LINK_CLASS = `flex flex-col flex-1 items-center justify-center gap-1 p-1 text-sm text-white ${
		disableBgColor ? '' : '!bg-dark-700'
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
				<Icons.List width="30px" />
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
}
