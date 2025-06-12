import { useEffect } from "react";
import { useSlideUpEffect } from "../utils/slideUpEffect";
import { Carousel } from "../components/Carousel";
import { carouselObject } from "../objects-arrays/carouselObject";
import { websiteCopyObject } from "../objects-arrays/websiteCopyObject";
import underline  from "../assets/images/underline.png";
import Button from "../components/Button";
import smilingWithPhoneTwo from "../assets/images/woman-with-phone-2.png";
import creditCardTwo from "../assets/images/credit-card-2.png";
import mobilePhone from "../assets/images/mobile-phone.png";
import { SmallCarousel } from "../components/SmallCarousel";
import { PartnerBrandsSetOne, PartnerBrandsSetTwo, PartnerBrandsSetThree } from "../objects-arrays/partnerBrandsObject";
import mobileBanking from "../assets/images/mobile-banking.png";
import arrowUp from "../assets/images/arrow-up.png";
import GetTheApp from "../components/GetTheApp";


export const sectionMargin = "mt-16 w-[90%]";

export const Home = () => {
  const { sectionsRef, slideUpClass } = useSlideUpEffect();

  useEffect(() => {
    document.title = "Swift | All-in-1 Digital Bank";
  }, []);


  return (
    <div className="bg-linear-65 from-purple-500 to-pink-500 flex flex-col items-center">
      <section className="w-full">
        <Carousel items={carouselObject} />
      </section>

      <section ref={(el) => {sectionsRef.current[0] = el;}} className={`py-10 text-white ${sectionMargin} ${slideUpClass(0)}`}>
        <div className="mx-auto w-3/4 pb-14">
          <h1 className="text-4xl md:text-6xl text-center">
            All the features you need right at your fingertips
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-y-4">
          {websiteCopyObject.map((item, index) => (
            <div key={index} className="w-80">
              <div className="flex justify-center mb-14 ">
                <img src={item.image} className="w-[150px]" />
              </div>
              <h3 className="text-center mb-2">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-5xl font-bold font-monserrat-bold mt-3.5">and more!</p>
          <img src={underline} className="w-[380px] h-[50px] mt-[-5px]" />
        </div>
      </section>

      <section id="sectionTwo" ref={(el) => {sectionsRef.current[1] = el;}} className={`flex flex-col items-center py-10 ${sectionMargin} ${slideUpClass(1)}`}>
        <p className="text-2xl font-bold">WHAT'S NEW</p>
        <h2 className="mb-16">Your Money. Your Way.</h2>
        <div className="flex justify-center items-center flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-6 p-8 w-[90%] h-fit-content rounded-2xl bg-dusty-violet text-prim">
            <div className="w-[300px] md:w-[450px]">
              <h3>Getting banked with Swift is simple</h3>
            </div>
            <p className="text-xl md:text-2xl">
              Swift combines the security of a bank with the ease of a wallet.
            </p>
            <div>
              <Button text="Get Banked" borderColor="border-prim" textColor="text-prim" bgColor="" />
            </div>
            <div className="flex flex-col items-center w-full px-0 mb-[-32px]">
              <img src={smilingWithPhoneTwo} className="h-[400px] lg:h-[550px] w-full md:w-[85%]" />
            </div>
          </div>
          <div className="rounded-2xl bg-prim text-dusty-violet px-5 py-5.5 w-[90%] h-fit-content">
            <h3>Get your very own Swift physical card!</h3>
            <p className="mb-4">
              Shop and withdraw cash with ease using a sleek black card personalized with your @username.
            </p>
            <p className="mb-4">Want a FREE Swift card? Tap here to learn more!</p>
            <Button text="Get Swift Card" borderColor="border-dusty-violet" textColor="text-dusty-violet" bgColor="" />
            <div className="flex flex-col items-center justify-center">
              <img src={creditCardTwo} className="w-[300px] md:w-[330px]" />
              <img src={mobilePhone} className="w-[300px] md:w-[340px] mt-[-100px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="sectionThree" ref={(el) => {sectionsRef.current[2] = el;}} className={`flex flex-col w-full ${slideUpClass(2)}`}>       
        <div className={`flex flex-col items-center`}>
          <p className="font-bold">PARTNER BRANDS</p>
          <h2>Meet the Swift community</h2>
          <p>Explore the brands that bring you the Swift experience</p>
        </div>
        <div className="w-full">
          <SmallCarousel brandArray={PartnerBrandsSetOne} speedNumber={5000} />
          <SmallCarousel brandArray={PartnerBrandsSetTwo} speedNumber={7000} />
          <SmallCarousel brandArray={PartnerBrandsSetThree} speedNumber={5000} />
      </div>
      </section>



      <section id="sectionFour" ref={(el) => {sectionsRef.current[3] = el;}} className={`flex justify-center w-[90%] rounded-2xl bg-lavander ${slideUpClass(3)} ${sectionMargin}`}>
          <div className="flex col flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-0  py-10">
            <div className="flex">
              <img src={mobileBanking} className="w-[650px] h-[570px]"/>
              <img src={arrowUp} className="w-[120px] h-[120px] ml-[-200px] mt-[-20px]"/>
            </div>

            <div className="flex flex-col gap-10 items-center lg:items-start">
              <div className="text-center lg:text-start px-10 md:px-0">
                <h2>Upgrade Your Account</h2>
                <p>Unlock banking features, enjoy a personalized experience, and increase your wallet limit</p>
              </div>
              <div>
                <ul className="flex flex-col px-1.5 gap-4 mb-10 font-lato-bold">
                  <li>💰 Open a savings account and earn up to 10% p.a. starting March 7</li>
                  <li>💲 Trade crypto easily</li>
                  <li>💳 Shop online or in-store using a physical or virtual wallet card</li>
                  <li>💪 Increase your monthly wallet limit from ₱50K to ₱100K</li>
                </ul>
                <div className="flex justify-center lg:justify-start">
                  <Button text="Tell Me More" borderColor="border-dusty-white" textColor="text-white" bgColor="" />
                </div>
              </div>
          </div>
        </div>
      </section>

      <section id="sectionFive" ref={(el) => {sectionsRef.current[4] = el;}} className={`flex justify-center ${slideUpClass(4)} ${sectionMargin}`}>
          <GetTheApp />
        
      </section>

    </div>
  );
};
