export default function Services() {
  return (
    <div className=" flex flex-col justify-center items-center md:px-[120px] mt-20">
      <h1 className=" md:text-[40px] text-[25px] font-bold drop-shadow-[-1px_0_1px_rgba(0,0,0,0.6)]">
        It&#39;s time to try our{" "}
        <span className="text-[#F7BC06]">Services</span>
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-16">
        <div className="shadow hover:shadow-2xl p-6 mx-8 md:mx-0 my-3 md:my-0 flex flex-col justify-between items-center group">
          <h1 className=" font-[540] text-[18px] text-center group-hover:text-[#F7BC06] w-full">
            HOSPITALITY
            <br />
            COURIERS
            <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
          </h1>

          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
            Need an extra hand? Give us a call we&#39;ll have someone ready to
            help with anything to keep you running smooth!
          </p>
          <a
            className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-full text-center"
            href={"/"}
          >
            {/* <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-64 absolute -z-10 -mt-4"></div> */}
            Learn More
          </a>
        </div>
        <div className="shadow hover:shadow-2xl p-6 mx-8 md:mx-0 my-3 md:my-0 flex flex-col justify-between items-center group">
          <h1 className=" font-[540] text-[18px] text-center group-hover:text-[#F7BC06] w-full">
            WHOLESALE FOOD
            <br />
            DELIVERY
            <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
            We give you hours of your precious life back, with full price
            transparency, by supplying everything you need to run your business
            from our fulfillment centers to your shelves and fridges.
          </p>
          <a
            className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-full text-center"
            href={"/"}
          >
            {/* <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-64 absolute -z-10 -mt-4"></div> */}
            Learn More
          </a>
        </div>
        <div className="shadow hover:shadow-2xl p-6 mx-8 md:mx-0 my-3 md:my-0 flex flex-col justify-between items-center group">
          <h1 className=" font-[540] text-[18px] text-center group-hover:text-[#F7BC06] w-full">
            ALCOHOL
            <br />
            DELIVERY
            <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
            We provide Alcohol Delivery for all NC Licensed Liqour
            Establishments at an affordable rate. Simply input your order, or
            send it for us to place. We will charge you by the case for pickup
            and delivery.
          </p>
          <a
            className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-full text-center"
            href={"/"}
          >
            {/* <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-64 absolute -z-10 -mt-4"></div> */}
            Learn More
          </a>
        </div>
        <div className="shadow hover:shadow-2xl p-6 mx-8 md:mx-0 my-3 md:my-0 flex flex-col justify-between items-center group">
          <h1 className=" font-[540] text-[18px] text-center group-hover:text-[#F7BC06] w-full">
            COMMERCIAL
            <br />
            CLEANING
            <div className=" bg-[url('../img/underline.png')] bg-no-repeat bg-center bg-cover h-1 w-0 group-hover:w-full duration-300 ease-in-out"></div>
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530] mt-2">
            You decide how often you need us! After working in the Hospitality
            industry for years, we were able to come up with a concept that
            makes the customer happy. We understand the needs of the restaurant
            and we can implement a strategy to keep clients satisfied.
          </p>
          <a
            className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-full text-center"
            href={"/"}
          >
            {/* <div className="bg-[url('../img/btnBg.png')] bg-no-repeat bg-center bg-contain h-14 w-64 absolute -z-10 -mt-4"></div> */}
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
