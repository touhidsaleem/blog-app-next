import React from "react";
import Tabs from "./Tabs";
import Image from "next/image";
import tempImg from "@/public/Frame 23.svg";

type tabData = {
  title: string,
  desc: string,
  categories: [],
  userName: string,
  readTime: number,
}

const BlogCard = ({ data }: any) => {

  const dateObject = new Date(data?.createdAt);


  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDateString = dateObject.toLocaleDateString('en-US', options)
    .replace(/(\w+) (\d+), (\d+)/, (_, month, day, year) => `${month.slice(0, 3)} ${day}, ${year}`);


  return (
    <div className=" select-none cursor-pointer">
      <h6 className="text-secondary text-xs md:text-sm font-light ">{formattedDateString}</h6>
      <div className="flex justify-between w-full lg:h-auto overflow-hidden my-2">
        <div className="flex-[0.6]  pr-0 lg:pr-4 relative">
          <h3 className="text-custom-black text-sm md:text-base lg:text-xl font-bold">
            {data?.title}
          </h3>
          <article className="text-secondary text-xs md:text-sm font-normal mt-2 ">
            {data?.desc?.substring(0, 200) + '...'}
          </article>

        </div>

        <div className="flex-[0.2] min-w-20 h-[100%]   lg:min-w-32 lg:h-32 ">
          <Image
            src={tempImg}
            // src={data?.photo || tempImg}
            alt="Article Image"
            width={500}
            height={500}
            className="w-full h-full lg:ml-auto  object-cover rounded-lg "
          // className="w-full h-40 lg:h-full object-cover"
          />
        </div>
      </div>
      <div className="flex lg:space-x-6 justify-start items-center">
        <div className="">
          <div className="hidden lg:flex items-center gap-4">
            {data?.categories?.slice(0, 2)?.map((tab: string, idx: number) =>
              <Tabs key={idx} label={tab} css="w-max" active={false} />
            )}
          </div>
        </div>
        <h6 className="text-secondary  text-xs md:text-sm font-normal capitalize mr-6 lg:mr-0">By {data?.userName}</h6>
        {data?.readTime &&
          <>
            {/* <div className="w-2 h-2 bg-neutral-500 rounded-full" /> */}
            <h6 className="text-primary-dark  text-xs md:text-sm ">{data?.readTime} min read</h6>
          </>
        }
      </div>
    </div>

  );
};

export default BlogCard;
