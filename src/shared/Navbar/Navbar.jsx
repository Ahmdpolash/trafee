"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheck } from "react-icons/bs";
import Container from "@/components/container/Container";
import Link from "next/link";
import logo from "@/assest/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navList = (
    <>
      <Link href="/" className="lg:ml-4">
        Verticals
      </Link>
      <Link href="/about" className="lg:ml-4">
        Why us?
      </Link>
      <Link href="/contact" className="lg:ml-4">
        How it works
      </Link>
      <Link href="/services" className="lg:ml-4">
        About us
      </Link>
    </>
  );

  return (
    <Container>
      <div className="flex justify-between items-center">
        <div className="logo">
          <Image src={logo} height={40} width={170} alt="logo" />
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:block">
          <ul className="lg:flex lg:gap-4 text-white tracking-wide text-[16px]">
            {navList}
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } lg:hidden fixed transition-all duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform h-full w-[350px] bg-white text-black  top-0 left-0`}
        >
          <button
            className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
            onClick={() => setOpen(false)}
          >
            <RxCross1 />
          </button>

          <ul className="flex  flex-col p-5 gap-5 text-[18px]">{navList}</ul>
        </div>

        <div className="flex items-center">
          <button className="hidden lg:block lg:ml-4 text-[#FAAF40]  font-medium txt py-[8px]">
            Sign up
          </button>
          <button className="hidden lg:block lg:ml-4 txt text-[#FAAF40] border-2 border-[#FAAF40] rounded-md  px-6 font-medium py-[6px]">
            Log In
          </button>
          <IoMdMenu
            className="text-2xl cursor-pointer lg:hidden ml-4"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
