import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import moment from "moment";
import { getArticleData, getSortedArticles } from "@/lib/posts";

export async function generateStaticParams() {
  const articles = await getSortedArticles();
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleData(slug);

  if (!article) return {};

  const description = `Dev Notes — ${article.title}. Notes on ${article.category}.`;

  return {
    title: article.title,
    description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${article.title} | Dev Notes`,
      description,
      url: `https://www.sanchezbarry.com/${slug}`,
      type: "article",
      publishedTime: moment(article.date, "MMMM Do, YYYY").toISOString(),
    },
    twitter: {
      card: "summary",
      title: `${article.title} | Dev Notes`,
      description,
    },
  };
}

const Article = async ({ params } : { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const articleData = await getArticleData(slug)

    // Unknown slug, or a post that is still a draft.
    if (!articleData) notFound()

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: articleData.title,
        articleSection: articleData.category,
        datePublished: moment(articleData.date, "MMMM Do, YYYY").toISOString(),
        author: {
            "@type": "Person",
            name: "Sanchez Barry",
        },
        url: `https://www.sanchezbarry.com/${slug}`,
    };

    return (
        <section className="mt-2 mx-auto w-10/12 md:w-1/2 flex flex-col gap-5">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
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
