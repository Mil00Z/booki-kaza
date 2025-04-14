"use client";

import { useEffect} from 'react';
import { useDataContext } from '@/hooks/useDataContext';

import Card from '@/components/ui/Card/Card';

import '@/styles/components/Listing.scss'



const Listing = () => {

  const {logements,bookings, setBookings,isBooked, setIsBooked} = useDataContext();


  // useEffect(() => {

  //   if(bookings !== logements.length) {

  //     alert(`Un nouveau logement a été réservé ! ${bookings} restants`);

  //   }
    
  // },[bookings]);
  

  return (
  <>
  <section className="listing-section">

    <h3 className="listing-title"><span className='free-spaces'>{ `${bookings}`}</span> logements encore disponibles ({logements.length})</h3>

    <div className="listing-container">

      { logements.map((logement,index) => {
          return (
            <Card key={`${logement.id}-${index}`} logement={logement} bookings={bookings} setBookings={setBookings} isBooked={isBooked} setIsBooked={setIsBooked} />)  
        })
      }
    </div>

  </section>
  </>
    
  )
}

export default Listing