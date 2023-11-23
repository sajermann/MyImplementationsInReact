import { Icons } from '~/Components/Icons';
import { TFeedbackProps } from '~/Types/TFeedbackProps';

interface IFeedbackIcon {
	withFeedback?: TFeedbackProps;
}

export function FeedbackIcon({ withFeedback }: IFeedbackIcon) {
	if (withFeedback?.loadingOptions.isLoading) {
		return null;
	}
	if (
		withFeedback?.successOptions?.success &&
		!withFeedback?.successOptions?.customIcon
	) {
		return <Icons nameIcon="success" />;
	}
	if (
		withFeedback?.successOptions?.success &&
		withFeedback?.successOptions?.customIcon
	) {
		return withFeedback?.successOptions?.customIcon;
	}
	if (
		withFeedback?.failedOptions?.failed &&
		!withFeedback?.failedOptions?.customIcon
	) {
		return <Icons nameIcon="failed" />;
	}
	if (
		withFeedback?.failedOptions?.failed &&
		withFeedback?.failedOptions?.customIcon
	) {
		return withFeedback?.failedOptions?.customIcon;
	}

	return null;
}
