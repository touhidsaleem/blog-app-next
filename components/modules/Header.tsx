import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    });
  }, []);

  return (
    <nav
      className={`${inter.className
        } flex justify-between items-center p-6 xl:p-0 xl:py-6 bg-[#FAF9F6] sticky top-0 ${stickyNav && "shadow-lg"
        }`}
      style={{ zIndex: 999 }}
    >
      <Link href={"/"} className="flex justify-center items-center">
        {/* logo */}
        <div className="w-8 h-8 z-1 bg-primary-dark rounded-full relative">
          <div className="w-5 h-5 bg-primary absolute rounded-full top-0 left-[20%] z-10" />
        </div>
        <h1 className="text-stone-900 text-2xl font-bold ml-2">Coranu</h1>
      </Link>
      {/* Mv  hamburger icon */}
      <CgMenuRight color="#1C5CFF" size="2rem" className="lg:hidden" />
      {/* Dv nav link */}
      <div className="hidden lg:flex justify-center items-center">
        <div className="space-x-10 mr-20">
          <Link href={"/"} className="text-secondary text-sm font-medium">
            Home
          </Link>
          <Link href={"/"} className="text-secondary text-sm font-medium">
            Market
          </Link>
          <Link
            href={"/blog"}
            className="text-custom-black text-sm font-medium"
          >
            Blog
          </Link>
          <Link href={"/career"} className="text-secondary text-sm font-medium">
            Career
          </Link>
        </div>
        <Button
          btnLabel="Get Started"
          icon={<FaArrowRight color="#FFF" sixe="16px" />} disabled={false} btnCss={""} iconCss={""} onClick={() => { }} />
      </div>
    </nav>
  );
};

export default Header;

{
  /* <DynamicForm
              formLabel={""}
              isEditingEnabled={true}
              // BtnTitle="Save"
              fields={[
                  {
                      key: "details",
                      label: "",
                      isMultiLine: true,
                      isEditable: true,
                      validations: [
                          {
                              key: "required",
                              value: true,
                              message: "This is required field",
                          },
                      ],
                  },
              ]}
              defaultValues={{}}
              // defaultValues={defaultValues}
              // handleClose={handleClose}
              onSubmit={onSubmit} dataKey={''} /> */
}
