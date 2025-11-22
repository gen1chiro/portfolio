import type { Metadata } from "next";
import { Montserrat, Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Nav from "@/components/nav";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    display: "swap",
    subsets: ["latin"],
});

const inconsolata = Inconsolata({
    variable: "--font-inconsolata",
    display: "swap",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jul Leo Javellana",
  description: "My personal dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inconsolata.variable} antialiased`}
      >
        <Header />
        {children}
        <Nav />
      </body>
    </html>
  );
}
