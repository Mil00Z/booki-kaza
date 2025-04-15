"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import 'src/styles/components/navigation.scss'

const Navigation = () => {

  const pathName = usePathname();

  const MenuLinks = [
      {
        label: "Accueil",
        href: "/",
        pageClasses: "link nav-link flex items-center gap-2 hover:underline hover:underline-offset-4"
      },
      {
        label: "Annonces",
        href: "/annonce",
        pageClasses: "link nav-link flex items-center gap-2 hover:underline hover:underline-offset-4"
      },
      {
        label: "A propos",
        href: "/about",
        pageClasses: "link nav-link flex items-center gap-2 hover:underline hover:underline-offset-4"
      },
      {
        label: "Next Demo",
        href: "/next-demo", 
        pageClasses: "link nav-link flex items-center gap-2 hover:underline hover:underline-offset-4"},
      {
        label: "Counter",
        href: "/counter",
        pageClasses: "link nav-link flex items-center gap-2 hover:underline hover:underline-offset-4"
      }
    
  ]


  return (

    <nav className="main-nav">

       {MenuLinks.map((link) => {
          return (<Link key={`nav-${link.label}`} href={link.href} className={`${link.pageClasses} ${pathName == link.href ? 'active': ""}`}>{link.label}</Link>)
        })      
      }
    </nav>
  )
} 

export default Navigation