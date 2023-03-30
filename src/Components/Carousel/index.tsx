import NukaCarousel from 'nuka-carousel';
import './index.css';

type Props = {
	children: React.ReactNode;
};

export function Carousel({ children }: Props) {
	return (
		<NukaCarousel
			autoplay
			wrapAround
			pauseOnHover
			defaultControlsConfig={{
				nextButtonClassName: 'hidden',
				prevButtonClassName: 'hidden',
				pagingDotsContainerClassName: 'flex gap-2',
				pagingDotsStyle: {
					fill: 'red',
				},
			}}
		>
			{children}
		</NukaCarousel>
	);
}
