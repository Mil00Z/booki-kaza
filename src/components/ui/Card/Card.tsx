import Link from "next/link";

import type { Logement } from "@/types/logement.types";


import '@/styles/components/Card.scss'

interface  CardProps {
  logement: Logement;
  bookings: number;
  setBookings: (value: (prev:number) => number) => void;
  isBooked: boolean;
  setIsBooked: (value:boolean) => void;
}

const Card = ({logement,bookings,setBookings,isBooked, setIsBooked} : CardProps) => {  

  return (

    <Link href={`/annonce/${logement.id}`} className={`card ${isBooked && 'booked'}`} style={{background:`url(${logement.cover}),linear-gradient(to bottom, #FFF 0%, #FFF 42%, #0A0A0A 100%)`}}><h2 className="card-title">{logement.title}</h2>
    <p className="card-description">{logement.description}</p></Link>
        
  )

}

export default Card

 // TODO : #Développer le booking State :
// - Element local "mémoire" du state de chacun des élèments
// - UI distincte 'Listing/Card' si Booked/notBooked
// - UI distincte 'Annonce' (btn / subtitle) si Booked/notBooked
// 




