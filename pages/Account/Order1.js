import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import DishImg from "../../img/dish.png";
import Link from "next/link";

export default function Order1(){
    return(
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover pt-28 pb-16 lg:px-[120px]">
                <h1 className="text-[40px] text-[#F7BC06] text-center">Order 1</h1>
                <div className="flex flex-col gap-4">
                    <Link className="" href={'/Account/Tracking'}>
                        <div href={'/Account/Tracking'} className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-t-xl p-2 items-center">
                            <div className="w-full flex justify-center">
                                <div className="w-1/2">
                                    <Image src={DishImg} />
                                </div>
                            </div>
                            <h1 className="text-[#F7BC06] text-center text-[20px]">Food Name</h1>
                            <div className="text-[#F7BC06] text-center text-[14px] ">
                                <h1>Case: 1</h1>
                                <h1>Unit: 0</h1>
                            </div>
                            <h1 className="text-[#F7BC06] text-center text-[20px]">$35.60</h1>
                            <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                                <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                    <h1 className="lg:text-[24px] text-center w-full font-bold">In Progress</h1>
                                </div>
                                    <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 bg-white/20 border-[1px] border-stone-400">
                            <div className="text-white text-center p-2 Tracking_box border-white">
                                <h1 className="text-[18px]">Recieved</h1>
                                <span className="text-[12px]">1 Nov 10:30am</span>
                            </div>
                            <div className="text-white text-center p-1 border-white">
                                <h1 className="text-[18px]">Preparing</h1>
                                <span className="text-[12px]">1 Nov 10:30am</span>
                            </div>
                            <div className="text-white text-center p-1 border-white">
                                <h1 className="text-[18px]">In Transit</h1>
                                <span className="text-[12px]">1 Nov 10:30am</span>
                            </div>
                            <div className="text-white text-center p-1 border-white">
                                <h1 className="text-[18px]">Delivered</h1>
                                <span className="text-[12px]">1 Nov 10:30am</span>
                            </div>
                        </div>
                    </Link>
                    <Link className="" href={'/'}>
                        <div className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-t-xl p-2 items-center">
                            <div className="w-full flex justify-center">
                                <div className="w-1/2">
                                    <Image src={DishImg} />
                                </div>
                            </div>
                            <h1 className="text-[#F7BC06] text-center text-[20px]">Food Name</h1>
                            <div className="text-[#F7BC06] text-center text-[14px] ">
                                <h1>Case: 1</h1>
                                <h1>Unit: 0</h1>
                            </div>
                            <h1 className="text-[#F7BC06] text-center text-[20px]">$35.60</h1>
                            <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                                <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                    <h1 className="lg:text-[24px] text-center w-full font-bold">In Progress</h1>
                                </div>
                                    <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 bg-white/20">
                            <div className="text-white text-center p-2 Tracking_box bg-red-500/60 border-white">
                            </div>
                            <div className="text-white text-center  p-2 Tracking_box bg-red-500/60 border-white">
                            </div>
                            <div className="text-white text-center  p-2 border-white">
                            </div>
                            <div className="text-white text-center  p-2 border-white">
                            </div>
                        </div>
                    </Link>
                    <div className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-xl p-2 items-center">
                        <div className="w-full flex justify-center">
                            <div className="w-1/2">
                                <Image src={DishImg} />
                            </div>
                        </div>
                        <h1 className="text-[#F7BC06] text-center text-[20px]">Food Name</h1>
                        <div className="text-[#F7BC06] text-center text-[14px] ">
                            <h1>Case: 1</h1>
                            <h1>Unit: 0</h1>
                        </div>
                        <h1 className="text-[#F7BC06] text-center text-[20px]">$35.60</h1>
                        <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                            <div className="flex flex-col w-full gap-2 justify-center items-center">

                                    <h1 className="lg:text-[24px] text-[#45F706] text-center w-full font-bold">Delivered</h1>
                                
                                <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                    <h1 className="lg:text-[24px] text-center w-full font-bold">Reorder</h1>
                                </div>
                            </div>
                                <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-xl p-2 items-center">
                        <div className="w-full flex justify-center">
                            <div className="w-1/2">
                                <Image src={DishImg} />
                            </div>
                        </div>
                        <h1 className="text-[#F7BC06] text-center text-[20px]">Food Name</h1>
                        <div className="text-[#F7BC06] text-center text-[14px] ">
                            <h1>Case: 1</h1>
                            <h1>Unit: 0</h1>
                        </div>
                        <h1 className="text-[#F7BC06] text-center text-[20px]">$35.60</h1>
                        <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                            <div className="flex flex-col w-full gap-2 justify-center items-center">

                            <h1 className="lg:text-[24px] text-[#FE3000] text-center w-full font-bold">Canceled</h1>

                            <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                            <h1 className="lg:text-[24px] text-center w-full font-bold">Reorder</h1>
                            </div>
                            </div>
                                <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-xl p-2 items-center">
                        <div className="w-full flex justify-center">
                            <div className="w-1/2">
                                <Image src={DishImg} />
                            </div>
                        </div>
                        <h1 className="text-[#F7BC06] text-center text-[20px]">Food Name</h1>
                        <div className="text-[#F7BC06] text-center text-[14px] ">
                            <h1>Case: 1</h1>
                            <h1>Unit: 0</h1>
                        </div>
                        <h1 className="text-[#F7BC06] text-center text-[20px]">$35.60</h1>
                        <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                            <div className="flex flex-col w-full gap-2 justify-center items-center">

                            <h1 className="lg:text-[24px] text-[#45F706] text-center w-full font-bold">Delivered</h1>

                            <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                            <h1 className="lg:text-[24px] text-center w-full font-bold">Reorder</h1>
                            </div>
                            </div>
                                <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}