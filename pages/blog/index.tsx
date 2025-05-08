import DefaultLayout from "@/components/layouts/DefaultLayout";
import React from "react";

const Article = () => {
  return (
    <div>
      <div>Article</div>
    </div>
  );
};

Article.getLayout = function getLayout(page: React.ReactNode) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Article;
