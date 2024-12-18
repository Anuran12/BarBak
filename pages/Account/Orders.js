import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import DishImg from "../../img/dish.png";
import Link from "next/link";
import { useState } from "react";

export default function Orders(){
    // Use an array to store the isOpen state for each order
  const [orderStates, setOrderStates] = useState(Array(5).fill(false));

  const toggleAccordion = (index) => {
    // Create a copy of the array and toggle the state for the clicked order
    const newOrderStates = [...orderStates];
    newOrderStates[index] = !newOrderStates[index];

    // Close the dropdown for all other orders
    for (let i = 0; i < newOrderStates.length; i++) {
      if (i !== index) {
        newOrderStates[i] = false;
      }
    }

    setOrderStates(newOrderStates);
  };
    return(
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover w-full h-full fixed -z-30"></div>
             <div className=" pt-28 pb-16 lg:px-[120px]">

        <h1 className="text-[40px] text-[#F7BC06] text-center">My Orders</h1>
        <div className="flex flex-col gap-4">
          {[...Array(5).keys()].map((index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className=""
              href={`/Account/Order${index + 1}`}
            >
              <div
                href={`/Account/Tracking`}
                className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-t-xl p-2 items-center"
              >
                {/* ... rest of your code ... */}
                <div className="w-full flex justify-center">
                                <div className="w-1/2">
                                    <Image src={DishImg} />
                                </div>
                                <div className="w-1/2 -ml-20">
                                    <Image src={DishImg} />
                                </div>
                                <div className="w-1/2 -ml-20">
                                    <Image src={DishImg} />
                                </div>
                            </div>
                            <h1 className="text-[#F7BC06] text-center text-[20px]">ID: 12345</h1>
                            <div className="text-[#F7BC06] text-center text-[14px] ">
                                <h1>Case: 1</h1>
                                <h1>Unit: 0</h1>
                            </div>
                            <h1 className="text-[#F7BC06] text-center text-[20px]">Total: $35.60</h1>
                            <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                                <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                    <h1 className="lg:text-[24px] text-center w-full font-bold">In Progress</h1>
                                </div>
                                    <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                            </div>

                
                    <div className={`col-span-5 dropdown ${orderStates[index] ? "dropdownOpen" : ""}`}>
                        <div className="hoverme mb-3">
                            <Link className=" col-span-5 mb-5 hover_disable" href={`/Account/Tracking`}>
                            <div href={'/Account/Tracking'} className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-t-xl p-2 items-center">
                                    <div className="w-full flex justify-center">
                                        <div className="w-1/2">
                                            <Image src={DishImg} />
                                        </div>
                                    </div>
                                    <h1 className="text-[#F7BC06] text-center text-[20px]">Food Name</h1>
                                    <div className="text-[#F7BC06] text-center text-[14px] ">
                                        <h1>Case: 1</h1>
                                        <h1>Unit: 0</h1>
                                    </div>
                                    <h1 className="text-[#F7BC06] text-center text-[20px]">$35.60</h1>
                                    <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                                        <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                            <h1 className="lg:text-[24px] text-center w-full font-bold">In Progress</h1>
                                        </div>
                                            <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 bg-white/20">
                                    <div className="text-white text-center p-2 Tracking_box border-white">
                                    </div>
                                    <div className="text-white text-center p-1 border-white">
                                    </div>
                                    <div className="text-white text-center p-1 border-white">
                                    </div>
                                    <div className="text-white text-center p-1 border-white">
                                    </div>
                                </div>
                                
                            </Link>
                            <Link className=" col-span-5 mb-5 popup_item absolute " href={`/Account/Tracking`}>
                            {/* ... rest of your code ... */}
                            <div href={'/Account/Tracking'} className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-t-xl p-2 items-center">
                                    <div className="w-full flex justify-center">
                                        <div className="w-1/2">
                                            <Image src={DishImg} />
                                        </div>
                                    </div>
                                    <h1 className="text-[#F7BC06] text-center text-[20px]">Food Name</h1>
                                    <div className="text-[#F7BC06] text-center text-[14px] ">
                                        <h1>Case: 1</h1>
                                        <h1>Unit: 0</h1>
                                    </div>
                                    <h1 className="text-[#F7BC06] text-center text-[20px]">$35.60</h1>
                                    <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                                        <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                            <h1 className="lg:text-[24px] text-center w-full font-bold">In Progress</h1>
                                        </div>
                                            <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 bg-white/20">
                                    <div className="text-white text-center p-2 Tracking_box border-white">
                                    </div>
                                    <div className="text-white text-center p-1 border-white">
                                    </div>
                                    <div className="text-white text-center p-1 border-white">
                                    </div>
                                    <div className="text-white text-center p-1 border-white">
                                    </div>
                                </div>
                                
                            </Link>
                        </div>
                        <div className="hoverme2 mb-5">
                            <Link className=" col-span-5 mb-5 hover_disable2" href={'/Account/Tracking'}>
                            <div className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-t-xl p-2 items-center">
                                <div className="w-full flex justify-center">
                                    <div className="w-1/2">
                                        <Image src={DishImg} />
                                    </div>
                                </div>
                                <h1 className="text-[#F7BC06] text-center text-[20px]">Food Name</h1>
                                <div className="text-[#F7BC06] text-center text-[14px] ">
                                    <h1>Case: 1</h1>
                                    <h1>Unit: 0</h1>
                                </div>
                                <h1 className="text-[#F7BC06] text-center text-[20px]">$35.60</h1>
                                <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                                    <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                        <h1 className="lg:text-[24px] text-center w-full font-bold">In Progress</h1>
                                    </div>
                                        <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 bg-white/20">
                                <div className="text-white text-center p-2 Tracking_box bg-red-500/60 border-white">
                                </div>
                                <div className="text-white text-center  p-2 Tracking_box bg-red-500/60 border-white">
                                </div>
                                <div className="text-white text-center  p-2 border-white">
                                </div>
                                <div className="text-white text-center  p-2 border-white">
                                </div>
                            </div>
                            </Link>
                            <Link className=" col-span-5 mb-5 popup_item2 absolute" href={'/Account/Tracking'}>
                            <div className="grid lg:grid-cols-5 grid-cols-4 bg-white/20 rounded-t-xl p-2 items-center">
                                <div className="w-full flex justify-center">
                                    <div className="w-1/2">
                                        <Image src={DishImg} />
                                    </div>
                                </div>
                                <h1 className="text-[#F7BC06] text-center text-[20px]">Food Name</h1>
                                <div className="text-[#F7BC06] text-center text-[14px] ">
                                    <h1>Case: 1</h1>
                                    <h1>Unit: 0</h1>
                                </div>
                                <h1 className="text-[#F7BC06] text-center text-[20px]">$35.60</h1>
                                <div className="flex flex-row items-center justify-between col-span-2 lg:col-span-1">
                                    <div className="flex w-3/4 bg-[#F7BC06] rounded-full py-2 h-fit px-6 flex-row items-center">
                                        <h1 className="lg:text-[24px] text-center w-full font-bold">In Progress</h1>
                                    </div>
                                        <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 bg-white/20">
                                <div className="text-white text-center p-2 Tracking_box bg-red-500/60 border-white">
                                </div>
                                <div className="text-white text-center  p-2 Tracking_box bg-red-500/60 border-white">
                                </div>
                                <div className="text-white text-center  p-2 border-white">
                                </div>
                                <div className="text-white text-center  p-2 border-white">
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    
              </div>
            </div>
          ))}
        </div>
      </div>
            <Footer />
        </div>
    )
}