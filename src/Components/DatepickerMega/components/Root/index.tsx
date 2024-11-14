import { ReactNode } from 'react';
import { DatepickerMegaProvider } from '../../hooks';
import { TDate } from '../../types';
import { Container } from '../Container';

type TProps = {
	defaultDate?: Date;
	onChange?: (data: TDate) => void;
	children: ReactNode;
};

export default function Root({ children, defaultDate, onChange }: TProps) {
	return (
		<DatepickerMegaProvider defaultDate={defaultDate} onChange={onChange}>
			<Container>{children}</Container>
		</DatepickerMegaProvider>
	);
}
