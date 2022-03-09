import Image from "next/image"
import { Button4 } from "./Buttons"

const CallToAction = () => {
  return (
    <div className="relative h-[280px] pl-8 md:p-0">
      <Image layout="fill" src="/assets/shared/desktop/bg-beta.jpg" alt=""/>
      <div className="relative flex flex-col md:flex-row h-full">
        <span className='bg-main-accent w-2/5 h-[6px] md:h-full md:w-[6px]'>&nbsp;</span>
        <div className="flex flex-col md:flex-row md:w-[90%] lg:w-[85%] my-auto md:mx-auto justify-between md:items-center h-[160px] md:h-full">
          <h2 className="text-white md:w-[400px]">
            We&apos;re in beta. <br /> Get your invite today
          </h2>
          <Button4 text="get an invite" />
        </div>
      </div>
    </div>
  )
}

export default CallToAction