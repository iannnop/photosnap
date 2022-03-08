import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button1 } from "./Buttons"
import { Logo } from "./Icons"

const Header = () => {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-4 md:px-10 flex flex-shrink justify-between items-center">
      <Logo textColor="#000"/>
      <div className="uppercase font-bold text-xs space-x-8 tracking-[2px] hidden sm:inline-block">
        <Link href='/stories'>
          <a className="hover:opacity-30 transition-all">stories</a>
        </Link>
        <Link href='/features'>
          <a className="hover:opacity-30 transition-all">features</a>
        </Link>
        <Link href='/pricing'>
          <a className="hover:opacity-30 transition-all">pricing</a>
        </Link>
      </div>
      <div className="hidden sm:inline-block">
        <Button1 text="get an invite" />
      </div>
      <MobileMenu />
    </nav>
  )
}

export default Header

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  return (
    <button className="flex items-center sm:hidden">
      <Image width={20} height={6} src='/assets/shared/mobile/menu.svg' alt='mobile menu'/>
    </button>
  )
}