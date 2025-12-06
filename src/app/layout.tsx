import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin", "latin-ext"],
});

const orbitron = Orbitron({
	variable: "--font-orbitron",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Honza The Student | Coming Soon",
	description: "Something amazing is coming. Subscribe to be the first to know when we launch!",
	keywords: ["honza", "student", "coming soon", "launching soon"],
	authors: [{ name: "Honza The Student" }],
	creator: "Honza The Student",
	publisher: "Honza The Student",
	metadataBase: new URL("https://honzathestudent.com"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Honza The Student | Coming Soon",
		description: "Something amazing is coming. Subscribe to be the first to know when we launch!",
		url: "https://honzathestudent.com",
		siteName: "Honza The Student",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Honza The Student - Coming Soon",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Honza The Student | Coming Soon",
		description: "Something amazing is coming!",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/favicon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<meta name="theme-color" content="#0a0a0f" />
			</head>
			<body className={`${inter.variable} ${orbitron.variable}`}>
				{children}
			</body>
		</html>
	);
}
