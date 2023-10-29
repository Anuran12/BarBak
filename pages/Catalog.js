import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DishImg from "../img/dish.png";
import Image from "next/legacy/image";

export default function Catalog() {
	return (
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repea flex  bg-center bg-cover">
                <div className=" w-1/5 h-1"></div>
                <div className=" w-4/5 mt-24 pr-24">
                    <h1 className=" text-[40px] text-white  mb-10">We recommend</h1>
                    <div className=" grid grid-cols-4 gap-8">
                        <div className=" bg-black rounded-2xl p-6">
                            <Image src={DishImg} alt="dish 1" />
                            <h1 className=" text-gray-50/60 text-[20px] mb-8">
                                Test Food 1
                            </h1>
                            <p className="text-gray-50/60 text-[14px] mb-5">
                                $16 / 1 pc
                            </p>
                            <div className=" w-full flex justify-center h-fit">
                                <a
                                    className=" bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain px-16 text-[24px] text-white w-fit"
                                    href={"/"}
                                >
                                    $14
                                </a>
                            </div>
                        </div>
                        <div className=" bg-black rounded-2xl p-6">
                            <Image src={DishImg} alt="dish 1" />
                            <h1 className=" text-gray-50/60 text-[20px] mb-8">
                                Test Food 1
                            </h1>
                            <p className="text-gray-50/60 text-[14px] mb-5">
                                $16 / 1 pc
                            </p>
                            <div className=" w-full flex justify-center h-fit">
                                <a
                                    className=" bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain px-16 text-[24px] text-white w-fit"
                                    href={"/"}
                                >
                                    $14
                                </a>
                            </div>
                        </div>
                        <div className=" bg-black rounded-2xl p-6">
                            <Image src={DishImg} alt="dish 1" />
                            <h1 className=" text-gray-50/60 text-[20px] mb-8">
                                Test Food 1
                            </h1>
                            <p className="text-gray-50/60 text-[14px] mb-5">
                                $16 / 1 pc
                            </p>
                            <div className=" w-full flex justify-center h-fit">
                                <a
                                    className=" bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain px-16 text-[24px] text-white w-fit"
                                    href={"/"}
                                >
                                    $14
                                </a>
                            </div>
                        </div>
                        <div className=" bg-black rounded-2xl p-6">
                            <Image src={DishImg} alt="dish 1" />
                            <h1 className=" text-gray-50/60 text-[20px] mb-8">
                                Test Food 1
                            </h1>
                            <p className="text-gray-50/60 text-[14px] mb-5">
                                $16 / 1 pc
                            </p>
                            <div className=" w-full flex justify-center h-fit">
                                <a
                                    className=" bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain px-16 text-[24px] text-white w-fit"
                                    href={"/"}
                                >
                                    $14
                                </a>
                            </div>
                        </div>
                        <div className=" bg-black rounded-2xl p-6">
                            <Image src={DishImg} alt="dish 1" />
                            <h1 className=" text-gray-50/60 text-[20px] mb-8">
                                Test Food 1
                            </h1>
                            <p className="text-gray-50/60 text-[14px] mb-5">
                                $16 / 1 pc
                            </p>
                            <div className=" w-full flex justify-center h-fit">
                                <a
                                    className=" bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain px-16 text-[24px] text-white w-fit"
                                    href={"/"}
                                >
                                    $14
                                </a>
                            </div>
                        </div>
                        <div className=" bg-black rounded-2xl p-6">
                            <Image src={DishImg} alt="dish 1" />
                            <h1 className=" text-gray-50/60 text-[20px] mb-8">
                                Test Food 1
                            </h1>
                            <p className="text-gray-50/60 text-[14px] mb-5">
                                $16 / 1 pc
                            </p>
                            <div className=" w-full flex justify-center h-fit">
                                <a
                                    className=" bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain px-16 text-[24px] text-white w-fit"
                                    href={"/"}
                                >
                                    $14
                                </a>
                            </div>
                        </div>
                        <div className=" bg-black rounded-2xl p-6">
                            <Image src={DishImg} alt="dish 1" />
                            <h1 className=" text-gray-50/60 text-[20px] mb-8">
                                Test Food 1
                            </h1>
                            <p className="text-gray-50/60 text-[14px] mb-5">
                                $16 / 1 pc
                            </p>
                            <div className=" w-full flex justify-center h-fit">
                                <a
                                    className=" bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain px-16 text-[24px] text-white w-fit"
                                    href={"/"}
                                >
                                    $14
                                </a>
                            </div>
                        </div>
                        <div className=" bg-black rounded-2xl p-6">
                            <Image src={DishImg} alt="dish 1" />
                            <h1 className=" text-gray-50/60 text-[20px] mb-8">
                                Test Food 1
                            </h1>
                            <p className="text-gray-50/60 text-[14px] mb-5">
                                $16 / 1 pc
                            </p>
                            <div className=" w-full flex justify-center h-fit">
                                <a
                                    className=" bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain px-16 text-[24px] text-white w-fit"
                                    href={"/"}
                                >
                                    $14
                                </a>
                            </div>
                        </div>
                        

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
            <Footer />
        </div>
    );
}