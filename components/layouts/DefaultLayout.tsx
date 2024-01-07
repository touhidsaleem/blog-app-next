import Footer from "../modules/Footer";
import Header from "../modules/Header";

const DefaultLayout = ({ children }: any) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
