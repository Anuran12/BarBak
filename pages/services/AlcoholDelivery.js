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
import HeroCircleMobile from "@/components/HeroCircleMobile";
import HeroCircleTab from "@/components/HeroCircleTab";
import HeroImg1 from "../../img";


export default function AlcoholDelivery() {
  return (
    <div>
      <Header />
      {/* Hero Section */}

      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover lg:h-[100vh] h-[80vh] nust:h-[100vh]">
        <div className="bg-[url('../img/hero_bottom.png')] bg-no-repeat bg-bottom bg-contain lg:h-[100.2vh] nust:h-[100.2vh] h-[80.2vh] lg:px-[120px] px-[20px]">
          <div className="absolute lg:!top-[350px] top-[350px] lg:!left-[200px]">
            <Image src={HeroBg} alt="hero bg" width={700} height={250} />
          </div>
          <div className="h-[80vh] flex flex-col lg:justify-center md:justify-start justify-center md:pt-28">
            <h1 className="text-white lg:text-[65px] md:text-[50px] text-[25px] leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              Do you hate having <br /> to pickup your
              <span className="text-[#F7BC06]"> liquor</span>?
            </h1>
            <p className="text-white md:text-[24px] text-[18px] mt-8 w-1/2">
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
        <div className=" absolute right-0 top-5 h-[120vh] w-full overflow-hidden">
          {/* <div className="h-[90vh] w-[90vh] absolute !top-28 !-right-[30vh] hero_circle"></div> */}
          <div className="absolute !top-[50px] !right-[40px] hidden lg:block">
            <HeroCircle
            images={[
              "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FItem1.297026b0.png&w=1920&q=75",
              "https://i.ibb.co/74KGcsG/pngwing-com-25.png",
              "https://i.ibb.co/KhcXqMW/pngwing-com-23.png",
              "https://i.ibb.co/3NMbhvX/pngwing-com-28.png"
            ]}
            />
          </div>
          <div className="absolute !top-[150px] !right-[160px] md:hidden block">
            <HeroCircleMobile />
          </div>
          <div className="absolute !top-[150px] !right-[160px] nust:!top-[50px] hidden lg:hidden md:block">
            <HeroCircleTab />
          </div>
        </div>
      </div>

      {/* Hero Section */}

      <div className="flex lg:flex-row flex-col mb-16 justify-center items-center lg:px-[120px] px-10">
        <div className="lg:w-1/2 2xl:w-1/3 md:w-5/6 drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)] lg:-ml-60 lg:-mb-3">
          <Image
            src={BottlesImg}
            alt="hero image"
            className=" lg:scale-[1.4] 2xl:scale-100"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col lg:ml-32">
          <h1 className="lg:text-[40px] md:text-[35px] text-[25px] text-[#F7BC06] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            Mixed Beverage
            <br /> Permit Holder?
          </h1>
          <p className="text-[20px] 2xl:text-[26px] w-11/12 mt-6">
            Our goal is to relieve you of the burden and frustrations of dealing
            with the state-run ABC. We aim to make ordering liquor as easy as it
            is to order beer and wine. Either let us log in and make your orders
            for you, or place your order and let us know when its available for
            pickup.
          </p>
        </div>
      </div>

      <div className=" absolute right-0  lg:-mt-[310px] -mt-[200px] lg:mr-24 mr-0">
        <Image
          src={AlcoholBG1}
          className=" lg:scale-75 scale-[.4] -rotate-12"
        />
      </div>

      <div className="bg-[url('../img/wood.jpg')] bg-no-repeat bg-center bg-cover ] lg:-mt-[65px]">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] flex flex-row justify-between bg-no-repeat bg-bottom bg-contain lg:px-[30px]">
            <div className="w-1/3 flex flex-col justify-evenly">
              <h1 className="text-white md:text-[28px] text-[16px] md:ml-28 ml-5 mt-10 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                No need to go out, we&#39;ll <br />
                bring the <span className="text-[#F7BC06]">booze</span> to you.
              </h1>
              <Image src={CourierImg1} className=" scale-75" />
              <h1 className="text-white md:text-[28px] text-[16px] md:ml-28 ml-5 mb-10 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                No <span className="text-[#F7BC06]">Bar</span>, no problem,{" "}
                <br />
                we&#39;ll bring the{" "}
                <span className="text-[#F7BC06]">drinks</span>
                <br /> to you.
              </h1>
            </div>
            <div className="w-1/3 flex flex-col justify-evenly">
              <Image src={CourierImg3} className=" scale-75" />
              <h1 className="text-white md:text-[28px] text-[16px] md:ml-20 mb-7 mr-5 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                You <span className="text-[#F7BC06]">order</span>, we <br />
                <span className="text-[#F7BC06]"> deliver</span>, you{" "}
                <span className="text-[#F7BC06]">enjoy</span>.
              </h1>
              <Image src={CourierImg4} className=" scale-75" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:-mt-[1000px] md:-mt-[900px] -mt-[400px]">
        <div className="w-[35%] flex justify-center">
          <Image src={CourierImg2} />
        </div>
      </div>

      <div className=" absolute w-[250px] lg:ml-28 -ml-16 lg:-mt-28 -mt-32  h-auto">
        <Image
          src={AlcoholBG2}
          className=" rotate-[30deg] lg:scale-50 scale-[.3]"
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:px-[100px] px-[20px] -mt-16">
        <div className="lg:w-1/2 flex justify-center mt-20 lg:mt-0 items-center">
          <div className="shadow hover:shadow-2xl p-6 h-fit  flex flex-col justify-center items-center group">
            <h1 className="md:text-[24px] text-[20px] text-center font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)] group-hover:text-[#F7BC06] w-full">
              Cost:
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="md:text-[20px] text-[16px] text-center text-[#0a0a0a85] font-[530] mt-2">
              $35 flat fee for delivery per liquor store $18 for every 5 cases
              ordered We will invoice you separately for liquor deliveries and
              can do this per delivery, weekly, or bi-weekly basis. We prefer
              our clients to be on Fentech for invoicing with us, but
              traditional methods are available as well.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
        <div className="bg-[url('../img/NoticeBG.png')] flex-col bg-no-repeat bg-center bg-contain w-full lg:h-[80vh] md:h-[90vh] h-[40vh] nust:h-[80vh] leading-5 md:leading-relaxed lg:leading-relaxed flex justify-center items-center lg:px-20 xl:px-28 2xl:px-40 md:px-32 px-10 nust:px-72">
            <h1 className="md:text-[28px] text-[20px] text-center font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)] group-hover:text-[#F7BC06] w-full">
              Important Information:
            </h1>
            <p className="text-black lg:text-[20px] written font-bold 2xl:text-[30px] md:text-[24px] text-[14px] lg:mt-16 mt-10">
              We deliver liquor 6 days a week (Mon-Sat) We are licensed, insured
              and bonded and there is no contract, we deliver on an as needed
              basis.
            </p>
          </div>
        </div>
      </div>
      <div className=" absolute right-0 lg:-mt-44 -mt-[150px]">
        <Image src={AlcoholBG3} className=" lg:scale-50 scale-[.3] " />
      </div>
      <Footer />
    </div>
  );
}
