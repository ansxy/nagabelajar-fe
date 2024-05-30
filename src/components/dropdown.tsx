import { ChevronRight } from "lucide-react";
import { useState } from "react";

export const Dropdown: React.FC<{ options: string[] }> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState<string>("Filter");
  return (
    <div className="relative flex flex-row border-2 border-black rounded-full py-2 pr-2 pl-5 cursor-pointer">
      <span onClick={() => setIsOpen(!isOpen)}>{option}</span>
      <ChevronRight
        className={`${
          isOpen && "rotate-90"
        } transform transition duration-200 ease-in-out`}
      />

      {isOpen && (
        <div className="absolute flex flex-col bg-white border-2 border-black rounded-lg p-2 top-11 items-center right-3 z-10">
          {options.map((option) => (
            <span
              onClick={() => {
                setOption(option);
                setIsOpen(false);
              }}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
