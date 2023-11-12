import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/legacy/image";

export default function TermsandConditions() {
  return (
    <div>
      <Header />
      <div className="bg-[url('../img/bg_black.jpg')] bg-no-repeat bg-center bg-cover ">
        <div className="bg-[url('../img/patternDown.png')] bg-no-repeat bg-bottom bg-contain">
          <div className="lg:h-[80vh] h-[50vh] flex flex-col justify-center items-center">
            <h1 className="text-[#F7BC06] lg:text-[100px] md:text-[70px] text-[48px] lg:mt-5 mt-10 text-center leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.6)]">
              TERMS <br /> &#38; <br /> CONDITIONS
            </h1>
          </div>
        </div>
      </div>

      <div>
        <p className="text-black lg:text-[24px] md:text-[18px] text-[16px] text-justify flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          These Terms and Conditions govern the use of the services offered by
          BarBak Hospitality (“BarBak Hospitality”) at the BarBak Hospitality
          website and mobile Application (the “Website”). Such services and
          Website together are hereinafter referred to as the “Support.” Please
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
          hereinafter referred to as the “Agreement.”
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

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          RETURNS
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          If you wish to return an item from an order you must notify the driver
          at the time of delivery of that order. All returns of merchandise are
          subject to the return policy of the Vendors on the platform from which
          you ordered. All product must be in the original packaging and must be
          in a re-sellable format. If product is removed from the original
          packaging or the original packaging is damaged we cannot return the
          product nor issue a refund. All perishable items must be returned
          within 24 hours of the original delivery date or we cannot return the
          product nor issue a refund. All non perishable product must be
          returned within 7 days of the original delivery date.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          CANCELLATION
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          If the customer cancels an order the day of delivery, they will be
          charged a $50.00 cancellation fee. If the customer cancels an order
          the day of pick-up, they will be charged a $15.00 cancellation fee.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          UNPAID INVOICES
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          If you order and do not pay your invoice (this includes when your
          credit card fails or ACH fails due to insufficient funds) you will
          need to pay the amount of the invoice before you can make additional
          purchases.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          CREDIT EXPIRATION
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          Credits issued by BarBak Hospitality will be valid to apply for future
          orders up to 60 days from the date the credit was issued. Following
          the expiration date, the credit will fully expire and the customer
          will not be eligible to apply the expired credit to any future order.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          ORDER RELEASE CONSENT
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          Customer acknowledges and agrees that by approving BarBak Hospitality
          to release their order when no one is present, BarBak Hospitality will
          make one delivery attempt and will reasonably try to obtain a
          signature upon delivery, and photos of the drop. The BarBak
          Hospitality delivery record will be conclusive proof of delivery.
          Customer acknowledges and agrees to release BarBak Hospitality from
          all liability for any loss or damage that may result from delivering
          the order when no one is present according to the Customer&#39;s
          approval.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          RE-DELIVERY FEE
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          The customer will be charged a $50.00 re-delivery fee if they are not
          present at the delivery location during their selected delivery window
          and do not have a signed release consent form leading to a delay of
          more than 10 minutes or redelivery later that day.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          JUST IN TIME PRODUCTS: ORDER REFUSAL, CANCELATION, REDELIVERY AND
          AUTO-SHIP POLICY
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          The customer may refuse an item without being charged or
          credited/refunded for it if BarBak Hospitality confirms shipping the
          wrong item and/or if the item was damaged prior to delivery. If the
          customer orders the wrong item, changes their mind and refuses the
          item they will be fully charged for it.
          <br />
          <br /> A customer must select a delivery date prior to expired
          shelf-life of the JIT item they selected. If they fail to do so,
          BarBak Hospitality will auto-ship the item.
          <br />
          <br /> When does BarBak Hospitality auto-ship the JIT items to the
          customer?
          <br /> • Perishable (≤14 days of shelf life): Shipped to the customer
          within 2 calendar days of arrival to the Fulfillment Center
          <br /> • Non-short shelf life (&#62;14 days): Shipped to the customer
          within 5 days of arrival to the FC
          <br />
          <br /> The customer will incur regular delivery fees associated with
          the auto-shipped order based on their membership status and $ value of
          items purchased within that order. If the customer is not present at
          delivery location and does not have a signed release consent form,
          resulting in delay of more than 10 minutes or second attempt later
          that day, the customer will be charged a $50 redelivery fee. If the
          order is fully canceled, the customer will be charged a $100
          cancelation fee on top of the JIT item price.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          RELEASE
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          YOU AGREE THAT NEITHER BarBak Hospitality NOR ITS AFFILIATES OR
          LICENSORS IS RESPONSIBLE FOR ANY ERRORS, MISTAKES OR OMISSIONS
          RESULTING FROM OUR SERVICE. IN THE EVENT YOU HAVE A DISPUTE RESULTING
          FROM OUR SERVICE, YOU HEREBY RELEASE BarBak Hospitality AND ITS
          OFFICERS, DIRECTORS, EMPLOYEES, SUBSIDIARIES, AFFILIATES, AGENTS AND
          REPRESENTATIVES FROM ANY AND ALL CLAIMS, LIABILITIES, COSTS, INCLUDING
          WITHOUT LIMITATION ATTORNEY&#39;S FEES, LOSS OR DAMAGE OF EVERY KIND
          AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED
          WITH SUCH DISPUTES.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          TRANSACTIONS INVOLVING ALCOHOLIC BEVERAGES
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          Alcoholic beverages may only be purchased by businesses with current
          and updates Alcohol Licenses, including without limitation Customers,
          who are at least twenty-one (21) years old (“Legal Age”). If you are a
          Customer, you expressly represent and warrant that: (i) you have an
          valid Alcoholic Beverage License; and (ii) you will provide bona fide
          identification showing your Legal Age to your Personal Shopper upon
          delivery to you pursuant to the Shopper Services of any Supplies that
          include Alcoholic Beverages.
          <br />
          <br /> BarBak Hospitality does not charge any fee with respect to
          Alcoholic Beverages or Customer&#39;s purchase of Alcoholic Beverages
          from retailers. When Customer places an order for Alcoholic Beverages
          using the Website (“Alcoholic Beverage Order”), such Alcoholic
          Beverage Order will be either accepted or rejected by the retailer to
          whom the Alcoholic Beverage Order was placed (“Merchant”). BarBak
          Hospitality does not have any authority to accept Customer&#39;s
          Alcoholic Beverage Order, and no sale pursuant to Customer&#39;s
          Alcoholic Beverage Order will become final unless and until Merchant
          accepts Customer&#39;s Alcoholic Beverage Order. For any Alcoholic
          Beverage Order accepted by Seller (such accepted sale an “Alcoholic
          Beverage Purchase”), Customer&#39;s credit card shall be charged, and
          that portion of the funds from Customer&#39;s credit card payment that
          relates to the Alcoholic Beverage Purchase shall be deposited into an
          account for the benefit of Seller in compliance with applicable
          alcoholic beverage laws.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          APIS AND THIRD PARTIES
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          Customer acknowledges and agrees that the Services operate on or with
          or using application programming interfaces (APIs) and/or other
          services operated or provided by third parties (“Third Party
          Services”). BarBak Hospitality is not responsible for the operation of
          any Third Party Services nor the availability or operation of the
          Services to the extent such availability and operation is dependent
          upon Third Party Services. Customer is solely responsible for
          procuring any and all rights necessary for it to access Third Party
          Services and for complying with any applicable terms or conditions
          thereof. BarBak Hospitality does not make any representations or
          warranties with respect to Third Party Services or any third party
          providers. Any exchange of data or other interaction between Customer
          and a third party provider is solely between Customer and such third
          party provider and is governed by such third party&#39;s terms and
          conditions.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          USE OF MATERIAL
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          Except as otherwise provided herein, all rights to all materials,
          content, layout, images, text, design (and any underlying software and
          computer codes) of this Website are proprietary to BarBak Hospitality
          and its affiliates. Users of this Website or of the BarBak Hospitality
          Support (“you” or “User(s)”) may browse the Website and may download
          material displayed on the Website for non-commercial, lawful, personal
          use only, provided all copyright and other proprietary notices
          contained on the material so downloaded are retained and such
          information is not modified, copied or posted on any networked
          computer or broadcast in any media. All other copying, reproduction,
          posting on any other website, republication, downloading, uploading,
          encoding, modification, translation, public performance or display,
          distribution or transmission of any portion of this Website, or the
          making of any derivative works from this Website, is prohibited.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          USER SUBMISSIONS
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          This Website may now or in the future permit the submission, sharing
          or publishing of photographs, videos, comments, communications or
          other content submitted by you and other users (“User Submissions”).
          Other than personally identifiable information, which is covered under
          the BarBak Hospitality Privacy Policy available https://goBarBak
          Hospitality.com/privacy, any User Submission transmitted or posted to
          this Website will be considered non-confidential. In addition, by
          submitting any User Submission to BarBak Hospitality, you hereby grant
          BarBak Hospitality a perpetual, worldwide, non-exclusive,
          royalty-free, sublicenseable and transferable license to use,
          reproduce, distribute, prepare derivative works of, display and
          perform the User Submission in connection with the Website, the
          Support and BarBak Hospitality&#39;s business. You hereby grant each
          User of the Website a non-exclusive license to access your User
          Submissions through the Website and to display and publicly perform
          such User Submissions as permitted through the functionality of the
          Website and under these Terms and Conditions.
          <br />
          <br /> In connection with User Submissions, you agree that you will
          not submit material that: (i) is copyrighted, subject to privacy or
          publicity rights or otherwise subject to third party proprietary
          rights unless you are the owner of such rights or have permission from
          the owner to submit the material and to grant BarBak Hospitality all
          of the license rights granted herein; (ii) is unlawful, obscene,
          harassing, defamatory, libelous, pornographic, hateful, racially or
          ethnically offensive or is otherwise inappropriate; (iii) could damage
          the reputation of BarBak Hospitality or any third party; or (iv)
          impersonates another person. BarBak Hospitality reserves the right to
          remove any User Submissions at its sole discretion and without notice
          or liability to you or to any other person.
          <br />
          <br /> BarBak Hospitality does not endorse any User Submission or any
          opinion, recommendation or advice therein, and BarBak Hospitality
          expressly disclaims any and all liability in connection with any User
          Submission. You understand and agree that you may be exposed to User
          Submissions that are inaccurate, offensive or otherwise objectionable,
          and you hereby agree to waive and hereby do waive any legal or
          equitable rights or remedies you may have against BarBak Hospitality
          with respect thereto. BarBak Hospitality may provide links to websites
          owned or operated by third parties. BarBak Hospitality does not
          endorse the content or any products or services available on such
          websites and is not responsible for such content or its security. Your
          linking to any other websites from this Website is at your own risk.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          REFERRAL PROGRAM RULES
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          The BarBak Hospitality Referral Program (“Referral Program”) is
          offered by BarBak Hospitality and provides users who are interested in
          referring their family, friends, and restaurant businesses
          (“Referrers”) the opportunity to refer eligible individuals to join
          the BarBak Hospitality community. These Program Rules apply to both
          Referrers and Referred friends or businesses (“Referred” friends or
          businesses). You are eligible to earn a referral incentive (“Referral
          Credits”) for each Referred friend or business that you refer to the
          BarBak Hospitality Platform (subject to certain maximum limits and the
          other terms in these Program Rules). Referral Credits can only be
          earned for Referrals in BarBak Hospitality&#39;s serviceable areas.
          <br />
          <br />
          Referrers can earn Referral Credits if: (i) a Referred friend clicks
          on their referral link or copies the alphanumerical Referral code to
          apply the offer to their respective account and (ii) the Referred
          friend completes a Qualifying Purchase based on the offer criteria.
          The Referrer will be credited with the Credit amount(s) specified for
          each type of offer in the referral invitation or accompanying
          promotional materials after the completion of the Referred
          friend&#39;s Qualifying Purchase. A Qualifying Purchase must have the
          minimum total value indicated in the referral invitation.
          <br />
          <br /> Referred friends will also receive credit in the form of
          account credits in the amount(s) indicated in the referral invitation
          or accompanying promotional materials that can be used on their first
          Qualifying Purchase.
          <br />
          <br /> A Referral Code may not be distributed or published either
          directly or indirectly in any form or stored in data retrieval systems
          or third party websites without our prior written approval.
          Additionally, Referrals are only for first-time customers of BarBak
          Hospitality, unless the offer states otherwise. BarBak Hospitality
          reserves the right to terminate the Referral Program or a user&#39;s
          ability to participate in it at any time for any reason. You
          acknowledge and agree that: (a) BarBak Hospitality may limit the
          number of Referral Code redemptions made available to you, (b) you
          have no ownership rights in any form over the BarBak Hospitality
          Codes, and (c) BarBak Hospitality may reclaim, deactivate, invalidate
          or terminate your Referral Code at any time at its discretion.
          <br />
          <br /> We reserve the right to suspend accounts or remove credits if
          we notice any activity that we believe is abusive, fraudulent, or in
          violation of the BarBak Hospitality Terms of Service. We reserve the
          right to review and investigate all referral activities and to suspend
          accounts or modify referrals in our sole discretion as deemed fair and
          appropriate.
          <br />
          <br /> The scope, variety, and type of services and products that you
          may obtain by redeeming Referral credits can change at any time.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          USER ACCOUNT
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          You are the sole authorized User of any account you create with BarBak
          Hospitality. You are responsible for maintaining the confidentiality
          of any password or account number provided by you or BarBak
          Hospitality for accessing the Support. You are solely and fully
          responsible for all activities that occur under your password or
          account. BarBak Hospitality has no control over the use of any
          User&#39;s account and expressly disclaims any liability derived
          therefrom. Should you suspect that any unauthorized party may be using
          your password or account, you will notify BarBak Hospitality
          immediately. You may opt-out of receiving text messages from us by
          emailing info@bar-bak.com . If you provide your cell phone number to
          BarBak Hospitality pursuant to the use of the Services, you hereby
          affirmatively consent to our use of your cell phone number for calls
          and texts in order to perform the Services.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          DISCLAIMER
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          USE OF THE SUPPORT IS ENTIRELY AT YOUR OWN RISK. CHANGES ARE
          PERIODICALLY MADE TO THE WEBSITE AND MAY BE MADE AT ANY TIME WITHOUT
          NOTICE TO YOU. THE SUPPORT IS PROVIDED ON AN “AS IS” BASIS WITHOUT
          WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
          LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE AND NON-INFRINGEMENT. BarBak Hospitality MAKES NO WARRANTIES
          OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE CONTENT
          PROVIDED THROUGH THE SUPPORT OR THE CONTENT OF ANY WEBSITES LINKED TO
          THE BarBak Hospitality WEBSITE. BarBak Hospitality ASSUMES NO
          LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR
          INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF
          ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
          BarBak Hospitality WEBSITE OR THE SUPPORT; (III) ANY UNAUTHORIZED
          ACCESS TO OR USE OF BarBak Hospitality&#39;S SECURE SERVERS AND/OR ANY
          AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
          THEREIN.
          <br />
          <br />
          BARBAK HOSPITALITY DOES NOT WARRANT THAT THE WEBSITE WILL OPERATE
          ERROR-FREE OR THAT THE WEBSITE AND ITS SERVER ARE FREE OF COMPUTER
          VIRUSES AND OTHER HARMFUL GOODS. IF YOUR USE OF THE WEBSITE RESULTS IN
          THE NEED FOR SERVICING OR REPLACING EQUIPMENT OR DATA, BarBak
          Hospitality SHALL NOT BE RESPONSIBLE FOR THOSE COSTS. BarBak
          Hospitality, TO THE FULLEST EXTENT PERMITTED BY LAW, DISCLAIMS ALL
          WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION
          THE WARRANTY OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTY
          RIGHTS AND THE WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE. BarBak
          Hospitality MAKES NO WARRANTIES ABOUT THE ACCURACY, RELIABILITY,
          COMPLETENESS OR TIMELINESS OF THE CONTENT, SERVICES, SUPPORT,
          SOFTWARE, TEXT, GRAPHICS OR LINKS. BarBak Hospitality AND ITS
          AFFILIATES AND LICENSORS CANNOT AND DO NOT GUARANTEE THAT ANY PERSONAL
          INFORMATION SUPPLIED BY YOU WILL NOT BE MISAPPROPRIATED, INTERCEPTED,
          DELETED, DESTROYED OR USED BY OTHERS.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          LIMITATION OF LIABILITY
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          YOU AGREE THAT BARBAK HOSPITALITY SHALL NOT BE LIABLE FOR ANY DIRECT,
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES
          ARISING OUT OF OR IN CONNECTION WITH (I) YOUR USE OF THE SUPPORT; (II)
          IN CONNECTION WITH THE PERFORMANCE OF OR BROWSING IN THE WEBSITE OR
          YOUR LINKS TO OTHER WEBSITES FROM THIS WEBSITE, EVEN IF BarBak
          Hospitality HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOU
          FURTHER AGREE THAT BarBak Hospitality SHALL NOT BE LIABLE FOR ANY
          DAMAGES ARISING FROM INTERRUPTION, SUSPENSION OR TERMINATION OF
          SERVICES, INCLUDING WITHOUT LIMITATION ANY DIRECT, INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, WHETHER SUCH
          INTERRUPTION, SUSPENSION OR TERMINATION WAS JUSTIFIED OR NOT,
          NEGLIGENT OR INTENTIONAL, INADVERTENT OR ADVERTENT. IN NO EVENT SHALL
          BarBak Hospitality&#39;S TOTAL LIABILITY TO YOU FOR ANY LOSSES ARISING
          HEREUNDER EXCEED THE AMOUNTS PAID BY YOU TO BarBak Hospitality
          HEREUNDER. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION
          OF WARRANTIES OR OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES
          SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. SHOULD A
          JURISDICTION BE ADVERSE TO A LIMITATION OR EXCLUSION OF WARRANTIES,
          SUCH PROVISION SHALL BE DEEMED SEVERABLE FROM THIS AGREEMENT AND THE
          OTHER PROVISIONS SHALL REMAIN IN FULL FORCE AND EFFECT.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          INDEMNITY
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          You agree to defend, indemnify and hold harmless BarBak Hospitality
          and its officers, directors, employees, agents and affiliates (each,
          an “Indemnified Party”), from and against any losses, claims, actions,
          costs, damages, penalties, fines and expenses, including without
          limitation attorneys&#39; fees and expenses, that may be incurred by
          an Indemnified Party arising out of, relating to or resulting from
          your unauthorized use of the Website or from any breach by you of
          these Terms and Conditions, including without limitation any actual or
          alleged violation of any federal, state or local statute, ordinance,
          administrative order, rule or regulation. BarBak Hospitality shall
          provide notice to you promptly of any such claim, suit or proceeding
          and shall have the right to control the defense of such action, at
          your expense, in defending any such claim, suit or proceeding.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          TERMINATION
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          At its sole discretion, BarBak Hospitality may modify or discontinue
          the Website, or may modify, suspend or terminate your access to the
          Website or the Support, for any reason, with or without notice to you
          and without liability to you or any third party. In addition to
          suspending or terminating your access to the Website or the Support,
          BarBak Hospitality reserves the right to take appropriate legal
          action, including without limitation pursuing civil, criminal or
          injunctive redress. Even after your right to use the Support is
          terminated, this Agreement will remain enforceable against you. You
          may terminate this Agreement at any time by ceasing all use of the
          Support. All provisions which by their nature should survive to give
          effect to those provisions shall survive the termination of this
          Agreement.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          DISPUTE RESOLUTION
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          The parties shall first attempt to resolve any dispute related to this
          Agreement in an amicable manner by mediation with a mutually
          acceptable mediator. If unable to agree upon an acceptable mediator,
          either party may ask a mutually agreed upon mediation service to
          appoint a neutral mediator, and the mediation shall be conducted under
          the Commercial Mediation Rules of the mutually acceptable mediation
          service. Any disputes remaining unresolved after mediation shall be
          settled by binding arbitration conducted in Fort Lauderdale, Florida
          utilizing a mutually agreed arbitrator or arbitration service. The
          arbitration shall be conducted under the Commercial Arbitration Rules
          of the mutually agreed arbitrator or arbitration service. Both parties
          shall be entitled in any arbitration to conduct reasonable discovery,
          including document production and a reasonable number of depositions
          not to exceed five per party. The prevailing party shall be entitled
          to recover its costs and reasonable attorney&#39;s fees, as determined
          by the arbitrator. The arbitrator shall be required to follow the law.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          GOVERNING LAW AND SEVERABILITY
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          This Agreement is governed by the laws of the State of Florida,
          without regards to its conflict of laws principles. If any provision
          of this Agreement is found to be invalid in any court having competent
          jurisdiction, the invalidity of such provision shall not affect the
          validity of the remaining provisions of this Agreement, which shall
          remain in full force and effect. Any offer for any product, feature,
          service or application made on this Website is void where prohibited.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          NO AGENCY
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          No independent contractor, agency, partnership, joint venture,
          employer-employee or franchiser-franchisee relationship is intended or
          created by this Agreement.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          CHANGES TO THE AGREEMENT
        </h1>
        <p className="text-black text-justify lg:text-[24px] md:text-[18px] text-[16px] flex justify-center lg:px-[120px] lg:py-10 p-5 leading-tight font-bold ">
          BarBak Hospitality reserves the right, at its sole and absolute
          discretion, to change, modify, add to, supplement or delete any of the
          terms and conditions of this Agreement, effective with or without
          prior notice. Your continued use of the Website or the Support
          following any revision to this Agreement constitutes your complete and
          irrevocable acceptance of any and all such changes.
        </p>
      </div>

      <div>
        <h1 className="text-[#F7BC06] lg:text-[48px] md:text-[32px] text-[24px] flex lg:px-[120px] px-5 leading-tight font-bold drop-shadow-[-3px_2px_4px_rgba(0,0,0,0.2)]">
          CONTACT US
        </h1>
        <ul className=" lg:px-[120px] lg:text-[24px] lg:py-10 p-5 font-bold">
          <li className="hover:text-[#F7BC06] ease-in-out duration-300 cursor-pointer w-fit">
            <a href="mailto:Info@bar-bak.com">Info@bar-bak.com</a>
          </li>

          <li className="hover:text-[#F7BC06] ease-in-out duration-300 cursor-pointer w-fit">
            <a href="tel:+1704-980-2860">704-980-2860</a>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
