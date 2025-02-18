"use client";

import {useState, createContext} from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from '@/layout/Header/layout';
import Footer from '@/layout/Footer/layout';

import logements from '@/data/logements.json';

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


// export const metadata: Metadata = {
//   title: "Booki Kaza",
//   description: "Book your Kaza",
// };

  
export const DataContext = createContext(null);


const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {

 
const [bookings,setBookings] = useState(logements.length);
const [isBooked, setIsBooked] = useState(false);


  return (

    <DataContext.Provider value={{logements,bookings,setBookings,isBooked,setIsBooked}}>

      <html lang="fr">
        
        <body className={`${geistSans.variable} ${geistMono.variable}`}>

          <Header/>

          <main className="wrapper content-first skeleton">{children}</main>

          <Footer/>

        </body>
      </html>

    </DataContext.Provider>

    

  );

}
export default RootLayout;

