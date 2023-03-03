import { generateGuid } from '@sajermann/utils/Random';
import { Link, useLocation } from 'react-router-dom';

import { useBreadcrumbs } from '~/Hooks/UseBreadcrumbs';

export function Breadcrumbs() {
	const { breadcrumbs } = useBreadcrumbs();
	const location = useLocation();

	if (!breadcrumbs || location.pathname === '/') {
		return null;
	}

	return (
		<div className="flex gap-1 !text-primary-500">
			{breadcrumbs.map((item, index) =>
				item.link && breadcrumbs[index + 1] ? (
					<ol key={generateGuid()}>
						<Link to={item.link} className="hover:underline !text-primary-500">
							{item.label}
						</Link>
						{breadcrumbs[index + 1].label && ' / '}
					</ol>
				) : (
					<ol key={generateGuid()}>{item.label}</ol>
				)
			)}
		</div>
	);
}
