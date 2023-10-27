import Image from "next/legacy/image";
import DishImg from '../img/dish.png'

export default function Specials() {
    return(
        <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ] mt-20">
            <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
                <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain  px-[120px]">
                    <h1 className="text-white pt-20 text-[40px]">Monthly Specials</h1>
                    <div className="mt-16 pb-32 grid grid-cols-5 gap-10">
                        <div className="">
                            <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">Test Food 1</h1>
                            <Image
                            src={DishImg}
                            alt="dish 1"
                            />
                            <p className="text-gray-50/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
                            <a
                                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                                href={"/"}
                            >
                                $14
                            </a>
                        </div>
                        <div className="">
                            <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">Test Food 1</h1>
                            <Image
                            src={DishImg}
                            alt="dish 1"
                            />
                            <p className="text-gray-50/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
                            <a
                                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                                href={"/"}
                            >
                                $14
                            </a>
                        </div>
                        <div className="">
                            <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">Test Food 1</h1>
                            <Image
                            src={DishImg}
                            alt="dish 1"
                            />
                            <p className="text-gray-50/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
                            <a
                                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                                href={"/"}
                            >
                                $14
                            </a>
                        </div>
                        <div className="">
                            <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">Test Food 1</h1>
                            <Image
                            src={DishImg}
                            alt="dish 1"
                            />
                            <p className="text-gray-50/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
                            <a
                                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                                href={"/"}
                            >
                                $14
                            </a>
                        </div>
                        <div className="">
                            <h1 className=" text-gray-50/60 text-[20px] pl-6 mb-8">Test Food 1</h1>
                            <Image
                            src={DishImg}
                            alt="dish 1"
                            />
                            <p className="text-gray-50/60 text-[14px] pl-6 mb-5">$16 / 1 pc</p>
                            <a
                                className=" ml-10 bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain py-8 px-16 text-[24px] mt-10 text-white w-fit"
                                href={"/"}
                            >
                                $14
                            </a>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}