import { ChangeEvent, FormEvent, useState } from 'react';

import { ROLES } from '~/Constants/Roles';
import { Button } from '~/Components/Button';
import { Checkbox } from '~/Components/Checkbox';
import { Datepicker } from '~/Components/Datepicker';
import { Input } from '~/Components/Input';
import { Select } from '~/Components/Select';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ContainerInput } from '../ContainerInput';
import { Label } from '../Label';

type Props = {
	row: any;
	onSave: (row: any, dataEdit: any) => void;
};
export function UpdateRowExpanded({ row, onSave }: Props) {
	const { translate } = useTranslation();
	const [formData, setFormData] = useState({
		name: row.original.name,
		lastName: row.original.lastName,
		birthday: row.original.birthday,
		isActive: row.original.isActive,
		role: row.original.role,
	});

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});
	}

	function handleSave(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		onSave(row, formData);
	}

	return (
		<form
			onSubmit={handleSave}
			className="bg-green-500 p-2 flex flex-col gap-2 "
		>
			<div className="grid grid-cols-12 gap-6">
				<ContainerInput className="col-span-12 lg:col-span-3">
					<Label htmlFor="name">{translate('NAME')}</Label>
					<Input
						defaultValue={row.original.name}
						onChange={handleChange}
						id="name"
					/>
				</ContainerInput>

				<ContainerInput className="col-span-12 lg:col-span-3">
					<Label htmlFor="lastName">{translate('LAST_NAME')}</Label>
					<Input
						defaultValue={row.original.lastName}
						onChange={handleChange}
						id="lastName"
					/>
				</ContainerInput>

				<ContainerInput className="col-span-12 lg:col-span-3">
					<Label htmlFor="email">Email</Label>
					<Input defaultValue={row.original.email} id="email" disabled />
				</ContainerInput>

				<ContainerInput className="col-span-12 lg:col-span-3">
					<Label htmlFor="birthday">{translate('BIRTHDAY')}</Label>
					<Datepicker
						id="birthday"
						name="birthday"
						customDefaultValue={new Date(row.original.birthday)}
						onChange={handleChange}
					/>
				</ContainerInput>

				<ContainerInput className="col-span-12 lg:col-span-3">
					<Label htmlFor="role">{translate('ROLE')}</Label>
					<Select
						menuPosition="fixed"
						menuPortalTarget={document.body}
						defaultValue={
							ROLES.find(item => item.value === formData.role)?.value
						}
						options={ROLES}
						onChange={e => handleChange(e as ChangeEvent<HTMLInputElement>)}
						id="role"
					/>
				</ContainerInput>

				<ContainerInput className="col-span-12 lg:col-span-3 items-center">
					<Label htmlFor="isActive">{translate('ACTIVE_USER')}</Label>
					<Checkbox
						defaultChecked={row.original.isActive}
						id="isActive"
						onCheckedChange={e =>
							handleChange(e as ChangeEvent<HTMLInputElement>)
						}
					/>
				</ContainerInput>

				<div className="col-span-12 lg:col-span-3 flex items-end">
					<Button variant="outlined" onClick={row.getToggleExpandedHandler()}>
						{translate('CANCEL')}
					</Button>
				</div>

				<div className="col-span-12 lg:col-span-3 flex items-end">
					<Button type="submit">{translate('SAVE')}</Button>
				</div>
			</div>
		</form>
	);
}
