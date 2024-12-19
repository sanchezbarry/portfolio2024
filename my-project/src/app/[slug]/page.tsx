import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticleData } from "../../../lib/articles";

const Article = async ({ params } : { params: { slug: string } }) => {
    const articleData = await getArticleData(params.slug)

    return (
        <section className="mt-2 mx-auto w-10/12 md:w-1/2 flex flex-col gap-5">
            <div className="flex justify-between font-poppins">
                <Link href="/blog" className="flex flex-row gap-1 place-items-center">
                    <ArrowLeft width={20} />
                    <span>back</span>
                </Link>
                <p>{articleData.date.toString()}</p>
                {/* <span className="text-neutral-200">{articleData.category}</span> */}
            </div>
            <article 
                className="article"
                dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </section>
    )
}

export default Article