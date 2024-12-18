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
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover lg:px-[120px]">
        <Link href={"/Catalog"}>
          <div className=" absolute flex items-center pt-24 group">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
              fill="#fff"
              class="icon group-hover:fill-[#F7BC06]"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                fill=""
              />
            </svg>
            <span className="text-white group-hover:text-[#F7BC06] text-[24px]">
              Back
            </span>
          </div>
        </Link>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:pt-20 pt-32">
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            <div className="w-1/2">
              <Image src={DishImg} />
            </div>
            <span className="text-gray-50/60 text-[14px]">
              Category / Sub Category
            </span>
            <h1 className="text-[40px] text-[#F7BC06]">Product Name</h1>
            <span className="text-gray-50/60 text-[14px]">Brand</span>
            <div className="text-white w-3/4 mt-6">
              <h1 className="text-[25px] text-[#F7BC06]">Details</h1>
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between flex-row">
                  <span>Case items</span>
                  <span>8/8 ct</span>
                </div>
                <div className="w-full flex justify-between flex-row">
                  <span>Case weight</span>
                  <span>avg 9.5 lb</span>
                </div>
                <div className="w-full flex justify-between flex-row">
                  <span>Case dimensions</span>
                  <span>L 19.06&rdquo; W 14.75&rdquo; H 3.44&rdquo;</span>
                </div>
                <div className="w-full flex justify-between flex-row">
                  <span>SKU</span>
                  <span>124880</span>
                </div>
                <div className="w-full flex justify-between flex-row">
                  <span>UPC</span>
                  <span>124880</span>
                </div>
              </div>
            </div>
            <p className="text-white w-3/4 mt-10">
              Product information or packaging displayed may not be current or
              complete. *Actual weight may vary based on seasonality and other
              factors.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <div className="mt-10 w-[90%] flex lg:flex-row flex-col justify-between gap-4 items-center">
              <div className="flex w-fit bg-[#F7BC06] rounded-full py-2 px-6 flex-row items-center">
                <h1 className="text-[40px] font-bold">$14</h1>
              </div>
              <div className="custom-number-input w-1/2 ">
                <div className="flex flex-row justify-between">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-mediu text-white !text-[24px] font-bold"
                  >
                    Case
                  </label>
                  <div>
                    <span className=" text-[#F7BC06]">$35.60</span>
                    <span className="bg-gray-300 px-2 rounded-full py-[2px] text-[14px] ml-2">
                      $4.45/lb
                    </span>
                  </div>
                </div>
                <select
                  id="countries"
                  class="bg-gray-50 size border overflow-y-scroll border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7BC06] focus:border-[#F7BC06] block w-full p-2.5"
                >
                  <option selected>
                    1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="2">
                    2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$71.2
                  </option>
                  <option value="3">
                    3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="4">
                    4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="5">
                    5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="6">
                    6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="7">
                    7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="8">
                    8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="9">
                    9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="10">
                    10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                </select>
              </div>
              <div className="custom-number-input w-1/2 ">
                <div className="flex flex-row justify-between">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-mediu text-white !text-[24px] font-bold"
                  >
                    Unit
                  </label>
                  <div>
                    <span className=" text-[#F7BC06]">$5.95</span>
                    <span className="bg-gray-300 px-2 rounded-full py-[2px] text-[14px] ml-2">
                      $5.95/lb
                    </span>
                  </div>
                </div>
                <select
                  id="countries"
                  class="bg-gray-50 size border overflow-y-scroll border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7BC06] focus:border-[#F7BC06] block w-full p-2.5"
                >
                  <option selected>
                    1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="2">
                    2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$71.2
                  </option>
                  <option value="3">
                    3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="4">
                    4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="5">
                    5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="6">
                    6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="7">
                    7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="8">
                    8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="9">
                    9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                  <option value="10">
                    10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35.60
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 mt-6 w-full justify-center">
              <button class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 overflow-hidden relative hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-6 py-2 font-bold lg:text-[24px] w-1/2 flex items-center justify-center rounded-full  group">
                <span class="bg-yellow-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Add to cart
              </button>
              <div className=" flex flex-col justify-center group mt-5">
                <div className="bg-white/20 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-gray-400 group-hover:fill-[#F7BC06]"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
                  </svg>
                </div>
                <span className="text-white group-hover:text-[#F7BC06] text-center">
                  Save
                </span>
              </div>
              <div className=" flex flex-col justify-center group mt-5">
                <div className="bg-white/20 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-gray-400 group-hover:fill-[#F7BC06]"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
                  </svg>
                </div>
                <span className="text-white group-hover:text-[#F7BC06] text-center">
                  Share
                </span>
              </div>
            </div>
            <p className="text-white ml-4">
              Order today, receive as early as tomorrow
            </p>
            <div className="w-[90%] mt-10 bg-white/20 rounded-3xl p-8 flex flex-col">
              <div className="flex flex-row justify-between">
                <h1 className="text-[#F7BC06] text-[20px]">Related items</h1>
                <div className="flex flex-row">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 1024 1024"
                    fill="#fff"
                    class="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                      fill=""
                    />
                  </svg>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 1024 1024"
                    fill="#fff"
                    class="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z"
                      fill=""
                    />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-6 gap-4">
                <Link href={"/Item"}>
                  <div className=" bg-black rounded-2xl group hover:inner-border-2 hover:inner-border-white p-6 pt-1 pr-1">
                    <div className="w-full flex justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className=" fill-[#f9fafb99] hover:fill-white"
                        width="40"
                        height="40"
                        viewBox="0 0 30 30"
                      >
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
                      <div
                        className="bg-[url('../img/btn_border_white.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-white text-center w-full"
                        href={"/"}
                      >
                        <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>
                        $14
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/Item"}>
                  <div className=" bg-black rounded-2xl group hover:inner-border-2 hover:inner-border-white p-6 pt-1 pr-1">
                    <div className="w-full flex justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className=" fill-[#f9fafb99] hover:fill-white"
                        width="40"
                        height="40"
                        viewBox="0 0 30 30"
                      >
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
                      <div
                        className="bg-[url('../img/btn_border_white.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-white text-center w-full"
                        href={"/"}
                      >
                        <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>
                        $14
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-slate-50/60 bg-center bg-cover ] pt-16 px-[20px]  lg:px-[120px]">
        <h1 className="text-white lg:text-[40px] md:text-[35px] text-[25px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
          We recommend you try it
        </h1>
        <div className="mt-8 pb-32 grid grid-cols-2 md:grid-cols-3 md:px-10 lg:px-0 lg:grid-cols-5 gap-10">
          <div className="">
                <h1 className=" text-gray-50/60 text-[20px] lg:pl-6 mb-8">
                  Test Food 1
                </h1>
                <Image src={DishImg} alt="dish 1" />
                <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                  $16 / 1 pc
                </p>
                <div className=" w-full flex justify-center h-fit pr-5">
                                      <div
                                          className="bg-[url('../img/btn_border_white.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-white text-center w-full"
                                          href={"/"}
                                      >
                                      <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>

                                          $14
                                      </div>
                                  </div>
              </div>
          <div className="">
                <h1 className=" text-gray-50/60 text-[20px] lg:pl-6 mb-8">
                  Test Food 1
                </h1>
                <Image src={DishImg} alt="dish 1" />
                <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                  $16 / 1 pc
                </p>
                <div className=" w-full flex justify-center h-fit pr-5">
                                      <div
                                          className="bg-[url('../img/btn_border_white.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-white text-center w-full"
                                          href={"/"}
                                      >
                                      <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>

                                          $14
                                      </div>
                                  </div>
              </div>
          <div className="">
                <h1 className=" text-gray-50/60 text-[20px] lg:pl-6 mb-8">
                  Test Food 1
                </h1>
                <Image src={DishImg} alt="dish 1" />
                <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                  $16 / 1 pc
                </p>
                <div className=" w-full flex justify-center h-fit pr-5">
                                      <div
                                          className="bg-[url('../img/btn_border_white.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-white text-center w-full"
                                          href={"/"}
                                      >
                                      <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>

                                          $14
                                      </div>
                                  </div>
              </div>
          <div className="">
                <h1 className=" text-gray-50/60 text-[20px] lg:pl-6 mb-8">
                  Test Food 1
                </h1>
                <Image src={DishImg} alt="dish 1" />
                <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                  $16 / 1 pc
                </p>
                <div className=" w-full flex justify-center h-fit pr-5">
                                      <div
                                          className="bg-[url('../img/btn_border_white.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-white text-center w-full"
                                          href={"/"}
                                      >
                                      <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>

                                          $14
                                      </div>
                                  </div>
              </div>
          <div className="">
                <h1 className=" text-gray-50/60 text-[20px] lg:pl-6 mb-8">
                  Test Food 1
                </h1>
                <Image src={DishImg} alt="dish 1" />
                <p className="text-gray-50/60 text-[14px] pl-6 mb-5">
                  $16 / 1 pc
                </p>
                <div className=" w-full flex justify-center h-fit pr-5">
                                      <div
                                          className="bg-[url('../img/btn_border_white.png')] relative float-left bg-no-repeat z-10 bg-center bg-contain px-4 text-[24px] text-white text-center w-full"
                                          href={"/"}
                                      >
                                      <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-0 duration-200 absolute -z-10 -ml-7 -mt-3 group-hover:w-[120%]"></div>

                                          $14
                                      </div>
                                  </div>
              </div>

        </div>
      </div>
    </div>
  );
}
