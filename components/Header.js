import Link from "next/link";
import Image from "next/legacy/image";
import Logo1 from "../img/Logo1.png";
import Logo2 from "../img/Logo2.png";
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";



export default function Header() {
  const [position, setPosition] = useState()
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

  return (
    <header className={`bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover z-10 grid grid-cols-8 px-10 text-white justify-center fixed items-center transition-[top] duration-[0.4s] ease-[ease-out] ${visible ? "top-0" : "-top-20"}`}>
      <Link href={"/"} className="my-5 scale-125 ml-6 flex">
        <Image src={Logo1} alt="logo" />
        <Image
          className="!ml-[-10px]"
          src={Logo2}
          alt="logo"
        />
      </Link>
      <div className=" flex flex-col ml-16 col-start-2 col-end-7 items-center">
        {/* <a className="text-[12px] text-center w-6/12">1234567890</a> */}
        <nav className="flex gap-10 text-[14px] justify-center items-center">
          <Link
            className="hover:text-[#F7BC06] ease-in-out duration-300 pointer"
            href={"/Catalog"}
          >
            CATALOG
          </Link>
          <Link
            className="hover:text-[#F7BC06] ease-in-out duration-300 cursor-pointer"
            href={"/Barbakplus"}
          >
            BARBAK+
          </Link>
          <Link
            className="hover:text-[#F7BC06] ease-in-out duration-300 cursor-pointer"
            href={"/About"}
          >
            ABOUT
          </Link>
          <div class="group relative inline-block">
            <button class="inline-flex items-center rounded px-4 py-">
              <span class="text-white group-hover:text-[#F7BC06]">SERVICE</span>
              <svg
                class="h-4 w-4 fill-current group-hover:fill-[#F7BC06]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="absolute hidden pt-1 text-black group-hover:block w-40">
              <li class="">
                <Link
                  class="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-[#F7BC06]"
                  href={'/services/FoodDelivery'}
                >
                  Wholesale Food Delivery
                </Link>
              </li>
              <li class="">
                <Link
                  class="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-[#F7BC06]"
                  href={'/services/AlcoholDelivery'}
                >
                  Alcohol Delivery
                </Link>
              </li>
              <li class="">
                <Link
                  class="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-[#F7BC06]"
                  href={'/services/HospitalityCouriers'}
                >
                  Hospitality Couriers
                </Link>
              </li>
              <li class="">
                <Link
                  class="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-[#F7BC06]"
                  href={'/services/CommercialCleaning'}
                >
                  Commercial Cleaning
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className="hover:text-[#F7BC06] ease-in-out duration-300 cursor-pointer"
            href={"/Contact"}
          >
            CONTACT
          </Link>
          <Link
            className="hover:text-[#F7BC06] ease-in-out duration-300 cursor-pointer"
            href={"/Supplier"}
          >
            BECOME A SUPPLIER
          </Link>
        </nav>
      </div>
      <div className="flex gap-3 justify-center items-center col-start-8 mr-6">
        <a>
          <svg
            width="46"
            height="30"
            viewBox="0 0 46 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.1709 18.5166C29.1544 17.6924 28.3577 17.3078 27.6709 17.3078C26.8467 17.3078 26.2973 17.8572 25.7204 18.4342L25.528 18.6265C25.4456 18.7089 25.3632 18.7364 25.2259 18.7364C24.7313 18.7364 23.7149 18.2693 21.5171 16.099C18.4951 13.077 18.7973 12.2803 18.9896 12.088L19.1819 11.8957C20.2259 10.8517 21.1599 9.97262 19.127 7.44515C18.4127 6.56603 17.7259 6.12646 17.0116 6.12646C16.05 6.12646 15.3083 6.8957 14.6489 7.58251C14.539 7.6924 14.4291 7.80229 14.3193 7.91218C13.5775 8.65394 13.5775 10.2473 14.3193 12.1979C15.116 14.3408 16.7368 16.6759 18.8248 18.7638C22.561 22.5276 26.105 23.8462 28.0006 23.8462C28.7423 23.8462 29.3193 23.6539 29.6764 23.2968C29.7863 23.1869 29.8962 23.077 30.0061 22.9671C30.7204 22.3078 31.5171 21.5386 31.4621 20.5495C31.4346 19.8627 31.0226 19.2034 30.1709 18.5166ZM29.594 22.555C29.4841 22.6649 29.3467 22.7748 29.2368 22.8847C28.9896 23.132 28.55 23.2693 27.9731 23.2693C26.1874 23.2693 22.8357 22.0056 19.2368 18.3792C17.2039 16.3462 15.6654 14.0935 14.8687 12.0331C14.2643 10.3572 14.2094 8.92866 14.7588 8.37921C14.8687 8.26932 14.9786 8.15943 15.0885 8.02207C15.6654 7.41767 16.2973 6.75833 17.0116 6.75833C17.5335 6.75833 18.083 7.11548 18.6599 7.85723C20.3357 9.94515 19.7588 10.5495 18.7698 11.5111L18.5775 11.7034C17.7808 12.5001 18.605 14.0386 21.105 16.5386C23.0006 18.4342 24.3467 19.3682 25.2259 19.3682C25.528 19.3682 25.7478 19.2583 25.9401 19.0935L26.1324 18.9012C26.6544 18.3517 27.0665 17.9397 27.6709 17.9397C28.1929 17.9397 28.9072 18.2968 29.7863 19.0111C30.4731 19.5605 30.8577 20.11 30.8852 20.6045C30.9127 21.3188 30.1984 21.9781 29.594 22.555Z"
              fill="black"
              stroke="white"
              stroke-width="1.44753"
              stroke-miterlimit="10"
            />
            <path
              d="M22.6161 29.4507C30.5969 29.4507 37.0666 22.9809 37.0666 15.0001C37.0666 7.01929 30.5969 0.549561 22.6161 0.549561C14.6353 0.549561 8.16553 7.01929 8.16553 15.0001C8.16553 22.9809 14.6353 29.4507 22.6161 29.4507Z"
              stroke="white"
              stroke-width="1.44753"
              stroke-miterlimit="10"
            />
          </svg>
        </a>
        <a className="mr-2">
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
        </a>
        <a className="mb-[-5px]">
          <svg
            width="33"
            height="36"
            viewBox="0 0 33 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_325)">
              <path
                d="M21.5374 33.4543C26.4852 33.4543 30.4962 29.443 30.4962 24.4947C30.4962 19.5465 26.4852 15.5352 21.5374 15.5352C16.5896 15.5352 12.5786 19.5465 12.5786 24.4947C12.5786 29.443 16.5896 33.4543 21.5374 33.4543Z"
                fill="#F7BC06"
              />
              <path
                d="M4.92707 25.6483C3.15838 25.6483 1.73574 24.2255 1.73574 22.4566V7.99826H6.54196V11.1899C6.54196 11.6513 6.88801 11.9974 7.34941 11.9974C7.81081 11.9974 8.15685 11.6513 8.15685 11.1899V7.99826H14.578V11.1899C14.578 11.6513 14.924 11.9974 15.3854 11.9974C15.8084 11.9974 16.1929 11.6513 16.1929 11.1899V7.99826H20.9991V13.9585C21.1529 13.9585 21.3067 13.9585 21.4605 13.9585C21.845 13.9585 22.2295 13.9969 22.5755 14.0354V6.42168H16.1544V4.80664C16.1544 2.15338 14.0012 0 11.3482 0C8.69515 0 6.54196 2.15338 6.54196 4.80664V6.42168H0.12085V22.4566C0.12085 25.1099 2.27404 27.2633 4.92707 27.2633H11.079C10.9637 26.7249 10.8483 26.2251 10.8099 25.6483H4.92707ZM8.1184 4.80664C8.1184 3.0378 9.54105 1.61503 11.3097 1.61503C13.0784 1.61503 14.5011 3.0378 14.5011 4.80664V6.42168H8.1184V4.80664Z"
                fill="white"
              />
              <path
                d="M22.5371 13.9968C22.1526 13.9584 21.8066 13.9199 21.4221 13.9199C21.2683 13.9199 21.1145 13.9199 20.9607 13.9199C15.2701 14.2275 10.7715 18.8804 10.7715 24.6099C10.7715 24.956 10.7715 25.3021 10.8099 25.6097C10.8484 26.148 10.9637 26.6864 11.0791 27.2247C12.2326 31.8391 16.4236 35.2614 21.4221 35.2614C27.3049 35.2614 32.1111 30.4932 32.1111 24.5714C32.1111 19.1111 27.9201 14.5736 22.5371 13.9968ZM21.4221 33.0696C17.6924 33.0696 14.5011 30.6086 13.3861 27.2247C13.2323 26.7248 13.1169 26.1865 13.04 25.6097C13.0016 25.2636 12.9631 24.956 12.9631 24.6099C12.9631 20.1109 16.5005 16.4194 20.9222 16.1887C21.076 16.1887 21.2298 16.1887 21.3836 16.1887C21.7681 16.1887 22.1526 16.2271 22.4987 16.2656C26.6897 16.8039 29.881 20.3416 29.881 24.6099C29.881 29.2627 26.0745 33.0696 21.4221 33.0696Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_325">
                <rect
                  width="32"
                  height="35.3"
                  fill="white"
                  transform="translate(0.115967)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </header>
  );
}
