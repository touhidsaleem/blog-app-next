import Button from "@/components/atoms/Button";
import { useRouter } from "next/router";
import React from "react";

const Custom404 = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen  px-6">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-xl lg:text-5xl font-semibold">
          Ouch, looks like you found our 404 page
        </h1>
        <article className="text-secondary text-xs lg:text-base font-medium mt-4 max-w-2xl">
          {` This is not an error, just an unintentional accident. So, we're pretty
          sure that this is not the page that you were looking for. Apologies
          from Team Coranu.`}
        </article>
        <Button
          btnLabel="Go Home"
          onClick={() => router.push("/")}
          btnCss="mt-6 text-xs lg:text-sm" disabled={false} icon={undefined} iconCss={""} />
      </div>
    </div>
  );
};

export default Custom404;
