import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ? Component.getLayout : false;

  return (
    <div
      className={`${inter.className}  bg-[#FAF9F6] w-full h-screen overflow-y-auto`}
    >
      {getLayout ? (
        getLayout(
          <div className={`lg:max-w-7xl mx-auto lg:px-6 xl:pl-0`}>
            <main>
              <Component {...pageProps} />
            </main>
          </div>
        )
      ) : (
        <div className={`lg:max-w-7xl mx-auto lg:px-6 xl:pl-0`}>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      )}
    </div>
  );
}
