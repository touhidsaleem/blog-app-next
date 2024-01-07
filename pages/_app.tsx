import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
// import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

type ComponentWithLayout = React.ComponentType & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as ComponentWithLayout).getLayout || ((page: React.ReactNode) => page);

  const content = (
    <div className={`${inter.className} bg-[#FAF9F6] w-full h-full lg:h-screen lg:overflow-hidden`}>
      <div className="lg:max-w-7xl mx-auto lg:px-6 xl:pl-0">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );

  return getLayout ? getLayout(content) : content;
}
