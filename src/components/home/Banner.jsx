import React from "react";
import Container from "../container/Container";

const Banner = () => {
  return (
    <div className=" h-[calc(100vh_-_90px)] w-full flex items-center ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-white space-y-1 lg:space-y-3">
            <div className="font-medium text-xl md:text-4xl lg:text-6xl flex flex-col tracking-wide space-y-1 ">
              <span> Monetize Webcam</span>
              <span> traffic and level up</span>
              <span> your profit</span>
            </div>
            <p className="text-[18px] lg:text-[21px] tracking-wide font-medium pt-4">
              The unique offers from premium advertisers powering <br /> the
              highest traffic monetisation in one unified platform.
            </p>
            <div className="pt-6">
              <button className="bg-white hover:bg-[#222] hover:text-white transition-all hover:duration-300 h-14  rounded-md text-black  tracking-wide text-[15px] uppercase w-52">
                Start
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
