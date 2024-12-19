import Link from "next/link"
import type { ArticleItem } from "../types"

interface Props {
    category: string
    articles: ArticleItem[]
}

const ArticleItemList = ({ category, articles }: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-cormorantGaramond font-light text-4xl">{category}</h2>
            <div className="flex flex-col gap-2.5 font-poppins text-lg">
                {
                    articles.map((article, id) => (
                        <Link href={`/${article.id}`} key={id} className="text-neutral-200 hover:text-neutral-400 transition duration-150">
                            {article.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}


export default ArticleItemList