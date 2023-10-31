import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import DishImg from "../../img/dish.png";
import Image from "next/legacy/image";

export default function Favourites() {
    return(
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover pt-20 pb-16 px-[120px]">
                    <div className="w-full mt-10 bg-white/20 rounded-3xl p-8 flex flex-col">
                        <div className="flex flex-row justify-between items-center">
                        <h1 className="text-[40px] text-[#F7BC06]">My Favourites</h1>
                            <div className="flex flex-row gap-2">
                            <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#fff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>
                            <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#fff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 mt-6 gap-4">
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
                    <div className="w-full mt-10 bg-white/20 rounded-3xl p-8 flex flex-col">
                        <div className="flex flex-row justify-between items-center">
                        <h1 className="text-[40px] text-[#F7BC06]">Quick Order</h1>
                            <div className="flex flex-row gap-2">
                            <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#fff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>
                            <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#fff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 mt-6 gap-4">
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
            <Footer />
        </div>
    )
}