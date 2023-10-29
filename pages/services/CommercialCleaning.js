import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../../img/hero_bg.png";
import WaterImg from "../../img/water.png";
import HeroImg1 from "../../img/CommercialCleaning/Item1.png";
import CourierImg1 from "../../img/CommercialCleaning/Item6.png";
import CourierImg2 from "../../img/CommercialCleaning/Item9.png";
import CourierImg3 from "../../img/CommercialCleaning/Item8.png";
import CourierImg4 from "../../img/CommercialCleaning/Item7.png";
import HeroCircle from "@/components/HeroCircle";

export default function CommercialCleaning() {
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
              Do you need a reliable <br />
              <span className="text-[#F7BC06]">Cleaning</span> service?
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
        <div className=" absolute right-0 top-0 h-[120vh] w-[100vh] overflow-hidden">
          <div className="h-[90vh] w-[90vh] absolute !top-28 !-right-[30vh] hero_circle"></div>
            <div className="absolute !top-[50px] !right-[40px]">
              <HeroCircle />
            </div>
      </div>
      </div>

      {/* Hero Section */}
      <div className=" absolute h-[600px] w-full flex -z-50">
        <Image src={WaterImg} width={1000} height={500} className=" !mb-48" />
        <div className="h-2 w-1/4"></div>
        <Image src={WaterImg} width={1000} height={500} className="!mt-48 " />
      </div>
      <div className=" w-full text-center px-[300px] pt-28">
        <h1 className="text-[#F7BC06] text-[48px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          Our Story
        </h1>
        <p className="text-black pt-10 text-[20px]">
          Since 2019, our mission has remained the same—Save you time supplying
          everything your Buisness needs and provide unparalleled service. It
          was only natural for us to expand into the commercial commercial
          cleaning market. From the smallest and easiest job to the most
          strenuous, we make sure that we&#39;re not finished until the
          satisfaction of our customers is met.We aim to finish each project in
          a timely-manner and with the highest level of quality. With a focus on
          personalized service, competitive rates and customer satisfaction,
          we&#39;re always striving to meet and exceed industry expectations.
        </p>
      </div>

      <div className="bg-[url('../img/wood.jpg')] bg-no-repeat bg-center bg-cover ] mt-52">
        <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
          <div className="bg-[url('../img/patternDown.png')] flex flex-row justify-between bg-no-repeat bg-bottom bg-contain px-[30px]">
            <div className="w-1/3 flex flex-col justify-evenly">
              <h1 className="text-white text-[28px] ml-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                Shine Bright with Our <br />
                <span className="text-[#F7BC06]">Cleaning</span>Services.
              </h1>
              <Image src={CourierImg1} className=" scale-75" />
              <h1 className="text-white text-[28px] ml-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                Cleaning for a <span className="text-[#F7BC06]">Healthier</span>
                , <br />
                <span className="text-[#F7BC06]">Happier </span>Workplace.
              </h1>
            </div>
            <div className="w-1/3 flex flex-col justify-evenly">
              <Image src={CourierImg3} className=" scale-100" />
              <h1 className="text-white text-[28px] mr-28 font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
                <span className="text-[#F7BC06]">Reliable</span>,{" "}
                <span className="text-[#F7BC06]">Responsible</span>, <br />
                <span className="text-[#F7BC06]">Remarkably</span> Clean.
              </h1>
              <Image src={CourierImg4} className=" scale-75" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center -mt-[1150px] scale-90">
        <Image src={CourierImg2} />
      </div>

      <div className=" flex flex-col justify-center items-center px-[120px] mt-20">
        <h1 className="text-[40px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          Our Service <span className="text-[#F7BC06]">Areas</span>
        </h1>
        <div className="grid grid-cols-4 gap-5 mt-16">
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-between items-center group">
            <h1 className=" font-[540] text-[18px] text-center group-hover:text-[#F7BC06] w-full">
              Restaurants
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>

            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              Our services are Daily &#45; Weekly &#45; Monthly &#45; You decide
              how often you need us! After working in the Hospitality industry
              for years, we were able to come up with a concept that makes the
              customer happy.
            </p>
            <a
              className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-full text-center"
              href={"/"}
            >
              {/* <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-64 absolute -z-10 -mt-4"></div> */}
              BOOK NOW
            </a>
          </div>
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-between items-center group">
            <h1 className=" font-[540] text-[18px] text-center group-hover:text-[#F7BC06] w-full">
              Bars
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              Our services are Daily &#45; Weekly &#45; Monthly &#45; You decide
              how often you need us! After working in the Hospitality industry
              for years, we were able to come up with a concept that makes the
              customer happy.
            </p>
            <a
              className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-full text-center"
              href={"/"}
            >
              {/* <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-64 absolute -z-10 -mt-4"></div> */}
              BOOK NOW
            </a>
          </div>
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-between items-center group">
            <h1 className=" font-[540] text-[18px] text-center group-hover:text-[#F7BC06] w-full">
              Medical
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              We know how critical it is to maintain a clean, safe and healthy
              environment of care for both patients and staff members.
              That&#39;s why we take a thorough approach to deliver the highest
              standards of clean every time we enter a facility.
            </p>
            <a
              className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-full text-center"
              href={"/"}
            >
              {/* <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-64 absolute -z-10 -mt-4"></div> */}
              BOOK NOW
            </a>
          </div>
          <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-between items-center group">
            <h1 className=" font-[540] text-[18px] text-center group-hover:text-[#F7BC06] w-full">
              Office
              <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
            </h1>
            <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
              From medical offices to shared office spaces, we have the proper
              tools and expertise to provide consistent results that address
              your specific needs.
            </p>
            <a
              className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-full text-center"
              href={"/"}
            >
              {/* <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-64 absolute -z-10 -mt-4"></div> */}
              BOOK NOW
            </a>
          </div>
        </div>
      </div>

      <div className="mb-[100px] w-full h-1"></div>
      <Footer />
    </div>
  );
}
