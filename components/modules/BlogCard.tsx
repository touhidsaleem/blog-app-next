import React from "react";
import Tabs from "./Tabs";
import Image from "next/image";
import tempImg from "@/public/Frame 23.svg";

const BlogCard = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row ">
      <div className=" flex-[0.6] pr-0 lg:pr-4 mt-6 lg:mt-0">
        <h6 className="text-primary-dark">Mar 1</h6>
        <h3 className="text-custom-black text-2xl font-bold my-4">
          Powerful Trading Tools and Features for Experienced Investors
        </h3>
        <article className="text-secondary text-sm font-normal mb-4">
          I’m always trying to think of new and interesting business ideas. I
          generally try to come up with ideas by thinking of what I would want
          to do or see in the world. Then, I try to find reasons why it wouldn’t
          work...
        </article>
        <div className="flex items-center space-x-6">
          <Tabs label="Tools" css="w-max" />
          <h6 className="text-secondary text-sm font-normal">By Mark Tuchel</h6>
          <div className="w-2 h-2 bg-neutral-500 rounded-full" />
          <h6 className="text-primary-dark">7 min read</h6>
        </div>
      </div>
      <div className=" w-full flex-[0.4] ">
        <Image
          src={tempImg}
          alt="Article Image"
          width={500}
          height={500}
          className="w-full h-40 lg:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BlogCard;
