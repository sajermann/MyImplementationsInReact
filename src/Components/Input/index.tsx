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
				className: `flex w-full flex-col ${props.containerProps?.className}`,
			}}
			className={`w-full py-1 px-2 rounded-md border dark:text-black ${
				props.className ? props.className : ''
			}`}
		/>
	);
}

export { Input };
