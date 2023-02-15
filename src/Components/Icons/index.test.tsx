/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Icons } from './index';

describe('Components/Icons', () => {
	it(`should render IconEye`, async () => {
		const { getByTestId } = render(<Icons.Eye data-testid="IconEye" />);
		expect(getByTestId('IconEye')).toBeInTheDocument();
	});

	it(`should render ShortList`, async () => {
		const { getByTestId } = render(<Icons.ShortList data-testid="ShortList" />);
		expect(getByTestId('ShortList')).toBeInTheDocument();
	});

	it(`should render Summary`, async () => {
		const { getByTestId } = render(<Icons.Summary data-testid="Summary" />);
		expect(getByTestId('Summary')).toBeInTheDocument();
	});

	it(`should render List`, async () => {
		const { getByTestId } = render(<Icons.List data-testid="List" />);
		expect(getByTestId('List')).toBeInTheDocument();
	});

	it(`should render ArrowsOutSimple`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowsOutSimple data-testid="ArrowsOutSimple" />
		);
		expect(getByTestId('ArrowsOutSimple')).toBeInTheDocument();
	});

	it(`should render ArrowsInSimple`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowsInSimple data-testid="ArrowsInSimple" />
		);
		expect(getByTestId('ArrowsInSimple')).toBeInTheDocument();
	});

	it(`should render Download`, async () => {
		const { getByTestId } = render(<Icons.Download data-testid="Download" />);
		expect(getByTestId('Download')).toBeInTheDocument();
	});

	it(`should render Upload`, async () => {
		const { getByTestId } = render(<Icons.Upload data-testid="Upload" />);
		expect(getByTestId('Upload')).toBeInTheDocument();
	});

	it(`should render Clear`, async () => {
		const { getByTestId } = render(<Icons.Clear data-testid="Clear" />);
		expect(getByTestId('Clear')).toBeInTheDocument();
	});

	it(`should render Search`, async () => {
		const { getByTestId } = render(<Icons.Search data-testid="Search" />);
		expect(getByTestId('Search')).toBeInTheDocument();
	});

	it(`should render Report`, async () => {
		const { getByTestId } = render(<Icons.Report data-testid="Report" />);
		expect(getByTestId('Report')).toBeInTheDocument();
	});

	it(`should render User`, async () => {
		const { getByTestId } = render(<Icons.User data-testid="User" />);
		expect(getByTestId('User')).toBeInTheDocument();
	});

	it(`should render Close`, async () => {
		const { getByTestId } = render(<Icons.Close data-testid="Close" />);
		expect(getByTestId('Close')).toBeInTheDocument();
	});

	it(`should render Info`, async () => {
		const { getByTestId } = render(<Icons.Info data-testid="Info" />);
		expect(getByTestId('Info')).toBeInTheDocument();
	});

	it(`should render Error`, async () => {
		const { getByTestId } = render(<Icons.Error data-testid="Error" />);
		expect(getByTestId('Error')).toBeInTheDocument();
	});

	it(`should render Checked`, async () => {
		const { getByTestId } = render(<Icons.Checked data-testid="Checked" />);
		expect(getByTestId('Checked')).toBeInTheDocument();
	});

	it(`should render Power`, async () => {
		const { getByTestId } = render(<Icons.Power data-testid="Power" />);
		expect(getByTestId('Power')).toBeInTheDocument();
	});

	it(`should render Printer`, async () => {
		const { getByTestId } = render(<Icons.Printer data-testid="Printer" />);
		expect(getByTestId('Printer')).toBeInTheDocument();
	});

	it(`should render Pdf`, async () => {
		const { getByTestId } = render(<Icons.Pdf data-testid="Pdf" />);
		expect(getByTestId('Pdf')).toBeInTheDocument();
	});

	it(`should render Excel`, async () => {
		const { getByTestId } = render(<Icons.Excel data-testid="Excel" />);
		expect(getByTestId('Excel')).toBeInTheDocument();
	});

	it(`should render Xml`, async () => {
		const { getByTestId } = render(<Icons.Xml data-testid="Xml" />);
		expect(getByTestId('Xml')).toBeInTheDocument();
	});

	it(`should render Indeterminate`, async () => {
		const { getByTestId } = render(
			<Icons.Indeterminate data-testid="Indeterminate" />
		);
		expect(getByTestId('Indeterminate')).toBeInTheDocument();
	});

	it(`should render Star`, async () => {
		const { getByTestId } = render(<Icons.Star data-testid="Star" />);
		expect(getByTestId('Star')).toBeInTheDocument();
	});

	it(`should render ArrowSingleLeft`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowSingleLeft data-testid="ArrowSingleLeft" />
		);
		expect(getByTestId('ArrowSingleLeft')).toBeInTheDocument();
	});

	it(`should render ArrowSingleRight`, async () => {
		const { getByTestId } = render(
			<Icons.Eye data-testid="ArrowSingleRight" />
		);
		expect(getByTestId('ArrowSingleRight')).toBeInTheDocument();
	});

	it(`should render ArrowPairLeft`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowPairLeft data-testid="ArrowPairLeft" />
		);
		expect(getByTestId('ArrowPairLeft')).toBeInTheDocument();
	});

	it(`should render Linkedin`, async () => {
		const { getByTestId } = render(<Icons.Linkedin data-testid="Linkedin" />);
		expect(getByTestId('Linkedin')).toBeInTheDocument();
	});

	it(`should render Github`, async () => {
		const { getByTestId } = render(<Icons.Github data-testid="Github" />);
		expect(getByTestId('Github')).toBeInTheDocument();
	});

	it(`should render Funnel`, async () => {
		const { getByTestId } = render(<Icons.Funnel data-testid="Funnel" />);
		expect(getByTestId('Funnel')).toBeInTheDocument();
	});

	it(`should render Trash`, async () => {
		const { getByTestId } = render(<Icons.Trash data-testid="Trash" />);
		expect(getByTestId('Trash')).toBeInTheDocument();
	});

	it(`should render Save`, async () => {
		const { getByTestId } = render(<Icons.Save data-testid="Save" />);
		expect(getByTestId('Save')).toBeInTheDocument();
	});

	it(`should render Csv`, async () => {
		const { getByTestId } = render(<Icons.Csv data-testid="Csv" />);
		expect(getByTestId('Csv')).toBeInTheDocument();
	});

	it(`should render Pen`, async () => {
		const { getByTestId } = render(<Icons.Pen data-testid="Pen" />);
		expect(getByTestId('Pen')).toBeInTheDocument();
	});

	it(`should render Brazil`, async () => {
		const { getByTestId } = render(<Icons.Brazil data-testid="Brazil" />);
		expect(getByTestId('Brazil')).toBeInTheDocument();
	});

	it(`should render Eua`, async () => {
		const { getByTestId } = render(<Icons.Eua data-testid="Eua" />);
		expect(getByTestId('Eua')).toBeInTheDocument();
	});

	it(`should render Gear`, async () => {
		const { getByTestId } = render(<Icons.Gear data-testid="Gear" />);
		expect(getByTestId('Gear')).toBeInTheDocument();
	});

	it(`should render ArrowSingleDown`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowSingleDown data-testid="ArrowSingleDown" />
		);
		expect(getByTestId('ArrowSingleDown')).toBeInTheDocument();
	});

	it(`should render Moon`, async () => {
		const { getByTestId } = render(<Icons.Moon data-testid="Moon" />);
		expect(getByTestId('Moon')).toBeInTheDocument();
	});

	it(`should render Sun`, async () => {
		const { getByTestId } = render(<Icons.Sun data-testid="Sun" />);
		expect(getByTestId('Sun')).toBeInTheDocument();
	});

	it(`should render Triangle`, async () => {
		const { getByTestId } = render(<Icons.Triangle data-testid="Triangle" />);
		expect(getByTestId('Triangle')).toBeInTheDocument();
	});
});
