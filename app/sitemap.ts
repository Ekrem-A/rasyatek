import type { MetadataRoute } from "next";

const SITE_URL = "https://www.rasyatek.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["tr", "en"] as const;

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/hakkimizda", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/degerler", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/vizyon-misyon", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/hizmetler", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/urunler", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  );
}
