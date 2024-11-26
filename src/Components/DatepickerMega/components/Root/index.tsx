import { ReactNode } from 'react';
import { DatepickerMegaProvider } from '../../hooks';
import { TDate } from '../../types';
import { Container } from '../Container';

type TProps = {
	defaultDate?: Date;
	onChange?: (data: TDate) => void;
	children: ReactNode;
	isAmPm?: boolean;
};

export default function Root({
	children,
	defaultDate,
	onChange,
	isAmPm,
}: TProps) {
	return (
		<DatepickerMegaProvider
			defaultDate={defaultDate}
			onChange={onChange}
			isAmPm={isAmPm}
		>
			<Container>{children}</Container>
		</DatepickerMegaProvider>
	);
}
