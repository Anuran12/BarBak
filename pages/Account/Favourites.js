import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import DishImg from "../../img/dish.png";
import Image from "next/legacy/image";

export default function Favourites() {
    return(
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover pt-20 pb-16 lg:px-[120px] px-[20px]">
                    <div className="w-full mt-10 md:p-8 flex flex-col">
                        <div className="flex flex-row justify-between items-center">
                        <h1 className="text-[40px] text-[#F7BC06]">My Favourites</h1>
                        </div>
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-6 gap-4">
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