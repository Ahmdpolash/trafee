import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import icon1 from "@/assest/i1.png";
import icon2 from "@/assest/i2.png";
import icon3 from "@/assest/i3.png";
import icon4 from "@/assest/i4.png";
import icon5 from "@/assest/i5.png";
import icon6 from "@/assest/i6.png";

const Best = () => {
  return (
    <div className="my-5 mt-5">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <h1 className="font-semibold text-xl lg:text-3xl tracking-wider">
              Best PPL and PPS Offers
            </h1>
            <p className="font-normal tracking-wide text-[22px] text-slate-800">
              with high payouts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 lg:mt-8">
            <div className="shadow-lg shadow-slate-500/40 border rounded-xl px-4 py-8">
              <div className="text-center space-y-2">
                <Image
                  className="mx-auto mb-4"
                  src={icon1}
                  height={40}
                  width={110}
                  alt="icon"
                />
                <h3 className="text-[17px] lg:text-2xl tracking-wide font-medium">
                  Any Devices
                </h3>
                <p className="font-normal text-[14px] text-gray-600">
                  Optimized smartlinks for Mobile, Tablet, <br /> Desktop and
                  Smart TV.
                </p>
              </div>
            </div>

            <div className="shadow-lg shadow-slate-500/40 border rounded-xl px-4 py-8">
              <div className="text-center space-y-2">
                <Image
                  className="mx-auto mb-4"
                  src={icon2}
                  height={40}
                  width={110}
                  alt="icon"
                />
                <h3 className="text-[17px] lg:text-2xl tracking-wide font-medium">
                  Variety payments
                </h3>
                <p className="font-normal text-[14px] text-gray-600">
                  A wide variety of internal and international payment options.
                </p>
              </div>
            </div>

            <div className="shadow-lg shadow-slate-500/40 border rounded-xl px-4 py-8">
              <div className="text-center space-y-2">
                <Image
                  className="mx-auto mb-4"
                  src={icon3}
                  height={40}
                  width={110}
                  alt="icon"
                />
                <h3 className="text-[17px] lg:text-2xl tracking-wide font-medium">
                  Personal domains
                </h3>
                <p className="font-normal text-[14px] text-gray-600">
                  Personal domains for our affiliates to avoid blocking.
                </p>
              </div>
            </div>

            <div className="shadow-lg shadow-slate-500/40 border rounded-xl px-4 py-8">
              <div className="text-center space-y-2">
                <Image
                  className="mx-auto mb-4"
                  src={icon4}
                  height={40}
                  width={110}
                  alt="icon"
                />
                <h3 className="text-[17px] lg:text-2xl tracking-wide font-medium">
                  Various traffic types
                </h3>
                <p className="font-normal text-[14px] text-gray-600">
                  Wide rage of traffic monetization as well as Adult Traffic
                  with the highest conversion
                </p>
              </div>
            </div>

            <div className="shadow-lg shadow-slate-500/40 border rounded-xl px-4 py-8">
              <div className="text-center space-y-2">
                <Image
                  className="mx-auto mb-4"
                  src={icon5}
                  height={40}
                  width={110}
                  alt="icon"
                />
                <h3 className="text-[17px] lg:text-2xl tracking-wide font-medium">
                  100+ Countries
                </h3>
                <p className="font-normal text-[14px] text-gray-600">
                  Our smartlinks are active in 100+ countries and 20+ languages.
                </p>
              </div>
            </div>

            <div className="shadow-lg shadow-slate-500/40 border rounded-xl px-4 py-8">
              <div className="text-center space-y-2">
                <Image
                  className="mx-auto mb-4"
                  src={icon6}
                  height={40}
                  width={110}
                  alt="icon"
                />
                <h3 className="text-[17px] lg:text-2xl tracking-wide font-medium">
                  Support 24/7
                </h3>
                <p className="font-normal text-[14px] text-gray-600">
                  Personal affiliate managers and 24/7 support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Best;
