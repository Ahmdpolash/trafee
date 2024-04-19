import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import robot from "@/assest/robot.svg";
const SmartLink = () => {
  return (
    <div className="mt-4 relative my-5 smartlink lg:pt-[380px]">
      <Container>
        <div className="space-y-2 ">
          <h1 className="text-[#000000] tracking-wide font-bold text-[18px] md:text-2xl lg:text-3xl">
            GeekTeams.com - smartlink of new <br /> Generation!
          </h1>
          <p className="text-slate-700  font-normal tracking-wide">
            We present Trafee.com - one of the top affiliate <br /> networks
            with innovative traffic monetization. <br /> Absolutely automatic
            smartlink system, without a <br /> million managers, maximum profit
            from your clicks!
          </p>
          <div className=" lg:pt-4">
            <a
              href=""
              className=" rounded-md  text-[18px] button--s1 button--t1 py-2 text-white block"
            >
              <span>SIGN UP AND EARN</span>{" "}
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            className="w-[320px] animate-bounce duration-700 absolute lg:left-[40%] bottom-0"
            src={robot}
            width={150}
            height={70}
            alt="robot"
          />
        </div>
        <div className="flex justify-start lg:justify-end">
          <div className="box text-left mt-">
            <div className="p-4 border-4 border-[#FFA83F] rounded-2xl">
              <p className="leading-8 tracking-wide">
                Trafee works mostly with experienced marketing partners or
                webmasters. When registering, you must be ready to provide
                information such as your traffic sources, geo, ad formats, your
                experience with similar companies with statistics. We will
                consider your application within 48 hours. Register and
                SmartLink will analyze your traffic in detail and select the
                most relevant creatives that will maximize your income!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SmartLink;
