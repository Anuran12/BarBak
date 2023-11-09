import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DishImg from "../img/dish.png";
import Image from "next/legacy/image";
import Category from "@/components/Category";
import Link from "next/link";
import { useState } from "react";

export default function Catalog() {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const handleCategoryButtonClick = () => {
        setCategoryOpen(!categoryOpen);
        }

	return (
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repea flex  bg-center bg-cover">
                    <Category categoryOpen={categoryOpen} setCategoryOpen={setCategoryOpen}/>
                <div className=" w-1/5 h-1 mt-20 hidden lg:block">
                </div>
                <div className=" lg:w-4/5 w-full mt-24 lg:pr-24">
                    <div className="flex items-center px-6 lg:hidden">
                    <button onClick={handleCategoryButtonClick} className="text-[#f9fafb99] md:text-[24px] flex items-center gap-3 lg:px-2 px-1 h-fit rounded-full border border-[#f9fafb99] bg-black">
                                Category
                            </button>
                            <p className="text-[10px] text-end w-full lg:hidden block text-white">Home - recommend - We recommend</p>

                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-4 lg:p-0">
                        <h1 className=" lg:text-[40px] md:text-[35px] text-[25px] text-white ">We recommend</h1>
                            <div class="relative  flex items-center w-1/3 h-12 rounded-lg focus-within:shadow-lg bg-black overflow-hidden">
                                <input
                                class="peer h-full w-full bg-black pl-3 outline-none text-sm text-gray-300 pr-2"
                                type="text"
                                id="search"
                                placeholder="Search something.." /> 
                                <div class="grid place-items-center h-full w-12 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                        </div>
                    </div>
                    <div className="flex mb-8 mt-1 w-full justify-between px-4 lg:px-0">
                        <div className="flex">
                            <div className="text-[#f9fafb99] md:text-[24px] lg:text-[16px] flex items-center gap-3 lg:px-2 px-1 h-fit rounded-full border border-[#f9fafb99] bg-black">
                                Depertment
                                <svg fill="#f9fafb99" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 330 330">
                                <path id="XMLID_102_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                                </svg>
                            </div>
                            <div className="text-[#f9fafb99] md:text-[24px] lg:text-[16px] ml-3 flex items-center gap-3 lg:px-2 px-1 h-fit rounded-full border border-[#f9fafb99] bg-black">
                                Brand
                                <svg fill="#f9fafb99" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 330 330">
                                <path id="XMLID_102_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="text-[#f9fafb99] md:text-[24px] lg:text-[16px] ml-3 flex items-center gap-3 lg:px-2 px-1 h-fit rounded-full border border-[#f9fafb99] bg-black">
                                Sort by:
                                <svg fill="#f9fafb99" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 330 330">
                                <path id="XMLID_102_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                                </svg>
                            </div>
                    </div>
                    <div className=" grid lg:grid-cols-5 grid-cols-2 gap-5 p-4 lg:p-0 md:p-10">
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
                    <div className=" text-white w-full flex justify-center my-16">
                        <div className=" bg-black rounded-md flex gap-8 py-2 px-5">
                            <span>&#60;</span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>&#62;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}