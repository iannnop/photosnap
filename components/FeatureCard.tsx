import { ReactElement } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: ReactElement;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <div className="text-center flex flex-col justify-around items-center h-[236px]">
      {image}
      <div className="space-y-4">
        <h3>{title}</h3>
        <p className="opacity-60">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard