import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.piptan.ae/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.piptan.ae/about",
      lastModified: new Date().toISOString(),
    },
    // {
    //   url: "https://www.piptan.ae/services",
    //   lastModified: new Date().toISOString(),
    // },
    {
      url: "https://www.piptan.ae/portfolio",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.piptan.ae/contact",
      lastModified: new Date().toISOString(),
    },
  ];
}
