import { useNavigate } from 'react-router-dom';

import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { Button } from '~/Components/Button';

export default function Home() {
	const { translate } = useTranslation();
	const { options } = useRoutesMenu();
	const navigate = useNavigate();

	function handleGotTo(url: string) {
		navigate(url);
	}

	return (
		<Main>
			<div className="flex flex-col items-center justify-center">
				<p>
					<strong>{translate('WELCOME_TO_MY_IMPLEMENTATIONS_IN_REACT')}</strong>
				</p>
				<p>
					Projeto criado para demonstrar como realizo minhas implementações em
					React
				</p>

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
								className="w-80 h-80 border border-solid rounded-2xl  dark:border-white text-xl"
							>
								<header className="border-b-2 p-2 flex justify-between items-center bg-dark-700 rounded-t-2xl text-white">
									{opt.name}
									<Button
										variant="Outlined"
										onClick={() => handleGotTo(opt.path)}
										className="!w-24 !h-10"
									>
										Docs
									</Button>
								</header>

								{opt.demo}
							</div>
						)
				)}
			</div>
		</Main>
	);
}
