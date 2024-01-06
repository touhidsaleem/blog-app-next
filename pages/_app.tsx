import Header from '@/components/modules/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} container mx-auto `}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
