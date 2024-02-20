import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Section } from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Carousel } from '~/Components/Carousel';

export function CarouselPage() {
	const { translate } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section title="Carousel" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Carousel ${translate(
					'USING_THE_LIB'
				)} nuka-carousel`}
			</Section>
			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i nuka-carousel;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Carousel" />
				</div>
			</Section>

			<Section title="Carousel" variant="h2">
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
