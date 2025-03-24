import { ReactElement, createElement } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { SiTiktok } from "react-icons/si";
import dpodps from "../assets/images/dpodps.png";
import pcidss from "../assets/images/pcidss.png";

interface DpodpsAndPcidss {
    image: string;
    title: string;
    imageStyle: string;
};

export const socialMediaIcons: ReactElement[] = [
    createElement(FaFacebookF),
    createElement(GrInstagram),
    createElement(BsTwitterX),
    createElement(BiLogoTelegram),
    createElement(FaLinkedinIn),
    createElement(ImYoutube),
    createElement(SiTiktok),
];

export const navItemsOne: string[] = [
    "Home",
    "User Guide",
    "Deals",
    "Store",
    "Partner Brands",
];

export const navItemsTwo: string[] = [
    "Stories",
    "About Swift",
    "Help & Support",
    "Careers",
    "Contact Us",
];



export const dpodpsAndPcidss: DpodpsAndPcidss[] = [
    {image: dpodps,
     title: "Privacy Policy",
     imageStyle: "rounded-2xl"
    },
    {image: pcidss,
     title: "Terms & Condition",
     imageStyle: "mt-6 rounded-2xl h-[100px]"   
    },

];
    




