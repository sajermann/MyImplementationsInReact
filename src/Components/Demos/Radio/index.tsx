import { RadioGroup } from '@radix-ui/react-radio-group';
import { RadioItem } from '~/Components/Radio';

export function RadioDemo() {
	return (
		<RadioGroup className="flex gap-2">
			<RadioItem id="1" value="1" label="1" />
			<RadioItem
				id="2"
				value="2"
				label="2"
				itemProps={{
					className: '!bg-primary-500 focus:!shadow-white',
				}}
				indicatorProps={{
					className: 'after:!bg-white',
				}}
			/>
			<RadioItem
				id="3"
				value="3"
				label="3"
				itemProps={{
					className: '!bg-green-500 focus:!shadow-white',
				}}
				indicatorProps={{
					className: 'after:!bg-white',
				}}
			/>
			<RadioItem
				id="4"
				value="4"
				label="4"
				itemProps={{
					className: '!bg-red-500 focus:!shadow-white',
				}}
				indicatorProps={{
					className: 'after:!bg-white',
				}}
			/>
			<RadioItem
				id="5"
				value="5"
				label="5"
				itemProps={{
					className: '!bg-black focus:!shadow-yellow-500',
				}}
				indicatorProps={{
					className: 'after:!bg-yellow-500',
				}}
			/>
		</RadioGroup>
	);
}
