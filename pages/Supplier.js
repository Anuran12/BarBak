import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import JoboffersImg from "../img/Joboffers.png";

export default function Supplier() {
  return (
    <div>
      <Header />
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ">
        <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain">
          <div className="h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-[#F7BC06] text-[100px] mt-20 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              BECOME A SUPPLIER
            </h1>
            <p className="text-white text-[24px] mt-8 w-1/2 text-center">
              Join our network and become a valued supplier today. Let&sbquo;s
              build a successful partnership together.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center px-[120px]">
        <div className="w-1/2">
          <h1 className="text-[40px] font-bold text-center drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            At Cheetah we deliver
            <br /> more than supplies.
          </h1>
          <p className="text-center text-[20px]">
            At Barbak we deliver more than supplies. We deliver care and support
            to those in need in our communities and our industry. Barbak takes
            our commitment to the environment and to the people in that
            environment seriously, and our team does too. If you think your
            charity or organization would be a good fit for Barbak Cares, please
            don&sbquo;t hesitate to drop us a line. We&sbquo;d love to hear from
            you. Let&sbquo;s make the world a better place. Run with us.
          </p>
        </div>
        <div className="w-1/2">
          <Image src={JoboffersImg} className=" scale-75" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
