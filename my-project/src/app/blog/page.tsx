import Image from "next/image";
import Hello from "@/components/Hello"
import ComingSoon from "@/components/ComingSoon"
import { getCategorisedArticles } from "../../../lib/articles";
import ArticleItemList from "@/components/ArticleListItem";

export default function Blog() {
  const articles = getCategorisedArticles()
  console.log(articles)
  return <>
  <section className="mx-auto w-11/12 md:w-1/2 pt-20 mt-20 flex flex-col gap-16 mb-20">
    <header className="font-cormorantGaramond font-light text-6xl  text-center">
      <h1>dev notes</h1>
      <p className="text-lg pt-5">Welcome to dev notes! dev notes are scribblings of what I&apos;ve learnt as a software developer.
        I plan to write down my understanding of everything - from the simple stuff like arrays to complex algorithms and data structures.
      </p>
    </header>
    <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
      {articles !== null && 
        Object.keys(articles).map((article) => (
          <ArticleItemList
            category={article}
            articles={articles[article]}
            key={article}
          />
      ))}
    </section>
   </section>
  </>;
}