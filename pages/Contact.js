import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import ContactImg from '../img/contact.png'

export default function Contact() {
	return (
        <div>
            <Header />
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover flex flex-row px-[120px] pt-[200px]">
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
            <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover flex flex-row justify-center items-center px-[120px] pt-10 pb-16">
                <div className="w-1/2 !bg-white/20 rounded-3xl flex flex-col justify-center p-10">
                            <div className="flex flex-row justify-between mb-8">
                                <input placeholder="Name*" className=" bg-transparent w-1/3 border-2 rounded-lg p-1 border-[#F7BC06]" />
                                <input placeholder="Email*" className=" bg-transparent border-2 w-1/2 rounded-lg p-1 border-[#F7BC06]" />
                            </div>
                            <input placeholder="Subject*" className=" bg-transparent border-2 w-3/4 rounded-lg mb-8 p-1  border-[#F7BC06]"/>
                            <textarea placeholder="Message*" type="" className=" bg-transparent border-2 text-start items-start border-[#F7BC06] p-1 h-32 rounded-lg" />
                            <div className="w-full flex justify-center items-center">
                                <button className="mt-5 bg-[#F7BC06] w-fit px-6 rounded-full py-2">SEND</button>
                            </div>
                        </div>

            </div>
            <Footer />
        </div>
    );
}