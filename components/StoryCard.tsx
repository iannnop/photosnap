import Image from "next/image";
import { Button4 } from "./Buttons"

interface StoryCardProps {
  date: string;
  title: string;
  author: string;
  image: string;
}

const StoryCard = ({ date, title, author, image  }: StoryCardProps) => {
  return (
    <div className="relative h-[375px] md:h-[500px] flex flex-col justify-end" >
      <Image layout='fill' objectFit='cover' src={`/assets/stories/desktop/${image}`} alt='featured story' />
      <div className="p-10 relative h-full flex flex-col justify-end bg-storytext">
        <div className="text-white">
          <p>{date}</p>
          <h3>{title}</h3>
          <p>by {author}</p>
        </div>
        <hr className="my-4 opacity-25" />
        <Button4 text='read story' />
      </div>
    </div>
  )
}

export default StoryCard