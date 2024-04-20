import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import img from "@/assest/card.jpg";

const Banner = () => {
  return (
    <div className=" lg:h-[calc(100vh_-_30px)] w-full flex items-center ">
      <Container>
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <div className="text-white w-full lg:w-[52vw] mt-5  lg:mt-7 space-y-1 lg:space-y-3">
            <div className="font-medium text-[17px] md:text-4xl lg:text-6xl flex flex-col tracking-wide space-y-1 ">
              <span> Monetize Webcam</span>
              <span> traffic and level up</span>
              <span> your profit</span>
            </div>
            <p className="text-[16px] lg:text-[21px] tracking-wide font-medium pt-4">
              The unique offers from premium advertisers powering <br /> the
              highest traffic monetisation in one unified platform.
            </p>
            <div className="pt-6">
              <button className="bg-white hover:bg-[#222] hover:text-white transition-all hover:duration-300 h-10 lg:h-14  rounded-md text-black  tracking-wide text-[15px] uppercase w-44 lg:w-52">
                Start
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[37vw]  h-auto mt-5 lg:mt-0">
            <div className="flex justify-center mx-auto items-center gap-7 mb-5">
              <div
                style={{
                  backgroundImage: `url("https://www.trafee.com/wp-content/uploads/2024/03/inside.jpg")`,
                  backgroundSize: "cover",
                }}
                className="h-[170px] lg:h-[275px]  w-full relative rounded-2xl"
              >
                <div className="absolute p-5 lg:p-6 inset-0 bg-black rounded-2xl bg-opacity-50 flex justify-center items-center lg:justify-start lg:items-start">
                  <div div className="text-white ">
                    <h2 class="text-[16px] lg:text-[22px] tracking-wider font-bold lg:mb-20">
                      Join the IGaming <br /> with Geekteams
                    </h2>
                    <button className="bg-white hidden lg:block hover:bg-[#F79A43] hover:text-white duration-300 absolute bottom-6 text-black py-[6px] px-4 rounded-md">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundImage: `url("https://www.trafee.com/wp-content/uploads/2023/12/igaming_7.jpg")`,
                  backgroundSize: "cover",
                }}
                className="h-[170px] lg:h-[275px] w-full relative rounded-2xl"
              >
                <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-50 flex  p-5 lg:p-6  justify-center items-center lg:justify-start lg:items-start">
                  <div div className="text-white ">
                    <h2 class="text-[16px] lg:text-[22px] tracking-wider font-bold lg:mb-16">
                      Geekteams Guide to <br /> the IGaming <br /> Industry in
                      2024
                    </h2>
                    <button className="bg-white hidden lg:block hover:bg-[#F79A43] hover:text-white duration-300 absolute bottom-6 text-black py-[6px] px-4 rounded-md">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  justify-center mx-auto items-center gap-7">
              <div
                style={{
                  backgroundImage: `url("https://www.trafee.com/wp-content/uploads/2023/12/igaming_7.jpg")`,
                  backgroundSize: "cover",
                }}
                className="h-[170px] lg:h-[275px] w-full relative rounded-2xl"
              >
                <div className="absolute inset-0  p-5 lg:p-6  bg-black rounded-2xl bg-opacity-50 flex justify-center items-center lg:justify-start lg:items-start">
                  <div div className="text-white ">
                    <h2 class="text-[16px] lg:text-[22px] tracking-wider font-bold lg:mb-20">
                      Technologies <br /> shipping iGaming <br /> Future
                    </h2>
                    <button className="bg-white hidden lg:block hover:bg-[#F79A43] hover:text-white duration-300 absolute bottom-6 text-black py-[6px] px-4 rounded-md">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundImage: `url("https://www.trafee.com/wp-content/uploads/2023/11/trafee-newcomer-pack.jpg")`,
                  backgroundSize: "cover",
                }}
                className="h-[170px] lg:h-[275px] w-full relative rounded-2xl"
              >
                <div className="absolute  p-5 lg:p-6  inset-0 bg-black rounded-2xl bg-opacity-50 flex justify-center items-center lg:justify-start lg:items-start">
                  <div div className="text-white ">
                    <h2 class="text-[16px] lg:text-[22px] tracking-wider font-bold lg:mb-20">
                      NewComer Pack - <br /> Bonuses for new <br /> Affiliates
                    </h2>
                    <button className="bg-white hidden lg:block hover:bg-[#F79A43] hover:text-white duration-300 absolute bottom-6 text-black py-[6px] px-4 rounded-md">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
