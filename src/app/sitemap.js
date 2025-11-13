export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
  const locales = ["en", "es"]; // add or remove supported locales

  const routes = [
    "",
    "advantages",
    "our-story",
    "bathroom-remodel",
    "shower-solutions",
    "bathtub-solutions",
    "kitchen-solutions",
    "basement-solutions",
    "gallery",
    "before-after",
    "buying-guide",
    "maintenance-tips",
    "installation-process",
    "design",
    "privacy-policy",
    "terms-and-conditions",
  ];

  const pages = [];

  for (const locale of locales) {
    for (const route of routes) {
      const path = route ? `/${locale}/${route}` : `/${locale}`;
      pages.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return pages;
}
