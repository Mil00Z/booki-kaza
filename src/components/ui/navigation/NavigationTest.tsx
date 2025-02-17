'use client';

import Link from "next/link";


import '@/styles/components/Navigation.scss'

const NavigationTest = () => {

  const Links = [
    {
      name: "Home",
      path: "/",
      pageClasses: "flex items-center gap-2 hover:underline hover:underline-offset-4"},
    {
      name: "Next Demo",
      path: "/next-demo", 
      pageClasses: "flex items-center gap-2 hover:underline hover:underline-offset-4"},
    {
      name: "Counter",
      path: "/counter",
      pageClasses: "flex items-center gap-2 hover:underline hover:underline-offset-4"
    },
    {
      name: "About",
      path: "/about",
      pageClasses: "flex items-center gap-2 hover:underline hover:underline-offset-4"
    },
  ]

  
  return (

    <nav className="main-nav flex gap-5 items-end flex-row md:flex-col">


      {Links.map((link) => {

        return (<Link key={`nav-${link.name}`} href={link.path} className={link.pageClasses}>{link.name}</Link>)
        })
      
      }
           
         {/* <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/">Home</Link>
          <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/next-demo">Next Demo</Link>
           <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/counter">Counter</Link> */}
        
       </nav>

  ) 
}
export default NavigationTest