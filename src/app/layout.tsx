"use client";

import {useState, useEffect, createContext} from 'react';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from '@/layout/Header/layout';
import Footer from '@/layout/Footer/layout';

import logements from '@/data/logements.json';
import activities from '@/data/activities.json';

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


useEffect(() => {

  if(bookings !== logements.length) {

    document.title = `Un nouveau logement a été réservé ! ${bookings} restants`;
  } else if (bookings === 0) {
     document.title = `Aucuns logements disponibles !`;
  }

},[bookings]);



  return (

    <DataContext.Provider value={{logements,activities,bookings,setBookings,isBooked,setIsBooked}}>

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

