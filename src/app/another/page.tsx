'use client';

import Link from 'next/link'

import HeroBanner from "@/components/ui/Hero/Hero"


const InreachableProduct = () => {  

  return(

    <> 
      <HeroBanner layout={'annonce'}/>
      <div className="logement-not-found">
          <h1 className="title">Ce logement n'existe <span className="link-special">pas encore !</span></h1>
          <p className="description"><Link href="/about">Contactes-nous </Link>pour ajouter ton logement dans notre liste 💥</p>
      </div>
    </>
  )
}
export default InreachableProduct