import { useState } from "react";
import DishImg from "../img/dish.png";
import Image from "next/legacy/image";

export default function Cart({cartOpen, setCartOpen}) {

    const [isClose, setIsClose] = useState(true)

    const HandleCloseBtn = (() => {
        setCartOpen(!cartOpen);

    })
    return(
        <div className={`fixed bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh] w-[400px] bg-white z-[999999] duration-300 right-${cartOpen ? "0" : "[-400px]"}`}>
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
            <div>
                <div className="grid grid-cols-4">
                    <div className="pr-5 start-1">
                        <Image src={DishImg} alt="dish 1" />
                    </div>
                    <div className="flex flex-col start-4">
                        <h1 className=" text-gray-50/60 text-[20px] mb-3 pr-5">
                                    Test Food 1
                        </h1>
                        <p className="text-gray-50/60 text-[14px] mb-2 pr-5">
                                    1 pc
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}