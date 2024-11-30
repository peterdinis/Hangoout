"use client";

import {
	ThemeProvider as NextThemesProvider,
	type ThemeProviderProps,
} from "next-themes";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	return (
		<NextThemesProvider attribute="class" {...props}>
			{children}
		</NextThemesProvider>
	);
};

export default ThemeProvider;
