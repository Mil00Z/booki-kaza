
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from '@/components/layout/header/layout';
import Footer from '@/components/layout/footer/layout';

//Styles
import "./globals.css";
import '../styles/main.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Booki Kaza",
  description: "Book your Kaza",
};




const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {

  return (

    <html lang="fr">

      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <Header/>

        <main className="wrapper">{children}</main>

        <Footer/>

      </body>
    </html>

  );

}
export default RootLayout;

