import Link from "next/link";
import Logo1 from "../../img/Logo1.png";
import Logo2 from "../../img/Logo2.png";
import Image from "next/legacy/image";

export default function Dashboard() {
    return(
        <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh] flex flex-row">
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
                    <Link href={'/Admin/Refunds'} className="flex flex-row gap-8 text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
                        </svg>
                        <h1 className="text-white/60 ">Refunds</h1>
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
                    <h1 className="text-white text-[30px]">Dashboard</h1>
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
                <div className="grid grid-cols-3 gap-5 p-5">
                    <div className="bg-white/20 rounded-[40px] flex flex-col p-5 pl-8">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 0.875C28.0356 0.875 28.875 1.71447 28.875 2.75V4.625H38.25V15.875H34.4649L39.6133 30.0198C39.9437 30.8652 40.125 31.7855 40.125 32.7481C40.125 36.8904 36.7671 40.2481 32.625 40.2481C29.1309 40.2481 26.1951 37.8588 25.3618 34.625H17.3888C16.5561 37.8597 13.6197 40.25 10.125 40.25C6.47908 40.25 3.44077 37.6484 2.76514 34.2005C1.56742 33.5742 0.75 32.3201 0.75 30.875V12.125C0.75 11.0895 1.58947 10.25 2.625 10.25H15.75C16.7856 10.25 17.625 11.0895 17.625 12.125V21.5C17.625 22.5356 18.4644 23.375 19.5 23.375H23.25C24.2856 23.375 25.125 22.5356 25.125 21.5V4.625H19.5V0.875H27ZM10.125 29C8.05393 29 6.375 30.6789 6.375 32.75C6.375 34.8211 8.05393 36.5 10.125 36.5C12.1961 36.5 13.875 34.8211 13.875 32.75C13.875 30.6789 12.1961 29 10.125 29ZM32.625 28.9981C30.5539 28.9981 28.875 30.677 28.875 32.7481C28.875 34.8193 30.5539 36.4981 32.625 36.4981C34.6961 36.4981 36.375 34.8193 36.375 32.7481C36.375 32.2976 36.2955 31.8654 36.1498 31.4653L36.1191 31.3839C35.5734 29.9874 34.2148 28.9981 32.625 28.9981ZM30.4744 15.875H28.875V21.5C28.875 24.6067 26.3567 27.125 23.25 27.125H19.5C16.3933 27.125 13.875 24.6067 13.875 21.5H4.5V27.7891C5.87426 26.2321 7.88496 25.25 10.125 25.25C13.6197 25.25 16.5561 27.6402 17.3888 30.875H25.3609C26.1928 27.6393 29.1296 25.2481 32.625 25.2481C33.069 25.2481 33.504 25.2868 33.9268 25.3608L30.4744 15.875ZM13.875 14H4.5V17.75H13.875V14ZM34.5 8.375H28.875V12.125H34.5V8.375Z" fill="white" fill-opacity="0.5"/>
                        </svg>
                        <div className="flex justify-between items-end">
                            <h1 className="text-[20px] text-white mt-5">Shipments</h1>
                            <div className="border-[1px] border-white h-fit p-1 rounded-lg">
                                <svg height="16px" version="1.1" fill="#fff" viewBox="0 0 16 16" width="16px"  xmlns="http://www.w3.org/2000/svg"><path d="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"/></svg>
                            </div>
                        </div>
                            <h1 className="text-[30px] font-bold text-white">500</h1>
                    </div>
                    <div className="bg-white/20 rounded-[40px] flex flex-col p-5 pl-8">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 0.875C28.0356 0.875 28.875 1.71447 28.875 2.75V4.625H38.25V15.875H34.4649L39.6133 30.0198C39.9437 30.8652 40.125 31.7855 40.125 32.7481C40.125 36.8904 36.7671 40.2481 32.625 40.2481C29.1309 40.2481 26.1951 37.8588 25.3618 34.625H17.3888C16.5561 37.8597 13.6197 40.25 10.125 40.25C6.47908 40.25 3.44077 37.6484 2.76514 34.2005C1.56742 33.5742 0.75 32.3201 0.75 30.875V12.125C0.75 11.0895 1.58947 10.25 2.625 10.25H15.75C16.7856 10.25 17.625 11.0895 17.625 12.125V21.5C17.625 22.5356 18.4644 23.375 19.5 23.375H23.25C24.2856 23.375 25.125 22.5356 25.125 21.5V4.625H19.5V0.875H27ZM10.125 29C8.05393 29 6.375 30.6789 6.375 32.75C6.375 34.8211 8.05393 36.5 10.125 36.5C12.1961 36.5 13.875 34.8211 13.875 32.75C13.875 30.6789 12.1961 29 10.125 29ZM32.625 28.9981C30.5539 28.9981 28.875 30.677 28.875 32.7481C28.875 34.8193 30.5539 36.4981 32.625 36.4981C34.6961 36.4981 36.375 34.8193 36.375 32.7481C36.375 32.2976 36.2955 31.8654 36.1498 31.4653L36.1191 31.3839C35.5734 29.9874 34.2148 28.9981 32.625 28.9981ZM30.4744 15.875H28.875V21.5C28.875 24.6067 26.3567 27.125 23.25 27.125H19.5C16.3933 27.125 13.875 24.6067 13.875 21.5H4.5V27.7891C5.87426 26.2321 7.88496 25.25 10.125 25.25C13.6197 25.25 16.5561 27.6402 17.3888 30.875H25.3609C26.1928 27.6393 29.1296 25.2481 32.625 25.2481C33.069 25.2481 33.504 25.2868 33.9268 25.3608L30.4744 15.875ZM13.875 14H4.5V17.75H13.875V14ZM34.5 8.375H28.875V12.125H34.5V8.375Z" fill="white" fill-opacity="0.5"/>
                        </svg>
                        <div className="flex justify-between items-end">
                            <h1 className="text-[20px] text-white mt-5">Shipments</h1>
                            <div className="border-[1px] border-white h-fit p-1 rounded-lg">
                                <svg height="16px" version="1.1" fill="#fff" viewBox="0 0 16 16" width="16px"  xmlns="http://www.w3.org/2000/svg"><path d="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"/></svg>
                            </div>
                        </div>
                            <h1 className="text-[30px] font-bold text-white">500</h1>
                    </div>
                    <div className="bg-white/20 rounded-[40px] flex flex-col p-5 pl-8">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 0.875C28.0356 0.875 28.875 1.71447 28.875 2.75V4.625H38.25V15.875H34.4649L39.6133 30.0198C39.9437 30.8652 40.125 31.7855 40.125 32.7481C40.125 36.8904 36.7671 40.2481 32.625 40.2481C29.1309 40.2481 26.1951 37.8588 25.3618 34.625H17.3888C16.5561 37.8597 13.6197 40.25 10.125 40.25C6.47908 40.25 3.44077 37.6484 2.76514 34.2005C1.56742 33.5742 0.75 32.3201 0.75 30.875V12.125C0.75 11.0895 1.58947 10.25 2.625 10.25H15.75C16.7856 10.25 17.625 11.0895 17.625 12.125V21.5C17.625 22.5356 18.4644 23.375 19.5 23.375H23.25C24.2856 23.375 25.125 22.5356 25.125 21.5V4.625H19.5V0.875H27ZM10.125 29C8.05393 29 6.375 30.6789 6.375 32.75C6.375 34.8211 8.05393 36.5 10.125 36.5C12.1961 36.5 13.875 34.8211 13.875 32.75C13.875 30.6789 12.1961 29 10.125 29ZM32.625 28.9981C30.5539 28.9981 28.875 30.677 28.875 32.7481C28.875 34.8193 30.5539 36.4981 32.625 36.4981C34.6961 36.4981 36.375 34.8193 36.375 32.7481C36.375 32.2976 36.2955 31.8654 36.1498 31.4653L36.1191 31.3839C35.5734 29.9874 34.2148 28.9981 32.625 28.9981ZM30.4744 15.875H28.875V21.5C28.875 24.6067 26.3567 27.125 23.25 27.125H19.5C16.3933 27.125 13.875 24.6067 13.875 21.5H4.5V27.7891C5.87426 26.2321 7.88496 25.25 10.125 25.25C13.6197 25.25 16.5561 27.6402 17.3888 30.875H25.3609C26.1928 27.6393 29.1296 25.2481 32.625 25.2481C33.069 25.2481 33.504 25.2868 33.9268 25.3608L30.4744 15.875ZM13.875 14H4.5V17.75H13.875V14ZM34.5 8.375H28.875V12.125H34.5V8.375Z" fill="white" fill-opacity="0.5"/>
                        </svg>
                        <div className="flex justify-between items-end">
                            <h1 className="text-[20px] text-white mt-5">Shipments</h1>
                            <div className="border-[1px] border-white h-fit p-1 rounded-lg">
                                <svg height="16px" version="1.1" fill="#fff" viewBox="0 0 16 16" width="16px"  xmlns="http://www.w3.org/2000/svg"><path d="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"/></svg>
                            </div>
                        </div>
                            <h1 className="text-[30px] font-bold text-white">500</h1>
                    </div>
                    <div className="bg-white/20 rounded-[40px] flex flex-col p-5 pl-8">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 0.875C28.0356 0.875 28.875 1.71447 28.875 2.75V4.625H38.25V15.875H34.4649L39.6133 30.0198C39.9437 30.8652 40.125 31.7855 40.125 32.7481C40.125 36.8904 36.7671 40.2481 32.625 40.2481C29.1309 40.2481 26.1951 37.8588 25.3618 34.625H17.3888C16.5561 37.8597 13.6197 40.25 10.125 40.25C6.47908 40.25 3.44077 37.6484 2.76514 34.2005C1.56742 33.5742 0.75 32.3201 0.75 30.875V12.125C0.75 11.0895 1.58947 10.25 2.625 10.25H15.75C16.7856 10.25 17.625 11.0895 17.625 12.125V21.5C17.625 22.5356 18.4644 23.375 19.5 23.375H23.25C24.2856 23.375 25.125 22.5356 25.125 21.5V4.625H19.5V0.875H27ZM10.125 29C8.05393 29 6.375 30.6789 6.375 32.75C6.375 34.8211 8.05393 36.5 10.125 36.5C12.1961 36.5 13.875 34.8211 13.875 32.75C13.875 30.6789 12.1961 29 10.125 29ZM32.625 28.9981C30.5539 28.9981 28.875 30.677 28.875 32.7481C28.875 34.8193 30.5539 36.4981 32.625 36.4981C34.6961 36.4981 36.375 34.8193 36.375 32.7481C36.375 32.2976 36.2955 31.8654 36.1498 31.4653L36.1191 31.3839C35.5734 29.9874 34.2148 28.9981 32.625 28.9981ZM30.4744 15.875H28.875V21.5C28.875 24.6067 26.3567 27.125 23.25 27.125H19.5C16.3933 27.125 13.875 24.6067 13.875 21.5H4.5V27.7891C5.87426 26.2321 7.88496 25.25 10.125 25.25C13.6197 25.25 16.5561 27.6402 17.3888 30.875H25.3609C26.1928 27.6393 29.1296 25.2481 32.625 25.2481C33.069 25.2481 33.504 25.2868 33.9268 25.3608L30.4744 15.875ZM13.875 14H4.5V17.75H13.875V14ZM34.5 8.375H28.875V12.125H34.5V8.375Z" fill="white" fill-opacity="0.5"/>
                        </svg>
                        <div className="flex justify-between items-end">
                            <h1 className="text-[20px] text-white mt-5">Shipments</h1>
                            <div className="border-[1px] border-white h-fit p-1 rounded-lg">
                                <svg height="16px" version="1.1" fill="#fff" viewBox="0 0 16 16" width="16px"  xmlns="http://www.w3.org/2000/svg"><path d="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"/></svg>
                            </div>
                        </div>
                            <h1 className="text-[30px] font-bold text-white">500</h1>
                    </div>
                    <div className="bg-white/20 rounded-[40px] flex flex-col p-5 pl-8">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 0.875C28.0356 0.875 28.875 1.71447 28.875 2.75V4.625H38.25V15.875H34.4649L39.6133 30.0198C39.9437 30.8652 40.125 31.7855 40.125 32.7481C40.125 36.8904 36.7671 40.2481 32.625 40.2481C29.1309 40.2481 26.1951 37.8588 25.3618 34.625H17.3888C16.5561 37.8597 13.6197 40.25 10.125 40.25C6.47908 40.25 3.44077 37.6484 2.76514 34.2005C1.56742 33.5742 0.75 32.3201 0.75 30.875V12.125C0.75 11.0895 1.58947 10.25 2.625 10.25H15.75C16.7856 10.25 17.625 11.0895 17.625 12.125V21.5C17.625 22.5356 18.4644 23.375 19.5 23.375H23.25C24.2856 23.375 25.125 22.5356 25.125 21.5V4.625H19.5V0.875H27ZM10.125 29C8.05393 29 6.375 30.6789 6.375 32.75C6.375 34.8211 8.05393 36.5 10.125 36.5C12.1961 36.5 13.875 34.8211 13.875 32.75C13.875 30.6789 12.1961 29 10.125 29ZM32.625 28.9981C30.5539 28.9981 28.875 30.677 28.875 32.7481C28.875 34.8193 30.5539 36.4981 32.625 36.4981C34.6961 36.4981 36.375 34.8193 36.375 32.7481C36.375 32.2976 36.2955 31.8654 36.1498 31.4653L36.1191 31.3839C35.5734 29.9874 34.2148 28.9981 32.625 28.9981ZM30.4744 15.875H28.875V21.5C28.875 24.6067 26.3567 27.125 23.25 27.125H19.5C16.3933 27.125 13.875 24.6067 13.875 21.5H4.5V27.7891C5.87426 26.2321 7.88496 25.25 10.125 25.25C13.6197 25.25 16.5561 27.6402 17.3888 30.875H25.3609C26.1928 27.6393 29.1296 25.2481 32.625 25.2481C33.069 25.2481 33.504 25.2868 33.9268 25.3608L30.4744 15.875ZM13.875 14H4.5V17.75H13.875V14ZM34.5 8.375H28.875V12.125H34.5V8.375Z" fill="white" fill-opacity="0.5"/>
                        </svg>
                        <div className="flex justify-between items-end">
                            <h1 className="text-[20px] text-white mt-5">Shipments</h1>
                            <div className="border-[1px] border-white h-fit p-1 rounded-lg">
                                <svg height="16px" version="1.1" fill="#fff" viewBox="0 0 16 16" width="16px"  xmlns="http://www.w3.org/2000/svg"><path d="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"/></svg>
                            </div>
                        </div>
                            <h1 className="text-[30px] font-bold text-white">500</h1>
                    </div>
                    <div className="bg-white/20 rounded-[40px] flex flex-col p-5 pl-8">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 0.875C28.0356 0.875 28.875 1.71447 28.875 2.75V4.625H38.25V15.875H34.4649L39.6133 30.0198C39.9437 30.8652 40.125 31.7855 40.125 32.7481C40.125 36.8904 36.7671 40.2481 32.625 40.2481C29.1309 40.2481 26.1951 37.8588 25.3618 34.625H17.3888C16.5561 37.8597 13.6197 40.25 10.125 40.25C6.47908 40.25 3.44077 37.6484 2.76514 34.2005C1.56742 33.5742 0.75 32.3201 0.75 30.875V12.125C0.75 11.0895 1.58947 10.25 2.625 10.25H15.75C16.7856 10.25 17.625 11.0895 17.625 12.125V21.5C17.625 22.5356 18.4644 23.375 19.5 23.375H23.25C24.2856 23.375 25.125 22.5356 25.125 21.5V4.625H19.5V0.875H27ZM10.125 29C8.05393 29 6.375 30.6789 6.375 32.75C6.375 34.8211 8.05393 36.5 10.125 36.5C12.1961 36.5 13.875 34.8211 13.875 32.75C13.875 30.6789 12.1961 29 10.125 29ZM32.625 28.9981C30.5539 28.9981 28.875 30.677 28.875 32.7481C28.875 34.8193 30.5539 36.4981 32.625 36.4981C34.6961 36.4981 36.375 34.8193 36.375 32.7481C36.375 32.2976 36.2955 31.8654 36.1498 31.4653L36.1191 31.3839C35.5734 29.9874 34.2148 28.9981 32.625 28.9981ZM30.4744 15.875H28.875V21.5C28.875 24.6067 26.3567 27.125 23.25 27.125H19.5C16.3933 27.125 13.875 24.6067 13.875 21.5H4.5V27.7891C5.87426 26.2321 7.88496 25.25 10.125 25.25C13.6197 25.25 16.5561 27.6402 17.3888 30.875H25.3609C26.1928 27.6393 29.1296 25.2481 32.625 25.2481C33.069 25.2481 33.504 25.2868 33.9268 25.3608L30.4744 15.875ZM13.875 14H4.5V17.75H13.875V14ZM34.5 8.375H28.875V12.125H34.5V8.375Z" fill="white" fill-opacity="0.5"/>
                        </svg>
                        <div className="flex justify-between items-end">
                            <h1 className="text-[20px] text-white mt-5">Shipments</h1>
                            <div className="border-[1px] border-white h-fit p-1 rounded-lg">
                                <svg height="16px" version="1.1" fill="#fff" viewBox="0 0 16 16" width="16px"  xmlns="http://www.w3.org/2000/svg"><path d="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"/></svg>
                            </div>
                        </div>
                            <h1 className="text-[30px] font-bold text-white">500</h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 p-5">
                    <div className="bg-white/20 rounded-[40px] flex flex-col p-5 pl-8">
                        <h1 className="text-white">User Activity</h1>
                        <div className="grid grid-cols-4">
                            <div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32C0 25.3725 5.37258 20 12 20C18.6275 20 24 25.3725 24 32H21C21 27.0294 16.9706 23 12 23C7.02944 23 3 27.0294 3 32H0ZM12 18.5C7.0275 18.5 3 14.4725 3 9.5C3 4.5275 7.0275 0.5 12 0.5C16.9725 0.5 21 4.5275 21 9.5C21 14.4725 16.9725 18.5 12 18.5ZM12 15.5C15.315 15.5 18 12.815 18 9.5C18 6.185 15.315 3.5 12 3.5C8.685 3.5 6 6.185 6 9.5C6 12.815 8.685 15.5 12 15.5Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    <span className="text-white text-[30px] font-bold">5</span>
                                </div>
                                <h1 className="text-white">New Users<br/>&#40;this week&#41;</h1>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32C0 25.3725 5.37258 20 12 20C18.6275 20 24 25.3725 24 32H21C21 27.0294 16.9706 23 12 23C7.02944 23 3 27.0294 3 32H0ZM12 18.5C7.0275 18.5 3 14.4725 3 9.5C3 4.5275 7.0275 0.5 12 0.5C16.9725 0.5 21 4.5275 21 9.5C21 14.4725 16.9725 18.5 12 18.5ZM12 15.5C15.315 15.5 18 12.815 18 9.5C18 6.185 15.315 3.5 12 3.5C8.685 3.5 6 6.185 6 9.5C6 12.815 8.685 15.5 12 15.5Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    <span className="text-white text-[30px] font-bold">5</span>
                                </div>
                                <h1 className="text-white">New Users<br/>&#40;this week&#41;</h1>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32C0 25.3725 5.37258 20 12 20C18.6275 20 24 25.3725 24 32H21C21 27.0294 16.9706 23 12 23C7.02944 23 3 27.0294 3 32H0ZM12 18.5C7.0275 18.5 3 14.4725 3 9.5C3 4.5275 7.0275 0.5 12 0.5C16.9725 0.5 21 4.5275 21 9.5C21 14.4725 16.9725 18.5 12 18.5ZM12 15.5C15.315 15.5 18 12.815 18 9.5C18 6.185 15.315 3.5 12 3.5C8.685 3.5 6 6.185 6 9.5C6 12.815 8.685 15.5 12 15.5Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    <span className="text-white text-[30px] font-bold">5</span>
                                </div>
                                <h1 className="text-white">New Users<br/>&#40;this week&#41;</h1>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32C0 25.3725 5.37258 20 12 20C18.6275 20 24 25.3725 24 32H21C21 27.0294 16.9706 23 12 23C7.02944 23 3 27.0294 3 32H0ZM12 18.5C7.0275 18.5 3 14.4725 3 9.5C3 4.5275 7.0275 0.5 12 0.5C16.9725 0.5 21 4.5275 21 9.5C21 14.4725 16.9725 18.5 12 18.5ZM12 15.5C15.315 15.5 18 12.815 18 9.5C18 6.185 15.315 3.5 12 3.5C8.685 3.5 6 6.185 6 9.5C6 12.815 8.685 15.5 12 15.5Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    <span className="text-white text-[30px] font-bold">5</span>
                                </div>
                                <h1 className="text-white">New Users<br/>&#40;this week&#41;</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/20 rounded-[40px] flex flex-col p-5 pl-8">
                        <h1 className="text-white">User Activity</h1>
                        <div className="grid grid-cols-4">
                            <div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32C0 25.3725 5.37258 20 12 20C18.6275 20 24 25.3725 24 32H21C21 27.0294 16.9706 23 12 23C7.02944 23 3 27.0294 3 32H0ZM12 18.5C7.0275 18.5 3 14.4725 3 9.5C3 4.5275 7.0275 0.5 12 0.5C16.9725 0.5 21 4.5275 21 9.5C21 14.4725 16.9725 18.5 12 18.5ZM12 15.5C15.315 15.5 18 12.815 18 9.5C18 6.185 15.315 3.5 12 3.5C8.685 3.5 6 6.185 6 9.5C6 12.815 8.685 15.5 12 15.5Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    <span className="text-white text-[30px] font-bold">5</span>
                                </div>
                                <h1 className="text-white">New Users<br/>&#40;this week&#41;</h1>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32C0 25.3725 5.37258 20 12 20C18.6275 20 24 25.3725 24 32H21C21 27.0294 16.9706 23 12 23C7.02944 23 3 27.0294 3 32H0ZM12 18.5C7.0275 18.5 3 14.4725 3 9.5C3 4.5275 7.0275 0.5 12 0.5C16.9725 0.5 21 4.5275 21 9.5C21 14.4725 16.9725 18.5 12 18.5ZM12 15.5C15.315 15.5 18 12.815 18 9.5C18 6.185 15.315 3.5 12 3.5C8.685 3.5 6 6.185 6 9.5C6 12.815 8.685 15.5 12 15.5Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    <span className="text-white text-[30px] font-bold">5</span>
                                </div>
                                <h1 className="text-white">New Users<br/>&#40;this week&#41;</h1>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32C0 25.3725 5.37258 20 12 20C18.6275 20 24 25.3725 24 32H21C21 27.0294 16.9706 23 12 23C7.02944 23 3 27.0294 3 32H0ZM12 18.5C7.0275 18.5 3 14.4725 3 9.5C3 4.5275 7.0275 0.5 12 0.5C16.9725 0.5 21 4.5275 21 9.5C21 14.4725 16.9725 18.5 12 18.5ZM12 15.5C15.315 15.5 18 12.815 18 9.5C18 6.185 15.315 3.5 12 3.5C8.685 3.5 6 6.185 6 9.5C6 12.815 8.685 15.5 12 15.5Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    <span className="text-white text-[30px] font-bold">5</span>
                                </div>
                                <h1 className="text-white">New Users<br/>&#40;this week&#41;</h1>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 32C0 25.3725 5.37258 20 12 20C18.6275 20 24 25.3725 24 32H21C21 27.0294 16.9706 23 12 23C7.02944 23 3 27.0294 3 32H0ZM12 18.5C7.0275 18.5 3 14.4725 3 9.5C3 4.5275 7.0275 0.5 12 0.5C16.9725 0.5 21 4.5275 21 9.5C21 14.4725 16.9725 18.5 12 18.5ZM12 15.5C15.315 15.5 18 12.815 18 9.5C18 6.185 15.315 3.5 12 3.5C8.685 3.5 6 6.185 6 9.5C6 12.815 8.685 15.5 12 15.5Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    <span className="text-white text-[30px] font-bold">5</span>
                                </div>
                                <h1 className="text-white">New Users<br/>&#40;this week&#41;</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}