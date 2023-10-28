import MacImg from "../img/Mackbook.png";
import Image from "next/legacy/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Stats() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className="mt-[100px] flex flex-row justify-center w-full px-[120px]">
        <div className="w-full">
          <Image
            src={MacImg}
            alt="macbook and phone image"
            width={748}
            height={600}
          />
        </div>
        <ScrollTrigger
          className="w-full justify-start items-center"
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="w-full justify-start items-center flex flex-col gap-4 mt-8">
            <div className="w-6/12 ml-16 flex bg-gradient-to-r from-[#F7BC06] to-[#ffefbf] px-5 py-1 rounded-2xl items-center">
              <h1 className="text-[#0A0A0A] text-[38px] font-semibold break-words">
                {counterOn && (
                  <CountUp start={0} end={90} duration={3} delay={0.5} />
                )}
                %
              </h1>
              <p className=" w-1/2 ml-20 h-fit leading-4 text-[16px] text-[#0A0A0A] break-words font-normal">
                Timely
                <br /> Deliveries
              </p>
            </div>
            <div className="w-6/12 flex bg-gradient-to-r from-[#a7a7a7] to-[#262628] px-5 py-1 rounded-2xl items-center">
              <h1 className="text-[#ffffff] text-[38px] font-semibold break-words">
                {counterOn && (
                  <CountUp start={0} end={50} duration={3} delay={0.5} />
                )}
                K+
              </h1>
              <p className=" w-1/2 ml-16 h-fit leading-4 text-[16px] text-[#ffffff] break-words font-normal">
                Orders
                <br /> Processed
              </p>
            </div>
            <div className="w-6/12 ml-16 flex bg-gradient-to-r from-[#F7BC06] to-[#ffefbf] px-5 py-1 rounded-2xl items-center">
              <h1 className="text-[#0A0A0A] text-[38px] font-semibold break-words">
                {counterOn && (
                  <CountUp start={0} end={2000} duration={3} delay={0.5} />
                )}
                +
              </h1>
              <p className=" w-1/2 ml-14 h-fit leading-4 text-[16px] text-[#0A0A0A] break-words font-normal">
                Total
                <br /> Accounts
                <br /> Served
              </p>
            </div>
            <div className="w-6/12 flex bg-gradient-to-r from-[#a7a7a7] to-[#262628] px-5 py-1 rounded-2xl items-center">
              <h1 className="text-[#ffffff] text-[38px] font-semibold break-words">
                {counterOn && (
                  <CountUp start={0} end={90} duration={3} delay={0.5} />
                )}
                %
              </h1>
              <p className=" w-1/2 ml-20 h-fit leading-4 text-[16px] text-[#ffffff] break-words font-normal">
                Accounts
                <br /> Recommend
                <br /> BarBak
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}
