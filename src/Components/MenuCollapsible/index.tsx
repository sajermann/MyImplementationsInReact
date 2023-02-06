import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import { clsx } from 'clsx';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface CollapsibleProps {
	pathChilds?: string[];

	children: React.ReactNode;
	trigger: (data: boolean) => React.ReactNode;
}

export function MenuCollapsible({
	pathChilds,
	children,
	trigger,
}: CollapsibleProps) {
	const [isOpen, setIsOpen] = React.useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsOpen(pathChilds?.includes(location.pathname) || false);
	}, []);

	return (
		<CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
			<CollapsiblePrimitive.Trigger
				className={clsx({
					'w-full flex': true,
				})}
			>
				{trigger(isOpen)}
			</CollapsiblePrimitive.Trigger>
			<CollapsiblePrimitive.Content className="flex flex-col p-2">
				{children}
			</CollapsiblePrimitive.Content>
		</CollapsiblePrimitive.Root>
	);
}
