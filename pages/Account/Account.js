import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import AccountImg from "../../img/account.png"
import Link from "next/link";

export default function Account() {
    return(
        <div>
            <Header />
                <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover pb-10">
                    <div className=" pt-32 w-full flex lg:flex-row flex-col">
                        <div className="lg:w-1/2 flex flex-col justify-center items-center">
                            <div className=" !w-[250px] h-auto">
                                <Image src={AccountImg} />
                            </div>
                            <h1 className="text-[40px] text-[#F7BC06] mt-3">NAME</h1>
                            <div className=" w-full flex flex-row justify-center gap-5">
                                <a
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 text-white w-fit"
                                    href={"/"}
                                >
                                    Order Delivery
                                </a>
                                <a
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 text-white w-fit"
                                    href={"/"}
                                >
                                    Order Delivery
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col items-center">
                            <div className=" bg-[#F7BC06] w-3/5 rounded-tl-[40px] rounded-br-[40px]">
                                <h1 className="lg:text-[40px] lg:px-20 px-6 py-3">loyalty points:-  0</h1>
                            </div>
                            <div className=" grid grid-cols-2 lg:w-3/5 gap-4 mt-10">
                                <Link
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-4 md:text-[20px] text-white text-center w-full"
                                    href={"/Account/Orders"}
                                >
                                    ORDERS
                                </Link>
                                <Link
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-4 md:text-[20px] text-white text-center w-full"
                                    href={"/Account/Favourites"}
                                >
                                    FAVOURITES
                                </Link>
                                <Link
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-4 md:text-[20px] text-white text-center w-full"
                                    href={"/Account/Referral"}
                                >
                                    REFERRALS
                                </Link>
                                <Link
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-4 md:text-[20px] text-white text-center w-full"
                                    href={"/"}
                                >
                                    HELP CENTER
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-10 lg:mt-0 flex lg:flex-row flex-col justify-center items-center">
                        <div className="lg:w-1/2 w-full flex flex-col items-center">
                            <div className="lg:w-2/3 w-[90%] !bg-white/20 rounded-3xl flex flex-col justify-center p-10">
                                
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col items-center">
                            <div className="w-2/3 flex flex-col items-center">
                                <button className="mt-5 bg-[#F7BC06] w-2/3 px-6 rounded-full py-2">SEND</button> 
                                <button className="mt-5 bg-[#F7BC06] w-2/3 px-6 rounded-full py-2">SEND</button> 
                                <button className="mt-5 bg-[#F7BC06] w-2/3 px-6 rounded-full py-2">SEND</button> 
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}