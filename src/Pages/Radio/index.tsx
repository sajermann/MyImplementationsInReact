import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { RadioGroup, RadioItem } from '~/Components/Radio';
import { useState } from 'react';
import { RadioDemo } from '~/Components/Demos/Radio';
import { Button } from '~/Components/Button';

type TPokemon = 'Charmander' | 'Charmeleon' | 'Charizard';

const CONFIG = {
	Charmander:
		'https://i.pinimg.com/originals/50/a7/47/50a747b729981759c35b9ca93829a88d.png',
	Charmeleon:
		'https://static.pokemonpets.com/images/monsters-images-300-300/5-Charmeleon.png',
	Charizard:
		'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7bca634-434f-4d30-8394-513ca6421852/da3vckd-edf40d34-5e2e-48ca-be8b-6c3eff6d26ae.png/v1/fill/w_800,h_800/tatsu_s_charizard_by_seviyummy_da3vckd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvYzdiY2E2MzQtNDM0Zi00ZDMwLTgzOTQtNTEzY2E2NDIxODUyXC9kYTN2Y2tkLWVkZjQwZDM0LTVlMmUtNDhjYS1iZThiLTZjM2VmZjZkMjZhZS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mUZ6BnFNV8kPZ1UqlPTaVXuOtgxnh3G-mSlAEQ_5MHM',
};

export function RadioPage() {
	const { translate } = useTranslation();
	const [value, setValue] = useState<TPokemon | null>(null);

	return (
		<Main data-content="content-main">
			<Section title="Radio" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Radio ${translate(
					'USING_THE_LIB'
				)} @radix-ui/react-radio-group`}
			</Section>
			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i @radix-ui/react-radio-group;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="Radio" />
				</div>
			</Section>

			<Section title="Normal" variant="h2">
				<ComponentBlock>
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-32 h-32">
							{value && (
								<img
									src={CONFIG[value as TPokemon]}
									alt={value}
									className="w-28 h-28"
								/>
							)}
						</div>
						<RadioGroup
							className="flex gap-2"
							onValueChange={e => setValue(e as TPokemon)}
							value={value}
						>
							<RadioItem
								id="Charmander"
								value="Charmander"
								label="Charmander"
							/>
							<RadioItem
								id="Charmeleon"
								value="Charmeleon"
								label="Charmeleon"
							/>
							<RadioItem id="Charizard" value="Charizard" label="Charizard" />
						</RadioGroup>
						<Button onClick={() => setValue(null)}>{translate('CLEAR')}</Button>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('COLORS')} variant="h2">
				<ComponentBlock>
					<RadioDemo />
				</ComponentBlock>
			</Section>
		</Main>
	);
}
