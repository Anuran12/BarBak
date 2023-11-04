import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../img/hero_bg.png";
import HeroImg1 from "../img/hero/hero1.png";
import Link from "next/link";
import CalendarImg from "../img/calendar.png";
import ClockImg from "../img/clock.png";
import DeliveryImg from "../img/delivery1.png";
import CuriousImg from "../img/Curious.png";
import SupportImg from "../img/support.png";

export default function Barbakplus() {
  return (
    <div>
      <Header />
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh]">
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-[#F7BC06] text-[200px] mt-20 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
            BARBAK+
          </h1>
          <p className="text-white text-[24px] mt-8 w-1/2 text-center">
            Exclusive Membership Benefits
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center px-[120px] mt-20">
        <h1 className="text-[40px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          CREDITS THAT ROCK
        </h1>
        <p>
          AS A BARBAK+ MEMBER, YOU HAVE THE OPPORTUNITY TO EARN CREDITS BASED ON
          YOUR MONTHLY PURCHASE VOLUME:
        </p>
        <div className="grid grid-cols-3 gap-5 mt-16">
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-between items-center group">
            <h1 className=" font-bold text-[30px] text-center group-hover:text-[#F7BC06] w-full">
              1% credit
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              We give you hours of your precious life back, with full price
              transparency, by supplying everything you need to run your
              business from our fulfillment centers to your shelves and fridges.
            </p>
          </div>
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-between items-center group">
            <h1 className=" font-bold text-[30px] text-center group-hover:text-[#F7BC06] w-full">
              2% credit
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              We provide Alcohol Delivery for all NC Licensed Liqour
              Establishments at an affordable rate. Simply input your order, or
              send it for us to place. We will charge you by the case for pickup
              and delivery.
            </p>
          </div>
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-between items-center group">
            <h1 className=" font-bold text-[30px] text-center group-hover:text-[#F7BC06] w-full">
              3% credit
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              You decide how often you need us! After working in the Hospitality
              industry for years, we were able to come up with a concept that
              makes the customer happy. We understand the needs of the
              restaurant and we can implement a strategy to keep clients
              satisfied.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover text-white flex flex-row justify-center items-center px-[120px] mt-32">
        <div className="w-1/2">
          <Image src={CalendarImg} className=" scale-75" />
        </div>
        <div className="w-1/2">
          <h1 className="text-[40px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            GUARANTEED DELIVERY <br /> DAY OPTIONS
          </h1>
          <p className="text-center">
            ENJOY THE CONVENIENCE OF UP TO 7 DELIVERY DAYS PER WEEK BASED UPON
            YOUR GEOGRAPHY - ALLOWING YOU TO RESTOCK YOUR INVENTORY MORE
            FREQUENTLY AND DEPENDABLY.
          </p>
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center px-[120px]">
        <div className="w-1/2">
          <h1 className="text-[40px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            PRIORITY DELIVERY WINDOWS
          </h1>
          <p className="text-center">
            BARBAK+ MEMBERS CAN CHOOSE SPECIFIC TIME WINDOWS THAT BEST SUIT YOUR
            SCHEDULE, ALLOWING YOU TO TAKE ADVANTAGE OF YOUR DAY AS YOU SEE FIT.{" "}
          </p>
        </div>
        <div className="w-1/2">
          <Image src={ClockImg} className=" scale-75" />
        </div>
      </div>
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover flex text-white flex-row justify-center items-center px-[120px]">
        <div className="w-1/2">
          <Image src={DeliveryImg} className=" scale-75" />
        </div>
        <div className="w-1/2">
          <h1 className="text-[40px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            LOWER DELIVERY MINIMUMS
          </h1>
          <p className="text-center">
            FREE DELIVERY FOR ORDERS OVER $500. THIS ALLOWS YOU TO MANAGE YOUR
            INVENTORY MORE EFFICIENTLY WITHOUT THE PRESSURE OF MEETING HIGHER
            MINIMUM THRESHOLDS.{" "}
          </p>
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center px-[120px]">
        <div className="w-1/2">
          <h1 className="text-[40px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            EMERGENCY AFTER ORDER CUT-OFF
          </h1>
          <p className="text-center">
            RECEIVE EMERGENCY HELP IF YOU MISSED YOUR CUTOFF.{" "}
          </p>
        </div>
        <div className="w-1/2">
          <Image src={CuriousImg} className=" scale-75" />
        </div>
      </div>
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh] flex text-white flex-row justify-center items-center px-[120px]">
        <div className="w-1/2">
          <Image src={SupportImg} className=" scale-75" />
        </div>
        <div className="w-1/2">
          <h1 className="text-[40px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            DEDICATED AROUND-THE-CLOCK SERVICE
          </h1>
          <p className="text-center">
            CONTACT YOUR DEDICATED RESTAURANT ADVISOR FOR ANY OF YOUR NEEDS AND
            ENJOY A 24/7 DEDICATED CHEETAH+ CUSTOMER SERVICE HOTLINE FOR
            ANYTHING YOU NEED.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
