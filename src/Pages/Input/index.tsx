import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { Input } from '~/Components/Input';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { useState } from 'react';
import { Checkbox } from '~/Components/Checkbox';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';
import { ErrorsInput } from '~/Components/ErrorsInput';

export function InputPage() {
	const { translate } = useTranslation();
	const [errorMode, setErrorMode] = useState(false);

	function addMessage(valor: string) {
		const result = valor.replace('Very Good - ', '');
		return `Very Good - ${result}`;
	}

	return (
		<Main data-content="content-main">
			<Section heading={translate('INPUT')}>
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate(
					'INPUT'
				)} ${translate('USING_THE_MY_SELF_LIB')} @sajermann/react-input.`}
			</Section>
			<Section subHeading={translate('INSTALLATION_OF_LIB')}>
				<CodeBlock>npm i @sajermann/react-input;</CodeBlock>
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Input" />
				</div>
			</Section>

			<Section subHeading={translate('TRADICIONAL_INPUT')}>
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="label">{translate('TRADICIONAL_INPUT')}</Label>
						<Input placeholder={translate('TRADICIONAL_INPUT')} id="label" />
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section subHeading="Label Props">
				<ComponentBlock>
					<ContainerInput>
						<Label
							htmlFor="labelProps"
							className="text-yellow-500 italic font-extrabold"
						>
							Label Props
						</Label>
						<Input placeholder="Label Props" id="labelProps" />
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section subHeading="Container Props">
				<ComponentBlock>
					<ContainerInput
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							border: '1px solid',
							width: 500,
						}}
						className="p-5"
					>
						<Label htmlFor="containerProps" style={{ whiteSpace: 'nowrap' }}>
							Container Props
						</Label>
						<Input placeholder="Container Props" id="containerProps" />
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section subHeading="On Change">
				<ComponentBlock>
					<Input
						placeholder={translate('ON_CHANGE_LOOK_CONSOLE')}
						onChange={console.log}
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading="On Before Change">
				<ComponentBlock>
					<Input
						placeholder={translate('REMOVE_NUMBERS')}
						onBeforeChange={{ removeNumber: true }}
					/>

					<Input
						placeholder={translate('REMOVE_ALL_LETTERS')}
						onBeforeChange={{ removeLowerCase: true, removeUpperCase: true }}
					/>

					<Input
						placeholder={translate('REMOVE_ONLY_UPPER_CASE')}
						onBeforeChange={{ removeUpperCase: true }}
					/>

					<Input
						placeholder={translate('REMOVE_ONLY_LOWER_CASE')}
						onBeforeChange={{ removeLowerCase: true }}
					/>

					<Input
						placeholder={translate('REMOVE_SPECIAL_CHARACTERS')}
						onBeforeChange={{ removeSpecialCharacter: true }}
					/>

					<Input
						placeholder={translate('REMOVE_NUMBERS_FROM_1_TO_5')}
						onBeforeChange={{ regexForReplace: /[1-5]/g }}
					/>

					<Input
						placeholder={translate('ADD_MESSAGE_BEFORE_CHANGE')}
						onChange={console.log}
						onBeforeChange={{
							fn: e => {
								const temp = { ...e };

								temp.target.value = addMessage(temp.target.value);

								return temp;
							},
						}}
					/>

					<Input
						placeholder={`${translate('APLY_MASK')} - ${translate('CURRENCY')}`}
						onBeforeChange={{
							applyMask: {
								currency: {
									decimalPlace: 2,
								},
							},
						}}
					/>

					<Input
						placeholder={`${translate('APLY_MASK')} - ${translate('CNPJ')}`}
						onBeforeChange={{
							applyMask: {
								cnpj: true,
							},
						}}
					/>

					<Input
						placeholder={`${translate('APLY_MASK')} - ${translate('CPF')}`}
						onBeforeChange={{
							applyMask: {
								cpf: true,
							},
						}}
					/>

					<Input
						placeholder={`${translate('APLY_MASK')} - ${translate('ZIP_CODE')}`}
						onBeforeChange={{
							applyMask: {
								cep: true,
							},
						}}
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading="Debounce">
				<ComponentBlock>
					<Input
						placeholder={translate('DEBOUNCE_2_SECONDS')}
						onChange={console.log}
						debounce={2000}
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('ERRORS')}>
				<ComponentBlock className="flex-row !items-start">
					<ContainerInput className="flex-1">
						<Label htmlFor="errorMode" isError={errorMode}>
							{translate('ERROR_MODE')}
						</Label>
						<Input
							placeholder={translate('ERROR_MODE')}
							id="errorMode"
							iserror={errorMode}
						/>
						<ErrorsInput
							errors={
								errorMode ? ['Required', 'Invalid email adress'] : undefined
							}
						/>
					</ContainerInput>
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
				</ComponentBlock>
			</Section>
		</Main>
	);
}
