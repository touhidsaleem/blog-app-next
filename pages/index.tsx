import InputWithLabel from "@/components/atoms/InputWithLabel";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import BlogCard from "@/components/modules/BlogCard";
import Tabs from "@/components/modules/Tabs";
import { NextPage } from "next";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
const Home: NextPage = () => {
  return (
    <div className="p-6 lg:p-0">
      <div className="lg:mt-10 pb-6 lg:pb-10 lg:border-b border-secondary ">
        <article className="text-custom-black text-2xl md:text-4xl lg:text-5xl font-bold leading-10">
          Insights from our team
        </article>
        <div className="md:mt-2 lg:mt-4 flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center">
          <article className="text-secondary text-sm md:text-base font-medium  leading-tight lg:leading-none">
            Powerful Trading Tools and Features for Experienced Investors
          </article>

          <InputWithLabel
            placeholder="Search..."
            inputWrapperCss="relative mt-8 lg:mt-0 w-full lg:w-96"
            inputCss=" rounded-3xl pl-10 "
            icon={<IoSearch color="#888888" sixe="16px" />}
            iconCss=" absolute top-[30%] left-5"
          />
        </div>
      </div>
      <div className="lg:my-10 lg:grid lg:grid-cols-12 gap-10">
        {/* left panel */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="flex flex-col justify-center space-y-2 mx-auto w-max h-full">
            <h4 className="text-base font-medium text-primary-dark bg-[#FAF9F6] w-max mb-4">
              Blog Topics
            </h4>
            <Link href={"/"} className="text-custom-black text-sm font-medium ">
              Company
            </Link>
            <Link href={"/"} className="text-custom-black text-sm font-medium ">
              Design
            </Link>
            <Link href={"/"} className="text-custom-black text-sm font-medium ">
              Technology
            </Link>
            <Link href={"/"} className="text-custom-black text-sm font-medium ">
              Crypto
            </Link>
            <Link href={"/"} className="text-custom-black text-sm font-medium ">
              Artificial Intelligence
            </Link>
            <Link href={"/"} className="text-custom-black text-sm font-medium ">
              Work
            </Link>
          </div>
        </div>
        {/* right panel */}
        <div className=" lg:col-span-8 ">
          <div className="relative">
            <div className="border-b border-secondary  w-full absolute top-[50%] lg:border-0" />
            <h4 className="text-base font-medium text-primary-dark bg-[#FAF9F6] w-max pr-2 px-3 relative">
              Trending Topics
            </h4>
          </div>
          <div className="my-4 flex space-x-6 overflow-x-auto no-scrollbar">
            {new Array(10).fill(null).map((_, i) => (
              <Tabs key={i} label="Technology" />
            ))}
          </div>
          <div className="lg:mt-14">
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Home;
