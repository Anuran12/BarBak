import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import CalendarImg from "../img/calendar.png";
import ClockImg from "../img/clock.png";
import DeliveryImg from "../img/delivery1.png";
import CuriousImg from "../img/Curious.png";
import SupportImg from "../img/support.png";
import CoinBG1 from "../img/coin.png";
import CoinBG2 from "../img/note.png";

export default function Barbakplus() {
  return (
    <div>
      <Header />
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ">
        <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain">
          <div className="lg:h-[80vh] h-[50vh] flex flex-col justify-center items-center">
            <h1 className="text-[#F7BC06] lg:text-[200px] md:text-[100px] text-[70px] mt-20 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              BARBAK+
            </h1>
            <p className="text-white text-[24px] mt-8 w-1/2 text-center">
              Exclusive Membership Benefits
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center lg:px-[120px] px-[20px] mt-20">
        <h1 className="lg:text-[40px] md:text-[35px] text-[25px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          CREDITS THAT ROCK
        </h1>
        <p className="text-center">
          AS A BARBAK+ MEMBER, YOU HAVE THE OPPORTUNITY TO EARN CREDITS BASED ON
          YOUR MONTHLY PURCHASE VOLUME:
        </p>
        <div className=" absolute left-0 md:w-[250px] w-[130px] md:-mt-96 md:ml-10 -mt-[480px] h-auto">
          <Image src={CoinBG2} className=" scale-75" />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-16">
          <div className="shadow hover:shadow-2xl md:p-6 p-2 flex flex-col justify-between items-center group">
            <h1 className=" font-bold md:text-[30px] text-[20px] text-center group-hover:text-[#F7BC06] w-full">
              1% credit
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              Spend $0 &#8211; $9,999 for 1% credit
            </p>
          </div>
          <div className="shadow hover:shadow-2xl md:p-6 p-2 flex flex-col justify-between items-center group">
            <h1 className=" font-bold md:text-[30px] text-[20px] text-center group-hover:text-[#F7BC06] w-full">
              2% credit
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              Spend $10,000 &#8211; $19,999 for 2% credit
            </p>
          </div>
          <div className="shadow hover:shadow-2xl md:p-6 p-2 flex flex-col justify-between items-center group">
            <h1 className=" font-bold md:text-[30px] text-[20px] text-center group-hover:text-[#F7BC06] w-full">
              3% credit
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              Spend $20,000+ for 3% credit
            </p>
          </div>
        </div>
      </div>

      <div className=" absolute right-0 md:w-[250px] w-[130px] md:-mt-20 md:mr-20 h-auto">
        <Image src={CoinBG1} className=" scale-50" />
      </div>
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover text-white flex flex-row justify-center items-center mt-32">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain flex text-white md:flex-row flex-col justify-center items-center lg:px-[120px] px-[20px] pb-10 md:pb-0">
            <div className="md:w-1/4">
              <Image src={CalendarImg} className=" " />
            </div>
            <div className="md:w-1/2">
              <h1 className="lg:text-[40px] md:text-[35px] text-[25px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
                GUARANTEED DELIVERY <br /> DAY OPTIONS
              </h1>
              <p className="text-center">
                ENJOY THE CONVENIENCE OF UP TO 7 DELIVERY DAYS PER WEEK BASED
                UPON YOUR GEOGRAPHY - ALLOWING YOU TO RESTOCK YOUR INVENTORY
                MORE FREQUENTLY AND DEPENDABLY.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col justify-center items-center lg:px-[120px] px-[20px] pt-10 md:pt-0">
        <div className="md:w-1/2">
          <h1 className="lg:text-[40px] md:text-[35px] text-[25px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            PRIORITY DELIVERY WINDOWS
          </h1>
          <p className="text-center">
            BARBAK+ MEMBERS CAN CHOOSE SPECIFIC TIME WINDOWS THAT BEST SUIT YOUR
            SCHEDULE, ALLOWING YOU TO TAKE ADVANTAGE OF YOUR DAY AS YOU SEE FIT.{" "}
          </p>
        </div>
        <div className="md:w-1/4">
          <Image src={ClockImg} className="" />
        </div>
      </div>
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain flex text-white md:flex-row flex-col justify-center items-center lg:px-[120px] px-[20px] pb-10 md:pb-0">
            <div className="md:w-1/4">
              <Image src={DeliveryImg} className="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="lg:text-[40px] md:text-[35px] text-[25px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
                LOWER DELIVERY MINIMUMS
              </h1>
              <p className="text-center">
                FREE DELIVERY FOR ORDERS OVER $500. THIS ALLOWS YOU TO MANAGE
                YOUR INVENTORY MORE EFFICIENTLY WITHOUT THE PRESSURE OF MEETING
                HIGHER MINIMUM THRESHOLDS.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col justify-center items-center lg:px-[120px] px-[20px] pt-10 md:pt-0">
        <div className="md:w-1/2">
          <h1 className="lg:text-[40px] md:text-[35px] text-[25px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            EMERGENCY AFTER ORDER CUT-OFF
          </h1>
          <p className="text-center">
            RECEIVE EMERGENCY HELP IF YOU MISSED YOUR CUTOFF.{" "}
          </p>
        </div>
        <div className="md:w-1/4">
          <Image src={CuriousImg} className="" />
        </div>
      </div>
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain flex text-white md:flex-row flex-col justify-center items-center lg:px-[120px] px-[20px] pb-10 md:pb-0">
            <div className="md:w-1/4">
              <Image src={SupportImg} className="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="lg:text-[40px] md:text-[35px] text-[25px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
                DEDICATED AROUND-THE-CLOCK SERVICE
              </h1>
              <p className="text-center">
                CONTACT YOUR DEDICATED RESTAURANT ADVISOR FOR ANY OF YOUR NEEDS
                AND ENJOY A 24/7 DEDICATED CHEETAH+ CUSTOMER SERVICE HOTLINE FOR
                ANYTHING YOU NEED.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:px-[120px] px-[20px] my-16 pt-10 md:pt-0">
        <h1 className="ld:text-[30px] md:text-[20px] text-[18px] font-semibold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          Join thousands of foodservice operators who get all BarBak+ benefits
          and single-handedly earn back the membership cost when they restock
          their inventory with BARBAK.
        </h1>
        <a
          className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-5 mt-5 text-black w-full text-center"
          href={"/"}
        >
          {/* <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-64 absolute -z-10 -mt-4"></div> */}
          ENROLL IN BARBAK+
        </a>
      </div>
      <Footer />
    </div>
  );
}
