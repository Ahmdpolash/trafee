import React from "react";
import Container from "../container/Container";
import icon1 from "@/assest/icon1.png";
import icon2 from "@/assest/icon2.png";
import icon3 from "@/assest/icon3.png";
import Image from "next/image";

const Monetize = () => {
  return (
    <div className="mt-5 md:mt-7 lg:mt-10 ">
      <Container>
        <div className="">
          <div className="text-center mx-auto space-y-2">
            <h1 className="font-bold tracking-wide text-xl lg:text-4xl">
              How we monetize your traffic? Easy
            </h1>
            <p className="tracking-wider font-normal text-[#000]">
              Trafee is a CPA affiliate network that provide access to more than
              4 000 offers. Our unique traffic optimization <br /> algorithm
              will manage your traffic and automatically increase conversion
              rates.
            </p>
          </div>

          <div className="max-w-6xl mx-auto my-5 mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center mb-2 lg:mb-0">
              <Image
                className="mx-auto mb-2"
                src={icon1}
                height={40}
                width={120}
                alt="icon"
              />
              <h1 className="font-bold  text-[18px] lg:text-[23px] tracking-wide text-[#000]">
                Smart Targeting
              </h1>
              <p className="text-[#606060] text-[16px] font-normal">
                to maximize your ROI
              </p>
            </div>
            <div className="text-center mb-2 lg:mb-0">
              <Image
                className="mx-auto mb-2"
                src={icon2}
                height={40}
                width={120}
                alt="icon"
              />
              <h1 className="font-bold  text-[18px] lg:text-[23px] tracking-wide text-[#000]">
                Best Offers
              </h1>
              <p className="text-[#606060] text-[16px] font-normal">
                from direct advertisers
              </p>
            </div>
            <div className="text-center mb-2 lg:mb-0">
              <Image
                className="mx-auto mb-2"
                src={icon3}
                height={40}
                width={120}
                alt="icon"
              />
              <h1 className="font-bold  text-[18px] lg:text-[23px] tracking-wide text-[#000]">
                Weekly payout
              </h1>
              <p className="text-[#606060] text-[16px] font-normal">
                from $100 without hold
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Monetize;
