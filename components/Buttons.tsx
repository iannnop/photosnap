interface ButtonProps {
  text: string;
  className?: string;
}

interface ArrowProps {
  strokeColor: string;
}

const Button1 = ({text, className}: ButtonProps) => {
  return (
    <button className="${className} min-w-[110px] text-center font-bold tracking-[2px] uppercase text-xs bg-black text-white px-6 py-3 transition-all hover:bg-gray-200 hover:text-black">
      {text}
    </button>
  )
}

const Button2 = ({text, className}: ButtonProps) => {
  return (
    <button className="${className} group uppercase tracking-[2px] text-xs hover:underline font-bold flex">
      {text}
      <Arrow strokeColor="#000"/>
    </button>
  )
}

const Button3 = ({text, className}: ButtonProps) => {
  return (
    <button className="${className} min-w-[110px] text-center font-bold tracking-[2px] uppercase text-xs bg-white text-black px-6 py-3 transition-all hover:bg-gray-200 hover:text-black">
      {text}
    </button>
  )
}

const Button4 = ({text, className}: ButtonProps) => {
  return (
    <button className={`${className} group text-white uppercase tracking-[2px] text-xs hover:underline font-bold flex`}>
      {text}
      <Arrow strokeColor="#FFF"/>
    </button>
  )
}

const Arrow = ({ strokeColor }: ArrowProps) => {
  return (
    <svg className="ml-4 group-hover:translate-x-2 transition-all" xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke={strokeColor}><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
  )
}

export { Button1, Button2, Button3, Button4 }