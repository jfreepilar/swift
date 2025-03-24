import { Name } from "./Name"
import { NavFooterPadding } from "./Navbar"
import { socialMediaIcons } from "../objects-arrays/footerObjects";
import { navItemsOne, navItemsTwo, dpodpsAndPcidss } from "../objects-arrays/footerObjects";

const navItemsStyle = "mb-1 xl:mb-2 font-bold cursor-pointer";

export const Footer = () => {

  return (
    <footer className={`${NavFooterPadding} mt-[80px]`}>
        <div className="flex flex-col xl:flex-row gap-4">
            <div className="w-fit xl:w-[50%]">
                <Name postion="relative" width="w-[160px]" height="h-[60px]" />
                <ul className="flex justify-start w-fit gap-4 mt-1">
                    {socialMediaIcons.map((item, index) =>
                        <li key={index} 
                            className="p-3 rounded-full cursor-pointer bg-prim
                                       hover:scale-110 transition-all duration-300">
                            <span className="text-xl sm:text-3xl text-dusty-violet"> {item}</span>                           
                        </li>
                    )}
                </ul>
                <div className="mt-5 w-[404px] sm:w-full">
                Swift is backed by the country's sole end-to-end digital payments provider, Swift Philippines, Inc., and Swift Bank, Inc. for digital banking services. Both entities are regulated by the Bangko Sentral ng Pilipinas.
                </div>
            </div>

            <div className="flex justify-start xl:justify-around w-full xl:w-[90%] gap-10 ml-0 xl:ml-4 pt-8">
                <ul>
                    {navItemsOne.map((item, index) => (
                        <li key={index} className={navItemsStyle}>{item}</li>
                    ))}
                </ul>

                <ul>
                    {navItemsTwo.map((item, index) => (
                        <li key={index} className={navItemsStyle}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-start xl:justify-center gap-8 w-full xl-w-[35%]">
                {dpodpsAndPcidss.map((item, index) => (
                    <div key={index} 
                         className="flex flex-col justify-between pb-1">
                        <img src={item.image}
                             className={item.imageStyle}/>
                             <p className="text-center cursor-pointer">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
        <p className="my-4">Copyright Swift 2022 All rights reserved.</p>

    </footer>
  )
}
