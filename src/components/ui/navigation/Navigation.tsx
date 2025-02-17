import Link from "next/link";

import 'src/styles/components/Navigation.scss'

const Navigation = () => {

  const MenuLinks = [
    {
      label: "Home",
      href: "/",
      pageClasses: "flex items-center gap-2 hover:underline hover:underline-offset-4"},
      {
        label: "About",
        href: "/about",
        pageClasses: "flex items-center gap-2 hover:underline hover:underline-offset-4"
      },
      {
        label: "Annonce",
        href: "/annonce/:id",
        pageClasses: "flex items-center gap-2 hover:underline hover:underline-offset-4"
      },
      {
        label: "Next Demo",
        href: "/next-demo", 
        pageClasses: "flex items-center gap-2 hover:underline hover:underline-offset-4"},
      {
        label: "Counter",
        href: "/counter",
        pageClasses: "flex items-center gap-2 hover:underline hover:underline-offset-4"
      }
    
  ]


  return (

    <nav className="main-nav">

       {MenuLinks.map((link) => {
          return (<Link key={`nav-${link.label}`} href={link.href} className={`link nav-link ${link.pageClasses}`}>{link.label}</Link>)
        })      
      }
    </nav>
  )
} 

export default Navigation