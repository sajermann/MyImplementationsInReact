import { useRef, useState } from 'react';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Chip, ColorStyle, Variant } from '~/Components/Chip';
import { Input } from '~/Components/Input';
import { Button } from '~/Components/Button';
import { utilsChip } from '~/Utils/Chips';
import { showInDevelopment } from '~/Utils/ShowInDevelopment';
import { ComponentBlock } from '~/Components/ComponentBlock';

export function ChipPage() {
	const { translate } = useTranslation();
	const [valueChip1, setValueChip1] = useState('React');
	const [chipToAdd, setChipToAdd] = useState('');
	const [chips, setChips] = useState<string[]>([]);
	const [valueYoutube, setValueYoutube] = useState('');
	const [chipsYoutube, setChipsYoutube] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	const VARIANTS = ['default', 'outlined', 'option'];
	const COLOR_STYLE = ['primary', 'secondary', 'success', 'warning', 'mono'];
	const VARIANTS_AND_COLOR_STYLE = [
		{ variant: 'default', colorStyle: undefined, value: 'Default' },
		{ variant: 'outlined', colorStyle: undefined, value: 'Outlined' },
		{ variant: 'option', colorStyle: undefined, value: 'Option' },
		{ variant: 'default', colorStyle: 'secondary', value: 'Default Secondary' },
		{
			variant: 'outlined',
			colorStyle: 'secondary',
			value: 'Outlined Secondary',
		},
		{ variant: 'option', colorStyle: 'secondary', value: 'Option Secondary' },
		{
			variant: 'default',
			colorStyle: 'success',
			value: 'Default Success',
		},
		{
			variant: 'outlined',
			colorStyle: 'success',
			value: 'Outlined Success',
		},
		{
			variant: 'option',
			colorStyle: 'success',
			value: 'Option Success',
		},
		{
			variant: 'default',
			colorStyle: 'warning',
			value: 'Default Warning',
		},
		{
			variant: 'outlined',
			colorStyle: 'warning',
			value: 'Outlined Warning',
		},
		{
			variant: 'option',
			colorStyle: 'warning',
			value: 'Option Warning',
		},
		{ variant: 'default', colorStyle: 'mono', value: 'Default Mono' },
		{ variant: 'outlined', colorStyle: 'mono', value: 'Outlined Mono' },
		{ variant: 'option', colorStyle: 'mono', value: 'Option Mono' },
	];

	return (
		<Main data-content="content-main">
			<Section title="Chip" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Chips ${translate(
					'WITHOUT_USING_LIB',
				)}`}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Chip" />
				</div>
			</Section>

			<Section title={translate('VARIANTS')} variant="h2">
				<ComponentBlock>
					{VARIANTS.map(variant => (
						<Chip
							key={variant}
							variant={variant as Variant}
							value={`${variant.at(0)?.toUpperCase()}${variant.substring(1)}`}
						/>
					))}
				</ComponentBlock>
			</Section>

			<Section title={translate('COLOR_STYLE')} variant="h2">
				<ComponentBlock>
					{COLOR_STYLE.map(variant => (
						<Chip
							key={variant}
							colorStyle={variant as ColorStyle}
							value={`${variant.at(0)?.toUpperCase()}${variant.substring(1)}`}
						/>
					))}
				</ComponentBlock>
			</Section>

			<Section title={translate('VARIANTS_AND_COLOR_STYLE')} variant="h2">
				<ComponentBlock>
					{VARIANTS_AND_COLOR_STYLE.map(variant => (
						<Chip
							key={variant.value}
							colorStyle={variant.colorStyle as ColorStyle}
							variant={variant.variant as Variant}
							value={variant.value}
						/>
					))}
				</ComponentBlock>
			</Section>

			<Section title={translate('CONTROLLED')} variant="h2">
				<Section title={translate('EDITABLE')} variant="h3">
					<ComponentBlock>
						<span className="w-full">
							{translate('EDITABLE_MODE_BY_CLICK')}
						</span>
						{VARIANTS_AND_COLOR_STYLE.map(variant => (
							<Chip
								key={variant.value}
								colorStyle={variant.colorStyle as ColorStyle}
								variant={variant.variant as Variant}
								value={valueChip1}
								onChange={(_, e) => setValueChip1(e)}
							/>
						))}
					</ComponentBlock>
				</Section>

				<Section title={translate('CRUD')} variant="h3">
					<ComponentBlock className="flex flex-col gap-2 items-center justify-center">
						<div className="flex gap-2">
							<Input
								{...showInDevelopment({ 'data-testid': 'input-add-chip' })}
								value={chipToAdd}
								onChange={e => setChipToAdd(e.target.value)}
								placeholder={translate('CHIP_DESCRIPTION')}
							/>
							<Button
								{...showInDevelopment({ 'data-testid': 'button-add-chip' })}
								onClick={() => {
									if (!chipToAdd) return;
									setChips(prev => [...prev, chipToAdd]);
									setChipToAdd('');
								}}
							>
								{translate('ADD')}
							</Button>
						</div>

						<div className="flex gap-2 flex-wrap">
							{chips.map(item => (
								<Chip
									{...showInDevelopment({
										'data-testid': `chip-editable-${item}`,
									})}
									variant="default"
									colorStyle="mono"
									key={item}
									value={item}
									onRemove={e =>
										setChips(prev =>
											prev.filter(chipToFilter => chipToFilter !== e),
										)
									}
									onChange={(oldValue, newValue) =>
										utilsChip.onChangeChip({ fn: setChips, newValue, oldValue })
									}
								/>
							))}
						</div>
					</ComponentBlock>
				</Section>

				<Section title={translate('BOX_CHIPS_LIKE_TAGS_YOUTUBE')} variant="h3">
					<div className="flex gap-2 items-center flex-wrap p-2 border bg-slate-900 rounded">
						{chipsYoutube.map(tag => (
							<Chip
								{...showInDevelopment({
									'data-testid': `chip-editable-${tag}`,
								})}
								key={tag}
								value={tag}
								onChange={(oldValue, newValue) =>
									utilsChip.onChangeChip({ fn: setChips, newValue, oldValue })
								}
								onRemove={chipToRemove => {
									setChipsYoutube(prev =>
										prev.filter(item => item !== chipToRemove),
									);
								}}
							/>
						))}

						<input
							{...showInDevelopment({ 'data-testid': 'input-youtube-like' })}
							className="p-2 outline-none overflow-hidden bg-slate-900 text-white flex-1 min-w-[30px]"
							ref={inputRef}
							value={valueYoutube}
							onChange={event => {
								setValueYoutube(event.target.value);
							}}
							onKeyDown={event =>
								utilsChip.keyDownYoutube({
									event,
									setChipsYoutube,
									setValueYoutube,
									valueYoutube,
								})
							}
							onBlur={() => {
								if (valueYoutube === '') return;
								setChipsYoutube(prev => [...prev, valueYoutube.trim()]);
								setValueYoutube('');
							}}
						/>
					</div>
				</Section>
			</Section>
		</Main>
	);
}
