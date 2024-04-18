import Container from "@/components/container/Container";
import logo from "@/assest/logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_layout">
      <div className="footer__layout--middle">
        <Container className="">
          <div className="logo">
            <Image
              className="mx-auto"
              src={logo}
              height={40}
              width={170}
              alt="logo"
            />
          </div>
          <div className="mx-auto my-5 pt-4">
            <ul className="flex justify-center items-center gap-6 lg:gap-10 flex-wrap">
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-194 footer__menu--item">
                <a href="/">Why us?</a>
              </li>
              <li>
                <a>How it works</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li id="menu-item-197">
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Sign up</a>
              </li>
            </ul>
          </div>

          <div className="mx-auto my-3 pt-4">
            <ul className="flex justify-center items-center gap-6 lg:gap-10 flex-wrap">
              <li>
                <FaFacebookF className="text-[#EEAC4A] text-[24px]" />
              </li>
              <li>
                <FaTwitter className="text-[#EEAC4A] text-[24px]" />
              </li>
              <li>
                <FaLinkedinIn className="text-[#EEAC4A] text-[24px]" />
              </li>
              <li>
                <FaInstagram className="text-[#EEAC4A] text-[24px]" />
              </li>
              <li>
                <IoMail className="text-[#EEAC4A] text-[24px]" />
              </li>
            </ul>
          </div>

          <div className="flex justify-between text-white">
            <div>
              <p className="text-[13px]"> @ 2024 trafee.com All rights reserved</p>
            </div>
            <div>
              <p className="underline text-sm">term and conditions</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;