export default function Services() {
  return (
    <div className=" flex flex-col justify-center items-center px-[120px] mt-20">
      <h1 className="text-[40px]">It&#39;s time to try our Services</h1>
      <div className="grid grid-cols-4 gap-5 mt-16">
        <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center">
          <h1 className=" font-[540] text-[18px] text-center">
            HOSPITALITY
            <br />
            COURIERS
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530]">
            Need an extra hand? Give us a call we'll have someone ready to help
            with anything to keep you running smooth!
          </p>
          <a
            className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-fit"
            href={"/"}
          >
            Learn More
          </a>
        </div>
        <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center">
          <h1 className=" font-[540] text-[18px] text-center">
            Wholesale Food
            <br />
            Delivery
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530]">
            We give you hours of your precious life back, with full price
            transparency, by supplying everything you need to run your business
            from our fulfillment centers to your shelves and fridges.
          </p>
          <a
            className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-fit"
            href={"/"}
          >
            Learn More
          </a>
        </div>
        <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center">
          <h1 className=" font-[540] text-[18px] text-center">
            ALCOHOL
            <br />
            DELIVERY
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530]">
            We provide Alcohol Delivery for all NC Licensed Liqour
            Establishments at an affordable rate. Simply input your order, or
            send it for us to place. We will charge you by the case for pickup
            and delivery.
          </p>
          <a
            className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-fit"
            href={"/"}
          >
            Learn More
          </a>
        </div>
        <div className="shadow hover:shadow-2xl p-6 flex flex-col justify-center items-center">
          <h1 className=" font-[540] text-[18px] text-center">
            COMMERCIAL
            <br />
            CLEANING
          </h1>
          <p className="text-[14px] text-center text-[#0a0a0a85] font-[530]">
            You decide how often you need us! After working in the Hospitality
            industry for years, we were able to come up with a concept that
            makes the customer happy. We understand the needs of the restaurant
            and we can implement a strategy to keep clients satisfied.
          </p>
          <a
            className="bg-[url('../img/btn-border_black.png')] bg-no-repeat bg-center bg-contain p-2 mt-5 text-black w-fit"
            href={"/"}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
