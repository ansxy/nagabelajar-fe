import { Link } from "react-router-dom";

export interface CardProps {
  Code: string;
  Title: string;
  Description: string;
  Image: string;
}

export const Card: React.FC<CardProps> = ({
  Title,
  Description,
  Image,
  Code,
}) => {
  return (
    <Link
      to={Code}
      className="flex flex-col bg-[#ffe4c6] cursor-pointer w-80 h-[30rem]"
    >
      <span className="py-3 px-2 flex-grow">
        <h1 className="font-bold text-xl">{Title}</h1>
        <p className="text-sm">{Description}</p>
      </span>
      <figure className="w-full p-5 bg-[#18191e] flex justify-center items-center h-[70%]">
        <img src={Image} alt="" className="object-contain h-full" />
      </figure>
    </Link>
  );
};
