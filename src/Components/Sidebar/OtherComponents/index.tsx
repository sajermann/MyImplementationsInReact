import { Link } from 'react-router-dom';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Icons } from '~/Components/Icons';
import { Main } from '../Main';

export function OtherComponents() {
	const { options, triRoutes } = useRoutesMenu();
	const { translate } = useTranslation();

	if (!options.length) {
		return null;
	}

	return (
		<Main heading={translate('OTHERS_COMPONENTS')}>
			<div className="flex justify-between items-center">
				{triRoutes.prev && (
					<Link
						className="flex items-center justify-center hover:text-primary-700 transition-colors duration-500"
						to={triRoutes.prev.path}
					>
						<Icons.ArrowSingleLeft width="15px" /> {triRoutes.prev.label}
					</Link>
				)}
				{triRoutes.next && (
					<Link
						className="flex items-center justify-center hover:text-primary-700 transition-colors duration-500"
						to={triRoutes.next.path}
					>
						{triRoutes.next.label}
						<Icons.ArrowSingleRight width="15px" />
					</Link>
				)}
			</div>
		</Main>
	);
}
