import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Villagers - Build Your Local Community",
  description: "Villagers helps local businesses connect with their most valuable customers and helps shoppers support the communities they love. Join the movement to build stronger local connections.",
  keywords: ["local business", "community", "local shopping", "small business", "local impact"],
  authors: [{ name: "Villagers" }],
  openGraph: {
    title: "Villagers - Build Your Local Community",
    description: "Connect with local businesses and support your community",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
