import { useRef, useState } from 'react';

import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Section } from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { RadioGroup, RadioItem } from '~/Components/Radio';
import { RadioDemo } from '~/Components/Demos/Radio';
import { Button } from '~/Components/Button';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';
import { Checkbox } from '~/Components/Checkbox';

type TPokemon = 'Charmander' | 'Charmeleon' | 'Charizard';

const CONFIG = {
	Charmander:
		'https://i.pinimg.com/originals/50/a7/47/50a747b729981759c35b9ca93829a88d.png',
	Charmeleon:
		'https://static.pokemonpets.com/images/monsters-images-300-300/5-Charmeleon.png',
	Charizard:
		'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png',
};

export function RadioPage() {
	const { translate } = useTranslation();
	const [value, setValue] = useState<TPokemon | null>(null);
	const [errorMode, setErrorMode] = useState(false);
	const ref = useRef<HTMLButtonElement>(null);

	return (
		<Main data-content="content-main">
			<Section title="Radio" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Radio ${translate(
					'USING_THE_LIB',
				)} @radix-ui/react-radio-group`}
			</Section>
			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i @radix-ui/react-radio-group;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Radio" />
				</div>
			</Section>

			<Section title="Normal" variant="h2">
				<ComponentBlock>
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-32 h-32">
							{value && (
								<img src={CONFIG[value]} alt={value} className="w-28 h-28" />
							)}
						</div>
						<RadioGroup
							className="flex gap-2"
							onValueChange={e => setValue(e as TPokemon)}
							value={value}
						>
							<ContainerInput className="items-center">
								<Label htmlFor="Charmander">Charmander</Label>
								<RadioItem id="Charmander" value="Charmander" />
							</ContainerInput>

							<ContainerInput className="items-center">
								<Label htmlFor="Charmeleon">Charmeleon</Label>
								<RadioItem id="Charmeleon" value="Charmeleon" />
							</ContainerInput>

							<ContainerInput className="items-center">
								<Label htmlFor="Charizard">Charizard</Label>
								<RadioItem id="Charizard" value="Charizard" />
							</ContainerInput>
						</RadioGroup>
						<Button onClick={() => setValue(null)}>{translate('CLEAR')}</Button>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('ERRORS')} variant="h2">
				<ComponentBlock>
					<div className="flex gap-2 items-center justify-center">
						<RadioGroup className="flex gap-2">
							<ContainerInput className="items-center">
								<Label htmlFor="Charmander_Error" isError={errorMode}>
									Charmander
								</Label>
								<RadioItem
									id="Charmander_Error"
									value="Charmander_Error"
									iserror={errorMode}
								/>
							</ContainerInput>

							<ContainerInput className="items-center">
								<Label htmlFor="Charmeleon_Error" isError={errorMode}>
									Charmeleon
								</Label>
								<RadioItem
									id="Charmeleon_Error"
									value="Charmeleon_Error"
									iserror={errorMode}
								/>
							</ContainerInput>

							<ContainerInput className="items-center">
								<Label htmlFor="Charizard_Error" isError={errorMode}>
									Charizard
								</Label>
								<RadioItem
									id="Charizard_Error"
									value="Charizard_Error"
									iserror={errorMode}
								/>
							</ContainerInput>
						</RadioGroup>
						<ContainerInput className="w-max items-center">
							<Label htmlFor="error_mode_checkbox">
								{translate('ERROR_MODE')}
							</Label>
							<Checkbox
								id="error_mode_checkbox"
								checked={errorMode}
								onCheckedChange={e => setErrorMode(e.target.value as boolean)}
							/>
						</ContainerInput>
					</div>
				</ComponentBlock>
			</Section>

			<Section title="Focus">
				<ComponentBlock className="flex-row !items-end">
					<RadioGroup className="flex gap-2">
						<ContainerInput className="items-center">
							<Label htmlFor="Charmander_Focus">Charmander</Label>
							<RadioItem
								id="Charmander_Focus"
								value="Charmander_Focus"
								ref={ref}
							/>
						</ContainerInput>

						<ContainerInput className="items-center">
							<Label htmlFor="Charmeleon_Focus">Charmeleon</Label>
							<RadioItem id="Charmeleon_Focus" value="Charmeleon_Focus" />
						</ContainerInput>

						<ContainerInput className="items-center">
							<Label htmlFor="Charizard_Focus">Charizard</Label>
							<RadioItem id="Charizard_Focus" value="Charizard_Focus" />
						</ContainerInput>
					</RadioGroup>
					<Button
						type="button"
						style={{ width: 173 }}
						onClick={() => ref.current?.focus()}
					>
						Focus
					</Button>
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
