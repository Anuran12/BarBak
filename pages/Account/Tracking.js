import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import DishImg from "../../img/dish.png";
import Link from "next/link";

export default function Tracking() {
    return(
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover pt-28 pb-16 lg:px-[120px] px-[20px]">
                <div className="flex justify-between  mb-16">
                <div className="flex items-center">
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#fff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>
                    <span className="text-white text-[24px]">Back</span>
                </div>
                <div className="flex lg:w-1/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                <h1 className="md:text-[24px] text-center w-full font-bold">In Progress</h1>
                            </div>
                </div>
                <div className=" grid lg:grid-cols-3 gap-5 justify-center">
                    <div className="w-full flex flex-row col-span-2 justify-around p-5 items-center">
                        <div className="w-1/3">
                            <Image src={DishImg} />
                        </div>
                        <div className="flex flex-col text-white items-center">
                            <h1 className="text-[24px] text-[#F7BC06]">Food Name</h1>
                            <h1>Order Id: #12345</h1>
                            <div className="flex gap-4 my-3">
                                <span>Case: 1</span>
                                <span>Unit: 1</span>
                            </div>
                            <div className="flex w-fit bg-[#F7BC06] text-black rounded-full py-1 px-6 flex-row items-center">
                                <h1 className="text-[40px] font-bold">$14</h1>
                            </div>
                        </div>
                    </div>
                    
                    
                            <div className=" row-span-2 col-span-2 md:col-span-1">
                            <section class=" bg-white/20 rounded-xl">
                                <div class="order-track text-white">
                                    <div class="order-track-step">
                                    <div class="order-track-status">
                                        <span class="order-track-status-dot"></span>
                                        <span class="order-track-status-line"></span>
                                    </div>
                                    <div class="order-track-text">
                                        <p class="order-track-text-stat">Order Received</p>
                                        <span class="order-track-text-sub">1st November, 2023</span>
                                    </div>
                                    </div>
                                    <div class="order-track-step">
                                    <div class="order-track-status">
                                        <span class="order-track-status-dot"></span>
                                        <span class="order-track-status-line"></span>
                                    </div>
                                    <div class="order-track-text">
                                        <p class="order-track-text-stat">Order Processed</p>
                                        <span class="order-track-text-sub">1st November, 2023</span>
                                    </div>
                                    </div>
                                    <div class="order-track-step">
                                    <div class="order-track-status">
                                        <span class="order-track-status-dot"></span>
                                        <span class="order-track-status-line"></span>
                                    </div>
                                    <div class="order-track-text">
                                        <p class="order-track-text-stat">Manufracturing In Progress</p>
                                        <span class="order-track-text-sub">1st November, 2023</span>
                                    </div>
                                    </div>
                                    <div class="order-track-step">
                                    <div class="order-track-status">
                                        <span class="order-track-status-dot"></span>
                                        <span class="order-track-status-line"></span>
                                    </div>
                                    <div class="order-track-text">
                                        <p class="order-track-text-stat">Order Dispatched</p>
                                        <span class="order-track-text-sub">1st November, 2023</span>
                                    </div>
                                    </div>
                                    <div class="order-track-step">
                                    <div class="order-track-status">
                                        <span class="order-track-status-dot"></span>
                                        <span class="order-track-status-line"></span>
                                    </div>
                                    <div class="order-track-text">
                                        <p class="order-track-text-stat">Order Deliverd</p>
                                        <span class="order-track-text-sub">1st November, 2023</span>
                                    </div>
                                    </div>
                                </div>
                                </section>
                            </div>
                            <div className=" bg-white/20 p-3 mt-8 col-span-2 md:col-span-1 rounded-lg flex flex-col justify-between">
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
                                <h1 className="md:text-[24px] font-bold">Edit</h1>
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-1 col-span-2 md:col-span-1 gap-4 mt-10 justify-center items-center">
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