import { useState } from "react";
import DishImg from "../img/dish.png";
import Image from "next/legacy/image";

export default function Cart({cartOpen, setCartOpen}) {

    const [isClose, setIsClose] = useState(true)

    const HandleCloseBtn = (() => {
        setCartOpen(!cartOpen);

    })
    return(
        <div className={`fixed bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh] w-[400px] flex flex-col justify-between bg-white z-[999999] duration-300 ${cartOpen ? "right-0" : "right-[-400px]"}`}>
            <div>
            <div className="flex flex-row justify-between p-5">
                <h1 className="text-[40px] text-[#F7BC06]">Cart</h1>
                <button onClick={HandleCloseBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className=" fill-white" width="30" height="30" viewBox="0 0 24 24">
                        <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                    </svg>
                </button>
            </div>
            <hr class="h-px bg-gray-200 border-0"></hr>
            <div className="flex flex-row justify-between text-white bg-slate-50/20 py-1 px-5">
                <span>Available Tomorrow</span>
                <span>1 item</span>
            </div>
            <div className="flex flex-col gap-1">
                <div className="grid grid-cols-4 m-5 justify-center items-center">
                    <div className="pr-5 col-start-1">
                        <Image src={DishImg} alt="dish 1" />
                    </div>
                    <div className="flex flex-col justify-center col-start-2 col-end-4">
                        <h1 className=" text-gray-50/60 text-[20px] mb-1 pr-5 w-full">
                                    Test Food 1
                        </h1>
                        <p className="text-gray-50/60 text-[14px] pr-5 ">
                                    $35.60/case
                        </p>
                    </div>
                    <div className="flex flex-row justify-end items-center">
                        <div className="bg-slate-50/20 w-fit flex items-center px-2 rounded-md border-[1px] border-white py-1">
                            <span className="text-white mr-2">2</span>
                            <svg fill="#f9fafb99" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 330 330">
                                <path id="XMLID_102_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 m-5 justify-center items-center">
                    <div className="pr-5 col-start-1">
                        <Image src={DishImg} alt="dish 1" />
                    </div>
                    <div className="flex flex-col justify-center col-start-2 col-end-4">
                        <h1 className=" text-gray-50/60 text-[20px] mb-1 pr-5 w-full">
                                    Test Food 1
                        </h1>
                        <p className="text-gray-50/60 text-[14px] pr-5 ">
                                    $35.60/case
                        </p>
                    </div>
                    <div className="flex flex-row justify-end items-center">
                        <div className="bg-slate-50/20 w-fit flex items-center px-2 rounded-md border-[1px] border-white py-1">
                            <span className="text-white mr-2">2</span>
                            <svg fill="#f9fafb99" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 330 330">
                                <path id="XMLID_102_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 m-5 justify-center items-center">
                    <div className="pr-5 col-start-1">
                        <Image src={DishImg} alt="dish 1" />
                    </div>
                    <div className="flex flex-col justify-center col-start-2 col-end-4">
                        <h1 className=" text-gray-50/60 text-[20px] mb-1 pr-5 w-full">
                                    Test Food 1
                        </h1>
                        <p className="text-gray-50/60 text-[14px] pr-5 ">
                                    $35.60/case
                        </p>
                    </div>
                    <div className="flex flex-row justify-end items-center">
                        <div className="bg-slate-50/20 w-fit flex items-center px-2 rounded-md border-[1px] border-white py-1">
                            <span className="text-white mr-2">2</span>
                            <svg fill="#f9fafb99" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 330 330">
                                <path id="XMLID_102_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="p-8">
                <button className=" bg-[#F7BC06] w-full px-6 rounded-full py-2 text-[20px] font-bold">
                Go to checkout · $348.69
                </button>
            </div>
        </div>
    )
}