import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { useVirtualizer } from '@tanstack/react-virtual';
import { forwardRef, LegacyRef, useEffect, useRef, useState } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { makeData } from '~/Utils/MakeData';
import { TChat } from '~/Types/TChat';

export const Chat = forwardRef(
	({ userAvatar, userName, message }: TChat, ref) => {
		const { translate } = useTranslation();
		return (
			<div
				ref={ref as LegacyRef<HTMLDivElement>}
				className="border"
				style={{
					width: '100%',
					// height: `${rows[virtualRow.index]}px`,
				}}
			>
				<div className="flex gap-2">
					<img src={userAvatar} alt={userName} className="w-10 rounded-full" />
					<span>
						{userName} {translate('SAY')}
					</span>
				</div>

				<div>{message}</div>
			</div>
		);
	}
);

// function Chat({ message, userAvatar, userName, ref }: TChat) {
// 	const { translate } = useTranslation();
// 	return (
// 		<div
// 			ref={ref}
// 			className="border"
// 			style={{
// 				width: '100%',
// 				// height: `${rows[virtualRow.index]}px`,
// 			}}
// 		>
// 			<div className="flex gap-2">
// 				<img src={userAvatar} alt={userName} className="w-10 rounded-full" />
// 				<span>
// 					{userName} {translate('SAY')}
// 				</span>
// 			</div>

// 			<div>{message}</div>
// 		</div>
// 	);
// }

function RowVirtualizerVariable() {
	const parentRef = useRef(null);
	const [chats, setchats] = useState(makeData.chat(40));
	const { translate } = useTranslation();
	<button type="button" onClick={() => console.log({ chats })}>
		Log
	</button>;

	function getRef(index: number) {
		return chats[index].ref;
	}

	const { getVirtualItems, getTotalSize } = useVirtualizer({
		count: chats.length,
		getScrollElement: () => parentRef.current,
		// eslint-disable-next-line arrow-body-style
		estimateSize: i => {
			return 40;
		},
		overscan: 5,
	});

	const paddingTop =
		getVirtualItems().length > 0 ? getVirtualItems()?.[0]?.start || 0 : 0;
	const paddingBottom =
		getVirtualItems().length > 0
			? getTotalSize() -
					(getVirtualItems()?.[getVirtualItems().length - 1]?.end || 0) || 0
			: 0;

	return (
		<>
			<button type="button" onClick={() => console.log({ chats })}>
				Log
			</button>

			<div
				ref={parentRef}
				className={managerClassNames({
					'scrollbar-thin overflow-auto max-h-[50vh] p-2': true,
					'scrollbar-thumb-gray-500': true,
					'scrollbar-track-gray-300': true,
					'scrollbar-thumb-rounded-full': true,
					'scrollbar-track-rounded-full': true,
				})}
			>
				{paddingTop > 0 && <div style={{ height: `${paddingTop}px` }} />}

				{getVirtualItems().map(virtualRow => (
					<Chat
						ref={chats[virtualRow.index].ref}
						key={virtualRow.index}
						{...chats[virtualRow.index]}
					/>
				))}

				{paddingBottom > 0 && <div style={{ height: `${paddingBottom}px` }} />}
			</div>
		</>
	);
}

export function VirtualizationPage() {
	const { translate } = useTranslation();
	return (
		<Main data-content="content-main">
			<Section title={translate('VIRTUALIZATION')} variant="h1">
				{translate('IMPLEMENTS_VIRTUALIZATION')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="Animate In View" />
				</div>
			</Section>
			<Section title="Chat" variant="h2">
				<RowVirtualizerVariable />
			</Section>
		</Main>
	);
}
