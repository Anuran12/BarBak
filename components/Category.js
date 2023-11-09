import Image from "next/legacy/image";
import Category1 from "../img/Category/category.png"

export default function Category({ categoryOpen, setCategoryOpen }) {

  const HandleCloseBtn = () => {
    setCategoryOpen(!categoryOpen);
  };
    
    return(
        <div className={`text-white/50 fixed bg-[url('../img/bg_black.jpg')] bg-no-repea h-full  bg-center bg-cover flex flex-col lg:w-1/6 w-1/2 z-50 justify-star duration-300 ${categoryOpen ? 'left-0' : '-left-52 md:-left-[900px] lg:left-0'}`}t>
            <p className="text-[10px] text-end w-full mt-5 hidden lg:block">Home - recommend - We recommend</p>
            <button onClick={HandleCloseBtn} className=" flex items-center pt-5 group mt-20 lg:hidden">
                <svg
                width="30px"
                height="30px"
                viewBox="0 0 1024 1024"
                fill="#fff"
                class="icon group-hover:fill-[#F7BC06]"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                    fill=""
                />
                </svg>
                <span className="text-white group-hover:text-[#F7BC06] text-[24px]">
                Back
                </span>
            </button>
            <div className="flex flex-col gap-5 nust:gap-2 mt-5 ml-10 md:ml-24 lg:ml-10 md:text-[28px] lg:text-[16px]">
                <div className=" flex flex-row items-center">
                    <Image src={Category1} className=" scale-75" />
                    <h1>category</h1>
                </div>
                <div className=" flex flex-row items-center">
                    <Image src={Category1} className=" scale-75" />
                    <h1>category</h1>
                </div>
                <div className=" flex flex-row items-center">
                    <Image src={Category1} className=" scale-75" />
                    <h1>category</h1>
                </div>
                <div className=" flex flex-row items-center">
                    <Image src={Category1} className=" scale-75" />
                    <h1>category</h1>
                </div>
                <div className=" flex flex-row items-center">
                    <Image src={Category1} className=" scale-75" />
                    <h1>category</h1>
                </div>
                <div className=" flex flex-row items-center">
                    <Image src={Category1} className=" scale-75" />
                    <h1>category</h1>
                </div>
                <div className=" flex flex-row items-center">
                    <Image src={Category1} className=" scale-75" />
                    <h1>category</h1>
                </div>
                <div className=" flex flex-row items-center">
                    <Image src={Category1} className=" scale-75" />
                    <h1>category</h1>
                </div>
                <div className=" flex flex-row items-center">
                    <Image src={Category1} className=" scale-75" />
                    <h1>category</h1>
                </div>
            </div>
        </div>
    )
}