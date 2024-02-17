import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@ui/organisms/Footer";
import { Navbar } from "@ui/organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ecom Store",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<Navbar />
				<section>{children}</section>
				<Footer />
			</body>
		</html>
	);
}
