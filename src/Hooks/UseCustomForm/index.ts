import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type Props = {
	onSubmitForm: (data: any) => void;
};

export function useCustomForm({ onSubmitForm }: Props) {
	const formSchema = z.object({
		title: z.string(),
		createdAt: z.string().optional(),
		status: z.string().optional(),
	});

	type FormData = z.infer<typeof formSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
		reset,
		control,
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const handleSearch: SubmitHandler<FormData> = async data => {
		formSchema.parse({ ...data });
		onSubmitForm(data);
	};

	const memoizedValue = useMemo(
		() => ({
			handleSubmit: handleSubmit(handleSearch),
			register,
			errors,
			setValue,
			getValues,
			reset,
			control,
		}),
		[errors]
	);
	return memoizedValue;
}
