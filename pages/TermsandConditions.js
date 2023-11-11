import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";

export default function TermsandConditions() {
  return (
    <div>
      <Header />
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ">
        <div className="lg:h-[80vh] h-[50vh] flex flex-col justify-center items-center">
          <h1 className="text-[#F7BC06] lg:text-[100px] md:text-[70px] text-[50px] flex justify-center text-center mt-20 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
            TERMS
            <br /> &<br /> CONDITIONS
          </h1>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-center items-center">
        <p className="text-black lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:p-[120px] p-5 leading-tight font-bold ">
          These Terms and Conditions govern the use of the services offered by
          BarBak Hospitality (“BarBak Hospitality”) at the BarBak Hospitality
          website and mobile Application (the “Website”). Such services and
          Website together are hereinafter referred to as the “Support”. Please
          read these Terms and Conditions and the BarBak Hospitality Privacy
          Policy (the “Privacy Policy”) carefully before using the Support. You
          can read the Privacy Policy. Your use of the Support constitutes your
          acceptance of and agreement to all of the terms and conditions in
          these Terms and Conditions and the Privacy Policy, and your
          representation that you are twenty-one (21) years of age or older. If
          you object to anything in these Terms and Conditions or the Privacy
          Policy, you are not permitted to use the Support. The Privacy Policy
          is incorporated by reference into these Terms and Conditions, and
          these Terms and Conditions and the Privacy Policy together are
          hereinafter referred to as the “Agreement”.
          <br />
          <br /> BarBak Hospitality is an online platform connecting buyers and
          merchants. All transaction made on the BarBak Hospitality platform are
          between the buyer and the merchant. BarBak Hospitality sales are
          online sales and are processed as online transactions. You will
          receive an electronic receipt for your order. BarBak Hospitality does
          not take title for any items sold on the platform. Rather, title for
          each item you purchase will pass directly from the merchant to you,
          either in the merchant&#39;s store at the point of sale if BarBak
          Hospitality arranges for delivery of the items, or at the delivery
          address if the merchant arranges for delivery of the items from the
          merchant&#39;s warehouse or distribution center. Sales tax will be
          calculated at the time title passes to you. BarBak Hospitality may
          display estimated taxes on your purchase to you online during the
          BarBak Hospitality purchase process; however, your final receipt will
          display the final sales tax calculated. Each merchant is solely
          responsible for calculating and informing BarBak Hospitality how much
          sales tax to collect on each order. BarBak Hospitality will collect
          the instructed amount from you on behalf of the merchant and will
          remit those funds to the merchant.
          <br />
          <br /> In-store or in-warehouse prices and other applicable fees (such
          as taxes and other fees that the merchant charges, like bottle
          deposits and e-waste fees) may vary based on actual in-store or
          in-warehouse item prices and availability.
          <br />
          <br /> For example, items sold by weight may end up costing a little
          more or less than the price listed on BarBak Hospitality, depending on
          the exact weight and price of what&#39;s chosen for you. Also, if
          something is out of stock, the substitutes you get may have prices
          different from your original items. Because these prices (and the
          associated taxes and other fees the merchant charges) may vary based
          on current in-store or in-warehouse item prices and availability, we
          may authorize your card for an estimated amount that includes a
          reasonable buffer to cover that variance. You&#39;ll pay the in-store
          or in-warehouse price (and the associated taxes and other fees the
          merchant charges) for the items in your order, and the total will show
          on your final receipt. If the total exceeds the designated reasonable
          buffer for your order, then part or all of your order will be
          automatically declined, and you may choose to resubmit the declined
          part of your order at the new price. Items are purchased from
          individual stores as listed in your cart and your order history. The
          shipping & service fee is not a tip. All service fees are paid to
          BarBak Hospitality.
          <br />
          <br /> By using BarBak Hospitality you agree to allow BarBak
          Hospitality to charge the credit card on file and/or debit funds
          directly from the bank account you have set up on our App. If your
          primary method of payment is credit card and the credit card fails,
          the second credit card will be charged immediately. If your primary
          method of payment is ACH bank transfer and the ACH bank transfer
          fails, then your credit card will be charged immediately &#8211; this
          includes the credit card processing fee of 3%. Neither BarBak
          Hospitality nor its vendors on the platform offer credit and therefore
          payment is due upon delivery of the order.
        </p>
      </div>

      <Footer />
    </div>
  );
}
