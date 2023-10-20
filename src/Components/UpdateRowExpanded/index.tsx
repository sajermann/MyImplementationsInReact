import { ChangeEvent, FormEvent, useState } from 'react';

import { ROLES } from '~/Constants/Roles';
import { Button } from '~/Components/Button';
import { Checkbox } from '~/Components/Checkbox';
import { Datepicker } from '~/Components/Datepicker';
import { Input } from '~/Components/Input';
import { Select } from '~/Components/Select';

type Props = {
	row: any;
	onSave: (row: any, dataEdit: any) => void;
};
export function UpdateRowExpanded({ row, onSave }: Props) {
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
				<Input
					label="Nome"
					defaultValue={row.original.name}
					onChange={handleChange}
					id="name"
					containerProps={{ className: 'col-span-12 lg:col-span-3' }}
				/>
				<Input
					label="Sobrenome"
					defaultValue={row.original.lastName}
					onChange={handleChange}
					id="lastName"
					containerProps={{ className: 'col-span-12 lg:col-span-3' }}
				/>
				<Input
					label="Email"
					defaultValue={row.original.email}
					id="email"
					disabled
					containerProps={{ className: 'col-span-12 lg:col-span-3' }}
				/>
				<Datepicker
					label="Data Nascimento"
					id="birthday"
					name="birthday"
					customDefaultValue={new Date(row.original.birthday)}
					onChange={handleChange}
					containerProps={{ className: 'col-span-12 lg:col-span-3' }}
				/>
				<div className="col-span-12 lg:col-span-3">
					<Select
						label="Role"
						menuPosition="fixed"
						menuPortalTarget={document.body}
						defaultValue={
							ROLES.find(item => item.value === formData.role)?.value
						}
						options={ROLES}
						onChange={e => handleChange(e as ChangeEvent<HTMLInputElement>)}
						id="role"
					/>
				</div>

				<Checkbox
					defaultChecked={row.original.isActive}
					id="isActive"
					onCheckedChange={e =>
						handleChange(e as ChangeEvent<HTMLInputElement>)
					}
					label="Usuário Ativo"
					containerProps={{ className: 'col-span-12 lg:col-span-3' }}
				/>
				<div className="col-span-12 lg:col-span-3 flex items-end">
					<Button type="submit" variant="Default">
						Salvar
					</Button>
				</div>
				<div className="col-span-12 lg:col-span-3 flex items-end">
					<Button
						variant="Default"
						colorStyle="Secondary"
						onClick={row.getToggleExpandedHandler()}
					>
						Cancelar
					</Button>
				</div>
			</div>
		</form>
	);
}
