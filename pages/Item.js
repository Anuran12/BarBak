import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import DishImg from "../img/dish.png";

export default function Item() {
    return(
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover h-[100vh]">
                <div className="flex flex-row w-full pt-32">
                    <div className="w-1/2">
                        <div>
                            <Image 
                            src={DishImg}
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h1>Product Name</h1>
                        <p>$13 / 1 pc</p>
                        <p>Details</p>
                        <p>Case items - 24 ct
                            Case weight avg - 38 lb
                            SKU - 101410UPC101410</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}