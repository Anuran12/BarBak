import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import DishImg from "../../img/dish.png";
import Link from "next/link";

export default function Tracking() {
    return(
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover pt-28 pb-16 px-[120px]">
                <div className="flex justify-between  mb-16">
                <div className="flex items-center">
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#fff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>
                    <span className="text-white text-[24px]">Back</span>
                </div>
                <div className="flex w-1/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                <h1 className="text-[24px] text-center w-full font-bold">In Progress</h1>
                            </div>
                </div>
                <div className=" grid grid-cols-3 justify-center">
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="w-1/2">
                            <Image src={DishImg} />
                        </div>
                        <div className="flex flex-col text-white items-center">
                            <h1 className="text-[24px] text-[#F7BC06]">Food Name</h1>
                            <span>Case: 1</span>
                            <span>Unit: 1</span>
                        </div>
                        <div className="flex w-fit bg-[#F7BC06] rounded-full py-1 px-6 flex-row items-center">
                            <h1 className="text-[40px] font-bold">$14</h1>
                        </div>
                    </div>
                    <div className=" bg-white/20 p-3 rounded-lg flex flex-col justify-between">
                        <h1 className="text-[24px] text-[#F7BC06] font-semibold">Location</h1>
                        <div className="text-white">
                            <h1 className="text-[18px] font-semibold">Delivering to Restaurant Chungdam</h1>
                            <p>3180 El Camino Real, Santa Clara, California 95051</p>
                            <p><span className="text-[18px] font-semibold">NOTE:</span> hi, I want to buy this apple most</p>
                        </div>
                        <h1 className="text-[24px] text-[#F7BC06] font-semibold">Delivery Time</h1>
                        <div className="text-white">
                            <p>Tomorrow 8am-3pm</p>
                        </div>
                        <div className="w-full flex justify-end">
                            <div className="flex w-fit bg-[#F7BC06] rounded-full h-fit py-1 px-6 flex-row items-center">
                                <h1 className="text-[24px] font-bold">Edit</h1>
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-1 gap-4 mt-10 justify-center items-center">
                                <Link
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-4 text-[20px] text-white text-center w-full"
                                    href={"/Account/Orders"}
                                >
                                    Cancel Order
                                </Link>
                                <Link
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-4 text-[20px] text-white text-center w-full"
                                    href={"/Account/Favourites"}
                                >
                                    Download Invoice
                                </Link>
                                <Link
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-4 text-[20px] text-white text-center w-full"
                                    href={"/Account/Referral"}
                                >
                                    call delivery Pro&#39;s 
                                </Link>
                            </div>
                </div>

                <div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}