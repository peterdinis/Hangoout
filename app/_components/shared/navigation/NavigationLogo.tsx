import type { FC } from "react";

const NavigationLogo: FC = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 200 200"
			width="50"
			height="50" /* Reduced size */
		>
			<circle cx="100" cy="100" r="100" fill="url(#gradient)" />

			<defs>
				<linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#FF7EB3" />
					<stop offset="100%" stop-color="#FF758C" />
				</linearGradient>
			</defs>

			<path
				d="M0,100 C50,120 150,80 200,100 L200,200 L0,200 Z"
				fill="rgba(255, 255, 255, 0.7)"
			/>
			<path
				d="M0,120 C50,140 150,100 200,120 L200,200 L0,200 Z"
				fill="rgba(255, 255, 255, 0.5)"
			/>
			<path
				d="M0,140 C50,160 150,120 200,140 L200,200 L0,200 Z"
				fill="rgba(255, 255, 255, 0.3)"
			/>

			<circle cx="60" cy="60" r="20" fill="rgba(255, 255, 255, 0.5)" />
			<circle cx="140" cy="140" r="15" fill="rgba(255, 255, 255, 0.6)" />
			<rect
				x="80"
				y="80"
				width="40"
				height="40"
				rx="10"
				fill="rgba(255, 255, 255, 0.4)"
			/>
		</svg>
	);
};

export default NavigationLogo;
