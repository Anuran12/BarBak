import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import HeroBg from "../../img/hero_bg.png";
import HeroImg1 from "../../img/Alcohol Delivery/Item1.png";

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
              style={{ opacity: "0.2" }}
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
              className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 mt-10 text-white w-fit"
              href={"/"}
            >
              SCHEDULE BARBAK
            </a>
          </div>
        </div>
        <div className=" absolute right-0 top-[100px] h-[120vh] w-[100vh] overflow-hidden">
          <div className="h-[90vh] w-[90vh] absolute !top-5 !-right-[30vh] hero_circle"></div>
          <div className="absolute scale-[.6] rotate-12 !top-[50px] !right-[40px]">
            <Image src={HeroImg1} alt="hero image" width={708} height={737} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div>Alcohol Delivery</div>
      <Footer />
    </div>
  );
}
