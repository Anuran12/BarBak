import Image from 'next/legacy/image';
import HeroBg from "../img/hero_bg.png";


export default function AboutHero(){
    return(
        <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh] px-[120px]">
          <div className="absolute !top-16 !left-0 m-auto w-full h-full flex justify-center items-center">
            <Image
              src={HeroBg}
              alt="hero bg"
              width={700}
              height={250}
              style={{ opacity: "0.2" }}
            />
          </div>
          <div className=" w-1/3 pt-12">
          <h1 className="text-[#F7BC06] text-[48px]">About us</h1>
          <p className="text-white text-[16px]">BarBak Hospitality, established in 2019 in Charlotte, NC, has its roots firmly planted in wholesale third-party delivery. We've always collaborated with top-tier wholesale providers to supply your business with the necessary products for success, all while keeping your costs at a minimum.<br/><be/><br/>

            Despite the global pandemic, we broadened our horizons to Charleston, SC in November 2020. Since 2021, we've been privileged to extend our services during these challenging times, covering areas from Key West to Baltimore, Maryland.<br/><be/><br/>

            In addition to this, BarBak Hospitality offers expert logistics services for hospitality businesses and government sectors that prioritize reliability, punctuality, and high customer satisfaction.<br/><be/><br/>

            Over the years, we've catered to a variety of businesses. Whether it's delivering to your local daycare, during your daily commute or supplying goods to the local military base for our service members, you're likely to spot us in action!
            </p>
          </div>
        </div>


    )
}