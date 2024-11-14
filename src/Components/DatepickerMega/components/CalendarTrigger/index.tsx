import { CalendarIcon } from 'lucide-react';
import { useDatepickerMega } from '../../hooks';

export default function CalendarTrigger() {
	const { setIsOpenCalendar } = useDatepickerMega();
	return (
		<button
			type="button"
			aria-label="icon:calendar"
			className="ring-0 outline-none flex items-center justify-center h-8 p-1"
			onClick={() => {
				console.log('click');
				setIsOpenCalendar(true);
			}}
		>
			<CalendarIcon />
		</button>
	);
}
