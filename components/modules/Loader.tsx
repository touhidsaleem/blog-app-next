import Image from 'next/image'
import React from 'react'
import loaderSvg from '@/public/loader.svg'

const Loader = () => {
    return (
        <div className='w- h-screen flex justify-center items-center bg-[#FFF] lg:!px-0'>
            <div>
                <Image
                    src={loaderSvg}
                    alt="Loader..."
                    width={100}
                    height={100}
                    className="w-20 h-20 lg:h-full object-cover"
                />
            </div>
        </div>
    )
}

export default Loader