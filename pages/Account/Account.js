import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import AccountImg from "../../img/account.png"
import Link from "next/link";
import { useState } from "react";

export default function Account() {
    const [showModal, setShowModal] = useState(false);
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
                                <button onClick={() => setShowModal(true)}
                                    className="bg-[url('../img/btn_border_white.png')] bg-no-repeat bg-center bg-contain p-8 text-white w-fit"
                                    href={"/"}
                                >
                                    Edit Profile
                                </button>
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
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl overflow-hidden">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[url('../img/wood.jpg')] bg-no-repeat bg-center bg-cover outline-none focus:outline-none popup">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-[#F7BC06]">
                    Edit Profile
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                <div className="rounded-3xl flex flex-col justify-center">
                    <div className="flex flex-row justify-between gap-2">
                        <div class="">
                            <label class="block mb-2 text-[16px] text-[#F7BC06]">
                            Name
                            </label>
                            <input
                            type="text"
                            placeholder="Name*"
                            class="block w-full px-5 py-1 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div class="">
                            <label class="block mb-2 text-[16px] text-[#F7BC06]">
                            Mobile Number
                            </label>
                            <input
                            type="number"
                            placeholder="Mobile Number*"
                            class="block w-full px-5 py-1 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                    </div>
              <div class="mt-4">
                <label class="block mb-2 text-[16px] text-[#F7BC06]">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address*"
                  class="block w-full px-5 py-1 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex flex-row justify-between gap-2">
              <div class="mt-4">
                <label class="block mb-2 text-[16px] text-[#F7BC06]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email*"
                  class="block w-full px-5 py-1 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-[16px] text-[#F7BC06]">
                  Old Password
                </label>
                <input
                  type="password"
                  placeholder="Password*"
                  class="block w-full px-5 py-1 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              </div>
              <div className="flex flex-row justify-between gap-2">
              <div class="mt-4">
                <label class="block mb-2 text-[16px] text-[#F7BC06]">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  class="block w-full px-5 py-1 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-[16px] text-[#F7BC06]">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  class="block w-full px-5 py-1 mt-2 text-black font-bold placeholder-gray-300 bg-white/40 border border-gray-200 rounded-lg focus:border-[#F7BC06] focus:ring-[#f7bb06bb] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              </div>
              
            </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#F7BC06] text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
    )
}