import {useState} from 'react';

import Link from "next/link";
import Image from 'next/image'

import activities from "@/data/activities.json";

import '@/styles/components/Activities.scss';

const Activities = () => {

  
  return (
    <section id="activities" className="">
    <h2 className="section-title">
      Activités à <span className="hebergements_geoloc">Paris</span>
    </h2>
    <div className="activities-cards" aria-label="liste des activités">


    {activities.map((activity,index) => {

      return ( 
        <Link href={`/activity/${activity.id}`} key={`activity-${index}`}>
        <article className="card card-column">
          <Image
            src={`/${activity.cover}`}
            alt="Image du Vieux-Port de Marseille"
            className="card-thumbnail"
            width={400}
            height={600}
          />
          <div className="card-content">
            <div className="card-txt">
              <h3 className="card-title">{activity.title}</h3>
            </div>
          </div>
        </article>
      </Link>
       )
    })}
      
      
    </div>
  </section>

  )
}
export default Activities