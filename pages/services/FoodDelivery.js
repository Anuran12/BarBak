import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../../img/hero_bg.png";
import ProcessImg from "../../img/FoodDelivery/Process.png";
import DishImg from "../../img/dish.png";
import CourierImg1 from "../../img/FoodDelivery/Item11.png";
import CourierImg2 from "../../img/FoodDelivery/Item8.png";
import CourierImg3 from "../../img/FoodDelivery/Item13.png";
import CourierImg4 from "../../img/FoodDelivery/Item12.png";
import HeroCircle from "@/components/HeroCircle";
import BGImg1 from "../../img/BG_Images/tomato.png";
import BGImg2 from "../../img/BG_Images/tomato1.png";
import FoodBG1 from "../../img/BG_Images/food1.png";
import FoodBG2 from "../../img/BG_Images/food2.png";
import DotBG from "../../img/BG_Images/dot2.png";
import HeroCircleMobile from "@/components/HeroCircleMobile";
import HeroCircleTab from "@/components/HeroCircleTab";
import HeroImg1 from "../../img/FoodDelivery/item16.png";
import HeroImg2 from "../../img/FoodDelivery/item15.png";
import HeroImg3 from "../../img/FoodDelivery/item14.png";

export default function FoodDelivery() {
  return (
    <div>
      <Header />
      {/* Hero Section */}

      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover lg:h-[100vh] nust:h-[100vh]">
        <div className="bg-[url('../img/hero_bottom.png')] bg-no-repeat bg-bottom bg-contain lg:h-[100.2vh] nust:h-[100.2vh] lg:px-[120px] px-[20px]">
          <div className="absolute lg:!top-[350px] top-[350px] lg:!left-[200px]">
            <Image src={HeroBg} alt="hero bg" width={700} height={250} />
          </div>
          <div className="h-[80vh] flex flex-col lg:justify-center md:justify-start justify-center md:pt-28">
            <h1 className="text-white lg:text-[65px] md:text-[50px] text-[25px] leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              A Partner You can Count On <br />
              <span className="text-[#F7BC06]">Transparent</span> Pricing
            </h1>
            <p className="text-white md:text-[24px] text-[18px] mt-8 w-1/2">
              Order 10,000+ products, with same-day & next day delivery straight
              into your kitchen
            </p>
            <a
              className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 mt-10 text-white w-fit z-50"
              href={"/Catalog"}
            >
              BROWSE CATALOG
            </a>
          </div>
        </div>
        <div className=" absolute right-0 top-5 h-[120vh] w-full overflow-hidden">
          {/* <div className="h-[90vh] w-[90vh] absolute !top-28 !-right-[30vh] hero_circle"></div> */}
          <div className="absolute !top-[50px] !right-[40px] hidden lg:block">
            <HeroCircle 
            images={[
              "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fitem16.86cab1e6.png&w=1920&q=75",
              "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.00236b01.png&w=1920&q=75",
              "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fitem15.28b056d1.png&w=1920&q=75",
              "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fitem14.640ce742.png&w=1920&q=75"
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

      <div className=" absolute lg:w-[230px] w-[100px] lg:ml-16 ml-4 lg:-mt-20 -mt-10 h-auto">
        <Image src={BGImg1} className="" />
      </div>
      <div className=" absolute lg:w-[250px] w-[100px] lg:ml-60 ml-24 lg:-mt-24 -mt-14 h-auto">
        <Image src={BGImg2} className="" />
      </div>

      {/* Hero Section */}
      <div className="w-full flex lg:flex-row flex-col lg:px-[100px] px-[20px]">
        <div className="lg:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full h-28"></div>
          <Image src={ProcessImg} className="mt-10" />
        </div>
        <div className="lg:w-1/2">
          <div className="bg-[url('../img/NoticeBG.png')]  bg-no-repeat bg-center bg-contain w-full lg:h-[80vh] md:h-[90vh] h-[40vh] nust:h-[80vh] leading-5 md:leading-relaxed lg:leading-relaxed flex justify-center items-center lg:px-20 xl:px-28 2xl:px-40 md:px-32 px-10 nust:px-72">
            <p className="text-black lg:text-[20px] written font-bold 2xl:text-[30px] md:text-[24px] text-[14px] lg:mt-16 mt-10">
              Do you really like pushing that cart at 6:00 AM? Seriously?! Do
              you really like that rep who keeps changing prices on you? We
              don&#39;t believe it. We give you hours of your precious life
              back, with full price transparency, by supplying everything you
              need to run your business from our fulfillment centers to your
              shelves and fridges.
            </p>
          </div>
        </div>
      </div>

      <div className=" absolute right-0 w-[250px] -mt-8 mr-28 h-auto">
        <Image src={FoodBG1} className="" />
      </div>

      <div className="bg-[url('../img/wood.jpg')] bg-no-repeat bg-center bg-cover ] mt-20">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] flex flex-row justify-between bg-no-repeat bg-bottom bg-contain lg:px-[30px]">
            <div className="w-1/3 flex flex-col justify-evenly">
              <h1 className="text-white md:text-[28px] text-[16px] md:ml-28 ml-5 mt-10 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                Delivering quality
                <span className="text-[#F7BC06]"> food</span>
                <br /> to your door.
              </h1>
              <Image src={CourierImg1} className=" scale-75" />
              <h1 className="text-white md:text-[28px] text-[16px] md:ml-28 ml-5 mb-10 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                Save <span className="text-[#F7BC06]">time</span> and{" "}
                <span className="text-[#F7BC06]">money</span> <br /> with our
                service.
              </h1>
            </div>
            <div className="w-1/3 flex flex-col justify-evenly">
              <Image src={CourierImg3} className=" scale-75" />
              <h1 className="text-white md:text-[28px] text-[16px] md:ml-20 mb-7 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                <span className="text-[#F7BC06]">Fast</span>,{" "}
                <span className="text-[#F7BC06]">Safe</span>, and
                <span className="text-[#F7BC06]"> Free</span>
                <br /> Delivery
              </h1>
              <Image src={CourierImg4} className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center md:-mt-[600px] -mt-[250px]">
        <div className="w-[35%] flex justify-center">
          <Image src={CourierImg2} className=" " />
        </div>
      </div>

      <div className=" absolute right-0 lg:w-[250px] w-[200px] lg:mr-28 mr-0 lg:-mt-0 -mt-8 -rotate-180 h-auto">
        <Image src={FoodBG2} className="" />
      </div>

      <div className=" lg:mt-28 mt-10 px-[20px]  lg:px-[120px]">
        <h1 className="text-black text-[40px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          Monthly Specials
        </h1>
        <div className="mt-16 pb-32 grid grid-cols-2 md:grid-cols-3 md:px-10 lg:px-0 lg:grid-cols-5 gap-10">
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] lg:pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <div className=" w-full flex justify-center h-fit pr-5">
              <div
                className="bg-[url('../img/btn-border_black.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-black text-center w-full"
                href={"/"}
              >
                <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>
                $14
              </div>
            </div>
          </div>
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] lg:pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <div className=" w-full flex justify-center h-fit pr-5">
              <div
                className="bg-[url('../img/btn-border_black.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-black text-center w-full"
                href={"/"}
              >
                <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>
                $14
              </div>
            </div>
          </div>
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] lg:pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <div className=" w-full flex justify-center h-fit pr-5">
              <div
                className="bg-[url('../img/btn-border_black.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-black text-center w-full"
                href={"/"}
              >
                <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>
                $14
              </div>
            </div>
          </div>
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] lg:pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <div className=" w-full flex justify-center h-fit pr-5">
              <div
                className="bg-[url('../img/btn-border_black.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-black text-center w-full"
                href={"/"}
              >
                <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>
                $14
              </div>
            </div>
          </div>
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] lg:pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <div className=" w-full flex justify-center h-fit pr-5">
              <div
                className="bg-[url('../img/btn-border_black.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-black text-center w-full"
                href={"/"}
              >
                <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>
                $14
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute  w-[30px] lg:-mt-10 -mt-8 ml-72 lg:mr-64 h-auto">
          <Image src={DotBG} className="" />
        </div>
        <div className=" absolute  w-[20px] lg:-mt-32 -mt-24 ml-56 lg:-ml-16 h-auto">
          <Image src={DotBG} className="" />
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
