import Loader from '@/components/modules/Loader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
// import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

type ComponentWithLayout = React.ComponentType & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as ComponentWithLayout).getLayout || ((page: React.ReactNode) => page);

  const content = (
    <Suspense fallback={<Loader />}>
      {/* <div className={`${inter.className} bg-[#FAF9F6] w-full h-screen lg:h-screen lg:overflow-hidden`}> */}
      <div className={`${inter.className} bg-[#FAF9F6] w-full h-auto`}>
        <div className="lg:max-w-7xl mx-auto lg:px-6 xl:pl-0">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </Suspense>
  );

  return getLayout ? getLayout(content) : content;
}
