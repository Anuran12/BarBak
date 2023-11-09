import Image from "next/legacy/image";
import HeroBg from "../img/hero_bg.png";
import DotBG from "../img/BG_Images/dot2.png";

export default function AboutHero() {
  return (
    <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover lg:h-[100vh] nustmax:h-[110vh] pb-10 lg:px-[120px] px-[30px]">
      <div className="absolute lg:!top-16 md:-top-48 nust:top-10 z-0 !left-0 m-auto w-full h-full flex justify-center items-center">
        <Image src={HeroBg} alt="hero bg" width={700} height={250} />
      </div>
      <div className=" lg:w-1/3 pt-28">
        <h1 className="text-[#F7BC06] text-[48px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          About us
        </h1>
        <p className="text-white text-[16px]">
          BarBak Hospitality, established in 2019 in Charlotte, NC, has its
          roots firmly planted in wholesale third-party delivery. We&#39;ve
          always collaborated with top-tier wholesale providers to supply your
          business with the necessary products for success, all while keeping
          your costs at a minimum.
          <br />
          <be />
          <br />
          Despite the global pandemic, we broadened our horizons to Charleston,
          SC in November 2020. Since 2021, we&#39;ve been privileged to extend
          our services during these challenging times, covering areas from Key
          West to Baltimore, Maryland.
          <br />
          <be />
          <br />
          In addition to this, BarBak Hospitality offers expert logistics
          services for hospitality businesses and government sectors that
          prioritize reliability, punctuality, and high customer satisfaction.
          <br />
          <be />
          <br />
          Over the years, we&#39;ve catered to a variety of businesses. Whether
          it&#39;s delivering to your local daycare, during your daily commute
          or supplying goods to the local military base for our service members,
          you&#39;re likely to spot us in action!
        </p>
      </div>
      <div className=" absolute right-0 w-[30px] lg:mt-40 mt-40 lg:mr-64 mr-4 h-auto">
        <Image src={DotBG} className="" />
      </div>
      <div className=" absolute right-0 w-[20px] lg:mt-28 lg:mr-96 mr-40 mt-20 h-auto">
        <Image src={DotBG} className="" />
      </div>
    </div>
  );
}
