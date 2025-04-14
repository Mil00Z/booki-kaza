'use client';

import { useParams } from 'next/navigation';

import { useDataContext } from '@/hooks/useDataContext';
import { Logement } from '@/types/logement.types';

import Gallery from "@/ui/Gallery/Gallery"
import Product from "@/ui/Product/Product"


//Styles
import '@/styles/pages/Annonce.scss'


const Annonce = () => {

  const {logements,bookings, setBookings,isBooked, setIsBooked} = useDataContext();

  const getParams = useParams();


  //Get ALl datas and dispatch good url Product
  const details = logements.find((logement:Logement)=> {
    return logement.id === getParams.id
  });
  
  //Fake State for Pannel UI
  const annoncePanel = true ;

  return (

    (details) ? (
    <>
      <Gallery layout={'annonce'} details={details} />
      <section className="logement-details">
          <Product details={details} annoncePanel={annoncePanel} bookings={bookings} setBookings={setBookings} isBooked={isBooked} setIsBooked={setIsBooked} />
      </section>
    </>
    ) : ('<PageNotFound />')
    

    // (details) ? (
    //   <>
    //     <Gallery layout={'annonce'} details={details} />
    //     <section className="logement-details">
    //         <Product details={details} annoncePanel={annoncePanel} bookings={bookings} setBookings={setBookings} isBooked={isBooked} setIsBooked={setIsBooked} />
    //     </section>
    //   </>
    //   ) : (<PageNotFound />)
  )
}

export default Annonce