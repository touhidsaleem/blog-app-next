import Footer from "../modules/Footer";
import Header from "../modules/Header";

const DefaultLayout = ({ children }: any) => {
  return (
    <div className=" bg-[#FAF9F6] lg:h-screen lg:overflow-hidden">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
