import send from "../assets/images/send.png";
import shop from "../assets/images/shop.png";
import personalized from "../assets/images/personalized.png";
import easyToStart from "../assets/images/easy-to-start.png";

interface WebsiteCopyObject {
    image: string;
    title: string;
   description: string;
};


export const websiteCopyObject: WebsiteCopyObject[] = [
    {
        image: send,
        title: "Transfer",
        description: "Instantly send money through QR code or phone number."
    },
    {
        image: shop,
        title: "Shop",
        description: "Whether it be crypto or stocks, you can grow your money how you like it"
    },
    {
        image: personalized,
        title: "Personalized",
        description: "Shop and withdraw cash with a card that has your @username"
    },
    {
        image: easyToStart,
        title: "Easy to start",
        description: "Sign up with just 1 ID and no minimum balance"
    },
];