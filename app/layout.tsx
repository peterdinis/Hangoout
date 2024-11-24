import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
