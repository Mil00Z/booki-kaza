
import Image from "next/image";
import Link from "next/link";

import NavigationTest from "@/components/ui/navigation/Navigation";

import '@/styles/layouts/header.scss'


const Header = () => {

  return (

    <header>
      <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority/>  
      <NavigationTest/>
    </header>
    

  )
}
export default Header