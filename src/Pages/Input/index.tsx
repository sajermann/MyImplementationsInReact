import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { Input } from '~/Components/Input';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export function InputPage() {
	const { translate } = useTranslation();

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
					<Input placeholder="Label" id="Label" label="Label" />
				</ComponentBlock>
			</Section>

			<Section subHeading="Label Props">
				<ComponentBlock>
					<Input
						placeholder="Label Props"
						labelProps={{
							children: 'Label Props',
							style: { color: 'yellow' },
							className: 'italic font-extrabold',
						}}
						id="Label Props"
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading="Container Props">
				<ComponentBlock>
					<Input
						placeholder="Container Props"
						id="Container Props"
						label="Container Props"
						containerProps={{
							style: {
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								border: '1px solid',
								width: 500,
							},
							className: 'p-5',
						}}
						labelProps={{
							style: {
								// textWrap: 'nowrap',
								whiteSpace: 'nowrap',
							},
						}}
					/>
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
		</Main>
	);
}
