import Image from "next/legacy/image";
import DishImg from "../img/dish.png";

export default function Specials() {
  return (
    <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ] mt-20">
      <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
        <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain px-[20px]  lg:px-[120px]">
          <h1 className="text-[#F7BC06] pt-20 lg:text-[40px] md:text-[35px] text-[25px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            Monthly Specials
          </h1>
          <div className="mt-16 pb-32 grid grid-cols-2 md:grid-cols-3 md:px-10 lg:px-0 lg:grid-cols-5 gap-10">
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
          <div></div>
        </div>
      </div>
    </div>
  );
}
