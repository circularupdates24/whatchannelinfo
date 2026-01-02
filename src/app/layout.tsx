import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "The Tools Hub: Free Online Tools for SEO, Developers, Images & Text",
	description:
		"Discover 50+ free online tools at The Tools Hub for SEO, calculators, generators, image tools, text tools, and developers—all in one place.",
	keywords:
		"online tools, free tools, SEO tools, calculators, generators, text tools, image tools, developer tools, password generator, QR code generator, thetoolshub, thetoolshub.com, thetoolshub.in",
	authors: [{ name: "The Tools Hub Team" }],
	creator: "The Tools Hub",
	publisher: "The Tools Hub",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://whatchannelinfo.com",
		title: "The Tools Hub - 60+ Free Online Tools",
		description:
			"Boost your productivity with our collection of powerful, free online tools.",
		siteName: "The Tools Hub",
	},
	twitter: {
		card: "summary_large_image",
		title: "The Tools Hub - 60+ Free Online Tools",
		description:
			"Boost your productivity with our collection of powerful, free online tools.",
		creator: "@thetoolshub",
		images: ["https://www.yourdomain.com/og-image.jpg"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=XXXXXXXXXXXXX'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'XXXXXXXX');
					`,
					}}
				/>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXXX'
					crossOrigin='anonymous'
				/>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Header />
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
