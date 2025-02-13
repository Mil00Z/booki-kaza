'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import '../styles/pages/home.scss'

const Home = () => {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Click');
  const [showLabel, setShowLabel] = useState(true);



  useEffect(() => {

    if (count > 5) {

      setShowLabel(false)

      setCount(0)
      
      // Wait to action 
      setTimeout(() => {

        setShowLabel(true)

        setMessage('Click')

      },2500)

    } 

  }, [count]);
  


  return (
    <>
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        
        <h1 className="title text-3xl">Home</h1>
        <div className="counter strike" onClick={()=>setCount(count => count + 1)}>
          {showLabel ? (<p>{message} : {count} </p>) : (<p>Le compteur est réinitialisé</p>)}
          </div>
    
      
      </div>

      <nav className="flex gap-5 items-end flex-row md:flex-col">
        
        <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />  
          
        <Link href="/" className="btn-action">Home</Link>
        <Link href="/test" className="btn-action">Test</Link>
        
      </nav>

    </section>

    <div className="home"></div>
    </>
  )
}

export default Home