'use client';
import Image from "next/image";
import logo from "@/public/next.svg";

import CounterElement from "src/components/ui/counter/CounterElement";


const CounterPage = () => {

  return (
    <>
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <Image
          src={logo}
          alt="Logo NextJs"
          width={210}
          height={70}
        />

        <CounterElement />
      
      </div>

  
    </section>

    </>
  )
}

export default CounterPage