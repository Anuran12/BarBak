export default function Trust() {
  return (
    <div className=" flex flex-col justify-center items-center px-[120px] mt-20">
      <h1 className="text-[40px]">
        Why you can
        <span className="text-[#F7BC06]"> trust</span> us
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-16">
        <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center group">
          <h1 className=" font-[540] text-[22px] text-center group-hover:text-[#F7BC06] w-full">
            Fast
            <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
            Ordering your items has never been more efficient using the
            Restaurant Depot website. Order online by 9pm EST for next day
            delivery
          </p>
        </div>
        <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center group">
          <h1 className=" font-[540] text-[22px] text-center group-hover:text-[#F7BC06] w-full">
            Local
            <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
            BarBak Hospitality is your go-to delivery service. Our goal is to
            assist individual&#39;s and local businesses by loading,
            transporting, and delivering items to clients businesses in a safe,
            timely manner.
          </p>
        </div>
        <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center group">
          <h1 className=" font-[540] text-[22px] text-center group-hover:text-[#F7BC06] w-full">
            Reliable
            <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
            Your business is our business. If you experience any dissatisfaction
            we will address it immediately. If we are experiencing delays in our
            routes we will contact you in advance.
          </p>
        </div>
        <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center group">
          <h1 className=" font-[540] text-[22px] text-center group-hover:text-[#F7BC06] w-full">
            Hospitality
            <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
            It&#39;s rooted in our name. Providing quality service with one
            smile at a time. Our staff is committed to creating a friendly
            environment for our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
