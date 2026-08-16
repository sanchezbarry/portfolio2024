import { MetadataRoute } from "next";

const BASE_URL = "https://www.sanchezbarry.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin", "/payload-api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
