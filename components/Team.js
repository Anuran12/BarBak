import Image from "next/image";
import DummyImg from "../img/dummy.png";
import CEOImg from "../img/Team/Jordan Frye.png";
import MDirectorImg from "../img/Team/Marissa FallenBaum.png";

export default function Team() {
  return (
    <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ] mt-20">
      <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
        <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain  lg:px-[120px]">
          <h1 className="text-[#F7BC06] pt-20 text-[40px] text-center font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            Team
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 mt-10 pb-16 md:justify-center md:items-center">
            <div className="w-full flex justify-center items-center">
              <div className="card">
                <Image src={CEOImg} alt="" srcset="" />
                <div className="content">
                  <p className="title">
                    Jordan Frye
                    <br />
                    <span>CEO, co-owner</span>
                    <br />
                    <span className="lowercase">abcd@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="card">
                <Image src={CEOImg} alt="" srcset="" />
                <div className="content">
                  <p className="title">
                    Jordan Frye
                    <br />
                    <span>CEO, co-owner</span>
                    <br />
                    <span className="lowercase">abcd@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="card">
                <Image src={CEOImg} alt="" srcset="" />
                <div className="content">
                  <p className="title">
                    Jordan Frye
                    <br />
                    <span>CEO, co-owner</span>
                    <br />
                    <span className="lowercase">abcd@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="card">
                <Image src={CEOImg} alt="" srcset="" />
                <div className="content">
                  <p className="title">
                    Jordan Frye
                    <br />
                    <span>CEO, co-owner</span>
                    <br />
                    <span className="lowercase">abcd@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="card">
                <Image src={CEOImg} alt="" srcset="" />
                <div className="content">
                  <p className="title">
                    Jordan Frye
                    <br />
                    <span>CEO, co-owner</span>
                    <br />
                    <span className="lowercase">abcd@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="card">
                <Image src={CEOImg} alt="" srcset="" />
                <div className="content">
                  <p className="title">
                    Jordan Frye
                    <br />
                    <span>CEO, co-owner</span>
                    <br />
                    <span className="lowercase">abcd@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
