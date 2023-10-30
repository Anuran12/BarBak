import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import DishImg from "../img/dish.png";

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
                <h1 className="text-[25px]">Details</h1>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between flex-row">
                    <span>Case items</span><span>25 lb</span><span></span>
                  </div>
                  <div className="w-full flex justify-between flex-row">
                    <span>Case items</span><span>25 lb</span><span></span>
                  </div>
                  <div className="w-full flex justify-between flex-row">
                    <span>Case items</span><span>25 lb</span><span></span>
                  </div>
                  <div className="w-full flex justify-between flex-row">
                    <span>Case items</span><span>25 lb</span><span></span>
                  </div>
                </div>
              </div>
          </div>
          <div className="w-1/2 flex flex-col">

            <div className="mt-10 bg-[#F7BC06] w-full px-6 flex flex-row items-center rounded-full py-2">
              <div className="flex flex-row items-center">
                <h1 className="text-[40px] font-bold">$14</h1>
                <span className="bg-gray-300 px-2 h-5 rounded-full">
                $0.52/lb
                </span>

              </div>
            </div>
            <div>
              <button className="mt-10 bg-[#F7BC06] w-full px-6 rounded-full py-2 text-[24px] font-bold">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-slate-50/60 bg-center bg-cover ] -mt-40 px-[120px]">
        
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
      </div> */}
    </div>
  );
}
