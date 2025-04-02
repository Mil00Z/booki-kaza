import {useContext} from 'react';

import Link from "next/link";
import Image from 'next/image'

import { DataContext } from 'src/app/appProvider';

import '@/styles/components/Card.scss'
import '@/styles/components/SixPack.scss'


const SixPack = () => {

  const {logements} = useContext(DataContext);

  // let randomIndex = Math.floor(Math.random()* 10);

  let sortedLogements = logements.slice(0,6);

 
  return (
    <section id="hebergements" className="block-data">
    <h2 className="section-title">
      Hébergements à <span className="hebergements_geoloc">Paris</span>
    </h2>
    <div className="lodges-cards" aria-label="liste des biens à louer">

    {sortedLogements.map((logement,index)=>{

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
                Note de {logement.rating} sur 5
                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i
                  className="fa-xs fa-solid fa-star neutral-star"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Note de 4 sur 5</span>
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