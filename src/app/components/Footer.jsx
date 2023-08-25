import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-20 border-t border-gray-100 bg-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/images/giftoLexia.png"
            alt="logo"
            height={50}
            width={50}
          />
          <p className="text-base text-gray-700">
            GiftoLexia 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="">Powered by GiftoLexia Solutions</div>
      </div>
    </footer>
  );
};

export default Footer;
