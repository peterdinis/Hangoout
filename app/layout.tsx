import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./_components/providers/ConvexClerkProvider";
import ThemeProvider from "./_components/providers/ThemeProvider";
import Navigation from "./_components/shared/navigation/Navigation";

export const metadata: Metadata = {
	title: "Hangooout",
	description: "Create or go to event to meet new friends",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<ConvexClientProvider>
					<ThemeProvider>
						<Navigation />
						{children}
					</ThemeProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
