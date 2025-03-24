import { ReactElement, createElement } from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { SiHuawei } from "react-icons/si";

interface AppMarketPlaceObject {
    callToAction: string;
    appName: string;
    icon: ReactElement;
}

export const appMarketPlaceObject: AppMarketPlaceObject[] = [
    {
        callToAction: "Download on the",
        appName: "Google Play",
        icon: createElement(FaGooglePlay),  
    },
    {
        callToAction: "Explore it on",
        appName: "App Store",
        icon: createElement(IoLogoApple),
    },
    {
        callToAction: "Download on the",
        appName: "AppGallery",
        icon: createElement(SiHuawei),
    },
];
