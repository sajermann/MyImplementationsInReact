import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TFeedbackProps } from '~/Types/TFeedbackProps';
import { showInDevelopment } from '~/Utils/ShowInDevelopment';

interface IEndIcon
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	withFeedback?: TFeedbackProps;
}

export function EndIcon({ withFeedback, ...rest }: IEndIcon) {
	if (
		rest.children &&
		!withFeedback?.loadingOptions.isLoading &&
		!withFeedback?.successOptions?.success &&
		!withFeedback?.failedOptions?.failed
	) {
		return (
			<div {...showInDevelopment({ 'data-content': 'endIcon' })} {...rest} />
		);
	}
	return null;
}
