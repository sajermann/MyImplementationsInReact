import { useRef, useState } from 'react';
import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Section } from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Checkbox } from '~/Components/Checkbox';
import { Icons } from '~/Components/Icons';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';
import { ErrorsInput } from '~/Components/ErrorsInput';
import { Button } from '~/Components/Button';

export function CheckboxPage() {
	const { translate } = useTranslation();
	const [checked, setChecked] = useState(false);
	const [errorMode, setErrorMode] = useState(false);
	const ref = useRef<HTMLButtonElement>(null);

	return (
		<Main data-content="content-main">
			<Section title="Checkbox" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Checkbox ${translate(
					'USING_THE_LIB',
				)} @radix-ui/react-checkbox`}
			</Section>

			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i @radix-ui/react-checkbox;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Checkbox" />
				</div>
			</Section>

			<Section title="Normal" variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<ContainerInput className="flex-row items-center">
							<Label htmlFor="checkbox2">Checkbox</Label>
							<Checkbox id="checkbox2" />
						</ContainerInput>

						<ContainerInput className="items-center">
							<Label htmlFor="checkbox">Checkbox</Label>
							<Checkbox id="checkbox" />
						</ContainerInput>

						<ContainerInput className="flex-col-reverse items-center">
							<Label htmlFor="checkbox1">Checkbox</Label>
							<Checkbox id="checkbox1" />
						</ContainerInput>

						<ContainerInput className="flex-row-reverse items-center">
							<Label htmlFor="checkbox3">Checkbox</Label>
							<Checkbox id="checkbox3" />
						</ContainerInput>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('ICONS')} variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<ContainerInput className="items-center">
							<Label htmlFor="checkbox4">Checkbox</Label>
							<Checkbox
								id="checkbox4"
								checkedIcon={<Icons nameIcon="checkCircle" />}
							/>
						</ContainerInput>

						<ContainerInput className="items-center">
							<Label htmlFor="checkbox5">Checkbox</Label>
							<Checkbox
								id="checkbox5"
								defaultChecked="indeterminate"
								indeterminateIcon={<Icons nameIcon="question" />}
							/>
						</ContainerInput>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('COLORS')} variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<ContainerInput className="w-36 items-center">
							<Label htmlFor="checkbox6">{translate('COMBINES_COLORS')}</Label>
							<Checkbox
								checked={checked}
								onCheckedChange={e => setChecked(Boolean(e.target.value))}
								id="checkbox6"
								className={managerClassNames([
									{ '!bg-red-900': checked },
									{ '!bg-pink-500': !checked },
								])}
								checkedIcon={
									<Icons nameIcon="checked" className="text-yellow-500" />
								}
							/>
						</ContainerInput>

						<ContainerInput className="w-36 items-center">
							<Label htmlFor="checkbox7">{translate('FIXED_COLOR')}</Label>
							<Checkbox id="checkbox7" className="!bg-green-500" />
						</ContainerInput>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('CONTROLLED')} variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<ContainerInput className="items-center">
							<Label htmlFor="controlleds1">Checkbox</Label>
							<Checkbox
								checked={checked}
								onCheckedChange={e => setChecked(Boolean(e.target.value))}
								id="controlleds1"
							/>
						</ContainerInput>

						<ContainerInput className="items-center">
							<Label htmlFor="controlleds2">Checkbox</Label>
							<Checkbox
								checked={checked}
								onCheckedChange={e => setChecked(Boolean(e.target.value))}
								id="controlleds2"
							/>
						</ContainerInput>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('ERRORS')}>
				<ComponentBlock className="flex-row !items-start">
					<ContainerInput className="w-24 items-center">
						<Label htmlFor="errors" isError={errorMode}>
							{translate('ERROR_MODE')}
						</Label>
						<Checkbox id="errors" iserror={errorMode} />
						<ErrorsInput errors={errorMode ? ['Required'] : undefined} />
					</ContainerInput>
					<ContainerInput className="w-24 items-center">
						<Label htmlFor="error_mode_checkbox">
							{translate('ERROR_MODE')}
						</Label>
						<Checkbox
							id="error_mode_checkbox"
							checked={errorMode}
							onCheckedChange={e => setErrorMode(e.target.value as boolean)}
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title="Focus">
				<ComponentBlock className="flex-row !items-end">
					<ContainerInput className="w-24 items-center">
						<Label htmlFor="focus">Ref - Focus</Label>
						<Checkbox id="focus" ref={ref} />
					</ContainerInput>
					<Button
						type="button"
						style={{ width: 173 }}
						onClick={() => ref.current?.focus()}
					>
						Focus
					</Button>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
