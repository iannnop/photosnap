import Image from "next/image"
import { Button2, Button4 } from "./Buttons"

interface HomeCardProps {
  accent?: boolean;
  position: "left"|"right";
  color: "light"|"dark";
  heading: string;
  paragraph: string;
  buttonText: string;
  image: string;
}

const HomeCard = ({ accent, position, color, heading, paragraph, buttonText, image }: HomeCardProps) => {
  return (
    <div className={`flex flex-col ${position === "left" ? "md:flex-row-reverse" : "md:flex-row"} items-center ${color === "dark" ? "text-white bg-black" : "" }`}>
      <span className="flex md:hidden lg:inline-flex">
        <Image width={830} height={650} src={`/assets/home/desktop/${image}`} alt="" />
      </span>
      <span className="flex-none hidden md:inline-flex lg:hidden">
        <Image width={273} height={650} src={`/assets/home/tablet/${image}`} alt="" />
      </span>
      <div className='px-6 md:p-0 flex flex-col md:flex-row h-[420px] md:h-[304px]'>
        {accent &&
          <span className='bg-main-accent w-2/5 h-[6px] md:h-full md:w-[6px]'>&nbsp;</span>
        }
        <div className='space-y-10 md:space-y-0 md:w-5/6 lg:w-2/3 mx-auto my-auto md:my-0 flex flex-col justify-between'>
          <div className="space-y-4 md:space-y-6">
            <h1>{heading}</h1>
            <p className='opacity-60'>{paragraph}</p>
          </div>
          {color==="dark" ?
            <Button4 text={buttonText} /> :
            <Button2 text={buttonText} />
          }
        </div>
      </div>
    </div>
  )
}

export default HomeCard