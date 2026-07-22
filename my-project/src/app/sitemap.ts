import { MetadataRoute } from "next";
import moment from "moment";
import { getSortedArticles } from "../../lib/articles";

const BASE_URL = "https://www.sanchezbarry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/me`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getSortedArticles().map((article) => ({
    url: `${BASE_URL}/${article.id}`,
    lastModified: moment(article.date, "DD-MM-YYYY").toDate(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...articleRoutes];
}
