import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { Icons } from '../Icons';

export function QuickAccessGithub({ name }: { name: string }) {
	const { options } = useRoutesMenu();
	const LINK_CLASS =
		'flex flex-col flex-1 items-center justify-center gap-1 p-1 text-sm text-white !bg-dark-700 hover:text-primary-700 transition-colors duration-500';

	return (
		<>
			<a
				href={options.find(item => item.name === name)?.implements_code}
				target="_blank"
				className={LINK_CLASS}
				rel="noreferrer"
			>
				<Icons.List width="30px" />
				Impl Code
			</a>
			<a
				href={options.find(item => item.name === name)?.docs_code}
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
