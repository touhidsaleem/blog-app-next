import DefaultLayout from "@/components/layouts/DefaultLayout";
import React from "react";

const SignIn = () => {
  return (
    <div
    >
      <div>Sign in</div>
    </div>
  );
};

SignIn.getLayout = function getLayout(page: React.ReactNode) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default SignIn;
