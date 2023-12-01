import { RadioGroup } from '@radix-ui/react-radio-group';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';
import { RadioItem } from '~/Components/Radio';

export function RadioDemo() {
	return (
		<RadioGroup className="flex gap-2">
			<ContainerInput className="items-center">
				<Label htmlFor="1">1</Label>
				<RadioItem id="1" value="1" />
			</ContainerInput>

			<ContainerInput className="items-center">
				<Label htmlFor="2">2</Label>
				<RadioItem
					id="2"
					value="2"
					itemProps={{
						className:
							'bg-blue-500 focus:ring-pink-500 focus:shadow-pink-500 group-hover:border-pink-500 focus:border-pink-500',
					}}
					indicatorProps={{
						className: 'after:bg-pink-500',
					}}
				/>
			</ContainerInput>

			<ContainerInput className="items-center">
				<Label htmlFor="3">3</Label>
				<RadioItem
					id="3"
					value="3"
					itemProps={{
						className:
							'bg-green-500 focus:ring-red-500 focus:shadow-red-500 group-hover:border-red-500 focus:border-red-500',
					}}
					indicatorProps={{
						className: 'after:bg-red-500',
					}}
				/>
			</ContainerInput>

			<ContainerInput className="items-center">
				<Label htmlFor="4">4</Label>
				<RadioItem
					id="4"
					value="4"
					itemProps={{
						className:
							'bg-red-500 focus:ring-white focus:shadow-white group-hover:border-white focus:border-white',
					}}
					indicatorProps={{
						className: 'after:bg-white',
					}}
				/>
			</ContainerInput>

			<ContainerInput className="items-center">
				<Label htmlFor="5">5</Label>
				<RadioItem
					id="5"
					value="5"
					itemProps={{
						className:
							'bg-black focus:ring-yellow-500 focus:shadow-yellow-500 group-hover:border-yellow-500 focus:border-yellow-500',
					}}
					indicatorProps={{
						className: 'after:bg-yellow-500',
					}}
				/>
			</ContainerInput>
		</RadioGroup>
	);
}
