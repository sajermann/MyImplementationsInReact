import {
	Dispatch,
	SetStateAction,
	useRef,
	useState,
	KeyboardEvent,
} from 'react';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Chip } from '~/Components/Chip';
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

type KeyDownYoutubeProps = {
	event: KeyboardEvent<HTMLInputElement>;
	valueYoutube: string;
	setChipsYoutube: Dispatch<SetStateAction<string[]>>;
	setValueYoutube: Dispatch<SetStateAction<string>>;
};
function keyDownYoutube({
	event,
	valueYoutube,
	setChipsYoutube,
	setValueYoutube,
}: KeyDownYoutubeProps) {
	if (event.key === 'Backspace' && valueYoutube.trim() === '') {
		console.log('TODO: Ativar Edição Por Backspace');
	}
	if (
		(event.key === ',' || event.key === 'Enter') &&
		valueYoutube.trim() !== ''
	) {
		event.preventDefault();
		setChipsYoutube(prev => [...prev, valueYoutube.trim()]);
		setValueYoutube('');
	}
}

export function ChipPage() {
	const { translate } = useTranslation();
	const [valueChip1, setValueChip1] = useState('React');
	const [chipToAdd, setChipToAdd] = useState('');
	const [chips, setChips] = useState<string[]>([]);
	const [valueYoutube, setValueYoutube] = useState('');
	const [chipsYoutube, setChipsYoutube] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<Main data-content="content-main">
			<Section title="Chip" variant="h1">
				{translate('IMPLEMENTS_CHIP')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
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
				<Section title={translate('EDITABLE')} variant="h3">
					<span>{translate('EDITABLE_MODE_BY_CLICK')}</span>
					<Chip value={valueChip1} onChange={(_, e) => setValueChip1(e)} />
				</Section>

				<Section title={translate('CRUD')} variant="h3">
					<div className="flex gap-2 items-center justify-center mb-2">
						<Input
							value={chipToAdd}
							onChange={e => setChipToAdd(e.target.value)}
							placeholder={translate('CHIP_DESCRIPTION')}
						/>
						<Button
							onClick={() => {
								handleAddChip(chipToAdd, setChips, setChipToAdd);
							}}
						>
							{translate('ADD')}
						</Button>
					</div>
					<div className="flex gap-2 flex-wrap">
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

				<Section title={translate('BOX_CHIPS_LIKE_TAGS_YOUTUBE')} variant="h3">
					<div className="flex gap-2 items-center flex-wrap p-2 border bg-slate-900 rounded">
						{chipsYoutube.map(tag => (
							<Chip
								key={tag}
								value={tag}
								onChange={(oldValue, newValue) =>
									handleUpdateChip(oldValue, newValue, setChipsYoutube)
								}
								onRemove={e => handleRemoveChip(e, setChipsYoutube)}
							/>
						))}

						<input
							className="p-2 outline-none overflow-hidden bg-slate-900 text-white flex-1 min-w-[30px]"
							ref={inputRef}
							value={valueYoutube}
							onChange={event => {
								setValueYoutube(event.target.value);
							}}
							onKeyDown={event =>
								keyDownYoutube({
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
