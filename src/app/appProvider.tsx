'use client';

import {useState, useEffect,createContext} from 'react';

// Datas
import logements from '../data/logements.json';
import activities from '../data/activities.json';


interface AppProviderProps {
  children: React.ReactNode;
}

export const DataContext = createContext(null);

const AppProvider = ({children} : AppProviderProps) => {

  const [bookings,setBookings] = useState<number>(logements.length);
  const [isBooked, setIsBooked] = useState<Boolean>(false);


useEffect(() => {

  if(bookings !== logements.length) {

    document.title = `Un nouveau logement a été réservé ! ${bookings} restants`;
  } else if (bookings === 0) {
     document.title = `Aucuns logements disponibles !`;
  }

},[bookings]);


  return (
 
    <DataContext.Provider value={{logements,activities,bookings,setBookings,isBooked,setIsBooked}}>
      {children}
    </DataContext.Provider >
   
  )
}
export default AppProvider