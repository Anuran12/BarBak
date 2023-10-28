import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../../img/hero_bg.png";
import HeroImg1 from "../../img/Hospitality Couriers/Item1.png";
import VagImg from "../img/vagitables.png";

export default function HospitalityCouriers() {
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
              style={{ opacity: "0.2" }}
            />
          </div>
          <div className="h-[80vh] flex flex-col justify-center">
            <h1 className="text-white text-[65px] leading-tight">
              Need your
              <span className="text-[#F7BC06]"> Package</span>
              <br /> at your doorstep?
            </h1>
            <p className="text-white text-[24px] mt-8 w-1/2">
              Order 10,000+ products, with same-day & next day delivery straight
              into your kitchen
            </p>
            <a
              className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 mt-10 text-white w-fit"
              href={"/"}
            >
              SCHEDULE BARBAK
            </a>
          </div>
        </div>
        <div className=" absolute right-0 top-[100px] h-[120vh] w-[100vh] overflow-hidden">
          <div className="h-[90vh] w-[90vh] absolute !top-5 !-right-[30vh] hero_circle"></div>
          <div className="absolute scale-75 rotate-12 !top-[50px] !right-[50px]">
            <Image src={HeroImg1} alt="hero image" width={708} height={737} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className=" flex flex-col justify-center items-center px-[120px] mt-20">
        <h1 className="text-[40px]">
          YOU
          <span className="text-[#F7BC06]"> ASK</span>. WE
          <span className="text-[#F7BC06]"> DELIVER</span>.
        </h1>
        <div className="grid grid-cols-4 gap-5 mt-16">
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
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center group">
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
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center group">
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
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center group">
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
      <div className="mb-[100px] w-full h-1"></div>
      <Footer />
    </div>
  );
}
