import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Specials from "@/components/Specials";
import Stats from "@/components/Stats";
import Image from "next/legacy/image";
import VagImg from "../img/vagitables.png";
import Feedback from "@/components/Feedback";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Specials />
      <Feedback />
      <div className="flex flex-row px-[120px] mt-[100px]">
        <div className="w-1/3">
          <Image src={VagImg} alt="vagitables img" />
        </div>
        <div className="w-2/3 flex flex-col ml-16">
          <h1 className="text-[40px] text-[#F7BC06] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
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
