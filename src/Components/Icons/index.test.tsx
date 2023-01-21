/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Icons } from './index';

describe('Components/Icons', () => {
	it(`should render icon Report`, async () => {
		const { getByTestId } = render(<Icons.Report data-testid="IconReport" />);
		expect(getByTestId('IconReport')).toBeInTheDocument();
	});
	it(`should render icon Power`, async () => {
		const { getByTestId } = render(<Icons.Power data-testid="IconPower" />);
		expect(getByTestId('IconPower')).toBeInTheDocument();
	});
	it(`should render icon printer`, async () => {
		const { getByTestId } = render(<Icons.Printer data-testid="IconPrinter" />);
		expect(getByTestId('IconPrinter')).toBeInTheDocument();
	});
	it(`should render icon Pdf`, async () => {
		const { getByTestId } = render(<Icons.Pdf data-testid="IconPdf" />);
		expect(getByTestId('IconPdf')).toBeInTheDocument();
	});
	it(`should render icon Excel`, async () => {
		const { getByTestId } = render(<Icons.Excel data-testid="IconExcel" />);
		expect(getByTestId('IconExcel')).toBeInTheDocument();
	});
	it(`should render icon Xml`, async () => {
		const { getByTestId } = render(<Icons.Xml data-testid="IconXml" />);
		expect(getByTestId('IconXml')).toBeInTheDocument();
	});
	it(`should render icon ArrowSingleLeft`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowSingleLeft data-testid="IconArrowSingleLeft" />
		);
		expect(getByTestId('IconArrowSingleLeft')).toBeInTheDocument();
	});
	it(`should render icon ArrowSingleRight`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowSingleRight data-testid="IconArrowSingleRight" />
		);
		expect(getByTestId('IconArrowSingleRight')).toBeInTheDocument();
	});
	it(`should render icon ArrowPairLeft`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowPairLeft data-testid="IconArrowPairLeft" />
		);
		expect(getByTestId('IconArrowPairLeft')).toBeInTheDocument();
	});
	it(`should render icon ArrowPairRight`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowPairRight data-testid="IconArrowPairRight" />
		);
		expect(getByTestId('IconArrowPairRight')).toBeInTheDocument();
	});
	it(`should render icon Linkedin`, async () => {
		const { getByTestId } = render(
			<Icons.Linkedin data-testid="IconLinkedin" />
		);
		expect(getByTestId('IconLinkedin')).toBeInTheDocument();
	});
	it(`should render icon Github`, async () => {
		const { getByTestId } = render(<Icons.Github data-testid="IconGithub" />);
		expect(getByTestId('IconGithub')).toBeInTheDocument();
	});
	it(`should render icon Funnel`, async () => {
		const { getByTestId } = render(<Icons.Funnel data-testid="IconFunnel" />);
		expect(getByTestId('IconFunnel')).toBeInTheDocument();
	});

	it(`should render icon Trash`, async () => {
		const { getByTestId } = render(<Icons.Trash data-testid="IconTrash" />);
		expect(getByTestId('IconTrash')).toBeInTheDocument();
	});

	it(`should render icon Save`, async () => {
		const { getByTestId } = render(<Icons.Save data-testid="IconSave" />);
		expect(getByTestId('IconSave')).toBeInTheDocument();
	});

	it(`should render icon Csv`, async () => {
		const { getByTestId } = render(<Icons.Csv data-testid="IconCsv" />);
		expect(getByTestId('IconCsv')).toBeInTheDocument();
	});

	it(`should render icon Pen`, async () => {
		const { getByTestId } = render(<Icons.Pen data-testid="IconPen" />);
		expect(getByTestId('IconPen')).toBeInTheDocument();
	});
});
