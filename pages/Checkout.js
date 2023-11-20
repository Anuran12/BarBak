import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import DishImg from "../img/dish.png";
import Link from "next/link";
import Logo1 from "../img/Logo1.png";
import Logo2 from "../img/Logo2.png";

export default function checkout() {
  return (
    <div>
      <div className="bg-[url('../img/bg_black.jpg')] grid grid-cols-2 items-center px-10 fixed w-full bg-no-repeat bg-center bg-cover z-50">
        <Link href={"/"} className="flex text-white gap-2 group w-fit">
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

          <h1 className="text-[24px] group-hover:text-[#F7BC06]">Back</h1>
        </Link>
        <Link href={"/"} className="my-5  -ml-10 flex">
          <Image src={Logo1} alt="logo" />
          <Image className="!ml-[-10px]" src={Logo2} alt="logo" />
        </Link>
      </div>
      <div className="bg-[url('../img/bg_black.jpg')] flex pt-20 lg:flex-row flex-col bg-no-repeat bg-center bg-cover">
        <div className="lg:w-[60%] w-full lg:pl-10 flex flex-col gap-40 mb-64">
          <div className="h-1 p-10 flex md:flex-row flex-col gap-8">
            <div>
              <h1 className="text-white text-[28px]">Delivery</h1>
            </div>
            <div className="text-white flex flex-col bg-white/20 p-5 h-fit rounded-xl lg:w-2/3">
              <div className="flex justify-between text-[#F7BC06]">
                <span>New Delivery</span>
                <span>$100</span>
              </div>
              <div className="flex mt-10 justify-between">
                <span>Thursday, November 2</span>
                <span>9am - 6pm</span>
                <span>
                  <svg
                    fill="#f9fafb99"
                    height="20px"
                    width="20px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                  >
                    <path
                      id="XMLID_102_"
                      d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    />
                  </svg>
                </span>
              </div>
              <hr class="h-px mt-8 mb-3 bg-gray-200 border-0"></hr>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <div className="w-[10%] rounded-full">
                    <Image src={DishImg} />
                  </div>
                  <div className="w-[10%] rounded-full -ml-5">
                    <Image src={DishImg} />
                  </div>
                </div>
                <button className=" underline text-white text-[14px] w-full">
                  View Items
                </button>
              </div>
            </div>
          </div>
          <div className="h-1 p-10 flex md:flex-row flex-col gap-8 mt-20 md:mt-0">
            <div>
              <h1 className="text-white text-[28px]">Location</h1>
            </div>
            <div className="text-white flex flex-col bg-white/20 p-5 h-fit rounded-xl lg:w-2/3">
              <div className=" flex flex-col gap-5">
                <h1 className="text-[18px] font-bold">
                  Delivering to Restaurant Chungdam
                </h1>
                <h1>3180 El Camino Real, Santa Clara, California 95051</h1>
                <h1>
                  <span className="font-bold">NOTE:</span> hi, I want to buy
                  this apple most
                </h1>
              </div>
              <div className="w-full flex justify-end text-black">
                <button class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative rounded-full w-fit hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-8 py-2 mt-4 group">
                  <span class="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="h-1 p-10 flex md:flex-row flex-col gap-8 mt-40 md:mt-0">
            <div>
              <h1 className="text-white text-[28px]">Payment</h1>
            </div>
            <div className="text-white flex flex-col gap-4 p-5 pb-0 h-fit lg:w-2/3">
              <h1>Choose your payment method</h1>
              <div className="bg-white/20 p-5 rounded-xl border-2 border-white">
                <h1>Add bank account</h1>
              </div>
              <div className="bg-white/20 p-5 rounded-xl border-2 border-white">
                <h1>Add credit card</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] lg:mr-16 flex  px-20 items-center lg:h-[110vh] py-16 lg:py-0 bg-[url('../img/checkout.png')] bg-no-repeat bg-center bg-cover">
          <div className="w-full">
            <h1 className="text-white text-[28px] ">Checkout</h1>
            <div className="flex flex-col gap-6 mt-10 text-white justify-between w-full">
              <div className="w-full flex justify-between">
                <span>Subtotal</span>
                <span>$302.60</span>
              </div>
              <div className="w-full flex justify-between">
                <span>Delivery fee</span>
                <span>$100.00</span>
              </div>
              <div className="w-full lg:text-[24px] text-[20px] flex justify-between">
                <span>Estimated Total</span>
                <span>$409.55</span>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative rounded-full w-fit hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-6 py-2 mt-10 group">
                <span class="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
