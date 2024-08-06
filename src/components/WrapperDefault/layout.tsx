import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export default function WrapperLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    {children}
    </div>
  );
}