import Link from "next/link"
import { Button4 } from "./Buttons"
import { Logo, SocialMediaIcons } from "./Icons"

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-10 py-16">
        <div className="flex flex-col space-y-8 justify-between items-center md:items-start flex-shrink">
          <Logo textColor="#FFF"/>
          <SocialMediaIcons />
        </div>
        <div className="flex flex-col items-center mt-10 mb-28 md:m-0 md:items-start space-y-4 uppercase font-bold text-white text-xs tracking-[2px]">
          <Link href='/'>
            <a className="hover:opacity-30">home</a>
          </Link>
          <Link href='/stories'>
            <a className="hover:opacity-30">stories</a>
          </Link>
          <Link href='/features'>
            <a className="hover:opacity-30">features</a>
          </Link>
          <Link href='/pricing'>
            <a className="hover:opacity-30">pricing</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-9 justify-between items-center md:items-end">
          <Button4 text="get an invite"/>
          <p className="text-white opacity-50">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer