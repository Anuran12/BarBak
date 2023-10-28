import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import ContactImg from '../img/contact.png'

export default function Contact() {
	return (
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover flex flex-row h-[100vh] px-[120px] pt-[200px]">
                <div className="w-1/2 text-white flex flex-col px-16">
                    <h1 className="text-[40px]">Contacts</h1>
                    <h1 className="text-[20px] mt-10">Address</h1>
                    <p className="text-[14px] text-gray-50/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className="flex justify-between mt-10">
                        <div>
                            <h1 className="text-[20px]">Phone</h1>
                            <p className="text-[14px] text-gray-50/60">1234567890</p>
                            <p className="text-[14px] text-gray-50/60">1234567890</p>
                        </div>
                        <div>
                            <h1 className="text-[20px]">Email</h1>
                            <p className="text-[14px] text-gray-50/60">abcd@gmail.com</p>
                            <p className="text-[14px] text-gray-50/60">abcd@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <Image src={ContactImg} />
                </div>
            </div>
            <div className="w-1/2 !bg-white/20 rounded-3xl">
                        <div>
                            <input className="" placeholder="Name*" />
                            <input />
                        </div>
                        <input/>
                        <input />
                    </div>
                <div className="w-full bg-none">
                    
                </div>
            <Footer />
        </div>
    );
}