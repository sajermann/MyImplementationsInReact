import { TBrawler } from '~/Types/TBrawler';
import { managerClassNames } from '~/Utils/ManagerClassNames';

export function AvatarBrawler({ image, name, rarity }: TBrawler) {
	return (
		<div
			className={managerClassNames(
				'w-20 flex flex-col justify-center p-2 border-2 rounded',
				{ 'bg-[#8deaff]': rarity === 'Common' },
				{ 'bg-[#68fd58]': rarity === 'Rare' },
				{ 'bg-[#5ab3ff]': rarity === 'Super Rare' },
				{ 'bg-[#d850ff]': rarity === 'Epic' },
				{ 'bg-[#fe5e72]': rarity === 'Mythic' },
				{ 'bg-[#fff11e]': rarity === 'Legendary' },
			)}
		>
			<div className="w-full flex justify-center">
				<img src={image} alt={name} className="rounded-full w-10" />
			</div>
			<span className="font-bold truncate text-center">{name}</span>
		</div>
	);
}
