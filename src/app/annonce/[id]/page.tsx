'use client';

import {useContext} from 'react'
import { DataContext } from 'src/app/layout';

import { useParams } from 'next/navigation';


import Gallery from "@/ui/Gallery/Gallery"
import Product from "@/ui/Product/Product"

// import PageNotFound from "@/app/notfound/page"
// import UnreachableProduct from "@pages/another/index"

import '@/styles/pages/Annonce.scss'


const Annonce = () => {

  const {logements,bookings, setBookings,isBooked, setIsBooked} = useContext(DataContext);

  const getParams = useParams();


  //Get ALl datas and dispatch good url Product
  let details = logements.find((logement)=> {
    return logement.id === getParams.id
  });
  
  //Fake State for Pannel UI
  let annoncePanel = true ;

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