import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../../img/hero_bg.png";
import HeroImg1 from "../../img/hero/hero1.png";
import ProcessImg from "../../img/FoodDelivery/Process.png";
import DishImg from "../../img/dish.png";
import CourierImg1 from "../../img/FoodDelivery/Item3.png";
import CourierImg2 from "../../img/FoodDelivery/Item1.png";
import CourierImg3 from "../../img/FoodDelivery/Item4.png";
import CourierImg4 from "../../img/FoodDelivery/Item2.png";
import HeroCircle from "@/components/HeroCircle";

export default function FoodDelivery() {
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
            <h1 className="text-white text-[65px] leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              A Partner You can Count On <br />
              <span className="text-[#F7BC06]">Transparent</span> Pricing
            </h1>
            <p className="text-white text-[24px] mt-8 w-1/2">
              Order 10,000+ products, with same-day & next day delivery straight
              into your kitchen
            </p>
            <a
              className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 mt-10 text-white w-fit"
              href={"/"}
            >
              BROWSE CATALOG
            </a>
          </div>
        </div>
        <div className=" absolute right-0 top-0 h-[120vh] w-[100vh] overflow-hidden">
          <div className="h-[90vh] w-[90vh] absolute !top-28 !-right-[30vh] hero_circle"></div>
          <div className="absolute !top-[50px] !right-[40px]">
            <HeroCircle />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full flex px-[100px]">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-full h-28"></div>
          <Image src={ProcessImg} className="mt-10" />
        </div>
        <div className="w-1/2">
          <div className="bg-[url('../img/NoticeBG.png')]  bg-no-repeat bg-center bg-contain w-full h-[80vh] flex justify-center items-center px-20">
            <p className="text-black !text-[20px] mt-16">
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

      <div className="bg-[url('../img/wood.jpg')] bg-no-repeat bg-center bg-cover ] mt-20">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] flex flex-row justify-between bg-no-repeat bg-bottom bg-contain px-[30px]">
            <div className="w-1/3 flex flex-col justify-evenly">
              <h1 className="text-white text-[28px] ml-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                Delivering quality
                <span className="text-[#F7BC06]"> food</span>
                <br /> to your door.
              </h1>
              <Image src={CourierImg1} className=" scale-100" />
              <h1 className="text-white text-[28px] ml-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                Save <span className="text-[#F7BC06]">time</span> and{" "}
                <span className="text-[#F7BC06]">money</span> <br /> with our
                service.
              </h1>
            </div>
            <div className="w-1/3 flex flex-col justify-evenly">
              <Image src={CourierImg3} className=" scale-100" />
              <h1 className="text-white text-[28px] mr-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                <span className="text-[#F7BC06]">Fast</span>,{" "}
                <span className="text-[#F7BC06]">Safe</span>, and
                <span className="text-[#F7BC06]"> Free</span>
                <br /> Delivery
              </h1>
              <Image src={CourierImg4} className=" scale-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center -mt-[1000px]">
        <Image src={CourierImg2} className="scale-75" />
      </div>

      <div className=" -mt-48 px-[120px]">
        <h1 className="text-black text-[40px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          Monthly Specials
        </h1>
        <div className="mt-16 pb-32 grid grid-cols-5 gap-10">
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <a
              className=" ml-10 bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-black w-fit"
              href={"/"}
            >
              $14
            </a>
          </div>
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <a
              className=" ml-10 bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-black w-fit"
              href={"/"}
            >
              $14
            </a>
          </div>
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <a
              className=" ml-10 bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-black w-fit"
              href={"/"}
            >
              $14
            </a>
          </div>
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <a
              className=" ml-10 bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-black w-fit"
              href={"/"}
            >
              $14
            </a>
          </div>
          <div className="">
            <h1 className=" text-gray-900/60 text-[20px] pl-6 mb-8">
              Test Food 1
            </h1>
            <Image src={DishImg} alt="dish 1" />
            <p className="text-gray-900/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
            <a
              className=" ml-10 bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-black w-fit"
              href={"/"}
            >
              $14
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
