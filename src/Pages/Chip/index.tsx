import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Chip } from '~/Components/Chip';
import { Dispatch, SetStateAction, useState } from 'react';
import { Input } from '~/Components/Input';
import { Button } from '~/Components/Button';

function handleAddChip(
	chipToAdd: string,
	setChips: Dispatch<SetStateAction<string[]>>,
	setChipToAdd: Dispatch<SetStateAction<string>>
) {
	if (!chipToAdd) return;
	setChips(prev => [...prev, chipToAdd]);
	setChipToAdd('');
}

function handleRemoveChip(
	chipToRemove: string,
	setChips: Dispatch<SetStateAction<string[]>>
) {
	setChips(prev => prev.filter(item => item !== chipToRemove));
}

function handleUpdateChip(
	oldValue: string,
	newValue: string,
	setChips: Dispatch<SetStateAction<string[]>>
) {
	setChips(prev => {
		const t = prev.map(item => {
			if (item === oldValue) {
				return newValue;
			}
			return item;
		});

		return t;
	});
}

export function ChipPage() {
	const { translate } = useTranslation();
	const [valueChip1, setValueChip1] = useState('React');
	const [chipToAdd, setChipToAdd] = useState('');
	const [chips, setChips] = useState<string[]>([]);

	return (
		<Main data-content="content-main">
			<Section title="Chip" variant="h1">
				{translate('IMPLEMENTS_CHIP')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="Chip" />
				</div>
			</Section>
			<Section title="Chips" variant="h2">
				<div className="flex gap-2">
					<Chip value="Brazil" />
					<Chip value="Eua" />
					<Chip value="React" />
					<Chip value="Typescript" />
				</div>
			</Section>

			<Section title={translate('CONTROLLED')} variant="h2">
				<Section title={translate('SINGLE')} variant="h3">
					<Chip value={valueChip1} onChange={(_, e) => setValueChip1(e)} />
				</Section>

				<Section title={translate('MULTI')} variant="h3">
					<div className="flex gap-2 items-center justify-center mb-2">
						<Input
							value={chipToAdd}
							onChange={e => setChipToAdd(e.target.value)}
							placeholder={translate('ADD_CHIP')}
						/>
						<Button
							onClick={() => {
								handleAddChip(chipToAdd, setChips, setChipToAdd);
							}}
						>
							{translate('ADD')}
						</Button>
					</div>
					<div className="flex gap-2">
						{chips.map(item => (
							<Chip
								key={item}
								value={item}
								onRemove={e => handleRemoveChip(e, setChips)}
								onChange={(oldValue, newValue) =>
									handleUpdateChip(oldValue, newValue, setChips)
								}
							/>
						))}
					</div>
				</Section>
			</Section>
		</Main>
	);
}
