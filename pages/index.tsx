import InputWithLabel from "@/components/atoms/InputWithLabel";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import BlogCard from "@/components/modules/BlogCard";
import Tabs from "@/components/modules/Tabs";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
// import { IoSearch } from "react-icons/io5";

interface GetLayoutFunction {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
}

type HomeProps = NextPage & GetLayoutFunction;

const Home: HomeProps = () => {
  console.log(process.env.NEXT_PUBLIC_APPLICATION_API_URL);

  return (
    <div className="p-6 lg:p-0">
      <div className="lg:mt-4 pb-6 lg:border-b border-secondary ">
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
            icon={''}
            // icon={<IoSearch color="#888888" sixe="16px" />}
            iconCss=" absolute top-[30%] left-5" inputLabel={""} value={undefined} onchange={() => { }} readOnly={false} multiLine={false} />
        </div>
      </div>
      <div className="lg:my-6 lg:grid lg:grid-cols-12 gap-10">
        {/* left panel */}
        <div className="lg:col-span-4 hidden lg:block overflow-y-auto no-scrollbar lg:h-[27rem] ">
          <div className="space-y-6 h-full">
            <div className="flex flex-col justify-start space-y-2 mx-auto w-max">
              <h4 className="text-base font-medium text-primary-dark bg-[#FAF9F6] w-max mb-4">
                Blog Topics
              </h4>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Company
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Design
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Technology
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Crypto
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Artificial Intelligence
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Work
              </Link>
            </div>
            <div className="flex flex-col justify-start space-y-2 mx-auto w-max">
              <h4 className="text-base font-medium text-primary-dark bg-[#FAF9F6] w-max mb-4">
                Blog Topics
              </h4>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Company
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Design
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Technology
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Crypto
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Artificial Intelligence
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Work
              </Link>
            </div>
            <div className="flex flex-col justify-start space-y-2 mx-auto w-max">
              <h4 className="text-base font-medium text-primary-dark bg-[#FAF9F6] w-max mb-4">
                Blog Topics
              </h4>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Company
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Design
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Technology
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Crypto
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Artificial Intelligence
              </Link>
              <Link
                href={"/"}
                className="text-custom-black text-sm font-medium "
              >
                Work
              </Link>
            </div>
          </div>
        </div>
        {/* right panel */}
        <div className=" lg:col-span-8">
          <div className="relative">
            <div className="border-b border-secondary  w-full absolute top-[50%] lg:border-0" />
            <h4 className="text-base font-medium text-primary-dark bg-[#FAF9F6] w-max pr-2 px-3 relative">
              Trending Topics
            </h4>
          </div>
          <div className="my-4 flex space-x-6 overflow-x-auto no-scrollbar">
            {/* {new Array(10).fill(null).map((_, i) => ( */}
            <Tabs label="Design Thinking" css={""} active={false} />
            <Tabs label="Technology" active css={""} />
            <Tabs label="Web3" css={""} active={false} />
            <Tabs label="Programming" css={""} active={false} />
            <Tabs label="Ai" css={""} active={false} />
            {/* ))} */}
          </div>
          <div className="lg:mt-10 lg:overflow-y-auto lg:h-[20rem] mb-10 lg:mb-0 lg:pr-6">
            {new Array(5).fill(null).map((_, i) => (
              <>
                <BlogCard />
                {i + 1 != 5 && (
                  <div className="w-full border border-secondary my-6 opacity-[30%]" />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
