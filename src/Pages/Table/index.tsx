import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ComponentBlock } from '~/Components/ComponentBlock';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { useMemo, useState } from 'react';
import { Select } from '~/Components/Select';
import { TVehicle } from '~/Types/TVehicle';
import { delay } from '@sajermann/utils/Delay';
import { makeData } from '~/Utils/MakeData';

export function TablePage() {
	const { translate, currentLanguage } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section heading="Select">
				{`${translate('IMPLEMENTS_COMPONENT')} Select ${translate(
					'USING_THE_LIB'
				)} react-select`}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Table" />
				</div>
			</Section>
			Table
		</Main>
	);
}
