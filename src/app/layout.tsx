import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/page";
import Script from "next/script";
const measurementId = 'G-2RW4KC3BJP'

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
    `}
      </Script>
      <body className={inter.className}>  
        <Header/>
        {children}
      </body>
    </html>
  );
}
