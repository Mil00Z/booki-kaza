import {useState} from 'react';

import Link from "next/link";
import Image from 'next/image'

import { useDataContext } from '@/hooks/useDataContext';
import { Logement } from '@/types/logement.types';

//Styles
import '@/styles/components/SixPack.scss'



const SixPack = () => {

  const {logements} = useDataContext();

   //Get N first logements
  const [displayedLogements, setDisplayedLogements] = useState<Logement[]>(logements.slice(0,10));


  if (!logements) {
    return <div>Les données des hébergements n'ont pas pu être chargées.</div>;
  }

 
  
  return (
    <section id="hebergements" className="block-data">
    <h2 className="section-title">
      Hébergements à <span className="hebergements_geoloc">Paris</span>
    </h2>
    <div className="lodges-cards" aria-label="liste des biens à louer">

    {displayedLogements.map((logement : Logement,index)=>{

        return(

          <Link href={`annonce/${logement.id}`} key={`pack-${index}`}>
          <article className="card card-column">
            <Image
              src={logement.cover}
              alt={`Image de ${logement.title}`}
              className="card-thumbnail"
              width={400}
              height={400}
            />
            <div className="card-content">
              <div className="card-txt">
                <h3 className="card-title">{logement.title}</h3>
                <p className="card-subtitle">
                  Nuit à partir de <span className="euro">50€</span>
                </p>
              </div>
              <div className="card-rating">
                Note de {logement.rating}/5
              </div>
              <div className="card-description">
                <p>{logement.description}</p>
              </div>
            </div>
          </article>
          </Link>
      )

    })}

      <Link href={'/annonce'} className="btn btn-cta load-more">Afficher plus 👌</Link>

    </div>
  </section>
  )
}
export default SixPack