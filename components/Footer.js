import Link from "next/link";
import Image from 'next/legacy/image'
import Logo1 from '../img/Logo1.png'
import Logo2 from '../img/Logo2.png'

export default function Footer() {
    return(
        <footer className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover pt-10 pb-10 grid grid-cols-9 text-white justify-center items-start">
            <Link href={'/'} className="my-3 ml-6 flex">
                <Image
                src={Logo1}
                width={48}
                height={35}
                alt="logo"
                />
                <Image
                className="!ml-[-10px]"
                src={Logo2}
                width={120}
                height={35}
                alt="logo"
                />
            </Link>
            <div className="text-[12px] text-white/60 pt-2 col-start-3">
                <ul>
                    <li>CATALOG</li>
                    <li>BARBAK+</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>CONTACT</li>
                    <li>BECOME A SUPPLIER</li>
                </ul>
            </div>
            <div className="text-[12px] text-white/60 pt-2 col-start-5">
                <ul>
                    <li>FAQ</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="text-[12px] text-white/80 pt-2 col-start-8">
                <ul>
                    <li>1234567890</li>
                    <li>9876543210</li>
                    <li>abcd@gmail.com</li>
                    <li>Kolkata, India</li>
                </ul>
            </div>
            <div className="text-[12px] text-white/80 pt-2 col-start-9">
                <ul>
                    <li>We are in social networks</li>
                    <li className="flex justify-between w-10/12 mt-3">
                        <a className="bg-white/20 h-[35px] w-[35px] rounded-full justify-center items-center flex">
                            <svg width="23" height="15" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9435 2.37115C12.7548 1.80511 12.3775 1.42775 11.8114 1.23907C10.868 0.956055 7.0001 0.956055 7.0001 0.956055C7.0001 0.956055 3.13217 0.956055 2.18878 1.23907C1.62274 1.42775 1.24538 1.80511 1.0567 2.37115C0.773682 3.31455 0.773682 5.29568 0.773682 5.29568C0.773682 5.29568 0.773682 7.27681 1.0567 8.31455C1.24538 8.88058 1.62274 9.25794 2.18878 9.44662C3.13217 9.72964 7.0001 9.72964 7.0001 9.72964C7.0001 9.72964 10.868 9.72964 11.8114 9.44662C12.3775 9.25794 12.7548 8.88058 12.9435 8.31455C13.2265 7.37115 13.2265 5.39002 13.2265 5.39002C13.2265 5.39002 13.2265 3.40889 12.9435 2.37115ZM5.77368 7.27681V3.59756L8.98123 5.48436L5.77368 7.27681Z" fill="white"/>
                            </svg>
                        </a>
                        <a className="bg-white/20 h-[35px] w-[35px] rounded-full justify-center items-center flex">
                            <svg width="9" height="21" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.84912 12.0505V6.86181H6.54724L6.83026 4.88068H4.84912V3.55993C4.84912 2.99389 5.0378 2.61653 5.88686 2.61653H6.9246V0.824076C6.73592 0.824076 6.07554 0.729736 5.32082 0.729736C3.81139 0.729736 2.67931 1.67313 2.67931 3.37125V4.88068H0.981201V6.86181H2.67931V12.0505H4.84912Z" fill="white"/>
                            </svg>
                        </a>
                        <a className="bg-white/20 h-[35px] w-[35px] rounded-full justify-center items-center flex">
                            <svg width="17" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.075 0.640137H3.925C1.9 0.640137 0.25 2.29014 0.25 4.31514V10.4651C0.25 12.4901 1.9 14.1401 3.925 14.1401H10.075C12.1 14.1401 13.75 12.4901 13.75 10.4651V4.31514C13.75 2.29014 12.1 0.640137 10.075 0.640137ZM7 10.8401C5.05 10.8401 3.475 9.26514 3.475 7.39014C3.475 5.44014 5.05 3.86514 7 3.86514C8.875 3.86514 10.525 5.44014 10.525 7.39014C10.525 9.26514 8.875 10.8401 7 10.8401ZM10.9 4.61514C10.3 4.61514 9.775 4.09014 9.775 3.49014C9.775 2.89014 10.3 2.36514 10.9 2.36514C11.5 2.36514 12.025 2.89014 12.025 3.49014C12.025 4.09014 11.575 4.61514 10.9 4.61514Z" fill="white"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}