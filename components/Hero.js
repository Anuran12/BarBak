import Image from "next/legacy/image";
import HeroBg from "../img/hero_bg.png";
import HeroImg1 from "../img/hero/hero1.png";
import HeroImg2 from "../img/hero/hero2.png";
import HeroImg3 from "../img/hero/hero3.png";
import HeroImg4 from "../img/hero/hero4.png";
import Link from "next/link";
import HeroCircle from "./HeroCircle";
import { useEffect, useState } from "react";
import HeroCircleMobile from "./HeroCircleMobile";
import HeroCircleTab from "./HeroCircleTab";
import TextTransition, { presets } from 'react-text-transition';


const TEXTS = ["A Partner You can Count On", "Do you hate having ", "Need your Package", "Do you need a reliable"];
const TEXTS2 = ["Transparent Pricing", " to pickup your liquor?", "at your doorstep?", "Cleaning service?"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  

  
  return (
    <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover lg:h-[100vh] nust:h-[100vh]">
      <div className="bg-[url('../img/hero_bottom.png')] bg-no-repeat bg-bottom bg-contain lg:h-[100.2vh] nust:h-[100.2vh] xl:px-[120px] px-[20px]">
        <div className="bg-[url('../img/hero_bg.png')] bg-no-repeat lg:bg-bottom bg-center bg-contain">
        <div className="h-[80vh] flex flex-col lg:justify-center md:justify-start justify-center md:pt-28 pt-28 xs:pt-0">
          <h1 className="text-[#F7BC06] flex flex-col lg:text-[65px] xl:text-[65px] md:text-[50px] xs:text-[25px] text-[20px] leading-tight drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
          <TextTransition springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}</TextTransition>
          </h1>
          <h1 className="text-[#F7BC06] flex flex-col lg:text-[65px] xl:text-[65px] md:text-[50px] xs:text-[25px] text-[20px] leading-tight drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
          <TextTransition springConfig={presets.stiff} delay={200}>{TEXTS2[index % TEXTS2.length]}</TextTransition>
          </h1>
          
          <p className="text-white lg:text-[24px] mt-8 xs:w-1/2 w-2/5">
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
      </div>
      <div className=" absolute right-0 top-5 h-[120vh] w-full overflow-hidden">
        {/* <div className="h-[90vh] w-[90vh] absolute !top-28 !-right-[30vh] hero_circle"></div> */}
        <div className="absolute !top-[50px] !right-[40px] hidden lg:block">
          <HeroCircle 
          images={[
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero3.297026b0.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.00236b01.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero2.5bfe651f.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero4.e1fca5d6.png&w=1920&q=75"
          ]}
          />
        </div>
        <div className="absolute !top-[150px] !right-[160px] md:hidden block">
          <HeroCircleMobile
          images={[
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero3.297026b0.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.00236b01.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero2.5bfe651f.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero4.e1fca5d6.png&w=1920&q=75"
          ]}
          />
        </div>
        <div className="absolute !top-[150px] nust:!top-[50px] !right-[160px] hidden lg:hidden md:block">
          <HeroCircleTab
          images={[
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero3.297026b0.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.00236b01.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero2.5bfe651f.png&w=1920&q=75",
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero4.e1fca5d6.png&w=1920&q=75"
          ]}
          />
        </div>
      </div>
      
    </div>
  );
}
