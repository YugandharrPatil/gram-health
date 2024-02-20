import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "GramHealth",
	description: "Hyperlocal medicine delivery made easy!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
