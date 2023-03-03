type Props = {
	heading?: string;
	subHeading?: string;
	children: React.ReactNode;
};

export default function Section({ heading, subHeading, children }: Props) {
	return (
		<section className="flex flex-col gap-2 w-full">
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
			<div>{children}</div>
		</section>
	);
}
