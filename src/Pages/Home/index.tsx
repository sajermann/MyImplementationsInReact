import { Link } from 'react-router-dom';

import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { Icons } from '~/Components/Icons';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export default function Home() {
	const { translate } = useTranslation();
	const { options } = useRoutesMenu();

	const LINK_CLASS =
		'flex flex-col flex-1 items-center justify-center gap-1 p-1 text-sm text-white !bg-dark-700 hover:text-primary-700 transition-colors duration-500';

	return (
		<Main>
			<div className="flex flex-col items-center justify-center">
				<p>
					<strong>{translate('WELCOME_TO_MY_IMPLEMENTATIONS_IN_REACT')}</strong>
				</p>
				<p>{translate('HOME_MESSAGE_PRESENTATION')}</p>

				<a
					href="https://github.com/sajermann/MyImplementationsInReact/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
						alt="github"
						height="18"
						style={{ borderRadius: 5, marginRight: 5 }}
					/>
				</a>
			</div>

			<div className="flex flex-wrap gap-2 items-center justify-center">
				{options.map(
					opt =>
						opt.name !== 'Home' && (
							<div
								key={opt.path}
								className="flex flex-col w-80 h-80 border border-solid rounded-2xl  dark:border-white text-xl overflow-auto"
							>
								<header className="border-b-2 p-2 flex justify-center items-center bg-dark-700 rounded-t-2xl text-white">
									{opt.name}
								</header>

								{opt.demo}

								<footer className="border-t-2 flex !bg-dark-700">
									<Link to={opt.path} className={LINK_CLASS}>
										<Icons.Eye width="30px" />
										Demo
									</Link>
									<QuickAccessGithub name={opt.name} />
								</footer>
							</div>
						)
				)}
			</div>
		</Main>
	);
}
