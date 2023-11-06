import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../../img/hero_bg.png";
import HeroImg1 from "../../img/AlcoholDelivery/Item1.png";
import CourierImg1 from "../../img/AlcoholDelivery/Item5.png";
import CourierImg2 from "../../img/AlcoholDelivery/Item3.png";
import CourierImg3 from "../../img/AlcoholDelivery/Item4.png";
import CourierImg4 from "../../img/AlcoholDelivery/Item7.png";
import BottlesImg from "../../img/AlcoholDelivery/3bottles.png";
import HeroCircle from "@/components/HeroCircle";
import AlcoholBG1 from "../../img/AlcoholDelivery/BG3.png";
import AlcoholBG2 from "../../img/AlcoholDelivery/BG2.png";
import AlcoholBG3 from "../../img/AlcoholDelivery/BG1.png";

export default function AlcoholDelivery() {
  return (
    <div>
      <Header />
      {/* Hero Section */}

      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh]">
        <div className="bg-[url('../img/hero_bottom.png')] bg-no-repeat bg-bottom bg-contain h-[100vh] px-[120px]">
          <div className="absolute !top-[350px] !left-[200px]">
            <Image
              src={HeroBg}
              alt="hero bg"
              width={700}
              height={250}
            />
          </div>
          <div className="h-[80vh] flex flex-col justify-center">
            <h1 className="text-white text-[65px] leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              Do you hate having <br /> to pickup your
              <span className="text-[#F7BC06]"> liquor</span>?
            </h1>
            <p className="text-white text-[24px] mt-8 w-1/2">
              Order 10,000+ products, with same-day & next day delivery straight
              into your kitchen
            </p>
            <a
              className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 mt-10 text-white w-fit z-50"
              href={"/"}
            >
              SCHEDULE BARBAK
            </a>
          </div>
        </div>
        <div className=" absolute right-0 top-0 h-[120vh] w-[100vh] overflow-hidden">
          <div className="absolute !top-[50px] !right-[40px]">
            <HeroCircle />
          </div>
        </div>
      </div>

      {/* Hero Section */}

      <div className="flex flex-row justify-center items-center px-[120px] ">
        <div className="w-1/2 drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)] -ml-60 -mb-3">
          <Image src={BottlesImg} alt="hero image" className=" scale-[1.4]" />
        </div>
        <div className="w-1/2 flex flex-col ml-32">
          <h1 className="text-[40px] text-[#F7BC06] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            Mixed Beverage
            <br /> Permit Holder?
          </h1>
          <p className="text-[20px] w-11/12 mt-6">
            Our goal is to relieve you of the burden and frustrations of dealing
            with the state-run ABC. We aim to make ordering liquor as easy as it
            is to order beer and wine. Either let us log in and make your orders
            for you, or place your order and let us know when its available for
            pickup.
          </p>
        </div>
      </div>

      <div className=" absolute right-0 -rotate-12 -mt-[250px] mr-24">
        <Image src={AlcoholBG1} className=" scale-75 " />
      </div>

      <div className="bg-[url('../img/wood.jpg')] bg-no-repeat bg-center bg-cover ]">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] flex flex-row justify-between bg-no-repeat bg-bottom bg-contain px-[30px]">
            <div className="w-1/3 flex flex-col justify-evenly">
              <h1 className="text-white text-[28px] ml-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                No need to go out, we&#39;ll <br />
                bring the <span className="text-[#F7BC06]">booze</span> to you.
              </h1>
              <Image src={CourierImg1} className=" scale-75" />
              <h1 className="text-white text-[28px] ml-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                No <span className="text-[#F7BC06]">Bar</span>, no problem,{" "}
                <br />
                we&#39;ll bring the{" "}
                <span className="text-[#F7BC06]">drinks</span>
                <br /> to you.
              </h1>
            </div>
            <div className="w-1/3 flex flex-col justify-evenly">
              <Image src={CourierImg3} className=" scale-75" />
              <h1 className="text-white text-[28px] ml-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                You <span className="text-[#F7BC06]">order</span>, we <br />
                <span className="text-[#F7BC06]"> deliver</span>, you{" "}
                <span className="text-[#F7BC06]">enjoy</span>.
              </h1>
              <Image src={CourierImg4} className=" scale-75" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center -mt-[1000px]">
        <Image src={CourierImg2} />
      </div>

      <div className=" absolute w-[250px] ml-28 -mt-28 rotate-[30deg] h-auto">
        <Image src={AlcoholBG2} className=" scale-50" />
      </div>

      <div className="w-full flex px-[100px] -mt-16">
        <div className="w-1/2 flex justify-center items-center">
          <div className="shadow hover:shadow-2xl p-6 h-fit  flex flex-col justify-center items-center group">
            <h1 className="text-[24px] text-center font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)] group-hover:text-[#F7BC06] w-full">
              Cost:
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[20px] text-center text-[#0a0a0a85] font-[530] mt-2">
              $35 flat fee for delivery per liquor store $18 for every 5 cases
              ordered We will invoice you separately for liquor deliveries and
              can do this per delivery, weekly, or bi-weekly basis. We prefer
              our clients to be on Fentech for invoicing with us, but
              traditional methods are available as well.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-[url('../img/NoticeBG.png')]  bg-no-repeat bg-center bg-contain w-full h-[80vh] flex flex-col justify-center items-center px-20">
            <h1 className="text-[24px] text-center font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)] group-hover:text-[#F7BC06] w-full">
              Important Information:
            </h1>
            <p className="text-[20px] text-center text-black font-[530] mt-2">
              We deliver liquor 6 days a week (Mon-Sat) We are licensed, insured
              and bonded and there is no contract, we deliver on an as needed
              basis.
            </p>
          </div>
        </div>
      </div>
      <div className=" absolute right-0 -mt-44">
        <Image src={AlcoholBG3} className=" scale-50 " />
      </div>
      <Footer />
    </div>
  );
}
