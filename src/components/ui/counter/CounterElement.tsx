'use client';

import { useEffect, useState } from "react";

const CounterElement = () => {

  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('Click');
  const [showLabel, setShowLabel] = useState<boolean>(true);



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
      <h1 className="title text-3xl">Counter</h1>
      <div className="counter strike" onClick={()=>setCount(count => count + 1)}>
          {showLabel ? (<p>{message} : {count} </p>) : (<p>Le compteur est réinitialisé</p>)}
      </div>
    </>
  )
}

export default CounterElement