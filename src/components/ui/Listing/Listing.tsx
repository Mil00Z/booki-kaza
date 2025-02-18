"use client";

import { useEffect, useContext } from 'react';
import { DataContext } from 'src/app/layout';

import Card from '@/components/ui/Card/Card';

import '@/styles/components/Listing.scss'



const Listing = () => {

  const {logements,bookings, setBookings,isBooked, setIsBooked} = useContext(DataContext);


  useEffect(() => {
    


  },[bookings]);
  

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