import AppProvider from './appProvider';

import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import Header from 'src/components/layout/Header/layout';
import Footer from 'src/components/layout/Footer/layout';

//Styles
import "./globals.css";
import '@/styles/main.scss';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Kasa, bienvenue chez vous !",
  description: "Fake UI App for Booking some lodges",
  applicationName: 'Next.js App',
  keywords: ['Next.js', 'React', 'JavaScript','Booking'],
};

export const viewport : Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FF385C",
  colorScheme:"light",
}
  

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {

 
  return (

  <AppProvider >

      <html lang="fr">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        
        <body className={`${geistSans.variable} ${geistMono.variable}`}>

          <Header/>

          <main className="wrapper content-first skeleton">{children}</main>

          <Footer/>

        </body>

      </html>

  </AppProvider>

  );

}
export default RootLayout;

