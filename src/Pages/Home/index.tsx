import { useNavigate } from 'react-router-dom';

import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { OptionButton } from '~/Components/OptionButton';
import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';

export default function Home() {
	const { translate } = useTranslation();
	const { options } = useRoutesMenu();
	const navigate = useNavigate();

	function handleGotTo(url: string) {
		navigate(url);
	}

	return (
		<Main>
			<div>
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

			<div className="flex flex-wrap gap-2">
				{options.map(
					opt =>
						opt.name !== 'Home' && (
							<OptionButton
								key={opt.path}
								className="w-80 h-80 border border-solid rounded-2xl border-dark-700 dark:border-white text-2xl"
								onClick={() => handleGotTo(opt.path)}
							>
								{opt.name}
							</OptionButton>
						)
				)}
			</div>
		</Main>
	);
}
