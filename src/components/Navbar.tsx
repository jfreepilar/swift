import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Name } from './Name';
import { GenericArray } from '../utils/GenericArray';
import { AppDispatch, RootState } from '../store/store';
import { showDropdown, hideDropdown } from "../store/slice/dropdownSlice";
import { toggleScroll } from '../store/slice/scrollSlice';
import { toggle } from "../store/slice/toggleSlice"
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import Dropdown from './Dropdown';
import { Link } from "react-router-dom";

const navLayerTwo: GenericArray = [
    "Home", "Services", "Grow", "Loan", "Download Now"
];

export interface navFirstLayer {
    name: string;
    path: string;
}[]

const navLayerOne: navFirstLayer[] = [
    { name: "About Us", path: "/swift/" },
    { name: "Deals", path: "/swift/" },
    { name: "Log In", path: "/swift/" }
];

const layerTwoItemsDropdown: Record<string, GenericArray> = {
    "Services": ["Bill", "Payment", "Bank", "Transfer", "Send Money"],
    "Grow": ["Mutual Fund", "Crypto", "Bank", "Stocks", "Time Deposit"],
    "Loan": ["Business", "Personal", "Auto loan", "House loan"]
};

const subDropdownStyle = "transform translate-x-[-162px] translate-y-[-30px]";
export const NavFooterPadding = "px-6 md:px-8 lg:px-34 py-2"

export const Navbar = () => {
    const dispatch: AppDispatch = useDispatch();
    const isDropdownVisible = useSelector((state: RootState) => state.dropdown.visibleDropdown);
    const isVisible = useSelector((state: RootState) => state.toggle.isVisible);
    const isFixed = useSelector((state: RootState) => state.toggleScroll.isFixed);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && !isFixed) {
                dispatch(toggleScroll()); 
            } else if (window.scrollY === 0 && isFixed) {
                dispatch(toggleScroll()); 
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [dispatch, isFixed]);
    
    
    return (
        <div className="font-monserrat-bold text-white">
            <nav className={`${NavFooterPadding}`}>
                <ul className="flex justify-end space-x-10 font-bold">
                    {navLayerOne.map((item, index) => (
                        <NavLink key={index} to={item.path}>
                            {item.name}
                        </NavLink>
                    ))}
                </ul>
            </nav>

            <nav className={`flex items-center bg-martnique py-4 w-full ${NavFooterPadding} ${isFixed ? "fixed top-0 z-20 transition:top duration-700 ease-in" : "relative"}`}>
                <Name />
                <ul className="hidden sm:flex ms-auto space-x-10">
                    {navLayerTwo.map((item, index) => (
                        <Link key={index} 
                              to={item === "Home" ? "/" : ""}
                              className="text-lato font-bold relative text-white cursor-pointer" 
                              onMouseOver={() => dispatch(showDropdown(item))}
                              onMouseLeave={() => dispatch(hideDropdown())}>

                            <div className="flex items-center space-x-1">
                                <span>{item}</span>
                                {layerTwoItemsDropdown[item] && <IoIosArrowDown  className="text-razzmatazz text-[20px]"/>}
                            </div>

                            {layerTwoItemsDropdown[item] && (
                                <Dropdown items={layerTwoItemsDropdown[item]}
                                          isVisible={isDropdownVisible === item}/>
                            )}

                        </Link>
                    ))}
                </ul>
                
                <div className="relative sm:hidden ms-auto me-2.5">
                    <span className="text-white text-3xl cursor-pointer" onClick={() => dispatch(toggle())}><FaBars /></span>

                    <Dropdown items={navLayerTwo} 
                              isVisible={isVisible}
                              className="left-[-152px] w-[200px] mt-1"
                              position="right"
                              nestedItems={layerTwoItemsDropdown}
                              nestedStyling={subDropdownStyle}/>
                </div>

            </nav>


        </div>
    );
};
