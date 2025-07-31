import { MetadataRoute } from "next";
import { getBlogPosts } from "~~/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages = [
    {
      url: "https://trapani.sh",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://trapani.sh/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://trapani.sh/youtube",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
  ] satisfies MetadataRoute.Sitemap;

  const postSlugs = getBlogPosts();

  const sitemap = [
    ...defaultPages,
    ...postSlugs.map((e: any) => ({
      url: `https://trapani.sh/blog/${e.slug}`,
      lastModified: new Date(e.metadata.edited || e.metadata.date),
      changeFrequency: "daily" as "daily",
      priority: 0.8,
    })),
  ] satisfies MetadataRoute.Sitemap;

  return sitemap;
}
