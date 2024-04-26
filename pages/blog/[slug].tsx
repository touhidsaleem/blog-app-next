import DefaultLayout from '@/components/layouts/DefaultLayout';
import { getArticlesById } from '@/query/artliclesQuery';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Slug = () => {
    const [article, setArticle] = useState(null)

    console.log('article', article);

    const router = useRouter()

    const getArticle = async (id) => {
        const result = await getArticlesById(id)
        if (result?.success) {
            setArticle(result?.data)
        } else {
            alert(result?.error)
        }
    }

    useEffect(() => {
        const slugArray = router?.query?.slug?.split(('-'))
        if (slugArray?.length) {
            const id = slugArray[slugArray?.length - 1]
            getArticle(id)
        }
    }, [router?.isReady])

    return (
        <div className=" max-w-2xl mx-auto p-6 xl:p-0">
            <h2 className="text-3xl font-bold">{article?.title}</h2>
            <div>

            </div>
            <div className="w-full h-40 overflow-hidden ">
                <Image src={article?.photo} alt={'Article Image'} width={500} height={500} className="object-cover" />
            </div>
            <article>{article?.desc}</article>
        </div>
    )
}

Slug.getLayout = function getLayout(page: React.ReactNode) {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default Slug