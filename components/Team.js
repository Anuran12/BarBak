import Image from "next/image";
import DummyImg from "../img/dummy.png";
import CEOImg from "../img/Team/Jordan Frye.png";
import MDirectorImg from "../img/Team/Marissa FallenBaum.png";

export default function Team() {
  return (
    <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ] mt-20">
      <div className="bg-[url('../img/patternUp.png')] bg-no-repeat bg-top bg-contain ">
        <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain  px-[120px]">
          <h1 className="text-white pt-20 text-[40px] text-center font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
            Team
          </h1>
          <div className="grid grid-cols-4 mt-10 pb-16">
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
            <div className="card">
              <Image src={DummyImg} alt="" srcset="" />
              <div className="content">
                <p className="title">
                  Sayan Das
                  <br />
                  <span>Creative Designer</span>
                </p>
              </div>
            </div>
            <div className="card">
              <Image src={MDirectorImg} alt="" srcset="" />
              <div className="content">
                <p className="title">
                  Marissa FallenBaum
                  <br />
                  <span>Sales & Marketing Director</span>
                  <br />
                  <span className="lowercase">abcd@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="card">
              <Image src={DummyImg} alt="" srcset="" />
              <div className="content">
                <p className="title">
                  Sayan Das
                  <br />
                  <span>Creative Designer</span>
                </p>
              </div>
            </div>
            <div className="card">
              <Image src={DummyImg} alt="" srcset="" />
              <div className="content">
                <p className="title">
                  Sayan Das
                  <br />
                  <span>Creative Designer</span>
                </p>
              </div>
            </div>
            <div className="card">
              <Image src={DummyImg} alt="" srcset="" />
              <div className="content">
                <p className="title">
                  Sayan Das
                  <br />
                  <span>Creative Designer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
