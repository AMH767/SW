import "./globals.css";
import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import { ClientBody } from "./ClientBody";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: ['400', '500', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Brainnest - World of Fun",
  description: "Explore fun and learning for all ages. Enjoy a world of educational toys and games.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${leagueSpartan.variable}`}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
