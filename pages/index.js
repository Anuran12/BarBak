import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Specials from "@/components/Specials";
import Stats from "@/components/Stats";
import Image from "next/legacy/image";
import VagImg from "../img/vagitables.png";
import Feedback from "@/components/Feedback";
import HeroCircle from "@/components/HeroCircle";
import PapperBG from "../img/BG_Images/papper.png";
import LeafBG from "../img/BG_Images/Leaf1.png";
import BallBG from "../img/BG_Images/ballbg1.png";
import BGItem from "../img/BG_Images/BGItem1.png";
import BallBG1 from "../img/BG_Images/ballbg2.png";
import Fees from "../img/BG_Images/money.png";
import DotBG from "../img/BG_Images/food6.png";
import DotBG1 from "../img/BG_Images/food5.png";
import Fees1 from "../img/BG_Images/Purse.png";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className=" absolute md:w-[250px] w-[130px] ml-5 -mt-16 md:ml-16 md:-mt-48 h-auto">
        <Image src={PapperBG} className="" />
      </div>
      <Stats />
      <div className=" absolute right-0 w-[100px] -mt-24 mr-96 h-auto">
        <Image src={BallBG} className="" />
      </div>
      <div className=" absolute right-0 md:w-[130px] w-[70px] md:-mt-14 md:mr-28 -mt-[720px] -rotate-90 md:rotate-0  h-auto">
        <Image src={LeafBG} className="" />
      </div>
      <div className=" absolute md:w-[230px] w-[130px] md:ml-16 md:mr-28 mt-10 h-auto">
        <Image src={BGItem} className="" />
      </div>
      <Services />
      <div className=" absolute right-0 w-[60px] mt-2  h-auto">
        <Image src={BallBG1} className="" />
      </div>
      <Specials />
      <div className=" absolute right-0 md:w-[130px] w-[70px] md:mr-28 h-auto">
        <Image src={LeafBG} className=" rotate-180" />
      </div>
      <div className=" absolute right-0 w-[70px] mt-16 mr-64 h-auto">
        <Image src={LeafBG} className=" -rotate-90" />
      </div>
      <div className=" absolute w-[30px] mt-16 ml-64 h-auto hidden md:block">
        <Image src={DotBG} className="" />
      </div>
      <div className=" absolute w-[20px] mt-6 ml-48 h-auto hidden md:block">
        <Image src={DotBG1} className="" />
      </div>
      <div className=" absolute w-[25px] mt-32 ml-40 h-auto hidden md:block">
        <Image src={DotBG} className="" />
      </div>
      <Feedback />
      <div className="hidden md:block absolute w-[150px] mt-4 ml-[500px] h-auto">
        <Image src={Fees} className="" />
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center md:px-[120px] mt-[40px] md:mt-[100px] mb-20 md:mb-0">
        <div className="md:w-1/3">
          <Image src={VagImg} alt="vagitables img" />
        </div>
        <div className="w-5/6 flex flex-col justify-center items-center">
          <h1 className="md:text-[40px] text-[25px] text-[#F7BC06] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            Say Goodbye To Hidden Fees
          </h1>
          <p className="md:text-[20px] w-11/12 mt-6">
            At BARBAK, we prioritize transparency and simplicity in our pricing.
            We aim to give our customers the confidence that they are receiving
            the best value for their money. We are dedicated to offering clear,
            straightforward pricing on all our products. <br />
            <br />
            Discover the peace of mind that comes with clear and straightforward
            pricing. Join BarBak today and experience the difference of
            transparent pricing for your Business.
          </p>
        </div>
        <div className=" absolute right-0 md:w-[150px] w-[100px] md:mt-[270px] mt-[850px] md:mr-20 mr-5 h-auto">
          <Image src={Fees1} className="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
