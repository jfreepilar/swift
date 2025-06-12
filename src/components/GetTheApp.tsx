import { appMarketPlaceObject } from "../objects-arrays/appMarketPlaceObject";
import qrCode from "../assets/images/qr-code.png";

export default function GetTheApp() {
  return (
        <div className="flex flex-col lg:flex-row w-[90%]">
          <div className="py-20">
            <div className="text-sm/14 mb-10">
              <h2 className="leading-10 sm:leading-14">It's all that and a bank. <br /> What more could you ask for?</h2>
            </div>

            <div className="flex flex-wrap gap-3 justify-center sm:justify-between p-0">
              {appMarketPlaceObject.map((item, index) => (
                <div key={index} className="flex rounded-[8px] py-2 px-4 w-[208px] bg-martnique hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span  className={`${index === 0 ? "text-5xl mt-1" : "text-6xl"}`}>{item.icon}</span>
                  <div>
                    <p>{item.callToAction}</p>
                    <p className="font-monserrat-bold text-2xl">{item.appName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
              <img src={qrCode} className="w-[650px] h-[600px]"/>
          </div>
        </div>
  )
}
