import { Link } from "react-router-dom";

export interface CardProps {
  Title: string;
  Description: string;
  Id: number;
  Image: string;
}

export const Card: React.FC<CardProps> = ({
  Title,
  Description,
  Image,
  Id,
}) => {
  const brutalismColorPalette = [
    "#ff853e", // Orange
    "#ff2b2b", // Red
    "#ffff00", // Yellow
    "#00ff00", // Lime Green
    "#0000ff", // Blue
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#800080", // Purple
    "#ffa500", // Dark Orange
    "#000000", // Black
  ];

  const pickRandomColor = () => {
    return brutalismColorPalette[
      Math.floor(Math.random() * brutalismColorPalette.length)
    ];
  };

  return (
    <Link
      to={`${Id}`}
      className="flex flex-col border-2 border-black cursor-pointer w-80 h-[30rem] drop-shadow-[10px_10px_0_rgb(80,70,60,90)] transition duration-150 ease-in-out hover:drop-shadow-[0px_0px_0_rgb(0,0,0,255)] bg-[#fffeec] overflow-hidden"
    >
      <span className="py-3 px-2 flex-grow h-[30%] flex flex-col gap-5">
        <h1 className="font-bold text-xl">{Title}</h1>
        <p className="text-sm">{Description}</p>
      </span>
      <figure
        className="w-full p-5 flex justify-center items-center h-[70%]"
        style={{ backgroundColor: pickRandomColor() }}
      >
        <img src={Image} alt="" className="object-contain h-full" />
      </figure>
    </Link>
  );
};
