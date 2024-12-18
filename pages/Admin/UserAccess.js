import Link from "next/link";
import Logo1 from "../../img/Logo1.png";
import Logo2 from "../../img/Logo2.png";
import Image from "next/legacy/image";
import AccountImg from "../../img/account.png"

export default function UserAccess() {
    return(
        <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover flex flex-row">
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
            <div className=" w-[80%] pb-10">
            <div className="flex justify-between items-center p-5 pb-2">
                    <h1 className="text-white text-[30px]">User Access</h1>
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
                            <h1 className="text-white text-[30px]">Master Access</h1>
                            <button onClick={() => setShowAddCategory(true)} class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 overflow-hidden relative hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-6 py-2 font-bold  w-fit flex items-center justify-center rounded-full  group">
                              <span class="bg-yellow-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                              Add Master
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
                                    Client Name
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Email
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Phone
                                    </th>
                                    <th className="border border-white border-collapse w-[8%]">
                                    Profile
                                    </th>
                                    <th className="border border-white border-collapse w-[5%]">
                                    Role
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
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    abcd@gmail.com
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="w-full flex justify-center">
                                            <div className="w-1/2">
                                                <Image src={AccountImg} />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    Master
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    <div className=" bg-green-500/20 text-green-400 p-1 rounded-full">
                                            Active
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
                                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z" fill="#fff"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    abcd@gmail.com
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="w-full flex justify-center">
                                            <div className="w-1/2">
                                                <Image src={AccountImg} />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    Master
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    <div className=" bg-green-500/20 text-green-400 p-1 rounded-full">
                                            Active
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
                                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z" fill="#fff"/>
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
                    <div className="w-[90%] bg-white/20 p-5 rounded-lg">
                        <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-3 mb-5">
                            <h1 className="text-white text-[30px]">Manager Access</h1>
                            <button onClick={() => setShowAddCategory(true)} class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 overflow-hidden relative hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-6 py-2 font-bold  w-fit flex items-center justify-center rounded-full  group">
                              <span class="bg-yellow-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                              Add Manager
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
                                    Client Name
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Email
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Phone
                                    </th>
                                    <th className="border border-white border-collapse w-[8%]">
                                    Profile
                                    </th>
                                    <th className="border border-white border-collapse w-[5%]">
                                    Role
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
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    abcd@gmail.com
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="w-full flex justify-center">
                                            <div className="w-1/2">
                                                <Image src={AccountImg} />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    Manager
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    <div className=" bg-green-500/20 text-green-400 p-1 rounded-full">
                                            Active
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
                                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z" fill="#fff"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    abcd@gmail.com
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="w-full flex justify-center">
                                            <div className="w-1/2">
                                                <Image src={AccountImg} />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    Manager
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    <div className=" bg-green-500/20 text-green-400 p-1 rounded-full">
                                            Active
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
                                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z" fill="#fff"/>
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
                    <div className="w-[90%] bg-white/20 p-5 rounded-lg">
                        <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-3 mb-5">
                            <h1 className="text-white text-[30px]">Operations Access</h1>
                            <button onClick={() => setShowAddCategory(true)} class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 overflow-hidden relative hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-6 py-2 font-bold  w-fit flex items-center justify-center rounded-full  group">
                              <span class="bg-yellow-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                              Add Operations
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
                                    Client Name
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Email
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Phone
                                    </th>
                                    <th className="border border-white border-collapse w-[8%]">
                                    Profile
                                    </th>
                                    <th className="border border-white border-collapse w-[5%]">
                                    Role
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
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    abcd@gmail.com
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="w-full flex justify-center">
                                            <div className="w-1/2">
                                                <Image src={AccountImg} />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    Operations
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    <div className=" bg-green-500/20 text-green-400 p-1 rounded-full">
                                            Active
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
                                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z" fill="#fff"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    abcd@gmail.com
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="w-full flex justify-center">
                                            <div className="w-1/2">
                                                <Image src={AccountImg} />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    Operations
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    <div className=" bg-green-500/20 text-green-400 p-1 rounded-full">
                                            Active
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
                                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z" fill="#fff"/>
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
                    <div className="w-[90%] bg-white/20 p-5 rounded-lg">
                        <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-3 mb-5">
                            <h1 className="text-white text-[30px]">Loginstics Access</h1>
                            <button onClick={() => setShowAddCategory(true)} class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 overflow-hidden relative hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 px-6 py-2 font-bold  w-fit flex items-center justify-center rounded-full  group">
                              <span class="bg-yellow-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                              Add Loginstics
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
                                    Client Name
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Email
                                    </th>
                                    <th className="border border-white border-collapse w-[10%]">
                                    Phone
                                    </th>
                                    <th className="border border-white border-collapse w-[8%]">
                                    Profile
                                    </th>
                                    <th className="border border-white border-collapse w-[5%]">
                                    Role
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
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    abcd@gmail.com
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="w-full flex justify-center">
                                            <div className="w-1/2">
                                                <Image src={AccountImg} />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    Logistics
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    <div className=" bg-green-500/20 text-green-400 p-1 rounded-full">
                                            Active
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
                                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z" fill="#fff"/>
                                        </svg>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                    <th className="border border-white border-collapse w-[3%] p-1">
                                        1
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    Anuran Das
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    abcd@gmail.com
                                    </th>
                                    <th className="border border-white border-collapse w-[10%] p-1">
                                    1234567890
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                        <div className="w-full flex justify-center">
                                            <div className="w-1/2">
                                                <Image src={AccountImg} />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    Loginstics
                                    </th>
                                    <th className="border border-white border-collapse w-[5%] p-1">
                                    <div className=" bg-green-500/20 text-green-400 p-1 rounded-full">
                                            Active
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
                                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0247 3.46243H11.2059V2.75363C11.2059 2.16021 11.0054 1.66019 10.6043 1.25359C10.2032 0.846989 9.70042 0.643687 9.09601 0.643687H6.29374C5.68933 0.643687 5.18658 0.846989 4.78547 1.25359C4.38436 1.66019 4.1838 2.16021 4.1838 2.75363V3.46243H1.36506C1.15626 3.46243 0.985928 3.52562 0.854057 3.652C0.722186 3.77838 0.65625 3.94596 0.65625 4.15476C0.65625 4.37454 0.722186 4.54762 0.854057 4.674C0.985928 4.80038 1.15626 4.86357 1.36506 4.86357H2.07387V14.0121C2.07387 14.6056 2.27442 15.1056 2.67553 15.5122C3.07664 15.9188 3.5794 16.1221 4.1838 16.1221H11.2059C11.8104 16.1221 12.3131 15.9188 12.7142 15.5122C13.1153 15.1056 13.3159 14.6056 13.3159 14.0121V4.86357H14.0247C14.2335 4.86357 14.4038 4.80038 14.5357 4.674C14.6676 4.54762 14.7335 4.37454 14.7335 4.15476C14.7335 3.94596 14.6676 3.77838 14.5357 3.652C14.4038 3.52562 14.2335 3.46243 14.0247 3.46243ZM5.58494 2.75363C5.58494 2.54483 5.64812 2.3745 5.7745 2.24263C5.90088 2.11075 6.07396 2.04482 6.29374 2.04482H9.09601C9.31579 2.04482 9.48887 2.11075 9.61525 2.24263C9.74163 2.3745 9.80482 2.54483 9.80482 2.75363V3.46243H5.58494V2.75363ZM11.9148 14.0121C11.9148 14.2209 11.8516 14.3885 11.7252 14.5149C11.5988 14.6413 11.4257 14.7045 11.2059 14.7045H4.1838C3.96402 14.7045 3.79094 14.6413 3.66456 14.5149C3.53819 14.3885 3.475 14.2209 3.475 14.0121V4.86357H11.9148V14.0121ZM6.29374 6.97351C6.07396 6.97351 5.90088 7.03669 5.7745 7.16307C5.64812 7.28945 5.58494 7.46253 5.58494 7.68231V11.9022C5.58494 12.111 5.64812 12.2786 5.7745 12.405C5.90088 12.5313 6.07396 12.5945 6.29374 12.5945C6.50254 12.5945 6.67013 12.5313 6.7965 12.405C6.92288 12.2786 6.98607 12.111 6.98607 11.9022V7.68231C6.98607 7.46253 6.92288 7.28945 6.7965 7.16307C6.67013 7.03669 6.50254 6.97351 6.29374 6.97351ZM9.09601 6.97351C8.88721 6.97351 8.71962 7.03669 8.59325 7.16307C8.46687 7.28945 8.40368 7.46253 8.40368 7.68231V11.9022C8.40368 12.111 8.46687 12.2786 8.59325 12.405C8.71962 12.5313 8.88721 12.5945 9.09601 12.5945C9.31579 12.5945 9.48887 12.5313 9.61525 12.405C9.74163 12.2786 9.80482 12.111 9.80482 11.9022V7.68231C9.80482 7.46253 9.74163 7.28945 9.61525 7.16307C9.48887 7.03669 9.31579 6.97351 9.09601 6.97351Z" fill="#fff"/>
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