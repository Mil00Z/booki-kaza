'use client';

import Image from "next/image";
import Link from "next/link";

import CounterElement from "@/components/ui/Counter/CounterElement";


const CounterPage = () => {

  return (
    <>
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

       <CounterElement />
      
      </div>

  
    </section>

    </>
  )
}

export default CounterPage