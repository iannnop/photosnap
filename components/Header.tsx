import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button1 } from "./Buttons"
import { Logo } from "./Icons"

const Header = () => {
  return (
    <nav className="fixed md:static bg-white w-full md:mx-auto px-6 py-4 md:px-10 inline-flex justify-between items-center z-50">
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

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button onClick={toggleMenu} aria-label="toggle-menu" className="absolute top-3 right-6 sm:hidden">
        <span className={!isMenuOpen ? "" : "hidden"}>
          <Image width={20} height={6} src='/assets/shared/mobile/menu.svg' alt='mobile nav menu'/>
        </span>
        <span className={isMenuOpen ? "" : "hidden"}>
          <Image width={16} height={15} src="/assets/shared/mobile/close.svg" alt='close button' />
        </span>
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <div>
            <span className="absolute bg-black opacity-50 top-14 left-0 min-h-screen w-screen z-10 inset-0" />
            <motion.div className="flex flex-col absolute w-screen top-12 left-0 text-center bg-white z-10 font-bold uppercase tracking-[2.5px]">
              <Link href='/stories'>
                <a className="py-5">stories</a>
              </Link>
              <Link href='/features'>
                <a className="py-5">features</a>
              </Link>
              <Link href='/pricing'>
                <a className="py-5">pricing</a>
              </Link>
              <span className="py-5 inline-block">
                <Button1 text="get an invite" />
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}