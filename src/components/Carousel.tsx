  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
  import { MdKeyboardArrowRight } from "react-icons/md";
  import Button from "./Button";

  interface ArrowProps {
    onClick?: () => void;
  }

  interface CarouselItem {
    backgroundImage: string;
    mainImage:string
    subImage?: string;
    title: string;
    subtitleOne: string;
    subtitleTwo?: string;
    buttonText: string;
  }

  interface CarouselProp {
    items: CarouselItem[];
  }

  const arrowStyle: string = "absolute top-74 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600";
  const paragraphStyling: string = "text-2xl lg:text-3xl";

  const CustomPrevArrow: React.FC<ArrowProps> = ({onClick}) => {
    return (
      <button 
        onClick={onClick} 
        className={`left-4 ${arrowStyle}`}
      >
        <MdOutlineKeyboardArrowLeft size={40}/>
      </button>
    );
  };

  const CustomNextArrow: React.FC<ArrowProps> = ({onClick}) => {
    return (
      <button 
        onClick={onClick} 
        className={`right-4 ${arrowStyle}`}
      >
      <MdKeyboardArrowRight size={40}/>
      </button>
    );
  };

  export const Carousel: React.FC<CarouselProp> = ({ items }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: <CustomPrevArrow/>,
      nextArrow: <CustomNextArrow />,
    };

    return (
      <div className="relative">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index}>
                <img src={item.backgroundImage} className="h-[668px] lg:h-[600px] md:h-[740px] w-full"/>
                <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 w-full px-4 lg:px-12 mt-[-650px] lg:mt-[-600px] md:mt-[-736px]">

                  <div className="flex justify-center lg:justify-start w-full lg:w-1/2 order-2 lg:order-1 ms-0 lg:ms-[100px]">
                    <img 
                      src={item.mainImage}
                      className="h-[398px] md:h-[448px] lg:h-[600px] w-auto"/>      
                  </div>

                  <div className="text-white text-center lg:text-left flex flex-col gap-4 font-lato-bold w-full lg:w-1/2 order-1 lg:order-2 mt-0 lg:mt-[-10px] h-[221px] md:h-[257px] lg:h-[481px]">
                    <h2>{item.title}</h2>
                    <p className={paragraphStyling}>{item.subtitleOne}</p>
                    <p className={paragraphStyling}>{item.subtitleTwo}</p>
                    <div>
                      <Button text={item.buttonText} borderColor="border-white" textColor="text-white" bgColor="bg-transparent"/>
                    </div>
                    {item.subImage && (
                      <img src={item.subImage} className="!hidden lg:!block w-[400px] h-[200px] border-0"/>)}
                  </div>
                </div>  
              </div>
            ))}
          </Slider>
      </div>
    );
  };
