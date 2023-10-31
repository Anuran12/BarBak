import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import DishImg from "../img/dish.png";
import { useState } from "react";
import Link from "next/link";


export default function Item() {
  
  
  return (
    <div>
      <Header />
      

      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-slate-50/60 bg-center bg-cover ] pt-16 px-[120px]">
        
          <h1 className="text-white text-[40px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            We recommend you try it
          </h1>
          <div className="mt-8 pb-32 grid grid-cols-5 gap-10">
            <div className="">
              <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">
                Test Food 1
              </h1>
              <Image src={DishImg} alt="dish 1" />
              <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                $16 / 1 pc
              </p>
              <a
                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                href={"/"}
              >
                $14
              </a>
            </div>
            <div className="">
              <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">
                Test Food 1
              </h1>
              <Image src={DishImg} alt="dish 1" />
              <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                $16 / 1 pc
              </p>
              <a
                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                href={"/"}
              >
                $14
              </a>
            </div>
            <div className="">
              <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">
                Test Food 1
              </h1>
              <Image src={DishImg} alt="dish 1" />
              <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                $16 / 1 pc
              </p>
              <a
                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                href={"/"}
              >
                $14
              </a>
            </div>
            <div className="">
              <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">
                Test Food 1
              </h1>
              <Image src={DishImg} alt="dish 1" />
              <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                $16 / 1 pc
              </p>
              <a
                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                href={"/"}
              >
                $14
              </a>
            </div>
            <div className="">
              <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">
                Test Food 1
              </h1>
              <Image src={DishImg} alt="dish 1" />
              <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                $16 / 1 pc
              </p>
              <a
                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                href={"/"}
              >
                $14
              </a>
            </div>
          
        </div>
      </div>
    </div>
  );
}
