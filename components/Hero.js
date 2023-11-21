import Image from "next/legacy/image";
import HeroBg from "../img/hero_bg.png";
import HeroImg1 from "../img/hero/hero1.png";
import Link from "next/link";
import HeroCircle from "./HeroCircle";
import { useEffect, useState } from "react";
import HeroCircleMobile from "./HeroCircleMobile";
import HeroCircleTab from "./HeroCircleTab";

export default function Hero() {
  const [currentString, setCurrentString] = useState(0);


  const texts = ["A Partner You can Count On", "Do you hate having ", "Need your Package", "Do you need a reliable"];
  const texts2 = ["Transparent Pricing", " to pickup your liquor?", "at your doorstep?", "Cleaning service?"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText2Index, setCurrentText2Index] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the text to the next one in the array
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentText2Index((prevIndex) => (prevIndex + 1) % texts2.length);
    }, 3000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  

  
  return (
    <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover lg:h-[100vh] nust:h-[100vh]">
      <div className="bg-[url('../img/hero_bottom.png')] bg-no-repeat bg-bottom bg-contain lg:h-[100.2vh] nust:h-[100.2vh] xl:px-[120px] px-[20px]">
        <div className="absolute lg:!top-[350px] top-[350px] lg:!left-[200px]">
          <Image
            src={HeroBg}
            alt="hero bg"
            width={700}
            height={250}
          />
        </div>
        <div className="h-[80vh] flex flex-col lg:justify-center md:justify-start justify-center md:pt-28">
          <h1 className="text-[#F7BC06] flex flex-col lg:text-[65px] xl:text-[65px] md:text-[50px] text-[25px] overflow-hidden leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
            <span className="hero_text">
            {texts[currentTextIndex]}
            </span>
          </h1>
          <h1 className="text-[#F7BC06] flex flex-col lg:text-[65px] xl:text-[65px] md:text-[50px] text-[25px] overflow-hidden leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
            <span className="hero_text">
            {texts2[currentText2Index]}
            </span>
          </h1>
          
          <p className="text-white lg:text-[24px] mt-8 w-1/2">
            Order 10,000+ products, with same-day & next day delivery straight
            into your kitchen
          </p>
          <a
            className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 mt-10 text-white w-fit z-50"
            href={"/"}
          >
            Order Delivery
          </a>
        </div>
      </div>
      <div className=" absolute right-0 top-5 h-[120vh] w-full overflow-hidden">
        {/* <div className="h-[90vh] w-[90vh] absolute !top-28 !-right-[30vh] hero_circle"></div> */}
        <div className="absolute !top-[50px] !right-[40px] hidden lg:block">
          <HeroCircle 
          images={[
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FItem1.297026b0.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.00236b01.png&w=1920&q=75",
            "https://i.ibb.co/F3bpd2f/pngwing-com-22.png",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FItem1.e1fca5d6.png&w=1920&q=75"
          ]}
          />
        </div>
        <div className="absolute !top-[150px] !right-[160px] md:hidden block">
          <HeroCircleMobile />
        </div>
        <div className="absolute !top-[150px] nust:!top-[50px] !right-[160px] hidden lg:hidden md:block">
          <HeroCircleTab />
        </div>
      </div>
    </div>
  );
}
