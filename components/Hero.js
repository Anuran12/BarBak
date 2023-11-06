import Image from "next/legacy/image";
import HeroBg from "../img/hero_bg.png";
import HeroImg1 from "../img/hero/hero1.png";
import Link from "next/link";
import gsap from "gsap";
import HeroCircle from "./HeroCircle";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.from('.word', {
      y: 100,
      stagger: {
        each: 0.05
      }
    })
  }, [])
  return (
    <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh]">
      <div className="bg-[url('../img/hero_bottom.png')] bg-no-repeat bg-bottom bg-contain h-[100.2vh] px-[120px]">
        <div className="absolute !top-[350px] !left-[200px]">
          <Image
            src={HeroBg}
            alt="hero bg"
            width={700}
            height={250}
          />
        </div>
        <div className="h-[80vh] flex flex-col justify-center">
          <div className="text-white text-[65px] flex overflow-hidden leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
            {
              'A Partner You can Count On'.split('').map((word) => {
                return word === ' ' ? <span className="word flex">&nbsp;</span> : <span className="word flex">{word}</span>
              })
            }
          </div>
          <div className="text-white text-[65px] flex overflow-hidden leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
            {
              'Transparent Pricing'.split('').map((word) => {
                return word === ' ' ? <span className="word flex">&nbsp;</span> : <span className="word flex">{word}</span>
              })
            }
          </div>
          <p className="text-white text-[24px] mt-8 w-1/2">
            Order 10,000+ products, with same-day & next day delivery straight
            into your kitchen
          </p>
          <a
            className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 mt-10 text-white w-fit z-50"
            href={"/"}
          >
            Order Delivery
          </a>
        </div>
      </div>
      <div className=" absolute right-0 top-5 h-[120vh] w-[100vh] overflow-hidden">
        {/* <div className="h-[90vh] w-[90vh] absolute !top-28 !-right-[30vh] hero_circle"></div> */}
        <div className="absolute !top-[50px] !right-[40px]">
          <HeroCircle />
        </div>
      </div>
    </div>
  );
}
