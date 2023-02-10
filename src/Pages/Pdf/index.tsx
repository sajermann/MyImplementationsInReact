/* eslint-disable new-cap */
import { useCallback, useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { WarningInfo } from '~/Components/WarningInfo';

export function PdfPage() {
	const ref = useRef<HTMLDivElement>(null);
	const { translate } = useTranslation();
	const { columns } = useColumns();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hide] = useState<Record<string, boolean>>({
		id: true,
		avatar: true,
		name: true,
		lastName: true,
		birthday: true,
		email: true,
		role: true,
		isActive: true,
	});

	async function load() {
		setIsLoading(true);
		setData(makeData.person(200));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	const onButtonClick = useCallback(() => {
		if (ref.current === null) {
			return;
		}

		toPng(ref.current, { cacheBust: true })
			.then(dataUrl => {
				const pdf = new jsPDF({
					orientation: 'p',
					unit: 'mm',
					format: 'a4',
					putOnlyUsedFonts: true,
					floatPrecision: 16, // or "smart", default is 16
				});
				pdf.addImage(dataUrl, 'PNG', 0, 0, 0, 0, 'batata');
				pdf.addPage();
				pdf.addImage(dataUrl, 'PNG', 0, 0, 0, 0, 'batata');
				pdf.save('download.pdf');
			})
			.catch(err => {
				console.log(err);
			});
	}, [ref]);

	return (
		<Main data-content="content-main">
			<WarningInfo
				type="warning"
				msg={translate('IMPLEMENTS_UNDER_CONSTRUCTION')}
			/>
			<Section heading={translate('PDF')}>
				{translate('IMPLEMENTS_PDF_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Virtualized" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<div className="flex flex-col gap-2">
					<Button type="button" onClick={onButtonClick}>
						Exportar
					</Button>

					<div ref={ref} id="myPage">
						<Table
							height="100%"
							minHeight="100%"
							maxHeight="100%"
							isLoading={isLoading}
							columns={[...columns]}
							data={data}
							disabledVirtualization
							columnVisibility={hide}
						/>
					</div>
				</div>
			</Section>
		</Main>
	);
}
