import { Inter, Syne } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Stars from './components/Stars';
import { Providers } from './providers';
import Script from 'next/script';
import ClientLayout from './components/ClientLayout';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata = {
  title: 'Agency Website',
  description: 'Modern Agency Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXX');`}
        </Script>
      </head>
      <body className="bg-[#0B1120] min-h-screen flex flex-col">
        <ClientLayout>
          <Stars />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            <Providers>
              {children}
            </Providers>
          </main>
          <Footer />
          <WhatsAppButton />
        </ClientLayout>
      </body>
    </html>
  );
}
