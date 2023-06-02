import { Carousel } from '~/Components/Carousel';

export function CarouselDemo() {
	return (
		<Carousel>
			<div className="bg-blue-500 w-full h-[190px] flex items-center justify-center">
				<p className="text-7xl">1</p>
			</div>
			<div className="bg-green-500 w-full h-[190px] flex items-center justify-center">
				<p className="text-7xl">2</p>
			</div>
			<div className="bg-red-500 w-full h-[190px] flex items-center justify-center">
				<p className="text-7xl">3</p>
			</div>
		</Carousel>
	);
}
