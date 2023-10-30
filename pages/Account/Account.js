import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import AccountImg from "../../img/account.png"

export default function Account() {
    return(
        <div>
            <Header />
                <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh]">
                    <div className=" pt-32 w-full flex flex-row">
                        <div className="w-1/2 flex flex-col justify-center items-center">
                            <Image src={AccountImg} />
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
                        <div className="w-1/2">
                            <div className=" bg-[#F7BC06] w-fit rounded-3xl">
                                <h1 className="text-[40px] px-20 py-6">loyalty points:-  0</h1>
                            </div>
                            <div>
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
                    </div>
                </div>
            <Footer />
        </div>
    )
}