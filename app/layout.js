import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata = {
  title: "NOVA AGENCY | Creative Digital Agency",
  description: "NOVA AGENCY is a creative digital agency delivering innovative solutions for modern businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <Script id="dark-mode-script" strategy="afterInteractive">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
      </head>
      <body className="bg-[#0B1120] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
