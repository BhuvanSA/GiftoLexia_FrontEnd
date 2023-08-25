"use client";
import React from "react";
import Link from "next/link";
import GiftoLexiaLogo from "/public/images/giftoLexia.png";
import Image from "next/image";
import { BsLinkedin, BsFacebook, BsEnvelopeFill } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <nav className="border-gray-200 bg-gray-100">
        <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 px-20">
          <a href="https://giftolexia.com/" className="flex items-center">
            <Image
              src={GiftoLexiaLogo}
              className="mr-1"
              alt="GiftoLexia Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
              GiftoLexia
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            {/* Add NavLinks ul Here */}
            <ul className="flex flex-row">
              <li className="">
                <Link
                  href="https://www.linkedin.com/company/giftolexia/"
                  className=""
                  target="_blank"
                >
                  <div className="m-3 p-3 hover:bg-[#0072b1] rounded-2xl transition-all flex">
                    <BsLinkedin href="" />
                  </div>
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://www.facebook.com/giftolexia"
                  className=""
                  target="_blank"
                >
                  <div className="m-3 p-3 hover:bg-[#1877F2] rounded-2xl transition-all flex">
                    <BsFacebook />
                  </div>
                </Link>
              </li>
              <li className="">
                <Link
                  href="mailto:info@giftolexia.com"
                  className=""
                  target="_blank"
                >
                  <div className="m-3 p-3 hover:bg-[#AAA] rounded-2xl transition-all flex">
                    <BsEnvelopeFill />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
