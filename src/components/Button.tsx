import React from "react";

interface ButtonProps {
  text: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
}

const Button: React.FC<ButtonProps> = ({ text, textColor, borderColor, bgColor,  }) => {
  return (
    <button
      className={`px-4 sm:px-6 sm:py-3 py-2  text-[1rem] md:text-xl sm:text-lg font-semibold rounded-lg border-2 
                 hover:scale-110 transition-all duration-300 cursor-pointer ${borderColor} ${bgColor} ${textColor}`}>
      {text}
    </button>
  );
};

export default Button;
