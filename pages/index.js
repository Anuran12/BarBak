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
      <div className=" absolute lg:w-[250px] w-[130px] ml-5 -mt-16 lg:ml-16 lg:-mt-48 h-auto">
        <Image src={PapperBG} className="" />
      </div>
      <Stats />
      <div className=" absolute right-0 w-[100px] -mt-14 mr-96 h-auto">
        <Image src={BallBG} className="" />
      </div>
      <div className=" absolute right-0 lg:w-[130px] w-[70px] lg:-mt-14 lg:mr-28 -mt-[720px] -rotate-90 lg:rotate-0  h-auto">
        <Image src={LeafBG} className="" />
      </div>
      <div className=" absolute lg:w-[230px] w-[130px] lg:ml-16 ml-4 lg:mr-28 mt-10 h-auto">
        <Image src={BGItem} className="" />
      </div>
      <Services />
      <div className=" absolute right-0 mr-4 w-[60px] mt-2  h-auto">
        <Image src={BallBG1} className="" />
      </div>
      <Specials />
      <div className=" absolute right-0 lg:w-[130px] w-[70px] lg:mr-28 mr-2 h-auto">
        <Image src={LeafBG} className=" rotate-180" />
      </div>
      <div className=" absolute right-0 w-[70px] lg:mt-16 lg:mr-64 mt-8 mr-20 h-auto">
        <Image src={LeafBG} className=" -rotate-90" />
      </div>
      <div className=" absolute w-[30px] mt-16 ml-64 h-auto hidden lg:block">
        <Image src={DotBG} className="" />
      </div>
      <div className=" absolute w-[20px] mt-6 ml-48 h-auto hidden lg:block">
        <Image src={DotBG1} className="" />
      </div>
      <div className=" absolute w-[25px] mt-32 ml-40 h-auto hidden lg:block">
        <Image src={DotBG} className="" />
      </div>
      <Feedback />
      <div className="hidden lg:block absolute w-[150px] mt-4 ml-[500px] h-auto">
        <Image src={Fees} className="" />
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:px-[120px] mt-[40px] lg:mt-[100px] mb-20 lg:mb-0">
        <div className="lg:w-1/3 md:w-1/2">
          <Image src={VagImg} alt="vagitables img" />
        </div>
        <div className="w-5/6 lg:-mt-20 flex flex-col justify-center items-center">
          <h1 className="lg:text-[40px] md:text-[35px] text-[25px] text-[#F7BC06] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            Say Goodbye To Hidden Fees
          </h1>
          <p className="lg:text-[20px] w-11/12 mt-6 z-50">
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
        <div className=" absolute right-0 lg:w-[150px] w-[100px] lg:mt-[270px] mt-[800px] lg:mr-20 mr-5 h-auto">
          <Image src={Fees1} className="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
