import gradientBg from "../assets/images/deals/gradient-bg.png";
import { sectionMargin } from "./Home";
import giftBox from "../assets/images/deals/gift-box.png";
import Button from "../components/Button";
import { deals } from "../objects-arrays/deals";
import { Card } from "../components/Card";
import GetTheApp from "../components/GetTheApp";

export const  Deals = () => {
  return (
    <div>
      <section className="w-full h-fit bg-cover flex flex-col sm:flex-row" style={{backgroundImage:`url(${gradientBg})`}}>
        <div className="w-full sm:w-1/2 pt-10 md:pt-20 sm:pt-14 pl-8 pr-20 ml-12 ">
          <h2 className="text-blue-950 leading-8 xl:leading-18 lg:leading-14 md:leading-12 sm:leading-10">Boost Your Benefits, Maximize Your Money</h2>
          <p className="mb-10 sm:mb-12 mt-2 sm:mt-none">Enjoy a PHP 1,500 cash gift, InstaPay rebates, and complimentary insurance when you set up your first account.</p>
          <div className="mt-[-20px] lg:mt-0 mb-0 sm:mb-10">
            <Button text="Learn More" textColor="white" borderColor="border-dusty-violet" bgColor="bg-dusty-violet"/>
          </div>
       
        </div>

        <div className="flex justify-center">
          <img src={giftBox}
               className="w-[320px] lg:w-[620px] md:w-[420px] ml-20 sm:ml-0"/>
        </div>
      </section>

      <section className={`${sectionMargin} w-full`}>
        <div className="mb-12">
          <h2 className="text-center">Deals</h2>
          <p className="text-center">Get the most bang for your bank with these rewards when you use Maya!</p>
        </div>

        <div className=" w-full flex flex-wrap justify-center gap-4">
          {deals.map((item, index) => (
          <Card 
            key={index}
            image={item.image}
            promoPeriod={item.promoPeriod}
            descriptions={item.descriptions}
            tagOne={item.tagOne}
            tagTwo={item.tagTwo}/>    
          ))}
        </div>

      </section>

      <section className={`${sectionMargin} w-full flex justify-center`}>
        <GetTheApp/>
      </section>

    </div>
  )
}
