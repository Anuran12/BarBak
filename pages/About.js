import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Trust from "@/components/Trust";
import Image from "next/legacy/image";
import LoyaltyImg from "../img/Loyalty.png";
import SincerityImg from "../img/Sincerity.png";
import TrustImg from "../img/Trust.png";
import TeamImg from "../img/Team.png";

export default function About() {
  return (
    <div>
      <Header />
      <AboutHero />
      <Trust />
      <div className="mt-[100px] flex flex-col w-full px-[120px]">
        <h1 className="text-[40px] text-center font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          We create an excellent service
          <br /> built on values
        </h1>
        <p className="text-[14px] text-slate-900/60 mt-3 text-center">
          The quality of our product is very important to us and we take care of
          our employees to take care of our customers
        </p>
        <div className="flex flex-row justify-between mt-16">
          <div className="flex flex-col justify-center">
            <Image src={LoyaltyImg} />
            <p className=" text-center mt-3">Loyalty</p>
          </div>
          <div className="flex flex-col justify-center">
            <Image src={SincerityImg} />
            <p className=" text-center mt-3">Sincerity</p>
          </div>
          <div className="flex flex-col justify-center">
            <Image src={TrustImg} />
            <p className=" text-center mt-3">Trust</p>
          </div>
          <div className="flex flex-col justify-center">
            <Image src={TeamImg} />
            <p className=" text-center mt-3">Team</p>
          </div>
        </div>
      </div>
      <Team />
      <Services />
      <div className="mb-[100px] w-full h-1"></div>
      <Footer />
    </div>
  );
}
