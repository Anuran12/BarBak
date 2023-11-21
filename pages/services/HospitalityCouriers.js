import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../../img/hero_bg.png";
import HeroImg1 from "../../img/HospitalityCouriers/Item1.png";
import HeroImg2 from "../../img/HospitalityCouriers/Item2.png";
import CourierImg1 from "../../img/HospitalityCouriers/Item4.png";
import CourierImg2 from "../../img/HospitalityCouriers/Item7.png";
import CourierImg3 from "../../img/HospitalityCouriers/Item6.png";
import CourierImg4 from "../../img/HospitalityCouriers/Item3.png";
import HeroCircle from "@/components/HeroCircle";
import HeroCircleTab from "@/components/HeroCircleTab";
import HeroCircleMobile from "@/components/HeroCircleMobile";

export default function HospitalityCouriers() {
  return (
    <div className=" overflow-hidden">
      <Header />
      {/* Hero Section */}

      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover lg:h-[100vh] nust:h-[100vh]">
        <div className="bg-[url('../img/hero_bottom.png')] bg-no-repeat bg-bottom bg-contain lg:h-[100.2vh] nust:h-[100.2vh] lg:px-[120px] px-[20px]">
          <div className="absolute lg:!top-[350px] top-[350px] lg:!left-[200px]">
            <Image
              src={HeroBg}
              alt="hero bg"
              width={700}
              height={250}
            />
          </div>
          <div className="h-[80vh] flex flex-col lg:justify-center md:justify-start justify-center md:pt-28">
            <h1 className="text-white lg:text-[65px] md:text-[50px] text-[25px] leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              Need your
              <span className="text-[#F7BC06]"> Package</span>
              <br /> at your doorstep?
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
              "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FItem1.e1fca5d6.png&w=1920&q=75",
              "https://i.ibb.co/y6nVVKp/pngwing-com-37.png",
              "https://i.ibb.co/GTc9cmN/pngwing-com-35.png",
              "https://i.ibb.co/W3BHs1c/Item4.png"
            ]}
            />
        </div>
        <div className="absolute !top-[150px] !right-[160px] md:hidden block">
          <HeroCircleMobile />
        </div>
        <div className="absolute !top-[150px] nust:!top-[50px] !right-[160px] hidden lg:hidden md:block">
          <HeroCircleTab />
        </div>
      </div>
      </div>

      {/* Hero Section */}
      <div className=" flex flex-col justify-center items-center lg:px-[120px] px-[20px] mt-20">
        <h1 className="lg:text-[40px] md:text-[35px] text-[25px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          YOU
          <span className="text-[#F7BC06]"> ASK</span>. WE
          <span className="text-[#F7BC06]"> DELIVER</span>.
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-16">
          <div className="shadow hover:shadow-2xl p-6 flex flex-col items-center group">
            <h1 className=" font-[540] text-[22px] text-center group-hover:text-[#F7BC06] w-full">
              Catering
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              Need help with delivery, Give us a call. We have someone ready to
              help with your delivery and setup.
            </p>
          </div>
          <div className="shadow hover:shadow-2xl p-6 flex flex-col items-center group">
            <h1 className=" font-[540] text-[22px] text-center group-hover:text-[#F7BC06] w-full">
              Hotels
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              Hotels often face difficulties when they need to send or receive
              important materials for example luggage left at the airport. We
              can help with all your guests and management delivery needs.
            </p>
          </div>
          <div className="shadow hover:shadow-2xl p-6 flex flex-col items-center group">
            <h1 className=" font-[540] text-[22px] text-center group-hover:text-[#F7BC06] w-full">
              Farms & Markets
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              We work with local farmers and markets to help you get locally
              sourced food quick and reliably. For more information on how to
              become a partner, please contact us below
            </p>
          </div>
          <div className="shadow hover:shadow-2xl p-6 flex flex-col items-center group">
            <h1 className=" font-[540] text-[22px] text-center group-hover:text-[#F7BC06] w-full">
              Florists
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              We understand what it takes to deliver small to large bouquets.
              Let us help grow your business with our delivery services.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('../img/wood.jpg')] bg-no-repeat bg-center bg-cover ] mt-20">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] flex flex-row justify-between bg-no-repeat bg-bottom bg-contain lg:px-[30px]">
            <div className="w-1/3 flex flex-col justify-evenly">
              <h1 className="text-white md:text-[28px] text-[16px] md:ml-28 ml-5 mt-10 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                Delivering Dreams, <br />
                Not Just <span className="text-[#F7BC06]">Couriers</span>
              </h1>
              <Image src={CourierImg1} className=" scale-75" />
              <h1 className="text-white md:text-[28px] text-[16px] md:ml-28 ml-5 mb-10 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                More than <span className="text-[#F7BC06]">Couriers</span>,{" "}
                <br />
                We&#39;re Your <span className="text-[#F7BC06]">Partners</span>
              </h1>
            </div>
            <div className="w-1/3 flex flex-col justify-evenly">
              <Image src={CourierImg3} className=" scale-75" />
              <h1 className="text-white md:text-[28px] text-[16px] md:ml-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                <span className="text-[#F7BC06]">Fast</span>,{" "}
                <span className="text-[#F7BC06]">Flexible</span>, and <br />
                Always <span className="text-[#F7BC06]">Friendly</span>
              </h1>
              <Image src={CourierImg4} className=" scale-75" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:-mt-[900px] -mt-[350px] md:-mt-[700px] scale-100">
        <div className="w-[55%] flex justify-center">
          <Image src={CourierImg2} />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:px-[120px] px-[20px] lg:-mt-32 mb-16 lg:mb-0">
        <div className="lg:w-1/2 drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
          <Image src={HeroImg2} alt="hero image" className=" lg:scale-75" />
        </div>
        <div className="lg:w-1/2 flex flex-col lg:ml-16">
          <h1 className="text-[40px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            Your
            <span className="text-[#F7BC06]"> Parcel</span>, Our
            <span className="text-[#F7BC06]"> Passion</span>.
          </h1>
          <p className="text-[20px] w-11/12 mt-6">
            Join the countless satisfied customers who rely on us for their
            courier delivery needs. Experience the convenience and peace of mind
            that comes with choosing BARBAK as your go-to courier service. Your
            satisfaction is our top priority, and we look forward to serving
            you. <br />
            <br />
            Make your delivery with confidence; make it with us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
