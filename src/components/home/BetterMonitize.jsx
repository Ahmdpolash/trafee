import React from "react";
import img from "@/assest/monetize.svg";
import Image from "next/image";
import Container from "../container/Container";
import { RiUser3Line } from "react-icons/ri";
import { BsCheckSquare } from "react-icons/bs";
import { RiEditBoxLine } from "react-icons/ri";


const BetterMonitize = () => {
  return (
    <div>
      <Container>
        <div className="my-5 lg:my-8">
          <h1 className="text-center text-xl lg:text-4xl font-semibold tracking-wider">
            Monetize better. Faster. Effectively.
          </h1>

          <div className="grid my-5 items-center pt-4 grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <div>
              <Image
                className="w-[540px]"
                src={img}
                width={500}
                height={70}
                alt="monetize"
              />
            </div>
            <div>
              <div className="space-y-2 lg:space-y-5 flex flex-col">
                <div className="flex items-center gap-2">
                  <RiUser3Line className="text-[30px] text-[#EEAC4A]" />

                  <span className="tracking-wide text-xl lg:text-xl text-slate-700 font-normal">
                    Smart AI targeting for best matching offers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <RiEditBoxLine className="text-[28px] text-[#EEAC4A]" />
                  <span className="tracking-wide text-xl lg:text-xl text-slate-700 font-normal">
                    Real time statistics
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BsCheckSquare className="text-[26px] text-[#EEAC4A]" />

                  <span className="tracking-wide text-xl lg:text-xl text-slate-700 font-normal">
                    Awesome and easy to use interface
                  </span>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BetterMonitize;
