import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import AccountImg from "../../img/account.png"
import Link from "next/link";
import { useState } from "react";

export default function Account() {
    const [showModal, setShowModal] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
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
                                <h1 className=" text-[#F7BC06]">Contact Info</h1>
                                <p className=" text-white"><span className=" font-bold">Phone:</span> 1234567890</p>
                                <p className=" text-white"><span className=" font-bold">Email:</span> abcd@gmail.com</p>
                                <h1 className=" text-[#F7BC06] mt-5">Address</h1>
                                <p className=" text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</p>
                                <h1 className=" text-[#F7BC06] mt-5">total ORDERS:- <span className="text-white">0</span></h1>
                                <h1 className=" text-[#F7BC06] mt-5">TOTAL SPENT:- <span className="text-white">$0</span></h1>
                                <h1 className=" text-[#F7BC06] mt-5">LOYALTY POINTS:- <span className="text-white">0</span></h1>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col items-center">
                            <div className="w-2/3 flex flex-col items-center">
                                <button className="mt-5 bg-[#F7BC06] w-2/3 px-6 rounded-full py-2">YOUR CART</button> 
                                <button className="mt-5 bg-[#F7BC06] w-2/3 px-6 rounded-full py-2" onClick={() => setShowAddress(true)}>ADDRESS BOOK</button> 
                                <button className="mt-5 bg-[#F7BC06] w-2/3 px-6 rounded-full py-2">GIVE US A REVIEW</button> 
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            {showAddress ? (
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
                    Address Book
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowAddress(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                  <div className="rounded-3xl flex flex-col justify-center max-h-[]">
                    <div className="p-3 my-3 border-y-white border-solid border-y-2 flex justify-between">
                      <p className="text-white mr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</p>
                      <div className="flex w-fill justify-center gap-5">
                                            <button onClick={() => setShowEdit(true)}>
                                                <svg width="18" height="19" viewBox="0 0 18 19" className=" fill-white hover:fill-green-500" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z"/>
                                                </svg>
                                            </button>
                                        <button onClick={() => setShowDelete(true)}>
                                            <svg width="15" height="17" viewBox="0 0 15 17" className=" fill-white hover:fill-red-600" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z"/>
                                            </svg>
                                        </button>
                                        </div>
                    </div>             
                    <div className="p-3 my-3 border-y-white border-solid border-y-2 flex justify-between">
                      <p className="text-white mr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</p>
                      <div className="flex w-fill justify-center gap-5">
                                            <button onClick={() => setShowEdit(true)}>
                                                <svg width="18" height="19" viewBox="0 0 18 19" className=" fill-white hover:fill-green-500" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z"/>
                                                </svg>
                                            </button>
                                        <button onClick={() => setShowDelete(true)}>
                                            <svg width="15" height="17" viewBox="0 0 15 17" className=" fill-white hover:fill-red-600" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z"/>
                                            </svg>
                                        </button>
                                        </div>
                    </div>             
                    <div className="p-3 my-3 border-y-white border-solid border-y-2 flex justify-between">
                      <p className="text-white mr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</p>
                      <div className="flex w-fill justify-center gap-5">
                                            <button onClick={() => setShowEdit(true)}>
                                                <svg width="18" height="19" viewBox="0 0 18 19" className=" fill-white hover:fill-green-500" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z"/>
                                                </svg>
                                            </button>
                                        <button onClick={() => setShowDelete(true)}>
                                            <svg width="15" height="17" viewBox="0 0 15 17" className=" fill-white hover:fill-red-600" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z"/>
                                            </svg>
                                        </button>
                                        </div>
                    </div>             
                    
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAddress(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#F7BC06] text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAddress(false)}
                  >
                    Add New
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
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
      {showDelete ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl overflow-hidden">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none popup">
                {/*body*/}
                <div className="relative p-10 flex-auto">
                    <div className="rounded-3xl flex flex-col justify-center items-center">
                        <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M73.75 147.5C33.019 147.5 0 114.481 0 73.75C0 33.019 33.019 0 73.75 0C114.481 0 147.5 33.019 147.5 73.75C147.5 114.481 114.481 147.5 73.75 147.5ZM73.75 132.75C106.335 132.75 132.75 106.335 132.75 73.75C132.75 41.1652 106.335 14.75 73.75 14.75C41.1652 14.75 14.75 41.1652 14.75 73.75C14.75 106.335 41.1652 132.75 73.75 132.75ZM66.375 95.875H81.125V110.625H66.375V95.875ZM66.375 36.875H81.125V81.125H66.375V36.875Z" fill="white"/>
                        </svg>
                        <h1 className="text-white text-[24px] font-bold mt-5">
                        Are you sure you want to delete this record?
                        </h1>
                        <p className="text-white mt-5">
                        If you delete this, it will be gone forever.
                        </p>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowDelete(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-[#F7BC06] text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowDelete(false)}
                  >
                    Delete
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