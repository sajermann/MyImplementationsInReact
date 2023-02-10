import {
	ISajermannReactInput,
	Input as InputSajermann,
} from '@sajermann/react-input';

type Props = ISajermannReactInput;

function Input({ ...props }: Props) {
	return (
		<InputSajermann
			{...props}
			containerProps={{
				className: `flex w-full flex-col gap-2 ${props.containerProps?.className}`,
			}}
			className={`w-full h-11 py-1 px-2 rounded-md border dark:text-black ${
				props.className ? props.className : ''
			}`}
		/>
	);
}

export { Input };
