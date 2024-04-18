import React from "react";
import Container from "../container/Container";
import img1 from "@/assest/phone.png";
import img2 from "@/assest/phone2.png";
import Image from "next/image";

const Video = () => {
  return (
    <div className="mt-4 ">
      <Container>
        <div className="max-w-4xl mx-auto ">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <div className="flex items-center mb-3 lg:mb-0">
              <Image
                className="w-ful "
                src={img1}
                height={50}
                width={170}
                alt="phone"
              />
              <Image
                className="w-full"
                src={img2}
                height={70}
                width={180}
                alt="phone"
              />
            </div>

            <div>
              <iframe
                width="560"
                height="315"
                className="w-full"
                src="https://www.youtube.com/embed/EVZdH-ANpNg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
