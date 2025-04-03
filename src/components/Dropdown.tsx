import React from "react";
import { showDropdown, hideDropdown } from "../store/slice/dropdownSlice";
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";


interface DropdownProps {
  items: string[];
  isVisible: boolean;
  nestedItems?: Record<string, string[]>;
  className?: string;
  position?: "left" | "right";
  nestedStyling?: string;
}


const Dropdown: React.FC<DropdownProps> = ({ items, isVisible, nestedItems = {},  className, position = "left", nestedStyling }) => {
  const dispatch: AppDispatch = useDispatch();
  const isDropdownVisible = useSelector((state: RootState) => state.dropdown.visibleDropdown);

  return (
    <ul
      className={`font-lato-bold absolute z-10 top-full left-0 bg-white shadow-lg p-2 rounded-md w-36 
        transition-transform duration-300 ease-in-out transform origin-top
        ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} 
        ${className || ""}`}>

      {items.map((item, index) => (
        <Link
          to={item === "Home" ? "/swift/" : ""}
          key={index}
          className={`block p-2 font-medium text-gray-600 hover:bg-gray-100 cursor-pointer
            ${position === "right" ? "text-right" : "text-left"} `}
            onMouseOver={() => dispatch(showDropdown(item))}
            onMouseLeave={() => dispatch(hideDropdown())}>
          {item}


          {nestedItems[item] && (
            <div className="absolute">
              <Dropdown items={nestedItems[item]}
                isVisible={isDropdownVisible === item}
                className={`absolute bg-white shadow-lg rounded-md w-36 ${nestedStyling || ""}`}/>
                  {nestedItems[item] && <MdOutlineKeyboardArrowLeft className="text-razzmatazz text-2xl transform translate-x-[70px] -translate-y-[24px]"/>}
            </div>
          )}
        </Link>
      ))}
    </ul>
  );
};

export default Dropdown;
