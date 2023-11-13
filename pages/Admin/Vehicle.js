import Link from "next/link";
import Logo1 from "../../img/Logo1.png";
import Logo2 from "../../img/Logo2.png";
import Image from "next/legacy/image";

export default function Vehicle() {
    return(
        <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover flex flex-row min-h-[100vh]">
            <div className="fixed w-[20%] flex flex-col items-center left-0 top-0 bg-white/20 h-full rounded-r-[40px]">
                <Link href={"/"} className="my-5 ml-6 flex w-full ">
                    <Image src={Logo1} alt="logo" />
                    <Image className="!ml-[-10px]" src={Logo2} alt="logo" />
                </Link>
                <div className="w-[70%] mt-10 flex flex-col gap-8">
                    <Link href={'/Admin/Dashboard'} className="flex flex-row gap-8 text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
                        </svg>
                        <h1 className="text-white/60 ">Dashboard</h1>
                    </Link>
                    <Link href={'/Admin/Orders'} className="flex flex-row gap-8 text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
                        </svg>
                        <h1 className="text-white/60 ">Orders</h1>
                    </Link>
                    <Link href={'/Admin/Inventory'} className="flex flex-row gap-8 text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
                        </svg>
                        <h1 className="text-white/60 ">Inventory</h1>
                    </Link>
                    <Link href={'/Admin/Users'} className="flex flex-row gap-8 text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
                        </svg>
                        <h1 className="text-white/60 ">Users</h1>
                    </Link>
                    <Link href={'/Admin/Vehicle'} className="flex flex-row gap-8 text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
                        </svg>
                        <h1 className="text-white/60 ">Vehicle</h1>
                    </Link>
                    
                    <Link href={'/Admin/Payments'} className="flex flex-row gap-8 text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
                        </svg>
                        <h1 className="text-white/60 ">Payments</h1>
                    </Link>
                    <Link href={'/Admin/Communications'} className="flex flex-row gap-8 text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
                        </svg>
                        <h1 className="text-white/60 ">Communications</h1>
                    </Link>
                    <Link href={'/Admin/UserAccess'} className="flex flex-row gap-8 text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
                        </svg>
                        <h1 className="text-white/60 ">User Access</h1>
                    </Link>                    
                </div>
            </div>
            <div className="w-[20%]">

            </div>
            <div className=" w-[80%]">
            <div className="flex justify-between items-center p-5 pb-2">
            <h1 className="text-white text-[30px] mb-5">Vehicle</h1>
                    <Link href={"/Login"} className="mr-2">
                    <svg
                        width="31"
                        height="30"
                        viewBox="0 0 31 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_319)">
                        <path
                            d="M15.0979 29.2402C22.9724 29.2402 29.356 22.8566 29.356 14.982C29.356 7.10747 22.9724 0.723877 15.0979 0.723877C7.22331 0.723877 0.839722 7.10747 0.839722 14.982C0.839722 22.8566 7.22331 29.2402 15.0979 29.2402Z"
                            stroke="white"
                            stroke-width="1.44753"
                            stroke-miterlimit="10"
                        />
                        <path
                            d="M15.0978 13.8963C17.3163 13.8963 19.1147 12.0979 19.1147 9.87944C19.1147 7.66097 17.3163 5.86255 15.0978 5.86255C12.8794 5.86255 11.0809 7.66097 11.0809 9.87944C11.0809 12.0979 12.8794 13.8963 15.0978 13.8963Z"
                            stroke="white"
                            stroke-width="1.44753"
                            stroke-miterlimit="10"
                        />
                        <path
                            d="M4.71191 24.7891C5.9785 19.8313 10.1401 16.1763 15.0979 16.1763C20.0557 16.1763 24.2173 19.8313 25.4839 24.7529"
                            stroke="white"
                            stroke-width="1.44753"
                            stroke-miterlimit="10"
                        />
                        </g>
                        <defs>
                        <clipPath id="clip0_1_319">
                            <rect
                            width="30"
                            height="30"
                            fill="white"
                            transform="translate(0.115967)"
                            />
                        </clipPath>
                        </defs>
                    </svg>
                    </Link>
                </div>
                <hr class="h-px mb-8 bg-gray-200 border-0"></hr>
                <div className="w-full flex flex-col items-center gap-10 justify-center">
                    <div className="w-[90%] bg-white/20 p-5 rounded-lg">
                        <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-3 mb-5">
                            <h1 className="text-white text-[30px]">Vehicle</h1>
                            <button onClick={() => setShowAddCategory(true)} class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 overflow-hidden relative hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-6 py-2 font-bold  w-fit flex items-center justify-center rounded-full  group">
                              <span class="bg-yellow-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                              Add Vehicle
                            </button>
                          </div>
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
                        <table className="w-full">
                            <thead className="w-full text-[#F7BC06]">
                                <tr>
                                    <th className="border border-white border-collapse w-[3%]">
                                        S.N.
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                        N.O.
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Owner
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Phone
                                    </th>
                                    <th className="border border-white border-collapse w-[5%]">
                                    Expences
                                    </th>
                                    <th className="border border-white border-collapse w-[8%]">
                                    Delivery
                                    </th>
                                    <th className="border border-white border-collapse w-[5%]">
                                    Status
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" w-full text-white">
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        #1234
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    $100
                                    </th>
                                    <th className="border border-white border-collapse w-[8%] p-1">
                                    <div className="bg-[#F7BC06] p-1 rounded-full">
                                            Loading
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="bg-[#F7BC06] p-1 rounded-full">
                                        standing
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        <div className="flex w-fill justify-center gap-5">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z" fill="white"/>
                                        </svg>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9983 0C16.3904 0 20.8764 3.87976 21.8169 9C20.8764 14.1202 16.3904 18 10.9983 18C5.60617 18 1.1202 14.1202 0.179688 9C1.1202 3.87976 5.60617 0 10.9983 0ZM10.9983 16C15.2339 16 18.8583 13.052 19.7757 9C18.8583 4.94803 15.2339 2 10.9983 2C6.76265 2 3.13827 4.94803 2.22083 9C3.13827 13.052 6.76265 16 10.9983 16ZM10.9983 13.5C8.51303 13.5 6.49831 11.4853 6.49831 9C6.49831 6.51472 8.51303 4.5 10.9983 4.5C13.4835 4.5 15.4983 6.51472 15.4983 9C15.4983 11.4853 13.4835 13.5 10.9983 13.5ZM10.9983 11.5C12.379 11.5 13.4983 10.3807 13.4983 9C13.4983 7.6193 12.379 6.5 10.9983 6.5C9.61765 6.5 8.49831 7.6193 8.49831 9C8.49831 10.3807 9.61765 11.5 10.9983 11.5Z" fill="white"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        #1234
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    $100
                                    </th>
                                    <th className="border border-white border-collapse w-[8%] p-1">
                                    <div className="bg-[#F7BC06] p-1 rounded-full">
                                            Loading
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="bg-[#F7BC06] p-1 rounded-full">
                                        standing
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        <div className="flex w-fill justify-center gap-5">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z" fill="white"/>
                                        </svg>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9983 0C16.3904 0 20.8764 3.87976 21.8169 9C20.8764 14.1202 16.3904 18 10.9983 18C5.60617 18 1.1202 14.1202 0.179688 9C1.1202 3.87976 5.60617 0 10.9983 0ZM10.9983 16C15.2339 16 18.8583 13.052 19.7757 9C18.8583 4.94803 15.2339 2 10.9983 2C6.76265 2 3.13827 4.94803 2.22083 9C3.13827 13.052 6.76265 16 10.9983 16ZM10.9983 13.5C8.51303 13.5 6.49831 11.4853 6.49831 9C6.49831 6.51472 8.51303 4.5 10.9983 4.5C13.4835 4.5 15.4983 6.51472 15.4983 9C15.4983 11.4853 13.4835 13.5 10.9983 13.5ZM10.9983 11.5C12.379 11.5 13.4983 10.3807 13.4983 9C13.4983 7.6193 12.379 6.5 10.9983 6.5C9.61765 6.5 8.49831 7.6193 8.49831 9C8.49831 10.3807 9.61765 11.5 10.9983 11.5Z" fill="white"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        #1234
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    $100
                                    </th>
                                    <th className="border border-white border-collapse w-[8%] p-1">
                                    <div className="bg-[#F7BC06] p-1 rounded-full">
                                            Loading
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="bg-[#F7BC06] p-1 rounded-full">
                                        standing
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        <div className="flex w-fill justify-center gap-5">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z" fill="white"/>
                                        </svg>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9983 0C16.3904 0 20.8764 3.87976 21.8169 9C20.8764 14.1202 16.3904 18 10.9983 18C5.60617 18 1.1202 14.1202 0.179688 9C1.1202 3.87976 5.60617 0 10.9983 0ZM10.9983 16C15.2339 16 18.8583 13.052 19.7757 9C18.8583 4.94803 15.2339 2 10.9983 2C6.76265 2 3.13827 4.94803 2.22083 9C3.13827 13.052 6.76265 16 10.9983 16ZM10.9983 13.5C8.51303 13.5 6.49831 11.4853 6.49831 9C6.49831 6.51472 8.51303 4.5 10.9983 4.5C13.4835 4.5 15.4983 6.51472 15.4983 9C15.4983 11.4853 13.4835 13.5 10.9983 13.5ZM10.9983 11.5C12.379 11.5 13.4983 10.3807 13.4983 9C13.4983 7.6193 12.379 6.5 10.9983 6.5C9.61765 6.5 8.49831 7.6193 8.49831 9C8.49831 10.3807 9.61765 11.5 10.9983 11.5Z" fill="white"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        #1234
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    $100
                                    </th>
                                    <th className="border border-white border-collapse w-[8%] p-1">
                                    <div className="bg-[#F7BC06] p-1 rounded-full">
                                            Loading
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="bg-[#F7BC06] p-1 rounded-full">
                                        standing
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        <div className="flex w-fill justify-center gap-5">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z" fill="white"/>
                                        </svg>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9983 0C16.3904 0 20.8764 3.87976 21.8169 9C20.8764 14.1202 16.3904 18 10.9983 18C5.60617 18 1.1202 14.1202 0.179688 9C1.1202 3.87976 5.60617 0 10.9983 0ZM10.9983 16C15.2339 16 18.8583 13.052 19.7757 9C18.8583 4.94803 15.2339 2 10.9983 2C6.76265 2 3.13827 4.94803 2.22083 9C3.13827 13.052 6.76265 16 10.9983 16ZM10.9983 13.5C8.51303 13.5 6.49831 11.4853 6.49831 9C6.49831 6.51472 8.51303 4.5 10.9983 4.5C13.4835 4.5 15.4983 6.51472 15.4983 9C15.4983 11.4853 13.4835 13.5 10.9983 13.5ZM10.9983 11.5C12.379 11.5 13.4983 10.3807 13.4983 9C13.4983 7.6193 12.379 6.5 10.9983 6.5C9.61765 6.5 8.49831 7.6193 8.49831 9C8.49831 10.3807 9.61765 11.5 10.9983 11.5Z" fill="white"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        #1234
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    $100
                                    </th>
                                    <th className="border border-white border-collapse w-[8%] p-1">
                                    <div className="bg-[#F7BC06] p-1 rounded-full">
                                            Loading
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="bg-[#F7BC06] p-1 rounded-full">
                                        standing
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        <div className="flex w-fill justify-center gap-5">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z" fill="white"/>
                                        </svg>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9983 0C16.3904 0 20.8764 3.87976 21.8169 9C20.8764 14.1202 16.3904 18 10.9983 18C5.60617 18 1.1202 14.1202 0.179688 9C1.1202 3.87976 5.60617 0 10.9983 0ZM10.9983 16C15.2339 16 18.8583 13.052 19.7757 9C18.8583 4.94803 15.2339 2 10.9983 2C6.76265 2 3.13827 4.94803 2.22083 9C3.13827 13.052 6.76265 16 10.9983 16ZM10.9983 13.5C8.51303 13.5 6.49831 11.4853 6.49831 9C6.49831 6.51472 8.51303 4.5 10.9983 4.5C13.4835 4.5 15.4983 6.51472 15.4983 9C15.4983 11.4853 13.4835 13.5 10.9983 13.5ZM10.9983 11.5C12.379 11.5 13.4983 10.3807 13.4983 9C13.4983 7.6193 12.379 6.5 10.9983 6.5C9.61765 6.5 8.49831 7.6193 8.49831 9C8.49831 10.3807 9.61765 11.5 10.9983 11.5Z" fill="white"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        #1234
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    $100
                                    </th>
                                    <th className="border border-white border-collapse w-[8%] p-1">
                                    <div className="bg-[#F7BC06] p-1 rounded-full">
                                            Loading
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="bg-[#F7BC06] p-1 rounded-full">
                                        standing
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        <div className="flex w-fill justify-center gap-5">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z" fill="white"/>
                                        </svg>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9983 0C16.3904 0 20.8764 3.87976 21.8169 9C20.8764 14.1202 16.3904 18 10.9983 18C5.60617 18 1.1202 14.1202 0.179688 9C1.1202 3.87976 5.60617 0 10.9983 0ZM10.9983 16C15.2339 16 18.8583 13.052 19.7757 9C18.8583 4.94803 15.2339 2 10.9983 2C6.76265 2 3.13827 4.94803 2.22083 9C3.13827 13.052 6.76265 16 10.9983 16ZM10.9983 13.5C8.51303 13.5 6.49831 11.4853 6.49831 9C6.49831 6.51472 8.51303 4.5 10.9983 4.5C13.4835 4.5 15.4983 6.51472 15.4983 9C15.4983 11.4853 13.4835 13.5 10.9983 13.5ZM10.9983 11.5C12.379 11.5 13.4983 10.3807 13.4983 9C13.4983 7.6193 12.379 6.5 10.9983 6.5C9.61765 6.5 8.49831 7.6193 8.49831 9C8.49831 10.3807 9.61765 11.5 10.9983 11.5Z" fill="white"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        #1234
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    $100
                                    </th>
                                    <th className="border border-white border-collapse w-[8%] p-1">
                                    <div className="bg-[#F7BC06] p-1 rounded-full">
                                            Loading
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="bg-[#F7BC06] p-1 rounded-full">
                                        standing
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                        <div className="flex w-fill justify-center gap-5">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7279 7.57629L11.3137 6.16207L2 15.4758V16.89H3.41421L12.7279 7.57629ZM14.1421 6.16207L15.5563 4.74786L14.1421 3.33365L12.7279 4.74786L14.1421 6.16207ZM4.24264 18.89H0V14.6474L13.435 1.21233C13.8256 0.821801 14.4587 0.821801 14.8492 1.21233L17.6777 4.04075C18.0682 4.43128 18.0682 5.06444 17.6777 5.45497L4.24264 18.89Z" fill="white"/>
                                        </svg>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9983 0C16.3904 0 20.8764 3.87976 21.8169 9C20.8764 14.1202 16.3904 18 10.9983 18C5.60617 18 1.1202 14.1202 0.179688 9C1.1202 3.87976 5.60617 0 10.9983 0ZM10.9983 16C15.2339 16 18.8583 13.052 19.7757 9C18.8583 4.94803 15.2339 2 10.9983 2C6.76265 2 3.13827 4.94803 2.22083 9C3.13827 13.052 6.76265 16 10.9983 16ZM10.9983 13.5C8.51303 13.5 6.49831 11.4853 6.49831 9C6.49831 6.51472 8.51303 4.5 10.9983 4.5C13.4835 4.5 15.4983 6.51472 15.4983 9C15.4983 11.4853 13.4835 13.5 10.9983 13.5ZM10.9983 11.5C12.379 11.5 13.4983 10.3807 13.4983 9C13.4983 7.6193 12.379 6.5 10.9983 6.5C9.61765 6.5 8.49831 7.6193 8.49831 9C8.49831 10.3807 9.61765 11.5 10.9983 11.5Z" fill="white"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
 
                               
                            </tbody>
                        </table>
                        <div className="flex gap-1 mt-3">
                            <div className="bg-white rounded-l-md">
                            <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>

                            </div>
                            <div className="bg-white  w-[30px] h-[30px] text-[#F7BC06] flex justify-center items-center">1</div>
                            <div className="bg-white w-[30px] h-[30px] text-[#F7BC06] flex justify-center items-center">2</div>
                            <div className="bg-white rounded-r-md">
                            <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#F7BC06" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill="" /></svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}