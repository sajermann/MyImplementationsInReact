import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import 'react-day-picker/dist/style.css';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@radix-ui/react-popover';
import { Button } from '~/Components/Button';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Icons } from '~/Components/Icons';
import { Input } from '~/Components/Input';

const FormSchema = z.object({
	dob: z.date({
		required_error: 'A date of birth is required.',
	}),
});

export function ReactDayPicker() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log({ data });
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
			<Controller
				control={form.control}
				name="dob"
				render={({ field }) => (
					<div className="flex flex-col">
						{console.log({ field })}
						<span>Date of birth</span>
						<Popover>
							<PopoverTrigger>
								<Input
									{...field}
									className={managerClassNames(
										'w-[240px] pl-3 text-left font-normal'
									)}
								/>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0 border z-10" align="start">
								<DayPicker
									mode="single"
									selected={field.value}
									onSelect={field.onChange}
									disabled={date =>
										date > new Date() || date < new Date('1900-01-01')
									}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>
				)}
			/>
			<Button type="submit">Submit</Button>
		</form>
	);
}
