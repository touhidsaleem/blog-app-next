import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center h-10 fixed left-0 bottom-0 bg-[#FAF9F6]">
      <div className="text-sm lg:text-base">
        Made with ❤️ by{" "}
        <Link
          href={"https://www.linkedin.com/in/touhidsaleem/"}
          className="text-primary-dark"
        >
          Touhid
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
