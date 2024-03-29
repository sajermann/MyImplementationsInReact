import { ReactInstance, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { delay } from '@sajermann/utils/Delay';

export function usePrinter() {
	const [isPrinting, setIsPrinting] = useState(false);
	const componentRef = useRef<HTMLDivElement>();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current as ReactInstance,
		onAfterPrint: () => setIsPrinting(false),
		pageStyle: `
		@media print {
			@page {
				margin: 10mm 0mm 10mm 0mm !important;
			}
		}`,
	});

	async function handlePreparePrint() {
		setIsPrinting(true);
		await delay(1);
		handlePrint();
	}
	return {
		isPrinting,
		setIsPrinting,
		handlePreparePrint,
		componentRef,
	};
}
