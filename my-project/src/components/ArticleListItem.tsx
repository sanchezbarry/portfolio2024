import Link from "next/link"
import type { ArticleItem } from "../types"

interface Props {
    category: string
    articles: ArticleItem[]
}

const ArticleItemList = ({ category, articles }: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-light text-4xl">{category}</h2>
            <div className="flex flex-col gap-2.5 text-lg">
                {
                    // Both themes need a colour here: a bare text-neutral-200 sits at
                    // 1.16:1 against the light background, which reads as an empty list.
                    articles.map((article, id) => (
                        <Link href={`/${article.id}`} key={id} className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 transition duration-150">
                            {article.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}


export default ArticleItemList