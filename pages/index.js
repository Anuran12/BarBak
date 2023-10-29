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

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className=" absolute w-[250px] ml-16 -mt-48 h-auto">
        <Image src={PapperBG} className="" />
      </div>
      <Stats />
      <div className=" absolute right-0 w-[100px] -mt-24 mr-96 h-auto">
        <Image src={BallBG} className="" />
      </div>
      <div className=" absolute right-0 w-[130px] -mt-14 mr-28 h-auto">
        <Image src={LeafBG} className="" />
      </div>
      <div className=" absolute w-[230px] ml-16 mr-28 h-auto">
        <Image src={BGItem} className="" />
      </div>
      <Services />
      <div className=" absolute right-0 w-[60px] mt-2 mr-[700px] h-auto">
        <Image src={BallBG1} className="" />
      </div>
      <Specials />
      <div className=" absolute right-0 w-[130px] mr-28 h-auto">
        <Image src={LeafBG} className=" rotate-180" />
      </div>
      <div className=" absolute right-0 w-[70px] mt-16 mr-64 h-auto">
        <Image src={LeafBG} className=" -rotate-90" />
      </div>
      <Feedback />
      <div className=" absolute right-0 w-[150px] mt-16 mr-20 h-auto">
        <Image src={Fees} className="" />
      </div>
      <div className="flex flex-row px-[120px] mt-[100px]">
        <div className="w-1/3">
          <Image src={VagImg} alt="vagitables img" />
        </div>
        <div className="w-2/3 flex flex-col ml-16">
          <h1 className="text-[40px] text-[#F7BC06]">
            Say Goodbye To Hidden Fees
          </h1>
          <p className="text-[20px] w-11/12 mt-6">
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
      </div>
      <Footer />
    </div>
  );
}
