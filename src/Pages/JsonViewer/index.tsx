import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Section } from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { JsonViewer } from '~/Components/JsonViewer';
import { makeData } from '~/Utils/MakeData';
import { useForm } from 'react-hook-form';
import { Input } from '~/Components/Input';
import { useState } from 'react';
import { Button } from '~/Components/Button';

const data = makeData.person(5);

export function JsonViewerPage() {
	const { translate } = useTranslation();
	const [, setRefreshKey] = useState(1);
	const { register, handleSubmit, getValues } = useForm<{
		name: string;
		lastName: string;
	}>();

	console.log(getValues());
	return (
		<Main data-content="content-main">
			<Section title={translate('JSON_VIEWER')} variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate(
					'JSON_VIEWER',
				)} ${translate('WITHOUT_USING_LIB')}`}
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Json Viewer" />
				</div>
			</Section>

			<Section title={translate('FORM')} variant="h2">
				<ComponentBlock className="!justify-start">
					<form
						className="flex w-full gap-2"
						onSubmit={handleSubmit(() => {
							setRefreshKey(prev => prev + 1);
						})}
					>
						<Input placeholder={translate('NAME')} {...register('name')} />
						<Input
							placeholder={translate('LAST_NAME')}
							{...register('lastName')}
						/>
						<Button type="submit">Submit</Button>
					</form>
					<JsonViewer value={getValues()} />
				</ComponentBlock>
			</Section>

			<Section title={translate('DATA')} variant="h2">
				<ComponentBlock className=" w-full !justify-start">
					<JsonViewer value={data} />
				</ComponentBlock>
			</Section>
		</Main>
	);
}
