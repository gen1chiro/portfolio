import type { Metadata } from "next";
import { Montserrat, Inconsolata } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/shared/header";
import Nav from "@/components/shared/nav/nav";
import Footer from "@/components/shared/footer";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inconsolata.variable} antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
            <Header />
            {children}
            <Footer />
            <Nav />
        </ThemeProvider>
      </body>
    </html>
  );
}
