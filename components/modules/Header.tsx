import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";
import Navlinks from "@/jsonData/Navlinks";
import MobileSidebar from "./MobileSidebar";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const router = useRouter();

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
    <>
      <nav
        className={`${inter.className
          }  bg-[#FAF9F6] sticky top-0 mx-auto z-10 ${stickyNav && "shadow-lg"
          }`}
        style={{ zIndex: 999 }}
      >
        <div className="flex justify-between items-center p-6 xl:p-0 xl:py-6 max-w-7xl mx-auto">

          <Link href={"/"} className="flex justify-center items-center">
            {/* logo */}
            <div className="w-8 h-8 z-1 bg-primary-dark rounded-full relative">
              <div className="w-5 h-5 bg-primary absolute rounded-full top-0 left-[20%] z-10" />
            </div>
            <h1 className="text-stone-900 text-2xl font-bold ml-2">PenSpace</h1>
          </Link>
          {/* Mv  hamburger icon */}
          <CgMenuRight
            color="#1C5CFF"
            size="2rem"
            className="lg:hidden"
            onClick={() => setSidebar(true)}
          />
          {/* Dv nav link */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="space-x-10 mr-20">
              {Navlinks?.map((data, idx) => (
                <Link
                  href={data?.path}
                  key={idx}
                  className={` text-sm font-medium ${data?.path == router.pathname ? "text-custom-black" : "text-secondary"
                    }`}
                >
                  {data?.title}
                </Link>
              ))}
            </div>
            {router.pathname != "/signin" && (
              <Button
                btnLabel="Get Started"
                icon={<FaArrowRight color="#FFF" sixe="14px" />}
                disabled={false}
                btnCss={""}
                iconCss={""}
                onClick={() => router.push("/signin")}
              />
            )}
          </div>
        </div>
      </nav>


      {/* Mobile Side Bar */}
      <MobileSidebar sidebar={sidebar} handleClose={() => setSidebar(false)} />
    </>
  );
};

export default Header;
