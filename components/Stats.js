import MacImg from "../img/Mackbook.png";
import Image from "next/legacy/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Stats() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className="lg:mt-[120px] mt-[50px] flex flex-col lg:flex-row md:flex-row justify-center w-full lg:px-[120px]">
        <div className="lg:w-full w-[90%] laptop">
          <Image
            src={MacImg}
            alt="macbook and phone image"
            width={748}
            height={600}
            
          />
        </div>
        <ScrollTrigger
          className="lg:w-full w-[90%] justify-start items-center"
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="w-full justify-start items-center flex flex-col gap-4 mt-8">
            <div className="w-8/12 ml-16 flex bg-gradient-to-r from-[#F7BC06] to-[#ffefbf] lg:px-5 px-2 py-1 rounded-2xl items-center">
              <h1 className="text-[#0A0A0A] lg:text-[48px] text-[30px] font-semibold break-words">
                {counterOn && (
                  <CountUp start={0} end={90} duration={3} delay={0.5} />
                )}
                %
              </h1>
              <p className=" w-1/2 lg:ml-20 ml-8 h-fit lg:leading-10 lg:text-[32px] text-[#0A0A0A] break-words font-semibold">
                Timely
                <br /> Deliveries
              </p>
            </div>
            <div className="w-8/12 flex bg-gradient-to-r from-[#a7a7a7] to-[#262628] px-5 py-1 rounded-2xl items-center">
              <h1 className="text-[#ffffff] lg:text-[48px] text-[30px] font-semibold break-words">
                {counterOn && (
                  <CountUp start={0} end={50} duration={3} delay={0.5} />
                )}
                K+
              </h1>
              <p className=" w-1/2 lg:ml-20 ml-8 h-fit lg:leading-10 lg:text-[32px] text-[#ffffff] break-words font-semibold">
                Orders
                <br /> Processed
              </p>
            </div>
            <div className="w-8/12 ml-16 flex bg-gradient-to-r from-[#F7BC06] to-[#ffefbf] px-5 py-1 rounded-2xl items-center">
              <h1 className="text-[#0A0A0A] lg:text-[48px] text-[30px] font-semibold break-words">
                {counterOn && (
                  <CountUp start={0} end={2000} duration={3} delay={0.5} />
                )}
                +
              </h1>
              <p className=" w-1/2 lg:ml-20 ml-5 h-fit lg:leading-10 lg:text-[32px] text-[#0A0A0A] break-words font-semibold">
                Accounts
                <br /> Served
              </p>
            </div>
            <div className="w-8/12 flex bg-gradient-to-r from-[#a7a7a7] to-[#262628] px-5 py-1 rounded-2xl items-center">
              <h1 className="text-[#ffffff] lg:text-[48px] text-[30px] font-semibold break-words">
                {counterOn && (
                  <CountUp start={0} end={90} duration={3} delay={0.5} />
                )}
                %
              </h1>
              <p className=" lg:w-1/2 lg:ml-20 ml-8 h-fit lg:leading-10 lg:text-[32px] text-[#ffffff] break-words font-semibold">
                 Recommend
                <br /> BarBak
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}
