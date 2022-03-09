import { useState } from "react";
import { Button1, Button3 } from "./Buttons";

interface PlanCardProps {
  highlight?: boolean
  title: string;
  description: string;
  price: number;
  displayPrice: "monthly" | "yearly";
}

const PlanSelection = () => {
  const [displayPrice, setDisplayPrice] = useState<"monthly" | "yearly">("monthly")
  return (
    <div className="my-14 lg:my-28 space-y-5">
      <label className="flex items-center w-[255px] mx-auto">
        <input onClick={() => setDisplayPrice(displayPrice === "monthly" ? "yearly" : "monthly")} type="checkbox" className="cursor-pointer absolute left-1/2 -translate-x-1/2 peer hidden rounded-md" />
        <span className="text-lg font-bold peer-checked:opacity-50">Monthly</span>
        <span className="mx-6 bg-gray-200 cursor-pointer after:bg-black w-16 flex items-center flex-shrink-0 p-1 after:translate-x-0 bg-toggle rounded-full duration-300 ease-in-out peer-checked:bg-black peer-checked:after:bg-white after:w-5 after:h-5 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-9" />
        <span className="text-lg font-bold opacity-50 peer-checked:opacity-100">Yearly</span>
      </label>
      <div className="flex flex-col space-y-6 lg:flex-row lg:items-center lg:justify-around max-w-6xl mx-auto">
        <PlanCard displayPrice={displayPrice} title="Basic" description="Includes basic usage of our platform. Recommended for new and aspiring photographers." price={19} />
        <PlanCard displayPrice={displayPrice} highlight title="Pro" description="More advanced features available. Recommended for photography veterans and professionals." price={39} />
        <PlanCard displayPrice={displayPrice} title="Business" description="Additional features available such as more detailed metrics. Recommended for business owners." price={99} />
      </div>
    </div>
  )
}

const PlanCard = ({ title, description, highlight, price, displayPrice }: PlanCardProps) => {
  return (
    <div className={`mx-7 lg:m-0 flex flex-col md:flex-row lg:flex-col text-center md:text-left lg:text-center ${highlight ? "bg-black text-white" : "bg-gray-100"} lg:w-[350px] h-[407px] ${highlight ? "lg:h-[470px]" : ""}`}>
      {highlight &&
        <span className='flex bg-main-accent h-[6px] md:h-full lg:h-[6px]'>&nbsp;</span>
      }
      <div className="flex flex-col justify-between mx-7 md:px-10 lg:p-0 md:mx-auto lg:mx-7 my-auto h-[311px]">
        <div className="space-y-4">
          <h3 className="text-2xl">{title}</h3>
          <p className="opacity-60">{description}</p>
        </div>
        <div className="text-center md:text-right lg:text-center">
          <h2>{`${displayPrice === "monthly" ? price : price*10}.00`}</h2>
          <span className="opacity-60">{`${displayPrice === "monthly" ? "per month" : "per year"}`}</span>
        </div>
        {highlight ?
          <Button3 text="pick plan" /> :
          <Button1 text="pick plan" />
        }
      </div>
    </div>
  )
}

export default PlanSelection