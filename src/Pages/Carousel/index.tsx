import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Carousel } from '~/Components/Carousel';

export function CarouselPage() {
	const { translate } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section heading="Carousel">
				{`${translate('IMPLEMENTS_COMPONENT')} Carousel ${translate(
					'USING_THE_LIB'
				)} nuka-carousel`}
			</Section>
			<Section subHeading={translate('INSTALLATION_OF_LIB')}>
				<CodeBlock>npm i nuka-carousel;</CodeBlock>
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Carousel" />
				</div>
			</Section>

			<Section subHeading="Carousel">
				<ComponentBlock>
					<Carousel>
						<div className="bg-blue-500 w-full h-[500px] flex items-center justify-center">
							<p className="text-7xl">1</p>
						</div>
						<div className="bg-green-500 w-full h-[500px] flex items-center justify-center">
							<p className="text-7xl">2</p>
						</div>
						<div className="bg-red-500 w-full h-[500px] flex items-center justify-center">
							<p className="text-7xl">3</p>
						</div>
					</Carousel>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
