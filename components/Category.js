import Image from "next/legacy/image";
import Category1 from "../img/Category/category.png"

export default function Category() {
    
    return(
        <div className=" text-white/50 fixed flex flex-col w-1/6 justify-end ">
            <p className="text-[10px] text-end w-full">Home - recommend - We recommend</p>
            <div className="flex flex-col gap-5 mt-5 ml-10">
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