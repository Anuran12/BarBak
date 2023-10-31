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
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover px-[120px]">
          <div className="flex items-center pt-24">
          <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#fff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>
            <span className="text-white text-[24px]">Back</span>
          </div>
        <div className="flex flex-row w-full">
          <div className="w-1/2 flex flex-col justify-center items-center">
              <div className="w-1/2">
                <Image src={DishImg} />
              </div>
              <span className="text-gray-50/60 text-[14px]">Category / Sub Category</span>
              <h1 className="text-[40px] text-[#F7BC06]">Product Name</h1>
              <span className="text-gray-50/60 text-[14px]">Brand</span>
              <div className="text-white w-3/4 mt-6">
                <h1 className="text-[25px] text-[#F7BC06]">Details</h1>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between flex-row">
                    <span>Case items</span><span>8/8 ct</span>
                  </div>
                  <div className="w-full flex justify-between flex-row">
                    <span>Case weight</span><span>avg 9.5 lb</span>
                  </div>
                  <div className="w-full flex justify-between flex-row">
                    <span>Case dimensions</span><span>L 19.06" W 14.75" H 3.44"</span>
                  </div>
                  <div className="w-full flex justify-between flex-row">
                    <span>SKU</span><span>124880</span>
                  </div>
                  <div className="w-full flex justify-between flex-row">
                    <span>UPC</span><span>124880</span>
                  </div>
                </div>
              </div>
              <p className="text-white w-3/4 mt-10">Product information or packaging displayed may not be current or complete. *Actual weight may vary based on seasonality and other factors.</p>
          </div>
          <div className="w-1/2 flex flex-col">

            <div className="mt-10 w-[90%] flex flex-row justify-between gap-4 items-center">
              <div className="flex w-fit bg-[#F7BC06] rounded-full py-2 px-6 flex-row items-center">
                <h1 className="text-[40px] font-bold">$14</h1>
                
              </div>
              <div className="custom-number-input w-full ">
                <div className="flex flex-row justify-between">
                  <label for="countries" class="block mb-2 text-sm font-mediu text-white !text-[24px] font-bold">Case</label>
                  <div>
                    <span className=" text-[#F7BC06]">
                      $35.60
                    </span>
                    <span className="bg-gray-300 px-2 rounded-full py-[2px] text-[14px] ml-2">
                    $4.45/lb
                    </span>
                  </div>
                </div>
                <select id="countries" class="bg-gray-50 size border overflow-y-scroll border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onfocus='this.size=3;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
                  <option selected><div className=""><span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="2"><div className=""><span>2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$71.2</span></div></option>
                  <option value="3"><div className=""><span>3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="4"><div className=""><span>4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="5"><div className=""><span>5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="6"><div className=""><span>6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="7"><div className=""><span>7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="8"><div className=""><span>8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="9"><div className=""><span>9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="10"><div className=""><span>10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  
                </select>
              </div>
              <div className="custom-number-input w-full ">
                <div className="flex flex-row justify-between">
                  <label for="countries" class="block mb-2 text-sm font-mediu text-white !text-[24px] font-bold">Unit</label>
                  <div>
                    <span className=" text-[#F7BC06]">
                      $5.95
                    </span>
                    <span className="bg-gray-300 px-2 rounded-full py-[2px] text-[14px] ml-2">
                    $5.95/lb
                    </span>
                  </div>
                </div>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected><div className=""><span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="2"><div className=""><span>2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$71.2</span></div></option>
                  <option value="3"><div className=""><span>3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="4"><div className=""><span>4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="5"><div className=""><span>5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="6"><div className=""><span>6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="7"><div className=""><span>7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="8"><div className=""><span>8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="9"><div className=""><span>9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  <option value="10"><div className=""><span>10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$35.60</span></div></option>
                  
                </select>
              </div>
              
              
              
            </div>
            <div className="flex flex-row items-center gap-5 mt-6">
              <button className=" bg-[#F7BC06] w-1/2  px-6 rounded-full py-2 text-[24px] font-bold">
                Add to cart
              </button>
              <div className=" flex flex-col justify-center">
                <div className="bg-gray-200/50 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" fill-black" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                      <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
                  </svg>
                </div>
                  <span className="text-white text-center">Save</span>
              </div>
              <div>
                <div className="bg-gray-200/50 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
                  </svg>
                </div>
                  <span className="text-white text-center">Share</span>
              </div>
            </div>
            <p className="text-white">Order today, receive as early as tomorrow</p>
            <div className="w-[90%] mt-10 bg-white/20 rounded-3xl p-8 flex flex-col">
              <div className="flex flex-row justify-between">
                <h1 className="text-[#F7BC06] text-[20px]">Related items</h1>
                <div className="flex flex-row">
                  <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#fff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>
                  <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#fff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-6 gap-4">
              <Link href={'/Item'}>
                            <div className=" bg-black rounded-2xl group hover:inner-border-2 hover:inner-border-white p-6 pt-1 pr-1">
                                <div className="w-full flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className=" fill-[#f9fafb99] hover:fill-white" width="40" height="40" viewBox="0 0 30 30">
                                        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
                                    </svg>
                                </div>
                                <div className="pr-5">
                                    <Image src={DishImg} alt="dish 1" />
                                </div>
                                <h1 className=" text-gray-50/60 text-[20px] mb-3 pr-5">
                                    Test Food 1
                                </h1>
                                <p className="text-gray-50/60 text-[14px] mb-2 pr-5">
                                    1 pc
                                </p>
                                <div className=" w-full flex justify-center h-fit pr-5">
                                    <a
                                        className="bg-[url('../img/btn_border_white.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-white text-center w-full"
                                        href={"/"}
                                    >
                                    <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>

                                        $14
                                    </a>
                                </div>
                            </div>
                        </Link>
                        <Link href={'/Item'}>
                            <div className=" bg-black rounded-2xl group hover:inner-border-2 hover:inner-border-white p-6 pt-1 pr-1">
                                <div className="w-full flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className=" fill-[#f9fafb99] hover:fill-white" width="40" height="40" viewBox="0 0 30 30">
                                        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
                                    </svg>
                                </div>
                                <div className="pr-5">
                                    <Image src={DishImg} alt="dish 1" />
                                </div>
                                <h1 className=" text-gray-50/60 text-[20px] mb-3 pr-5">
                                    Test Food 1
                                </h1>
                                <p className="text-gray-50/60 text-[14px] mb-2 pr-5">
                                    1 pc
                                </p>
                                <div className=" w-full flex justify-center h-fit pr-5">
                                    <a
                                        className="bg-[url('../img/btn_border_white.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-white text-center w-full"
                                        href={"/"}
                                    >
                                    <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>

                                        $14
                                    </a>
                                </div>
                            </div>
                        </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

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
