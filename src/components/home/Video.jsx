import React from "react";
import Container from "../container/Container";
import img1 from "@/assest/phone.png";
import img2 from "@/assest/phone2.png";
import Image from "next/image";

const Video = () => {
  return (
    <div className="mt-4 ">
      <Container>
        <div className="max-w-5xl mx-auto ">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <div className="flex w-full items-center mb-3 lg:mb-0">
              <Image
                className=" "
                src={img1}
                height={140}
                width={210}
                alt="phone"
              />
              <Image
                className=""
                src={img2}
                height={110}
                width={280}
                alt="phone"
              />
            </div>

            <div className="w-full h-full border-2 border-slate-600 rounded-md">
              <iframe
                width={450}
                height={310}
                className="w-full "
                src="https://www.youtube.com/embed/EVZdH-ANpNg"
                title="YouTube video player"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Video;
