import { useRef, useState } from 'react';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Chip } from '~/Components/Chip';
import { Input } from '~/Components/Input';
import { Button } from '~/Components/Button';
import { utilsChip } from '~/Utils/Chips';
import { testIdOnlyDev } from '~/Utils/ShowInDevelopment';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { ColorStyle, Variant } from '~/Components/Chip/types';

export function ChipPage() {
	const { translate } = useTranslation();
	const [valueChip1, setValueChip1] = useState('React');
	const [chipToAdd, setChipToAdd] = useState('');
	const [chips, setChips] = useState<string[]>([]);
	const [valueYoutube, setValueYoutube] = useState('');
	const [chipYoutube, setChipYoutube] = useState<string>(`Youtube`);
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

			<Section title={translate('CUSTOMIZATIONS')} variant="h3">
				<ComponentBlock>
					<Chip
						noUpdatingContainerProps={{
							className:
								'rounded-3xl bg-pink-500 border-2 border-pink-700 hover:opacity-80 transition-all duration-500',
						}}
						value="Chip 1"
					/>
					{chipYoutube && (
						<Chip
							noUpdatingContainerProps={{
								...testIdOnlyDev(`chip-youtube`),
								className: 'h-7 bg-zinc-900 border-0 hover:bg-zinc-800',
							}}
							updatingInputProps={{
								...testIdOnlyDev(`input-for-update-youtube`),
								className: 'h-7 bg-zinc-900 border-2 border-white',
							}}
							actionButtonProps={{
								...testIdOnlyDev(`action-button-youtube`),
							}}
							value={chipYoutube}
							onChange={(_, e) => setChipYoutube(e)}
							onRemove={() => {
								setChipYoutube('');
							}}
						/>
					)}

					<Chip
						noUpdatingContainerProps={{
							className:
								'rounded-3xl bg-orange-500 text-yellow-500 border-0 hover:opacity-80 transition-all duration-500 max-w-96 overflow-hidden p-10',
						}}
						noUpdatingDescriptionProps={{
							className: 'text-2xl truncate text-',
						}}
						value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cumque autem sapiente dolore quis voluptatibus aspernatur soluta odit ipsam asperiores? Beatae doloribus aperiam eius qui veniam ut laboriosam maiores laborum!"
					/>
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
								{...testIdOnlyDev('input-add-chip')}
								value={chipToAdd}
								onChange={e => setChipToAdd(e.target.value)}
								placeholder={translate('CHIP_DESCRIPTION')}
							/>
							<Button
								{...testIdOnlyDev('button-add-chip')}
								onClick={() => {
									console.log('clicou', { chipToAdd });
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
									noUpdatingContainerProps={{
										...testIdOnlyDev(`chip-${item}`),
									}}
									updatingInputProps={{
										...testIdOnlyDev(`input-for-update-${item}`),
									}}
									actionButtonProps={{
										...testIdOnlyDev(`action-button-${item}`),
									}}
									variant="outlined"
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
					<ComponentBlock>
						<div className="flex gap-2 items-center flex-wrap p-2 border bg-slate-900 rounded w-full">
							{chipsYoutube.map(tag => (
								<Chip
									noUpdatingContainerProps={{
										...testIdOnlyDev(`chip-${tag}`),
									}}
									updatingInputProps={{
										...testIdOnlyDev(`input-for-update-${tag}`),
									}}
									actionButtonProps={{
										...testIdOnlyDev(`action-button-${tag}`),
									}}
									key={tag}
									value={tag}
									onChange={(oldValue, newValue) => {
										console.log({ oldValue, newValue });
										utilsChip.onChangeChip({
											fn: setChipsYoutube,
											newValue,
											oldValue,
										});
									}}
									onRemove={chipToRemove => {
										setChipsYoutube(prev =>
											prev.filter(item => item !== chipToRemove),
										);
									}}
								/>
							))}

							<input
								{...testIdOnlyDev('input-youtube-like')}
								className="p-2 outline-none overflow-hidden bg-slate-900 text-white flex-1 min-w-[30px]"
								ref={inputRef}
								value={valueYoutube}
								placeholder={translate('ADD_CHIPS')}
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
					</ComponentBlock>
				</Section>
			</Section>
		</Main>
	);
}
