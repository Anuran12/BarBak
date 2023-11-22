import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Trust from "@/components/Trust";
import Image from "next/legacy/image";
import LoyaltyImg from "../img/loyalty1.png";
import SincerityImg from "../img/Sincerity1.png";
import TrustImg from "../img/Trust1.png";
import TeamImg from "../img/Team1.png";
import LeafBG from "../img/BG_Images/Leaf1.png";
import BGItem1 from "../img/BG_Images/mushroom1.png";
import BGItem2 from "../img/BG_Images/mushroom2.png";
import BGItem3 from "../img/BG_Images/knife.png";

export default function About() {
  return (
    <div>
      <Header />
      <AboutHero />
      <Trust />
      <div className="mt-[100px] flex flex-col w-full lg:px-[120px] px-4">
        <h1 className="lg:text-[40px] md:text-[35px] text-[25px] text-center font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          We create an excellent service
          <br /> built on values
        </h1>
        <p className="text-[14px] 2xl:text-[28px] text-slate-900/60 mt-3 text-center">
          The quality of our product is very important to us and we take care of
          our employees to take care of our customers
        </p>
        <div className="flex flex-row justify-between mt-16">
          <div className="flex flex-col lg:mt-12 mt-9 lg:justify-between mx-1">
            <Image src={LoyaltyImg} />
            <p className=" text-center mt-3">Loyalty</p>
          </div>
          <div className="flex flex-col mt-4 lg:justify-between mx-1">
            <Image src={SincerityImg} />
            <p className=" text-center mt-3">Sincerity</p>
          </div>
          <div className="flex flex-col mt-1 lg:justify-between mx-1">
            <Image src={TrustImg} />
            <p className=" text-center mt-3">Trust</p>
          </div>
          <div className="flex flex-col lg:mt-12 mt-8 lg:justify-between mx-1">
            <Image src={TeamImg} />
            <p className=" text-center mt-3">Team</p>
          </div>
        </div>
      </div>
      <div className=" absolute right-0 lg:w-[130px] w-[100px] mt-16 -rotate-90 lg:mr-28 mr-4 h-auto">
        <Image src={LeafBG} className="" />
      </div>
      <Team />
      <div className=" absolute w-[250px] ml-28 -mt-8 h-auto">
        <Image src={BGItem3} className="" />
      </div>
      <Services />
      <div className=" absolute right-0 w-[130px] mr-28 -mt-2 h-auto">
        <Image src={BGItem1} className="" />
      </div>
      <div className=" absolute right-0 w-[100px] mr-60 -mt-2 h-auto">
        <Image src={BGItem2} className="" />
      </div>
      <div className="mb-[100px] w-full h-1"></div>
      <Footer />
    </div>
  );
}
