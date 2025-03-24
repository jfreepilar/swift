import carouselOne from "../assets/images/carousel-1.png";
import carouselTwo from "../assets/images/carousel-2.png";
import carouselThree from "../assets/images/carousel-3.png";
import smilingWoman from "../assets/images/smiling-woman.png";
import bestBank from "../assets/images/best-bank.png";
import womanPhone from "../assets/images/woman-with-phone.png";
import creditCard from "../assets/images/credit-card.png";

interface carouselObject {
  backgroundImage: string,
  mainImage: string,
  title: string,
  subImage?: string,
  subtitleOne: string,
  subtitleTwo?: string,
  buttonText: string,
}


export const carouselObject: carouselObject[] = [
  {
    backgroundImage: carouselOne,
    mainImage: smilingWoman,
    subImage: bestBank,
    title: "Get Banked",
    subtitleOne: "with the #1 Digital Bank App",
    subtitleTwo: "in monthly active users",
    buttonText: "Download Now",
  },
  {
    backgroundImage: carouselTwo,
    mainImage: womanPhone,
    title: "GET THAT LOAN",
    subtitleOne: "FAST AND EASY",
    buttonText: "Learn More",

  },  
  {
    backgroundImage: carouselThree,
    mainImage: creditCard,
    title: "Our first credit card",
    subtitleOne: "The last one you'll ever need",
    buttonText: "Apply Now",
  },
];
