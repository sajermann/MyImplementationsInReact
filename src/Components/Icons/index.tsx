/* eslint-disable react/no-unused-prop-types */
type Props = {
	color?: string;
	width?: string;
	height?: string;
	children?: React.ReactNode;
};

function Eye({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<circle
				cx="128"
				cy="128"
				r="40"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function ShortList({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 50 50"
		>
			<path d="M 25 0 C 23.14 0 21.572953 1.277 21.126953 3 L 18 3 L 9 3 C 7.346 3 6 4.346 6 6 L 6 45 C 6 46.654 7.346 48 9 48 L 41 48 C 42.654 48 44 46.654 44 45 L 44 6 C 44 4.346 42.654 3 41 3 L 32 3 L 28.873047 3 C 28.429047 1.277 26.86 0 25 0 z M 25 2 C 26.103 2 27 2.897 27 4 C 27 4.552 27.447 5 28 5 L 31 5 L 31 7 L 19 7 L 19 5 L 22 5 C 22.552 5 23 4.552 23 4 C 23 2.897 23.897 2 25 2 z M 9 5 L 17 5 L 17 8 C 17 8.552 17.448 9 18 9 L 32 9 C 32.553 9 33 8.552 33 8 L 33 5 L 41 5 C 41.552 5 42 5.449 42 6 L 42 45 C 42 45.552 41.552 46 41 46 L 9 46 C 8.449 46 8 45.552 8 45 L 8 6 C 8 5.449 8.449 5 9 5 z M 15.136719 12.332031 L 11.603516 13.597656 L 11.603516 14.974609 L 13.625 14.347656 L 13.625 20.875 L 15.318359 20.875 L 15.318359 12.332031 L 15.136719 12.332031 z M 20 16 L 20 18 L 38 18 L 38 16 L 20 16 z M 14.001953 23.226562 C 13.427953 23.226562 12.913937 23.34975 12.460938 23.59375 C 12.007938 23.83775 11.656203 24.173516 11.408203 24.603516 C 11.160203 25.033516 11.035156 25.507344 11.035156 26.027344 L 12.734375 26.027344 C 12.734375 25.597344 12.846406 25.252281 13.066406 24.988281 C 13.286406 24.724281 13.587703 24.591797 13.970703 24.591797 C 14.325703 24.591797 14.600016 24.700969 14.791016 24.917969 C 14.982016 25.134969 15.078125 25.431547 15.078125 25.810547 C 15.078125 26.087547 14.988641 26.380453 14.806641 26.689453 C 14.624641 26.998453 14.343844 27.359437 13.964844 27.773438 L 11.205078 30.714844 L 11.205078 31.875 L 17.052734 31.875 L 17.054688 31.875 L 17.054688 30.509766 L 13.386719 30.509766 L 15.324219 28.464844 C 15.855219 27.882844 16.230219 27.372547 16.449219 26.935547 C 16.668219 26.498547 16.777344 26.068484 16.777344 25.646484 C 16.777344 24.877484 16.534828 24.281375 16.048828 23.859375 C 15.562828 23.437375 14.880953 23.226562 14.001953 23.226562 z M 20 27 L 20 29 L 38 29 L 38 27 L 20 27 z M 13.900391 34.226562 C 13.380391 34.226562 12.906609 34.326391 12.474609 34.525391 C 12.042609 34.724391 11.706797 35.002469 11.466797 35.355469 C 11.226797 35.708469 11.105469 36.107734 11.105469 36.552734 L 12.798828 36.552734 C 12.798828 36.267734 12.908953 36.037375 13.126953 35.859375 C 13.344953 35.681375 13.617406 35.591797 13.941406 35.591797 C 14.301406 35.591797 14.582109 35.686906 14.787109 35.878906 C 14.992109 36.070906 15.095703 36.337641 15.095703 36.681641 C 15.095703 37.036641 14.992156 37.322109 14.785156 37.537109 C 14.578156 37.752109 14.260078 37.859375 13.830078 37.859375 L 12.927734 37.859375 L 12.927734 39.183594 L 13.824219 39.183594 C 14.761219 39.183594 15.230469 39.608938 15.230469 40.460938 C 15.230469 40.812937 15.114719 41.095594 14.886719 41.308594 C 14.658719 41.521594 14.343406 41.626953 13.941406 41.626953 C 13.589406 41.626953 13.292734 41.525266 13.052734 41.322266 C 12.812734 41.119266 12.693359 40.857109 12.693359 40.537109 L 11 40.537109 C 11 41.275109 11.2715 41.869359 11.8125 42.318359 C 12.3535 42.767359 13.048391 42.992188 13.900391 42.992188 C 14.810391 42.992188 15.542703 42.763641 16.095703 42.306641 C 16.648703 41.849641 16.923828 41.242375 16.923828 40.484375 C 16.923828 40.015375 16.806313 39.608625 16.570312 39.265625 C 16.334313 38.922625 15.974141 38.664187 15.494141 38.492188 C 15.881141 38.316187 16.195594 38.064328 16.433594 37.736328 C 16.671594 37.408328 16.789062 37.049203 16.789062 36.658203 C 16.789062 35.900203 16.533484 35.304047 16.021484 34.873047 C 15.509484 34.442047 14.802391 34.226562 13.900391 34.226562 z M 20 38 L 20 40 L 38 40 L 38 38 L 20 38 z" />
		</svg>
	);
}

function Summary({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 50 50"
		>
			<path d="M 7 2 L 7 48 L 43 48 L 43 2 Z M 9 4 L 41 4 L 41 46 L 9 46 Z M 29.984375 8.984375 C 29.433594 8.996094 28.992188 9.449219 29 10 L 29 39 C 28.996094 39.359375 29.183594 39.695313 29.496094 39.878906 C 29.808594 40.058594 30.191406 40.058594 30.503906 39.878906 C 30.816406 39.695313 31.003906 39.359375 31 39 L 31 10 C 31.003906 9.730469 30.898438 9.46875 30.707031 9.277344 C 30.515625 9.085938 30.253906 8.980469 29.984375 8.984375 Z M 14 11 C 13.640625 10.996094 13.304688 11.183594 13.121094 11.496094 C 12.941406 11.808594 12.941406 12.191406 13.121094 12.503906 C 13.304688 12.816406 13.640625 13.003906 14 13 L 25 13 C 25.359375 13.003906 25.695313 12.816406 25.878906 12.503906 C 26.058594 12.191406 26.058594 11.808594 25.878906 11.496094 C 25.695313 11.183594 25.359375 10.996094 25 11 Z M 35 11 C 34.640625 10.996094 34.304688 11.183594 34.121094 11.496094 C 33.941406 11.808594 33.941406 12.191406 34.121094 12.503906 C 34.304688 12.816406 34.640625 13.003906 35 13 L 36 13 C 36.359375 13.003906 36.695313 12.816406 36.878906 12.503906 C 37.058594 12.191406 37.058594 11.808594 36.878906 11.496094 C 36.695313 11.183594 36.359375 10.996094 36 11 Z M 14 19 C 13.640625 18.996094 13.304688 19.183594 13.121094 19.496094 C 12.941406 19.808594 12.941406 20.191406 13.121094 20.503906 C 13.304688 20.816406 13.640625 21.003906 14 21 L 25 21 C 25.359375 21.003906 25.695313 20.816406 25.878906 20.503906 C 26.058594 20.191406 26.058594 19.808594 25.878906 19.496094 C 25.695313 19.183594 25.359375 18.996094 25 19 Z M 35 19 C 34.640625 18.996094 34.304688 19.183594 34.121094 19.496094 C 33.941406 19.808594 33.941406 20.191406 34.121094 20.503906 C 34.304688 20.816406 34.640625 21.003906 35 21 L 36 21 C 36.359375 21.003906 36.695313 20.816406 36.878906 20.503906 C 37.058594 20.191406 37.058594 19.808594 36.878906 19.496094 C 36.695313 19.183594 36.359375 18.996094 36 19 Z M 14 27 C 13.640625 26.996094 13.304688 27.183594 13.121094 27.496094 C 12.941406 27.808594 12.941406 28.191406 13.121094 28.503906 C 13.304688 28.816406 13.640625 29.003906 14 29 L 25 29 C 25.359375 29.003906 25.695313 28.816406 25.878906 28.503906 C 26.058594 28.191406 26.058594 27.808594 25.878906 27.496094 C 25.695313 27.183594 25.359375 26.996094 25 27 Z M 35 27 C 34.640625 26.996094 34.304688 27.183594 34.121094 27.496094 C 33.941406 27.808594 33.941406 28.191406 34.121094 28.503906 C 34.304688 28.816406 34.640625 29.003906 35 29 L 36 29 C 36.359375 29.003906 36.695313 28.816406 36.878906 28.503906 C 37.058594 28.191406 37.058594 27.808594 36.878906 27.496094 C 36.695313 27.183594 36.359375 26.996094 36 27 Z M 14 35 C 13.640625 34.996094 13.304688 35.183594 13.121094 35.496094 C 12.941406 35.808594 12.941406 36.191406 13.121094 36.503906 C 13.304688 36.816406 13.640625 37.003906 14 37 L 25 37 C 25.359375 37.003906 25.695313 36.816406 25.878906 36.503906 C 26.058594 36.191406 26.058594 35.808594 25.878906 35.496094 C 25.695313 35.183594 25.359375 34.996094 25 35 Z M 35 35 C 34.640625 34.996094 34.304688 35.183594 34.121094 35.496094 C 33.941406 35.808594 33.941406 36.191406 34.121094 36.503906 C 34.304688 36.816406 34.640625 37.003906 35 37 L 36 37 C 36.359375 37.003906 36.695313 36.816406 36.878906 36.503906 C 37.058594 36.191406 37.058594 35.808594 36.878906 35.496094 C 36.695313 35.183594 36.359375 34.996094 36 35 Z" />
		</svg>
	);
}

function ListFile({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 50 50"
		>
			<path d="M 7 2 L 7 48 L 8 48 L 32.832031 48 A 1.0001 1.0001 0 0 0 33.158203 48 L 33.414062 48 L 33.607422 47.806641 A 1.0001 1.0001 0 0 0 33.792969 47.623047 A 1.0001 1.0001 0 0 0 33.796875 47.617188 L 42.619141 38.794922 A 1.0001 1.0001 0 0 0 42.810547 38.603516 L 43 38.414062 L 43 38.167969 A 1.0001 1.0001 0 0 0 43 37.841797 L 43 2 L 7 2 z M 9 4 L 41 4 L 41 37 L 32 37 L 32 46 L 9 46 L 9 4 z M 15 13 L 15 15 L 18 15 L 18 13 L 15 13 z M 21 13 L 21 15 L 35 15 L 35 13 L 21 13 z M 15 19 L 15 21 L 18 21 L 18 19 L 15 19 z M 21 19 L 21 21 L 35 21 L 35 19 L 21 19 z M 15 25 L 15 27 L 18 27 L 18 25 L 15 25 z M 21 25 L 21 27 L 35 27 L 35 25 L 21 25 z M 15 31 L 15 33 L 18 33 L 18 31 L 15 31 z M 21 31 L 21 33 L 35 33 L 35 31 L 21 31 z M 34 39 L 39.585938 39 L 34 44.585938 L 34 39 z" />
		</svg>
	);
}

function ArrowsOutSimple({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="160 48 208 48 208 96"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="152"
				y1="104"
				x2="208"
				y2="48"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="96 208 48 208 48 160"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="104"
				y1="152"
				x2="48"
				y2="208"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function ArrowsInSimple({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="152 56 152 104 200 104"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="208"
				y1="48"
				x2="152"
				y2="104"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="56 152 104 152 104 200"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="48"
				y1="208"
				x2="104"
				y2="152"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Download({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 16 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9 11.175L12.243 7.933L13.657 9.347L8 15.004L2.343 9.347L3.757 7.933L7 11.175V0H9V11.175ZM0 14H2V18H14V14H16V18C16 19.1 15.1 20 14 20H2C0.9 20 0 19.037 0 18V14Z"
				fill={color || 'currentColor'}
			/>
		</svg>
	);
}

function Upload({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 16 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7 8.825L3.757 12.067L2.343 10.653L8 4.996L13.657 10.653L12.243 12.067L9 8.825L9 20L7 20L7 8.825ZM16 6L14 6L14 2L2 2L2 6L-1.22392e-06 6L-1.57361e-06 2C-1.66978e-06 0.900001 0.899998 1.32008e-06 2 1.22392e-06L14 1.74846e-07C15.1 7.86805e-08 16 0.962999 16 2L16 6Z"
				fill={color || 'currentColor'}
			/>
		</svg>
	);
}

function Clear({ color, width, height, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 16 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.47727 11.668C2.49736 14.3987 5.03327 16.3333 8 16.3333C11.8659 16.3333 15 13.05 15 9M14.5227 6.332C13.5039 3.60067 10.9674 1.66667 8 1.66667C4.13409 1.66667 1 4.95 1 9M6.09091 11.6667H1V17M15 1V6.33333H9.90909"
				stroke={color || 'currentColor'}
				strokeWidth="2"
			/>
		</svg>
	);
}

function Search({ color, width, height, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
				stroke={color || 'currentColor'}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function Report({ color, width, height, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 16 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13 2H3C2.7378 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H13C13.2652 16 13.5196 15.8946 13.7071 15.7071C13.8946 15.5196 14 15.2652 14 15V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H13C13.7956 18 14.5587 17.6839 15.1213 17.1213C15.6839 16.5587 16 15.7956 16 15V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7956 0 13 0H3Z"
				fill={color || 'currentColor'}
			/>
			<path
				d="M4 4H12V6H4V4ZM4 8H12V10H4V8ZM4 12H9V14H4V12Z"
				fill={color || 'currentColor'}
			/>
		</svg>
	);
}

function User({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.5 1C6.14855 1 1 6.14855 1 12.5C1 18.8514 6.14855 24 12.5 24C18.8514 24 24 18.8514 24 12.5C24 6.14855 18.8514 1 12.5 1Z"
				stroke={color || 'currentColor'}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.61157 19.7979C3.61157 19.7979 6.17492 16.525 12.4999 16.525C18.8249 16.525 21.3894 19.7979 21.3894 19.7979M12.4999 12.5C13.4149 12.5 14.2924 12.1366 14.9394 11.4896C15.5864 10.8426 15.9499 9.96503 15.9499 9.05004C15.9499 8.13504 15.5864 7.25752 14.9394 6.61052C14.2924 5.96352 13.4149 5.60004 12.4999 5.60004C11.5849 5.60004 10.7074 5.96352 10.0604 6.61052C9.4134 7.25752 9.04992 8.13504 9.04992 9.05004C9.04992 9.96503 9.4134 10.8426 10.0604 11.4896C10.7074 12.1366 11.5849 12.5 12.4999 12.5V12.5Z"
				stroke={color || 'currentColor'}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function Close({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.87818 7.99886L15.606 2.28357C15.8568 2.03271 15.9977 1.69246 15.9977 1.33769C15.9977 0.98291 15.8568 0.642664 15.606 0.391799C15.3552 0.140934 15.015 0 14.6602 0C14.3055 0 13.9653 0.140934 13.7145 0.391799L8 6.12041L2.28552 0.391799C2.03469 0.140934 1.6945 -2.64329e-09 1.33977 0C0.985044 2.64329e-09 0.644846 0.140934 0.394017 0.391799C0.143188 0.642664 0.00227327 0.98291 0.00227327 1.33769C0.00227327 1.69246 0.143188 2.03271 0.394017 2.28357L6.12182 7.99886L0.394017 13.7142C0.269166 13.838 0.17007 13.9853 0.102444 14.1477C0.0348177 14.31 0 14.4842 0 14.66C0 14.8359 0.0348177 15.01 0.102444 15.1724C0.17007 15.3347 0.269166 15.4821 0.394017 15.6059C0.517848 15.7308 0.665174 15.8299 0.827496 15.8975C0.989818 15.9652 1.16392 16 1.33977 16C1.51562 16 1.68972 15.9652 1.85204 15.8975C2.01437 15.8299 2.16169 15.7308 2.28552 15.6059L8 9.87731L13.7145 15.6059C13.8383 15.7308 13.9856 15.8299 14.148 15.8975C14.3103 15.9652 14.4844 16 14.6602 16C14.8361 16 15.0102 15.9652 15.1725 15.8975C15.3348 15.8299 15.4822 15.7308 15.606 15.6059C15.7308 15.4821 15.8299 15.3347 15.8976 15.1724C15.9652 15.01 16 14.8359 16 14.66C16 14.4842 15.9652 14.31 15.8976 14.1477C15.8299 13.9853 15.7308 13.838 15.606 13.7142L9.87818 7.99886Z"
				fill={color || 'currentColor'}
			/>
		</svg>
	);
}

function Info({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
				stroke={color || 'currentColor'}
				strokeWidth="2"
			/>
			<path
				d="M9 5V9.8M9 12.6V13"
				stroke={color || 'currentColor'}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function Error({ width, height, color, ...rest }: Props) {
	return (
		<svg
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 23 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M13.5765 9.05096L11.3137 11.3137M11.3137 11.3137L9.05098 13.5764M11.3137 11.3137L13.5765 13.5764M11.3137 11.3137L9.05098 9.05096"
				stroke={color || 'currentColor'}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M5.65687 16.9706C8.78106 20.0948 13.8464 20.0948 16.9706 16.9706C20.0948 13.8464 20.0948 8.78105 16.9706 5.65685C13.8464 2.53266 8.78106 2.53266 5.65687 5.65685C2.53267 8.78105 2.53267 13.8464 5.65687 16.9706Z"
				stroke={color || 'currentColor'}
				strokeWidth="2"
			/>
		</svg>
	);
}

function Checked({ width, height, color, ...rest }: Props) {
	return (
		<svg
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 12 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M10.1347 0.286938C10.3421 0.10086 10.618 -0.00201204 10.9043 2.98247e-05C11.1906 0.00207169 11.4649 0.108868 11.6692 0.297882C11.8736 0.486897 11.992 0.743346 11.9996 1.01312C12.0072 1.28289 11.9033 1.54488 11.7098 1.74381L5.83628 8.66741C5.73529 8.76994 5.61339 8.85223 5.47788 8.90934C5.34238 8.96646 5.19604 8.99723 5.04763 8.99982C4.89922 9.00241 4.75177 8.97677 4.61412 8.92442C4.47646 8.87207 4.35141 8.7941 4.24646 8.69516L0.351393 5.02385C0.242921 4.92858 0.15592 4.81369 0.095577 4.68605C0.0352345 4.5584 0.00278735 4.4206 0.000171818 4.28087C-0.00244371 4.14115 0.024826 4.00236 0.0803535 3.87278C0.135881 3.74321 0.218529 3.6255 0.323367 3.52669C0.428205 3.42787 0.553086 3.34997 0.690558 3.29763C0.828031 3.2453 0.97528 3.21959 1.12352 3.22206C1.27176 3.22452 1.41796 3.25511 1.55338 3.31198C1.68881 3.36886 1.8107 3.45086 1.91177 3.5531L4.99426 6.45713L10.1067 0.317463C10.1159 0.306781 10.1258 0.29659 10.1362 0.286938H10.1347Z"
				fill={color || 'currentColor'}
			/>
		</svg>
	);
}

function Power({ ...rest }) {
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			fill="currentColor"
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<line
				x1="128"
				y1="48"
				x2="128"
				y2="124"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M176,54.2a88,88,0,1,1-96,0"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Printer({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 19 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.03571 14.9643H1V5.25H18V14.9643H14.9643M14.9643 5.25V1H4.03571V5.25M13.1429 8.28571H14.9643M4.03571 11.3214V18H14.9643V11.3214H4.03571Z"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function Pdf({ ...rest }) {
	return (
		<svg
			{...rest}
			width="100%"
			height="100%"
			viewBox="0 0 19 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.6983 7.54545V1H15.025L18 3.86364V19H1.85M13.75 1V5.09091H18M12.475 15.7273V10H15.875M12.475 12.8636H15.025M1 10H2.275C3.975 10 4.1875 11.0227 4.1875 11.6364C4.1875 12.25 3.975 13.2727 2.275 13.2727H1.2125V14.9091H1V10ZM6.525 14.9091V10H7.97425C8.9407 10 9.925 10.4091 9.925 12.4545C9.925 14.5 8.9407 14.9091 7.97425 14.9091H6.525Z"
				stroke="white"
				strokeWidth="2"
			/>
		</svg>
	);
}

function Excel({ ...rest }) {
	return (
		<svg
			{...rest}
			width="100%"
			height="100%"
			viewBox="0 0 19 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.84042 7.54545V1H15.0526L18 3.86364V19H2M13.7895 1V5.09091H18M6.42105 10L4.73684 12.6591L3.05263 10H2.84211L4.73684 12.8636L2.63158 15.7273H2.84211L4.73684 13.0682L6.63158 15.7273H6.84211L4.73684 12.8636L6.63158 10H6.42105Z"
				stroke="white"
				strokeWidth="2"
			/>
		</svg>
	);
}

function Xls({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={width || '100%'}
			height={height || '100%'}
			stroke={color || 'currentColor'}
		>
			<path
				fill={color || 'currentColor'}
				d="M 17.660156 4 C 16.320313 4 15.058594 4.519531 14.121094 5.460938 L 5.460938 14.121094 C 4.519531 15.070313 4 16.320313 4 17.660156 L 4 57 C 4 58.648438 5.351563 60 7 60 L 47 60 C 48.648438 60 50 58.648438 50 57 L 50 46 L 58 46 C 59.101563 46 60 45.101563 60 44 L 60 24 C 60 22.898438 59.101563 22 58 22 L 50 22 L 50 7 C 50 5.351563 48.648438 4 47 4 Z M 18 6 L 47 6 C 47.550781 6 48 6.449219 48 7 L 48 22 L 16 22 C 14.898438 22 14 22.898438 14 24 L 14 44 C 14 45.101563 14.898438 46 16 46 L 48 46 L 48 57 C 48 57.550781 47.550781 58 47 58 L 7 58 C 6.449219 58 6 57.550781 6 57 L 6 18 L 15 18 C 16.652344 18 18 16.652344 18 15 Z M 16 6.5 L 16 15 C 16 15.550781 15.550781 16 15 16 L 6.5 16 C 6.613281 15.835938 6.738281 15.679688 6.882813 15.539063 L 15.539063 6.882813 C 15.679688 6.738281 15.835938 6.609375 16 6.5 Z M 16 24 L 58 24 L 58 44 L 16 44 Z M 36 28 C 35.449219 28 35 28.445313 35 29 L 35 39 C 35 39.554688 35.449219 40 36 40 L 41 40 C 41.550781 40 42 39.554688 42 39 C 42 38.445313 41.550781 38 41 38 L 37 38 L 37 29 C 37 28.445313 36.550781 28 36 28 Z M 46 28 C 44.347656 28 43 29.347656 43 31 L 43 32 C 43 33.652344 44.347656 35 46 35 L 48 35 C 48.550781 35 49 35.449219 49 36 L 49 37 C 49 37.550781 48.550781 38 48 38 L 46 38 C 45.449219 38 45 37.550781 45 37 C 45 36.445313 44.550781 36 44 36 C 43.449219 36 43 36.445313 43 37 C 43 38.652344 44.347656 40 46 40 L 48 40 C 49.652344 40 51 38.652344 51 37 L 51 36 C 51 34.347656 49.652344 33 48 33 L 46 33 C 45.449219 33 45 32.550781 45 32 L 45 31 C 45 30.449219 45.449219 30 46 30 L 48 30 C 48.550781 30 49 30.449219 49 31 C 49 31.554688 49.449219 32 50 32 C 50.550781 32 51 31.554688 51 31 C 51 29.347656 49.652344 28 48 28 Z M 24.859375 28.011719 C 24.730469 28.027344 24.601563 28.070313 24.484375 28.140625 C 24.011719 28.425781 23.859375 29.039063 24.140625 29.515625 L 26.832031 34 L 24.140625 38.484375 C 23.859375 38.957031 24.011719 39.574219 24.484375 39.859375 C 24.644531 39.953125 24.824219 40 25 40 C 25.339844 40 25.671875 39.828125 25.859375 39.515625 L 28 35.941406 L 30.140625 39.515625 C 30.328125 39.828125 30.660156 40 31 40 C 31.175781 40 31.355469 39.953125 31.515625 39.859375 C 31.988281 39.574219 32.140625 38.957031 31.859375 38.484375 L 29.167969 34 L 31.859375 29.515625 C 32.140625 29.042969 31.988281 28.425781 31.515625 28.140625 C 31.042969 27.859375 30.425781 28.011719 30.140625 28.484375 L 28 32.058594 L 25.859375 28.484375 C 25.644531 28.128906 25.246094 27.957031 24.859375 28.011719 Z M 9 52 C 8.449219 52 8 52.445313 8 53 L 8 55 C 8 55.554688 8.449219 56 9 56 C 9.550781 56 10 55.554688 10 55 L 10 53 C 10 52.445313 9.550781 52 9 52 Z M 14 52 C 13.449219 52 13 52.445313 13 53 L 13 55 C 13 55.554688 13.449219 56 14 56 C 14.550781 56 15 55.554688 15 55 L 15 53 C 15 52.445313 14.550781 52 14 52 Z M 19 52 C 18.449219 52 18 52.445313 18 53 L 18 55 C 18 55.554688 18.449219 56 19 56 C 19.550781 56 20 55.554688 20 55 L 20 53 C 20 52.445313 19.550781 52 19 52 Z M 24 52 C 23.449219 52 23 52.445313 23 53 L 23 55 C 23 55.554688 23.449219 56 24 56 C 24.550781 56 25 55.554688 25 55 L 25 53 C 25 52.445313 24.550781 52 24 52 Z M 29 52 C 28.449219 52 28 52.445313 28 53 L 28 55 C 28 55.554688 28.449219 56 29 56 C 29.550781 56 30 55.554688 30 55 L 30 53 C 30 52.445313 29.550781 52 29 52 Z M 34 52 C 33.449219 52 33 52.445313 33 53 L 33 55 C 33 55.554688 33.449219 56 34 56 C 34.550781 56 35 55.554688 35 55 L 35 53 C 35 52.445313 34.550781 52 34 52 Z M 39 52 C 38.449219 52 38 52.445313 38 53 L 38 55 C 38 55.554688 38.449219 56 39 56 C 39.550781 56 40 55.554688 40 55 L 40 53 C 40 52.445313 39.550781 52 39 52 Z M 44 52 C 43.449219 52 43 52.445313 43 53 L 43 55 C 43 55.554688 43.449219 56 44 56 C 44.550781 56 45 55.554688 45 55 L 45 53 C 45 52.445313 44.550781 52 44 52 Z"
			/>
		</svg>
	);
}

function Xml({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			viewBox="0 0 64 64"
			width={width || '100%'}
			height={height || '100%'}
			stroke={color || 'currentColor'}
		>
			<path
				fill={color || 'currentColor'}
				d="M 17.65625 4 C 16.32025 4 15.065094 4.5208437 14.121094 5.4648438 L 5.4648438 14.121094 C 4.5208438 15.066094 4 16.32125 4 17.65625 L 4 57 C 4 58.654 5.346 60 7 60 L 47 60 C 48.654 60 50 58.654 50 57 L 50 46 L 58 46 C 59.103 46 60 45.103 60 44 L 60 24 C 60 22.897 59.103 22 58 22 L 50 22 L 50 7 C 50 5.346 48.654 4 47 4 L 17.65625 4 z M 18 6 L 47 6 C 47.552 6 48 6.449 48 7 L 48 22 L 16 22 C 14.897 22 14 22.897 14 24 L 14 44 C 14 45.103 14.897 46 16 46 L 48 46 L 48 57 C 48 57.551 47.552 58 47 58 L 7 58 C 6.448 58 6 57.551 6 57 L 6 18 L 15 18 C 16.654 18 18 16.654 18 15 L 18 6 z M 16 6.4980469 L 16 15 C 16 15.551 15.552 16 15 16 L 6.4980469 16 C 6.6080469 15.835 6.7349062 15.679156 6.8789062 15.535156 L 15.535156 6.8789062 C 15.679156 6.7349062 15.834 6.6080469 16 6.4980469 z M 16 24 L 58 24 L 58 44 L 16 44 L 16 24 z M 45 28 C 44.448 28 44 28.448 44 29 L 44 39 C 44 39.552 44.448 40 45 40 L 50 40 C 50.552 40 51 39.552 51 39 C 51 38.448 50.552 38 50 38 L 46 38 L 46 29 C 46 28.448 45.552 28 45 28 z M 35.107422 28.005859 C 34.997219 27.993891 34.883484 28.001094 34.771484 28.027344 C 34.319484 28.133344 34 28.536 34 29 L 34 39 C 34 39.552 34.447 40 35 40 C 35.553 40 36 39.552 36 39 L 36 33.236328 L 37.105469 35.447266 C 37.445469 36.125266 38.554531 36.125266 38.894531 35.447266 L 40 33.236328 L 40 39 C 40 39.552 40.447 40 41 40 C 41.553 40 42 39.552 42 39 L 42 29 C 42 28.536 41.680516 28.133344 41.228516 28.027344 C 40.780516 27.921344 40.312469 28.137734 40.105469 28.552734 L 38 32.763672 L 35.894531 28.552734 C 35.739281 28.241484 35.438031 28.041766 35.107422 28.005859 z M 31.136719 28.007812 C 30.751828 27.95325 30.354375 28.127219 30.140625 28.480469 L 28 32.060547 L 25.859375 28.490234 C 25.517375 28.056234 24.888078 27.981266 24.455078 28.322266 C 24.104078 28.599266 23.980391 29.076234 24.150391 29.490234 L 26.830078 34 L 24.140625 38.490234 C 23.930625 39.001234 24.173594 39.585875 24.683594 39.796875 C 25.096594 39.966875 25.572609 39.842234 25.849609 39.490234 L 28 35.939453 L 30.140625 39.509766 C 30.350625 40.020766 30.934313 40.263734 31.445312 40.052734 C 31.956312 39.842734 32.199281 39.257094 31.988281 38.746094 C 31.953281 38.661094 31.906609 38.582766 31.849609 38.509766 L 29.169922 34 L 31.859375 29.509766 C 32.141375 29.034766 31.984766 28.422625 31.509766 28.140625 C 31.391766 28.069875 31.265016 28.026 31.136719 28.007812 z M 9 52 C 8.447 52 8 52.448 8 53 L 8 55 C 8 55.552 8.447 56 9 56 C 9.553 56 10 55.552 10 55 L 10 53 C 10 52.448 9.553 52 9 52 z M 14 52 C 13.447 52 13 52.448 13 53 L 13 55 C 13 55.552 13.447 56 14 56 C 14.553 56 15 55.552 15 55 L 15 53 C 15 52.448 14.553 52 14 52 z M 19 52 C 18.447 52 18 52.448 18 53 L 18 55 C 18 55.552 18.447 56 19 56 C 19.553 56 20 55.552 20 55 L 20 53 C 20 52.448 19.553 52 19 52 z M 24 52 C 23.447 52 23 52.448 23 53 L 23 55 C 23 55.552 23.447 56 24 56 C 24.553 56 25 55.552 25 55 L 25 53 C 25 52.448 24.553 52 24 52 z M 29 52 C 28.447 52 28 52.448 28 53 L 28 55 C 28 55.552 28.447 56 29 56 C 29.553 56 30 55.552 30 55 L 30 53 C 30 52.448 29.553 52 29 52 z M 34 52 C 33.447 52 33 52.448 33 53 L 33 55 C 33 55.552 33.447 56 34 56 C 34.553 56 35 55.552 35 55 L 35 53 C 35 52.448 34.553 52 34 52 z M 39 52 C 38.447 52 38 52.448 38 53 L 38 55 C 38 55.552 38.447 56 39 56 C 39.553 56 40 55.552 40 55 L 40 53 C 40 52.448 39.553 52 39 52 z M 44 52 C 43.447 52 43 52.448 43 53 L 43 55 C 43 55.552 43.447 56 44 56 C 44.553 56 45 55.552 45 55 L 45 53 C 45 52.448 44.553 52 44 52 z"
			/>
		</svg>
	);
}

function Indeterminate({ width, height, color, ...rest }: Props) {
	return (
		<svg
			width={width || '100%'}
			height={height || '50%'}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<g id="Layer_1">
				<title>Layer 1</title>
				<rect
					stroke="#000"
					rx="3"
					id="svg_1"
					width={width || '100%'}
					height={height || '100%'}
					y="-0.07418"
					x="-0.01483"
					strokeWidth="0"
					fill={color || 'currentColor'}
				/>
			</g>
		</svg>
	);
}

type PropsStar = Omit<Props, 'color'> & {
	colorFill?: string;
	colorStroke?: string;
};

function Star({ width, height, colorFill, colorStroke, ...rest }: PropsStar) {
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			width={width || '100%'}
			height={height || '100%'}
			fill="currentColor"
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z"
				fill={colorFill || '#fff'}
				stroke={colorStroke || '#FFF'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function ArrowSingleLeft({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="160 208 80 128 160 48"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function ArrowSingleRight({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="96 48 176 128 96 208"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function ArrowPairLeft({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="200 208 120 128 200 48"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="120 208 40 128 120 48"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function ArrowPairRight({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="56 48 136 128 56 208"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="136 48 216 128 136 208"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Linkedin({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="256" height="256" fill="none" />
			<rect
				x="36"
				y="36"
				width="184"
				height="184"
				rx="8"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="120"
				y1="112"
				x2="120"
				y2="176"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="88"
				y1="112"
				x2="88"
				y2="176"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M120,140a28,28,0,0,1,56,0v36"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<circle cx="88" cy="80" r="12" />
		</svg>
	);
}

function Github({ width, height, color, ...rest }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M84,240a23.9,23.9,0,0,0,24-24V168"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M172,240a23.9,23.9,0,0,1-24-24V168"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Funnel({
	width,
	height,
	color,
	fullFill,
	...rest
}: Props & { fullFill?: boolean }) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M42.1,48H213.9a8,8,0,0,1,5.9,13.4l-65.7,72.3a7.8,7.8,0,0,0-2.1,5.4v56.6a7.9,7.9,0,0,1-3.6,6.7l-32,21.3a8,8,0,0,1-12.4-6.6v-78a7.8,7.8,0,0,0-2.1-5.4L36.2,61.4A8,8,0,0,1,42.1,48Z"
				fill={fullFill ? color || 'currentColor' : 'none'}
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Trash({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<line
				x1="216"
				y1="56"
				x2="40"
				y2="56"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="104"
				y1="104"
				x2="104"
				y2="168"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="152"
				y1="104"
				x2="152"
				y2="168"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Save({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<circle
				cx="128"
				cy="148"
				r="28"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="96 80 160 80 160 40"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Csv({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			stroke={color || 'currentColor'}
			viewBox="0 0 64 64"
		>
			<path
				fill={color || 'currentColor'}
				d="M 17.660156 4 C 16.320313 4 15.058594 4.519531 14.121094 5.460938 L 5.460938 14.121094 C 4.519531 15.070313 4 16.320313 4 17.660156 L 4 57 C 4 58.648438 5.351563 60 7 60 L 47 60 C 48.648438 60 50 58.648438 50 57 L 50 46 L 58 46 C 59.101563 46 60 45.101563 60 44 L 60 24 C 60 22.898438 59.101563 22 58 22 L 50 22 L 50 7 C 50 5.351563 48.648438 4 47 4 Z M 18 6 L 47 6 C 47.550781 6 48 6.449219 48 7 L 48 22 L 16 22 C 14.898438 22 14 22.898438 14 24 L 14 44 C 14 45.101563 14.898438 46 16 46 L 48 46 L 48 57 C 48 57.550781 47.550781 58 47 58 L 7 58 C 6.449219 58 6 57.550781 6 57 L 6 18 L 15 18 C 16.652344 18 18 16.652344 18 15 Z M 16 6.5 L 16 15 C 16 15.550781 15.550781 16 15 16 L 6.5 16 C 6.613281 15.835938 6.738281 15.679688 6.882813 15.539063 L 15.539063 6.882813 C 15.679688 6.738281 15.835938 6.609375 16 6.5 Z M 16 24 L 58 24 L 58 44 L 16 44 Z M 27 28 C 25.347656 28 24 29.347656 24 31 L 24 37 C 24 38.652344 25.347656 40 27 40 L 29 40 C 30.652344 40 32 38.652344 32 37 C 32 36.445313 31.554688 36 31 36 C 30.445313 36 30 36.445313 30 37 C 30 37.550781 29.550781 38 29 38 L 27 38 C 26.449219 38 26 37.550781 26 37 L 26 31 C 26 30.449219 26.449219 30 27 30 L 29 30 C 29.550781 30 30 30.449219 30 31 C 30 31.554688 30.445313 32 31 32 C 31.554688 32 32 31.554688 32 31 C 32 29.347656 30.652344 28 29 28 Z M 37 28 C 35.347656 28 34 29.347656 34 31 L 34 32 C 34 33.652344 35.347656 35 37 35 L 39 35 C 39.550781 35 40 35.449219 40 36 L 40 37 C 40 37.550781 39.550781 38 39 38 L 37 38 C 36.449219 38 36 37.550781 36 37 C 36 36.445313 35.554688 36 35 36 C 34.445313 36 34 36.445313 34 37 C 34 38.652344 35.347656 40 37 40 L 39 40 C 40.652344 40 42 38.652344 42 37 L 42 36 C 42 34.347656 40.652344 33 39 33 L 37 33 C 36.449219 33 36 32.550781 36 32 L 36 31 C 36 30.449219 36.449219 30 37 30 L 39 30 C 39.550781 30 40 30.449219 40 31 C 40 31.554688 40.445313 32 41 32 C 41.554688 32 42 31.554688 42 31 C 42 29.347656 40.652344 28 39 28 Z M 45.109375 28.003906 C 44.980469 27.992188 44.84375 28.003906 44.714844 28.042969 C 44.183594 28.203125 43.886719 28.757813 44.042969 29.285156 L 47.042969 39.285156 C 47.171875 39.710938 47.558594 40 48 40 C 48.441406 40 48.828125 39.710938 48.957031 39.285156 L 51.957031 29.285156 C 52.113281 28.757813 51.816406 28.203125 51.285156 28.042969 C 50.753906 27.886719 50.199219 28.183594 50.042969 28.714844 L 48 35.519531 L 45.957031 28.714844 C 45.835938 28.316406 45.496094 28.046875 45.109375 28.003906 Z M 9 52 C 8.445313 52 8 52.445313 8 53 L 8 55 C 8 55.554688 8.445313 56 9 56 C 9.554688 56 10 55.554688 10 55 L 10 53 C 10 52.445313 9.554688 52 9 52 Z M 14 52 C 13.445313 52 13 52.445313 13 53 L 13 55 C 13 55.554688 13.445313 56 14 56 C 14.554688 56 15 55.554688 15 55 L 15 53 C 15 52.445313 14.554688 52 14 52 Z M 19 52 C 18.445313 52 18 52.445313 18 53 L 18 55 C 18 55.554688 18.445313 56 19 56 C 19.554688 56 20 55.554688 20 55 L 20 53 C 20 52.445313 19.554688 52 19 52 Z M 24 52 C 23.445313 52 23 52.445313 23 53 L 23 55 C 23 55.554688 23.445313 56 24 56 C 24.554688 56 25 55.554688 25 55 L 25 53 C 25 52.445313 24.554688 52 24 52 Z M 29 52 C 28.445313 52 28 52.445313 28 53 L 28 55 C 28 55.554688 28.445313 56 29 56 C 29.554688 56 30 55.554688 30 55 L 30 53 C 30 52.445313 29.554688 52 29 52 Z M 34 52 C 33.445313 52 33 52.445313 33 53 L 33 55 C 33 55.554688 33.445313 56 34 56 C 34.554688 56 35 55.554688 35 55 L 35 53 C 35 52.445313 34.554688 52 34 52 Z M 39 52 C 38.445313 52 38 52.445313 38 53 L 38 55 C 38 55.554688 38.445313 56 39 56 C 39.554688 56 40 55.554688 40 55 L 40 53 C 40 52.445313 39.554688 52 39 52 Z M 44 52 C 43.445313 52 43 52.445313 43 53 L 43 55 C 43 55.554688 43.445313 56 44 56 C 44.554688 56 45 55.554688 45 55 L 45 53 C 45 52.445313 44.554688 52 44 52 Z"
			/>
		</svg>
	);
}

function Pen({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="136"
				y1="64"
				x2="192"
				y2="120"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="160 192 200 152 192 120"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="40.5"
				y1="160.5"
				x2="95.5"
				y2="215.5"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Brazil({ width, height, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			textRendering="geometricPrecision"
			fillRule="evenodd"
			xmlSpace="preserve"
			imageRendering="optimizeQuality"
			shapeRendering="geometricPrecision"
			viewBox="0 0 100000 70000"
		>
			<title>Português</title>
			<rect y="0" x="0" fill="#00923F" width="1e5" height="7e4" />
			<path
				d="m5e4 8500l-41500 26500 41500 26500 41500-26500-41500-26500z"
				fill="#F8C300"
			/>
			<circle cy="35000" cx="49963" r="17464" fill="#28166F" />
			<path
				d="m51733 38767l211 533 571 36-440 366 141 555-483-307-484 307 142-555-441-366 571-36 212-533zm13056 1864l180 454 487 31-376 312 121 472-412-261-413 261 121-472-375-312 487-31 180-454zm-1869 1447l212 532 571 37-441 365 142 555-484-306-484 306 142-555-441-365 572-37 211-532zm-693-1873l251 631 677 44-522 433 168 657-574-363-573 363 168-657-522-433 677-44 250-631zm-134 3262l211 532 572 36-441 366 142 555-484-307-484 307 142-555-441-366 571-36 212-532zm-1635 860l180 453 487 32-375 311 121 473-413-261-412 261 121-473-376-311 487-32 180-453zm-1681 1563l212 532 571 37-441 365 142 555-484-307-483 307 141-555-440-365 571-37 211-532zm-20 1956l180 454 487 31-375 312 121 473-413-261-412 261 121-473-376-312 487-31 180-454zm-27-3536l180 453 487 31-376 312 121 473-412-261-413 261 121-473-376-312 488-31 180-453zm-2060 405l181 454 487 31-376 312 121 473-413-261-412 261 121-473-376-312 487-31 180-454zm-1321-16761l251 631 677 43-522 433 168 657-574-363-573 363 168-657-522-433 677-43 250-631zm-276 18360l211 533 572 36-441 366 142 554-484-306-484 306 142-554-441-366 571-36 212-533zm-972-13052l181 453 487 32-376 311 121 473-413-261-412 261 121-473-376-311 487-32 180-453zm-463 11013l180 454 487 31-375 311 121 473-413-261-412 261 121-473-376-311 487-31 180-454zm-3506-7005l211 532 572 37-441 365 142 555-484-306-484 306 142-555-441-365 571-37 212-532zm-102 4954l250 631 678 43-523 433 168 658-573-363-573 363 168-658-523-433 678-43 250-631zm57 6317l96 242 260 17-200 166 64 253-220-140-220 140 64-253-200-166 260-17 96-242zm-1103-8349l135 340 364 23-281 233 91 354-309-196-308 196 90-354-281-233 365-23 134-340zm-1276-1103l180 454 487 31-376 311 121 473-412-261-413 261 121-473-376-311 488-31 180-454zm-4536-4170l211 533 571 36-440 366 141 555-483-307-484 307 142-555-441-366 571-36 212-533zm-511 8821l250 631 678 44-523 433 168 657-573-363-574 363 169-657-523-433 677-44 251-631zm-1918-3482l212 532 571 37-441 365 142 555-484-307-483 307 141-555-440-365 571-37 211-532zm-632 1962l180 454 487 31-376 311 121 473-412-261-413 261 121-473-376-311 487-31 181-454zm-1303-4463l135 339 364 24-281 233 91 353-309-195-308 195 90-353-281-233 365-24 134-339zm-1603 704l250 631 678 43-523 433 168 658-573-363-573 363 168-658-523-433 678-43 250-631zm-1439-7266l251 631 677 43-522 433 168 658-574-363-573 363 168-658-522-433 677-43 250-631zm-394 8926l212 533 571 36-441 366 142 554-484-306-484 306 142-554-441-366 572-36 211-533z"
				fill="#fff"
			/>
			<path
				d="m39537 29605c10388 0 19911 3821 27238 10127 242-850 421-1726 532-2622-7597-6162-17265-9862-27770-9862-1821 0-3617 114-5382 330-377 805-695 1642-948 2507 2065-316 4179-480 6330-480z"
				fill="#fff"
			/>
			<path
				d="m35044 28698c14 171 64 300 148 388s194 126 331 115c137-12 241-68 309-170 69-101 95-237 81-408-15-171-65-300-149-388-85-88-196-126-334-114-137 11-239 68-307 169-67 100-94 236-79 408zm-326 28c-22-251 30-456 154-615s302-248 534-268 423 38 573 173c150 136 236 329 257 579 22 251-30 456-155 615-124 159-303 249-534 269-233 20-423-38-573-174-149-136-235-329-256-579zm2536-290l377-13c82-3 141-21 179-56 37-34 54-87 52-158-2-68-23-119-61-152-39-34-95-50-169-47l-392 13 14 413zm-291 887l-52-1558 756-25c169-6 296 26 380 96 85 70 129 180 134 329 3 95-14 175-52 240-37 65-93 110-167 136 68 22 118 57 148 105 30 49 49 125 57 229l13 184v6c5 93 27 149 66 167l1 48-351 12c-12-22-21-48-28-80s-13-70-15-115l-10-164c-7-96-27-161-61-193-34-33-94-48-179-45l-340 11 21 606-321 11zm2300-350l257 5c149 3 258-34 326-111 68-76 104-203 107-377 3-175-25-303-86-386s-157-126-289-128l-296-6-19 1003zm-320 275l30-1558 610 11c240 5 417 73 532 204s170 328 165 591c-3 142-27 267-72 375-46 108-111 194-194 259-63 48-134 82-214 102-79 20-190 29-333 26l-524-10zm1978 35l84-1556 1131 61-15 270-815-44-17 332 744 40-14 266-745-40-21 400 852 46-15 288-1169-63zm1835 109l165-1550 472 50 182 1213 430-1147 473 50-165 1550-299-32 133-1250-448 1217-326-35-185-1284-134 1250-298-32zm4130 532l326-1524 1107 237-57 265-797-171-70 325 730 156-56 261-730-157-84 392 835 179-60 282-1144-245zm4125 96l300 81c81 21 144 20 190-4 46-25 80-75 100-152 20-71 16-130-10-177-26-46-75-79-147-98l-315-85-118 435zm-75 272l-144 535-310-83 405-1505 670 180c158 43 266 117 326 220 59 104 67 236 24 395-41 155-113 264-216 326-102 63-228 74-375 35l-380-103zm1874 245l360 111c78 24 141 26 187 5 47-20 80-65 101-133 20-64 17-119-8-163-25-45-74-78-144-100l-375-115-121 395zm-564 744l457-1490 723 222c162 50 272 122 329 215 57 94 63 212 19 355-28 91-70 161-127 210s-124 74-202 74c57 43 93 92 106 148 12 56 5 134-21 235l-48 178c0 1-1 3-2 6-25 89-23 149 8 179l-14 46-336-104c-4-24-5-52-1-85 4-32 11-70 23-113l44-158c25-93 27-161 6-202-22-42-73-76-155-101l-325-100-178 579-306-94zm2373-5c-59 161-68 299-29 415 38 115 122 196 251 243 130 47 247 40 352-23s187-175 246-336c58-161 68-299 29-414-40-116-125-198-255-245-128-47-245-39-349 23-104 63-186 175-245 337zm-307-113c87-236 220-400 399-492 180-91 379-97 598-17 218 80 367 213 446 399 79 187 75 398-12 634-86 236-219 400-400 491-180 92-380 98-598 18-219-80-367-213-445-399s-74-398 12-634zm2884 1831c-84 49-167 76-250 81-82 5-169-12-260-51-200-86-333-224-398-416-65-193-49-402 47-628 98-229 238-385 420-469 182-85 377-83 583 5 180 77 308 182 385 317 77 134 94 281 51 441l-301-128c14-82 1-155-39-218-39-63-104-113-194-152-120-51-233-47-339 12-106 58-192 165-258 320-67 156-83 293-49 412s113 205 237 258c94 39 184 45 270 17 87-29 158-88 214-177l-325-139 104-245 594 253-331 776-197-84 36-185zm1482-41l338 166c74 36 135 47 184 34s89-51 121-116c29-60 35-114 17-162s-61-88-127-121l-352-172-181 371zm-674 646l685-1399 679 332c153 75 250 163 291 264 42 101 30 219-36 353-42 86-95 148-158 188-64 39-135 53-212 41 50 52 77 105 82 163 3 57-16 133-58 228l-75 169c0 1-1 3-3 5-39 84-46 144-20 179l-21 42-316-154c0-25 4-53 13-84 9-32 22-68 41-108l68-149c39-88 51-155 37-200-15-45-61-86-137-123l-305-150-267 544-288-141zm1742 895l758-1362 989 550-132 237-713-397-161 291 652 362-130 233-652-362-195 350 747 415-140 252-1023-569zm1759 483l271 163c-34 79-37 152-9 217s89 126 183 182c80 49 148 71 206 66 58-3 103-33 137-89 48-81-28-218-228-411l-7-7c-5-5-13-13-24-23-109-103-179-187-211-253-30-58-41-121-35-187s30-133 72-203c78-130 182-202 312-219 130-15 279 27 445 127 156 94 256 205 299 331 44 127 27 259-48 396l-264-159c34-68 39-132 14-192-24-61-78-117-160-166-72-44-136-63-192-59-56 5-99 33-131 85-43 71 2 169 132 296 35 34 63 61 82 80 83 84 140 145 173 183 32 39 58 75 78 111 36 63 53 127 50 193-3 67-25 135-67 204-84 139-195 218-335 238s-295-21-465-124c-168-101-277-219-325-355-48-135-33-277 47-425zm1642 1027l262 178c-38 77-44 149-19 216 24 66 82 130 173 191 77 52 144 78 202 77s105-28 141-82c53-79-16-219-206-423-2-2-5-5-6-7-6-5-13-13-23-25-103-108-169-195-198-263-26-59-34-123-25-188 10-66 37-132 83-199 85-126 193-193 323-202 131-9 277 41 438 150 151 102 244 217 281 346s14 259-69 392l-256-172c38-66 46-130 25-192s-72-120-151-174c-70-47-133-70-189-68s-101 28-135 78c-46 68-7 169 116 302 34 36 60 65 78 85 78 87 132 152 163 191 30 40 54 79 72 115 33 65 46 130 40 196s-32 133-78 200c-90 134-206 208-347 220-141 13-293-36-458-148-162-110-264-234-305-371-42-138-19-279 68-423zm1981 1051c-104 137-154 267-150 388 3 122 60 224 169 307 110 83 225 110 344 81 118-29 229-113 333-250 103-136 153-266 149-388-5-122-62-225-172-308-109-83-223-109-341-79-118 29-229 112-332 249zm-261-197c152-200 327-318 525-354 199-35 391 18 577 158 186 141 289 311 310 513 20 201-45 402-196 602-152 201-328 319-527 353-199 35-392-17-577-157-186-141-289-312-309-513-20-200 45-401 197-602z"
				fill="#00923F"
			/>
		</svg>
	);
}

function Eua({ ...rest }: Props) {
	return (
		<svg {...rest} viewBox="0 0 600 400">
			<g id="imagebot_1">
				<title>English</title>
				<g
					id="imagebot_73"
					transform="translate(0 .52632) matrix(2.9977 0 0 3.8541 0 -2.0285)"
				>
					<metadata id="imagebot_72">image/svg+xml</metadata>
					<g id="imagebot_70" transform="scale(.52632)">
						<rect
							id="imagebot_71"
							fillRule="evenodd"
							strokeDashoffset="0pt"
							height="199"
							width="379"
							stroke="#000"
							y="1"
							x="0"
							fill="none"
						/>
					</g>
					<g
						id="imagebot_56"
						// label="stripes"
						strokeDashoffset="0pt"
						transform="scale(.52632)"
						fillRule="evenodd"
					>
						<rect
							id="imagebot_69"
							height="16"
							width="379"
							y="184"
							x="0"
							fill="#bf0a30"
						/>
						<rect
							id="imagebot_68"
							height="16"
							width="379"
							y="168"
							x="0"
							fill="#fff"
						/>
						<rect
							id="imagebot_67"
							height="16"
							width="379"
							y="152"
							x="0"
							fill="#bf0a30"
						/>
						<rect
							id="imagebot_66"
							height="16"
							width="379"
							y="136"
							x="0"
							fill="#fff"
						/>
						<rect
							id="imagebot_65"
							height="15"
							width="379"
							y="121"
							x="0"
							fill="#bf0a30"
						/>
						<rect
							id="imagebot_64"
							height="15"
							width="379"
							y="106"
							x="0"
							fill="#fff"
						/>
						<rect
							id="imagebot_63"
							height="15"
							width="379"
							y="91"
							x="0"
							fill="#bf0a30"
						/>
						<rect
							id="imagebot_62"
							height="15"
							width="379"
							y="76"
							x="0"
							fill="#fff"
						/>
						<rect
							id="imagebot_61"
							height="15"
							width="379"
							y="61"
							x="0"
							fill="#bf0a30"
						/>
						<rect
							id="imagebot_60"
							height="15"
							width="379"
							y="46"
							x="0"
							fill="#fff"
						/>
						<rect
							id="imagebot_59"
							height="15"
							width="379"
							y="31"
							x="0"
							fill="#bf0a30"
						/>
						<rect
							id="imagebot_58"
							height="15"
							width="379"
							y="16"
							x="0"
							fill="#fff"
						/>
						<rect
							id="imagebot_57"
							height="15"
							width="379"
							y="1"
							x="0"
							fill="#bf0a30"
						/>
					</g>
					<g
						id="imagebot_54"
						// label="field"
						transform="scale(.52632)"
					>
						<rect
							id="imagebot_55"
							fillRule="evenodd"
							strokeDashoffset="0pt"
							height="105"
							width="152"
							y="1"
							x="0"
							fill="#002868"
						/>
					</g>
					<g
						id="imagebot_3"
						transform="scale(.52632)"
						fillRule="evenodd"
						strokeDashoffset="0pt"
						// label="stars"
						fill="#fff"
					>
						<path
							id="imagebot_53"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -86.263 -76.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_52"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -61.263 -76.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_51"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -35.263 -76.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_50"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -10.263 -76.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_49"
							transform="matrix(1.0487 .089951 -.085930 1.0977 14.737 -76.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_48"
							transform="matrix(1.0487 .089951 -.085930 1.0977 40.737 -76.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_47"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -73.263 -86.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_46"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -86.263 -97.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_45"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -73.263 -107.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_44"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -86.263 -118.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_43"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -73.263 -128.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_42"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -86.263 -139.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_41"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -73.263 -149.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_40"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -86.263 -160.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_39"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -48.263 -86.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_38"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -61.263 -97.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_37"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -48.263 -107.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_36"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -61.263 -118.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_35"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -48.263 -128.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_34"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -61.263 -139.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_33"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -48.263 -149.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_32"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -61.263 -160.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_31"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -23.263 -86.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_30"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -35.263 -97.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_29"
							transform="matrix(1.0487 .089951 -.085930 1.0977 14.737 -97.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_28"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -10.263 -97.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_27"
							transform="matrix(1.0487 .089951 -.085930 1.0977 27.737 -86.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_26"
							transform="matrix(1.0487 .089951 -.085930 1.0977 2.7366 -86.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_25"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -35.263 -160.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_24"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -23.263 -149.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_23"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -35.263 -139.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_22"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -23.263 -128.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_21"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -35.263 -118.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_20"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -23.263 -107.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_19"
							transform="matrix(1.0487 .089951 -.085930 1.0977 40.737 -97.411)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_18"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -10.263 -118.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_17"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -10.263 -160.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_16"
							transform="matrix(1.0487 .089951 -.085930 1.0977 -10.263 -139.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_15"
							transform="matrix(1.0487 .089951 -.085930 1.0977 27.737 -107.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_14"
							transform="matrix(1.0487 .089951 -.085930 1.0977 2.7366 -107.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_13"
							transform="matrix(1.0487 .089951 -.085930 1.0977 2.7366 -149.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_12"
							transform="matrix(1.0487 .089951 -.085930 1.0977 2.7366 -128.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_11"
							transform="matrix(1.0487 .089951 -.085930 1.0977 40.737 -118.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_10"
							transform="matrix(1.0487 .089951 -.085930 1.0977 14.737 -118.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_9"
							transform="matrix(1.0487 .089951 -.085930 1.0977 14.737 -160.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_8"
							transform="matrix(1.0487 .089951 -.085930 1.0977 14.737 -139.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_7"
							transform="matrix(1.0487 .089951 -.085930 1.0977 40.737 -160.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_6"
							transform="matrix(1.0487 .089951 -.085930 1.0977 27.737 -149.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_5"
							transform="matrix(1.0487 .089951 -.085930 1.0977 40.737 -139.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
						<path
							id="imagebot_4"
							transform="matrix(1.0487 .089951 -.085930 1.0977 27.737 -128.41)"
							d="m100.33 146.67l4.14-0.78 1.28-4.01 2.01 3.7 4.21-0.03-2.89 3.06 1.32 4-3.8-1.81-3.39 2.49 0.55-4.17-3.43-2.45z"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
}

function Gear({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<circle
				cx="128"
				cy="128"
				r="48"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Moon({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Sun({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<circle
				cx="128"
				cy="128"
				r="60"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="128"
				y1="36"
				x2="128"
				y2="16"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="62.9"
				y1="62.9"
				x2="48.8"
				y2="48.8"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="36"
				y1="128"
				x2="16"
				y2="128"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="62.9"
				y1="193.1"
				x2="48.8"
				y2="207.2"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="128"
				y1="220"
				x2="128"
				y2="240"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="193.1"
				y1="193.1"
				x2="207.2"
				y2="207.2"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="220"
				y1="128"
				x2="240"
				y2="128"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="193.1"
				y1="62.9"
				x2="207.2"
				y2="48.8"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Triangle({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function ArrowSingleDown({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="208 96 128 176 48 96"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function ClipboardText({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<line
				x1="96"
				y1="152"
				x2="160"
				y2="152"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="96"
				y1="120"
				x2="160"
				y2="120"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M88,72V64a40,40,0,0,1,80,0v8Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function YoutubeLogo({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<polygon
				points="160 128 112 96 112 160 160 128"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function List({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<line
				x1="40"
				y1="128"
				x2="216"
				y2="128"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="40"
				y1="64"
				x2="216"
				y2="64"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="40"
				y1="192"
				x2="216"
				y2="192"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function WhatsappLogo({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function TelegramLogo({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M88,134.9,177.9,214a8,8,0,0,0,13.1-4.2L228.6,45.6a8,8,0,0,0-10.7-9.2L33.3,108.9c-7.4,2.9-6.4,13.7,1.4,15.3Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="88"
				y1="134.9"
				x2="224.1"
				y2="36.6"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M132.9,174.4l-31.2,31.2A8,8,0,0,1,88,200V134.9"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function TrendDown({ width, height, color, children, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			{children}
			<rect width="256" height="256" fill="none" />
			<polyline
				points="232 200 136 104 96 144 24 72"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="232 136 232 200 168 200"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function TrendUp({ width, height, color, children, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			{children}
			<rect width="256" height="256" fill="none" />
			<polyline
				points="232 56 136 152 96 112 24 184"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="232 120 232 56 168 56"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

export const Icons = {
	Eye,
	ShortList,
	Summary,
	ListFile,
	ArrowsOutSimple,
	ArrowsInSimple,
	Download,
	Upload,
	Clear,
	Search,
	Report,
	User,
	Close,
	Info,
	Error,
	Checked,
	Power,
	Printer,
	Pdf,
	Excel,
	Xml,
	Indeterminate,
	Star,
	ArrowSingleLeft,
	ArrowSingleRight,
	ArrowPairLeft,
	ArrowPairRight,
	Linkedin,
	Github,
	Funnel,
	Trash,
	Save,
	Csv,
	Pen,
	Brazil,
	Eua,
	Gear,
	Moon,
	Sun,
	Triangle,
	ArrowSingleDown,
	Xls,
	ClipboardText,
	YoutubeLogo,
	List,
	WhatsappLogo,
	TelegramLogo,
	TrendDown,
	TrendUp,
};
