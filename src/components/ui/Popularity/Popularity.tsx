import {useContext} from 'react';

import Link from "next/link";
import Image from 'next/image'

import { DataContext } from 'src/app/layout';


import '@/styles/components/Popularity.scss';
import '@/styles/components/Card.scss';


const Popularity = () => {


  const {logements} = useContext(DataContext);


  let popularities = logements.filter((logement) =>{
    return logement.rating === '5';
  });



  return (
    <section id="populaires" className="block-data">
        <div className="populaires-title">
          <h2 className="section-title">Les plus populaires</h2>
          <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
        </div>
        <div className="populaires-cards" aria-label="liste des biens populaires">
    
          {popularities.map((logement,index) => {
            return (
              <Link href={`annonce/${logement.id}`} key={`logement-${index}`}>
              <article className="card card-row">
                <Image
                  src={logement.cover}
                  alt={`Image de ${logement.title}`} width={500} height={500}
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
                      <span className="sr-only">Note de {logement.rating} sur 5</span>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })
        }
        </div>
      </section>
  )
} 
export default Popularity