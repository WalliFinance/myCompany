import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/page";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>  
        <Header/>
        {children}
      </body>
    </html>
  );
}
