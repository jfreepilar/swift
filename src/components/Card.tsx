
export interface CardItem {
    image: string;
    promoPeriod: string;
    descriptions: string;
    tagOne: string;
    tagTwo: string;
};

const imageStyle: string = "w-full h-full";
const tagStyle: string = "bg-martnique py-1 px-3 border-2 border-prim rounded-full mr-3";

export const Card: React.FC<CardItem> = ({
    image,
    promoPeriod,
    descriptions,
    tagOne,
    tagTwo,
}) => {

  return (
    <div className="rounded-lg shadow-lg w-[390px]  cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center  bg-lavander h-[300px] rounded-t-lg">
            <img src={image}
                 className={imageStyle}/>
        </div>

        <div className="py-3 px-4 bg-dusty-violet rounded-b-lg h-[185px]">
            <p className="text-md text-disco font-bold">{promoPeriod}</p>
            <p>{descriptions}</p>
            <div className="flex mt-2">
                <div className={tagStyle}>{tagOne}</div>
                <div className={tagStyle}>{tagTwo}</div>
            </div>
        </div>

    </div>
  )
}
