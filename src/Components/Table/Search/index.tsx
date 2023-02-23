import { Dispatch, SetStateAction } from 'react';
import { Input } from '~/Components/Input';
import { useTranslation } from '~/Hooks/UseTranslation';

type Props = {
	globalFilter?: {
		filter: string;
		setFilter: Dispatch<SetStateAction<string>>;
		disableInput?: boolean;
	};
};

export function Search({ globalFilter }: Props) {
	const { translate } = useTranslation();
	if (!globalFilter || globalFilter.disableInput) return null;
	return (
		<Input
			value={globalFilter.filter as string}
			onChange={e =>
				(globalFilter?.setFilter as Dispatch<SetStateAction<string>>)(
					e.target.value
				)
			}
			placeholder={translate('SEARCH')}
			type="search"
		/>
	);
}
