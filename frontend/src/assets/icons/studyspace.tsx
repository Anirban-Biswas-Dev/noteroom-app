export default function StudySpaceIcon(props: React.SVGAttributes<SVGElement>): React.ReactElement<SVGElement> {
    return (
    	<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
	   		<g opacity="0.52">
				<rect x="0.3125" y="0.3125" width="19.375" height="19.375" stroke="#191919" stroke-width="0.625"/>
				<path d="M1.25 0.625H19.0625L11.5625 5L1.25 0.625Z" fill="#1A1A1A"/>
				<path d="M1.25 2.8125L2.8125 1.25L11.5625 5L19.0625 0.625L12.5 7.5L1.25 2.8125Z" fill="#191919" fill-opacity="0.4"/>
				<path d="M2.5 5.3125L3.75 3.75L12.5 7.5L19.0625 0.625L13.75 10L2.5 5.3125Z" fill="#282828" fill-opacity="0.54"/>
				<path d="M3.75 7.8125L4.6875 6.25L13.75 10L19.0625 0.625L14.6875 12.1875L3.75 7.8125Z" fill="#2D2D2D" fill-opacity="0.39"/>
				<path d="M4.375 12.5L7.5 19.375H4.375V12.5Z" fill="#191919"/>
				<path d="M4.375 12.5L19.375 18.4783V19.375H7.5L4.375 12.5Z" fill="url(#paint0_linear_10210_5637)"/>
			</g>
			<defs>
				<linearGradient id="paint0_linear_10210_5637" x1="11.875" y1="12.5" x2="11.875" y2="19.375" gradientUnits="userSpaceOnUse">
					<stop stop-color="#2D2D2D"/>
					<stop offset="1" stop-color="#282828"/>
				</linearGradient>
			</defs>
    	</svg>
    )
}
