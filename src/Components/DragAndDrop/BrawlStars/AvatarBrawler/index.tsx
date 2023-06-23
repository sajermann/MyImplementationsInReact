import { TBrawler } from '~/Types/TBrawler';

export function AvatarBrawler({ image, name }: TBrawler) {
	return (
		<div className="w-20 flex flex-col items-center justify-center border rounded-sm p-2">
			<img src={image} alt={name} className="rounded-full w-10" />
			<span className="font-bold">{name}</span>
		</div>
	);
}
