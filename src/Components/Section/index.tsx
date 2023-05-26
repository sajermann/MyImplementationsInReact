import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

interface CustomHeadingProps {
	title: string;
	variant: 'h1' | 'h2' | 'h3';
}

const variantClassMap: Record<CustomHeadingProps['variant'], string> = {
	h1: 'text-3xl',
	h2: 'text-2xl',
	h3: 'text-xl',
};

function CustomHeading({ title, variant }: CustomHeadingProps) {
	const Tag = variant;

	return (
		<Tag data-tableofcontents="true" className={variantClassMap[variant]}>
			{title}
		</Tag>
	);
}

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
	heading?: string;
	subHeading?: string;
	title?: string;
	variant?: 'h1' | 'h2' | 'h3';
};

export default function Section({
	heading,
	subHeading,
	children,
	className,
	title,
	variant,
}: Props) {
	return (
		<section
			className={managerClassNames([
				{ 'flex flex-col gap-2 w-full': true },
				{ [className as string]: className },
			])}
		>
			{heading && (
				<h1 data-tableofcontents="true" className="text-2xl">
					{heading}
				</h1>
			)}
			{subHeading && (
				<h2 data-tableofcontents="true" className="text-xl">
					{subHeading}
				</h2>
			)}
			{title && variant && <CustomHeading title={title} variant={variant} />}
			<div>{children}</div>
		</section>
	);
}
